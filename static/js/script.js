
// Animación fade-in universal
document.addEventListener('DOMContentLoaded', function () {
        const fadeEls = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                        if (entry.isIntersecting) {
                                entry.target.classList.add('visible');
                        }
                });
        }, { threshold: 0.1 });
        fadeEls.forEach(el => observer.observe(el));
});

// Traducción dinámica para index.html, courses-certificates.html y admission.html
if (document.getElementById('langSwitch')) {
        // Detectar página y definir traducciones
        let translations = {};
        let page = '';
        if (document.querySelector('h1.display-3')) {
                // index.html
                page = 'index';
                translations = {
                        es: {
                                lang: 'Español',
                                switch: 'English',
                                nav: ['Inicio', 'Programas', 'Beneficios', 'Noticias', 'Testimonios', 'Contacto', 'Courses & Certificates', 'Admission'],
                                heroTitle: 'World Theology University',
                                heroSubtitle: 'Formando líderes con visión global y fundamento teológico sólido.',
                                heroBtn: 'Descubre nuestros programas',
                                programas: 'Nuestros Programas',
                                prog1: 'Licenciatura en Teología',
                                prog1desc: 'Formación integral en teología, liderazgo y servicio global.',
                                prog2: 'Maestría en Estudios Bíblicos',
                                prog2desc: 'Profundiza en el estudio bíblico y la investigación teológica avanzada.',
                                prog3: 'Doctorado en Misión Global',
                                prog3desc: 'Desarrolla competencias para el liderazgo y la misión en contextos internacionales.',
                                features: '¿Por qué elegir WTU?',
                                feat1: 'Docentes Internacionales',
                                feat1desc: 'Profesores con experiencia global y excelencia académica.',
                                feat2: 'Modalidad Flexible',
                                feat2desc: 'Estudia online, presencial o híbrido según tus necesidades.',
                                feat3: 'Enfoque en Liderazgo',
                                feat3desc: 'Desarrolla habilidades para liderar y servir en cualquier contexto.',
                                blog: 'Noticias y Actualidad',
                                blog1: 'WTU inaugura nuevo campus virtual',
                                blog1desc: 'Descubre las ventajas de nuestra nueva plataforma de aprendizaje online.',
                                blog2: 'Conferencia internacional de teología',
                                blog2desc: 'Participa en nuestro evento anual con ponentes de todo el mundo.',
                                blog3: 'Becas para nuevos estudiantes',
                                blog3desc: 'Solicita una de nuestras becas y comienza tu formación en WTU.',
                                leerMas: 'Leer más',
                                testimonios: 'Testimonios',
                                test1: '“WTU me brindó una visión global y herramientas para servir mejor.”',
                                test1footer: 'Juan Pérez, Egresado',
                                test2: '“La flexibilidad y calidad académica de WTU superó mis expectativas.”',
                                test2footer: 'María López, Estudiante',
                                footer: 'Todos los derechos reservados.'
                        },
                        en: {
                                lang: 'English',
                                switch: 'Español',
                                nav: ['Home', 'Programs', 'Benefits', 'News', 'Testimonials', 'Contact', 'Courses & Certificates', 'Admission'],
                                heroTitle: 'World Theology University',
                                heroSubtitle: 'Training leaders with a global vision and solid theological foundation.',
                                heroBtn: 'Discover our programs',
                                programas: 'Our Programs',
                                prog1: 'Bachelor in Theology',
                                prog1desc: 'Comprehensive training in theology, leadership, and global service.',
                                prog2: 'Master in Biblical Studies',
                                prog2desc: 'Deepen your biblical studies and advanced theological research.',
                                prog3: 'PhD in Global Mission',
                                prog3desc: 'Develop leadership and mission skills for international contexts.',
                                features: 'Why choose WTU?',
                                feat1: 'International Faculty',
                                feat1desc: 'Professors with global experience and academic excellence.',
                                feat2: 'Flexible Modality',
                                feat2desc: 'Study online, in-person, or hybrid as you need.',
                                feat3: 'Leadership Focus',
                                feat3desc: 'Develop skills to lead and serve in any context.',
                                blog: 'News & Updates',
                                blog1: 'WTU launches new virtual campus',
                                blog1desc: 'Discover the advantages of our new online learning platform.',
                                blog2: 'International Theology Conference',
                                blog2desc: 'Join our annual event with speakers from around the world.',
                                blog3: 'Scholarships for new students',
                                blog3desc: 'Apply for a scholarship and start your education at WTU.',
                                leerMas: 'Read more',
                                testimonios: 'Testimonials',
                                test1: '“WTU gave me a global vision and tools to serve better.”',
                                test1footer: 'John Smith, Graduate',
                                test2: '“WTU’s flexibility and academic quality exceeded my expectations.”',
                                test2footer: 'Mary Lopez, Student',
                                footer: 'All rights reserved.'
                        }
                };
        } else if (document.querySelector('h1.display-4')) {
                // Detectar si es courses-certificates.html o admission.html
                if (window.location.pathname.includes('admission')) {
                        // admission.html
                        page = 'admission';
                        translations = {
                                es: {
                                        lang: 'Español',
                                        switch: 'English',
                                        nav: ['Inicio', 'Programas', 'Beneficios', 'Noticias', 'Testimonios', 'Contacto', 'Courses & Certificates', 'Admisión'],
                                        heroTitle: 'Proceso de Admisión',
                                        heroSubtitle: 'Sigue los pasos a continuación para completar tu admisión a World Theology University.',
                                        step1Title: 'Paso 1 — Descarga el Formulario de Admisión',
                                        step1Desc: 'Para comenzar tu admisión, descarga el formulario oficial de solicitud en PDF. Por favor, llénalo de forma completa y clara.',
                                        step1Btn: 'Descargar Formulario PDF',
                                        step2Title: 'Paso 2 — Completa el Formulario',
                                        step2Desc: 'Completa el formulario con tu información personal, antecedentes académicos y selección de programa.',
                                        step3Title: 'Paso 3 — Sube el Formulario Completado',
                                        step3Desc: 'Una vez que hayas completado el formulario, súbelo utilizando el Google Form proporcionado a continuación.',
                                        step3Btn: 'Subir Formulario Completado (Google Form)',
                                        notesTitle: 'Notas Importantes',
                                        notesDesc: 'Asegúrate de que toda la información sea precisa antes de enviar tu formulario. Nuestro equipo de admisiones se pondrá en contacto contigo en un plazo de 3 a 5 días hábiles.',
                                        ctaTitle: '¿Necesitas Asistencia?',
                                        ctaDesc: 'Si necesitas asistencia, contacta a nuestra oficina de admisiones en:',
                                        ctaEmail: 'admissions@worlduniversitytheology.com'
                                },
                                en: {
                                        lang: 'English',
                                        switch: 'Español',
                                        nav: ['Home', 'Programs', 'Benefits', 'News', 'Testimonials', 'Contact', 'Courses & Certificates', 'Admission'],
                                        heroTitle: 'Admission Process',
                                        heroSubtitle: 'Follow the steps below to complete your admission to World Theology University.',
                                        step1Title: 'Step 1 — Download the Admission Form',
                                        step1Desc: 'To begin your admission, download the official PDF application form. Please fill it out completely and clearly.',
                                        step1Btn: 'Download PDF Application Form',
                                        step2Title: 'Step 2 — Fill Out the Form',
                                        step2Desc: 'Complete the form with your personal information, academic background, and program selection.',
                                        step3Title: 'Step 3 — Upload the Completed Form',
                                        step3Desc: 'Once you have filled out the form, please upload it using the Google Form provided below.',
                                        step3Btn: 'Upload Completed Form (Google Form)',
                                        notesTitle: 'Important Notes',
                                        notesDesc: 'Ensure all information is accurate before submitting your form. Our admissions team will contact you within 3–5 business days.',
                                        ctaTitle: 'Need Assistance?',
                                        ctaDesc: 'If you need assistance, contact our admissions office at:',
                                        ctaEmail: 'admissions@worlduniversitytheology.com'
                                }
                        };
                } else {
                        // courses-certificates.html
                        page = 'courses';
                        translations = {
                                es: {
                                        lang: 'Español',
                                        switch: 'English',
                                        nav: ['Inicio', 'Programas', 'Beneficios', 'Noticias', 'Testimonios', 'Contacto', 'Courses & Certificates', 'Admisión'],
                                heroTitle: 'Courses & Certificates – World Theology University',
                                heroSubtitle: 'Explora todos nuestros programas, certificados y oportunidades de formación ministerial.',
                                coursesCatalog: 'Catálogo de Cursos',
                                diplomas: 'Diplomados WTU (96 horas)',
                                apologetics: 'Apologética y Cosmovisión Cristiana',
                                cards: [
                                    {
                                        title: 'Finding Your Charisma',
                                        hours: '9 horas / 3 clases',
                                        mode: 'Asincrónico',
                                        price: '$129',
                                        lang: 'Inglés/Español',
                                        desc: 'Curso diseñado para ayudar al estudiante a comprender y descubrir su don espiritual (charisma). Más del 90% de quienes lo toman identifican su don con claridad y experimentan crecimiento personal y ministerial. <br><strong>Aprendizajes:</strong> Comprender los dones espirituales, Descubrir el don personal, Activarlo en la práctica ministerial.',
                                        material: 'Incluido en la plataforma'
                                    },
                                    {
                                        title: 'Walking in Your Anointing',
                                        hours: '18 horas / 6 clases',
                                        mode: 'Asincrónico',
                                        price: '$257',
                                        lang: 'Inglés/Español',
                                        desc: 'Curso enfocado en identidad espiritual, cosmovisión bíblica y un entendimiento profundo de la unción del Espíritu Santo. Inspirado en temáticas del Dr. Michael Heiser.',
                                        material: 'Walking in Your Anointing – David E. Schroeder'
                                    },
                                    {
                                        title: 'Worldviews and World Religions',
                                        hours: '21 horas / 7 clases',
                                        mode: 'Asincrónico',
                                        price: '$299',
                                        lang: 'Inglés/Español',
                                        desc: 'Explora cómo funcionan las cosmovisiones, cómo influyen en la cultura y cómo entender religiones globales desde una perspectiva cristiana. Curso interactivo con actividades prácticas.',
                                        material: 'The Universe Next Door – James Sire'
                                    },
                                    {
                                        title: 'Spiritual Warfare',
                                        hours: '21 horas / 7 clases',
                                        mode: 'Asincrónico',
                                        price: '$299',
                                        lang: 'Inglés/Español',
                                        desc: 'Curso sólido sobre guerra espiritual, apologética esencial y defensa de la fe. Analiza tácticas del enemigo, armadura espiritual y fundamentos bíblicos.',
                                        material: 'The Lion, the Church, & the Warfare – David Schroeder'
                                    },
                                    {
                                        title: 'Frontiers of Faith',
                                        hours: '18 horas / 6 clases',
                                        mode: 'Asincrónico',
                                        price: '$256',
                                        lang: 'Inglés/Español',
                                        desc: 'Curso doctrinal claro y profundo ideal tanto para creyentes nuevos como para cristianos maduros que desean comprender mejor fundamentos bíblicos.',
                                        material: 'Frontiers of Faith – David E. Schroeder'
                                    },
                                    {
                                        title: 'Church on Mission',
                                        hours: '15 horas / 5 clases',
                                        mode: 'Asincrónico',
                                        price: '$215',
                                        lang: 'Inglés/Español',
                                        desc: 'Curso innovador que “reinventa el seminario”, explorando las habilidades ministeriales que la formación tradicional no enseña.',
                                        material: 'Church Next – Eddie Gibbs'
                                    },
                                    {
                                        title: 'Bible Alive',
                                        hours: '60 horas / 20 clases',
                                        mode: 'Asincrónico',
                                        price: '$855',
                                        lang: 'Inglés/Español',
                                        desc: 'Panorama completo de la Biblia: contexto, contenido, temas ministeriales y aplicaciones personales de los 66 libros.',
                                        material: 'NIV Archaeological Study Bible'
                                    },
                                    {
                                        title: 'Come & Go Disciple-making',
                                        hours: '48 horas / 16 clases',
                                        mode: 'Asincrónico',
                                        price: '$685',
                                        lang: 'Inglés/Español',
                                        desc: 'Entrenamiento práctico para formar discípulos que discipulan. Profundiza en el modelo bíblico “Ven y sígueme / Ve y haz discípulos”.',
                                        material: 'Incluido en la plataforma'
                                    },
                                    {
                                        title: 'Spiritual Formation',
                                        hours: '30 horas / 15 clases',
                                        mode: 'Asincrónico',
                                        price: '$350',
                                        lang: 'Inglés/Español',
                                        desc: 'Explora transformación personal, carácter, hábitos, emociones, integridad y vida espiritual diaria desde una perspectiva bíblica.',
                                        material: 'Incluido en la plataforma'
                                    }
                                ]
                        },
                        en: {
                                lang: 'English',
                                switch: 'Español',
                                nav: ['Home', 'Programs', 'Benefits', 'News', 'Testimonials', 'Contact', 'Courses & Certificates'],
                                heroTitle: 'Courses & Certificates – World Theology University',
                                heroSubtitle: 'Explore all our programs, certificates, and ministry training opportunities.',
                                coursesCatalog: 'Courses Catalog',
                                diplomas: 'WTU Diplomas (96 hours)',
                                apologetics: 'Apologetics & Christian Worldview',
                                cards: [
                                    {
                                        title: 'Finding Your Charisma',
                                        hours: '9 hours / 3 classes',
                                        mode: 'Asynchronous',
                                        price: '$129',
                                        lang: 'English/Spanish',
                                        desc: 'A course designed to help students understand and discover their spiritual gift (charisma). Over 90% of participants clearly identify their gift and experience personal and ministerial growth.<br><strong>Learning:</strong> Understand spiritual gifts, Discover your personal gift, Activate it in ministry practice.',
                                        material: 'Included in the platform'
                                    },
                                    {
                                        title: 'Walking in Your Anointing',
                                        hours: '18 hours / 6 classes',
                                        mode: 'Asynchronous',
                                        price: '$257',
                                        lang: 'English/Spanish',
                                        desc: 'A course focused on spiritual identity, biblical worldview, and a deep understanding of the anointing of the Holy Spirit. Inspired by Dr. Michael Heiser.',
                                        material: 'Walking in Your Anointing – David E. Schroeder'
                                    },
                                    {
                                        title: 'Worldviews and World Religions',
                                        hours: '21 hours / 7 classes',
                                        mode: 'Asynchronous',
                                        price: '$299',
                                        lang: 'English/Spanish',
                                        desc: 'Explore how worldviews work, how they influence culture, and how to understand global religions from a Christian perspective. Interactive course with practical activities.',
                                        material: 'The Universe Next Door – James Sire'
                                    },
                                    {
                                        title: 'Spiritual Warfare',
                                        hours: '21 hours / 7 classes',
                                        mode: 'Asynchronous',
                                        price: '$299',
                                        lang: 'English/Spanish',
                                        desc: 'A solid course on spiritual warfare, essential apologetics, and faith defense. Analyzes enemy tactics, spiritual armor, and biblical foundations.',
                                        material: 'The Lion, the Church, & the Warfare – David Schroeder'
                                    },
                                    {
                                        title: 'Frontiers of Faith',
                                        hours: '18 hours / 6 classes',
                                        mode: 'Asynchronous',
                                        price: '$256',
                                        lang: 'English/Spanish',
                                        desc: 'A clear and deep doctrinal course, ideal for both new believers and mature Christians who want to better understand biblical foundations.',
                                        material: 'Frontiers of Faith – David E. Schroeder'
                                    },
                                    {
                                        title: 'Church on Mission',
                                        hours: '15 hours / 5 classes',
                                        mode: 'Asynchronous',
                                        price: '$215',
                                        lang: 'English/Spanish',
                                        desc: 'An innovative course that “reinvents seminary”, exploring ministerial skills that traditional training does not teach.',
                                        material: 'Church Next – Eddie Gibbs'
                                    },
                                    {
                                        title: 'Bible Alive',
                                        hours: '60 hours / 20 classes',
                                        mode: 'Asynchronous',
                                        price: '$855',
                                        lang: 'English/Spanish',
                                        desc: 'Complete overview of the Bible: context, content, ministerial themes, and personal applications of all 66 books.',
                                        material: 'NIV Archaeological Study Bible'
                                    },
                                    {
                                        title: 'Come & Go Disciple-making',
                                        hours: '48 hours / 16 classes',
                                        mode: 'Asynchronous',
                                        price: '$685',
                                        lang: 'English/Spanish',
                                        desc: 'Practical training to form disciple-making disciples. Deepens the biblical model “Come, follow me / Go and make disciples”.',
                                        material: 'Included in the platform'
                                    },
                                    {
                                        title: 'Spiritual Formation',
                                        hours: '30 hours / 15 classes',
                                        mode: 'Asynchronous',
                                        price: '$350',
                                        lang: 'English/Spanish',
                                        desc: 'Explore personal transformation, character, habits, emotions, integrity, and daily spiritual life from a biblical perspective.',
                                        material: 'Included in the platform'
                                    }
                                ]
                        }
                };
                }
        }

        let currentLang = page === 'index' ? 'es' : 'en';
        function setLanguage(lang) {
                const t = translations[lang];
                document.getElementById('langSwitch').innerText = t.switch;
                // Navbar
                const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
                navLinks.forEach((el, i) => { if (t.nav[i]) el.innerText = t.nav[i]; });
                if (page === 'index') {
                        // Hero
                        document.querySelector('h1.display-3').innerText = t.heroTitle;
                        document.querySelector('.lead.text-wtu-light').innerText = t.heroSubtitle;
                        document.querySelector('.btn-wtu').innerText = t.heroBtn;
                        // Programas
                        document.querySelector('#programas h2').innerText = t.programas;
                        document.querySelectorAll('#programas .card-title')[0].innerText = t.prog1;
                        document.querySelectorAll('#programas .card-text')[0].innerText = t.prog1desc;
                        document.querySelectorAll('#programas .card-title')[1].innerText = t.prog2;
                        document.querySelectorAll('#programas .card-text')[1].innerText = t.prog2desc;
                        document.querySelectorAll('#programas .card-title')[2].innerText = t.prog3;
                        document.querySelectorAll('#programas .card-text')[2].innerText = t.prog3desc;
                        // Features
                        document.querySelector('#features h2').innerText = t.features;
                        document.querySelectorAll('#features .fw-bold')[0].innerText = t.feat1;
                        document.querySelectorAll('#features .small')[0].innerText = t.feat1desc;
                        document.querySelectorAll('#features .fw-bold')[1].innerText = t.feat2;
                        document.querySelectorAll('#features .small')[1].innerText = t.feat2desc;
                        document.querySelectorAll('#features .fw-bold')[2].innerText = t.feat3;
                        document.querySelectorAll('#features .small')[2].innerText = t.feat3desc;
                        // Blog
                        document.querySelector('#blog h2').innerText = t.blog;
                        document.querySelectorAll('#blog .fw-bold')[0].innerText = t.blog1;
                        document.querySelectorAll('#blog .small')[0].innerText = t.blog1desc;
                        document.querySelectorAll('#blog .fw-bold')[1].innerText = t.blog2;
                        document.querySelectorAll('#blog .small')[1].innerText = t.blog2desc;
                        document.querySelectorAll('#blog .fw-bold')[2].innerText = t.blog3;
                        document.querySelectorAll('#blog .small')[2].innerText = t.blog3desc;
                        document.querySelectorAll('#blog .btn-link').forEach(el => el.innerHTML = t.leerMas + ' <i class="fas fa-arrow-right"></i>');
                        // Testimonios
                        document.querySelector('#testimonios h2').innerText = t.testimonios;
                        document.querySelectorAll('#testimonios blockquote')[0].innerText = t.test1;
                        document.querySelectorAll('#testimonios .blockquote-footer')[0].innerText = t.test1footer;
                        document.querySelectorAll('#testimonios blockquote')[1].innerText = t.test2;
                        document.querySelectorAll('#testimonios .blockquote-footer')[1].innerText = t.test2footer;
                        // Footer
                        document.querySelector('footer .small').innerHTML = `&copy; 2025 World Theology University. ${t.footer}`;
                } else if (page === 'admission') {
                        // Hero
                        document.querySelector('h1.display-4').innerText = t.heroTitle;
                        document.querySelector('.lead.text-wtu-light').innerText = t.heroSubtitle;
                        // Steps
                        document.querySelectorAll('.card-body h3')[0].innerText = t.step1Title;
                        document.querySelectorAll('.card-body p')[0].innerText = t.step1Desc;
                        document.querySelectorAll('.btn-wtu')[0].innerHTML = '<i class="fas fa-download me-2"></i>' + t.step1Btn;
                        document.querySelectorAll('.card-body h3')[1].innerText = t.step2Title;
                        document.querySelectorAll('.card-body p')[1].innerText = t.step2Desc;
                        document.querySelectorAll('.card-body h3')[2].innerText = t.step3Title;
                        document.querySelectorAll('.card-body p')[2].innerText = t.step3Desc;
                        document.querySelectorAll('.btn-wtu')[1].innerHTML = '<i class="fas fa-upload me-2"></i>' + t.step3Btn;
                        // Notes
                        document.querySelector('.alert h5').innerText = t.notesTitle;
                        document.querySelector('.alert p').innerText = t.notesDesc;
                        // CTA
                        document.querySelector('.bg-wtu-light h4').innerText = t.ctaTitle;
                        document.querySelectorAll('.bg-wtu-light p')[0].innerText = t.ctaDesc;
                } else if (page === 'courses') {
                        // Hero
                        document.querySelector('h1.display-4').innerText = t.heroTitle;
                        document.querySelector('.lead.text-wtu-light').innerText = t.heroSubtitle;
                        // Catálogo
                        document.querySelector('h2.text-wtu-blue').innerText = t.coursesCatalog;
                        // Tarjetas
                        const cards = document.querySelectorAll('.row.row-cols-1 .col');
                        t.cards.forEach((card, i) => {
                                if (cards[i]) {
                                        cards[i].querySelector('.card-title').innerText = card.title;
                                        cards[i].querySelectorAll('.badge')[0].innerText = card.hours;
                                        cards[i].querySelectorAll('.badge')[1].innerText = card.mode;
                                        cards[i].querySelectorAll('.badge')[2].innerText = card.price;
                                        cards[i].querySelectorAll('.badge')[3].innerText = card.lang;
                                        cards[i].querySelector('.card-text').innerHTML = card.desc;
                                        cards[i].querySelector('p.mb-2 strong').nextSibling.textContent = ' ' + card.material;
                                }
                        });
                }
                currentLang = lang;
        }

        function toggleLanguage() {
                setLanguage(currentLang === 'es' ? 'en' : 'es');
        }

        document.getElementById('langSwitch').onclick = toggleLanguage;
        document.addEventListener('DOMContentLoaded', function () {
                setLanguage(currentLang);
        });
}