# 💻 مرجع الأوامر السريع

## 📦 أوامر المشروع الأساسية

### تثبيت المكتبات:
```bash
npm install
```

### تشغيل المشروع محلياً:
```bash
npm run dev
```
🌐 سيفتح على: http://localhost:5173

### بناء المشروع للإنتاج:
```bash
npm run build
```
📁 النتيجة في مجلد: `dist/`

### معاينة البناء:
```bash
npm run preview
```

### فحص الأخطاء (Linting):
```bash
npm run lint
```

---

## 🚀 أوامر النشر

### Vercel CLI:

#### تثبيت Vercel:
```bash
npm install -g vercel
```

#### تسجيل الدخول:
```bash
vercel login
```

#### نشر للاختبار:
```bash
vercel
```

#### نشر للإنتاج:
```bash
vercel --prod
```

#### حذف deployment:
```bash
vercel remove [deployment-url]
```

---

### Netlify CLI:

#### تثبيت Netlify:
```bash
npm install -g netlify-cli
```

#### تسجيل الدخول:
```bash
netlify login
```

#### نشر للاختبار:
```bash
netlify deploy
```

#### نشر للإنتاج:
```bash
netlify deploy --prod
```

#### فتح لوحة التحكم:
```bash
netlify open
```

---

## 🔧 أوامر Git

### حفظ التغييرات:
```bash
git add .
git commit -m "وصف التغيير"
git push
```

### التحقق من الحالة:
```bash
git status
```

### رؤية السجل:
```bash
git log
```

### إنشاء branch جديد:
```bash
git checkout -b branch-name
```

### الانتقال بين branches:
```bash
git checkout branch-name
```

### دمج branch:
```bash
git merge branch-name
```

---

## 🎨 أوامر shadcn/ui

### إضافة مكون جديد:
```bash
npx shadcn@latest add [component-name]
```

### أمثلة:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add form
```

### إضافة جميع المكونات:
```bash
npx shadcn@latest add --all
```

---

## 📊 أوامر الاختبار والتحليل

### فحص حجم البناء:
```bash
npm run build
ls -lh dist/
```

### تحليل الأداء محلياً:
```bash
npm run preview
# ثم افتح DevTools (F12) → Lighthouse
```

---

## 🔍 أوامر التشخيص

### التحقق من نسخة Node.js:
```bash
node --version
```
يجب أن تكون 18 أو أحدث

### التحقق من نسخة npm:
```bash
npm --version
```

### مسح cache npm:
```bash
npm cache clean --force
```

### إعادة تثبيت المكتبات:
```bash
rm -rf node_modules package-lock.json
npm install
```

### التحقق من الأخطاء في package.json:
```bash
npm audit
```

### إصلاح الأخطاء البسيطة:
```bash
npm audit fix
```

---

## 🌐 أوامر مفيدة أخرى

### فتح المشروع في المتصفح:
```bash
# macOS
open http://localhost:5173

# Linux
xdg-open http://localhost:5173

# Windows
start http://localhost:5173
```

### إيقاف عملية على port معين:
```bash
# Linux/Mac
lsof -ti:5173 | xargs kill -9

# Windows
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

---

## 🔗 أوامر سريعة مجمّعة

### النشر الكامل على Vercel:
```bash
npm install -g vercel
vercel login
npm run build
vercel --prod
```

### النشر الكامل على Netlify:
```bash
npm install -g netlify-cli
netlify login
npm run build
netlify deploy --prod
```

### تحديث المشروع بالكامل:
```bash
git add .
git commit -m "تحديث"
git push
# Vercel/Netlify سينشر تلقائياً
```

---

## 📝 نصائح للأوامر

### للنسخ السريع:
اضغط على زر النسخ في كل كود block

### للتنفيذ المتعدد:
```bash
# استخدم && لتنفيذ أوامر متتالية
npm install && npm run build && npm run preview
```

### للتنفيذ في الخلفية:
```bash
# أضف & في النهاية
npm run dev &
```

---

## 🚨 أوامر الطوارئ

### إذا توقف المشروع عن العمل:
```bash
# 1. توقف عن جميع العمليات
# اضغط Ctrl+C

# 2. امسح كل شيء
rm -rf node_modules package-lock.json dist

# 3. ابدأ من جديد
npm install
npm run dev
```

### إذا فشل Build:
```bash
# 1. تحقق من الأخطاء
npm run build

# 2. أصلح الأخطاء المعروضة

# 3. حاول مرة أخرى
npm run build
```

---

## 📚 مرجع سريع للمنصات

### Vercel:
```bash
vercel --prod    # نشر
vercel ls        # قائمة deployments
vercel rm        # حذف deployment
vercel logs      # عرض logs
```

### Netlify:
```bash
netlify deploy --prod   # نشر
netlify sites           # قائمة sites
netlify open            # فتح لوحة التحكم
netlify logs            # عرض logs
```

---

## 🎯 الأوامر الأكثر استخداماً

```bash
# للتطوير اليومي:
npm run dev

# للاختبار قبل النشر:
npm run build
npm run preview

# للنشر:
vercel --prod
# أو
netlify deploy --prod

# لحفظ التغييرات:
git add .
git commit -m "وصف"
git push
```

---

## 💡 اختصارات مفيدة

### في Terminal:

- `Ctrl + C` - إيقاف العملية الحالية
- `Ctrl + L` أو `clear` - مسح الشاشة
- `↑` / `↓` - التنقل في تاريخ الأوامر
- `Tab` - إكمال الأمر تلقائياً

### في VS Code:

- `Ctrl + ~` - فتح/إغلاق Terminal
- `Ctrl + Shift + ~` - فتح terminal جديد
- `Ctrl + P` - البحث عن ملف
- `Ctrl + Shift + P` - فتح Command Palette

---

## 📖 للمزيد من المعلومات:

- **Vite:** https://vitejs.dev/guide/cli.html
- **Vercel CLI:** https://vercel.com/docs/cli
- **Netlify CLI:** https://docs.netlify.com/cli/get-started
- **Git:** https://git-scm.com/docs

---

**💻 استخدم هذا المرجع كلما احتجت أمراً!**
