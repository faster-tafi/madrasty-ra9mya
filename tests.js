// وظائف صفحة الاختبارات - JavaScript
// هذا الملف يدير التفاعلات في صفحة الاختبارات الرئيسية

// Function to get test data for counting questions
function getTestData(level, subject) {
    const testKey = `${level}-${subject}`;

    // This should match the data structure in test-engine.js
    const sampleQuestions = {
        'first-bac-french': { questions: Array(5).fill(null) },
        'first-bac-arabic': { questions: Array(3).fill(null) },
        'first-bac-social': { questions: Array(3).fill(null) },
        'first-bac-islamic': { questions: Array(70).fill(null) },
        'second-bac-math': { questions: Array(3).fill(null) },
        'second-bac-physics': { questions: Array(2).fill(null) },
        'second-bac-biology': { questions: Array(2).fill(null) },
        'second-bac-philosophy': { questions: Array(2).fill(null) },
        'second-bac-english': { questions: Array(2).fill(null) }
    };

    return sampleQuestions[testKey] || { questions: [] };
}

// Function to update test info display
function updateTestInfo() {
    document.querySelectorAll('.test-subject-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        const questionsSpan = card.querySelector('.questions-count');

        // Map Arabic names to English keys
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

        const subjectKey = subjectMap[title];
        if (subjectKey) {
            // Determine level
            const categoryElement = card.closest('.category-card').querySelector('h2');
            const level = categoryElement.textContent.includes('الأولى') ? 'first-bac' : 'second-bac';

            const testData = getTestData(level, subjectKey);
            const questionCount = testData.questions.length;

            questionsSpan.textContent = `${questionCount} ${questionCount === 1 ? 'سؤال' : questionCount === 2 ? 'سؤالان' : 'أسئلة'}`;
        }
    });
}

// Function to start a test - called when a subject card is clicked
function startTest(level, subject) {
    // Redirect to test page with parameters (level and subject)
    window.location.href = `index3.html?level=${level}&subject=${subject}`;
}

function getSubjectName(subject) {
    const subjects = {
        'french': 'الفرنسية',
        'arabic': 'العربية',
        'social': 'الاجتماعيات',
        'islamic': 'التربية الإسلامية',
        'biology': 'علوم الحياة والأرض',
        'physics': 'الفيزياء',
        'math': 'الرياضيات',
        'philosophy': 'الفلسفة',
        'english': 'الإنجليزية'
    };
    return subjects[subject] || subject;
}

function getLevelName(level) {
    const levels = {
        'first-bac': 'الأولى بكالوريا',
        'second-bac': 'الثانية بكالوريا'
    };
    return levels[level] || level;
}

document.addEventListener('DOMContentLoaded', function() {
    // Add motion effects on load
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

    // Apply effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.8s ease ${index * 0.3}s`;
        observer.observe(card);
    });

    // Additional effects for test cards
    const testCards = document.querySelectorAll('.test-subject-card');
    testCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Call updateTestInfo to set initial test details
    updateTestInfo();
});