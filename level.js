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
            "exercises": [
                {
                    "title": "خرائط تاريخية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسة حالة جغرافية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "القرآن الكريم",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الحديث الشريف",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفقه الإسلامي",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "حفظ القرآن",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "شرح الأحاديث",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "علم الأحياء",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "علوم الأرض",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "البيئة والتنمية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تجارب مخبرية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسة الكائنات",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [
                {
                    "title": "الميكانيك",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الكهرباء الأساسية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الضوء والصوت",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "حل مسائل فيزيائية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تجارب عملية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "الجبر الأساسي",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الهندسة المسطحة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الإحصاء",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل جبرية",
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
                }
            ],
            "exercises": [
                {
                    "title": "مقالات فلسفية أساسية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تحليل نصوص فلسفية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "Basic Grammar",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Comprehension",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Writing Fundamentals",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Grammar Exercises",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Practice",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [],
            "exercises": [
                {
                    "title": "Exercices de Grammaire",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Rédaction Simple",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "المعلوميات",
            "icon": "💻",
            "lessons": [
                {
                    "title": "مقدمة في البرمجة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "نظم التشغيل",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الشبكات والإنترنت",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تمارين البرمجة",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "مشاريع تطبيقية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        }
    ],
    "first-bac": [
        {
            "name": "العربية",
            "icon": "📝",
            "lessons": [
                {
                    "title": "النصوص الأدبية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "علم البلاغة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "القواعد النحوية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "التعبير والإنشاء",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تمارين البلاغة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تطبيقات نحوية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [
                {
                    "title": "التاريخ القديم",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الجغرافيا الطبيعية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "التربية المدنية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "خرائط تاريخية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسة حالة جغرافية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "القرآن الكريم",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الحديث الشريف",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفقه الإسلامي",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "حفظ القرآن",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "شرح الأحاديث",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "علم الأحياء",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "علوم الأرض",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "البيئة والتنمية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تجارب مخبرية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسة الكائنات",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [
                {
                    "title": "الميكانيك",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الكهرباء الأساسية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الضوء والصوت",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "حل مسائل فيزيائية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تجارب عملية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "الجبر الأساسي",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الهندسة المسطحة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الإحصاء",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل جبرية",
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
                }
            ],
            "exercises": [
                {
                    "title": "مقالات فلسفية أساسية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تحليل نصوص فلسفية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "Basic Grammar",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Comprehension",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Writing Fundamentals",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Grammar Exercises",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Practice",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [
                {
                    "title": "Grammaire de Base",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Vocabulaire Essentiel",
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
                    "title": "Rédaction Simple",
                    "downloadNumber": "02",
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
                    "title": "النصوص الأدبية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "علم البلاغة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "القواعد النحوية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "التعبير والإنشاء",
                    "downloadNumber": "04",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تحليل النصوص",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تمارين البلاغة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تطبيقات نحوية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الاجتماعيات",
            "icon": "🌍",
            "lessons": [
                {
                    "title": "التاريخ القديم",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الجغرافيا الطبيعية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "التربية المدنية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "خرائط تاريخية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسة حالة جغرافية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "التربية الإسلامية",
            "icon": "🕌",
            "lessons": [
                {
                    "title": "القرآن الكريم",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الحديث الشريف",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الفقه الإسلامي",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "حفظ القرآن",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "شرح الأحاديث",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "علوم الحياة والأرض",
            "icon": "🧬",
            "lessons": [
                {
                    "title": "علم الأحياء",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "علوم الأرض",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "البيئة والتنمية",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "تجارب مخبرية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "دراسة الكائنات",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفيزياء",
            "icon": "⚛️",
            "lessons": [
                {
                    "title": "الميكانيك",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الكهرباء الأساسية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الضوء والصوت",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "حل مسائل فيزيائية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تجارب عملية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الرياضيات",
            "icon": "📐",
            "lessons": [
                {
                    "title": "الجبر الأساسي",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الهندسة المسطحة",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "الإحصاء",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "مسائل جبرية",
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
                }
            ],
            "exercises": [
                {
                    "title": "مقالات فلسفية أساسية",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "تحليل نصوص فلسفية",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الإنجليزية",
            "icon": "🇬🇧",
            "lessons": [
                {
                    "title": "Basic Grammar",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Comprehension",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Writing Fundamentals",
                    "downloadNumber": "03",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ],
            "exercises": [
                {
                    "title": "Grammar Exercises",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Reading Practice",
                    "downloadNumber": "02",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                }
            ]
        },
        {
            "name": "الفرنسية",
            "icon": "🇫🇷",
            "lessons": [
                {
                    "title": "Grammaire de Base",
                    "downloadNumber": "01",
                    "downloadUrl": "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing"
                },
                {
                    "title": "Vocabulaire Essentiel",
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
                    "title": "Rédaction Simple",
                    "downloadNumber": "02",
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
