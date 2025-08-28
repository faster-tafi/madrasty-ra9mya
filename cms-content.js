
// CMS Content Management System
class CMSContent {
    constructor() {
        this.contentCache = new Map();
        this.basePaths = {
            pages: '/content/pages/',
            subjects: '/content/subjects/',
            lessons: '/content/lessons/',
            site: '/content/site/'
        };
    }

    // تحميل محتوى من مجموعة معينة
    async loadContent(collection, fileName) {
        try {
            const cacheKey = `${collection}-${fileName}`;
            
            // التحقق من الكاش أولاً
            if (this.contentCache.has(cacheKey)) {
                return this.contentCache.get(cacheKey);
            }

            const basePath = this.basePaths[collection];
            if (!basePath) {
                throw new Error(`Collection ${collection} not found`);
            }

            const response = await fetch(`${basePath}${fileName}.json`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const content = await response.json();
            
            // التحقق من أن المحتوى منشور
            if (content.published === false) {
                throw new Error('Content not published');
            }

            // حفظ في الكاش
            this.contentCache.set(cacheKey, content);
            
            return content;
        } catch (error) {
            console.error(`خطأ في تحميل المحتوى: ${collection}/${fileName}`, error);
            return null;
        }
    }

    // تحميل جميع العناصر من مجموعة معينة
    async loadAllFromCollection(collection) {
        // في التطبيق الحقيقي، يمكن استخدام API لجلب قائمة الملفات
        // هنا سنستخدم قائمة ثابتة للعرض التوضيحي
        const commonFiles = {
            pages: ['home', 'about'],
            subjects: ['sample-subject'],
            lessons: ['sample-lesson'],
            site: ['main']
        };

        const files = commonFiles[collection] || [];
        const contents = [];

        for (const fileName of files) {
            const content = await this.loadContent(collection, fileName);
            if (content) {
                contents.push({ fileName, ...content });
            }
        }

        return contents;
    }

    // تحميل معلومات الموقع
    async loadSiteInfo() {
        return await this.loadContent('site', 'main');
    }

    // تحميل المواد حسب المستوى
    async loadSubjectsByLevel(level = null) {
        const subjects = await this.loadAllFromCollection('subjects');
        if (level) {
            return subjects.filter(subject => subject.level === level);
        }
        return subjects;
    }

    // تحميل الدروس لمادة معينة
    async loadLessonsBySubject(subjectName) {
        const lessons = await this.loadAllFromCollection('lessons');
        return lessons.filter(lesson => lesson.subject === subjectName);
    }

    // عرض محتوى صفحة في عنصر HTML
    renderPageContent(content, targetElement) {
        if (!content || !targetElement) return;

        targetElement.innerHTML = `
            <article class="cms-content">
                <header class="content-header">
                    <h2 class="content-title">${content.title}</h2>
                    ${content.description ? `<p class="content-description">${content.description}</p>` : ''}
                    <time class="content-date">${this.formatDate(content.date)}</time>
                </header>
                <div class="content-body">
                    ${this.formatBodyText(content.body)}
                </div>
            </article>
        `;
    }

    // عرض المواد الدراسية
    renderSubjects(subjects, targetElement) {
        if (!subjects || !targetElement) return;

        const subjectsHTML = subjects.map(subject => `
            <div class="subject-card" data-subject="${subject.fileName}">
                <h3 class="subject-name">${subject.name}</h3>
                <p class="subject-description">${subject.description}</p>
                <span class="subject-level">${this.getLevelName(subject.level)}</span>
                <div class="subject-actions">
                    <button onclick="cms.loadSubjectLessons('${subject.name}')" class="btn-lessons">
                        عرض الدروس
                    </button>
                </div>
            </div>
        `).join('');

        targetElement.innerHTML = `
            <div class="subjects-grid">
                ${subjectsHTML}
            </div>
        `;
    }

    // عرض الدروس
    renderLessons(lessons, targetElement) {
        if (!lessons || !targetElement) return;

        const lessonsHTML = lessons.map(lesson => `
            <div class="lesson-card">
                <h4 class="lesson-title">${lesson.title}</h4>
                ${lesson.description ? `<p class="lesson-description">${lesson.description}</p>` : ''}
                <div class="lesson-actions">
                    <a href="${lesson.link}" target="_blank" class="btn-lesson-link">
                        انتقال للدرس
                    </a>
                </div>
            </div>
        `).join('');

        targetElement.innerHTML = `
            <div class="lessons-grid">
                ${lessonsHTML}
            </div>
        `;
    }

    // تحديث اسم الموقع في الهيدر
    async updateSiteName() {
        try {
            const siteInfo = await this.loadSiteInfo();
            if (siteInfo) {
                const siteNameElements = document.querySelectorAll('.nav-brand h2, .footer-brand h3');
                siteNameElements.forEach(element => {
                    element.textContent = siteInfo.siteName;
                });

                // تحديث description في الفوتر
                const footerDescription = document.querySelector('.footer-brand p');
                if (footerDescription && siteInfo.description) {
                    footerDescription.textContent = siteInfo.description.substring(0, 50) + '...';
                }

                // تحديث حقوق النشر
                const copyrightElement = document.querySelector('.footer-bottom p');
                if (copyrightElement && siteInfo.footer) {
                    copyrightElement.textContent = siteInfo.footer;
                }
            }
        } catch (error) {
            console.error('خطأ في تحديث معلومات الموقع:', error);
        }
    }

    // تحميل دروس مادة معينة
    async loadSubjectLessons(subjectName) {
        const lessons = await this.loadLessonsBySubject(subjectName);
        const lessonsContainer = document.getElementById('lessons-container');
        
        if (lessonsContainer) {
            this.renderLessons(lessons, lessonsContainer);
            lessonsContainer.style.display = 'block';
        }
    }

    // تنسيق النص (تحويل الأسطر الجديدة إلى فقرات)
    formatBodyText(text) {
        if (!text) return '';
        return text.split('\n\n')
                  .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
                  .join('');
    }

    // تنسيق التاريخ
    formatDate(dateString) {
        if (!dateString) return '';
        
        const date = new Date(dateString);
        return date.toLocaleDateString('ar-MA', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // الحصول على اسم المستوى بالعربية
    getLevelName(level) {
        const levels = {
            'common-core': 'الجذع المشترك',
            'first-bac': 'الأولى بكالوريا',
            'second-bac': 'الثانية بكالوريا'
        };
        return levels[level] || level;
    }

    // إضافة محتوى ديناميكي للصفحة الرئيسية
    async enhanceHomePage() {
        try {
            const homeContent = await this.loadContent('pages', 'home');
            if (homeContent) {
                // تحديث العنوان الرئيسي إذا كان موجود في المحتوى
                const heroTitle = document.querySelector('.hero-text h1');
                const heroDescription = document.querySelector('.hero-text p');
                
                if (heroTitle && homeContent.title) {
                    heroTitle.textContent = homeContent.title;
                }
                
                if (heroDescription && homeContent.description) {
                    heroDescription.textContent = homeContent.description;
                }

                // إضافة قسم محتوى إضافي إذا كان موجود
                if (homeContent.body && homeContent.body.trim()) {
                    this.addDynamicContentSection(homeContent);
                }
            }
        } catch (error) {
            console.error('خطأ في تحسين الصفحة الرئيسية:', error);
        }
    }

    // إضافة قسم محتوى ديناميكي
    addDynamicContentSection(content) {
        const whyUsSection = document.querySelector('.why-us');
        if (!whyUsSection) return;

        const dynamicSection = document.createElement('section');
        dynamicSection.className = 'dynamic-content-section';
        dynamicSection.style.cssText = `
            padding: 4rem 5%;
            background: var(--white);
            text-align: center;
        `;

        this.renderPageContent(content, dynamicSection);
        
        // إدراج القسم بعد قسم "لماذا أكاديمية النجاح؟"
        whyUsSection.parentNode.insertBefore(dynamicSection, whyUsSection.nextSibling);
    }

    // إنشاء نافذة تنقل المحتوى
    createContentNavigation() {
        const navElement = document.createElement('div');
        navElement.className = 'cms-navigation';
        navElement.innerHTML = `
            <div class="content-nav-buttons">
                <button onclick="cms.showHomePage()" class="nav-btn">الرئيسية</button>
                <button onclick="cms.showAboutPage()" class="nav-btn">من نحن</button>
                <button onclick="cms.showSubjects()" class="nav-btn">المواد الدراسية</button>
            </div>
            <div id="dynamic-content-area" class="dynamic-content-area"></div>
            <div id="lessons-container" class="lessons-container" style="display:none;"></div>
        `;

        // إضافة النافذة بعد القسم الرئيسي
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            heroSection.parentNode.insertBefore(navElement, heroSection.nextSibling);
        }
    }

    // عرض الصفحة الرئيسية
    async showHomePage() {
        const content = await this.loadContent('pages', 'home');
        const contentArea = document.getElementById('dynamic-content-area');
        if (content && contentArea) {
            this.renderPageContent(content, contentArea);
        }
    }

    // عرض صفحة من نحن
    async showAboutPage() {
        const content = await this.loadContent('pages', 'about');
        const contentArea = document.getElementById('dynamic-content-area');
        if (content && contentArea) {
            this.renderPageContent(content, contentArea);
        }
    }

    // عرض المواد الدراسية
    async showSubjects() {
        const subjects = await this.loadAllFromCollection('subjects');
        const contentArea = document.getElementById('dynamic-content-area');
        if (subjects && contentArea) {
            this.renderSubjects(subjects, contentArea);
        }
        // إخفاء منطقة الدروس
        const lessonsContainer = document.getElementById('lessons-container');
        if (lessonsContainer) {
            lessonsContainer.style.display = 'none';
        }
    }
}

// إنشاء مثيل CMS عالمي
const cms = new CMSContent();

// تطبيق التحسينات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', async function() {
    // تحديث معلومات الموقع أولاً
    await cms.updateSiteName();

    // التحقق من أننا في الصفحة الرئيسية
    if (window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
        await cms.enhanceHomePage();
        cms.createContentNavigation();
        // تحميل الصفحة الرئيسية تلقائياً
        setTimeout(() => {
            cms.showHomePage();
        }, 1000);
    }
});

// تصدير للاستخدام في ملفات أخرى
window.CMS = cms;
