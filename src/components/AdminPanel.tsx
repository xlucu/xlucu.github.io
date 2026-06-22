import { useState } from 'react'
import { useKV } from '@github/spark/hooks'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { X, FloppyDisk, Trash, Plus, Image as ImageIcon } from '@phosphor-icons/react'
import { toast } from 'sonner'

interface AdminPanelProps {
  onClose: () => void
}

type HeroData = {
  title: string
  subtitle: string
  ctaText: string
}

type AchievementsData = {
  students: number
  championships: number
  coaches: number
  satisfaction: number
}

type Category = {
  id: string
  name: string
  ageRange: string
  days: string
  price: string
  description: string
}

type Offering = {
  icon: string
  title: string
  description: string
}

type Star = {
  id: number
  name: string
  age: string
  achievement: string
  description: string
}

type ContactData = {
  whatsapp: string
  location: string
  schedule: string
  mapUrl: string
}

type SocialData = {
  facebook: string
  instagram: string
  tiktok: string
}

type Testimonial = {
  id: number
  name: string
  text: string
  rating: number
}

type GalleryImage = {
  id: number
  src: string
  alt: string
  category: "academy" | "field" | "training"
}

export default function AdminPanel({ onClose }: AdminPanelProps) {
  const [heroData, setHeroData] = useKV<HeroData>('admin-hero', {
    title: 'اصنع من موهبتك بطل ملعب',
    subtitle: 'تدريب كرة قدم احترافي لجميع الأعمار مع مدربين معتمدين',
    ctaText: 'سجل الآن'
  })

  const [achievementsData, setAchievementsData] = useKV<AchievementsData>('admin-achievements', {
    students: 500,
    championships: 15,
    coaches: 12,
    satisfaction: 98
  })

  const [categoriesData, setCategoriesData] = useKV<Category[]>('admin-categories', [
    {
      id: 'sprouts',
      name: 'البراعم',
      ageRange: '6-10 سنوات',
      days: '3 أيام بالأسبوع',
      price: '40$',
      description: 'تعليم المهارات الأساسية وتطوير القدرات البدنية في جو ممتع'
    },
    {
      id: 'juniors',
      name: 'الناشئين',
      ageRange: '11-15 سنة',
      days: '4 أيام بالأسبوع',
      price: '50$',
      description: 'تطوير المهارات التكتيكية والتقنية مع التركيز على روح الفريق'
    },
    {
      id: 'youth',
      name: 'الشباب',
      ageRange: '16+ سنة',
      days: '4 أيام بالأسبوع',
      price: '60$',
      description: 'برنامج احترافي متقدم للوصول إلى مستويات عالية'
    }
  ])

  const [offeringsData, setOfferingsData] = useKV<Offering[]>('admin-offerings', [
    { icon: 'barbell', title: 'تدريب مهارات + لياقة بدنية', description: 'برامج تدريب متكاملة تطور المهارات الفنية والقدرات البدنية' },
    { icon: 'trophy', title: 'مباريات ودية كل أسبوع', description: 'مباريات تنافسية منتظمة لتطبيق المهارات المكتسبة' },
    { icon: 'chart-line', title: 'تقييم شهري لمستوى اللاعب', description: 'متابعة دقيقة لتطور كل لاعب مع تقارير مفصلة' },
    { icon: 'grass', title: 'ملعب عشبي طبيعي', description: 'مرافق احترافية بمواصفات عالمية' }
  ])

  const [starsData, setStarsData] = useKV<Star[]>('admin-stars', [
    {
      id: 1,
      name: 'أحمد الخليل',
      age: '19 سنة',
      achievement: 'انتقل للعب في نادي الوحدة',
      description: 'بدأ رحلته معنا في فئة الناشئين وتطور ليصبح من أفضل اللاعبين'
    },
    {
      id: 2,
      name: 'محمد السيد',
      age: '18 سنة',
      achievement: 'انتقل للعب في نادي الجيش',
      description: 'لاعب متميز تخرج من أكاديميتنا وحقق إنجازات كبيرة'
    },
    {
      id: 3,
      name: 'علي حسن',
      age: '20 سنة',
      achievement: 'انتقل للعب في نادي الاتحاد',
      description: 'موهبة استثنائية انتقلت إلى مستويات احترافية عالية'
    }
  ])

  const [contactData, setContactData] = useKV<ContactData>('admin-contact', {
    whatsapp: '0982035983',
    location: 'Maarret el Mesrine, Idlib',
    schedule: '4 العصر لـ 8 بالليل، كل الأيام عدا الجمعة',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.234567890123!2d36.5!3d36.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAwJzAwLjAiTiAzNsKwMzAnMDAuMCJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s'
  })

  const [socialData, setSocialData] = useKV<SocialData>('admin-social', {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    tiktok: 'https://tiktok.com'
  })

  const [testimonialsData, setTestimonialsData] = useKV<Testimonial[]>('admin-testimonials', [
    {
      id: 1,
      name: 'أبو أحمد',
      text: 'ابني تحسن كثيراً منذ انضمامه للأكاديمية. المدربون محترفون والاهتمام فردي بكل لاعب.',
      rating: 5
    },
    {
      id: 2,
      name: 'أم محمد',
      text: 'أكاديمية رائعة، أولادي يحبون التدريبات والأجواء ممتازة. ننصح فيها بشدة!',
      rating: 5
    },
    {
      id: 3,
      name: 'أبو علي',
      text: 'المستوى التدريبي عالي جداً والملاعب نظيفة. ابني تطور بشكل ملحوظ.',
      rating: 5
    },
    {
      id: 4,
      name: 'أم حسن',
      text: 'التزام واحترافية في التعامل. المدربون يهتمون بتطوير كل لاعب.',
      rating: 5
    },
    {
      id: 5,
      name: 'أبو خالد',
      text: 'أسعار معقولة وخدمات ممتازة. ابني سعيد جداً بالتدريبات.',
      rating: 5
    },
    {
      id: 6,
      name: 'أم عمر',
      text: 'تجربة رائعة لأولادي، تعلموا الانضباط والالتزام مع كرة القدم.',
      rating: 5
    }
  ])

  const [galleryData, setGalleryData] = useKV<GalleryImage[]>('admin-gallery', [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=600&fit=crop",
      alt: "ملعب الأكاديمية - منظر عام",
      category: "field"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
      alt: "تدريب البراعم",
      category: "training"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=600&fit=crop",
      alt: "الملعب العشبي الطبيعي",
      category: "field"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&h=600&fit=crop",
      alt: "تدريب الناشئين",
      category: "training"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop",
      alt: "مبنى الأكاديمية",
      category: "academy"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop",
      alt: "مباراة ودية",
      category: "training"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop",
      alt: "الملعب ليلاً",
      category: "field"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
      alt: "تدريب جماعي",
      category: "training"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop",
      alt: "مرافق الأكاديمية",
      category: "academy"
    }
  ])

  const handleSave = (message: string) => {
    toast.success(message)
  }

  const addCategory = () => {
    setCategoriesData((current) => [...(current || []), {
      id: `cat-${Date.now()}`,
      name: 'فئة جديدة',
      ageRange: '',
      days: '',
      price: '',
      description: ''
    }])
  }

  const updateCategory = (index: number, field: keyof Category, value: string) => {
    setCategoriesData((current) => {
      const updated = [...(current || [])]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const deleteCategory = (index: number) => {
    setCategoriesData((current) => (current || []).filter((_, i) => i !== index))
    toast.success('تم حذف الفئة بنجاح')
  }

  const addOffering = () => {
    setOfferingsData((current) => [...(current || []), {
      icon: 'star',
      title: 'ميزة جديدة',
      description: ''
    }])
  }

  const updateOffering = (index: number, field: keyof Offering, value: string) => {
    setOfferingsData((current) => {
      const updated = [...(current || [])]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const deleteOffering = (index: number) => {
    setOfferingsData((current) => (current || []).filter((_, i) => i !== index))
    toast.success('تم حذف الميزة بنجاح')
  }

  const addStar = () => {
    setStarsData((current) => [...(current || []), {
      id: Date.now(),
      name: 'اسم اللاعب',
      age: '',
      achievement: '',
      description: ''
    }])
  }

  const updateStar = (index: number, field: keyof Star, value: string | number) => {
    setStarsData((current) => {
      const updated = [...(current || [])]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const deleteStar = (index: number) => {
    setStarsData((current) => (current || []).filter((_, i) => i !== index))
    toast.success('تم حذف اللاعب بنجاح')
  }

  const addTestimonial = () => {
    setTestimonialsData((current) => [...(current || []), {
      id: Date.now(),
      name: 'اسم ولي الأمر',
      text: '',
      rating: 5
    }])
  }

  const updateTestimonial = (index: number, field: keyof Testimonial, value: string | number) => {
    setTestimonialsData((current) => {
      const updated = [...(current || [])]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const deleteTestimonial = (index: number) => {
    setTestimonialsData((current) => (current || []).filter((_, i) => i !== index))
    toast.success('تم حذف التقييم بنجاح')
  }

  const addGalleryImage = () => {
    setGalleryData((current) => [...(current || []), {
      id: Date.now(),
      src: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=600&fit=crop',
      alt: 'صورة جديدة',
      category: 'field'
    }])
  }

  const updateGalleryImage = (index: number, field: keyof GalleryImage, value: string | number) => {
    setGalleryData((current) => {
      const updated = [...(current || [])]
      updated[index] = { ...updated[index], [field]: value }
      return updated
    })
  }

  const deleteGalleryImage = (index: number) => {
    setGalleryData((current) => (current || []).filter((_, i) => i !== index))
    toast.success('تم حذف الصورة بنجاح')
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full md:w-[800px] bg-background shadow-2xl overflow-y-auto">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">لوحة التحكم الإدارية</h2>
            <p className="text-sm text-muted-foreground">إدارة كامل محتوى الموقع</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          <Tabs defaultValue="hero" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-9 mb-6">
              <TabsTrigger value="hero">البطل</TabsTrigger>
              <TabsTrigger value="achievements">الإنجازات</TabsTrigger>
              <TabsTrigger value="categories">الفئات</TabsTrigger>
              <TabsTrigger value="offerings">المميزات</TabsTrigger>
              <TabsTrigger value="gallery">الصور</TabsTrigger>
              <TabsTrigger value="stars">النجوم</TabsTrigger>
              <TabsTrigger value="testimonials">التقييمات</TabsTrigger>
              <TabsTrigger value="contact">التواصل</TabsTrigger>
              <TabsTrigger value="social">السوشيال</TabsTrigger>
            </TabsList>

            <TabsContent value="hero" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>قسم Hero - الصفحة الرئيسية</CardTitle>
                  <CardDescription>تعديل العنوان والنصوص الرئيسية</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-title">العنوان الرئيسي</Label>
                    <Input
                      id="hero-title"
                      value={heroData?.title || ''}
                      onChange={(e) => setHeroData((current) => ({ ...(current || { title: '', subtitle: '', ctaText: '' }), title: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-subtitle">النص الفرعي</Label>
                    <Textarea
                      id="hero-subtitle"
                      value={heroData?.subtitle || ''}
                      onChange={(e) => setHeroData((current) => ({ ...(current || { title: '', subtitle: '', ctaText: '' }), subtitle: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-cta">نص زر التسجيل</Label>
                    <Input
                      id="hero-cta"
                      value={heroData?.ctaText || ''}
                      onChange={(e) => setHeroData((current) => ({ ...(current || { title: '', subtitle: '', ctaText: '' }), ctaText: e.target.value }))}
                    />
                  </div>
                  <Button onClick={() => handleSave('تم حفظ التغييرات على قسم Hero')} className="w-full">
                    <FloppyDisk className="ml-2" /> حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>قسم الإنجازات</CardTitle>
                  <CardDescription>تعديل الأرقام والإحصائيات</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="students">عدد الطلاب</Label>
                      <Input
                        id="students"
                        type="number"
                        value={achievementsData?.students || 0}
                        onChange={(e) => setAchievementsData((current) => ({ ...(current || { students: 0, championships: 0, coaches: 0, satisfaction: 0 }), students: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="championships">عدد البطولات</Label>
                      <Input
                        id="championships"
                        type="number"
                        value={achievementsData?.championships || 0}
                        onChange={(e) => setAchievementsData((current) => ({ ...(current || { students: 0, championships: 0, coaches: 0, satisfaction: 0 }), championships: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="coaches">عدد المدربين</Label>
                      <Input
                        id="coaches"
                        type="number"
                        value={achievementsData?.coaches || 0}
                        onChange={(e) => setAchievementsData((current) => ({ ...(current || { students: 0, championships: 0, coaches: 0, satisfaction: 0 }), coaches: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="satisfaction">نسبة الرضا (%)</Label>
                      <Input
                        id="satisfaction"
                        type="number"
                        value={achievementsData?.satisfaction || 0}
                        onChange={(e) => setAchievementsData((current) => ({ ...(current || { students: 0, championships: 0, coaches: 0, satisfaction: 0 }), satisfaction: parseInt(e.target.value) || 0 }))}
                      />
                    </div>
                  </div>
                  <Button onClick={() => handleSave('تم حفظ التغييرات على الإنجازات')} className="w-full">
                    <FloppyDisk className="ml-2" /> حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4">
              {(categoriesData || []).map((category, index) => (
                <Card key={category.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>فئة: {category.name}</CardTitle>
                      <Button variant="destructive" size="icon" onClick={() => deleteCategory(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>اسم الفئة</Label>
                      <Input
                        value={category.name}
                        onChange={(e) => updateCategory(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>الفئة العمرية</Label>
                        <Input
                          value={category.ageRange}
                          onChange={(e) => updateCategory(index, 'ageRange', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>الأيام</Label>
                        <Input
                          value={category.days}
                          onChange={(e) => updateCategory(index, 'days', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>السعر</Label>
                      <Input
                        value={category.price}
                        onChange={(e) => updateCategory(index, 'price', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>الوصف</Label>
                      <Textarea
                        value={category.description}
                        onChange={(e) => updateCategory(index, 'description', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addCategory} variant="outline" className="w-full">
                <Plus className="ml-2" /> إضافة فئة جديدة
              </Button>
              <Button onClick={() => handleSave('تم حفظ التغييرات على الفئات')} className="w-full">
                <FloppyDisk className="ml-2" /> حفظ كل التغييرات
              </Button>
            </TabsContent>

            <TabsContent value="offerings" className="space-y-4">
              {(offeringsData || []).map((offering, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{offering.title}</CardTitle>
                      <Button variant="destructive" size="icon" onClick={() => deleteOffering(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>اسم الأيقونة (phosphor-icons)</Label>
                      <Input
                        value={offering.icon}
                        onChange={(e) => updateOffering(index, 'icon', e.target.value)}
                        placeholder="barbell, trophy, chart-line, grass"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>العنوان</Label>
                      <Input
                        value={offering.title}
                        onChange={(e) => updateOffering(index, 'title', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>الوصف</Label>
                      <Textarea
                        value={offering.description}
                        onChange={(e) => updateOffering(index, 'description', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addOffering} variant="outline" className="w-full">
                <Plus className="ml-2" /> إضافة ميزة جديدة
              </Button>
              <Button onClick={() => handleSave('تم حفظ التغييرات على المميزات')} className="w-full">
                <FloppyDisk className="ml-2" /> حفظ كل التغييرات
              </Button>
            </TabsContent>

            <TabsContent value="stars" className="space-y-4">
              {(starsData || []).map((star, index) => (
                <Card key={star.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{star.name}</CardTitle>
                      <Button variant="destructive" size="icon" onClick={() => deleteStar(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>اسم اللاعب</Label>
                      <Input
                        value={star.name}
                        onChange={(e) => updateStar(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>العمر</Label>
                      <Input
                        value={star.age}
                        onChange={(e) => updateStar(index, 'age', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>الإنجاز</Label>
                      <Input
                        value={star.achievement}
                        onChange={(e) => updateStar(index, 'achievement', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>الوصف</Label>
                      <Textarea
                        value={star.description}
                        onChange={(e) => updateStar(index, 'description', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addStar} variant="outline" className="w-full">
                <Plus className="ml-2" /> إضافة لاعب جديد
              </Button>
              <Button onClick={() => handleSave('تم حفظ التغييرات على النجوم')} className="w-full">
                <FloppyDisk className="ml-2" /> حفظ كل التغييرات
              </Button>
            </TabsContent>

            <TabsContent value="testimonials" className="space-y-4">
              {(testimonialsData || []).map((testimonial, index) => (
                <Card key={testimonial.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{testimonial.name}</CardTitle>
                      <Button variant="destructive" size="icon" onClick={() => deleteTestimonial(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>اسم ولي الأمر</Label>
                      <Input
                        value={testimonial.name}
                        onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>التقييم (1-5 نجوم)</Label>
                      <Input
                        type="number"
                        min="1"
                        max="5"
                        value={testimonial.rating}
                        onChange={(e) => updateTestimonial(index, 'rating', parseInt(e.target.value) || 5)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>نص التقييم</Label>
                      <Textarea
                        value={testimonial.text}
                        onChange={(e) => updateTestimonial(index, 'text', e.target.value)}
                        rows={3}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button onClick={addTestimonial} variant="outline" className="w-full">
                <Plus className="ml-2" /> إضافة تقييم جديد
              </Button>
              <Button onClick={() => handleSave('تم حفظ التغييرات على التقييمات')} className="w-full">
                <FloppyDisk className="ml-2" /> حفظ كل التغييرات
              </Button>
            </TabsContent>

            <TabsContent value="gallery" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ImageIcon size={24} weight="fill" />
                    إدارة معرض الصور
                  </CardTitle>
                  <CardDescription>تعديل الصور في معرض الأكاديمية - رابط الصورة، الوصف، والتصنيف</CardDescription>
                </CardHeader>
              </Card>
              
              {(galleryData || []).map((image, index) => (
                <Card key={image.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{image.alt}</CardTitle>
                      <Button variant="destructive" size="icon" onClick={() => deleteGalleryImage(index)}>
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>رابط الصورة</Label>
                      <Input
                        value={image.src}
                        onChange={(e) => updateGalleryImage(index, 'src', e.target.value)}
                        placeholder="https://example.com/image.jpg"
                        dir="ltr"
                      />
                      <p className="text-xs text-muted-foreground">
                        استخدم روابط من Unsplash أو أي مصدر آخر
                      </p>
                    </div>
                    
                    {image.src && (
                      <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-border">
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/800x600?text=خطأ+في+تحميل+الصورة'
                          }}
                        />
                      </div>
                    )}
                    
                    <div className="space-y-2">
                      <Label>وصف الصورة</Label>
                      <Input
                        value={image.alt}
                        onChange={(e) => updateGalleryImage(index, 'alt', e.target.value)}
                        placeholder="ملعب الأكاديمية - منظر عام"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label>التصنيف</Label>
                      <select
                        value={image.category}
                        onChange={(e) => updateGalleryImage(index, 'category', e.target.value as "academy" | "field" | "training")}
                        className="w-full rounded-md border border-input bg-background px-3 py-2"
                      >
                        <option value="field">الملاعب</option>
                        <option value="training">التدريبات</option>
                        <option value="academy">المرافق</option>
                      </select>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <Button onClick={addGalleryImage} variant="outline" className="w-full">
                <Plus className="ml-2" /> إضافة صورة جديدة
              </Button>
              <Button onClick={() => handleSave('تم حفظ التغييرات على المعرض')} className="w-full">
                <FloppyDisk className="ml-2" /> حفظ كل التغييرات
              </Button>
            </TabsContent>

            <TabsContent value="contact" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>معلومات التواصل</CardTitle>
                  <CardDescription>رقم الواتساب والموقع والمواعيد</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">رقم الواتساب</Label>
                    <Input
                      id="whatsapp"
                      value={contactData?.whatsapp || ''}
                      onChange={(e) => setContactData((current) => ({ ...(current || { whatsapp: '', location: '', schedule: '', mapUrl: '' }), whatsapp: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">الموقع</Label>
                    <Input
                      id="location"
                      value={contactData?.location || ''}
                      onChange={(e) => setContactData((current) => ({ ...(current || { whatsapp: '', location: '', schedule: '', mapUrl: '' }), location: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="schedule">مواعيد التدريب</Label>
                    <Textarea
                      id="schedule"
                      value={contactData?.schedule || ''}
                      onChange={(e) => setContactData((current) => ({ ...(current || { whatsapp: '', location: '', schedule: '', mapUrl: '' }), schedule: e.target.value }))}
                      rows={2}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mapUrl">رابط الخريطة (Google Maps Embed)</Label>
                    <Textarea
                      id="mapUrl"
                      value={contactData?.mapUrl || ''}
                      onChange={(e) => setContactData((current) => ({ ...(current || { whatsapp: '', location: '', schedule: '', mapUrl: '' }), mapUrl: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  <Button onClick={() => handleSave('تم حفظ معلومات التواصل')} className="w-full">
                    <FloppyDisk className="ml-2" /> حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="social" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>روابط مواقع التواصل الاجتماعي</CardTitle>
                  <CardDescription>فيسبوك، إنستغرام، تيك توك</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="facebook">رابط فيسبوك</Label>
                    <Input
                      id="facebook"
                      type="url"
                      value={socialData?.facebook || ''}
                      onChange={(e) => setSocialData((current) => ({ ...(current || { facebook: '', instagram: '', tiktok: '' }), facebook: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">رابط إنستغرام</Label>
                    <Input
                      id="instagram"
                      type="url"
                      value={socialData?.instagram || ''}
                      onChange={(e) => setSocialData((current) => ({ ...(current || { facebook: '', instagram: '', tiktok: '' }), instagram: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tiktok">رابط تيك توك</Label>
                    <Input
                      id="tiktok"
                      type="url"
                      value={socialData?.tiktok || ''}
                      onChange={(e) => setSocialData((current) => ({ ...(current || { facebook: '', instagram: '', tiktok: '' }), tiktok: e.target.value }))}
                    />
                  </div>
                  <Button onClick={() => handleSave('تم حفظ روابط التواصل الاجتماعي')} className="w-full">
                    <FloppyDisk className="ml-2" /> حفظ التغييرات
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
