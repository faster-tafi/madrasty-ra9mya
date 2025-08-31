// Level page JavaScript functionality
// مواد كل مستوى
const levelSubjects = {
    "common-core": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "جميع دروس جدع مشترك",
                    "downloadNumber": "1",
                    "downloadUrl": "https://www.mediafire.com/file/uou9isrsix5b9gv/%25D8%25AF%25D8%25B1%25D9%2588%25D8%25B3_%25D8%25A7%25D9%2584%25D8%25AC%25D8%25B0%25D8%25B9_%25D8%25A7%25D9%2584%25D9%2585%25D8%25B4%25D8%25AA%25D8%25B1%25D9%2583_%25D9%2583%25D8%25A7%25D9%2585%25D9%2584%25D8%25A9_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25A8%25D9%258A%25D8%25A9_%25D8%25A7%25D9%2584%25D8%25A5%25D8%25B3%25D9%2584%25D8%25A7%25D9%2585%25D9%258A%25D8%25A9_111132.pdf/file"
                }
            ],
            "exercises": []
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "المعلوميات",
            "icon": "💻",
            "lessons": [],
            "exercises": []
        }
    ],
    "first-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [],
            "exercises": []
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "جميع دروس اولى بكالوريا التربية الاسلامية",
                    "downloadNumber": "1",
                    "downloadUrl": "https://www.mediafire.com/file/uxys0jeor33l2o3/%25D8%25AF%25D8%25B1%25D9%2588%25D8%25B3_%25D8%25A7%25D9%2584%25D8%25A3%25D9%2588%25D9%2584%25D9%2589_%25D8%25A8%25D8%25A7%25D9%2583_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25A8%25D9%258A%25D8%25A9_%25D8%25A7%25D9%2584%25D8%25A5%25D8%25B3%25D9%2584%25D8%25A7%25D9%2585%25D9%258A%25D8%25A9_%25D9%2583%25D8%25A7%25D9%2585%25D9%2584%25D8%25A9.pdf/file"
                }
            ],
            "exercises": []
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "التفاضل والتكامل",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل جبرية معقدة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تمارين هندسية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [
                {
                    "title": "مدخل إلى الفلسفة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفلسفة الأخلاقية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "فلسفة المعرفة",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفلسفة السياسية",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مقالات فلسفية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تحليل النصوص الفلسفية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "المناقشات الفلسفية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "Advanced Grammar",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Literature Studies",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Writing Skills",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Speaking & Listening",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Grammar Practice",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Essay Writing",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Comprehension",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [
                {
                    "title": "Grammaire Avancée",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Littérature Française",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Expression Écrite",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Exercices de Grammaire",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Analyse de Textes",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Rédaction Française",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        }
    ],
    "second-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [
                {
                    "title": "الأدب العربي الحديث",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "النحو والصرف المتقدم",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "التعبير والإنشاء المتقدم",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "النقد الأدبي",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص الأدبية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الكتابة الإبداعية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "التطبيقات النحوية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "الوراثة المندلية المتقدمة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "علم المناعة والأمراض",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "البيولوجيا الجزيئية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الجيولوجيا المتقدمة",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل الوراثة المعقدة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تجارب المناعة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسات بيئية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [
                {
                    "title": "الموجات والاهتزازات",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الكهرباء المتناوبة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفيزياء النووية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفيزياء الحديثة",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل الموجات المعقدة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تطبيقات الكهرباء",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "حسابات نووية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "التحليل الرياضي المتقدم",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الجبر الخطي والمصفوفات",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الهندسة الفضائية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الإحصاء والاحتماليات",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل التفاضل والتكامل",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تطبيقات الجبر الخطي",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "مسائل الهندسة المعقدة",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفلسفة",
            "icon": "🤔",
            "lessons": [
                {
                    "title": "نظرية المعرفة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "فلسفة الوجود والكينونة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الأخلاق والقيم",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفلسفة السياسية",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مقالات فلسفية متقدمة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تحليل النصوص الفلسفية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "المناقشات الفلسفية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "Advanced Grammar & Syntax",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Literature Analysis",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Academic Writing Skills",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Critical Thinking",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Complex Grammar Practice",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Literary Analysis Essays",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Research Papers",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [
                {
                    "title": "Grammaire Approfondie",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Littérature Contemporaine",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Dissertation Française",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Expression Orale Avancée",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Analyse Littéraire Approfondie",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Exercices de Style",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Débats et Discussions",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        }
    ]
};

// عناوين المستويات
const levelTitles = {
    "common-core": "دروس الجذع المشترك",
    "first-bac": "دروس الأولى بكالوريا",
    "second-bac": "دروس الثانية بكالوريا"
};

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

// باقي الكود الأصلي للملف إذا كان موجوداً

document.addEventListener('DOMContentLoaded', function() {
    // الحصول على معاملات URL
    const urlParams = new URLSearchParams(window.location.search);
    const level = urlParams.get('level');
    const title = urlParams.get('title');

    // تحديث عنوان الصفحة
    const levelTitle = document.getElementById('level-title');
    if (title) {
        levelTitle.textContent = `دروس ${title}`;
    } else if (levelTitles[level]) {
        levelTitle.textContent = levelTitles[level];
    }

    // عرض المواد
    displaySubjects(level);
});

function displaySubjects(level) {
    const container = document.getElementById('subjects-container');

    if (!level || !levelSubjects[level]) {
        container.innerHTML = '<div class="loading">مستوى غير متاح</div>';
        return;
    }

    const subjects = levelSubjects[level];

    // عرض رسالة التحميل
    container.innerHTML = '<div class="loading">جاري تحميل المواد...</div>';

    // محاكاة تأخير التحميل
    setTimeout(() => {
        container.innerHTML = '';

        subjects.forEach(subject => {
            const subjectElement = createSubjectElement(subject);
            container.appendChild(subjectElement);
        });

        // إضافة تأثير الظهور
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
                        <li onclick="downloadLesson('${lesson.title}', '${subject.name}', '${lesson.downloadUrl || ''}')">
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
                        <li onclick="downloadExercise('${exercise.title}', '${subject.name}', '${exercise.downloadUrl || ''}')">
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

        // إضافة تأثير الانزلاق
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

function downloadLesson(lessonTitle, subjectName, downloadUrl) {
    if (downloadUrl && downloadUrl !== 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing') {
        // فتح الرابط الحقيقي
        window.open(downloadUrl, '_blank');
    } else {
        // إظهار رسالة في حال عدم وجود رابط
        alert(`الرابط غير متوفر حاليًا للدرس: ${lessonTitle}\nمن مادة: ${subjectName}\n\nيرجى المحاولة لاحقًا.`);
    }
}

function downloadExercise(exerciseTitle, subjectName, downloadUrl) {
    if (downloadUrl && downloadUrl !== 'https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing') {
        // فتح الرابط الحقيقي
        window.open(downloadUrl, '_blank');
    } else {
        // إظهار رسالة في حال عدم وجود رابط
        alert(`الرابط غير متوفر حاليًا للتمرين: ${exerciseTitle}\nمن مادة: ${subjectName}\n\nيرجى المحاولة لاحقًا.`);
    }
}
