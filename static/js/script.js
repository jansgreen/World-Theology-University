
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

// Traducción dinámica para index.html, courses-certificates.html, admission.html, actividades.html y admission-form.html
if (document.getElementById('langSwitch')) {
        // Detectar página y definir traducciones
        let translations = {};
        let page = '';
        
        // Detectar qué página es
        if (window.location.pathname.includes('actividades')) {
                page = 'actividades';
                translations = {
                        es: {
                                lang: 'Español',
                                switch: 'English',
                                nav: ['Inicio', 'Programas', 'Beneficios', 'Noticias', 'Testimonios', 'Contacto', 'Courses & Certificates', 'Admisión', 'Actividades'],
                                heroTitle: 'Calendario de Actividades',
                                heroSubtitle: 'Próximos eventos, seminarios y certificaciones de World Theology University',
                                upcomingTitle: 'Próximas Actividades',
                                fullCalendarTitle: 'Calendario Completo',
                                fullCalendarSubtitle: 'Todos los eventos, certificaciones y seminarios programados',
                                event1: 'Congreso Internacional Sobre Derechos Jurídicos Cristiano',
                                event2: 'Certificación en Consejería Familiar y Formación en Pureza Sexual',
                                event3: 'Seminario Sobre la Mujer Cristiana en la Sociedad',
                                onlineZoom: 'Online vía Zoom',
                                facilitator: 'Facilitadora:',
                                date: 'Fecha:',
                                location: 'Lugar:',
                                schedule: 'Horario:',
                                costs: 'Costos',
                                perPerson: 'por persona',
                                discount: 'descuento',
                                free: 'Gratis',
                                veterans: 'Veteranos y Militares:'
                        },
                        en: {
                                lang: 'English',
                                switch: 'Español',
                                nav: ['Home', 'Programs', 'Benefits', 'News', 'Testimonials', 'Contact', 'Courses & Certificates', 'Admission', 'Activities'],
                                heroTitle: 'Activities Calendar',
                                heroSubtitle: 'Upcoming events, seminars and certifications from World Theology University',
                                upcomingTitle: 'Upcoming Activities',
                                fullCalendarTitle: 'Full Calendar',
                                fullCalendarSubtitle: 'All scheduled events, certifications and seminars',
                                event1: 'International Congress on Christian Legal Rights',
                                event2: 'Certification in Family Counseling and Sexual Purity Formation',
                                event3: 'Seminar on Christian Women in Society',
                                onlineZoom: 'Online via Zoom',
                                facilitator: 'Facilitator:',
                                date: 'Date:',
                                location: 'Location:',
                                schedule: 'Schedule:',
                                costs: 'Costs',
                                perPerson: 'per person',
                                discount: 'discount',
                                free: 'Free',
                                veterans: 'Veterans and Military:'
                        }
                };
        } else if (window.location.pathname.includes('admission-form')) {
                page = 'admission-form';
                translations = {
                        es: {
                                lang: 'Español',
                                switch: 'English',
                                nav: ['Inicio', 'Programas', 'Beneficios', 'Noticias', 'Testimonios', 'Contacto', 'Courses & Certificates', 'Admisión'],
                                heroTitle: 'Formulario de Solicitud de Admisión – Descarga',
                                heroSubtitle: 'Revisa los campos del formulario a continuación y descarga el PDF oficial para completar tu solicitud.',
                                downloadBtn: 'DESCARGAR FORMULARIO PDF',
                                downloadNote: 'Haz clic arriba para descargar el Formulario de Solicitud de Admisión oficial en formato PDF.',
                                formTitle: 'WORLD THEOLOGY UNIVERSITY',
                                formSubtitle: 'FORMULARIO DE SOLICITUD DE ADMISIÓN',
                                applicantInfo: 'INFORMACIÓN DEL SOLICITANTE',
                                fullName: 'Nombre Legal Completo',
                                preferredName: 'Nombre Preferido',
                                birthDate: 'Fecha de Nacimiento (dd/mm/aaaa)',
                                gender: 'Género',
                                phone: 'Teléfono (Casa/Celular)',
                                email: 'Correo Electrónico',
                                ssn: 'Número de Seguro Social',
                                permanentAddress: 'Dirección Permanente',
                                mailingAddress: 'Dirección Postal Actual (si es diferente)',
                                admissionDetails: 'DETALLES DE ADMISIÓN',
                                entryTerm: 'Período de Ingreso (Primavera/Otoño)',
                                academicInterests: 'Intereses Académicos',
                                careerInterest: 'Interés Profesional',
                                financialAid: '¿Tiene intención de solicitar ayuda financiera?',
                                scholarships: '¿Tiene intención de solicitar becas por mérito?',
                                fullTime: '¿Tiene intención de ser estudiante de tiempo completo?',
                                yesNo: 'Sí / No'
                        },
                        en: {
                                lang: 'English',
                                switch: 'Español',
                                nav: ['Home', 'Programs', 'Benefits', 'News', 'Testimonials', 'Contact', 'Courses & Certificates', 'Admission'],
                                heroTitle: 'Admission Application Form – Download',
                                heroSubtitle: 'Review the form fields below and download the official PDF to complete your application.',
                                downloadBtn: 'DOWNLOAD PDF FORM',
                                downloadNote: 'Click above to download the official Admission Application Form in PDF format.',
                                formTitle: 'WORLD THEOLOGY UNIVERSITY',
                                formSubtitle: 'ADMISSION APPLICATION FORM',
                                applicantInfo: 'APPLICANT INFORMATION',
                                fullName: 'Full Legal Name',
                                preferredName: 'Preferred Name',
                                birthDate: 'Birth Date (mm/dd/yyyy)',
                                gender: 'Gender',
                                phone: 'Phone (Home/Cell)',
                                email: 'Email Address',
                                ssn: 'SSN',
                                permanentAddress: 'Permanent Address',
                                mailingAddress: 'Current Mailing Address (if different)',
                                admissionDetails: 'ADMISSION DETAILS',
                                entryTerm: 'Entry Term (Spring/Fall)',
                                academicInterests: 'Academic Interests',
                                careerInterest: 'Career Interest',
                                financialAid: 'Do you intend to apply for financial aid?',
                                scholarships: 'Do you intend to apply for merit-based scholarships?',
                                fullTime: 'Do you intend to be a full-time student?',
                                yesNo: 'Yes / No'
                        }
                };
        } else if (window.location.pathname.includes('admission')) {
                page = 'admission';
        } else if (window.location.pathname.includes('courses')) {
                page = 'courses';
        } else if (document.querySelector('h1.display-3')) {
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
                                    },
                                    {
                                        title: 'Ciencias de la Religión',
                                        hours: '6 horas / 2 clases',
                                        mode: 'Asincrónico',
                                        price: '$85',
                                        lang: 'Inglés/Español',
                                        desc: 'Este seminario ofrece una exploración introductoria y profunda de las ciencias de la religión, abordando su historia, evolución y el impacto del pensamiento religioso en las sociedades contemporáneas.<br><strong>Aprendizajes:</strong> Comprender los fundamentos de las ciencias de la religión, Analizar la influencia de la religión en la cultura y sociedad, Identificar marcos teóricos esenciales del estudio religioso, Reconocer la importancia del pensamiento crítico en la investigación teológica.',
                                        material: 'Incluido en la plataforma',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Consejería Familiar y Formación en Pureza Sexual',
                                        hours: '6 horas / 2 clases',
                                        mode: 'Asincrónico',
                                        price: '$85',
                                        lang: 'Inglés/Español',
                                        desc: 'Este seminario ofrece herramientas prácticas y fundamentos teológicos para fortalecer a individuos y familias mediante principios de consejería bíblica. Se profundiza en la formación en pureza sexual desde una perspectiva cristiana.<br><strong>Aprendizajes:</strong> Comprender los principios bíblicos de la consejería familiar, Aplicar modelos prácticos de apoyo emocional y espiritual, Guiar procesos de formación en pureza sexual con enfoque restaurativo, Identificar factores de riesgo y promover ambientes sanos.',
                                        material: 'Incluido en la plataforma',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Simplificando la Antropología Bíblica',
                                        hours: '6 horas / 2 clases',
                                        mode: 'Asincrónico',
                                        price: '$85',
                                        lang: 'Inglés/Español',
                                        desc: 'Una visión clara y accesible de la antropología bíblica, explicando la naturaleza del ser humano desde las Escrituras. Se explora el origen, diseño y propósito del hombre según la revelación bíblica.<br><strong>Aprendizajes:</strong> Comprender la naturaleza del ser humano según la Biblia, Analizar el origen, propósito y diseño divino de la humanidad, Reconocer la condición caída y el plan de restauración, Aplicar principios antropológicos en la vida espiritual y ministerial.',
                                        material: 'Incluido en la plataforma',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Certificación en Consejería Familiar y Formación en Pureza Sexual – Edición Día de la Mujer',
                                        hours: '6 horas / 2 clases',
                                        mode: 'Asincrónico',
                                        price: '$85',
                                        lang: 'Inglés/Español',
                                        desc: 'Seminario especial dedicado al Día de la Mujer que honra la labor de mujeres trabajadoras, madres y líderes comunitarias. Aborda temas esenciales de consejería, sanidad emocional y formación espiritual aplicados a la realidad femenina contemporánea.<br><strong>Aprendizajes:</strong> Comprender los desafíos espirituales y emocionales que enfrentan las mujeres hoy, Aplicar principios de consejería para acompañamiento integral femenino, Fortalecer la autoestima, identidad y propósito en mujeres de fe, Promover ambientes saludables.',
                                        material: 'Incluido en la plataforma',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Formación Cristiana',
                                        hours: '6 horas / 2 clases',
                                        mode: 'Asincrónico',
                                        price: '$85',
                                        lang: 'Inglés/Español',
                                        desc: 'Este seminario guía al estudiante en los fundamentos de la vida cristiana, incluyendo carácter, espiritualidad, práctica ministerial y formación bíblica básica. Es un entrenamiento transformador que integra mente, corazón y conducta.<br><strong>Aprendizajes:</strong> Desarrollar hábitos espirituales para el crecimiento cristiano, Comprender principios doctrinales esenciales para la vida diaria, Fortalecer la identidad y madurez espiritual, Aplicar enseñanzas bíblicas a la familia, finanzas y relaciones interpersonales.',
                                        material: 'Incluido en la plataforma',
                                        prerequisite: true
                                    }
                                ]
                        },
                        en: {
                                lang: 'English',
                                switch: 'Español',
                                nav: ['Home', 'Programs', 'Benefits', 'News', 'Testimonials', 'Contact', 'Courses & Certificates', 'Admission'],
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
                                    },
                                    {
                                        title: 'Religious Sciences',
                                        hours: '6 hours / 2 classes',
                                        mode: 'Asynchronous',
                                        price: '$85',
                                        lang: 'English/Spanish',
                                        desc: 'This seminar offers an introductory and in-depth exploration of religious sciences, addressing its history, evolution, and the impact of religious thought on contemporary societies.<br><strong>Learning:</strong> Understand the foundations of religious sciences, Analyze the influence of religion on culture and society, Identify essential theoretical frameworks of religious study, Recognize the importance of critical thinking in theological research.',
                                        material: 'Included in the platform',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Family Counseling and Sexual Purity Formation',
                                        hours: '6 hours / 2 classes',
                                        mode: 'Asynchronous',
                                        price: '$85',
                                        lang: 'English/Spanish',
                                        desc: 'This seminar offers practical tools and theological foundations to strengthen individuals and families through biblical counseling principles. It deepens sexual purity formation from a Christian perspective.<br><strong>Learning:</strong> Understand biblical principles of family counseling, Apply practical models of emotional and spiritual support, Guide sexual purity formation processes with a restorative approach, Identify risk factors and promote healthy environments.',
                                        material: 'Included in the platform',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Simplifying Biblical Anthropology',
                                        hours: '6 hours / 2 classes',
                                        mode: 'Asynchronous',
                                        price: '$85',
                                        lang: 'English/Spanish',
                                        desc: 'A clear and accessible vision of biblical anthropology, explaining the nature of human beings from Scripture. It explores the origin, design, and purpose of humanity according to biblical revelation.<br><strong>Learning:</strong> Understand the nature of human beings according to the Bible, Analyze the origin, purpose, and divine design of humanity, Recognize the fallen condition and the restoration plan, Apply anthropological principles in spiritual and ministerial life.',
                                        material: 'Included in the platform',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Family Counseling and Sexual Purity Certification – Women\'s Day Edition',
                                        hours: '6 hours / 2 classes',
                                        mode: 'Asynchronous',
                                        price: '$85',
                                        lang: 'English/Spanish',
                                        desc: 'Special seminar dedicated to Women\'s Day honoring the work of working women, mothers, and community leaders. It addresses essential themes of counseling, emotional healing, and spiritual formation applied to contemporary female reality.<br><strong>Learning:</strong> Understand the spiritual and emotional challenges women face today, Apply counseling principles for comprehensive female accompaniment, Strengthen self-esteem, identity, and purpose in women of faith, Promote healthy environments.',
                                        material: 'Included in the platform',
                                        prerequisite: true
                                    },
                                    {
                                        title: 'Christian Formation',
                                        hours: '6 hours / 2 classes',
                                        mode: 'Asynchronous',
                                        price: '$85',
                                        lang: 'English/Spanish',
                                        desc: 'This seminar guides students in the fundamentals of Christian life, including character, spirituality, ministry practice, and basic biblical formation. It is transformative training that integrates mind, heart, and conduct.<br><strong>Learning:</strong> Develop spiritual habits for Christian growth, Understand essential doctrinal principles for daily life, Strengthen spiritual identity and maturity, Apply biblical teachings to family, finances, and interpersonal relationships.',
                                        material: 'Included in the platform',
                                        prerequisite: true
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
                        
                        // Traducir badges de prerrequisito
                        const prerequisiteBadges = document.querySelectorAll('.badge.bg-danger');
                        prerequisiteBadges.forEach(badge => {
                                if (lang === 'es') {
                                        badge.innerText = 'Prerequisito para Certificado de Teología';
                                } else {
                                        badge.innerText = 'Prerequisite for Theology Certificate';
                                }
                        });
                        
                        // Traducir "Enroll Now" buttons
                        const enrollButtons = document.querySelectorAll('.btn-wtu');
                        enrollButtons.forEach(btn => {
                                if (lang === 'es') {
                                        btn.innerText = 'Inscríbete Ahora';
                                } else {
                                        btn.innerText = 'Enroll Now';
                                }
                        });
                        
                        // Traducir "Material:" labels
                        const materialLabels = document.querySelectorAll('p.mb-2 strong');
                        materialLabels.forEach(label => {
                                if (label.innerText === 'Material:' || label.innerText === 'Material:') {
                                        if (lang === 'es') {
                                                label.innerText = 'Material:';
                                        } else {
                                                label.innerText = 'Material:';
                                        }
                                }
                        });
                } else if (page === 'actividades') {
                        // Hero
                        document.querySelector('h1.display-4').innerText = t.heroTitle;
                        document.querySelector('.lead.text-wtu-light').innerText = t.heroSubtitle;
                        // Secciones
                        document.querySelectorAll('h2.text-center')[0].innerText = t.upcomingTitle;
                        document.querySelector('.display-5').innerText = t.fullCalendarTitle;
                        document.querySelector('.lead.text-muted').innerText = t.fullCalendarSubtitle;
                        // Títulos de eventos (tarjetas superiores)
                        const eventTitles = document.querySelectorAll('.col-md-4 .card-body h6');
                        if (eventTitles[0]) eventTitles[0].innerText = t.event1;
                        if (eventTitles[1]) eventTitles[1].innerText = t.event2;
                        if (eventTitles[2]) eventTitles[2].innerText = t.event3;
                } else if (page === 'admission-form') {
                        // Hero
                        if (document.querySelector('h1.display-5')) {
                                document.querySelector('h1.display-5').innerText = t.heroTitle;
                        }
                        if (document.querySelector('.lead.text-wtu-light')) {
                                document.querySelector('.lead.text-wtu-light').innerText = t.heroSubtitle;
                        }
                        // Botón de descarga
                        const downloadBtn = document.querySelector('.btn-wtu.btn-lg span');
                        if (downloadBtn) {
                                downloadBtn.innerText = t.downloadBtn;
                        }
                        const downloadNote = document.querySelector('.text-muted.mt-3');
                        if (downloadNote) {
                                downloadNote.innerText = t.downloadNote;
                        }
                        // Encabezados del formulario
                        const formHeaders = document.querySelectorAll('.card-header h2, .card-header h4');
                        if (formHeaders[0]) formHeaders[0].innerText = t.formTitle;
                        if (formHeaders[1]) formHeaders[1].innerText = t.formSubtitle;
                        // Secciones
                        const sectionTitles = document.querySelectorAll('h5.text-wtu-blue');
                        if (sectionTitles[0]) sectionTitles[0].innerHTML = '<i class="fas fa-user me-2"></i>' + t.applicantInfo;
                        if (sectionTitles[1]) sectionTitles[1].innerHTML = '<i class="fas fa-graduation-cap me-2"></i>' + t.admissionDetails;
                        // Labels de formulario
                        const labels = document.querySelectorAll('.form-label.fw-bold');
                        const labelTexts = [
                                t.fullName, t.preferredName, t.birthDate, t.gender, t.phone,
                                t.email, t.ssn, t.permanentAddress, t.mailingAddress,
                                t.entryTerm, t.academicInterests, t.careerInterest,
                                t.financialAid, t.scholarships, t.fullTime
                        ];
                        labels.forEach((label, i) => {
                                if (labelTexts[i]) {
                                        label.innerText = labelTexts[i];
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