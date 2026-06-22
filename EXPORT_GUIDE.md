# دليل تصدير ونشر موقع أكاديمية المواهب

## 🎯 نظرة عامة
هذا الدليل يشرح كيفية تصدير ونشر موقع أكاديمية المواهب على الإنترنت.

---

## 📦 الخطوة 1: بناء المشروع للإنتاج

### 1.1 تشغيل أمر البناء
في Terminal أو Command Prompt، نفذ الأمر التالي:

```bash
npm run build
```

هذا سينشئ مجلد `dist` يحتوي على جميع الملفات الجاهزة للنشر.

### 1.2 محتويات مجلد dist
بعد البناء، ستجد:
- ملفات HTML المحسّنة
- ملفات JavaScript المضغوطة والمحسّنة
- ملفات CSS المحسّنة
- جميع الصور والأصول

---

## 🌐 الخطوة 2: خيارات النشر

### الخيار 1: Vercel (مجاني وسريع - مُنصح به) ⭐

**المميزات:**
- استضافة مجانية
- نشر تلقائي
- SSL مجاني
- أداء عالي جداً

**خطوات النشر:**

1. اذهب إلى [vercel.com](https://vercel.com)
2. سجل دخول بحساب GitHub
3. اضغط "New Project"
4. اختر المشروع من GitHub
5. Vercel سيكتشف Vite تلقائياً
6. اضغط "Deploy"
7. سيكون موقعك جاهز خلال دقائق!

**رابط الموقع:**
سيكون على شكل: `your-project-name.vercel.app`

---

### الخيار 2: Netlify (مجاني أيضاً)

**خطوات النشر:**

1. اذهب إلى [netlify.com](https://netlify.com)
2. سجل دخول
3. اسحب مجلد `dist` مباشرة إلى صفحة Netlify
4. أو اربط مع GitHub للنشر التلقائي

**إعدادات البناء في Netlify:**
```
Build command: npm run build
Publish directory: dist
```

---

### الخيار 3: GitHub Pages (مجاني)

**خطوات النشر:**

1. أضف هذا إلى `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repository-name"
}
```

2. ثبت gh-pages:
```bash
npm install --save-dev gh-pages
```

3. أضف script للنشر في `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. نفذ:
```bash
npm run deploy
```

---

### الخيار 4: استضافة تقليدية (cPanel, Hostinger, etc.)

**خطوات النشر:**

1. نفذ `npm run build` محلياً
2. اضغط على مجلد `dist` وحوله لملف zip
3. ارفع محتويات `dist` إلى مجلد `public_html` في الاستضافة
4. تأكد من رفع جميع الملفات والمجلدات

**ملاحظة مهمة:** تأكد من:
- رفع ملف `.htaccess` إذا كنت تستخدم Apache
- إعداد إعادة التوجيه للـ SPA

---

## ⚙️ الخطوة 3: إعدادات إضافية

### 3.1 إعداد Domain مخصص

**في Vercel:**
1. اذهب إلى Project Settings
2. اختر Domains
3. أضف domain الخاص بك
4. اتبع التعليمات لتحديث DNS records

**في Netlify:**
1. اذهب إلى Domain Settings
2. Add custom domain
3. اتبع التعليمات

### 3.2 متغيرات البيئة (Environment Variables)

إذا كان لديك API keys أو إعدادات خاصة:

**في Vercel:**
1. Project Settings → Environment Variables
2. أضف المتغيرات المطلوبة

**في Netlify:**
1. Site Settings → Build & Deploy → Environment
2. أضف المتغيرات

---

## 🔒 الخطوة 4: الأمان

### 4.1 تأكد من عدم نشر معلومات حساسة
- كلمات المرور
- API keys
- بيانات اعتماد قاعدة البيانات

### 4.2 فعّل HTTPS
جميع الخدمات المذكورة توفر HTTPS مجاناً تلقائياً.

---

## 📊 الخطوة 5: المراقبة والتحليلات

### 5.1 Google Analytics
أضف هذا الكود في `index.html` قبل إغلاق `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_TRACKING_ID');
</script>
```

### 5.2 Facebook Pixel (اختياري)
للإعلانات على فيسبوك وإنستغرام.

---

## 🚀 الخطوة 6: تحسينات الأداء

### قبل النشر، تأكد من:

✅ **الصور محسّنة:**
- استخدم WebP format
- ضغط الصور قبل الرفع

✅ **الأداء:**
- نفذ Lighthouse test
- استهدف درجة 90+ في الأداء

✅ **SEO:**
- تأكد من وجود meta tags
- أضف sitemap.xml
- أضف robots.txt

---

## 📱 الخطوة 7: اختبار ما بعد النشر

### اختبر على:
- ✅ أجهزة مختلفة (موبايل، تابلت، ديسكتوب)
- ✅ متصفحات مختلفة (Chrome, Firefox, Safari, Edge)
- ✅ سرعات إنترنت مختلفة
- ✅ جميع روابط الواتساب
- ✅ النماذج والتفاعلات
- ✅ لوحة تحكم الأدمن

---

## 🔄 التحديثات المستقبلية

### كيف تحدث الموقع:

**مع Vercel/Netlify (متصل بـ GitHub):**
1. عدل الكود محلياً
2. نفذ git commit & push
3. سيتم النشر تلقائياً!

**مع استضافة تقليدية:**
1. نفذ `npm run build`
2. ارفع محتويات `dist` الجديدة

---

## 📋 Checklist قبل النشر النهائي

- [ ] اختبرت الموقع محلياً بـ `npm run dev`
- [ ] نفذت `npm run build` بنجاح
- [ ] اختبرت موقع الإنتاج محلياً
- [ ] تأكدت من عمل جميع روابط الواتساب
- [ ] اختبرت لوحة تحكم الأدمن
- [ ] أضفت Google Analytics (اختياري)
- [ ] سجلت Domain مخصص (اختياري)
- [ ] اختبرت على الموبايل
- [ ] فحصت الأداء بـ Lighthouse
- [ ] تأكدت من HTTPS يعمل
- [ ] أخذت backup للكود

---

## 🆘 حل المشاكل الشائعة

### المشكلة: الصفحة فارغة بعد النشر
**الحل:** تأكد من أن `base` في `vite.config.ts` صحيح.

### المشكلة: الصور لا تظهر
**الحل:** تأكد من رفع مجلد `assets` كامل.

### المشكلة: routing لا يعمل (404 errors)
**الحل:** أضف ملف `_redirects` في مجلد `public`:
```
/*    /index.html   200
```

### المشكلة: أداء بطيء
**الحل:** 
- فعّل lazy loading
- ضغط الصور
- استخدم CDN

---

## 📞 معلومات الاتصال

رقم واتساب الأكاديمية: **0982035983**  
الكابتن: **فراس حجو**

---

## 🎓 خطوات سريعة للنشر الفوري (Quick Start)

### الطريقة الأسرع - Vercel:

```bash
# 1. ثبت Vercel CLI
npm i -g vercel

# 2. سجل دخول
vercel login

# 3. انشر!
vercel --prod
```

**هذا كل شيء!** موقعك الآن على الإنترنت 🎉

---

## 📚 موارد إضافية

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)

---

## ✨ ملاحظات نهائية

1. **النشر المجاني كافي تماماً** لموقع الأكاديمية
2. **Vercel هو الخيار الأفضل** من حيث السرعة وسهولة الاستخدام
3. **النشر التلقائي من GitHub** يوفر عليك الكثير من الوقت
4. **لا تنسَ اختبار الموقع** على أجهزة حقيقية قبل مشاركة الرابط

---

**بالتوفيق! 🚀⚽**
