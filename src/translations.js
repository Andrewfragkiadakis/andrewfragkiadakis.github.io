// src/translations.js
export const translations = {
  en: {
    nav: {
      about: "ABOUT",
      education: "EDUCATION",
      experience: "EXPERIENCE",
      projects: "PROJECTS",
    },
    header: {
      namePart1: "ANDREAS",
      namePart2: "FRAGKIADAKIS",
      location: "Athens, Greece",
      phone: "(+30) 697-345-3683",
      email: "Email",
      linkedin: "LinkedIn",
      downloadCV: "Download CV",
    },
    aboutMe: {
      title: "ABOUT ME",
      p1: "Dedicated <strong>IT & Computer Engineering student</strong> with expertise in networking, system administration, and project management. Analytical and detail-oriented, with hands-on experience in web development, technical support, and infrastructure coordination. Fluent in <strong>English (C2)</strong> and <strong>German (B2)</strong>, delivering innovative solutions to drive efficiency and growth.",
      p2: 'Currently writing my <strong>Thesis</strong> titled "<strong>New Hybrid Wireless-Optical Networks (Radio over Fiber) for Fifth Generation (5G) Networks</strong>" and working at <strong>OMILIA LTD</strong> as an <strong>IT Engineer</strong>.',
    },
    coreSkills: {
      title: "CORE SKILLS",
      skills: {
        networkAdmin: {
          icon: "fas fa-network-wired",
          label: "Network & Systems Administration",
          detail: "Proficient in configuring and maintaining complex network infrastructures, ensuring optimal performance and security. Experience with Cisco, Active Directory, and various monitoring tools."
        },
        webDev: {
          icon: "fas fa-laptop-code",
          label: "Web Development",
          detail: "Skilled in front-end and back-end technologies including HTML, CSS, JavaScript, and React. Passionate about creating responsive and user-friendly web applications."
        },
        security: {
          icon: "fas fa-shield-alt",
          label: "Security Systems",
          detail: "Knowledgeable in implementing security best practices, endpoint hardening, and managing access controls. Familiar with PCI/SOC2 compliance requirements."
        },
        troubleshooting: {
          icon: "fas fa-lightbulb",
          label: "Troubleshooting",
          detail: "Expert at diagnosing and resolving hardware, software, and network issues efficiently, minimizing downtime and impact on users."
        },
        projectMgmt: {
          icon: "fas fa-tasks",
          label: "Project Management",
          detail: "Experienced in leading and coordinating IT projects, from planning and execution to monitoring and delivery, ensuring projects are completed on time and within budget."
        },
        communication: {
          icon: "fas fa-language",
          label: "Excellent Communication",
          detail: "Strong verbal and written communication skills in English (C2), Greek (Native), and German (B2), facilitating clear and effective collaboration with technical and non-technical stakeholders."
        }
      }
    },
    education: {
        title: "EDUCATION",
        uniWestAttica: {
            degree: "Integrated Master's Degree (5 Years), Computer Science",
            institution: "University of West Attica, Athens, Greece",
            duration: "September 2019 – Present",
            details: [
                "Distinguished member of the university’s Tech Society",
                "Relevant coursework: Advanced Computer Systems, AI, Network Security, Databases, Web Development, Cloud Computing",
                "GPA: 2.98"
            ]
        },
        srhHeidelberg: {
            degree: "Master of Science, Applied Computer Science",
            institution: "SRH Hochschule Heidelberg, Germany",
            duration: "April 2023 – October 2023 (ERASMUS+ Semester)",
            details: ["Awarded presenter and team leader"]
        }
    },
    experience: {
        title: "WORK EXPERIENCE",
        seeMore: "See More",
        seeLess: "See Less",
        omilia: {
            role: "Information Technology Support Engineer",
            company: "OMILIA LTD, Athens, Greece",
            duration: "September 2024 – Present", // Note: Original HTML was September 2024, check if this is a typo for 2023
            tasks: [
                "Provide internal user support and troubleshoot IT infrastructure using tools like Anydesk and RDP",
                "Manage endpoint hardening and implement policies for PCI and SOC2 audits",
                "Oversee cloud and network infrastructure with Jira Cloud, Cisco ISE, Microsoft Active Directory, and ESXi",
                "Administer security and productivity tools including Google Workspace, HID systems, and 1Password"
            ]
        },
        keepEatHealthy: {
            role: "Information Technology Support & Infrastructure Coordinator",
            company: "KEEP EAT HEALTHY, Athens, Greece",
            duration: "May 2022 – Present",
            tasks: [
                "Coordinate IT infrastructure installation and maintenance",
                "Troubleshoot technical issues and propose modern solutions"
            ]
        },
        // Add other experiences similarly
        anemomyloi: {
            role: "Information Technology Support Specialist",
            company: "ANEMOMYLOI ANDROS AE, Andros, Greece",
            duration: "January 2023 – February 2024",
            tasks: [
                 "Delivered remote IT support and consultation services",
                 "Supported company projects with IT infrastructure management",
                 "Organized work portfolios and financial records"
            ]
        },
        selfEmployed: {
            role: "Web Developer",
            company: "Self-Employed, Athens, Greece",
            duration: "2020 – November 2023",
            tasks: [
                "Developed and launched two fully operational websites",
                "Self-taught web development technologies and methodologies"
            ]
        },
        weballdesign: {
            role: "Network Systems Installation & Configuration Technician",
            company: "Weballdesign, Athens, Greece",
            duration: "2020 – November 2022",
            tasks: [
                "Installed and configured server/client systems in educational institutions",
                "Maintained network infrastructure (switches, routers, UPS) and performed diagnostics",
                "Trained on-site personnel and documented procedures"
            ]
        }
    },
    projects: {
        title: "PERSONAL PROJECTS",
        // Add details for each project
        portfolio: {
            name: "Portfolio Website",
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            description: "Designed and built this responsive personal CV page. Features light/dark mode, language toggle (EN/GR), and dynamic content sections.",
            githubLink: "https://github.com/Andrewfragkiadakis/andrewfragkiadakis.github.io"
        },
        happyFox: {
            name: "HappyFox 🦊 - Mental Health App",
            tags: ["UI/UX Design", "Figma", "Team Project", "SRH Heidelberg"],
            description: "Developed UI/UX concepts for a user-friendly mental health app aimed at promoting emotional well-being during a Master's course.",
            githubLink: "https://github.com/Andrewfragkiadakis/Mental-Health-Project/tree/main"
        },
        schiller: {
            name: "Schiller Language Centers Website",
            tags: ["Wix", "Wix Studio", "Web Development", "Educational"],
            description: "Developed the website for Schiller Language Centers in Rethymno, Greece, using the Wix platform (Wix Studio). The site showcases courses in English, German, and Educational Robotics for various age groups, highlighting 30 years of experience and success rates. Includes location details and contact form.",
            liveSiteLink: "https://www.schiller.edu.gr/"
        },
        raspberryPi: {
            name: "Raspberry Pi Adblocker & Streamer",
            tags: ["Raspberry Pi", "Linux", "Networking", "Pi-hole", "Plex"],
            description: "Configured a Raspberry Pi for network-wide adblocking (Pi-hole) and media streaming (Plex) on a home network."
        },
        llmResearch: {
            name: "Research: LLMs & Human Knowledge",
            tags: ["Research", "Cognitive Science", "LLMs", "GPT-3", "Python", "CTCS"],
            description: "Compared GPT-3 and human performance on the False Belief Task to assess belief attribution in LLMs. Published in Cognitive Science.",
            reportLink: "https://drive.google.com/uc?export=download&id=1w_3VG01O34Q9lNhrvKmhXno2OfptYJYi",
            publicationLink: "https://onlinelibrary.wiley.com/doi/10.1111/cogs.13309"
        },
        silenceHero: {
            name: "Silence Hero - A browser extension",
            tags: ["Chrome Extension", "JavaScript", "HTML", "CSS", "UI/UX"],
            description: "Ever had a neighbor complain about you blasting music? Have they called the cops for being too loud during Greek quiet hours? Well, fear no more! With this simple Chrome extension, you'll never forget when it's quiet time or not, thanks to clear visual cues and a handy countdown timer.",
            githubLink: "https://github.com/Andrewfragkiadakis/Silence-Hero"
        },
        friendlyWheelchair: {
            name: "The Friendly Wheelchair (Concept)",
            tags: ["Project Management", "AI", "NLP", "Agile/SCRUM", "Healthcare IT"],
            description: "Developed a detailed project management plan and technical specifications for an AI-powered self-driving wheelchair concept for Heidelberg Clinics.",
            reportLink: "https://drive.google.com/uc?export=download&id=18gqsCB6UYA1wMTBFjkw2jBoYMqK_HsZT"
        },
        portfolioPresentation: {
            name: "5G Radio over Fiber Thesis Presentation",
            tags: ["HTML", "CSS", "JavaScript", "Presentation"],
            description: "Interactive thesis presentation on hybrid wireless-optical networks (Radio over Fiber) for 5G.",
            thesisLink: "https://tinyurl.com/yc3knyak", // NEW: Full thesis link
            liveSiteLink: "/presentation/Presentation.html",
            imageSrc: "presentation/placeholder-logo.png"
        }
    },
    footer: {
        copyright: "© 2025 Andreas Fragkiadakis. All rights reserved."
    },
    themeToggle: {
        nightMode: "Night Mode",
        lightMode: "Light Mode"
    },
    langToggle: "GR/EN",
    chatbot: { // NEW SECTION
      greeting: "Hello! I'm Andreas' AI assistant. Ask me about his skills, experience, or projects!",
      inputPlaceholder: "Ask a question...",
      fallback: "Sorry, I'm not sure how to answer that. Try asking about skills, experience, or specific projects.",
      contactSuggestion: "For more detailed questions, you might want to contact Andreas directly through the links in the header.",
      thankYou: "You're welcome!",
      bye: "Goodbye! Feel free to ask if anything else comes up."
    }

  },
  gr: {
    nav: {
      about: "ΣΧΕΤΙΚΑ",
      education: "ΕΚΠΑΙΔΕΥΣΗ",
      experience: "ΕΜΠΕΙΡΙΑ",
      projects: "PROJECTS",
    },
    header: {
      namePart1: "ΑΝΔΡΕΑΣ",
      namePart2: "ΦΡΑΓΚΙΑΔΑΚΗΣ",
      location: "Αθήνα, Ελλάδα",
      phone: "(+30) 697-345-3683",
      email: "Email",
      linkedin: "LinkedIn",
      downloadCV: "Λήψη CV",
    },
    aboutMe: {
      title: "ΣΧΕΤΙΚΑ ΜΕ ΕΜΕΝΑ",
      p1: "Αφοσιωμένος <strong>Φοιτητής Πληροφορικής & Μηχανικής Υπολογιστών</strong> με εξειδίκευση στα Δίκτυα, τη διαχείριση συστημάτων και το project management. Αναλυτικός και προσηλωμένος στη λεπτομέρεια, με πρακτική εμπειρία στην ανάπτυξη ιστοσελίδων, τεχνική υποστήριξη και συντονισμό υποδομών. Άπταιστη γνώση της <strong>Αγγλικής (C2)</strong> και <strong>Γερμανικής (B2)</strong>, παρέχοντας καινοτόμες λύσεις για την αύξηση της αποδοτικότητας και της ανάπτυξης.",
      p2: 'Αυτή τη στιγμή γράφω τη <strong>Διπλωματική μου εργασία</strong> με τίτλο "<strong>Νέα Υβριδικά Ασύρματα-Οπτικά Δίκτυα (Radio over Fiber) για Δίκτυα Πέμπτης Γενιάς (5G)</strong>" και εργάζομαι στην <strong>OMILIA LTD</strong> ως <strong>Μηχανικός Υποστήριξης Πληροφορικής</strong>.',
    },
    coreSkills: {
      title: "ΒΑΣΙΚΕΣ ΔΕΞΙΟΤΗΤΕΣ",
      skills: {
        networkAdmin: {
          icon: "fas fa-network-wired",
          label: "Δικτύωση & Διαχ. Συστημάτων",
          detail: "Άριστη γνώση στη διαμόρφωση και συντήρηση πολύπλοκων δικτυακών υποδομών, εξασφαλίζοντας βέλτιστη απόδοση και ασφάλεια. Εμπειρία με Cisco, Active Directory και διάφορα εργαλεία παρακολούθησης."
        },
        webDev: {
          icon: "fas fa-laptop-code",
          label: "Ανάπτυξη Web",
          detail: "Δεξιότητες σε τεχνολογίες front-end και back-end, συμπεριλαμβανομένων HTML, CSS, JavaScript και React. Πάθος για τη δημιουργία responsive και φιλικών προς τον χρήστη διαδικτυακών εφαρμογών."
        },
        security: {
          icon: "fas fa-shield-alt",
          label: "Ασφάλεια Συστημάτων",
          detail: "Γνώση στην εφαρμογή βέλτιστων πρακτικών ασφαλείας, ενίσχυση τερματικών σημείων και διαχείριση ελέγχων πρόσβασης. Εξοικείωση με τις απαιτήσεις συμμόρφωσης PCI/SOC2."
        },
        troubleshooting: {
          icon: "fas fa-lightbulb",
          label: "Επίλυση Προβλημάτων",
          detail: "Εμπειρία στη διάγνωση και επίλυση προβλημάτων υλικού, λογισμικού και δικτύου με αποτελεσματικότητα, ελαχιστοποιώντας τον χρόνο εκτός λειτουργίας και τον αντίκτυπο στους χρήστες."
        },
        projectMgmt: {
          icon: "fas fa-tasks",
          label: "Διαχείριση Έργων",
          detail: "Εμπειρία στην καθοδήγηση και συντονισμό έργων πληροφορικής, από τον σχεδιασμό και την εκτέλεση έως την παρακολούθηση και την παράδοση, διασφαλίζοντας την ολοκλήρωση των έργων εντός χρονοδιαγράμματος και προϋπολογισμού."
        },
        communication: {
          icon: "fas fa-language",
          label: "Εξαιρετική Επικοινωνία",
          detail: "Ισχυρές προφορικές και γραπτές επικοινωνιακές δεξιότητες στα Αγγλικά (C2), Ελληνικά (Μητρική) και Γερμανικά (B2), διευκολύνοντας τη σαφή και αποτελεσματική συνεργασία με τεχνικούς και μη τεχνικούς συνεργάτες."
        }
      }
    },
    education: {
        title: "ΕΚΠΑΙΔΕΥΣΗ",
        uniWestAttica: {
            degree: "Integrated Master's degree (5yrs), Computer Science",
            institution: "Πανεπιστήμιο Δυτικής Αττικής",
            duration: "Σεπτέμβριος 2019 - Παρόν",
            details: [
                "Διακεκριμένο μέλος του Tech Society του πανεπιστημίου",
                "Σχετικές γνώσεις: Υπολογιστικά Συστήματα, Τεχνητή Νοημοσύνη, Ασφάλεια Δικτύων, Συστήματα Διαχείρισης Βάσεων Δεδομένων, Τεχνολογία Λογισμικού, Ανάπτυξη Ιστού, Υπολογιστικό Νέφος",
                "ΜΈΣΟΣ ΌΡΟΣ ΒΑΘΜΟΛΟΓΊΑΣ: 7.6 (2.98 GPA)"
            ]
        },
        srhHeidelberg: {
            degree: "Μεταπτυχιακός τίτλος σπουδών (MS), Εφαρμοσμένη Πληροφορική",
            institution: "SRH Hochschule Heidelberg",
            duration: "Απρίλιος 2023 - Οκτώβριος 2023 (Ακαδ. Εξάμηνο)",
            details: ["Φοιτητικό εξάμηνο ERASMUS+", "Βραβευμένος ομιλητής & επικεφαλής ομάδας"]
        }
    },
    experience: {
        title: "ΕΠΑΓΓΕΛΜΑΤΙΚΗ ΕΜΠΕΙΡΙΑ",
        seeMore: "Δείτε Περισσότερα",
        seeLess: "Δείτε Λιγότερα",
        omilia: {
            role: "Μηχανικός Υποστήριξης Πληροφορικής",
            company: "OMILIA LTD, Αθήνα, Ελλάδα",
            duration: "Σεπτέμβριος 2024 – Σήμερα",
            tasks: [
                "Παροχή εσωτερικής υποστήριξης χρηστών και αντιμετώπιση προβλημάτων υποδομής Πληροφορικής με εργαλεία όπως Anydesk και RDP",
                "Διαχείριση ενίσχυσης τερματικών και εφαρμογή πολιτικών για ελέγχους PCI και SOC2",
                "Επίβλεψη υποδομών cloud και δικτύου με εργαλεία όπως Jira Cloud, Cisco ISE, Microsoft Active Directory και ESXi",
                "Διαχείριση λύσεων ασφάλειας και παραγωγικότητας όπως Google Workspace, συστήματα HID και 1Password"
            ]
        },
        keepEatHealthy: {
            role: "Συντονιστής Υποστήριξης & Υποδομών Πληροφορικής",
            company: "KEEP EAT HEALTHY, Αθήνα, Ελλάδα",
            duration: "Μάιος 2022 - Σήμερα",
            tasks: [
                "Παροχή υποστήριξης πληροφορικής και συντονισμός υποδομών",
                "Επίβλεψη της εγκατάστασης και της συντήρησης των συστημάτων ΤΠ",
                "Αντιμετώπιση τεχνικών ζητημάτων και πρόταση σύγχρονων λύσεων"
            ]
        },
        anemomyloi: {
            role: "Ειδικός Υποστήριξης Πληροφορικής",
            company: "ANEMOMYLOI ANDROS AE, Άνδρος, Νότιο Αιγαίο, Ελλάδα",
            duration: "Ιανουάριος 2023 - Φεβρουάριος 2024",
            tasks: [
                "Παροχή υπηρεσιών απομακρυσμένης υποστήριξης και συμβουλών ΤΠ",
                "Συνδρομή στην υποδομή πληροφορικής και την υποστήριξη εταιρικών έργων",
                "Οργάνωση portfolio εταιρίας & οικονομικών αρχείων"
            ]
        },
        selfEmployed: {
            role: "Web Developer",
            company: "Freelance, Αθήνα, Ελλάδα",
            duration: "2020 - Νοέμβριος 2023",
            tasks: [
                "Ανάπτυξη και λανσάρισμα λειτουργίας δύο πλήρως λειτουργικών ιστότοπων"
            ]
        },
        weballdesign: {
            role: "Τεχνικός Εγκατάστασης και Διαμόρφωσης Δικτυακών Συστημάτων",
            company: "Weballdesign, Αθήνα, Ελλάδα",
            duration: "2020 - Νοέμβριος 2022",
            tasks: [
                "Ρύθμιση και διαμόρφωση συστημάτων διακομιστών και πελατών σε εκπαιδευτικά ιδρύματα & σχολεία",
                "Ρύθμιση και συντήρηση υποδομών δικτύου, συμπεριλαμβανομένων Routers, Switches και UPS",
                "Διασφάλιση της σωστής συνδεσιμότητα δικτύου και διενέργεια διαγνωστικών δικτύου",
                "Διαμόρφωση ρυθμίσεων BIOS και εκκίνησης δικτύου για υπολογιστές-πελάτες",
                "Παροχή κατάρτισης και υποστήριξης στο προσωπικό για τη συνεχή συντήρηση και διαχείριση",
                "Λεπτομερής καταγραφή διαδικασιών εγκατάστασης και διαμόρφωσης για μελλοντική αναφορά και επίλυση προβλημάτων"
            ]
        }
    },
    projects: {
        title: "ΠΡΟΣΩΠΙΚΑ PROJECTS",
        portfolio: {
            name: "Προσωπική Ιστοσελίδα Portfolio",
            tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
            description: "Σχεδίαση και κατασκευή αυτής της αποκριτικής ιστοσελίδας CV. Διαθέτει light/dark mode, εναλλαγή γλώσσας (EN/GR) και δυναμικές ενότητες περιεχομένου.",
            githubLink: "https://github.com/Andrewfragkiadakis/andrewfragkiadakis.github.io"
        },
        happyFox: {
            name: "HappyFox 🦊 - Εφαρμογή Ψυχικής Υγείας",
            tags: ["UI/UX Design", "Figma", "Team Project", "SRH Heidelberg"],
            description: "Ανάπτυξη concepts UI/UX για μια φιλική προς τον χρήστη εφαρμογή ψυχικής υγείας με στόχο την προώθηση της συναισθηματικής ευεξίας κατά τη διάρκεια μεταπτυχιακού μαθήματος.",
            githubLink: "https://github.com/Andrewfragkiadakis/Mental-Health-Project/tree/main"
        },
        schiller: {
            name: "Ιστοσελίδα Κέντρων Ξένων Γλωσσών Schiller",
            tags: ["Wix", "Wix Studio", "Ανάπτυξη Web", "Εκπαιδευτικό"],
            description: "Ανάπτυξη της ιστοσελίδας για τα Κέντρα Ξένων Γλωσσών Schiller στο Ρέθυμνο, με χρήση της πλατφόρμας Wix (Wix Studio). Η σελίδα παρουσιάζει μαθήματα Αγγλικών, Γερμανικών και Εκπαιδευτικής Ρομποτικής για διάφορες ηλικίες, τονίζοντας την 30ετή εμπειρία και τα ποσοστά επιτυχίας. Περιλαμβάνει πληροφορίες τοποθεσιών και φόρμα επικοινωνίας.",
            liveSiteLink: "https://www.schiller.edu.gr/"
        },
        raspberryPi: {
            name: "Raspberry Pi Adblocker & Streamer",
            tags: ["Raspberry Pi", "Linux", "Networking", "Pi-hole", "Plex"],
            description: "Διαμόρφωση Raspberry Pi για αποκλεισμό διαφημίσεων σε όλο το δίκτυο (Pi-hole) και streaming πολυμέσων (Plex) σε οικιακό δίκτυο."
        },
        llmResearch: {
            name: "Έρευνα: LLMs & Ανθρώπινη Γνώση",
            tags: ["Research", "Cognitive Science", "LLMs", "GPT-3", "Python", "CTCS"],
            description: "Σύγκριση απόδοσης GPT-3 και ανθρώπων στο False Belief Task για την αξιολόγηση της απόδοσης πεποιθήσεων σε LLMs. Δημοσιεύθηκε στο Cognitive Science.",
            reportLink: "https://drive.google.com/uc?export=download&id=1w_3VG01O34Q9lNhrvKmhXno2OfptYJYi",
            publicationLink: "https://onlinelibrary.wiley.com/doi/10.1111/cogs.13309"
        },
        silenceHero: {
            name: "Silence Hero - Επέκταση για Chrome",
            tags: ["Επέκταση Chrome", "JavaScript", "HTML", "CSS", "UI/UX"],
            description: "Σου έχει τύχει ποτέ γείτονας να παραπονιέται που βαράς μουσική στη διαπασών; Έχουν καλέσει την αστυνομία επειδή έκανες φασαρία κατά τις ώρες κοινής ησυχίας; Λοιπόν, μη φοβάσαι άλλο! Με αυτή την απλή επέκταση για Chrome, δεν θα ξεχάσεις ποτέ πότε είναι ώρα κοινής ησυχίας, χάρη στις σαφείς οπτικές ενδείξεις και ένα εύχρηστο χρονόμετρο αντίστροφης μέτρησης.",
            githubLink: "https://github.com/Andrewfragkiadakis/Silence-Hero"
        },
        friendlyWheelchair: {
            name: "The Friendly Wheelchair (Concept)",
            tags: ["Project Management", "AI", "NLP", "Agile/SCRUM", "Healthcare IT"],
            description: "Ανάπτυξη λεπτομερούς σχεδίου διαχείρισης έργου και τεχνικών προδιαγραφών για ένα concept αυτόνομου αναπηρικού αμαξιδίου με AI για τις κλινικές της Χαϊδελβέργης.",
            reportLink: "https://drive.google.com/uc?export=download&id=18gqsCB6UYA1wMTBFjkw2jBoYMqK_HsZT"
        },
        portfolioPresentation: {
            name: "Παρουσίαση Διπλωματικής: 5G Radio over Fiber",
            tags: ["HTML", "CSS", "JavaScript", "Παρουσίαση"],
            description: "Διαδραστική παρουσίαση διπλωματικής για υβριδικά ασύρματα-οπτικά δίκτυα (Radio over Fiber) σε δίκτυα 5G.",
            thesisLink: "https://tinyurl.com/yc3knyak", // NEW: Full thesis link
            liveSiteLink: "/presentation/Presentation.html",
            imageSrc: "presentation/placeholder-logo.png"
        }
    },
    footer: {
        copyright: "© 2025 Ανδρέας Φραγκιαδάκης. Με επιφύλαξη παντός δικαιώματος."
    },
    themeToggle: {
        nightMode: "Night Mode",
        lightMode: "Light Mode"
    },
    langToggle: "EN/GR",
    chatbot: { // NEW SECTION
      greeting: "Γεια σας! Είμαι ο AI βοηθός του Ανδρέα. Ρωτήστε με για τις δεξιότητές του, την εμπειρία ή τα project του!",
      inputPlaceholder: "Κάντε μια ερώτηση...",
      fallback: "Συγγνώμη, δεν είμαι σίγουρος πώς να απαντήσω σε αυτό. Δοκιμάστε να ρωτήσετε για δεξιότητες, εμπειρία ή συγκεκριμένα project.",
      contactSuggestion: "Για πιο λεπτομερείς ερωτήσεις, μπορείτε να επικοινωνήσετε απευθείας με τον Ανδρέα μέσω των συνδέσμων στην κεφαλίδα.",
      thankYou: "Παρακαλώ!",
      bye: "Αντίο! Ρωτήστε ελεύθερα αν προκύψει κάτι άλλο."
    }
  },
};