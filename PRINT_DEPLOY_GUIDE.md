# ⚡ دليل النشر السريع (نسخة مطبوعة)

## 📋 معلومات الموقع
```
الموقع: أكاديمية المواهب
رقم الواتساب: 0982035983
الكابتن: فراس حجو
الموقع: Maarret el Mesrine, Idlib

حساب الأدمن:
البريد: mohamadyahia209@gmail.com
كلمة المرور: Mm12345#
```

---

## 🚀 النشر على Vercel (3 خطوات)

### الطريقة 1: من الموقع (الأسهل)
```
1. https://vercel.com
2. Sign Up → Continue with GitHub
3. Add New → Project → اختر المشروع → Deploy
✅ تم!
```

### الطريقة 2: من Terminal
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🌐 النشر على Netlify

### الطريقة 1: Drag & Drop
```bash
npm run build
# ثم اذهب إلى:
# https://app.netlify.com/drop
# واسحب مجلد dist
```

### الطريقة 2: من GitHub
```
1. https://netlify.com
2. Add new site → Import from Git
3. اختر المشروع → Deploy
```

---

## ✅ اختبر بعد النشر

```
□ الموقع يفتح
□ الصور تظهر
□ واتساب يعمل (0982035983)
□ النماذج تعمل
□ لوحة الأدمن تعمل (Ctrl+Shift+A)
□ سريع على الموبايل
```

---

## 🔄 تحديث الموقع لاحقاً

```bash
git add .
git commit -m "تحديث"
git push
# ✅ سيتحدث تلقائياً
```

---

## 🆘 حل المشاكل السريع

### الموقع فارغ:
- افتح Console (F12)
- ابحث عن الأخطاء
- تحقق من `npm run build` محلياً

### الصور لا تظهر:
```bash
git add src/assets/
git commit -m "add images"
git push
```

### واتساب لا يعمل:
- تأكد من الرقم: 0982035983
- جرب من موبايل

### Build فشل:
```bash
npm install
npm run build
# ابحث عن الأخطاء وأصلحها
git add .
git commit -m "fix"
git push
```

---

## 🎨 ربط Domain مخصص

### في Vercel:
```
Settings → Domains → Add Domain
أدخل domain → اتبع التعليمات
```

### DNS Records المطلوبة:
```
Type: CNAME
Name: www (أو @)
Value: cname.vercel-dns.com
```

---

## 📊 Analytics

### Vercel Analytics:
```
في لوحة التحكم:
Analytics → Enable
```

### Google Analytics:
```
1. analytics.google.com
2. أنشئ Property
3. احصل على Measurement ID
4. أضفه في Vercel Settings
```

---

## 📱 مشاركة الموقع

### فيسبوك/إنستغرام:
```
⚽ أكاديمية المواهب - موقعنا الآن جاهز!
📱 للحجز: 0982035983
🌐 [رابط الموقع]
```

### واتساب:
```
السلام عليكم!
موقعنا الإلكتروني الجديد: [الرابط]
للحجز: 0982035983
الكابتن فراس حجو
```

---

## 📚 أدلة مفصلة

```
DEPLOY_NOW.md - دليل شامل
STEP_BY_STEP_DEPLOY.md - خطوة بخطوة بالصور
QUICK_DEPLOY.md - نشر سريع
HOSTING_GUIDE.md - جميع خيارات الاستضافة
```

---

## 🔗 روابط مهمة

```
Vercel: https://vercel.com
Netlify: https://netlify.com
اختبار السرعة: https://pagespeed.web.dev
Google Analytics: https://analytics.google.com
```

---

**✨ بالتوفيق!**

---

_طباعة هذه الصفحة والاحتفاظ بها للرجوع السريع_
