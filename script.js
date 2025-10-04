// الملف الرئيسي لجافاسكريبت - الصفحة الرئيسية
// هذا الملف يحتوي على جميع التفاعلات والوظائف الخاصة بالصفحة الرئيسية

// ينتظر حتى يتم تحميل الصفحة بالكامل قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', function() {

    // تنقل سلس عند النقر على روابط القائمة العلوية
    // يختار جميع الروابط التي تبدأ بـ # (الروابط الداخلية)
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // CTA Button functionality
    const ctaButtons = document.querySelectorAll('.cta-btn');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent.includes('ابدأ الآن')) {
                // Navigate to courses page (levels page)
                window.location.href = 'index5.html';
            } else if (this.textContent.includes('تصفح المواد')) {
                window.location.href = 'index5.html';
            }
        });
    });

    // Subject cards functionality
    const subjectCards = document.querySelectorAll('.subject-card');
    subjectCards.forEach(card => {
        card.addEventListener('click', function() {
            const subjectElement = this.querySelector('span');
            if (subjectElement) {
                const subject = subjectElement.textContent.trim();

                // Map Arabic subject names to English keys
                const subjectMap = {
                    'الفرنسية': 'french',
                    'العربية': 'arabic',
                    'الاجتماعيات': 'social',
                    'التربية الإسلامية': 'islamic',
                    'علوم الحياة والأرض': 'biology',
                    'الفيزياء': 'physics',
                    'الرياضيات': 'math',
                    'الفلسفة': 'philosophy',
                    'الإنجليزية': 'english'
                };

                const subjectKey = subjectMap[subject];
                if (subjectKey) {
                    // Determine level based on parent section
                    const parentCategory = this.closest('.test-category');
                    const categoryTitle = parentCategory.querySelector('h3').textContent;
                    const level = categoryTitle.includes('الأولى') ? 'first-bac' : 'second-bac';

                    // Navigate to test
                    window.location.href = `index3.html?level=${level}&subject=${subjectKey}`;
                }
            }
        });
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .subject-card, .test-category');
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });

    // Add floating animation to hero illustration
    const heroIllustration = document.querySelector('.student-illustration');
    if (heroIllustration) {
        setInterval(() => {
            heroIllustration.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                heroIllustration.style.transform = 'translateY(0px)';
            }, 2000);
        }, 4000);
    }
});

// Add CSS for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .hero .student-illustration {
        transition: transform 2s ease-in-out;
    }
`;
document.head.appendChild(style);

// Navigation function for exams (Regional and National)
function navigateToExams(level) {
    window.location.href = `exams.html?level=${level}`;
}