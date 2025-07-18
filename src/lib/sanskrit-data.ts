
export interface SyllabusItem {
  sanskrit: string;
  translation?: string;
  explanation?: string;
}

export interface SyllabusContent {
  id: string;
  title: string;
  title_en: string;
  description?: string;
  details?: string;
  items?: SyllabusItem[];
}

export interface SyllabusSection {
  title: string;
  title_en: string;
  content: SyllabusContent[];
}

export const newSyllabus: SyllabusSection[] = [
  {
    title: "प्रथममण्डलम्",
    title_en: "Section 1: Introductory Section",
    content: [
      {
        id: "vyavaharik-suchana",
        title: "व्यावहारिक-सूचनाः",
        title_en: "Practical Instructions",
        description: "Common Sanskrit phrases used in daily life, especially in a classroom context.",
        items: [
          { sanskrit: "सुप्रभातम् / शुभरात्रिः", translation: "Good morning / Good night" },
          { sanskrit: "धन्यवादः / स्वागतम्", translation: "Thank you / Welcome" },
          { sanskrit: "कृपया उपविशतु / उत्तिष्ठतु", translation: "Please sit down / stand up" },
          { sanskrit: "कथम् अस्ति? / सम्यक् अस्मि", translation: "How are you? / I am well" },
          { sanskrit: "चिन्ता मास्तु", translation: "Don't worry" },
          { sanskrit: "पुनः मिलामः", translation: "Let's meet again" },
        ],
      },
      {
        id: "vyavaharik-shabdasangrah",
        title: "व्यावहारिकशब्दसंग्रहः",
        title_en: "Practical Vocabulary",
        description: "A collection of frequently used words categorized by context.",
        items: [
            { sanskrit: "परिवारः", translation: "Family (माता, पिता, भ्राता, भगिनी)" },
            { sanskrit: "शरीराङ्गाणि", translation: "Body Parts (शिरः, हस्तः, पादः, नेत्रम्)" },
            { sanskrit: "वस्तूनि", translation: "Objects (पुस्तकम्, लेखनी, गृहम्, आसनम्)" },
            { sanskrit: "क्रियाः", translation: "Actions (पठति, लिखति, गच्छति, खादति)" },
        ]
      }
    ]
  },
  {
    title: "द्वितीयमण्डलम्",
    title_en: "Section 2: Poetry Section",
    content: [
      {
        id: "ksanam-manojnam",
        title: "क्षणं मनोज्ञम्",
        title_en: "A Pleasant Moment",
        description: "A poetic reflection on how a single beautiful moment can bring joy and peace.",
        items: [
            { sanskrit: "क्षणं वित्तं क्षणं चित्तं, क्षणं जीवितमावयोः। यमस्य करुणा नास्ति, धर्म एव सहायकृत्॥", translation: "Wealth is momentary, the mind is momentary, and our lives are momentary. The God of Death has no compassion; only Dharma (righteousness) is the true helper." }
        ]
      },
      {
        id: "usastrijata-devarsih",
        title: "उषस्त्रिजता देवर्षिः",
        title_en: "Rishi Ushastrijata",
        description: "A Vedic hymn describing the wisdom and devotion of the ancient seer.",
        items: [
            { sanskrit: "भद्रं कर्णेभिः शृणुयाम देवाः। भद्रं पश्येमाक्षभिर्यजत्राः॥", translation: "O Gods, may we hear with our ears what is auspicious. O worthy ones, may we see with our eyes what is auspicious." }
        ]
      },
      {
        id: "yace-vinayakam-mudam",
        title: "याचे विनायकं मुदा",
        title_en: "I Joyfully Pray to Ganesha",
        description: "A devotional poem to Lord Ganesha seeking wisdom and blessings.",
        items: [
            { sanskrit: "वक्रतुण्ड महाकाय सूर्यकोटिसमप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥", translation: "O one with the twisted trunk and a massive body, whose splendor is equal to a million suns. O God, please make all my endeavors free of obstacles, always." }
        ]
      },
      {
        id: "hasupanktih",
        title: "हसुपंक्तिः",
        title_en: "Humorous Verses",
        description: "Light and witty Sanskrit shlokas meant to bring smiles while teaching subtle truths.",
        items: [
            { sanskrit: "वैद्यराज नमस्तुभ्यं यमराजसहोदर। यमस्तु हरति प्राणान् वैद्यः प्राणान् धनानि च॥", translation: "Salutations to you, O king of physicians, the brother of Yama (the God of Death). Yama only takes life, but the physician takes both life and wealth!" }
        ]
      }
    ]
  },
  {
    title: "तृतीयमण्डलम्",
    title_en: "Section 3: Prose Section",
    content: [
      {
        id: "sravanasamvadah",
        title: "श्रावणसंवादः",
        title_en: "Conversation in Shravan",
        description: "A dialogue between characters about rituals in the holy month of Shravan.",
        details: "This chapter presents a dialogue where two friends discuss the significance of the Shravan month, its festivals like Nag Panchami and Raksha Bandhan, and the spiritual importance of fasting and prayers during this period. It highlights cultural traditions and beliefs."
      },
      {
        id: "pracinakale-prathamam",
        title: "प्राचीनकाले प्रथमम्",
        title_en: "Leadership in Ancient Times",
        description: "Insights into how leadership and governance were structured in ancient India.",
        details: "This lesson explores the principles of kingship and administration as described in ancient texts like the Arthashastra. It covers the ideal qualities of a leader, their education, and their responsibilities towards the state and its people, emphasizing justice and welfare."
      },
      {
        id: "rajakartavyani",
        title: "प्रजापालायार्थं राजकर्तव्यानि",
        title_en: "Royal Duties for People’s Welfare",
        description: "Describes a king’s duties toward his citizens — justice, protection, and prosperity.",
        details: "Focusing on 'Raja Dharma', this section elaborates on the duties of a monarch. These include protecting the citizens (प्रजापालनम्), ensuring justice (दण्डनीति), managing the economy, and promoting righteousness. The king's personal life was expected to be exemplary."
      }
    ]
  },
  {
    title: "चतुर्थमण्डलम्",
    title_en: "Section 4: Intro to Sanskrit Lit.",
    content: [
      {
        id: "bharatiyavidya",
        title: "भारतीयविद्या",
        title_en: "Indian Knowledge Systems",
        description: "Overview of Indian traditional sciences like Ayurveda, Yoga, and Sanskrit grammar.",
        details: "This chapter introduces the vast landscape of traditional Indian knowledge. It touches upon the Vedas, Upanishads, the six schools of philosophy (Darshanas), and specialized fields like Ayurveda (medicine), Jyotisha (astronomy/astrology), and Vyakarana (grammar), showcasing the intellectual heritage of India."
      },
      {
        id: "natyavisesah",
        title: "नाट्यविशेषः",
        title_en: "Special Aspects of Drama",
        description: "Introduces Sanskrit drama theory, characters, emotions (rasa), and aesthetics.",
        details: "Based on Bharata Muni's Natya Shastra, this lesson explains the core components of Sanskrit drama. It covers concepts like 'Nandi' (prologue), 'Prastavana' (introduction), character types (Nayaka, Nayika, Vidushaka), and most importantly, the theory of 'Rasa'—the aesthetic sentiment evoked in the audience."
      }
    ]
  },
   {
    title: "पञ्चममण्डलम्",
    title_en: "Section 5: Drama",
    content: [
        {
            id: "bhimaghatotkachayoh",
            title: "भीमघटोत्कचयोः संवादः",
            title_en: "Dialogue of Bhima and Ghatotkacha",
            description: "A dramatic scene from Bhāsa's 'Madhyamavyāyoga' where Bhima unknowingly confronts his own son, Ghatotkacha.",
            details: "In this one-act play, the demon Ghatotkacha, son of Bhima, is ordered by his mother Hidimba to find a human for her meal. He stops a Brahmin family and demands one of their sons. As they argue, Bhima arrives and offers himself instead. The ensuing confrontation is full of dramatic irony, as neither father nor son recognizes the other, leading to a powerful climax of revelation."
        },
        {
            id: "duryodhanasya-manasthiti",
            title: "दुर्योधनस्य मनःस्थिति",
            title_en: "Duryodhana’s Mindset",
            description: "Shows the psychological conflict and arrogance of Duryodhana.",
            details: "This selection likely portrays a scene from a play like 'Urubhangam' by Bhasa, focusing on Duryodhana's state of mind. It would explore his arrogance, jealousy towards the Pandavas, and his internal justifications for his actions, providing a deep character study."
        }
    ]
  },
  {
    title: "षष्ठमण्डलम्",
    title_en: "Section 6: Writing Skills",
    content: [
      {
        id: "nibandhalekhanam",
        title: "निबन्धलेखनम्",
        title_en: "Essay Writing",
        description: "Teaches structured writing of Sanskrit essays.",
        details: "This section provides guidelines and examples for composing essays in Sanskrit. Topics often include 'मम प्रियः कविः' (My favorite poet), 'संस्कृतभाषायाः महत्त्वम्' (The importance of Sanskrit), etc. It focuses on structure, vocabulary, and grammatical correctness."
      },
      {
        id: "vrttalekhanam",
        title: "वृत्तालेखनम्",
        title_en: "Report Writing",
        description: "How to write Sanskrit reports on events or observations.",
        details: "This teaches the skill of report writing (vrittanta-lekhanam). Students learn to describe an event, such as a school function or a celebration, in a clear, sequential manner using appropriate Sanskrit vocabulary and sentence structures."
      }
    ]
  },
  {
    title: "सप्तममण्डलम्",
    title_en: "Section 7: Appendix",
    content: [
      { id: "samasa", title: "समासः", title_en: "Compounds", description: "Explanation of compound words with examples." },
      { id: "krdanta", title: "कृदन्ताः", title_en: "Kṛdanta Forms", description: "Participial forms of verbs used in Sanskrit." },
      { id: "taddhitanta", title: "तद्धितान्ताः", title_en: "Taddhita Forms", description: "Suffix-derived words for classification." },
      { id: "amarakosha", title: "अमरकोशः", title_en: "Amarakosha", description: "Collection of Sanskrit synonyms." },
      { id: "suchananusaram-parivartanam", title: "सूचनानुसारं परिवर्तनम्", title_en: "Grammatical Transformations", description: "Exercises involving changing voice, tense, etc." },
    ]
  }
];

export const practiceQuestions = [
  // प्रथममण्डलम्
  { chapterId: "vyavaharik-suchana", question: "How do you say 'Thank you' in Sanskrit?", options: ["कृपया", "स्वागतम्", "धन्यवादः", "अस्तु"], answer: "धन्यवादः" },
  { chapterId: "vyavaharik-suchana", question: "What does 'कृपया उपविशतु' mean?", options: ["Please come here", "Please sit down", "Please go there", "Please read"], answer: "Please sit down" },
  { chapterId: "vyavaharik-shabdasangrah", question: "The word 'भ्राता' refers to whom?", options: ["Father", "Son", "Brother", "Friend"], answer: "Brother" },
  { chapterId: "vyavaharik-shabdasangrah", question: "Which word means 'to read'?", options: ["लिखति", "पठति", "गच्छति", "खादति"], answer: "पठति" },

  // द्वितीयमण्डलम्
  { chapterId: "ksanam-manojnam", question: "In the verse 'क्षणं वित्तं क्षणं चित्तं', what is said to be the only true helper?", options: ["Wealth (वित्तम्)", "Mind (चित्तम्)", "Life (जीवितम्)", "Righteousness (धर्मः)"], answer: "Righteousness (धर्मः)" },
  { chapterId: "yace-vinayakam-mudam", question: "The verse 'वक्रतुण्ड महाकाय' is a prayer to which deity?", options: ["Shiva", "Vishnu", "Ganesha", "Brahma"], answer: "Ganesha" },
  { chapterId: "yace-vinayakam-mudam", question: "What does 'निर्विघ्नं कुरु' mean?", options: ["Grant me wealth", "Make me wise", "Remove obstacles", "Give me strength"], answer: "Remove obstacles" },
  { chapterId: "hasupanktih", question: "In the humorous verse, who is called the 'brother of Yama'?", options: ["A king", "A teacher", "A physician", "A merchant"], answer: "A physician" },

  // तृतीयमण्डलम्
  { chapterId: "rajakartavyani", question: "What is the primary duty of a king mentioned as 'प्रजापालनम्'?", options: ["Conquering lands", "Building palaces", "Protecting citizens", "Performing rituals"], answer: "Protecting citizens" },
  { chapterId: "pracinakale-prathamam", question: "Which ancient text is a primary source for principles of governance?", options: ["Ramayana", "Natyashastra", "Arthashastra", "Manusmriti"], answer: "Arthashastra" },

  // चतुर्थमण्डलम्
  { chapterId: "natyavisesah", question: "The aesthetic sentiment or emotion evoked in the audience of a Sanskrit drama is called:", options: ["Nandi", "Rasa", "Nayaka", "Vidushaka"], answer: "Rasa" },
  { chapterId: "bharatiyavidya", question: "Which of these is NOT one of the 'Indian Knowledge Systems'?", options: ["Ayurveda", "Yoga", "Vyakarana", "Geometry"], answer: "Geometry" },

  // पञ्चममण्डलम्
  { chapterId: "bhimaghatotkachayoh", question: "Who is Ghatotkacha's father?", options: ["Arjuna", "Yudhishthira", "Bhima", "Nakula"], answer: "Bhima" },
  { chapterId: "bhimaghatotkachayoh", question: "The play 'Madhyamavyāyoga' was written by which famous playwright?", options: ["Kalidasa", "Bhavabhuti", "Bhasa", "Shudraka"], answer: "Bhasa" },

  // षष्ठमण्डलम्
  { chapterId: "nibandhalekhanam", question: "What does 'निबन्धलेखनम्' translate to?", options: ["Letter Writing", "Report Writing", "Story Writing", "Essay Writing"], answer: "Essay Writing" },

  // सप्तममण्डलम्
  { chapterId: "samasa", question: "The grammatical concept of 'Samāsa' refers to:", options: ["Verb conjugation", "Compound words", "Sentence structure", "Pronouns"], answer: "Compound words" },
  { chapterId: "krdanta", question: "A 'Kṛdanta' is a word derived from a:", options: ["Noun", "Verb root", "Adjective", "Pronoun"], answer: "Verb root" },
  { chapterId: "amarakosha", question: "The 'Amarakosha' is a famous text of:", options: ["Poetry", "Synonyms", "Fables", "Laws"], answer: "Synonyms" },
];

export const flashcards = [
  // प्रथममण्डलम्
  { id: 1, chapterId: "vyavaharik-suchana", front: "सुप्रभातम्", back: "Good morning" },
  { id: 2, chapterId: "vyavaharik-suchana", front: "कथम् अस्ति?", back: "How are you?" },
  { id: 3, chapterId: "vyavaharik-shabdasangrah", front: "भगिनी", back: "Sister" },
  { id: 4, chapterId: "vyavaharik-shabdasangrah", front: "गृहम्", back: "House" },

  // द्वितीयमण्डलम्
  { id: 5, chapterId: "ksanam-manojnam", front: "क्षणम्", back: "A moment" },
  { id: 6, chapterId: "ksanam-manojnam", front: "धर्मः", back: "Righteousness, Duty" },
  { id: 7, chapterId: "yace-vinayakam-mudam", front: "निर्विघ्नम्", back: "Without obstacles" },
  { id: 8, chapterId: "yace-vinayakam-mudam", front: "सर्वदा", back: "Always" },
  { id: 9, chapterId: "hasupanktih", front: "यमराजसहोदर", back: "Brother of Yama (God of Death)" },
  { id: 10, chapterId: "hasupanktih", front: "वैद्यराज", back: "King of physicians" },

  // तृतीयमण्डलम्
  { id: 11, chapterId: "rajakartavyani", front: "प्रजा", back: "Citizens / Subjects" },
  { id: 12, chapterId: "rajakartavyani", front: "दण्डनीति", back: "Policy of justice/punishment" },
  { id: 13, chapterId: "sravanasamvadah", front: "संवादः", back: "Dialogue / Conversation" },

  // चतुर्थमण्डलम्
  { id: 14, chapterId: "bharatiyavidya", front: "आयुर्वेदः", back: "The science of life (medicine)" },
  { id: 15, chapterId: "natyavisesah", front: "रसः", back: "Aesthetic sentiment in drama" },
  { id: 16, chapterId: "natyavisesah", front: "नायकः", back: "Hero / Protagonist" },

  // पञ्चममण्डलम्
  { id: 17, chapterId: "bhimaghatotkachayoh", front: "मध्यमव्यायोग", back: "Title of the play by Bhasa" },
  { id: 18, chapterId: "bhimaghatotkachayoh", front: "घटोत्कचः", back: "Son of Bhima and Hidimba" },
  { id: 19, chapterId: "duryodhanasya-manasthiti", front: "मनःस्थिति", back: "State of mind" },

  // षष्ठमण्डलम्
  { id: 20, chapterId: "nibandhalekhanam", front: "निबन्धः", back: "Essay" },
  { id: 21, chapterId: "vrttalekhanam", front: "वृत्तान्तः", back: "Report / Account" },

  // सप्तममण्डलम्
  { id: 22, chapterId: "samasa", front: "समासः", back: "Compound Word" },
  { id: 23, chapterId: "krdanta", front: "कृदन्तः", back: "Verbal derivative (participle)" },
  { id: 24, chapterId: "taddhitanta", front: "तद्धितान्तः", back: "Nominal derivative (secondary suffix)" },
  { id: 25, chapterId: "amarakosha", front: "कोशः", back: "Thesaurus / Dictionary" },
  { id: 26, chapterId: "suchananusaram-parivartanam", front: "परिवर्तनम्", back: "Transformation / Change" },
];

export const culturalFacts = [
    { title: "Origins of Sanskrit", content: "Sanskrit is one of the oldest Indo-European languages and is the root of many modern Indian languages. It's known as 'Devavani' (language of the gods)." },
    { title: "The Two Great Epics", content: "The Rāmāyaṇa and the Mahābhārata are two of India's most famous epics, written in Sanskrit. They contain timeless stories of dharma, morality, and human struggle." },
    { title: "Sanskrit in Yoga", content: "Most Yoga postures (asanas) and philosophical concepts have Sanskrit names. For example, 'asana' means 'seat' or 'posture', and 'namaste' means 'I bow to you'." },
    { title: "Ayurveda's Language", content: "The foundational texts of Ayurveda, the traditional Indian system of medicine, like the Charaka Samhita and Sushruta Samhita, were composed in Sanskrit." },
    { title: "The Concept of 'Dharma'", content: "A key concept in Sanskrit literature, 'dharma' is a complex term that encompasses duty, righteousness, cosmic law, and moral order. It's a central theme in texts like the Bhagavad Gita." },
    { title: "Pāṇini's Grammar", content: "The Sanskrit grammarian Pāṇini composed the Aṣṭādhyāyī, a comprehensive and scientific grammar of Sanskrit, around the 4th century BCE. It's considered one of the greatest intellectual achievements of ancient India." }
];

export const grammarToolSentence = {
  sentence: "रामः वनं गच्छति",
  words: [
    {
      word: "रामः",
      color: "text-blue-600 dark:text-blue-400",
      info: {
        meaning: "Rama",
        wordType: "Noun",
        case: "Nominative (प्रथमा)",
        number: "Singular (एकवचनम्)",
        gender: "Masculine (पुल्लिङ्गम्)"
      }
    },
    {
      word: "वनं",
      color: "text-purple-600 dark:text-purple-400",
      info: {
        meaning: "to the forest",
        wordType: "Noun",
        case: "Accusative (द्वितीया)",
        number: "Singular (एकवचनम्)",
        gender: "Neuter (नपुंसकलिङ्गम्)"
      }
    },
    {
      word: "गच्छति",
      color: "text-red-600 dark:text-red-400",
      info: {
        meaning: "goes",
        wordType: "Verb",
        root: "गम् (to go)",
        tense: "Present (लट् लकारः)",
        person: "Third Person (प्रथमपुरुषः)",
        number: "Singular (एकवचनम्)"
      }
    }
  ]
};

export const wordBuilderGame = {
    roots: [
        {
            root: "गम्",
            meaning: "to go",
            syllables: ["ग", "च्छ", "ति", "मि", "वः", "न्ति"],
            validWords: ["गच्छति", "गच्छन्ति"]
        },
        {
            root: "भू",
            meaning: "to be/become",
            syllables: ["भ", "व", "ति", "मः", "सि", "थ"],
            validWords: ["भवति", "भवसि"]
        },
        {
            root: "कृ",
            meaning: "to do",
            syllables: ["क", "रो", "षि", "मि", "कु", "र्वः"],
            validWords: ["करोषि", "करोमि"]
        }
    ]
};

export const writingTopics = [
    { title: "मम प्रियः उत्सवः", translation: "My Favorite Festival" },
    { title: "संस्कृतभाषायाः महत्त्वम्", translation: "The Importance of the Sanskrit Language" },
    { title: " मम विद्यालयः", translation: "My School" },
    { title: "पर्यावरणसंरक्षणम्", translation: "Environmental Protection" }
];


export const mindMapData = [
  {
    title: "Verb Conjugation: √gam (to go)",
    root: "गम् (गच्छ्) - Present Tense (लट् लकारः)",
    sections: [
      {
        title: "Third Person (प्रथम पुरुषः)",
        persons: [
          { number: "Singular", form: "गच्छति" },
          { number: "Dual", form: "गच्छतः" },
          { number: "Plural", form: "गच्छन्ति" },
        ],
      },
      {
        title: "Second Person (मध्यम पुरुषः)",
        persons: [
          { number: "Singular", form: "गच्छसि" },
          { number: "Dual", form: "गच्छथः" },
          { number: "Plural", form: "गच्छथ" },
        ],
      },
      {
        title: "First Person (उत्तम पुरुषः)",
        persons: [
          { number: "Singular", form: "गच्छामि" },
          { number: "Dual", form: "गच्छावः" },
          { number: "Plural", form: "गच्छामः" },
        ],
      },
    ],
  },
];
