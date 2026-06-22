# دليل إعداد خدمة البريد الإلكتروني لإعادة تعيين كلمة المرور

تم تكامل نظام إرسال البريد الإلكتروني باستخدام خدمة **EmailJS** المجانية. لتفعيل هذه الميزة، يرجى اتباع الخطوات التالية:

## الخطوات المطلوبة

### 1. إنشاء حساب EmailJS
1. اذهب إلى [EmailJS](https://www.emailjs.com/)
2. قم بإنشاء حساب مجاني (يسمح بـ 200 بريد إلكتروني شهرياً)
3. قم بتسجيل الدخول إلى لوحة التحكم

### 2. إضافة خدمة البريد الإلكتروني
1. من القائمة الجانبية، اختر **"Email Services"**
2. انقر على **"Add New Service"**
3. اختر مزود البريد الإلكتروني (Gmail، Outlook، إلخ)
4. قم بربط حساب البريد الإلكتروني الخاص بك
5. احفظ **Service ID** (مثال: `service_xxxxxxx`)

### 3. إنشاء قالب البريد الإلكتروني
1. من القائمة الجانبية، اختر **"Email Templates"**
2. انقر على **"Create New Template"**
3. استخدم القالب التالي:

#### محتوى القالب:
**Subject (الموضوع):**
```
رمز إعادة تعيين كلمة المرور - {{app_name}}
```

**Body (المحتوى):**
```html
<div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
    <h1 style="color: #50a060; text-align: center; margin-bottom: 20px;">
      {{app_name}}
    </h1>
    
    <h2 style="color: #333; margin-bottom: 15px;">
      مرحباً،
    </h2>
    
    <p style="color: #666; font-size: 16px; line-height: 1.6;">
      لقد تلقينا طلباً لإعادة تعيين كلمة مرور حساب المسؤول الخاص بك.
    </p>
    
    <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0; text-align: center;">
      <p style="color: #666; margin-bottom: 10px; font-size: 14px;">
        رمز التحقق الخاص بك:
      </p>
      <div style="font-size: 32px; font-weight: bold; color: #50a060; letter-spacing: 8px; font-family: monospace;">
        {{reset_code}}
      </div>
    </div>
    
    <p style="color: #666; font-size: 14px; margin: 15px 0;">
      <strong>ملاحظة:</strong> هذا الرمز صالح لمدة {{expiry_time}} فقط.
    </p>
    
    <p style="color: #999; font-size: 13px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
      إذا لم تطلب إعادة تعيين كلمة المرور، يرجى تجاهل هذا البريد الإلكتروني.
    </p>
  </div>
  
  <p style="color: #999; font-size: 12px; text-align: center; margin-top: 20px;">
    © 2024 {{app_name}}. جميع الحقوق محفوظة.
  </p>
</div>
```

4. احفظ القالب واحفظ **Template ID** (مثال: `template_xxxxxxx`)

### 4. الحصول على Public Key
1. من القائمة الجانبية، اذهب إلى **"Account"** ثم **"General"**
2. انسخ **Public Key** (مثال: `xxxxxxxxxxxx`)

### 5. تحديث الكود
افتح الملف `/src/components/AdminLogin.tsx` وابحث عن هذا القسم (حوالي السطر 106):

```typescript
await emailjs.send(
  'service_w0d1htn',     // استبدل بـ Service ID الخاص بك
  'template_h9ioq0p',    // استبدل بـ Template ID الخاص بك
  templateParams,
  'ux0ovdWrTOZLPqjXv'    // استبدل بـ Public Key الخاص بك
)
```

استبدل القيم الثلاث بقيمك الخاصة من EmailJS.

## المتغيرات المستخدمة في القالب

القالب يستخدم المتغيرات التالية (لا تحتاج لتغييرها):
- `{{to_email}}` - بريد المستلم
- `{{reset_code}}` - رمز إعادة التعيين (6 أحرف)
- `{{expiry_time}}` - مدة صلاحية الرمز (15 دقيقة)
- `{{app_name}}` - اسم التطبيق (أكاديمية المواهب)

## اختبار النظام

1. اذهب إلى الموقع واضغط على الكلمات `admin` (أو انقر على الشعار 5 مرات)
2. في نافذة تسجيل الدخول، انقر على "نسيت كلمة المرور؟"
3. أدخل البريد الإلكتروني: `mohamadyahia209@gmail.com`
4. سيصلك رمز التحقق على البريد الإلكتروني

## معالجة الأخطاء

إذا فشل إرسال البريد الإلكتروني:
- سيتم عرض رسالة خطأ
- **سيظهر الرمز في رسالة الخطأ كنسخة احتياطية**
- يمكن استخدام هذا الرمز لإعادة تعيين كلمة المرور

## الحد المجاني
- **200 بريد إلكتروني/شهر** في الخطة المجانية
- يمكن الترقية للمزيد من الرسائل

## الأمان
- رمز التحقق صالح لمدة **15 دقيقة فقط**
- يُستخدم مرة واحدة فقط
- يُحذف تلقائياً بعد الاستخدام أو انتهاء الصلاحية

---

**ملاحظة:** هذا الدليل موجه للمطور/المسؤول عن الموقع. المستخدمون العاديون لا يحتاجون لرؤية هذا الملف.
