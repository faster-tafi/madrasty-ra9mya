
// دالة التنقل بين مستويات المواد الدراسية
// هذه الدالة تستدعى عند النقر على بطاقة مستوى تعليمي (جذع مشترك، أولى باك، ثانية باك)
function navigateToLevel(level) {
    // إضافة تأثير بصري عند النقر (تصغير البطاقة قليلاً)
    const card = event.currentTarget;  // البطاقة التي تم النقر عليها
    card.style.transform = 'scale(0.98)';  // تصغير البطاقة بـ 2%
    card.style.opacity = '0.8';            // جعل البطاقة شفافة قليلاً
    
    setTimeout(() => {
        switch(level) {
            case 'common-core':
                window.location.href = `index2.html?level=common-core&title=الجذع المشترك`;
                break;
            case 'first-bac':
                window.location.href = `index2.html?level=first-bac&title=الأولى بكالوريا`;
                break;
            case 'second-bac':
                window.location.href = `index2.html?level=second-bac&title=الثانية بكالوريا`;
                break;
            default:
                console.log('مستوى غير معروف');
        }
    }, 200);
}

// Add smooth scrolling and animations
document.addEventListener('DOMContentLoaded', function() {
    // Animate level cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to level cards
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover effects for better UX
    levelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});
// Import level subjects data from level.js
// We need to include the level subjects data here for counting

const levelSubjects = {
    'common-core': [
        { name: 'العربية' },
        { name: 'الاجتماعيات' },
        { name: 'التربية الإسلامية' },
        { name: 'علوم الحياة والأرض' },
        { name: 'الفيزياء' },
        { name: 'الرياضيات' },
        { name: 'الفلسفة' },
        { name: 'الإنجليزية' },
        { name: 'المعلوميات' }
    ],
    'first-bac': [
        { name: 'العربية' },
        { name: 'الاجتماعيات' },
        { name: 'التربية الإسلامية' },
        { name: 'علوم الحياة والأرض' },
        { name: 'الفيزياء' },
        { name: 'الرياضيات' },
        { name: 'الفلسفة' },
        { name: 'الإنجليزية' }
    ],
    'second-bac': [
        { name: 'العربية' },
        { name: 'التربية الإسلامية' },
        { name: 'علوم الحياة والأرض' },
        { name: 'الفيزياء' },
        { name: 'الرياضيات' },
        { name: 'الفلسفة' },
        { name: 'الإنجليزية' },
        { name: 'الفرنسية' }
    ]
};

// Function to update subject counts
function updateSubjectCounts() {
    // Update Common Core count
    const commonCoreCount = levelSubjects['common-core'].length;
    const commonCoreElement = document.getElementById('common-core-count');
    if (commonCoreElement) {
        commonCoreElement.textContent = `${commonCoreCount} مواد دراسية`;
    }

    // Update First Bac count  
    const firstBacCount = levelSubjects['first-bac'].length;
    const firstBacElement = document.getElementById('first-bac-count');
    if (firstBacElement) {
        firstBacElement.textContent = `${firstBacCount} مواد أساسية`;
    }

    // Update Second Bac count
    const secondBacCount = levelSubjects['second-bac'].length;
    const secondBacElement = document.getElementById('second-bac-count');
    if (secondBacElement) {
        secondBacElement.textContent = `${secondBacCount} مواد أساسية`;
    }
}

// Courses page JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Update subject counts when page loads
    updateSubjectCounts();
    // Navigation functionality for level cards
    const levelCards = document.querySelectorAll('.level-card');
    
    levelCards.forEach(card => {
        card.addEventListener('click', function() {
            const levelInfo = this.querySelector('.level-info h2').textContent;
            let levelPath = '';
            
            if (levelInfo.includes('الجذع المشترك')) {
                levelPath = 'index2.html?level=common-core';
            } else if (levelInfo.includes('الأولى بكالوريا')) {
                levelPath = 'index2.html?level=first-bac';
            } else if (levelInfo.includes('الثانية بكالوريا')) {
                levelPath = 'index2.html?level=second-bac';
            }
            
            if (levelPath) {
                window.location.href = levelPath;
            }
        });
    });

    // Animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Apply animation to level cards
    levelCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.2}s`;
        observer.observe(card);
    });

    // Add hover effects for better UX
    levelCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
