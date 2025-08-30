// Level page JavaScript functionality

// مواد كل مستوى
const levelSubjects = {
    'common-core': [
        {
            name: 'العربية',
            icon: '📝',
            lessons: [
                { title: 'النصوص الأدبية', downloadNumber: '01', https://www.mediafire.com/file/uxys0jeor33l2o3/%25D8%25AF%25D8%25B1%25D9%2588%25D8%25B3_%25D8%25A7%25D9%2584%25D8%25A3%25D9%2588%25D9%2584%25D9%2589_%25D8%25A8%25D8%25A7%25D9%2583_%25D8%25A7%25D9%2584%25D8%25AA%25D8%25B1%25D8%25A8%25D9%258A%25D8%25A9_%25D8%25A7%25D9%2584%25D8%25A5%25D8%25B3%25D9%2584%25D8%25A7%25D9%2585%25D9%258A%25D8%25A9_%25D9%2583%25D8%25A7%25D9%2585%25D9%2584%25D8%25A9.pdf/file: '' },
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
        ...�تم إضافة محتوى التمرين: ${exerciseTitle} قريباً`);
    //     });
    // });

    // Animation on scroll (This is now handled by the displaySubjects function)
    // const observerOptions = {
    //     threshold: 0.1,
    //     rootMargin: '0px 0px -50px 0px'
    // };

    // const observer = new IntersectionObserver(function(entries) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.style.opacity = '1';
    //             entry.target.style.transform = 'translateY(0)';
    //         }
    //     });
    // }, observerOptions);

    // const subjectContainers = document.querySelectorAll('.subject-container');
    // subjectContainers.forEach((container, index) => {
    //     container.style.opacity = '0';
    //     container.style.transform = 'translateY(50px)';
    //     container.style.transition = `all 0.6s ease ${index * 0.2}s`;
    //     observer.observe(container);
    // });
});
