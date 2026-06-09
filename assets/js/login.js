// تحديد العناصر من الـ DOM
const passwordInput = document.getElementById('password');
const togglePasswordIcon = document.getElementById('togglePassword');

// إضافة حدث عند الضغط على الأيقونة
togglePasswordIcon.addEventListener('click', function () {
    // التحقق من نوع الحقل الحالي
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // تغيير شكل الأيقونة (العين والعين المشطوبة)
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});