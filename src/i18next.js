import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next} from 'react-i18next'

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng: "fr",
    resources : {
        en : {
            translation: {
                "greeting": "Hi! I'm Marilyne Delia, a young web developer.",
                "home": "Home",
                "about": "About",
                "skills": "Skills",
                "projects": "Projects",
                "contact": "Contact",
                "aboutTitle": "Who am I?",
                "aboutDescription": "I am currently a student in La Rochelle, training to become a FullStack developer, and I am 18 years old. My area of specialization covers web technologies, including CSS, JavaScript, HTML, as well as various frameworks and tools dedicated to front-end and back-end development. My passion for this field dates back four years already. If I had to compare myself to a technology, I would choose ReactJs without hesitation for its innovative nature, reliability, adaptability, and surprising potential.",
                "contactTitle": "Ready to collaborate? Contact me to discuss your project or just to share your ideas.",
                "enterYourName": "Enter your name",
                "enterYourEmail": "Enter your email",
                "subject": "Subject",
                "enterYourMessage": "Enter your message",
                "send": "Send",
                "contactMe": "Contact Me",
                "CV": "Download CV",
                "skillsTitle": "My Skills",
                "projectsTitle": "My projects",
                "projectsSubtitle": "Explore my achievements and see how I transform ideas into impactful digital solutions. Every project is a story of challenge and success. Here are mine.",
                "backendDevelopment": "Back-end Development",
                "backendDescription": "As a back-end development specialist, I have solid experience in creating robust and high-performance APIs using Symfony and Strapi. I have designed and maintained back-end infrastructures that support scalable web applications, ensuring optimal data management and seamless integration with various services.",
                "frontendDevelopment": "Front-end Development",
                "frontendDescription": "Passionate about front-end development, I create attractive and responsive user interfaces using HTML, CSS, and JavaScript. I have particular expertise in React and Vue, where I have implemented Single Page Applications (SPAs) that enhance UX and increase user engagement.",
                "database": "Database Management",
                "databaseDescription": "Experienced in database management, I am proficient in SQL for storing, manipulating, and analyzing large volumes of data. Whether using MySQL, PostgreSQL, or MongoDB, I develop database structures optimized for high performance.",
                "versionControl": "Version Control",
                "versionControlDescription": "Competent in using Git, GitHub, and GitLab for version control, I apply best practices in code management to collaborate effectively in a team. My projects on GitHub demonstrate my ability to use branches, merges, and pull requests to maintain a clear and structured development flow.",
                "wordpress": "WordPress Development",
                "wordpressDescription": "As a WordPress developer, I build custom websites that are both pleasing and functional. I integrate custom themes, plugins, and specific features to meet the unique requirements of each client, ensuring easy content management and SEO optimization.",
                "uxuiDesign": "UX/UI Design",
                "uxuiDescription": "As a passionate UX designer, I continue to develop my skills in creating user experiences that are both intuitive and captivating. I utilize tools such as Adobe XD to create wireframes and prototypes that form the foundation for well-thought-out design solutions.",
                "portfolioDescription": "Portfolio developed to showcase my expertise in web development and software engineering, with a particular focus on interaction and typography. This portfolio demonstrates my ability to transform abstract concepts into concrete and attractive visual creations.",
                "artfullCodeDescription": "ArtfullCode is a young virtual agency based in La Rochelle, specializing in the creation of innovative web solutions. This project illustrates my expertise in developing personalized websites that combine functionality and aesthetics to enhance the user experience.",
                "lettresEnLumiereDescription": "Developed specifically to meet the educational needs of marginalized populations in French prisons, this literacy application aims to provide accessible learning tools for allophones, illiterates and illiterates."
                
            }
        },
        fr: {
            translation: {
                "greeting": "Salut ! Je suis Marilyne Delia, une jeune developpeuse web.",
                "home": "Accueil",
                "about": "A propos",
                "skills": "Compétences",
                "projects": "Projets",
                "contact": "Contact",
                "aboutTitle": "Qui suis-je ?",
                "aboutDescription": "Je suis actuellement étudiante à La Rochelle, en pleine formation pour devenir développeuse FullStack, et j'ai 18 ans. Mon domaine de spécialisation couvre les technologies du web, incluant le CSS, le JavaScript, le HTML, ainsi que divers frameworks et outils dédiés au développement front-end et back-end. Ma passion pour ce domaine remonte à quatre ans déjà. Si je devais me comparer à une technologie, je choisirais sans hésiter ReactJs pour son caractère innovant, sa fiabilité, sa capacité d'adaptation et son potentiel surprenant.",
                "contactTitle": "Prêt à collaborer ? Contactez-moi pour discuter de votre projet ou simplement pour échanger sur vos idées.",
                "enterYourName": "Entrez votre nom",
                "enterYourEmail": "Entrez votre email",
                "subject": "Sujet",
                "enterYourMessage": "Entrez votre message",
                "send": "Envoyer",
                "contactMe": "Me contacter",
                "CV": "Mon CV",
                "skillsTitle": "mes compétences",
                "projectsTitle": "Mes Projets",
                "projectsSubtitle": "Explorez mes réalisations et voyez comment je transforme les idées en solutions digitales impactantes. Chaque projet est une histoire de défi et de réussite. Voici les miennes.",
                "backendDevelopment": "Développement Back-end",
                "backendDescription": "Spécialiste du développement backend, j'ai une solide expérience dans la création d'APIs robustes et performantes utilisant Symfony et Strapi. J'ai conçu et maintenu des infrastructures backend qui soutiennent des applications web scalables, en assurant une gestion optimale des données et une intégration fluide avec divers services.",
                "frontendDevelopment": "Développement Front-end",
                "frontendDescription": "Passionnée par le développement frontend, je crée des interfaces utilisateur attrayantes et réactives avec HTML, CSS, et JavaScript. J'ai une expertise particulière en React et Vue, où j'ai mis en œuvre des SPA (Single Page Applications) qui améliorent l'UX et augmentent l'engagement utilisateur",
                "database": "Base de données",
                "databaseDescription": "Expérimentée dans la gestion de bases de données, je maîtrise SQL pour le stockage, la manipulation et l'analyse de grandes quantités de données. Que ce soit avec MySQL, PostgreSQL ou MongoDB, je développe des structures de bases de données optimisées pour des performances élevées.",
                "versionControl": "Gestion des versions",
                "versionControlDescription": "Compétente dans l'utilisation de Git et GitHub et Gitlab pour le contrôle de version, j'applique les meilleures pratiques de gestion de code pour collaborer efficacement en équipe. Mes projets sur GitHub démontrent ma capacité à utiliser des branches, des merges, et des pull requests pour maintenir un flux de développement clair et structuré.",
                "wordpress": "Wordpress",
                "wordpressDescription": "Développeuse WordPress, je construis des sites web personnalisés qui sont à la fois plaisants et riches. J'intègre des thèmes sur mesure, des plugins et des fonctionnalités spécifiques pour répondre aux exigences uniques de chaque client, assurant une gestion facile du contenu et une optimisation SEO.",
                "uxuiDesign": "UX/UI Design",
                "uxuiDescription": "En tant que designer UX passionnée, je continue à développer mes compétences dans la création d'expériences utilisateur qui visent à être à la fois intuitives et captivantes. J'exploite des outils tels qu'Adobe XD pour élaborer des wireframes et des prototypes qui servent de fondations à des solutions design bien pensées.",
                "portfolioDescription": "Portfolio conçu pour mettre en scène mon expertise en développement web et ingénierie logicielle, avec une attention particulère portée à l'interaction et à la typographie. Ce portfolio démontre ma capacité à transformer des concepts abstraits en créations visuelles concrètes et attrayantes",
                "artfullCodeDescription": "ArtfullCode est une jeune agence virtuelle basée à la rochelle, spécialisée dans la création de solutions web innovantes. Ce projet illustre mon expertise dans le développement de sites web personnalisés qui combinent fonctionnalités et esthétique pour améliorer l'expérience utilisateur.",
                "lettresEnLumiereDescription": "Développée spécifiquement pour répondre aux besoins éducatifs des populations marginalisées dans les prisons françaises, cette application d'alphabétisation vise à offrir des outils d'apprentissage accessibles aux allophones, illettrés et analphabètes."
            }
        }
    
    }          
     
})