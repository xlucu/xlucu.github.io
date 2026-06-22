# 🔧 حل المشاكل الشائعة

دليل سريع لحل أكثر المشاكل شيوعاً.

---

## 🚨 مشاكل البناء (Build)

### المشكلة: `npm run build` يفشل

**الأعراض:**
```
Error: Build failed
```

**الحلول:**

1️⃣ **تأكد من Node version:**
```bash
node --version  # يجب أن يكون 18 أو أحدث
```

2️⃣ **امسح وأعد التثبيت:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

3️⃣ **تحقق من الأخطاء في الكود:**
- افتح VS Code
- ابحث عن الأخطاء الحمراء
- صلحها

4️⃣ **تحقق من Memory:**
```bash
# إذا كان الجهاز ضعيف
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

---

## 🖼️ مشاكل الصور

### المشكلة: الصور لا تظهر بعد النشر

**الأعراض:**
- أيقونة صورة مكسورة
- مساحة فارغة بدلاً من الصورة

**الحلول:**

1️⃣ **تحقق من المسارات:**
```typescript
// ❌ خطأ
<img src="/src/assets/images/logo.png" />

// ✅ صحيح
import logo from '@/assets/images/logo.png'
<img src={logo} />
```

2️⃣ **تأكد من رفع مجلد assets:**
- افتح مجلد `dist` بعد البناء
- تأكد من وجود مجلد `assets`

3️⃣ **تحقق من console:**
- افتح الموقع
- اضغط F12
- ابحث عن أخطاء 404

---

## 🔄 مشاكل Routing

### المشكلة: صفحة 404 عند refresh أو direct link

**الأعراض:**
- الموقع يعمل عند التنقل من الداخل
- لكن refresh يعطي 404

**الحلول:**

1️⃣ **Vercel:**
- ملف `vercel.json` موجود بالفعل
- يجب أن يعمل تلقائياً

2️⃣ **Netlify:**
- ملف `netlify.toml` موجود
- تأكد من رفعه

3️⃣ **استضافة تقليدية:**
أضف `.htaccess` في `public_html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

---

## 🔐 مشاكل لوحة الأدمن

### المشكلة: لا أستطيع الدخول للأدمن

**الحلول:**

1️⃣ **تأكد من البيانات:**
```
البريد: mohamadyahia209@gmail.com
كلمة المرور: Mm12345#
```

2️⃣ **كيفية الوصول:**
- اضغط على الشعار (أعلى اليسار) 5 مرات متتالية
- سيظهر نموذج تسجيل الدخول

3️⃣ **إذا نسيت كلمة المرور:**
- ابحث في الكود عن `AdminLogin.tsx`
- ستجد كلمة المرور في الكود

4️⃣ **تغيير بيانات الأدمن:**
في `src/components/AdminLogin.tsx`:
```typescript
const ADMIN_EMAIL = "your-new-email@example.com"
const ADMIN_PASSWORD = "YourNewPassword123"
```

---

## 📱 مشاكل الواتساب

### المشكلة: رابط الواتساب لا يعمل

**الأعراض:**
- الضغط على زر الواتساب لا يفعل شيء
- يفتح صفحة خطأ

**الحلول:**

1️⃣ **تحقق من الرقم:**
- يجب أن يكون: 0982035983
- أو بالصيغة الدولية: +963982035983

2️⃣ **جرب من موبايل:**
- روابط الواتساب تعمل أفضل من موبايل فيه واتساب

3️⃣ **تحقق من الكود:**
في أي مكون فيه رابط واتساب:
```typescript
const whatsappUrl = `https://wa.me/963982035983?text=${encodeURIComponent(message)}`
```

---

## 🐌 مشاكل الأداء

### المشكلة: الموقع بطيء

**الحلول:**

1️⃣ **ضغط الصور:**
- استخدم https://tinypng.com
- حول الصور الكبيرة لـ WebP

2️⃣ **اختبر الأداء:**
```bash
# اختبر محلياً
npm run build
npm run preview
```

3️⃣ **استخدم PageSpeed Insights:**
- اذهب إلى https://pagespeed.web.dev
- أدخل رابط موقعك
- اتبع التوصيات

4️⃣ **تحقق من الاستضافة:**
- Vercel/Netlify أسرع من الاستضافة التقليدية

---

## 📧 مشاكل النماذج

### المشكلة: النماذج لا تحفظ البيانات

**الحلول:**

1️⃣ **تحقق من لوحة الأدمن:**
- سجل دخول للأدمن
- افتح تبويب "الرسائل"
- يجب أن تظهر الرسائل هناك

2️⃣ **تحقق من console:**
- افتح F12
- أرسل نموذج
- تحقق من الأخطاء

3️⃣ **البيانات محفوظة محلياً:**
- البيانات تُحفظ في browser storage
- كل مستخدم يرى بياناته فقط

---

## 🎨 مشاكل التصميم

### المشكلة: التصميم مكسور على الموبايل

**الحلول:**

1️⃣ **اختبر responsive:**
- افتح الموقع
- اضغط F12
- اختر device toolbar (Ctrl+Shift+M)
- جرب أحجام مختلفة

2️⃣ **تحقق من viewport:**
في `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

---

## 🌐 مشاكل النشر

### المشكلة: الموقع لا يتحدث بعد push لـ GitHub

**الحلول:**

1️⃣ **Vercel:**
- اذهب إلى https://vercel.com/dashboard
- افتح project
- تحقق من Deployments tab
- ابحث عن أخطاء

2️⃣ **Netlify:**
- اذهب إلى netlify.com/sites
- افتح الموقع
- تحقق من Deploys

3️⃣ **تحقق من Branch:**
- تأكد أنك تعمل على نفس branch المربوط

---

## 🔍 مشاكل SEO

### المشكلة: الموقع لا يظهر في Google

**الأعراض:**
- البحث عن الموقع في Google لا يعطي نتائج

**الحلول:**

1️⃣ **انتظر:**
- Google يحتاج 1-4 أسابيع لفهرسة المواقع الجديدة

2️⃣ **أضف للـ Search Console:**
- اذهب إلى https://search.google.com/search-console
- أضف موقعك
- أرسل sitemap.xml

3️⃣ **تحقق من robots.txt:**
- اذهب إلى: your-site.com/robots.txt
- يجب أن يكون:
```
User-agent: *
Allow: /
```

---

## 💾 مشاكل البيانات

### المشكلة: البيانات ضاعت

**الأعراض:**
- التقييمات أو الصور اختفت

**السبب:**
- البيانات محفوظة في browser storage
- إذا مسحت cache/cookies، تضيع

**الحلول:**

1️⃣ **Backup دوري:**
- من لوحة الأدمن، خذ screenshots
- أو انسخ البيانات

2️⃣ **استخدم نفس المتصفح:**
- لا تبدل بين Chrome و Firefox
- البيانات منفصلة

3️⃣ **للحلول الدائمة:**
- استخدم قاعدة بيانات خارجية (خارج نطاق هذا المشروع)

---

## 🔄 مشاكل التحديث

### المشكلة: الموقع لا يُظهر التحديثات

**الأعراض:**
- عدلت الكود لكن الموقع لم يتغير

**الحلول:**

1️⃣ **امسح cache:**
```
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

2️⃣ **تحقق من Build:**
```bash
npm run build
```
تأكد من عدم وجود أخطاء

3️⃣ **Vercel/Netlify:**
- تحقق من Deployments
- تأكد أن آخر deployment نجح

---

## 📱 مشاكل الأجهزة المختلفة

### المشكلة: يعمل على جهازي لكن لا يعمل على أجهزة أخرى

**الحلول:**

1️⃣ **اختبر على BrowserStack:**
- https://www.browserstack.com/live
- جرب متصفحات وأجهزة مختلفة

2️⃣ **اختبر على أجهزة حقيقية:**
- iPhone
- Android
- iPad

3️⃣ **تحقق من console:**
- افتح F12 على الجهاز المشكل
- ابحث عن الأخطاء

---

## 🆘 لم تجد الحل؟

### خطوات التصعيد:

1️⃣ **ابحث في Console:**
```
- افتح الموقع
- اضغط F12
- اذهب لتبويب Console
- انسخ أي أخطاء حمراء
- ابحث عنها في Google
```

2️⃣ **راجع الملفات الأخرى:**
- EXPORT_GUIDE.md
- HOSTING_GUIDE.md
- POST_DEPLOYMENT.md

3️⃣ **ابحث في Documentation:**
- [Vite Docs](https://vitejs.dev)
- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)

---

## 📋 Checklist التصحيح

قبل السؤال عن مساعدة:

- [ ] جربت امسح cache (Ctrl+Shift+R)
- [ ] `npm run build` يعمل محلياً بدون أخطاء
- [ ] تحققت من console للأخطاء (F12)
- [ ] جربت على متصفح مختلف
- [ ] جربت على جهاز مختلف
- [ ] تحققت من آخر deployment نجح
- [ ] راجعت الملفات التوجيهية

---

**معظم المشاكل لها حلول بسيطة! 🔧✨**

لا تتردد في تجربة الحلول المذكورة أعلاه.
