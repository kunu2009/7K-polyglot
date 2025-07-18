export interface SyllabusItem {
  sanskrit: string;
  translation?: string;
}

export interface SyllabusContent {
  title: string;
  description?: string;
  details?: string;
  items?: SyllabusItem[];
}

export interface SyllabusSection {
  title: string;
  title_en: string;
  content?: SyllabusContent[];
}

export const newSyllabus: SyllabusSection[] = [
  {
    title: "प्रथमपृष्ठम्",
    title_en: "Introductory Section",
    content: [
      {
        title: "सुगमसंस्कृतम्",
        description: "Simple Sanskrit for practical use.",
        items: [
          { sanskrit: "१. व्यावहारिक-सूचना", translation: "Practical Information" },
          { sanskrit: "२. व्यावहारिकशब्दसङ्ग्रहः", translation: "Collection of practical words" },
        ],
        details: "This section covers foundational vocabulary and phrases for everyday conversation, instructions, and basic communication. Focus is on immediate practical application."
      }
    ]
  },
  {
    title: "द्वितीयपृष्ठम्",
    title_en: "Poetry",
    content: [
      {
        title: "१. क्षणमनोज्ञंम्",
        description: "A Pleasant Moment - Verses on appreciating the small joys of life.",
        items: [
          { sanskrit: "क्षणं वित्तं क्षणं चित्तं क्षणं जीवितमावयोः।", translation: "For a moment wealth, for a moment the mind, for a moment is our life." },
          { sanskrit: "क्षणे क्षणे यन्नवतामुपैति तदेव रूपं रमणीयतायाः॥", translation: "That which attains newness every moment, that indeed is the form of beauty." }
        ]
      },
      {
        title: "२. उषस्त्रिजता देवर्षिः",
        description: "A Vedic poem about the Rishi Ushastrijata.",
        items: [
          { sanskrit: "उषो देवि दिवो दुहितर्विश्ववारे।", translation: "O Goddess Ushas, daughter of the heavens, bearer of all treasures." },
        ]
      },
      {
        title: "३. याचे विनायकं मुदा",
        description: "A devotional verse to Lord Ganesha.",
        items: [
          { sanskrit: "गजाननं भूतगणादिसेवितं कपित्थजम्बूफलचारुभक्षणम्।", translation: "I worship the elephant-faced one, attended by the host of bhutas, who gracefully consumes kapittha and jambu fruits." },
          { sanskrit: "उमासुतं शोकविनाशकारकं नमामि विघ्नेश्वरपादपङ्कजम्॥", translation: "Son of Uma, the destroyer of sorrow, I bow to the lotus feet of the lord of obstacles." }
        ]
      },
      {
        title: "४. हसुम्-पंक्तिः",
        description: "A collection of humorous verses.",
        items: [
          { sanskrit: "वैद्यराज नमस्तुभ्यं यमराजसहोदर।", translation: "Salutations to you, O king of physicians, the brother of Yama (the god of death)." },
          { sanskrit: "यमस्तु हरति प्राणान् वैद्यः प्राणान् धनानि च॥", translation: "Yama only takes life, but the physician takes both life and wealth." }
        ]
      },
    ]
  },
  {
    title: "तृतीयपृष्ठम्",
    title_en: "Prose",
    content: [
      {
        title: "१. श्रावणसंवादः",
        description: "A dialogue set in the month of Shravan.",
        details: "This prose piece depicts a conversation between two friends enjoying the monsoon season, discussing nature, festivals, and the cultural significance of the month of Shravan."
      },
      {
        title: "२. प्राचीनकाले प्रधामम्",
        description: "Leadership in Ancient Times.",
        details: "An exposition on the qualities and responsibilities of leaders in ancient India, drawing examples from historical and mythological texts."
      },
      {
        title: "३. प्रजापालायार्थं राजकर्तव्यानि",
        description: "The Duties of a King for the Protection of his Subjects.",
        details: "This section details the expected duties of a monarch, including ensuring justice, security, and prosperity for all citizens as prescribed in ancient political treatises."
      }
    ]
  },
  {
    title: "चतुर्थपृष्ठम्",
    title_en: "Introduction to Literature",
    content: [
      {
        title: "१. भारतीयविद्या",
        description: "Indian Knowledge Systems.",
        details: "An overview of the traditional branches of knowledge in India, including the Vedas, Vedangas, Puranas, and various Shastras."
      },
      {
        title: "२. नाट्यविशेषः",
        description: "Special Features of Drama.",
        details: "An introduction to the unique elements of Sanskrit drama, such as the roles of the Sutradhara (director) and Vidushaka (jester), and concepts like Nāndi (prologue)."
      }
    ]
  },
  {
    title: "पञ्चमपृष्ठम्",
    title_en: "Dramatic Arts",
    content: [
      { title: "१. भीष्मप्रतिज्ञा", description: "The Vow of Bhishma from the Mahabharata." },
      { title: "२. दुर्योधनस्य मनःस्थिति", description: "Exploring Duryodhana’s state of mind." },
      { title: "३. रामस्य कुषलताः", description: "The skills and virtues of Lord Rama." },
      { title: "४. ध्रुवदृढचित्तं-सत्यव्रतं", description: "The steadfastness and truthfulness of Dhruva." },
      { title: "५. लोकानुरंजनं लोककाव्यम्", description: "Folk poetry that pleases the people." }
    ]
  },
  {
    title: "षष्ठपृष्ठम्",
    title_en: "Writing Skills",
    content: [
      { title: "१. निबन्धलेखनम्", description: "Essay Writing on various topics." },
      { title: "२. वृत्तालेखनम्", description: "Report Writing on events and incidents." }
    ]
  },
  {
    title: "समापनम्",
    title_en: "Appendix",
    content: [
      { title: "नाम", description: "An extensive vocabulary list for reference." },
      { title: "समासः", description: "Detailed explanation and examples of compound words." },
      { title: "कृदन्ताः", description: "Explanation of Kṛdanta forms (verbal derivatives)." },
      { title: "तद्धितान्ताः", description: "Study of Taddhita suffixes and their usage." },
      { title: "अमरकोशः", description: "Selections from the Amarakosha, a classical Sanskrit thesaurus." },
    ]
  },
];

export const practiceQuestions = [
  // Vocabulary Questions from New Syllabus
  { question: "In the verse 'क्षणं वित्तं क्षणं चित्तं', what does 'चित्तं' mean?", options: ["Wealth", "Life", "Mind", "Time"], answer: "Mind" },
  { question: "What is the meaning of 'रमणीयता'?", options: ["Ugliness", "Beauty", "Novelty", "Permanence"], answer: "Beauty" },
  { question: "Who is 'यमराजसहोदरः' (brother of Yama) in the humorous verse?", options: ["A king", "A poet", "A physician (वैद्यराज)", "A thief"], answer: "A physician (वैद्यराज)" },
  { question: "'गजाननम्' refers to which deity?", options: ["Shiva", "Vishnu", "Brahma", "Ganesha"], answer: "Ganesha" },
  { question: "The word 'पादपङ्कजम्' means:", options: ["Lotus eyes", "Lotus hands", "Lotus feet", "Lotus face"], answer: "Lotus feet" },

  // Grammar and Concept Questions
  { question: "The section 'निबन्धलेखनम्' deals with what skill?", options: ["Poetry Recitation", "Story Telling", "Essay Writing", "Report Writing"], answer: "Essay Writing" },
  { question: "Which section of the syllabus would introduce the role of the 'Sutradhara'?", options: ["Poetry", "Prose", "Introduction to Literature", "Writing Skills"], answer: "Introduction to Literature" },
  { question: "'अमरकोशः' is a type of:", options: ["Epic poem", "Grammar text", "Thesaurus/Dictionary", "Play"], answer: "Thesaurus/Dictionary" },
  { question: "A 'कृदन्तः' is a word derived from a:", options: ["Noun", "Pronoun", "Verb root", "Adjective"], answer: "Verb root" },
  { question: "The study of compound words is called:", options: ["सन्धिः", "कारकम्", "लकारः", "समासः"], answer: "समासः" },
  { question: "In the verse 'यमस्तु हरति प्राणान्', what does 'हरति' mean?", options: ["Gives", "Protects", "Takes away", "Creates"], answer: "Takes away" },
  { question: "The term 'भारतीयविद्या' refers to:", options: ["Indian geography", "Indian history", "Indian knowledge systems", "Indian politics"], answer: "Indian knowledge systems" },
  { question: "'शोकविनाशकारकं' means:", options: ["The cause of sorrow", "The destroyer of sorrow", "One who is sorrowful", "The protector from sorrow"], answer: "The destroyer of sorrow" },
  { question: "Which month is mentioned in 'श्रावणसंवादः'?", options: ["Kartik", "Magha", "Chaitra", "Shravan"], answer: "Shravan" },
  { question: "The story of 'भीष्मप्रतिज्ञा' comes from which epic?", options: ["Ramayana", "Mahabharata", "Raghuvamsha", "Kumarasambhava"], answer: "Mahabharata" },
];

export const flashcards = [
  // Vocabulary from New Syllabus
  { id: 1, front: "क्षणम्", back: "A moment" },
  { id: 2, front: "चित्तम्", back: "Mind / Consciousness" },
  { id: 3, front: "रमणीयता", back: "Beauty / Loveliness" },
  { id: 4, front: "वैद्यराज", back: "King of physicians" },
  { id: 5, front: "यमराज", back: "The god of death" },
  { id: 6, front: "सहोदरः", back: "Brother (born of the same womb)" },
  { id: 7, front: "प्राणान्", back: "Life / Life-breaths" },
  { id: 8, front: "धनम्", back: "Wealth" },
  { id: 9, front: "हरति", back: "Takes away / Steals" },
  { id: 10, front: "गजाननः", back: "The elephant-faced one (Ganesha)" },
  { id: 11, front: "पादपङ्कजम्", back: "Lotus feet" },
  { id: 12, front: "शोकः", back: "Sorrow / Grief" },
  { id: 13, front: "विनाशकारकः", back: "The destroyer" },
  { id: 14, front: "मुदा", back: "With joy" },
  { id: 15, front: "याचे", back: "I ask / pray for" },
  
  // Concepts from New Syllabus
  { id: 16, front: "निबन्धलेखनम्", back: "Essay Writing" },
  { id: 17, front: "वृत्तालेखनम्", back: "Report Writing" },
  { id: 18, front: "साहित्यपरिचयः", back: "Introduction to Literature" },
  { id: 19, front: "नाट्यविशेषः", back: "Special Features of Drama" },
  { id: 20, front: "समासः", back: "Compound Words" },
  { id: 21, front: "कृदन्तः", back: "Verbal Derivative" },
  { id: 22, front: "तद्धितः", back: "Nominal Derivative" },
  { id: 23, front: "अमरकोशः", back: "A classical Sanskrit thesaurus" },
  { id: 24, front: "भीष्मप्रतिज्ञा", back: "The Vow of Bhishma" },
  { id: 25, front: "लोककाव्यम्", back: "Folk Poetry" },
];

// Deprecated or to be updated based on new syllabus
export const dailyTasks: any[] = [];
export const grammarToolSentence: any = { words: [] };
export const culturalFacts: any[] = [];
export const wordBuilderGame: any = { roots: [] };
export const writingTopics: any[] = [];
export const mindMapData: any[] = [];
export const textbookChapters: any[] = []; // Deprecated in favor of newSyllabus
export const grammarLessons: any[] = []; // Deprecated in favor of newSyllabus appendix
