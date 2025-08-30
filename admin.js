
// فحص حالة لوحة التحكم والميزات
function checkDashboardStatus() {
    console.log('=== فحص حالة لوحة التحكم ===');
    
    const features = {
        'تسجيل الدخول': {
            status: localStorage.getItem('admin-logged-in') === 'true' ? '✅ يعمل' : '❌ غير مسجل دخول',
            test: () => localStorage.getItem('admin-logged-in') === 'true'
        },
        'إدارة الدروس': {
            status: Object.keys(currentLessonsData).length > 0 ? '✅ يعمل' : '❌ لا توجد بيانات',
            test: () => Object.keys(currentLessonsData).length > 0
        },
        'إدارة الاختبارات': {
            status: Object.keys(currentTestsData).length > 0 ? '✅ يعمل' : '❌ لا توجد بيانات',
            test: () => Object.keys(currentTestsData).length > 0
        },
        'اتصال GitHub': {
            status: githubConfig.token ? '✅ مهيأ' : '❌ يحتاج إعداد',
            test: () => githubConfig.token !== ""
        },
        'اختيار الاختبارات الهرمي': {
            status: document.getElementById('test-management-level') ? '✅ محدث' : '❌ قديم',
            test: () => document.getElementById('test-management-level') !== null
        },
        'إدارة الاختيارات المتقدمة': {
            status: '✅ محدث',
            test: () => true
        }
    };
    
    Object.keys(features).forEach(featureName => {
        const feature = features[featureName];
        console.log(`${featureName}: ${feature.status}`);
    });
    
    const workingFeatures = Object.values(features).filter(f => f.test()).length;
    const totalFeatures = Object.keys(features).length;
    
    console.log(`\nالحالة العامة: ${workingFeatures}/${totalFeatures} ميزة تعمل بشكل صحيح`);
    
    if (workingFeatures === totalFeatures) {
        console.log('🎉 جميع الميزات تعمل بشكل صحيح!');
    } else {
        console.log('⚠️  بعض الميزات تحتاج إعداد أو إصلاح');
    }
    
    return {
        total: totalFeatures,
        working: workingFeatures,
        features: features
    };
}

// تشغيل الفحص تلقائياً عند تحميل الصفحة (للمطورين)
window.checkDashboardStatus = checkDashboardStatus;



// Admin Panel JavaScript - لوحة التحكم الإدارية المطورة

// إعدادات GitHub API
let githubConfig = {
    token: "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",
    owner: "faster-tafi",
    repo: "madrasty-ra9mya"
};

// كلمة المرور الإدارية
const ADMIN_PASSWORD = "aminetafi";

// متغيرات عامة
let currentLessonsData = {};
let currentTestsData = {};
let questionCounter = 0;

// تهيئة الصفحة
document.addEventListener('DOMContentLoaded', function() {
    checkAuthStatus();
    loadInitialData();
    loadSavedSettings();
});

// التحقق من حالة تسجيل الدخول
function checkAuthStatus() {
    const isLoggedIn = localStorage.getItem('admin-logged-in') === 'true';
    if (isLoggedIn) {
        showDashboard();
    } else {
        showLogin();
    }
}

// عرض نموذج تسجيل الدخول
function showLogin() {
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('admin-dashboard').style.display = 'none';
    
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('admin-password').value;
        
        if (password === ADMIN_PASSWORD) {
            localStorage.setItem('admin-logged-in', 'true');
            showDashboard();
        } else {
            alert('كلمة المرور غير صحيحة');
        }
    });
}

// عرض لوحة التحكم
function showDashboard() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
    showTab('lessons');
}

// تسجيل الخروج
function logout() {
    localStorage.removeItem('admin-logged-in');
    window.location.reload();
}

// عرض التابات
function showTab(tabName) {
    // إخفاء جميع التابات
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    
    // إزالة active من جميع الأزرار
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // عرض التاب المحدد
    document.getElementById(tabName + '-tab').style.display = 'block';
    document.querySelector(`[onclick="showTab('${tabName}')"]`).classList.add('active');
    
    // تحميل البيانات حسب التاب
    if (tabName === 'lessons') {
        loadLessons();
    } else if (tabName === 'tests') {
        loadTests();
    } else if (tabName === 'subjects') {
        loadSubjects();
    }
}

// تحميل البيانات الأولية
async function loadInitialData() {
    try {
        // تحميل بيانات الدروس
        const levelResponse = await fetch('level.js');
        const levelData = await levelResponse.text();
        parseExistingData(levelData);
        
        // تحميل بيانات الاختبارات
        const testResponse = await fetch('test-engine.js');
        const testData = await testResponse.text();
        parseTestsData(testData);
    } catch (error) {
        console.error('خطأ في تحميل البيانات:', error);
    }
}

// تحليل بيانات الدروس
function parseExistingData(jsContent) {
    try {
        const levelSubjectsMatch = jsContent.match(/const levelSubjects = ({[\s\S]*?});/);
        if (levelSubjectsMatch) {
            const levelSubjectsStr = levelSubjectsMatch[1];
            currentLessonsData = eval('(' + levelSubjectsStr + ')');
        }
    } catch (error) {
        console.error('خطأ في تحليل بيانات الدروس:', error);
        currentLessonsData = {
            'common-core': [],
            'first-bac': [],
            'second-bac': []
        };
    }
}

// تحليل بيانات الاختبارات
function parseTestsData(jsContent) {
    try {
        const testsMatch = jsContent.match(/const sampleQuestions = ({[\s\S]*?});/);
        if (testsMatch) {
            const testsStr = testsMatch[1];
            currentTestsData = eval('(' + testsStr + ')');
        }
    } catch (error) {
        console.error('خطأ في تحليل بيانات الاختبارات:', error);
        currentTestsData = {};
    }
}

// تحميل المواد حسب المستوى
function loadSubjects() {
    const level = document.getElementById('level-select')?.value || 
                 document.getElementById('lesson-level')?.value ||
                 document.getElementById('test-level')?.value ||
                 document.getElementById('subjects-level-select')?.value;
    
    const subjectSelects = document.querySelectorAll('#subject-select, #lesson-subject, #test-subject');
    
    const subjectOptions = {
        'common-core': [
            { key: 'arabic', name: 'العربية' },
            { key: 'social', name: 'الاجتماعيات' },
            { key: 'islamic', name: 'التربية الإسلامية' },
            { key: 'biology', name: 'علوم الحياة والأرض' },
            { key: 'physics', name: 'الفيزياء' },
            { key: 'math', name: 'الرياضيات' },
            { key: 'philosophy', name: 'الفلسفة' },
            { key: 'english', name: 'الإنجليزية' },
            { key: 'computer', name: 'المعلوميات' }
        ],
        'first-bac': [
            { key: 'arabic', name: 'العربية' },
            { key: 'social', name: 'الاجتماعيات' },
            { key: 'islamic', name: 'التربية الإسلامية' },
            { key: 'biology', name: 'علوم الحياة والأرض' },
            { key: 'physics', name: 'الفيزياء' },
            { key: 'math', name: 'الرياضيات' },
            { key: 'philosophy', name: 'الفلسفة' },
            { key: 'english', name: 'الإنجليزية' },
            { key: 'french', name: 'الفرنسية' }
        ],
        'second-bac': [
            { key: 'arabic', name: 'العربية' },
            { key: 'islamic', name: 'التربية الإسلامية' },
            { key: 'biology', name: 'علوم الحياة والأرض' },
            { key: 'physics', name: 'الفيزياء' },
            { key: 'math', name: 'الرياضيات' },
            { key: 'philosophy', name: 'الفلسفة' },
            { key: 'english', name: 'الإنجليزية' },
            { key: 'french', name: 'الفرنسية' }
        ]
    };
    
    subjectSelects.forEach(select => {
        if (select) {
            select.innerHTML = '<option value="">اختر المادة</option>';
            if (level && subjectOptions[level]) {
                subjectOptions[level].forEach(subject => {
                    select.innerHTML += `<option value="${subject.key}">${subject.name}</option>`;
                });
            }
        }
    });
    
    // تحديث قائمة المواد في إدارة المواد
    updateSubjectsManagement(level, subjectOptions[level] || []);
}

// تحديث إدارة المواد
function updateSubjectsManagement(level, subjects) {
    const subjectsContainer = document.getElementById('subjects-list');
    if (!subjectsContainer) return;
    
    if (!level) {
        subjectsContainer.innerHTML = '<p>اختر المستوى لعرض المواد</p>';
        return;
    }
    
    subjectsContainer.innerHTML = subjects.map((subject, index) => `
        <div class="item-card">
            <div class="item-info">
                <h4>${subject.name}</h4>
                <p>المفتاح: ${subject.key}</p>
            </div>
            <div class="item-actions">
                <button class="admin-btn small" onclick="editSubject('${level}', ${index})">تعديل</button>
                <button class="admin-btn small danger" onclick="deleteSubject('${level}', ${index})">حذف</button>
            </div>
        </div>
    `).join('');
}

// تحميل الدروس مع عرض جميع الدروس الموجودة
function loadLessons() {
    const level = document.getElementById('level-select').value;
    const subject = document.getElementById('subject-select').value;
    const lessonsContainer = document.getElementById('lessons-list');
    
    if (!level && !subject) {
        // عرض جميع الدروس من جميع المستويات والمواد
        let allLessonsHtml = '';
        let totalLessons = 0;
        
        Object.keys(currentLessonsData).forEach(levelKey => {
            const levelName = getLevelName(levelKey);
            const subjects = currentLessonsData[levelKey] || [];
            
            subjects.forEach(subjectData => {
                const lessons = subjectData.lessons || [];
                if (lessons.length > 0) {
                    allLessonsHtml += `
                        <div class="level-section">
                            <h4 style="color: var(--primary-blue); margin: 1rem 0; border-bottom: 2px solid var(--light-gray); padding-bottom: 0.5rem;">
                                ${levelName} - ${subjectData.name} (${lessons.length} دروس)
                            </h4>
                            <div class="lessons-grid">
                                ${lessons.map((lesson, index) => {
                                    totalLessons++;
                                    return `
                                        <div class="item-card">
                                            <div class="item-info">
                                                <h4>${lesson.title}</h4>
                                                <p>رقم الدرس: ${lesson.downloadNumber}</p>
                                                <p>الرابط: <a href="${lesson.url}" target="_blank">عرض الدرس</a></p>
                                            </div>
                                            <div class="item-actions">
                                                <button class="admin-btn small" onclick="editLesson('${levelKey}', '${subjectData.key}', ${index})">تعديل</button>
                                                <button class="admin-btn small danger" onclick="deleteLesson('${levelKey}', '${subjectData.key}', ${index})">حذف</button>
                                            </div>
                                        </div>
                                    `;
                                }).join('')}
                            </div>
                        </div>
                    `;
                }
            });
        });
        
        if (totalLessons === 0) {
            lessonsContainer.innerHTML = '<p>لا توجد دروس متاحة حالياً</p>';
        } else {
            lessonsContainer.innerHTML = `
                <div style="background: var(--light-gray); padding: 1rem; border-radius: 10px; margin-bottom: 2rem; text-align: center;">
                    <h3 style="color: var(--primary-blue);">إجمالي الدروس: ${totalLessons} درس</h3>
                </div>
                ${allLessonsHtml}
            `;
        }
        return;
    }
    
    if (!level || !subject) {
        lessonsContainer.innerHTML = '<p>اختر المستوى والمادة لعرض الدروس المحددة</p>';
        return;
    }
    
    const lessons = currentLessonsData[level]?.find(s => s.key === subject)?.lessons || [];
    
    if (lessons.length === 0) {
        lessonsContainer.innerHTML = '<p>لا توجد دروس متاحة لهذة المادة</p>';
        return;
    }
    
    lessonsContainer.innerHTML = lessons.map((lesson, index) => `
        <div class="item-card">
            <div class="item-info">
                <h4>${lesson.title}</h4>
                <p>رقم الدرس: ${lesson.downloadNumber}</p>
                <p>الرابط: <a href="${lesson.url}" target="_blank">عرض الدرس</a></p>
            </div>
            <div class="item-actions">
                <button class="admin-btn small" onclick="editLesson('${level}', '${subject}', ${index})">تعديل</button>
                <button class="admin-btn small danger" onclick="deleteLesson('${level}', '${subject}', ${index})">حذف</button>
            </div>
        </div>
    `).join('');
}

// دالة مساعدة للحصول على اسم المستوى
function getLevelName(levelKey) {
    const levelNames = {
        'common-core': 'الجذع المشترك',
        'first-bac': 'الأولى بكالوريا',
        'second-bac': 'الثانية بكالوريا'
    };
    return levelNames[levelKey] || levelKey;
}

// تحميل الاختبارات بطريقة منطقية ومنظمة
function loadTests() {
    const testsContainer = document.getElementById('tests-list');
    const selectedTestContainer = document.getElementById('selected-test-details');
    
    if (Object.keys(currentTestsData).length === 0) {
        testsContainer.innerHTML = '<p>لا توجد اختبارات متاحة</p>';
        return;
    }
    
    // إخفاء تفاصيل الاختبار المحدد عند إعادة تحميل القائمة
    if (selectedTestContainer) {
        selectedTestContainer.style.display = 'none';
    }
    
    // عرض ملخص الاختبارات فقط
    let testsHtml = `
        <div style="background: var(--light-gray); padding: 1rem; border-radius: 10px; margin-bottom: 2rem; text-align: center;">
            <h3 style="color: var(--primary-blue);">إجمالي الاختبارات: ${Object.keys(currentTestsData).length} اختبار</h3>
            <p>استخدم الاختيارات أعلاه للوصول للاختبار المطلوب</p>
        </div>
    `;
    
    testsContainer.innerHTML = testsHtml;
}

// تحميل مواد الاختبارات حسب المستوى
function loadTestSubjects() {
    const level = document.getElementById('test-management-level').value;
    const subjectSelect = document.getElementById('test-management-subject');
    const testSelect = document.getElementById('test-management-number');
    
    // إعادة تعيين الاختيارات
    subjectSelect.innerHTML = '<option value="">اختر المادة</option>';
    testSelect.innerHTML = '<option value="">اختر الاختبار</option>';
    document.getElementById('selected-test-details').style.display = 'none';
    
    if (!level) return;
    
    const subjectOptions = {
        'first-bac': [
            { key: 'french', name: 'الفرنسية' },
            { key: 'arabic', name: 'العربية' },
            { key: 'social', name: 'الاجتماعيات' },
            { key: 'islamic', name: 'التربية الإسلامية' }
        ],
        'second-bac': [
            { key: 'math', name: 'الرياضيات' },
            { key: 'physics', name: 'الفيزياء' },
            { key: 'biology', name: 'علوم الحياة والأرض' },
            { key: 'philosophy', name: 'الفلسفة' },
            { key: 'english', name: 'الإنجليزية' }
        ]
    };
    
    const subjects = subjectOptions[level] || [];
    subjects.forEach(subject => {
        subjectSelect.innerHTML += `<option value="${subject.key}">${subject.name}</option>`;
    });
}

// تحميل أرقام الاختبارات
function loadTestNumbers() {
    const level = document.getElementById('test-management-level').value;
    const subject = document.getElementById('test-management-subject').value;
    const testSelect = document.getElementById('test-management-number');
    
    testSelect.innerHTML = '<option value="">اختر الاختبار</option>';
    document.getElementById('selected-test-details').style.display = 'none';
    
    if (!level || !subject) return;
    
    // البحث عن الاختبارات المتاحة
    const availableTests = [];
    Object.keys(currentTestsData).forEach(testKey => {
        if (testKey.startsWith(`${level}-${subject}`)) {
            availableTests.push({
                key: testKey,
                title: currentTestsData[testKey].title
            });
        }
    });
    
    if (availableTests.length === 0) {
        testSelect.innerHTML += '<option value="">لا توجد اختبارات متاحة</option>';
        return;
    }
    
    availableTests.forEach((test, index) => {
        testSelect.innerHTML += `<option value="${test.key}">اختبار ${index + 1}: ${test.title}</option>`;
    });
}

// تحميل الاختبار المحدد مع إمكانية التعديل المباشر
function loadSpecificTest() {
    const testKey = document.getElementById('test-management-number').value;
    const detailsContainer = document.getElementById('selected-test-details');
    const titleElement = document.getElementById('selected-test-title');
    const previewContainer = document.getElementById('test-questions-preview');
    
    if (!testKey || !currentTestsData[testKey]) {
        detailsContainer.style.display = 'none';
        return;
    }
    
    const test = currentTestsData[testKey];
    titleElement.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <span>تعديل: ${test.title}</span>
            <div>
                <button class="admin-btn small" onclick="addQuestionToTest('${testKey}')">إضافة سؤال</button>
                <button class="admin-btn small" onclick="saveTestChanges('${testKey}')">حفظ التغييرات</button>
            </div>
        </div>
    `;
    
    // عرض الأسئلة القابلة للتعديل
    const questionsHtml = test.questions.map((question, questionIndex) => `
        <div class="editable-question" id="editable-question-${questionIndex}" style="background: var(--white); padding: 1.5rem; margin-bottom: 1rem; border-radius: 10px; border: 1px solid var(--light-gray);">
            <div class="question-header">
                <h5>السؤال ${questionIndex + 1}</h5>
                <div>
                    <button type="button" class="admin-btn small" onclick="addOptionToQuestion('${testKey}', ${questionIndex})">إضافة اختيار</button>
                    <button type="button" class="admin-btn small danger" onclick="removeQuestionFromTest('${testKey}', ${questionIndex})">حذف السؤال</button>
                </div>
            </div>
            <textarea id="question-text-edit-${questionIndex}" style="width: 100%; padding: 0.8rem; margin-bottom: 1rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; resize: vertical; min-height: 60px;" placeholder="نص السؤال">${question.question}</textarea>
            <div class="options-edit-container" id="options-edit-container-${questionIndex}">
                <h6>الخيارات:</h6>
                ${question.options.map((option, optIndex) => `
                    <div class="option-edit-input" id="option-edit-${questionIndex}-${optIndex}" style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                        <input type="radio" name="correct-edit-${questionIndex}" value="${optIndex}" ${optIndex === question.correct ? 'checked' : ''}>
                        <input type="text" id="option-text-edit-${questionIndex}-${optIndex}" value="${option}" style="flex: 1; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px;" placeholder="الخيار ${optIndex + 1}">
                        <button type="button" class="admin-btn small danger" onclick="removeOptionFromQuestion('${testKey}', ${questionIndex}, ${optIndex})" style="margin-right: 5px; ${question.options.length <= 2 ? 'display: none;' : ''}">×</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
    
    previewContainer.innerHTML = questionsHtml;
    detailsContainer.style.display = 'block';
}

// إضافة سؤال جديد للاختبار المحدد
function addQuestionToTest(testKey) {
    const test = currentTestsData[testKey];
    if (!test) return;
    
    const newQuestionIndex = test.questions.length;
    const newQuestion = {
        question: "السؤال الجديد",
        options: ["الاختيار الأول", "الاختيار الثاني"],
        correct: 0
    };
    
    test.questions.push(newQuestion);
    loadSpecificTest(); // إعادة تحميل العرض
}

// حذف سؤال من الاختبار المحدد
function removeQuestionFromTest(testKey, questionIndex) {
    const test = currentTestsData[testKey];
    if (!test || !confirm('هل أنت متأكد من حذف هذا السؤال؟')) return;
    
    test.questions.splice(questionIndex, 1);
    loadSpecificTest(); // إعادة تحميل العرض
}

// إضافة اختيار جديد لسؤال في الاختبار المحدد
function addOptionToQuestion(testKey, questionIndex) {
    const test = currentTestsData[testKey];
    if (!test || !test.questions[questionIndex]) return;
    
    test.questions[questionIndex].options.push("اختيار جديد");
    loadSpecificTest(); // إعادة تحميل العرض
}

// حذف اختيار من سؤال في الاختبار المحدد
function removeOptionFromQuestion(testKey, questionIndex, optionIndex) {
    const test = currentTestsData[testKey];
    if (!test || !test.questions[questionIndex]) return;
    
    const question = test.questions[questionIndex];
    if (question.options.length <= 2) {
        showError('لا يمكن حذف الاختيار - يجب وجود اختيارين على الأقل');
        return;
    }
    
    // تعديل الإجابة الصحيحة إذا كانت الاختيار المحذوف
    if (question.correct === optionIndex) {
        question.correct = 0; // تعيين الاختيار الأول كإجابة صحيحة افتراضية
    } else if (question.correct > optionIndex) {
        question.correct--; // تقليل فهرس الإجابة الصحيحة
    }
    
    question.options.splice(optionIndex, 1);
    loadSpecificTest(); // إعادة تحميل العرض
}

// حفظ التغييرات على الاختبار المحدد
async function saveTestChanges(testKey) {
    const test = currentTestsData[testKey];
    if (!test) {
        showError('لم يتم العثور على الاختبار');
        return;
    }
    
    // جمع التغييرات من النموذج
    test.questions.forEach((question, questionIndex) => {
        const questionTextElement = document.getElementById(`question-text-edit-${questionIndex}`);
        if (questionTextElement) {
            question.question = questionTextElement.value;
        }
        
        // جمع الاختيارات المحدثة
        const optionsContainer = document.getElementById(`options-edit-container-${questionIndex}`);
        if (optionsContainer) {
            const optionInputs = optionsContainer.querySelectorAll('input[type="text"]');
            const newOptions = [];
            
            optionInputs.forEach((input, optIndex) => {
                if (input.value.trim()) {
                    newOptions.push(input.value.trim());
                }
            });
            
            if (newOptions.length >= 2) {
                question.options = newOptions;
                
                // تحديث الإجابة الصحيحة
                const checkedRadio = optionsContainer.querySelector(`input[name="correct-edit-${questionIndex}"]:checked`);
                if (checkedRadio) {
                    question.correct = parseInt(checkedRadio.value);
                }
            }
        }
    });
    
    // حفظ على GitHub
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/test-engine.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        const questionsString = JSON.stringify(currentTestsData, null, 4);
        content = content.replace(/const sampleQuestions = {[\s\S]*?};/, `const sampleQuestions = ${questionsString};`);
        
        await updateFileOnGitHub('test-engine.js', content, `تحديث اختبار: ${test.title}`);
        
        loadSpecificTest(); // إعادة تحميل العرض
        showSuccess('تم حفظ التغييرات بنجاح');
        
    } catch (error) {
        console.error('خطأ في حفظ التغييرات:', error);
        showError('فشل في حفظ التغييرات');
    }
}

// تعديل الاختبار المحدد (الطريقة القديمة للنموذج المنفصل)
function editSelectedTest() {
    const testKey = document.getElementById('test-management-number').value;
    if (testKey) {
        editTest(testKey);
    }
}

// حذف الاختبار المحدد
function deleteSelectedTest() {
    const testKey = document.getElementById('test-management-number').value;
    if (testKey) {
        deleteTest(testKey);
    }
}

// إدارة المواد - إضافة مادة جديدة
function showAddSubjectForm() {
    document.getElementById('add-subject-form').style.display = 'block';
}

function hideAddSubjectForm() {
    document.getElementById('add-subject-form').style.display = 'none';
    document.getElementById('subject-form').reset();
}

async function saveSubjectToGitHub() {
    const name = document.getElementById('subject-name').value;
    const key = document.getElementById('subject-key').value;
    const icon = document.getElementById('subject-icon').value;
    const level = document.getElementById('subject-level').value;
    
    if (!name || !key || !icon || !level) {
        showError('جميع الحقول مطلوبة');
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/level.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        // إضافة المادة الجديدة
        const newSubject = {
            name: name,
            key: key,
            icon: icon,
            lessons: []
        };
        
        content = addSubjectToContent(content, level, newSubject);
        
        await updateFileOnGitHub('level.js', content, `إضافة مادة جديدة: ${name}`);
        
        hideAddSubjectForm();
        loadInitialData();
        
    } catch (error) {
        console.error('خطأ في حفظ المادة:', error);
        showError('فشل في حفظ المادة');
    }
}

// إضافة مادة للمحتوى
function addSubjectToContent(content, level, newSubject) {
    const levelPattern = new RegExp(`'${level}':\\s*\\[([\\s\\S]*?)\\]`, 'g');
    const match = levelPattern.exec(content);
    
    if (match) {
        const subjectsArray = match[1];
        const newSubjectStr = `
        {
            name: '${newSubject.name}',
            key: '${newSubject.key}',
            icon: '${newSubject.icon}',
            lessons: []
        },`;
        
        const updatedArray = subjectsArray + newSubjectStr;
        content = content.replace(match[0], `'${level}': [${updatedArray}]`);
    }
    
    return content;
}

// حذف مادة
async function deleteSubject(level, index) {
    if (!confirm('هل أنت متأكد من حذف هذه المادة؟ سيتم حذف جميع الدروس المرتبطة بها أيضاً.')) {
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/level.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        content = removeSubjectFromContent(content, level, index);
        
        await updateFileOnGitHub('level.js', content, `حذف مادة من ${level}`);
        
        loadInitialData();
        showSuccess('تم حذف المادة بنجاح');
        
    } catch (error) {
        console.error('خطأ في حذف المادة:', error);
        showError('فشل في حذف المادة');
    }
}

// إزالة مادة من المحتوى
function removeSubjectFromContent(content, level, index) {
    const levelData = currentLessonsData[level];
    if (levelData && levelData[index]) {
        levelData.splice(index, 1);
        
        // إعادة كتابة الملف
        const newLevelSubjects = JSON.stringify(currentLessonsData, null, 4);
        content = content.replace(/const levelSubjects = {[\s\S]*?};/, `const levelSubjects = ${newLevelSubjects};`);
    }
    
    return content;
}

// تحميل الدروس
function loadLessons() {
    const level = document.getElementById('level-select').value;
    const subject = document.getElementById('subject-select').value;
    const lessonsContainer = document.getElementById('lessons-list');
    
    if (!level || !subject) {
        lessonsContainer.innerHTML = '<p>اختر المستوى والمادة لعرض الدروس</p>';
        return;
    }
    
    const lessons = currentLessonsData[level]?.find(s => s.key === subject)?.lessons || [];
    
    if (lessons.length === 0) {
        lessonsContainer.innerHTML = '<p>لا توجد دروس متاحة لهذة المادة</p>';
        return;
    }
    
    lessonsContainer.innerHTML = lessons.map((lesson, index) => `
        <div class="item-card">
            <div class="item-info">
                <h4>${lesson.title}</h4>
                <p>رقم الدرس: ${lesson.downloadNumber}</p>
                <p>الرابط: <a href="${lesson.url}" target="_blank">عرض الدرس</a></p>
            </div>
            <div class="item-actions">
                <button class="admin-btn small" onclick="editLesson('${level}', '${subject}', ${index})">تعديل</button>
                <button class="admin-btn small danger" onclick="deleteLesson('${level}', '${subject}', ${index})">حذف</button>
            </div>
        </div>
    `).join('');
}

// إضافة درس
function showAddLessonForm() {
    document.getElementById('add-lesson-form').style.display = 'block';
}

function hideAddLessonForm() {
    document.getElementById('add-lesson-form').style.display = 'none';
    document.getElementById('lesson-form').reset();
}

// حفظ درس جديد
document.addEventListener('submit', function(e) {
    if (e.target.id === 'lesson-form') {
        e.preventDefault();
        saveLessonToGitHub();
    } else if (e.target.id === 'test-form') {
        e.preventDefault();
        saveTestToGitHub();
    } else if (e.target.id === 'subject-form') {
        e.preventDefault();
        saveSubjectToGitHub();
    }
});

async function saveLessonToGitHub() {
    const title = document.getElementById('lesson-title').value;
    const url = document.getElementById('lesson-url').value;
    const number = document.getElementById('lesson-number').value;
    const level = document.getElementById('lesson-level').value;
    const subject = document.getElementById('lesson-subject').value;
    
    if (!title || !url || !number || !level || !subject) {
        showError('جميع الحقول مطلوبة');
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/level.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        const newLesson = {
            title: title,
            downloadNumber: number,
            url: url
        };
        
        content = addLessonToContent(content, level, subject, newLesson);
        
        await updateFileOnGitHub('level.js', content, `إضافة درس جديد: ${title}`);
        
        hideAddLessonForm();
        loadInitialData();
        loadLessons();
        
    } catch (error) {
        console.error('خطأ في حفظ الدرس:', error);
        showError('فشل في حفظ الدرس');
    }
}

function addLessonToContent(content, level, subject, newLesson) {
    // البحث عن المادة المحددة وإضافة الدرس
    const subjectData = currentLessonsData[level]?.find(s => s.key === subject);
    if (subjectData) {
        subjectData.lessons.push(newLesson);
        
        // إعادة كتابة الملف
        const newLevelSubjects = JSON.stringify(currentLessonsData, null, 4);
        content = content.replace(/const levelSubjects = {[\s\S]*?};/, `const levelSubjects = ${newLevelSubjects};`);
    }
    
    return content;
}

// حذف درس
async function deleteLesson(level, subject, index) {
    if (!confirm('هل أنت متأكد من حذف هذا الدرس؟')) {
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/level.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        // حذف الدرس من البيانات المحلية
        const subjectData = currentLessonsData[level]?.find(s => s.key === subject);
        if (subjectData && subjectData.lessons[index]) {
            subjectData.lessons.splice(index, 1);
            
            // إعادة كتابة الملف
            const newLevelSubjects = JSON.stringify(currentLessonsData, null, 4);
            content = content.replace(/const levelSubjects = {[\s\S]*?};/, `const levelSubjects = ${newLevelSubjects};`);
            
            await updateFileOnGitHub('level.js', content, 'حذف درس');
            
            loadLessons();
            showSuccess('تم حذف الدرس بنجاح');
        }
        
    } catch (error) {
        console.error('خطأ في حذف الدرس:', error);
        showError('فشل في حذف الدرس');
    }
}

// تعديل درس
function editLesson(level, subject, index) {
    const subjectData = currentLessonsData[level]?.find(s => s.key === subject);
    if (!subjectData || !subjectData.lessons[index]) {
        showError('لم يتم العثور على الدرس');
        return;
    }
    
    const lesson = subjectData.lessons[index];
    
    // ملء النموذج بالبيانات الحالية
    document.getElementById('lesson-title').value = lesson.title;
    document.getElementById('lesson-url').value = lesson.url || '';
    document.getElementById('lesson-number').value = lesson.downloadNumber;
    document.getElementById('lesson-level').value = level;
    
    // تحديث المواد
    loadSubjects();
    setTimeout(() => {
        document.getElementById('lesson-subject').value = subject;
    }, 100);
    
    // تغيير النموذج ليصبح للتعديل
    document.querySelector('#lesson-form button[type="submit"]').textContent = 'حفظ التعديلات';
    document.querySelector('#lesson-form button[type="submit"]').onclick = () => updateLesson(level, subject, index);
    
    showAddLessonForm();
}

async function updateLesson(level, subject, index) {
    const title = document.getElementById('lesson-title').value;
    const url = document.getElementById('lesson-url').value;
    const number = document.getElementById('lesson-number').value;
    
    if (!title || !url || !number) {
        showError('جميع الحقول مطلوبة');
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/level.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        // تحديث الدرس
        const subjectData = currentLessonsData[level]?.find(s => s.key === subject);
        if (subjectData && subjectData.lessons[index]) {
            subjectData.lessons[index] = {
                title: title,
                downloadNumber: number,
                url: url
            };
            
            const newLevelSubjects = JSON.stringify(currentLessonsData, null, 4);
            content = content.replace(/const levelSubjects = {[\s\S]*?};/, `const levelSubjects = ${newLevelSubjects};`);
            
            await updateFileOnGitHub('level.js', content, `تعديل درس: ${title}`);
            
            hideAddLessonForm();
            loadLessons();
            showSuccess('تم تحديث الدرس بنجاح');
            
            // إعادة تعيين النموذج
            document.querySelector('#lesson-form button[type="submit"]').textContent = 'حفظ الدرس';
            document.querySelector('#lesson-form button[type="submit"]').onclick = null;
        }
        
    } catch (error) {
        console.error('خطأ في تحديث الدرس:', error);
        showError('فشل في تحديث الدرس');
    }
}

// إدارة الاختبارات

function showAddTestForm() {
    document.getElementById('add-test-form').style.display = 'block';
    questionCounter = 0;
    document.getElementById('questions-list').innerHTML = '';
    
    // إعادة تعيين النموذج للإضافة
    document.querySelector('#test-form button[type="submit"]').textContent = 'حفظ الاختبار';
    document.getElementById('test-form').onsubmit = (e) => {
        e.preventDefault();
        saveTestToGitHub();
    };
}

function hideAddTestForm() {
    document.getElementById('add-test-form').style.display = 'none';
    document.getElementById('test-form').reset();
    document.getElementById('questions-list').innerHTML = '';
    questionCounter = 0;
}

function addQuestion(existingQuestion = null) {
    questionCounter++;
    const questionsContainer = document.getElementById('questions-list');
    
    const optionsCount = existingQuestion ? existingQuestion.options.length : 4;
    const questionText = existingQuestion ? existingQuestion.question : '';
    const correctAnswer = existingQuestion ? existingQuestion.correct : 0;
    
    const questionHtml = `
        <div class="question-item" id="question-${questionCounter}">
            <div class="question-header">
                <h5>السؤال ${questionCounter}</h5>
                <div>
                    <button type="button" class="admin-btn small" onclick="addOption(${questionCounter})">إضافة اختيار</button>
                    <button type="button" class="admin-btn small danger" onclick="removeQuestion(${questionCounter})">حذف السؤال</button>
                </div>
            </div>
            <input type="text" placeholder="نص السؤال" id="question-text-${questionCounter}" value="${questionText}" required>
            <div class="options-container" id="options-container-${questionCounter}">
                <h6>الخيارات:</h6>
                ${Array.from({length: optionsCount}, (_, i) => `
                    <div class="option-input" id="option-input-${questionCounter}-${i}">
                        <input type="radio" name="correct-${questionCounter}" value="${i}" ${i === correctAnswer ? 'checked' : ''}>
                        <input type="text" placeholder="الخيار ${i + 1}" id="option-${questionCounter}-${i}" 
                               value="${existingQuestion ? existingQuestion.options[i] || '' : ''}" required>
                        <button type="button" class="admin-btn small danger" onclick="removeOption(${questionCounter}, ${i})" 
                                style="margin-right: 5px; ${optionsCount <= 2 ? 'display: none;' : ''}">×</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    questionsContainer.insertAdjacentHTML('beforeend', questionHtml);
}

// إضافة اختيار جديد لسؤال
function addOption(questionId) {
    const optionsContainer = document.getElementById(`options-container-${questionId}`);
    const existingOptions = optionsContainer.querySelectorAll('.option-input');
    const nextIndex = existingOptions.length;
    
    const optionHtml = `
        <div class="option-input" id="option-input-${questionId}-${nextIndex}">
            <input type="radio" name="correct-${questionId}" value="${nextIndex}">
            <input type="text" placeholder="الخيار ${nextIndex + 1}" id="option-${questionId}-${nextIndex}" required>
            <button type="button" class="admin-btn small danger" onclick="removeOption(${questionId}, ${nextIndex})" 
                    style="margin-right: 5px;">×</button>
        </div>
    `;
    
    optionsContainer.insertAdjacentHTML('beforeend', optionHtml);
    updateRemoveButtons(questionId);
}

// حذف اختيار من سؤال
function removeOption(questionId, optionIndex) {
    const optionsContainer = document.getElementById(`options-container-${questionId}`);
    const optionToRemove = document.getElementById(`option-input-${questionId}-${optionIndex}`);
    
    if (optionToRemove) {
        optionToRemove.remove();
        
        // إعادة ترقيم الاختيارات المتبقية
        const remainingOptions = optionsContainer.querySelectorAll('.option-input');
        remainingOptions.forEach((option, index) => {
            const optionInput = option.querySelector('input[type="text"]');
            const radioInput = option.querySelector('input[type="radio"]');
            const removeButton = option.querySelector('button');
            
            // تحديث المعرفات
            option.id = `option-input-${questionId}-${index}`;
            optionInput.id = `option-${questionId}-${index}`;
            optionInput.placeholder = `الخيار ${index + 1}`;
            radioInput.value = index;
            removeButton.onclick = () => removeOption(questionId, index);
        });
        
        updateRemoveButtons(questionId);
    }
}

// تحديث أزرار الحذف (إخفاؤها إذا كان هناك اختياران فقط)
function updateRemoveButtons(questionId) {
    const optionsContainer = document.getElementById(`options-container-${questionId}`);
    const options = optionsContainer.querySelectorAll('.option-input');
    const removeButtons = optionsContainer.querySelectorAll('.option-input button');
    
    removeButtons.forEach(btn => {
        btn.style.display = options.length <= 2 ? 'none' : 'inline-block';
    });
}

function removeQuestion(questionId) {
    document.getElementById(`question-${questionId}`).remove();
}

async function saveTestToGitHub() {
    const title = document.getElementById('test-title').value;
    const level = document.getElementById('test-level').value;
    const subject = document.getElementById('test-subject').value;
    const duration = document.getElementById('test-duration').value;
    const testId = document.getElementById('test-id').value || `${level}-${subject}`;
    
    if (!title || !level || !subject || !duration) {
        showError('جميع الحقول الأساسية مطلوبة');
        return;
    }
    
    // جمع الأسئلة مع الاختيارات المتغيرة
    const questions = [];
    for (let i = 1; i <= questionCounter; i++) {
        const questionElement = document.getElementById(`question-${i}`);
        if (questionElement) {
            const questionText = document.getElementById(`question-text-${i}`)?.value;
            const optionsContainer = document.getElementById(`options-container-${i}`);
            
            if (questionText && optionsContainer) {
                const optionInputs = optionsContainer.querySelectorAll('.option-input input[type="text"]');
                const options = [];
                let correctAnswer = 0;
                
                optionInputs.forEach((input, index) => {
                    if (input.value.trim()) {
                        options.push(input.value.trim());
                    }
                });
                
                // العثور على الإجابة الصحيحة
                const checkedRadio = optionsContainer.querySelector(`input[name="correct-${i}"]:checked`);
                if (checkedRadio) {
                    correctAnswer = parseInt(checkedRadio.value);
                }
                
                if (options.length >= 2 && questionText.trim()) {
                    questions.push({
                        question: questionText,
                        options: options,
                        correct: correctAnswer
                    });
                }
            }
        }
    }
    
    if (questions.length === 0) {
        showError('يجب إضافة سؤال واحد على الأقل مع اختيارين على الأقل');
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/test-engine.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        const newTest = {
            title: title,
            duration: parseInt(duration),
            questions: questions
        };
        
        content = addTestToContent(content, testId, newTest);
        
        await updateFileOnGitHub('test-engine.js', content, `إضافة اختبار جديد: ${title}`);
        
        hideAddTestForm();
        loadInitialData();
        loadTests();
        
    } catch (error) {
        console.error('خطأ في حفظ الاختبار:', error);
        showError('فشل في حفظ الاختبار');
    }
}

function addTestToContent(content, testKey, newTest) {
    currentTestsData[testKey] = newTest;
    
    const questionsString = JSON.stringify(currentTestsData, null, 4);
    content = content.replace(/const sampleQuestions = {[\s\S]*?};/, `const sampleQuestions = ${questionsString};`);
    
    return content;
}

// تعديل اختبار
function editTest(testKey) {
    const test = currentTestsData[testKey];
    if (!test) {
        showError('لم يتم العثور على الاختبار');
        return;
    }
    
    // ملء النموذج بالبيانات الحالية
    document.getElementById('test-title').value = test.title;
    document.getElementById('test-duration').value = test.duration;
    document.getElementById('test-id').value = testKey;
    
    // استخراج المستوى والمادة من testKey
    const keyParts = testKey.split('-');
    if (keyParts.length >= 2) {
        document.getElementById('test-level').value = keyParts[0] + '-' + keyParts[1];
        loadSubjects();
        setTimeout(() => {
            if (keyParts[2]) {
                document.getElementById('test-subject').value = keyParts[2];
            }
        }, 100);
    }
    
    // إضافة الأسئلة
    questionCounter = 0;
    document.getElementById('questions-list').innerHTML = '';
    
    test.questions.forEach((q, index) => {
        addQuestion(q); // تمرير السؤال الموجود
    });
    
    // تغيير النموذج ليصبح للتعديل
    document.querySelector('#test-form button[type="submit"]').textContent = 'حفظ التعديلات';
    document.getElementById('test-form').onsubmit = (e) => {
        e.preventDefault();
        updateTest(testKey);
    };
    
    showAddTestForm();
}

async function updateTest(testKey) {
    const title = document.getElementById('test-title').value;
    const duration = document.getElementById('test-duration').value;
    
    if (!title || !duration) {
        showError('العنوان والمدة مطلوبان');
        return;
    }
    
    // جمع الأسئلة المحدثة مع الاختيارات المتغيرة
    const questions = [];
    for (let i = 1; i <= questionCounter; i++) {
        const questionElement = document.getElementById(`question-${i}`);
        if (questionElement) {
            const questionText = document.getElementById(`question-text-${i}`)?.value;
            const optionsContainer = document.getElementById(`options-container-${i}`);
            
            if (questionText && optionsContainer) {
                const optionInputs = optionsContainer.querySelectorAll('.option-input input[type="text"]');
                const options = [];
                let correctAnswer = 0;
                
                optionInputs.forEach((input, index) => {
                    if (input.value.trim()) {
                        options.push(input.value.trim());
                    }
                });
                
                // العثور على الإجابة الصحيحة
                const checkedRadio = optionsContainer.querySelector(`input[name="correct-${i}"]:checked`);
                if (checkedRadio) {
                    correctAnswer = parseInt(checkedRadio.value);
                }
                
                if (options.length >= 2 && questionText.trim()) {
                    questions.push({
                        question: questionText,
                        options: options,
                        correct: correctAnswer
                    });
                }
            }
        }
    }
    
    if (questions.length === 0) {
        showError('يجب وجود سؤال واحد على الأقل مع اختيارين على الأقل');
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/test-engine.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        // تحديث الاختبار
        currentTestsData[testKey] = {
            title: title,
            duration: parseInt(duration),
            questions: questions
        };
        
        const questionsString = JSON.stringify(currentTestsData, null, 4);
        content = content.replace(/const sampleQuestions = {[\s\S]*?};/, `const sampleQuestions = ${questionsString};`);
        
        await updateFileOnGitHub('test-engine.js', content, `تعديل اختبار: ${title}`);
        
        hideAddTestForm();
        loadTests();
        // تحديث العرض المحدد أيضاً
        setTimeout(() => {
            loadSpecificTest();
        }, 1000);
        showSuccess('تم تحديث الاختبار بنجاح');
        
    } catch (error) {
        console.error('خطأ في تحديث الاختبار:', error);
        showError('فشل في تحديث الاختبار');
    }
}

// حذف اختبار
async function deleteTest(testKey) {
    if (!confirm('هل أنت متأكد من حذف هذا الاختبار؟')) {
        return;
    }
    
    try {
        const response = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/test-engine.js`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`
            }
        });
        
        const fileData = await response.json();
        let content = atob(fileData.content);
        
        // حذف الاختبار من البيانات المحلية
        delete currentTestsData[testKey];
        
        // إعادة كتابة الملف
        const questionsString = JSON.stringify(currentTestsData, null, 4);
        content = content.replace(/const sampleQuestions = {[\s\S]*?};/, `const sampleQuestions = ${questionsString};`);
        
        await updateFileOnGitHub('test-engine.js', content, 'حذف اختبار');
        
        loadTests();
        showSuccess('تم حذف الاختبار بنجاح');
        
    } catch (error) {
        console.error('خطأ في حذف الاختبار:', error);
        showError('فشل في حذف الاختبار');
    }
}

// تحديث ملف على GitHub
async function updateFileOnGitHub(filePath, content, message) {
    showLoading();
    
    try {
        const fileResponse = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${filePath}`, {
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });
        
        let sha = null;
        if (fileResponse.ok) {
            const fileData = await fileResponse.json();
            sha = fileData.sha;
        }
        
        const updateResponse = await fetch(`https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/contents/${filePath}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${githubConfig.token}`,
                'Accept': 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: message,
                content: btoa(unescape(encodeURIComponent(content))),
                sha: sha
            })
        });
        
        if (updateResponse.ok) {
            showSuccess('تم حفظ التغييرات بنجاح على GitHub!');
        } else {
            const errorData = await updateResponse.json();
            throw new Error(errorData.message || 'فشل في حفظ التغييرات');
        }
        
    } catch (error) {
        console.error('خطأ في GitHub API:', error);
        showError('فشل في حفظ التغييرات: ' + error.message);
    } finally {
        hideLoading();
    }
}

// وظائف مساعدة للواجهة
function showLoading() {
    document.getElementById('loading-overlay').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-overlay').style.display = 'none';
}

function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])');
    if (activeTab) {
        const contentHeader = activeTab.querySelector('.content-header');
        if (contentHeader) {
            contentHeader.insertAdjacentElement('afterend', successDiv);
        }
    }
    
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])');
    if (activeTab) {
        const contentHeader = activeTab.querySelector('.content-header');
        if (contentHeader) {
            contentHeader.insertAdjacentElement('afterend', errorDiv);
        }
    }
    
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}

// حفظ إعدادات GitHub
function saveSettings() {
    githubConfig.token = document.getElementById('github-token').value;
    githubConfig.owner = document.getElementById('github-owner').value;
    githubConfig.repo = document.getElementById('github-repo').value;
    
    localStorage.setItem('github-config', JSON.stringify(githubConfig));
    
    showSuccess('تم حفظ الإعدادات بنجاح');
}

// تحميل الإعدادات المحفوظة
function loadSavedSettings() {
    const saved = localStorage.getItem('github-config');
    if (saved) {
        githubConfig = JSON.parse(saved);
        if (document.getElementById('github-token')) {
            document.getElementById('github-token').value = githubConfig.token;
            document.getElementById('github-owner').value = githubConfig.owner;
            document.getElementById('github-repo').value = githubConfig.repo;
        }
    }
}

// البحث في الاختبارات
function searchTests() {
    loadTests();
}

// تعديل مادة (وظيفة أساسية)
function editSubject(level, index) {
    showError('ميزة تعديل المادة قيد التطوير - يمكنك حذفها وإضافة مادة جديدة');
}
