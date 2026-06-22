# ⚽ أكاديمية المواهب - Talents Football Academy

موقع ويب احترافي كامل لأكاديمية كرة القدم "أكاديمية المواهب"

## 🎯 نظرة عامة

موقع ويب عصري وأنيق بتصميم زجاجي (Glassmorphism) مع خلفيات تفاعلية وتجربة مستخدم سلسة.

### ✨ المميزات الرئيسية

- 🎨 تصميم زجاجي عصري مع تأثيرات بصرية جذابة
- 📱 متجاوب بالكامل على جميع الأجهزة
- ⚡ أداء عالي مع lazy loading
- 🔐 لوحة تحكم أدمن محمية
- 🌐 دعم كامل للغة العربية (RTL)
- 📸 معرض صور تفاعلي
- ⭐ نظام التقييمات والشهادات
- 📊 إحصائيات متحركة
- 💬 تواصل مباشر عبر واتساب

## 🚀 البدء السريع

### التثبيت والتشغيل محلياً

```bash
# تثبيت المكتبات
npm install

# تشغيل المشروع
npm run dev

# بناء للإنتاج
npm run build

# معاينة البناء
npm run preview
```

## 📦 النشر والتصدير

### 🚀 ابدأ النشر الآن (3 خطوات):
👉 **[START_DEPLOY.md](./START_DEPLOY.md)** - البدء الفوري!

### 📚 أدلة النشر الكاملة:

#### للمبتدئين:
- ⚡ **[README_DEPLOYMENT.md](./README_DEPLOYMENT.md)** - ملخص سريع (دقيقة واحدة)
- 🖨️ **[PRINT_DEPLOY_GUIDE.md](./PRINT_DEPLOY_GUIDE.md)** - دليل للطباعة
- 📖 **[DEPLOY_NOW.md](./DEPLOY_NOW.md)** - دليل شامل بالعربية
- 🎯 **[STEP_BY_STEP_DEPLOY.md](./STEP_BY_STEP_DEPLOY.md)** - خطوة بخطوة مع صور

#### للمتقدمين:
- 🚀 **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** - النشر السريع (5 دقائق)
- 🌐 **[HOSTING_GUIDE.md](./HOSTING_GUIDE.md)** - جميع خيارات الاستضافة (9 منصات)
- 🇬🇧 **[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - English version

#### موارد إضافية:
- 📚 **[DEPLOYMENT_INDEX.md](./DEPLOYMENT_INDEX.md)** - الفهرس الشامل لجميع الأدلة
- 🎬 **[VIDEO_SCRIPT.md](./VIDEO_SCRIPT.md)** - سيناريو فيديو تعليمي
- 📘 **[EXPORT_GUIDE.md](./EXPORT_GUIDE.md)** - دليل التصدير الكامل
- 📊 **[POST_DEPLOYMENT.md](./POST_DEPLOYMENT.md)** - ما بعد النشر
- 🔧 **[TROUBLESHOOTING.md](./TROUBLESHOOTING.md)** - حل المشاكل

### نشر سريع على Vercel (الأسهل):

```bash
npm i -g vercel
vercel --prod
```

أو من الموقع: https://vercel.com → Sign Up → Add New → Project → Deploy

## 🏗️ الهيكل

```
src/
├── components/          # مكونات React
│   ├── ui/             # مكونات shadcn
│   ├── Navbar.tsx      # شريط التنقل
│   ├── HeroSection.tsx # القسم الرئيسي
│   ├── Gallery.tsx     # معرض الصور
│   ├── AdminPanel.tsx  # لوحة الأدمن
│   └── ...
├── hooks/              # React Hooks مخصصة
├── lib/                # Utilities
├── assets/             # الصور والملفات
├── index.css           # الأنماط الرئيسية
└── App.tsx             # المكون الرئيسي
```

## 🎨 التصميم

- **الألوان:** أخضر طبيعي + أبيض + تدرجات شفافة
- **الخط:** Tajawal (عربي واضح وعريض)
- **التأثيرات:** Glassmorphism, Parallax, Smooth animations
- **الخلفية:** خلفية ملعب ديناميكية مع تأثيرات تفاعلية

## 📋 الأقسام الرئيسية

1. **Hero Section** - القسم الرئيسي مع دعوة للعمل
2. **الإنجازات** - عداد متحرك للإحصائيات
3. **الفئات التدريبية** - البراعم، الناشئين، الشباب
4. **ماذا نقدم** - الخدمات والمميزات
5. **معرض الصور** - صور الأكاديمية والملاعب
6. **نجومنا** - اللاعبين المميزين
7. **الشهادات** - تقييمات الأهالي
8. **التواصل** - نموذج تسجيل وخريطة الموقع

## 🔐 لوحة تحكم الأدمن

الوصول من خلال الضغط 5 مرات على الشعار

**بيانات الدخول:**
- البريد: mohamadyahia209@gmail.com
- كلمة المرور: Mm12345#

### إمكانيات لوحة التحكم:
- ✅ إدارة التقييمات (حذف، تعديل)
- ✅ إدارة معرض الصور (إضافة، حذف)
- ✅ إدارة اللاعبين المميزين
- ✅ تحديث الإحصائيات
- ✅ عرض الرسائل من نموذج التواصل

## 📞 معلومات الاتصال

- **رقم واتساب:** 0982035983
- **الكابتن:** فراس حجو
- **الموقع:** Maarret el Mesrine, Idlib
- **مواعيد التدريب:** 4 العصر - 8 مساءً (جميع الأيام عدا الجمعة)

## 🛠️ التقنيات المستخدمة

- **Framework:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4 + Custom CSS
- **UI Components:** shadcn/ui v4
- **Icons:** Phosphor Icons
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form + Zod
- **Build Tool:** Vite 7
- **State Management:** useKV (Spark persistence API)

## 📱 التجاوبية

الموقع محسّن بالكامل للعمل على:
- 📱 الهواتف المحمولة (iOS & Android)
- 📱 الأجهزة اللوحية
- 💻 أجهزة الكمبيوتر
- 🖥️ الشاشات الكبيرة

## ⚡ الأداء

- ✅ Lazy loading للصور والمكونات
- ✅ Code splitting
- ✅ تحسين الصور
- ✅ CSS optimization
- ✅ شعار SVG محسّن

## 🔧 التطوير

### إضافة مكتبة جديدة:
```bash
npm install package-name
```

### إضافة مكون shadcn جديد:
```bash
npx shadcn@latest add [component-name]
```

## 📄 الترخيص

The Spark Template files and resources from GitHub are licensed under the terms of the MIT license, Copyright GitHub, Inc.

---

## 🚀 الخطوات التالية

1. ✅ اختبر الموقع محلياً
2. ✅ عدّل المحتوى حسب احتياجاتك
3. ✅ اتبع دليل النشر في [QUICK_DEPLOY.md](./QUICK_DEPLOY.md)
4. ✅ انشر على Vercel/Netlify
5. ✅ شارك الرابط مع الجميع!

---

**صنع بـ ❤️ لأكاديمية المواهب** ⚽✨
