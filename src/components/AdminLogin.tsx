import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lock, Eye, EyeSlash } from '@phosphor-icons/react'
import { toast } from 'sonner'
import AdminPanel from './AdminPanel'

const ADMIN_EMAIL = 'mohamadyahia209@gmail.com'
const ADMIN_PASSWORD = 'Mm12345#'

export default function AdminLogin() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [keySequence, setKeySequence] = useState<string[]>([])

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
    
    if (trimmedEmail === ADMIN_EMAIL && trimmedPassword === ADMIN_PASSWORD) {
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

  const handleClose = () => {
    setIsOpen(false)
    setIsAuthenticated(false)
    setEmail('')
    setPassword('')
    setShowPassword(false)
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
              <Lock className="h-8 w-8 text-primary" weight="duotone" />
            </div>
          </div>
          <CardTitle className="text-2xl text-center">لوحة التحكم الإدارية</CardTitle>
          <CardDescription className="text-center">
            يرجى تسجيل الدخول للوصول إلى لوحة التحكم
          </CardDescription>
        </CardHeader>
        <CardContent>
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
              <Label htmlFor="admin-password">كلمة المرور</Label>
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
        </CardContent>
      </Card>
    </div>
  )
}
