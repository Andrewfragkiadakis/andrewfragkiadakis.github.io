// src/chatbotData.js

// Helper function to get nested properties safely (remains the same)
const getNested = (obj, path) => {
    if (!obj || !path) return null;
    return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const getChatbotKB = (translationsData, currentLanguage) => {
    const t = translationsData[currentLanguage]; 

    if (!t) { 
        console.error(`ChatbotKB: Translations missing for language ${currentLanguage}`);
        return [];
    }

    // Helper to format tasks for a more readable chatbot response
    const formatTasks = (tasksArray) => {
        if (!tasksArray || tasksArray.length === 0) return "various responsibilities.";
        if (tasksArray.length === 1) return tasksArray[0] + ".";
        // Return first 2 tasks for brevity, or more if you prefer
        const tasksToShow = tasksArray.slice(0, 2);
        let formatted = tasksToShow.join('; ');
        if (tasksArray.length > 2) {
            formatted += '; and more.';
        } else {
            formatted += '.';
        }
        return formatted;
    };

    // Helper for randomizing some fun replies
    const getRandomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

    return [
        // GREETING & SMALL TALK
        {
            keywords: [
                "hello", "hi", "hey", "yo", "sup", "what's up", "howdy", "good morning", "good afternoon", "good evening", "morning", "afternoon", "evening", "greetings", "heya", "hiya", "hows it hanging",
                "γεια", "geia", "yassou", "γεια σου", "kalimera", "καλημερα", "καλησπέρα", "kalispera", "καληνύχτα", "kalinixta", "τι κάνεις", "ti kaneis", "τι κανεις", "τι λεει", "ti leei", "τι γινεται", "ti ginetai", "πως παει", "pos paei", "τι νεα", "ti nea", "τι γίνεσαι", "τι τρέχει", "ti trexei", "τι παιζει", "ti paizei", "τι παίζει"
            ],
            answer: () => t.chatbot.greeting,
        },
        {
            keywords: [
                "how are you", "how's it going", "how you doing", "hows it going", "how you doin", "how do you do", "are you ok", "you good",
                "πως εισαι", "pos eisai", "πως πας", "pos pas", "πως τα πας", "pos ta pas", "πως πανε τα πραγματα", "τι λεει", "τι γινεται", "εισαι καλα", "ise kala"
            ],
            answer: () => getRandomReply([
                "I'm functioning optimally, thanks for asking! Ready to help. 😄",
                "Just lines of code, but feeling great! How about you?",
                "Excellent! All systems are go. What can I do for you?",
                "I'm a bot, I don't have feelings, but I'm happy to assist you! 🤖"
            ]),
        },
        {
            keywords: [
                "are you real", "are you human", "human or bot", "are you ai", "are you a robot",
                "είσαι άνθρωπος", "ise anthropos", "είσαι αληθινός", "ise alithinos", "είσαι ρομπότ", "ise robot", "robot", "ai", "artificial intelligence", "τεχνητή νοημοσύνη", "texniti noimosini"
            ],
            answer: () => getRandomReply([
                "I'm a sophisticated AI assistant, designed by Andreas! 😉",
                "100% virtual, 100% helpful (I try!).",
                "Not human, but I know a lot about one! What would you like to know about Andreas?"
            ]),
        },

        // ABOUT/IDENTITY ANDREAS
        {
            keywords: [
                "about andreas", "who is andreas", "who are you", "tell me about yourself", "info about him", "who is he", "who's he", "who this guy", "story", "background", "general info", "who made you", "who created you", "andreas fragkiadakis",
                "σχετικα με ανδρεα", "sxetika me andrea", "ποιος ειναι ο ανδρεας", "poios einai o andreas", "ποιος εισαι", "πες μου για σενα", "pes mou gia sena", "πληροφοριες για αυτον", "plirofories gia auton", "ιστορικο", "istoriko", "γενικα", "genika", "ποιος σε εφτιαξε", "ποιος σε δημιούργησε"
            ],
            answer: () => (t.aboutMe?.p1 || "Andreas is an IT & Computer Engineering student.") + (t.aboutMe?.p2 ? " " + t.aboutMe.p2 : ""),
        },

        // SKILLS (General and Specific)
        {
            keywords: [
                "skills", "skill", "what are his skills", "what skills", "his skills", "his abilities", "abilities", "what's his skills", "what is he good at", "good at", "what's he good at", "expertise", "expert in", "knows about", "talents", "talent", "specialties", "technical skills", "core skills", "main skills", "top skills",
                "what can andreas do", "what can he do", "what does he know", "tell me his skills", "what is he best at", "areas of expertise", "areas of knowledge", "areas of strength", "δυνατά σημεία", "dinala simia", "δυνατο σημειο",
                "ικανότητες", "ikanotites", "ικανότητα", "δεξιότητες", "dexiotites", "δεξιότητα", "τι ξερει", "ti xerei", "ti kseri", "τι γνωρίζει", "ti gnorizei", "σε τι ειναι καλος", "se ti einai kalos", "σε τι ειδικεύεται", "se ti eidikeuetai"
            ],
            answer: () => {
                // Assuming coreSkills is an object where each key is a skill (e.g., webDev)
                // and each skill object has a 'label' property.
                const skillKeys = Object.keys(t.coreSkills || {}).filter(key => key !== 'title');
                const skillLabels = skillKeys
                    .map(key => t.coreSkills[key]?.label)
                    .filter(Boolean) // Remove any undefined labels
                    .join(', ');
                return `${t.header?.namePart1 || 'Andreas'} has core skills in: ${skillLabels || 'various IT areas like web development, networking, and system administration'}. Which particular skill are you interested in?`;
            }
        },
        {
            keywords: ["web development", "web dev", "frontend", "front-end", "front end", "backend", "back-end", "back end", "react", "html", "css", "javascript", "js", "website development", "site dev", "develop websites", "web design", "αναπτυξη web", "ιστοσελιδες", "ιστοσελίδες", "websites", "webpage", "webpages", "web εφαρμογές", "web εφαρμογες", "web apps", "web app"],
            answer: () => t.coreSkills?.webDev?.detail || t.coreSkills?.webDevDetail || "Andreas is skilled in web development using modern technologies like React, HTML, CSS, and JavaScript.",
        },
        {
            keywords: ["network", "networks", "networking", "systems administration", "sysadmin", "system admin", "cisco", "active directory", "server admin", "network infrastructure", "δικτυα", "δικτυο", "διαχειριση συστηματων", "υπολογιστικά συστήματα", "υπολογιστικα συστηματα", "servers", "switches", "routers"],
            answer: () => t.coreSkills?.networkAdmin?.detail || t.coreSkills?.networkAdminDetail || "Andreas is proficient in network and systems administration, including Cisco devices and Active Directory.",
        },
        {
            keywords: ["security", "cybersecurity", "cyber security", "pci", "soc2", "endpoint hardening", "network security", "it security", "ασφαλεια", "ασφάλεια", "ασφαλεια συστηματων", "asfaleia", "προστασία", "προστασια", "προστασία δεδομένων", "προστασια δεδομενων", "data protection"],
            answer: () => t.coreSkills?.security?.detail || t.coreSkills?.securityDetail || "Andreas has knowledge in IT security systems, endpoint hardening, and best practices, with familiarity in compliance like PCI/SOC2.",
        },
        {
            keywords: ["troubleshooting", "problem solving", "diagnose", "fix", "support", "helpdesk", "it support", "technical support", "lightbulb", "επίλυση προβλημάτων", "επιλυση προβληματων", "βοήθεια", "βοηθεια", "τεχνική υποστήριξη", "τεχνικη υποστηριξη", "επιλυση"],
            answer: () => t.coreSkills?.troubleshooting?.detail || t.coreSkills?.troubleshootingDetail || "Andreas is great at troubleshooting technical issues and solving IT problems efficiently.",
        },
        {
            keywords: ["project management", "manage projects", "tasks", "projects", "project coordination", "project lead", "διαχείριση έργων", "διαχειριση εργων", "project manager", "οργάνωση", "οργανωση", "συντονισμός", "συντονισμος", "διαχειριση project"],
            answer: () => t.coreSkills?.projectMgmt?.detail || t.coreSkills?.projectMgmtDetail || "Andreas has experience in project management, leading and coordinating IT projects.",
        },
        {
            keywords: ["communication", "languages", "english", "greek", "german", "speaking", "writing", "presentation skills", "επικοινωνία", "επικοινωνια", "γλώσσες", "γλωσσες", "γλωσσικές δεξιότητες", "γλωσσικες δεξιοτητες", "αγγλικα", "ελληνικα", "γερμανικα"],
            answer: () => t.coreSkills?.communication?.detail || t.coreSkills?.communicationDetail || "Andreas possesses excellent communication skills and is fluent in English (C2), Greek (Native), and German (B2).",
        },

        // EXPERIENCE (General and Specific)
        {
            keywords: [
                "experience", "work", "job", "jobs", "employment", "career", "past work", "work history", "professional experience", "where has he worked", "companies",
                "εμπειρια", "empiria", "δουλειά", "douleia", "ergasia", "εργασια", "προϋπηρεσία", "proupiresia", "εργασιακή εμπειρία", "εργασιακος βιος", "που εχει δουλεψει", "εταιρειες"
            ],
            answer: () => {
                const companyKeys = Object.keys(t.experience || {}).filter(key => !['title', 'seeMore', 'seeLess'].includes(key) && t.experience[key]?.company);
                const companyNames = companyKeys.map(key => t.experience[key].company.split(',')[0]); // Get just company name
                return `Andreas has diverse professional experience. He's worked at places like ${companyNames.slice(0,3).join(', ')}${companyNames.length > 3 ? ', and others' : ''}. You can ask about a specific company (e.g., "tell me about Omilia") or check the Experience section for full details.`;
            }
        },
        {
            keywords: ["omilia", "omilia ltd", "ομιλια", "ομιλία"],
            answer: () => {
                const exp = t.experience?.omilia;
                if (!exp) return "Andreas has experience at OMILIA LTD. For specifics, check the experience section!";
                return `At ${exp.company || 'OMILIA LTD'}, as an ${exp.role || 'IT Support Engineer'} (from ${exp.duration || 'Sept 2024 – Present'}), his work involves: ${formatTasks(exp.tasks)} He's basically the office tech hero! 🦸‍♂️`;
            }
        },
        {
            keywords: ["keep eat healthy", "keepeathealthy", "keep eat", "healthy foods company", "φαε υγιεινα", "φαε υγιεινά"],
            answer: () => {
                const exp = t.experience?.keepEatHealthy;
                if (!exp) return "Andreas coordinated IT for KEEP EAT HEALTHY.";
                return `With ${exp.company || 'KEEP EAT HEALTHY'}, Andreas was an ${exp.role || 'IT Support & Infrastructure Coordinator'} (${exp.duration || 'May 2022 – Present'}). He focused on: ${formatTasks(exp.tasks)} Keeping the tech as healthy as the food!`;
            }
        },
        {
            keywords: ["anemomyloi", "anemomyloi andros", "andros ae", "ανεμόμυλοι", "ανεμομυλοι", "ανδρος", "άνδρος ae"],
            answer: () => {
                const exp = t.experience?.anemomyloi;
                if (!exp) return "Andreas provided IT support for ANEMOMYLOI ANDROS AE.";
                return `For ${exp.company || 'ANEMOMYLOI ANDROS AE'} (${exp.duration || 'Jan 2023 – Feb 2024'}), as an ${exp.role || 'IT Support Specialist'}, Andreas handled: ${formatTasks(exp.tasks)} Probably knows a thing or two about good island WiFi.`;
            }
        },
        {
            keywords: ["self-employed", "self employed", "freelance web developer", "freelance", "freelancer", "own boss", "αυτοαπασχολούμενος", "αυτοαπασχολουμενος", "web developer freelance", "ελευθερος επαγγελματιας"],
            answer: () => {
                const exp = t.experience?.selfEmployed;
                if (!exp) return "Andreas has experience as a self-employed Web Developer, building cool websites.";
                return `As a ${exp.role || 'Self-Employed Web Developer'} (${exp.duration || '2020 – Nov 2023'}), Andreas impressively ${formatTasks(exp.tasks)} Rocking the freelance life!`;
            }
        },
        {
            keywords: ["weballdesign", "web all design", "weballdesign athens", "web all", "web design company athens"],
            answer: () => {
                const exp = t.experience?.weballdesign;
                if (!exp) return "Andreas gained technical experience at Weballdesign.";
                return `At ${exp.company || 'Weballdesign'}, as a ${exp.role || 'Network Systems Installation & Configuration Technician'} (${exp.duration || '2020 – Nov 2022'}), his duties included: ${formatTasks(exp.tasks)} Setting up systems like a pro.`;
            }
        },

        // PROJECTS
        {
            keywords: [
                "projects", "portfolio projects", "personal projects", "project", "his work", "show me projects", "side projects", "creations",
                "εργα", "erga", "project του", "προτζεκτ", "προτζεκτς", "τι project έχει", "τι project εχει", "τι έχει φτιάξει", "τι εχει φτιαξει", "τι εχει κανει", "τι έχει κάνει", "προσωπικα project"
            ],
            answer: () => `Andreas has a cool collection of projects like his ${t.projects?.portfolio?.name}, the ${t.projects?.happyFox?.name} concept, and the ${t.projects?.schiller?.name} website. Curious about a specific one, or want a list?`,
        },
        {
            keywords: [
                "list projects", "all projects", "what projects", "project list", "examples of projects",
                "όλα τα project", "ολα τα project", "ολα τα προτζεκτ", "όλα τα προτζεκτ", "λίστα project", "λιστα project", "λίστα προτζεκτ", "λιστα προτζεκτ", "παραδειγματα project"
            ],
            answer: () => {
                const projectNames = Object.values(t.projects || {})
                    .filter(project => typeof project === 'object' && project.name)
                    .map(project => project.name)
                    .join(', ');
                return `Sure! Some of Andreas's projects include: ${projectNames || 'his portfolio, a mental health app concept, the Schiller website, a Raspberry Pi setup, LLM research, a Chrome extension, and a wheelchair concept'}. Just ask for details on any that catch your eye!`;
            }
        },
        {
            keywords: ["happyfox", "mental health app", "happy fox", "happyfox project", "happy fox project", "ψυχική υγεία", "ψυχικη υγεια", "mental health", "fox app", "srh heidelberg project"],
            answer: () => `Ah, the HappyFox project! (${t.projects?.happyFox?.name || 'HappyFox 🦊 - Mental Health App'}) This was about: ${t.projects?.happyFox?.description || 'UI/UX concepts for a user-friendly mental health app aimed at promoting emotional well-being during a Master\'s course.'} It was a team effort at SRH Heidelberg using Figma. Pretty neat, huh?`,
        },
        {
            keywords: ["portfolio website project", "this website", "this page", "portfolio site", "personal website", "cv website", "cv page", "your site", "ιστοσελίδα", "ιστοσελιδα", "σελίδα", "σελιδα", "βιογραφικό site", "βιογραφικο site", "αυτη η σελιδα"],
            answer: () => `This very portfolio website (${t.projects?.portfolio?.name || 'Portfolio Website'})! It's designed to showcase Andreas's CV and was built with ${t.projects?.portfolio?.tags?.join(', ') || 'HTML, CSS, and JavaScript'}. ${t.projects?.portfolio?.description || 'It features light/dark mode and bilingual support.'} You're experiencing it live! ✨`,
        },
        {
            keywords: ["schiller", "schiller website", "language center", "schiller project", "schiller site", "wix", "schiller σχολείο", "schiller σχολειο", "schiller κέντρο", "schiller κεντρο"],
            answer: () => `The Schiller Language Centers website (${t.projects?.schiller?.name || 'Schiller Language Centers Website'}) involved: ${t.projects?.schiller?.description || 'developing the website for Schiller Language Centers in Rethymno, Greece, using Wix Studio.'} It showcases their courses and 30 years of experience.`,
        },
        {
            keywords: ["raspberry pi", "pi-hole", "plex", "adblocker", "streamer", "home network project"],
            answer: () => `The Raspberry Pi Adblocker & Streamer project was about: ${t.projects?.raspberryPi?.description || 'configuring a Raspberry Pi for network-wide adblocking (Pi-hole) and media streaming (Plex) on a home network.'} Pretty handy for a smooth Browse and media experience!`,
        },
        {
            keywords: ["llm research", "human knowledge research", "gpt-3 research", "cognitive science publication", "false belief task"],
            answer: () => `The "Research: LLMs & Human Knowledge" project involved: ${t.projects?.llmResearch?.description || 'comparing GPT-3 and human performance on the False Belief Task.'} It was even published in Cognitive Science! You can find links to the report and publication on the site.`,
        },
        {
            keywords: ["silence hero", "chrome extension", "browser extension", "neighbor noise", "quiet hours"],
            answer: () => `Silence Hero! (${t.projects?.silenceHero?.name || 'Silence Hero - A browser extension'}) That's a clever Chrome extension: ${t.projects?.silenceHero?.description || 'to remind you about quiet hours with visual cues and a countdown timer.'} No more angry neighbors!`,
        },
        {
            keywords: ["friendly wheelchair", "wheelchair concept", "ai wheelchair", "heidelberg clinics project", "agile scrum project"],
            answer: () => `The Friendly Wheelchair concept (${t.projects?.friendlyWheelchair?.name || 'The Friendly Wheelchair (Concept)'}) was about: ${t.projects?.friendlyWheelchair?.description || 'a detailed project plan for an AI-powered self-driving wheelchair for Heidelberg Clinics.'} Sounds like the future of mobility!`,
        },

        // THESIS
        {
            keywords: [
                "thesis", "dissertation", "uni thesis", "master thesis", "final project", "research paper", "5g networks", "radio over fiber",
                "διπλωματικη", "diplomatiki", "διπλωματική εργασία", "διπλωματικη εργασια", "thesis title", "διπλωματική", "διπλωματικη", "πτυχιακη", "ptixiaki"
            ],
            answer: () => {
                const p2 = t.aboutMe?.p2 || "";
                const thesisMatch = p2.match(/Thesis\s*titled\s*["«]([^"»]*)[»"]/) || p2.match(/Διπλωματική\s*μου\s*εργασία\s*με\s*τίτλο\s*["«]([^"»]*)[»"]/);
                const thesisTitle = thesisMatch ? thesisMatch[1] : "New Hybrid Wireless-Optical Networks (Radio over Fiber) for Fifth Generation (5G) Networks"; // Fallback title
                return `Andreas is currently writing his thesis titled "${thesisTitle}". Sounds pretty cutting-edge, right? It's all about the future of 5G!`;
            }
        },

        // CONTACT
        {
            keywords: [
                "contact", "email", "phone", "linkedin", "get in touch", "reach him", "contact info", "how to contact",
                "επικοινωνια", "epikoinonia", "τηλεφωνο", "tilefono", "mail", "επικοινωνήσω", "επικοινωνησω", "επικοινωνήστε", "επικοινωνηστε", "επικοινωνία μαζί του", "επικοινωνια μαζι του", "στοιχεια επικοινωνιας"
            ],
            answer: () => `You can easily contact Andreas! Email: andrewfragkiadakis@gmail.com, Phone: ${t.header?.phone || 'check the header'}, or connect on LinkedIn (${t.header?.linkedin || 'LinkedIn Profile'}). All details are right at the top of the page. Don't be shy!`,
        },

        // CV/RESUME
        {
            keywords: [
                "cv", "resume", "download cv", "get cv", "curriculum vitae", "download resume", "his cv", "pdf cv",
                "βιογραφικο", "viografiko", "βιογραφικό", "βιογραφικο σημειωμα", "βιογραφικό σημείωμα", "curriculum vitae", "curriculum", "vitae", "κατεβασμα cv", "λήψη cv"
            ],
            answer: () => `Looking for the CV? You can download Andreas's resume using the "${t.header?.downloadCV || 'Download CV'}" button in the header. It's packed with all the good stuff! 📄`,
        },

        // EDUCATION
        {
            keywords: [
                "education", "studies", "university", "college", "academic", "srh heidelberg", "west attica", "uniwa", "degrees", "qualifications", "master degree", "erasmus",
                "εκπαιδευση", "ekpaidefsi", "σπουδες", "spoudes", "πανεπιστημιο", "panepistimio", "σπουδή", "σπουδη", "σπουδές", "σπουδες", "πτυχιο", "ptixio", "μαστερ", "μεταπτυχιακο"
            ],
            answer: () => `Andreas is currently completing his Integrated Master's in Computer Science at the ${t.education?.uniWestAttica?.institution || 'University of West Attica'}. He also had an ERASMUS+ semester at ${t.education?.srhHeidelberg?.institution || 'SRH Hochschule Heidelberg'}, where he earned a Master of Science in Applied Computer Science. Smart cookie! 🍪 You can see more in the Education section.`,
        },

        // THANKS & BYE
        {
            keywords: [
                "thank you", "thanks", "thx", "ty", "cheers", "much appreciated", "great", "nice", "cool", "awesome", "perfect", "ok", "okay", "got it",
                "ευχαριστω", "efxaristo", "ευχαριστώ", "ευχαριστω πολυ", "ευχαριστώ πολύ", "ευχαριστω παρα πολυ", "ευχαριστώ πάρα πολύ", "μπραβο", "ωραια", "τελεια", "καλα", "ενταξει"
            ],
            answer: () => getRandomReply([t.chatbot.thankYou + " ✨", "Happy to help! 😊", "Anytime! 👍", "No problem at all!"]),
        },
        {
            keywords: [
                "bye", "goodbye", "see ya", "later", "cya", "farewell", "end chat", "exit",
                "αντιο", "antio", "ta leme", "τα λεμε", "τα λέμε", "αντίο", "αντιο σας", "αντίο σας", "φευγω", "κλεισιμο"
            ],
            answer: () => t.chatbot.bye + " 👋 Come back soon!",
        },

        // CHATBOT CAPABILITIES & FUN
        {
            keywords: [
                "what can you do", "your capabilities", "how can you help", "help me", "your purpose", "what are you for", "what you do",
                "τι μπορεις να κανεις", "ti boreis na kaneis", "τι μπορείς να κάνεις", "τι ξερεις να κανεις", "ti kseris na kaneis", "τι ξέρεις να κάνεις", "τι μπορεις", "τι μπορείς", "βοηθεια", "σε τι χρησιμευεις"
            ],
            answer: () => "I'm here to provide quick info about Andreas! Ask me about his skills, projects, work experience, or education. For example, 'Tell me about his work at Omilia' or 'What are his top skills?' I'm still learning, so simple questions work best! 🤖",
        },
        {
            keywords: [
                "joke", "tell me a joke", "make me laugh", "funny",
                "αστειο", "asteio", "πες μου ενα αστειο", "pes mou ena asteio", "αστείο", "πες μου ένα αστείο", "γελιο", "gelio", "γέλιο"
            ],
            answer: () => getRandomReply([
                "Why don't programmers like nature? It has too many bugs. 🐞",
                "What's a pirate's favorite programming language? Rrrrrr! 🏴‍☠️",
                "Why did the web developer break up with the SASS stylesheet? They had too many conflicts. 😉",
                "I told my computer I needed a break, and now it won’t stop sending me vacation ads. Oops."
            ]),
        },
        {
            keywords: ["who am i", "do you know me", "ποιος ειμαι", "με ξερεις"],
            answer: () => "I know you're someone awesome checking out Andreas's portfolio! Beyond that, my knowledge is limited to him. 😊"
        }
    ];
};