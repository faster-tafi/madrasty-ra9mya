// Level page JavaScript functionality

// مواد كل مستوى
const levelSubjects = {
    'common-core': [
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { title: 'النصوص الأدبية', downloadNumber: '01', url: '' },
                { title: 'علم البلاغة', downloadNumber: '02', url: '' },
                { title: 'القواعد النحوية', downloadNumber: '03', url: '' },
                { title: 'التعبير والإنشاء', downloadNumber: '04', url: '' }
            ],
            exercises: [
                { title: 'تحليل النصوص', downloadNumber: '01', url: '' },
                { title: 'تمارين البلاغة', downloadNumber: '02', url: '' },
                { title: 'تطبيقات نحوية', downloadNumber: '03', url: '' }
            ]
        },
        {
            name: 'الاجتماعيات',
            icon: '🌍',
            lessons: [
                { title: 'التاريخ القديم', downloadNumber: '01', url: '' },
                { title: 'الجغرافيا الطبيعية', downloadNumber: '02', url: '' },
                { title: 'التربية المدنية', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'خرائط تاريخية', downloadNumber: '01', url: '' },
                { title: 'دراسة حالة جغرافية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'التربية الإسلامية',
            icon: '🕌',
            lessons: [
                { title: 'القرآن الكريم', downloadNumber: '01', url: '' },
                { title: 'الحديث الشريف', downloadNumber: '02', url: '' },
                { title: 'الفقه الإسلامي', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'حفظ القرآن', downloadNumber: '01', url: '' },
                { title: 'شرح الأحاديث', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'علوم الحياة والأرض',
            icon: '🧬',
            lessons: [
                { title: 'علم الأحياء', downloadNumber: '01', url: '' },
                { title: 'علوم الأرض', downloadNumber: '02', url: '' },
                { title: 'البيئة والتنمية', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تجارب مخبرية', downloadNumber: '01', url: '' },
                { title: 'دراسة الكائنات', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الفيزياء',
            icon: '⚛️',
            lessons: [
                { title: 'الميكانيك', downloadNumber: '01', url: '' },
                { title: 'الكهرباء الأساسية', downloadNumber: '02', url: '' },
                { title: 'الضوء والصوت', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'حل مسائل فيزيائية', downloadNumber: '01', url: '' },
                { title: 'تجارب عملية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الرياضيات',
            icon: '📐',
            lessons: [
                { title: 'الجبر الأساسي', downloadNumber: '01', url: '' },
                { title: 'الهندسة المسطحة', downloadNumber: '02', url: '' },
                { title: 'الإحصاء', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'مسائل جبرية', downloadNumber: '01', url: '' },
                { title: 'تمارين هندسية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الفلسفة',
            icon: '🤔',
            lessons: [
                { title: 'مدخل إلى الفلسفة', downloadNumber: '01', url: '' },
                { title: 'الفلسفة القديمة', downloadNumber: '02', url: '' },
                { title: 'التفكير النقدي', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'نقد النصوص', downloadNumber: '01', url: '' },
                { title: 'تحليل الأفكار', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الإنجليزية',
            icon: '🇬🇧',
            lessons: [
                { title: 'القواعد الأساسية', downloadNumber: '01', url: '' },
                { title: 'المفردات والتعبير', downloadNumber: '02', url: '' },
                { title: 'القراءة والفهم', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تمارين القواعد', downloadNumber: '01', url: '' },
                { title: 'نصوص للقراءة', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'المعلوميات',
            icon: '💻',
            lessons: [
                { title: 'أساسيات الحاسوب', downloadNumber: '01', url: '' },
                { title: 'البرمجة الأساسية', downloadNumber: '02', url: '' },
                { title: 'الإنترنت والشبكات', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تطبيقات عملية', downloadNumber: '01', url: '' },
                { title: 'مشاريع برمجية', downloadNumber: '02', url: '' }
            ]
        }
    ],
    'first-bac': [
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { title: 'الشعر العربي القديم', downloadNumber: '01', url: '' },
                { title: 'النثر العربي', downloadNumber: '02', url: '' },
                { title: 'البلاغة العربية', downloadNumber: '03', url: '' },
                { title: 'علم العروض', downloadNumber: '04', url: '' }
            ],
            exercises: [
                { title: 'تحليل القصائد', downloadNumber: '01', url: '' },
                { title: 'دراسة النثر', downloadNumber: '02', url: '' },
                { title: 'تطبيقات بلاغية', downloadNumber: '03', url: '' }
            ]
        },
        {
            name: 'الاجتماعيات',
            icon: '🌍',
            lessons: [
                { title: 'التاريخ المعاصر', downloadNumber: '01', url: '' },
                { title: 'الجغرافيا البشرية', downloadNumber: '02', url: '' },
                { title: 'التنمية الاقتصادية', downloadNumber: '03', url: '' },
                { title: 'النظم السياسية', downloadNumber: '04', url: '' }
            ],
            exercises: [
                { title: 'دراسة وثائق تاريخية', downloadNumber: '01', url: '' },
                { title: 'تحليل خرائط', downloadNumber: '02', url: '' },
                { title: 'مشاريع بحثية', downloadNumber: '03', url: '' }
            ]
        },
        {
            name: 'التربية الإسلامية',
            icon: '🕌',
            lessons: [
                { title: 'القرآن وعلومه', downloadNumber: '01', url: '' },
                { title: 'الحديث وعلومه', downloadNumber: '02', url: '' },
                { title: 'الفقه المقارن', downloadNumber: '03', url: '' },
                { title: 'العقيدة الإسلامية', downloadNumber: '04', url: '' }
            ],
            exercises: [
                { title: 'تفسير آيات قرآنية', downloadNumber: '01', url: '' },
                { title: 'دراسة الأحاديث', downloadNumber: '02', url: '' },
                { title: 'مسائل فقهية', downloadNumber: '03', url: '' }
            ]
        },
        {
            name: 'علوم الحياة والأرض',
            icon: '🧬',
            lessons: [
                { title: 'علم الوراثة', downloadNumber: '01', url: '' },
                { title: 'علم البيئة', downloadNumber: '02', url: '' },
                { title: 'الجيولوجيا', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تجارب وراثية', downloadNumber: '01', url: '' },
                { title: 'دراسة النظم البيئية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الفيزياء',
            icon: '⚛️',
            lessons: [
                { title: 'الموجات والاهتزازات', downloadNumber: '01', url: '' },
                { title: 'الكهرباء والمغناطيسية', downloadNumber: '02', url: '' },
                { title: 'البصريات', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تجارب الموجات', downloadNumber: '01', url: '' },
                { title: 'تطبيقات كهربائية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الرياضيات',
            icon: '📐',
            lessons: [
                { title: 'الجبر المتقدم', downloadNumber: '01', url: '' },
                { title: 'الهندسة التحليلية', downloadNumber: '02', url: '' },
                { title: 'التفاضل والتكامل', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'مسائل جبرية معقدة', downloadNumber: '01', url: '' },
                { title: 'تمارين هندسية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الفلسفة',
            icon: '🤔',
            lessons: [
                { title: 'الفلسفة الإسلامية', downloadNumber: '01', url: '' },
                { title: 'الفلسفة الغربية', downloadNumber: '02', url: '' },
                { title: 'قضايا فلسفية معاصرة', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تحليل النصوص الفلسفية', downloadNumber: '01', url: '' },
                { title: 'مناقشة قضايا فكرية', downloadNumber: '02', url: '' }
            ]
        },
        {
            name: 'الإنجليزية',
            icon: '🇬🇧',
            lessons: [
                { title: 'الأدب الإنجليزي', downloadNumber: '01', url: '' },
                { title: 'القواعد المتقدمة', downloadNumber: '02', url: '' },
                { title: 'التعبير الأكاديمي', downloadNumber: '03', url: '' }
            ],
            exercises: [
                { title: 'تحليل النصوص الأدبية', downloadNumber: '01', url: '' },
                { title: 'كتابة المقالات', downloadNumber: '02', url: '' }
            ]
        }
    ],
    'second-bac': [
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { title: 'الأدب العربي الحديث', downloadNumber: '01', url: '' },
                { title: 'النحو والصرف المتقدم', downloadNumber: '02', url: '' },
                { title: 'التعبير والإنشاء المتقدم', downloadNumber: '03', url: '' },
                { title: 'النقد الأدبي', downloadNumber: '04', url: '' },
                { title: 'البلاغة والأسلوب', downloadNumber: '05', url: '' }
            ],
            exercises: [
                { title: 'تحليل النصوص الأدبية', downloadNumber: '01', url: '' },
                { title: 'الكتابة الإبداعية', downloadNumber: '02', url: '' },
                { title: 'التطبيقات النحوية', downloadNumber: '03', url: '' },
                { title: 'دراسات بلاغية', downloadNumber: '04', url: '' }
            ]
        },
        {
            name: 'التربية الإسلامية',
            icon: '🕌',
            lessons: [
                { title: 'الفكر الإسلامي المعاصر', downloadNumber: '01', url: '' },
                { title: 'فقه المعاملات', downloadNumber: '02', url: '' },
                { title: 'الحضارة الإسلامية', downloadNumber: '03', url: '' },
                { title: 'القضايا المعاصرة في الإسلام', downloadNumber: '04', url: '' }
            ],
            exercises: [
                { title: 'بحوث إسلامية متقدمة', downloadNumber: '01', url: '' },
                { title: 'دراسات حضارية', downloadNumber: '02', url: '' },
                { title: 'قضايا معاصرة', downloadNumber: '03', url: '' }
            ]
        },
        {
            name: 'علوم الحياة والأرض',
            icon: '🧬',
            lessons: [
                { title: 'الوراثة المندلية المتقدمة', downloadNumber: '01', url: '' },
                { title: 'علم المناعة والأمراض', downloadNumber: '02', url: '' },
                { title: 'البيولوجيا الجزيئية', downloadNumber: '03', url: '' },
                { title: 'الجيولوجيا المتقدمة', downloadNumber: '04', url: '' },
                { title: 'علم البيئة التطبيقي', downloadNumber: '05', url: '' }
            ],
            exercises: [
                { title: 'مسائل الوراثة المعقدة', downloadNumber: '01', url: '' },
                { title: 'تجارب المناعة', downloadNumber: '02', url: '' },
                { title: 'دراسات بيئية', downloadNumber: '03', url: '' },
                { title: 'تحليل الصخور', downloadNumber: '04', url: '' }
            ]
        },
        {
            name: 'الفيزياء',
            icon: '⚛️',
            lessons: [
                { title: 'الموجات والاهتزازات', downloadNumber: '01', url: '' },
                { title: 'الكهرباء المتناوبة', downloadNumber: '02', url: '' },
                { title: 'الفيزياء النووية', downloadNumber: '03', url: '' },
                { title: 'الفيزياء الحديثة', downloadNumber: '04', url: '' },
                { title: 'الطاقة المتجددة', downloadNumber: '05', url: '' }
            ],
            exercises: [
                { title: 'مسائل الموجات المعقدة', downloadNumber: '01', url: '' },
                { title: 'تطبيقات الكهرباء', downloadNumber: '02', url: '' },
                { title: 'حسابات نووية', downloadNumber: '03', url: '' },
                { title: 'تجارب فيزيائية', downloadNumber: '04', url: '' }
            ]
        },
        {
            name: 'الرياضيات',
            icon: '📐',
            lessons: [
                { title: 'التحليل الرياضي المتقدم', downloadNumber: '01', url: '' },
                { title: 'الجبر الخطي والمصفوفات', downloadNumber: '02', url: '' },
                { title: 'الهندسة الفضائية', downloadNumber: '03', url: '' },
                { title: 'الإحصاء والاحتماليات', downloadNumber: '04', url: '' },
                { title: 'المعادلات التفاضلية', downloadNumber: '05', url: '' }
            ],
            exercises: [
                { title: 'مسائل التفاضل والتكامل', downloadNumber: '01', url: '' },
                { title: 'تطبيقات الجبر الخطي', downloadNumber: '02', url: '' },
                { title: 'مسائل الهندسة المعقدة', downloadNumber: '03', url: '' },
                { title: 'حل المعادلات', downloadNumber: '04', url: '' }
            ]
        },
        {
            name: 'الفلسفة',
            icon: '🤔',
            lessons: [
                { title: 'نظرية المعرفة', downloadNumber: '01', url: '' },
                { title: 'فلسفة الوجود والكينونة', downloadNumber: '02', url: '' },
                { title: 'الأخلاق والقيم', downloadNumber: '03', url: '' },
                { title: 'الفلسفة السياسية', downloadNumber: '04', url: '' },
                { title: 'فلسفة العلوم', downloadNumber: '05', url: '' }
            ],
            exercises: [
                { title: 'مقالات فلسفية متقدمة', downloadNumber: '01', url: '' },
                { title: 'تحليل النصوص الفلسفية', downloadNumber: '02', url: '' },
                { title: 'المناقشات الفلسفية', downloadNumber: '03', url: '' },
                { title: 'البحوث الفلسفية', downloadNumber: '04', url: '' }
            ]
        },
        {
            name: 'الإنجليزية',
            icon: '🇬🇧',
            lessons: [
                { title: 'Advanced Grammar & Syntax', downloadNumber: '01', url: '' },
                { title: 'Literature Analysis', downloadNumber: '02', url: '' },
                { title: 'Academic Writing Skills', downloadNumber: '03', url: '' },
                { title: 'Critical Thinking', downloadNumber: '04', url: '' },
                { title: 'Communication Skills', downloadNumber: '05', url: '' }
            ],
            exercises: [
                { title: 'Complex Grammar Practice', downloadNumber: '01', url: '' },
                { title: 'Literary Analysis Essays', downloadNumber: '02', url: '' },
                { title: 'Research Papers', downloadNumber: '03', url: '' },
                { title: 'Oral Presentations', downloadNumber: '04', url: '' }
            ]
        },
        {
            name: 'الفرنسية',
            icon: '🇫🇷',
            lessons: [
                { title: 'Grammaire et Syntaxe', downloadNumber: '01', url: '' },
                { title: 'Littérature Française', downloadNumber: '02', url: '' },
                { title: 'Expression Écrite', downloadNumber: '03', url: '' },
                { title: 'Analyse de Texte', downloadNumber: '04', url: '' }
            ],
            exercises: [
                { title: 'Exercices de Grammaire', downloadNumber: '01', url: '' },
                { title: 'Essais Littéraires', downloadNumber: '02', url: '' },
                { title: 'Analyse de Textes', downloadNumber: '03', url: '' }
            ]
        }
    ]
};

// عناوين المستويات
const levelTitles = {
    'common-core': 'دروس الجذع المشترك',
    'first-bac': 'دروس الأولى بكالوريا',
    'second-bac': 'دروس الثانية بكالوريا'
};

// وظائف إدارة المحتوى
function displaySubjects(level) {
    const container = document.getElementById('subjects-container');

    if (!level || !levelSubjects[level]) {
        container.innerHTML = '<div class="loading">مستوى غير متاح</div>';
        return;
    }

    const subjects = levelSubjects[level];
    container.innerHTML = '<div class="loading">جاري تحميل المواد...</div>';

    setTimeout(() => {
        container.innerHTML = '';

        subjects.forEach(subject => {
            const subjectElement = createSubjectElement(subject);
            container.appendChild(subjectElement);
        });

        const subjectContainers = container.querySelectorAll('.subject-container');
        subjectContainers.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';

            setTimeout(() => {
                element.style.transition = 'all 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 1000);
}

function createSubjectElement(subject) {
    const subjectDiv = document.createElement('div');
    subjectDiv.className = 'subject-container';

    subjectDiv.innerHTML = `
        <div class="subject-header" onclick="toggleSubjectContent(this)">
            <div class="subject-icon-large">${subject.icon}</div>
            <h2>${subject.name}</h2>
            <div class="expand-arrow">▼</div>
        </div>
        <div class="subject-content" style="display: none;">
            <div class="content-section">
                <h3>📚 الدروس (${subject.lessons.length})</h3>
                <ul class="lessons-list">
                    ${subject.lessons.map((lesson, index) => `
                        <li onclick="downloadLesson('${lesson.title}', '${subject.name}', '${lesson.url}')">
                            <div class="lesson-number">${lesson.downloadNumber}</div>
                            <div class="lesson-title">${lesson.title}</div>
                            <div class="lesson-download">تحميل</div>
                            <div class="download-icon">⬇️</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
            <div class="content-section">
                <h3>✏️ التمارين (${subject.exercises.length})</h3>
                <ul class="exercises-list">
                    ${subject.exercises.map((exercise, index) => `
                        <li onclick="downloadExercise('${exercise.title}', '${subject.name}', '${exercise.url}')">
                            <div class="exercise-number">${exercise.downloadNumber}</div>
                            <div class="exercise-title">${exercise.title}</div>
                            <div class="exercise-download">تحميل</div>
                            <div class="download-icon">⬇️</div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    return subjectDiv;
}

function toggleSubjectContent(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.expand-arrow');

    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(180deg)';

        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.5s ease';

        setTimeout(() => {
            content.style.maxHeight = content.scrollHeight + 'px';
        }, 10);
    } else {
        content.style.maxHeight = '0';
        arrow.style.transform = 'rotate(0deg)';

        setTimeout(() => {
            content.style.display = 'none';
        }, 500);
    }
}

function downloadLesson(lessonTitle, subjectName, lessonUrl) {
    if (lessonUrl && lessonUrl.trim() !== '') {
        window.open(lessonUrl, '_blank');
    } else {
        alert(`الدرس: ${lessonTitle}\nمن مادة: ${subjectName}\n\nرابط التحميل غير متوفر حالياً`);
    }
}

function downloadExercise(exerciseTitle, subjectName, exerciseUrl) {
    if (exerciseUrl && exerciseUrl.trim() !== '') {
        window.open(exerciseUrl, '_blank');
    } else {
        alert(`التمرين: ${exerciseTitle}\nمن مادة: ${subjectName}\n\nرابط التحميل غير متوفر حالياً`);
    }
}

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const title = urlParams.get('title');

    const levelTitle = document.getElementById('level-title');
    if (title) {
        levelTitle.textContent = `دروس ${title}`;
    } else if (levelTitles[level]) {
        levelTitle.textContent = levelTitles[level];
    }

    displaySubjects(level);

    // Back button functionality
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.href = 'index5.html';
        });
    }
