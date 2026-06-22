import { useEffect, useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Eye, 
  Users, 
  MouseSimple, 
  TrendUp, 
  Calendar,
  Clock,
  Globe,
  DeviceMobile,
  Desktop,
  ChatCircleDots
} from '@phosphor-icons/react'

type AnalyticsData = {
  totalVisits: number
  totalClicks: number
  uniqueVisitors: number
  pageViews: number
  averageSessionDuration: number
  bounceRate: number
  mobileVisitors: number
  desktopVisitors: number
  contactFormSubmissions: number
  whatsappClicks: number
  registrationRequests: number
  lastUpdated: string
  visitsByDay: { day: string; visits: number }[]
  topPages: { page: string; views: number }[]
}

export default function AnalyticsPanel() {
  const [analyticsData, setAnalyticsData] = useKV<AnalyticsData>('site-analytics', {
    totalVisits: 0,
    totalClicks: 0,
    uniqueVisitors: 0,
    pageViews: 0,
    averageSessionDuration: 0,
    bounceRate: 0,
    mobileVisitors: 0,
    desktopVisitors: 0,
    contactFormSubmissions: 0,
    whatsappClicks: 0,
    registrationRequests: 0,
    lastUpdated: new Date().toISOString(),
    visitsByDay: [],
    topPages: []
  })

  const [sessionData, setSessionData] = useState({
    currentVisit: 0,
    sessionStart: Date.now()
  })

  useEffect(() => {
    const recordVisit = () => {
      const now = new Date()
      const today = now.toLocaleDateString('ar-EG', { weekday: 'long' })
      
      setAnalyticsData((current) => {
        if (!current) return {
          totalVisits: 1,
          totalClicks: 0,
          uniqueVisitors: 1,
          pageViews: 1,
          averageSessionDuration: 0,
          bounceRate: 0,
          mobileVisitors: navigator.userAgent.match(/Mobile|Android|iPhone/i) ? 1 : 0,
          desktopVisitors: navigator.userAgent.match(/Mobile|Android|iPhone/i) ? 0 : 1,
          contactFormSubmissions: 0,
          whatsappClicks: 0,
          registrationRequests: 0,
          lastUpdated: now.toISOString(),
          visitsByDay: [{ day: today, visits: 1 }],
          topPages: [{ page: 'الصفحة الرئيسية', views: 1 }]
        }

        const isMobile = navigator.userAgent.match(/Mobile|Android|iPhone/i)
        const visitsByDay = [...current.visitsByDay]
        const todayIndex = visitsByDay.findIndex(v => v.day === today)
        
        if (todayIndex >= 0) {
          visitsByDay[todayIndex].visits += 1
        } else {
          visitsByDay.push({ day: today, visits: 1 })
        }

        if (visitsByDay.length > 7) {
          visitsByDay.shift()
        }

        return {
          ...current,
          totalVisits: current.totalVisits + 1,
          pageViews: current.pageViews + 1,
          uniqueVisitors: current.uniqueVisitors + 1,
          mobileVisitors: isMobile ? current.mobileVisitors + 1 : current.mobileVisitors,
          desktopVisitors: !isMobile ? current.desktopVisitors + 1 : current.desktopVisitors,
          lastUpdated: now.toISOString(),
          visitsByDay
        }
      })
    }

    const hasVisited = sessionStorage.getItem('visited')
    if (!hasVisited) {
      recordVisit()
      sessionStorage.setItem('visited', 'true')
    }

    const handleClick = () => {
      setAnalyticsData((current) => {
        if (!current) return {
          totalVisits: 0,
          totalClicks: 1,
          uniqueVisitors: 0,
          pageViews: 0,
          averageSessionDuration: 0,
          bounceRate: 0,
          mobileVisitors: 0,
          desktopVisitors: 0,
          contactFormSubmissions: 0,
          whatsappClicks: 0,
          registrationRequests: 0,
          lastUpdated: new Date().toISOString(),
          visitsByDay: [],
          topPages: []
        }
        return {
          ...current,
          totalClicks: current.totalClicks + 1
        }
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [setAnalyticsData])

  useEffect(() => {
    const recordWhatsAppClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href*="wa.me"]')
      if (link) {
        setAnalyticsData((current) => {
          if (!current) return {
            totalVisits: 0,
            totalClicks: 0,
            uniqueVisitors: 0,
            pageViews: 0,
            averageSessionDuration: 0,
            bounceRate: 0,
            mobileVisitors: 0,
            desktopVisitors: 0,
            contactFormSubmissions: 0,
            whatsappClicks: 1,
            registrationRequests: 0,
            lastUpdated: new Date().toISOString(),
            visitsByDay: [],
            topPages: []
          }
          return {
            ...current,
            whatsappClicks: current.whatsappClicks + 1
          }
        })
      }
    }

    document.addEventListener('click', recordWhatsAppClick)
    return () => document.removeEventListener('click', recordWhatsAppClick)
  }, [setAnalyticsData])

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ar-EG').format(num)
  }

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs.toString().padStart(2, '0')}`
  }

  const calculatePercentage = (value: number, total: number) => {
    if (total === 0) return 0
    return Math.round((value / total) * 100)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-black flex items-center gap-3">
            <TrendUp size={32} weight="fill" className="text-primary" />
            لوحة الإحصائيات
          </CardTitle>
          <CardDescription className="text-base">
            آخر تحديث: {new Date(analyticsData?.lastUpdated || Date.now()).toLocaleString('ar-EG', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-blue-700 flex items-center gap-2">
              <Eye size={20} weight="fill" />
              إجمالي الزيارات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-blue-900">{formatNumber(analyticsData?.totalVisits || 0)}</div>
            <p className="text-xs text-blue-600 mt-2 flex items-center gap-1">
              <TrendUp size={14} weight="bold" />
              منذ إطلاق الموقع
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-green-700 flex items-center gap-2">
              <Users size={20} weight="fill" />
              الزوار الفريدون
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-green-900">{formatNumber(analyticsData?.uniqueVisitors || 0)}</div>
            <p className="text-xs text-green-600 mt-2">زائر جديد</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-purple-700 flex items-center gap-2">
              <MouseSimple size={20} weight="fill" />
              إجمالي النقرات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-purple-900">{formatNumber(analyticsData?.totalClicks || 0)}</div>
            <p className="text-xs text-purple-600 mt-2">نقرة في الموقع</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-orange-700 flex items-center gap-2">
              <Globe size={20} weight="fill" />
              مشاهدات الصفحات
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-orange-900">{formatNumber(analyticsData?.pageViews || 0)}</div>
            <p className="text-xs text-orange-600 mt-2">صفحة تمت مشاهدتها</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-2 border-pink-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-pink-700 flex items-center gap-2">
              <ChatCircleDots size={20} weight="fill" />
              نقرات واتساب
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-pink-900">{formatNumber(analyticsData?.whatsappClicks || 0)}</div>
            <p className="text-xs text-pink-600 mt-2">محاولة تواصل</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-cyan-700 flex items-center gap-2">
              <Calendar size={20} weight="fill" />
              طلبات التسجيل
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black text-cyan-900">{formatNumber(analyticsData?.contactFormSubmissions || 0)}</div>
            <p className="text-xs text-cyan-600 mt-2">طلب تسجيل</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-black flex items-center gap-2">
              <DeviceMobile size={24} weight="fill" className="text-primary" />
              توزيع الأجهزة
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <DeviceMobile size={20} weight="fill" className="text-blue-500" />
                    <span className="font-bold">الهاتف المحمول</span>
                  </div>
                  <span className="font-black text-blue-600">
                    {formatNumber(analyticsData?.mobileVisitors || 0)} ({calculatePercentage(analyticsData?.mobileVisitors || 0, (analyticsData?.mobileVisitors || 0) + (analyticsData?.desktopVisitors || 0))}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-blue-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${calculatePercentage(analyticsData?.mobileVisitors || 0, (analyticsData?.mobileVisitors || 0) + (analyticsData?.desktopVisitors || 0))}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Desktop size={20} weight="fill" className="text-purple-500" />
                    <span className="font-bold">الكمبيوتر</span>
                  </div>
                  <span className="font-black text-purple-600">
                    {formatNumber(analyticsData?.desktopVisitors || 0)} ({calculatePercentage(analyticsData?.desktopVisitors || 0, (analyticsData?.mobileVisitors || 0) + (analyticsData?.desktopVisitors || 0))}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-purple-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${calculatePercentage(analyticsData?.desktopVisitors || 0, (analyticsData?.mobileVisitors || 0) + (analyticsData?.desktopVisitors || 0))}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-black flex items-center gap-2">
              <Calendar size={24} weight="fill" className="text-accent" />
              الزيارات خلال 7 أيام
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {(analyticsData?.visitsByDay || []).slice(-7).map((day, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm">{day.day}</span>
                    <span className="font-black text-accent">{formatNumber(day.visits)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${calculatePercentage(
                          day.visits, 
                          Math.max(...(analyticsData?.visitsByDay || []).map(d => d.visits), 1)
                        )}%` 
                      }}
                    ></div>
                  </div>
                </div>
              ))}
              {(analyticsData?.visitsByDay?.length || 0) === 0 && (
                <p className="text-center text-muted-foreground py-4">لا توجد بيانات بعد</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
        <CardHeader>
          <CardTitle className="text-xl font-black">ملخص الأداء</CardTitle>
          <CardDescription>نظرة عامة على أداء الموقع</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-1">
                {calculatePercentage(analyticsData?.mobileVisitors || 0, analyticsData?.totalVisits || 1)}%
              </div>
              <div className="text-sm text-muted-foreground">زوار الموبايل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-accent mb-1">
                {formatNumber((analyticsData?.totalClicks || 0) / Math.max(analyticsData?.totalVisits || 1, 1))}
              </div>
              <div className="text-sm text-muted-foreground">متوسط النقرات/زيارة</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-primary mb-1">
                {calculatePercentage(analyticsData?.whatsappClicks || 0, analyticsData?.totalVisits || 1)}%
              </div>
              <div className="text-sm text-muted-foreground">معدل التحويل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black text-accent mb-1">
                {formatNumber((analyticsData?.pageViews || 0) / Math.max(analyticsData?.uniqueVisitors || 1, 1))}
              </div>
              <div className="text-sm text-muted-foreground">صفحات/زائر</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
