export const CAREER_CONSTANTS = {
    JOB_DETAILS: [
        { name: "Location", value: "Green Park, New Delhi" },
        { name: "Type", value: "Full-Time" },
        { name: "Department", value: "IT" },
      ],

    JOB_DESCRIPTION: {
        TITLE: "We are an applied AI lab building end-to-end software agents.",
        PARAGRAPHS: [
            "We're building collaborative AI teammates that enable engineers to focus on more interesting problems and empower engineering teams to strive for more ambitious goals.",
            "Our team is small and talent-dense. Among our founding team, we have world-class competitive programmers, former founders, and leaders from companies at the cutting edge of AI including Cursor, Scale AI, Lunchclub, Modal, Google DeepMind, Waymo, and Nuro.",
            "At UnbiaslyAI, we aim to change the way people consume news, making a big impact and building trust in 'The Fourth Pillar of Democracy.' We are dedicated to delivering trustworthy news through AI-powered technology, ensuring source verification and personalized content. Our goal is to combat misinformation, promote media literacy, and uphold the integrity of journalism as the cornerstone of democracy."
        ]
    },

    OVERVIEW: "Overview",
    APPLICATION: "Application",

    AUTOFILL: "Autofill from resume",
    UPLOAD: "Upload resume here to autofill key application fields",
    UPLOAD_FILE: "Upload File",

    // APPLICANT: [
    //     { id:"name", label: "Name", type: "text" },
    //     { id:"email", label: "Email", type: "email" },
    //     { id:"address", label: "Address", type: "textarea" },
    //     // date
    //     { id:"date", label: "Earliest Possible Start Date", type: "date" },
        
    //     { id:"additional", label: "Is there anything else you'd like to add in support of your application?", type: "textarea" }

    //    ],
    APPLY: "Apply for this role",
    OPEN_POSTIONS : "Browse Open Positions",

    RESUME: "Resume",

    SOCIALS: {
        title: 'Social',
        links: [
            { href: "https://x.com/unbiaslyai", src: "/twitterW.svg", alt: "UnbiaslyAI Twitter page" },
            { href: "https://www.facebook.com/UnbiaslyAI", src: "/facebookW.svg", alt: "UnbiaslyAI Facebook page" },
            { href: "https://in.linkedin.com/company/unbiasly-ai", src: "/linkedinW.svg", alt: "UnbiaslyAI LinkedIn page" },
            { href: "https://www.instagram.com/unbiasly.ai", src: "/instagramW.svg", alt: "UnbiaslyAI Instagram page" },
            { href: "https://www.youtube.com/@unbiaslyai", src: "/youtubeW.svg", alt: "UnbiaslyAI Youtube page" },
        ],
    },

    INTRO_CONTACT: [
          {
            icon: "/career-icons/chat.svg",
            title: "Chat with us",
            subtitle: "Our team is ready to help.",
            contact: "contact@unbiasly.ai",
          },
          {
            icon: "/career-icons/location.svg",
            title: "Visit Us",
            subtitle: "Come say Hello to us at the hq",
            contact: `Basement C11, Green Park <br /> Extension, New Delhi-110016`,
          },
          {
            icon: "/career-icons/call-outline.svg",
            title: "Call Us",
            subtitle: "Mon-Fri 9am-6pm",
            contact: "contact@unbiasly.ai",
          },
        ],

    JOB_INPUTS: [
        { id: "name", label: "Name", type: "text", placeholder: "e.g. Robin Singh", value: "" },
        { id: "email", label: "Email", type: "email", placeholder: "e.g. name@example.com", value: "" },
        { id: "phone", label: "Phone", type: "tel", placeholder: "e.g. +919876543210", value: "" },
        { id: "address", label: "Address", type: "text", placeholder: "e.g. New Delhi, India", value: "" },
    ],
    
    EDUCATION_INPUTS: {
        education: "Education",
        institute: "Name of Institute",
        degree: "Degree",
        date: "DD/MM/YYYY",
        examples: {
            institute: "e.g. Stanford University",
            degree: "e.g. Bachelor of Computer Science"
        },
        labels: {
            status: "Status",
            duration: "Duration",
            startDate: "Start Date",
            endDate: "End Date"
        },
        statusOptions: {
            current: "Current",
            completed: "Completed"
        }
    },

    EMPLOYMENT_INPUTS: {
        employment: "Recent Employment",
        date: "DD/MM/YYYY",
        company: "Company Name",
        position: "Position Held",
        examples: {
            company: "e.g. Google Inc.",
            position: "e.g. Software Engineer"
        },
        labels: {
            startDate: "Start Date",
            endDate: "End Date",
            duration: "Duration"
        }
    },

    OTHER_INPUTS: [
        { 
            id: "possible_join_date", 
            label: "Earliest Possible Start Date", 
            type: "date",
            value: "" 
        },
        { 
            id: "additional_information", 
            label: "Is there anything else you'd like to add in support of your application?", 
            type: "textarea", 
            placeholder: "e.g. I am a quick learner and I am very passionate about the role.",
            value: "" 
        }
    ],

    INTRO_INPUTS: { 
        name_id: "name", 
        name: "Name", 
        type: "text" 
    },

    ACHIEVEMENT_INPUTS: {
        placeholder: "e.g. Led a team of 5 developers to deliver a major project ahead of schedule"
    },

    SKILLS_INPUTS: {
        placeholder: "e.g. Python, React, Machine Learning"
    },

    NOT_AVAILABLE: {
        job: "No job selected",
        title: "Job Title Not Available",
        description: "Job description not available",
        experience: "Experience Level Not Available",
        skills: "No skills available",
        department: "Department Not Available",
        location: "Location Not Available",
        type: "Job Type Not Available"
    },

    }