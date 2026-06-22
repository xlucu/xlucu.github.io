import { useState, useEffect } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Eye, EyeSlash, EnvelopeSimple, ArrowLeft, Key } from '@phosphor-icons/react'
import { toast } from 'sonner'
import AdminPanel from './AdminPanel'

const ADMIN_EMAIL = 'mohamadyahia209@gmail.com'
const INITIAL_ADMIN_PASSWORD = 'Mm12345#'

type ViewMode = 'login' | 'forgot-password' | 'reset-password'

export default function AdminLogin() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [viewMode, setViewMode] = useState<ViewMode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [resetCode, setResetCode] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])
  
  const [storedPassword, setStoredPassword] = useKV<string>('admin-password', INITIAL_ADMIN_PASSWORD)
  const [generatedResetCode, setGeneratedResetCode] = useKV<string | null>('admin-reset-code', null)
  const [resetCodeExpiry, setResetCodeExpiry] = useKV<number | null>('admin-reset-code-expiry', null)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setKeySequence(prev => {
        const newSequence = [...prev, e.key].slice(-5)
        if (newSequence.join('').toLowerCase() === 'admin') {
          setIsOpen(true)
          return []
        }
        return newSequence
      })
    }

    const handleLogoClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('.admin-trigger')) {
        setIsOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    window.addEventListener('click', handleLogoClick)
    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      window.removeEventListener('click', handleLogoClick)
    }
  }, [])

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()
    
    if (trimmedEmail === ADMIN_EMAIL && trimmedPassword === storedPassword) {
      setIsAuthenticated(true)
      toast.success('تم تسجيل الدخول بنجاح!')
    } else {
      if (trimmedEmail !== ADMIN_EMAIL) {
        toast.error('البريد الإلكتروني غير صحيح')
      } else {
        toast.error('كلمة المرور غير صحيحة')
      }
      setPassword('')
    }
  }

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault()
    
    const trimmedEmail = email.trim()
    
    if (trimmedEmail !== ADMIN_EMAIL) {
      toast.error('البريد الإلكتروني غير مسجل')
      return
    }

    const code = Math.random().toString(36).substring(2, 8).toUpperCase()
    const expiry = Date.now() + 15 * 60 * 1000
    
    setGeneratedResetCode(code)
    setResetCodeExpiry(expiry)
    
    toast.success(`رمز إعادة التعيين: ${code}`, {
      description: 'صالح لمدة 15 دقيقة',
      duration: 10000
    })
    
    setViewMode('reset-password')
  }

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault()
    
    const trimmedCode = resetCode.trim().toUpperCase()
    const trimmedNewPassword = newPassword.trim()
    const trimmedConfirmPassword = confirmPassword.trim()
    
    if (!resetCodeExpiry || Date.now() > resetCodeExpiry) {
      toast.error('انتهت صلاحية رمز إعادة التعيين')
      setViewMode('forgot-password')
      setResetCode('')
      setNewPassword('')
      setConfirmPassword('')
      setGeneratedResetCode(null)
      setResetCodeExpiry(null)
      return
    }
    
    if (trimmedCode !== generatedResetCode) {
      toast.error('رمز إعادة التعيين غير صحيح')
      return
    }
    
    if (trimmedNewPassword.length < 6) {
      toast.error('كلمة المرور يجب أن تكون 6 أحرف على الأقل')
      return
    }
    
    if (trimmedNewPassword !== trimmedConfirmPassword) {
      toast.error('كلمتا المرور غير متطابقتين')
      return
    }
    
    setStoredPassword(trimmedNewPassword)
    setGeneratedResetCode(null)
    setResetCodeExpiry(null)
    
    toast.success('تم تغيير كلمة المرور بنجاح!')
    
    setViewMode('login')
    setEmail('')
    setPassword('')
    setResetCode('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleClose = () => {
    setIsOpen(false)
    setIsAuthenticated(false)
    setViewMode('login')
    setEmail('')
    setPassword('')
    setResetCode('')
    setNewPassword('')
    setConfirmPassword('')
    setShowPassword(false)
    setShowNewPassword(false)
    setShowConfirmPassword(false)
  }

  const handleBackToLogin = () => {
    setViewMode('login')
    setEmail('')
    setPassword('')
    setResetCode('')
    setNewPassword('')
    setConfirmPassword('')
  }

  if (!isOpen) return null

  if (isAuthenticated) {
    return <AdminPanel onClose={handleClose} />
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              {viewMode === 'login' ? (
                <Lock className="h-8 w-8 text-primary" weight="duotone" />
              ) : viewMode === 'forgot-password' ? (
                <EnvelopeSimple className="h-8 w-8 text-primary" weight="duotone" />
              ) : (
                <Key className="h-8 w-8 text-primary" weight="duotone" />
              )}
            </div>
          </div>
          <CardTitle className="text-2xl text-center">
            {viewMode === 'login' 
              ? 'لوحة التحكم الإدارية' 
              : viewMode === 'forgot-password'
              ? 'نسيت كلمة المرور'
              : 'إعادة تعيين كلمة المرور'
            }
          </CardTitle>
          <CardDescription className="text-center">
            {viewMode === 'login'
              ? 'يرجى تسجيل الدخول للوصول إلى لوحة التحكم'
              : viewMode === 'forgot-password'
              ? 'أدخل بريدك الإلكتروني لإرسال رمز إعادة التعيين'
              : 'أدخل الرمز وكلمة المرور الجديدة'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {viewMode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-email">البريد الإلكتروني</Label>
                <Input
                  id="admin-email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="admin-password">كلمة المرور</Label>
                  <button
                    type="button"
                    onClick={() => {
                      setViewMode('forgot-password')
                      setPassword('')
                    }}
                    className="text-xs text-primary hover:underline"
                  >
                    نسيت كلمة المرور؟
                  </button>
                </div>
                <div className="relative">
                  <Input
                    id="admin-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeSlash className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  تسجيل الدخول
                </Button>
                <Button type="button" variant="outline" onClick={handleClose}>
                  إلغاء
                </Button>
              </div>
            </form>
          )}

          {viewMode === 'forgot-password' && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="forgot-email">البريد الإلكتروني</Label>
                <Input
                  id="forgot-email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  إرسال رمز التحقق
                </Button>
                <Button type="button" variant="outline" onClick={handleBackToLogin}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}

          {viewMode === 'reset-password' && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="reset-code">رمز التحقق</Label>
                <Input
                  id="reset-code"
                  type="text"
                  placeholder="أدخل الرمز المكون من 6 أحرف"
                  value={resetCode}
                  onChange={(e) => setResetCode(e.target.value.toUpperCase())}
                  required
                  maxLength={6}
                  className="text-center text-lg tracking-widest font-mono"
                />
                <p className="text-xs text-muted-foreground text-center">
                  الرمز صالح لمدة 15 دقيقة
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">كلمة المرور الجديدة</Label>
                <div className="relative">
                  <Input
                    id="new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    minLength={6}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showNewPassword ? (
                      <EyeSlash className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={6}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeSlash className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  تغيير كلمة المرور
                </Button>
                <Button type="button" variant="outline" onClick={handleBackToLogin}>
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
