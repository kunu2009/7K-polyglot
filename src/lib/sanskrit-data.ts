
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

// Based on the 'Alhad' (आल्हादः) HSC Maharashtra Board textbook index.
export const newSyllabus: SyllabusSection[] = [
  {
    title: "प्रथममण्डलम्",
    title_en: "Section 1: Easy Sanskrit",
    content: [
      {
        title: "सुगमसंस्कृतम्",
        description: "Foundational concepts for practical Sanskrit usage.",
        items: [
          { sanskrit: "१. व्यावहारिक-सूचनाः", translation: "Practical Information" },
          { sanskrit: "२. व्यावहारिकशब्दस्तबकः", translation: "Bouquet of Practical Words" },
        ],
        details: "This section covers foundational vocabulary and phrases for everyday conversation, instructions, and basic communication. Focus is on immediate practical application."
      }
    ]
  },
  {
    title: "द्वितीयमण्डलम्",
    title_en: "Section 2: Poetry (पद्यम्)",
    content: [
      {
        title: "१. क्षणं मनोविनोदनम्",
        description: "A Moment of Mental Recreation - Verses on appreciating the small joys of life.",
        items: [
          { sanskrit: "क्षणं वित्तं क्षणं चित्तं क्षणं जीवितमावयोः।", translation: "For a moment wealth, for a moment the mind, for a moment is our life." },
          { sanskrit: "क्षणे क्षणे यन्नवतामुपैति तदेव रूपं रमणीयतायाः॥", translation: "That which attains newness every moment, that indeed is the form of beauty." }
        ]
      },
      {
        title: "२. उत्सवप्रिया देवभूमिः",
        description: "The Festival-Loving Land of Gods - A description of India's festive culture.",
         items: [
          { sanskrit: "अत्रैव देवाः गायन्ति धन्यास्तु ते भारतभूमिभागे।", translation: "Here, even the gods sing, 'Blessed are those in the land of Bharat.'" },
        ]
      },
      {
        title: "३. मोदं वितनोतु संवादः",
        description: "Let the Dialogue Spread Joy - A conversation that brings happiness.",
         items: [
          { sanskrit: "संवादः सर्वदा कार्यः प्रीतिवर्धनकारकः।", translation: "A dialogue should always be held, for it increases affection." },
        ]
      },
      {
        title: "४. भावेन भावः, क्रियया क्रिया",
        description: "Feeling for feeling, action for action - On emotional and active reciprocity.",
         items: [
          { sanskrit: "यथा धेनुसहस्रेषु वत्सो विन्दति मातरम्। तथा पूर्वकृतं कर्म कर्तारमनुगच्छति॥", translation: "Just as a calf finds its mother among a thousand cows, so does a past deed follow its doer." }
        ]
      },
      {
        title: "५. हनुमत्-प्लुतिः",
        description: "The Leap of Hanuman - Verses describing Hanuman's epic jump to Lanka.",
         items: [
          { sanskrit: "नमोऽस्तु रामाय सलक्ष्मणाय देव्यै च तस्यै जनकात्मजायै।", translation: "Salutations to Rama with Lakshmana, and to that goddess, the daughter of Janaka." }
        ]
      },
    ]
  },
  {
    title: "तृतीयमण्डलम्",
    title_en: "Section 3: Prose (गद्यम्)",
    content: [
      {
        title: "१. भाषासंवादः",
        description: "A dialogue about language.",
        details: "This prose piece depicts a conversation discussing the nature and importance of language, particularly Sanskrit."
      },
      {
        title: "२. प्राचीनकाले प्रसाधनम्",
        description: "Cosmetics and Grooming in Ancient Times.",
        details: "An exposition on the methods of beautification and personal grooming prevalent in ancient India."
      },
      {
        title: "३. प्रजापालनार्थं राजकर्तव्यानि",
        description: "The Duties of a King for the Protection of his Subjects.",
        details: "This section details the expected duties of a monarch as prescribed in ancient political treatises."
      }
    ]
  },
  {
    title: "चतुर्थमण्डलम्",
    title_en: "Section 4: Introduction to Literature",
    content: [
      {
        title: "साहित्यपरिचयः",
        description: "Introduction to Sanskrit Literature.",
        items: [
          { sanskrit: "१. भारतविद्या", translation: "Indian Knowledge Systems" },
          { sanskrit: "२. नाट्यविशेषः", translation: "Special Features of Drama" }
        ],
        details: "An overview of the traditional branches of knowledge in India and an introduction to the unique elements of Sanskrit drama."
      }
    ]
  },
  {
    title: "पञ्चममण्डलम्",
    title_en: "Section 5: Pot of Drama (नाट्यकलशः)",
    content: [
      { title: "१. भीमघटोत्कचयोः", description: "The encounter of Bhima and Ghatotkacha." },
      { title: "२. दुष्यन्तसर्वदमनयोः", description: "The story of Dushyanta and Sarvadamana (Bharata)." },
      { title: "३. रामस्य कुशलवयोः च", description: "The story of Rama and his sons, Kusha and Lava." },
      { title: "४. भगवदज्जुकीयम्-प्रहसनम्", description: "Bhagavadajjukīyam - A Farce." },
      { title: "५. लोकरञ्जकं लोकनाट्यम्", description: "Folk Theatre that Entertains the People." }
    ]
  },
  {
    title: "षष्ठमण्डलम्",
    title_en: "Section 6: Writing Skills (लेखनकौशलम्)",
    content: [
      { title: "१. चित्रपटवर्णनम्", description: "Picture Composition / Describing a scene." },
      { title: "२. वृत्तान्तलेखनम्", description: "Report Writing." }
    ]
  },
  {
    title: "सप्तममण्डलम्",
    title_en: "Section 7: Appendix (परिशिष्टम्)",
    content: [
      { title: "नाम", description: "Extensive vocabulary list." },
      { title: "समासः", description: "Explanation and examples of compound words." },
      { title: "कृदन्ताः", description: "Explanation of Kṛdanta forms (verbal derivatives)." },
      { title: "तद्धितान्ताः", description: "Study of Taddhita suffixes and their usage." },
      { title: "अमरकोशः", description: "Selections from the Amarakosha, a classical Sanskrit thesaurus." },
      { title: "सूचनानुसारं परिवर्तनम्", description: "Grammatical transformations as per instructions." },
    ]
  },
];

// Based on the Alhad textbook syllabus
export const practiceQuestions = [
  // Vocabulary Questions
  { question: "In the verse 'क्षणं वित्तं क्षणं चित्तं', what does 'चित्तं' mean?", options: ["Wealth", "Life", "Mind", "Time"], answer: "Mind" },
  { question: "What is the meaning of 'रमणीयता'?", options: ["Ugliness", "Beauty", "Novelty", "Permanence"], answer: "Beauty" },
  { question: "The word 'वत्सो' in the verse from 'भावेन भावः...' refers to a:", options: ["Cow", "Mother", "Calf", "Deed"], answer: "Calf" },
  { question: "'हनुमत्-प्लुतिः' describes Hanuman's:", options: ["Strength", "Devotion", "Wisdom", "Leap"], answer: "Leap" },
  { question: "The term 'प्रसाधनम्' from the prose section refers to:", options: ["Meditation", "Cosmetics/Grooming", "Administration", "Dialogue"], answer: "Cosmetics/Grooming" },
  
  // Grammar and Concept Questions
  { question: "The study of compound words is found in which part of the appendix?", options: ["नाम", "कृदन्ताः", "तद्धितान्ताः", "समासः"], answer: "समासः" },
  { question: "'भगवदज्जुकीयम्' is an example of what type of drama?", options: ["Tragedy", "Historical Play", "Farce (प्रहसनम्)", "Epic Poem"], answer: "Farce (प्रहसनम्)" },
  { question: "'अमरकोशः' is a famous Sanskrit:", options: ["Epic poem", "Grammar text", "Thesaurus/Dictionary", "Play"], answer: "Thesaurus/Dictionary" },
  { question: "A 'कृदन्तः' is a word derived from a:", options: ["Noun", "Pronoun", "Verb root", "Adjective"], answer: "Verb root" },
  { question: "The skill of 'चित्रपटवर्णनम्' involves:", options: ["Report Writing", "Essay Writing", "Picture Composition", "Letter Writing"], answer: "Picture Composition" },
  { question: "'नाट्यविशेषः' would explain:", options: ["Poetic meters", "Prose styles", "Special features of drama", "Vedic hymns"], answer: "Special features of drama" },
  { question: "The story of Bhima and Ghatotkacha is found in:", options: ["पद्यम्", "गद्यम्", "नाट्यकलशः", "साहित्यपरिचयः"], answer: "नाट्यकलशः" },
  { question: "What does 'राजकर्तव्यानि' mean?", options: ["Duties of a citizen", "Duties of a king", "Rights of a king", "Palace rituals"], answer: "Duties of a king" },
  { question: "Which section focuses on practical, everyday Sanskrit?", options: ["पद्यम्", "गद्यम्", "सुगमसंस्कृतम्", "परिशिष्टम्"], answer: "सुगमसंस्कृतम्" },
  { question: "'सूचनानुसारं परिवर्तनम्' is a grammar exercise involving:", options: ["Translation", "Transformation", "Recitation", "Composition"], answer: "Transformation" },
];

// Based on the Alhad textbook syllabus
export const flashcards = [
  // Vocabulary from poetry/prose
  { id: 1, front: "क्षणम्", back: "A moment" },
  { id: 2, front: "चित्तम्", back: "Mind / Consciousness" },
  { id: 3, front: "रमणीयता", back: "Beauty / Loveliness" },
  { id: 4, front: "उत्सवप्रिय", back: "Lover of festivals" },
  { id: 5, front: "संवादः", back: "Dialogue / Conversation" },
  { id: 6, front: "वत्सः", back: "Calf / Son" },
  { id: 7, front: "विन्दति", back: "Finds" },
  { id: 8, front: "कर्म", back: "Action / Deed" },
  { id: 9, front: "प्लुतिः", back: "Leap / Jump" },
  { id: 10, front: "प्रसाधनम्", back: "Cosmetics / Adornment" },
  { id: 11, front: "राजकर्तव्यानि", back: "Duties of a king" },
  { id: 12, front: "प्रजा", back: "Subjects / Citizens" },
  { id: 13, front: "लोकरञ्जकम्", back: "Entertaining for the people" },

  // Concepts
  { id: 14, front: "सुगमसंस्कृतम्", back: "Easy / Accessible Sanskrit" },
  { id: 15, front: "पद्यम्", back: "Poetry / Verse" },
  { id: 16, front: "गद्यम्", back: "Prose" },
  { id: 17, front: "साहित्यपरिचयः", back: "Introduction to Literature" },
  { id: 18, front: "नाट्यकलशः", back: "Pot of Drama (Drama Section)" },
  { id: 19, front: "लेखनकौशलम्", back: "Writing Skills" },
  { id: 20, front: "परिशिष्टम्", back: "Appendix" },
  { id: 21, front: "समासः", back: "Compound Words" },
  { id: 22, front: "कृदन्तः", back: "Verbal Derivative" },
  { id: 23, front: "तद्धितान्तः", back: "Nominal Suffix Derivative" },
  { id: 24, front: "अमरकोशः", back: "A classical Sanskrit thesaurus" },
  { id: 25, front: "प्रहसनम्", back: "Farce / Comedy Play" },
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

    