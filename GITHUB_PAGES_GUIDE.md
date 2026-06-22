# ⚡ دليل النشر السريع على GitHub Pages

## الخطوات (5 دقائق فقط!)

### 1️⃣ إعادة تسمية الملف
```bash
# في terminal أو يدوياً
mv static-site.html index.html
```

### 2️⃣ رفع الملف إلى GitHub

#### إذا كان عندك مستودع GitHub:
```bash
git add index.html
git commit -m "Add football academy website"
git push origin main
```

#### إذا لم يكن عندك مستودع:
1. اذهب إلى https://github.com/new
2. أنشئ مستودع جديد (مثلاً: `football-academy`)
3. اجعله Public
4. لا تضف README
5. انقر Create repository
6. اتبع التعليمات لرفع الملف

### 3️⃣ تفعيل GitHub Pages

1. اذهب إلى المستودع على GitHub
2. اضغط على **Settings** (⚙️)
3. من القائمة الجانبية، اضغط على **Pages**
4. في قسم "Source":
   - اختر **Deploy from a branch**
   - Branch: اختر **main**
   - Folder: اختر **/ (root)**
5. اضغط **Save**

### 4️⃣ انتظر دقيقتين 🕐

GitHub سيبني الموقع تلقائياً

### 5️⃣ احصل على الرابط 🎉

سيظهر رابط موقعك:
```
https://username.github.io/repository-name/
```

مثال:
```
https://mohamadyahia.github.io/football-academy/
```

---

## 🎯 نصائح مهمة

### ✅ افعل:
- استخدم اسم مستودع بسيط بالإنجليزية
- اجعل المستودع Public (عام)
- انتظر 2-5 دقائق بعد التفعيل أول مرة
- استخدم HTTPS في الرابط

### ❌ لا تفعل:
- لا تجعل المستودع Private (سيحتاج GitHub Pro)
- لا تغير اسم الملف من `index.html`
- لا تضع الملف في مجلد فرعي

---

## 🔄 لتحديث الموقع لاحقاً

1. عدّل ملف `index.html`
2. ارفع التعديلات:
```bash
git add index.html
git commit -m "Update website"
git push origin main
```
3. انتظر دقيقة، سيتحدث الموقع تلقائياً

---

## 🌐 خيارات أخرى للنشر

### Netlify Drop (الأسهل!)
1. اذهب إلى https://app.netlify.com/drop
2. اسحب ملف `index.html` إلى الصفحة
3. احصل على رابط فوراً!

### Vercel
1. اذهب إلى https://vercel.com
2. New Project
3. اربط مستودع GitHub
4. Deploy

### Cloudflare Pages
1. اذهب إلى https://pages.cloudflare.com
2. Create a project
3. اربط GitHub
4. Deploy

---

## 📱 بعد النشر

### شارك موقعك:
1. على صفحة الفيسبوك: https://www.facebook.com/share/1UKZp4i4W3/
2. في بروفايل واتساب بيزنس
3. في Google My Business
4. في إعلانات فيسبوك وإنستغرام

### أضف Domain مخصص (اختياري):
في GitHub Pages > Custom domain
أضف اسم نطاق مثل: `mawahib-academy.com`

---

## ❓ مشاكل شائعة

### الموقع لا يظهر؟
- تأكد أن اسم الملف `index.html` (حروف صغيرة)
- تأكد أن المستودع Public
- انتظر 5 دقائق
- افتح الرابط في نافذة تصفح خفي (Incognito)

### الصور لا تظهر؟
- الصور من Unsplash ستعمل تلقائياً
- إذا أردت صورك الخاصة، ارفعها في نفس المستودع

### لوحة التحكم لا تعمل؟
- هذه نسخة HTML ثابتة
- لوحة التحكم رمزية فقط
- للحصول على لوحة حقيقية، استخدم WordPress أو نظام CMS

---

## 🎊 تهانينا!

موقعك الآن على الإنترنت ويمكن الوصول إليه من أي مكان في العالم! 🌍

**الرابط النهائي:**
```
https://your-username.github.io/your-repo-name/
```

شارك هذا الرابط مع الجميع! 🎉
