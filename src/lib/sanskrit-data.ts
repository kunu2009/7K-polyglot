export const dailyTasks = [
    {
        title: "Learn 5 New Words",
        description: "Expand your vocabulary.",
        goal: 5,
        href: "/flashcards",
    },
    {
        title: "Take 1 Quiz",
        description: "Test your knowledge.",
        goal: 1,
        href: "/practice",
    },
    {
        title: "Practice Pronunciation",
        description: "Master one phrase.",
        goal: 1,
        href: "/pronunciation",
    }
];

export const vocabularyCategories = [
  {
    category: "Common Nouns",
    words: [
      { sanskrit: "नरः", english: "Man", etymology: { root: "नृ", meaning: "to lead, guide", related: [{lang: "Proto-Indo-European", word: "*h₂nḗr"}] } },
      { sanskrit: "गजः", english: "Elephant" },
      { sanskrit: "बालकः", english: "Boy", etymology: { root: "बाल", meaning: "young, child" } },
      { sanskrit: "सूर्यः", english: "Sun", etymology: { root: "सुर्", meaning: "to shine", related: [{lang: "Avestan", word: "hvar"}] } },
    ],
  },
  {
    category: "Verbs",
    words: [
      { sanskrit: "पठति", english: "Reads", etymology: { root: "पठ्", meaning: "to read, recite" } },
      { sanskrit: "गच्छति", english: "Goes", etymology: { root: "गम्", meaning: "to go" } },
      { sanskrit: "अस्ति", english: "Is", etymology: { root: "अस्", meaning: "to be" } },
      { sanskrit: "करोति", english: "Does", etymology: { root: "कृ", meaning: "to do, make" } },
    ],
  },
  {
    category: "Nature",
    words: [
      { sanskrit: "वृक्षः", english: "Tree", etymology: { root: "वृक्ष्", meaning: "to grow" } },
      { sanskrit: "नदी", english: "River" },
      { sanskrit: "पर्वतः", english: "Mountain" },
      { sanskrit: "आकाशः", english: "Sky" },
    ],
  },
];

export const grammarLessons = [
  {
    title: "Introduction to Devanagari Script",
    content: "The Devanagari script is used for writing Sanskrit. It is an abugida, where each consonant has an inherent vowel (a), which can be changed with diacritics. We will start by learning the vowels and consonants.",
  },
  {
    title: "Nouns (Substantives)",
    content: "Sanskrit nouns (नामन्) have three genders (linga) - masculine, feminine, and neuter; three numbers (vachana) - singular, dual, and plural; and eight cases (vibhakti) which determine the noun's function in a sentence.",
  },
  {
    title: "Verbs (Verbs)",
    content: "Sanskrit verbs (क्रिया) are highly inflected. They are conjugated for person, number, and tense/mood. The root (धातु) is the basic element from which the verb forms are derived.",
  },
];

export const practiceQuestions = [
  {
    question: "What is the English meaning of 'नरः'?",
    options: ["Woman", "Man", "Child", "King"],
    answer: "Man",
  },
  {
    question: "What is the English meaning of 'गजः'?",
    options: ["Man", "Elephant", "Boy", "Sun"],
    answer: "Elephant",
  },
  {
    question: "Which verb means 'to read'?",
    options: ["गच्छति", "अस्ति", "पठति", "करोति"],
    answer: "पठति",
  },
  {
    question: "How many cases (vibhakti) are there in Sanskrit grammar?",
    options: ["Three", "Five", "Eight", "Ten"],
    answer: "Eight",
  },
  {
    question: "What is the Sanskrit for 'House'?",
    options: ["फलम्", "गृहम्", "अन्नम्", "विद्यालयः"],
    answer: "गृहम्",
  },
  {
    question: "What does 'विद्यालयः' mean in English?",
    options: ["Temple", "Market", "School", "Palace"],
    answer: "School",
  },
  {
    question: "The word 'अन्नम्' translates to:",
    options: ["Water", "Air", "Fire", "Food"],
    answer: "Food",
  },
  {
    question: "What is a 'फलम्'?",
    options: ["Fruit", "Flower", "Leaf", "Root"],
    answer: "Fruit",
  },
  {
    question: "What is the meaning of 'पुष्पम्'?",
    options: ["Star", "Moon", "Sun", "Flower"],
    answer: "Flower",
  },
  {
    question: "The Sanskrit word for 'Mother' is:",
    options: ["पिता", "भ्राता", "माता", "भगिनी"],
    answer: "माता",
  },
  {
    question: "What is 'Father' in Sanskrit?",
    options: ["पुत्रः", "गुरुः", "नरः", "पिता"],
    answer: "पिता",
  },
  {
    question: "What does 'श्वः' mean?",
    options: ["Today", "Yesterday", "Tomorrow", "Day after tomorrow"],
    answer: "Tomorrow",
  },
  {
    question: "The word for 'Today' in Sanskrit is:",
    options: ["अद्य", "ह्यः", "श्वः", "परश्वः"],
    answer: "अद्य",
  },
  {
    question: "How do you say 'Yes' in Sanskrit?",
    options: ["न", "किम्", "आम्", "अस्तु"],
    answer: "आम्",
  },
  {
    question: "What is the meaning of 'न'?",
    options: ["Yes", "No", "Maybe", "Always"],
    answer: "No",
  },
  {
    question: "What does 'कृपया' mean?",
    options: ["Thank you", "Please", "Sorry", "Welcome"],
    answer: "Please",
  },
  {
    question: "The Sanskrit pronoun 'अहम्' means:",
    options: ["You", "He", "She", "I"],
    answer: "I",
  },
  {
    question: "What is 'त्वम्' in English?",
    options: ["I", "You", "We", "They"],
    answer: "You",
  },
  {
    question: "The pronoun 'सः' refers to:",
    options: ["She", "It", "He", "That"],
    answer: "He",
  },
  {
    question: "The pronoun 'सा' refers to:",
    options: ["He", "She", "They", "We"],
    answer: "She",
  },
  {
    question: "What does 'किम्' mean?",
    options: ["Who", "What", "Where", "When"],
    answer: "What",
  },
  {
    question: "The word 'कुत्र' is used to ask:",
    options: ["When?", "Why?", "How?", "Where?"],
    answer: "Where?",
  },
  {
    question: "What is 'When' in Sanskrit?",
    options: ["कथम्", "किम्", "कुत्र", "कदा"],
    answer: "कदा",
  },
  {
    question: "How do you ask 'How?' in Sanskrit?",
    options: ["कथम्", "किमर्थम्", "कदा", "कुत्र"],
    answer: "कथम्",
  },
  {
    question: "The meaning of 'किमर्थम्' is:",
    options: ["For what / Why", "From where", "With whom", "In what"],
    answer: "For what / Why",
  },
  {
    question: "The opposite of 'महत्' (Big) is:",
    options: ["लघु", "गुरु", "दीर्घ", "अल्प"],
    answer: "लघु",
  },
  {
    question: "What does 'शीघ्रम्' mean?",
    options: ["Slowly", "Quietly", "Quickly", "Loudly"],
    answer: "Quickly",
  },
  {
    question: "The word 'मन्दम्' means:",
    options: ["Fast", "Slowly", "High", "Low"],
    answer: "Slowly",
  },
  {
    question: "What is the number 'One' in Sanskrit (neuter)?",
    options: ["द्वे", "त्रीणि", "एकम्", "पञ्च"],
    answer: "एकम्",
  },
  {
    question: "What is the number 'Three' in Sanskrit (neuter)?",
    options: ["त्रीणि", "चत्वारि", "पञ्च", "द्वे"],
    answer: "त्रीणि",
  },
  {
    question: "The word 'शान्तिः' means:",
    options: ["War", "Chaos", "Peace", "Love"],
    answer: "Peace",
  },
  {
    question: "What is a 'गुरुः'?",
    options: ["Student", "Teacher", "King", "Servant"],
    answer: "Teacher",
  },
  {
    question: "Which word means 'Water'?",
    options: ["अग्निः", "वायुः", "जलम्", "पृथ्वी"],
    answer: "जलम्",
  },
  {
    question: "Which word means 'Fire'?",
    options: ["जलम्", "अग्निः", "आकाशः", "भूमिः"],
    answer: "अग्निः",
  },
  {
    question: "The Sanskrit for 'Friend' is:",
    options: ["शत्रुः", "मित्रम्", "गुरुः", "शिष्यः"],
    answer: "मित्रम्",
  },
  {
    question: "What is 'सुप्रभातम्'?",
    options: ["Good evening", "Good afternoon", "Good night", "Good morning"],
    answer: "Good morning",
  },
  {
    question: "How do you say 'Good night'?",
    options: ["शुभदिनम्", "शुभरात्रिः", "स्वागतम्", "धन्यवादः"],
    answer: "शुभरात्रिः",
  },
  {
    question: "The word for 'Brother' is:",
    options: ["भगिनी", "माता", "पिता", "भ्राता"],
    answer: "भ्राता",
  },
  {
    question: "What is 'Sister' in Sanskrit?",
    options: ["भगिनी", "भ्राता", "पुत्री", "माता"],
    answer: "भगिनी",
  },
  {
    question: "The word 'योगः' primarily means:",
    options: ["Separation", "Conflict", "Union", "Meditation"],
    answer: "Union",
  },
  {
    question: "The concept of 'धर्मः' relates to:",
    options: ["Wealth", "Duty", "Pleasure", "Liberation"],
    answer: "Duty",
  },
  {
    question: "What is the meaning of 'प्रेम'?",
    options: ["Hate", "Fear", "Love", "Anger"],
    answer: "Love",
  },
  {
    question: "What is the English for 'पुत्रः'?",
    options: ["Daughter", "Son", "Nephew", "Niece"],
    answer: "Son",
  },
  {
    question: "What is the English for 'पुत्री'?",
    options: ["Son", "Aunt", "Daughter", "Mother"],
    answer: "Daughter",
  },
  {
    question: "The word 'सुन्दर' means:",
    options: ["Ugly", "Beautiful", "Strong", "Weak"],
    answer: "Beautiful",
  },
  {
    question: "What is the Sanskrit word for 'Book'?",
    options: ["लेखनी", "पत्रम्", "पुस्तकम्", "ज्ञानम्"],
    answer: "पुस्तकम्",
  },
  {
    question: "What does 'ह्यः' mean?",
    options: ["Today", "Tomorrow", "Yesterday", "Now"],
    answer: "Yesterday",
  },
  {
    question: "Which of these is a vehicle?",
    options: ["यानम्", "वनम्", "धनम्", "फलम्"],
    answer: "यानम्",
  },
  {
    question: "The word 'ज्ञानम्' means:",
    options: ["Ignorance", "Knowledge", "Power", "Wealth"],
    answer: "Knowledge",
  },
  {
    question: "What is the Sanskrit for 'Sky'?",
    options: ["नदी", "पर्वतः", "आकाशः", "समुद्रः"],
    answer: "आकाशः",
  },
];

export const flashcards = [
    { id: 1, front: "नमस्ते", back: "Greetings / Hello" },
    { id: 2, front: "धन्यवादः", back: "Thank you" },
    { id: 3, front: "जलम्", back: "Water" },
    { id: 4, front: "अग्निः", back: "Fire" },
    { id: 5, front: "मित्रम्", back: "Friend" },
    { id: 6, front: "गृहम्", back: "House" },
    { id: 7, front: "विद्यालयः", back: "School" },
    { id: 8, front: "अन्नम्", back: "Food" },
    { id: 9, front: "फलम्", back: "Fruit" },
    { id: 10, front: "पुष्पम्", back: "Flower" },
    { id: 11, front: "माता", back: "Mother" },
    { id: 12, front: "पिता", back: "Father" },
    { id: 13, front: "भ्राता", back: "Brother" },
    { id: 14, front: "भगिनी", back: "Sister" },
    { id: 15, front: "पुत्रः", back: "Son" },
    { id: 16, front: "पुत्री", back: "Daughter" },
    { id: 17, front: "श्वः", back: "Tomorrow" },
    { id: 18, front: "अद्य", back: "Today" },
    { id: 19, front: "ह्यः", back: "Yesterday" },
    { id: 20, front: "शुभरात्रिः", back: "Good night" },
    { id: 21, front: "सुप्रभातम्", back: "Good morning" },
    { id: 22, front: "आम्", back: "Yes" },
    { id: 23, front: "न", back: "No" },
    { id: 24, front: "कृपया", back: "Please" },
    { id: 25, front: "क्षम्यताम्", back: "Sorry / Excuse me" },
    { id: 26, front: "अहम्", back: "I" },
    { id: 27, front: "त्वम्", back: "You (singular)" },
    { id: 28, front: "सः", back: "He" },
    { id: 29, front: "सा", back: "She" },
    { id: 30, front: "तत्", back: "It / That" },
    { id: 31, front: "किम्", back: "What" },
    { id: 32, front: "कुत्र", back: "Where" },
    { id: 33, front: "कदा", back: "When" },
    { id: 34, front: "कथम्", back: "How" },
    { id: 35, front: "किमर्थम्", back: "Why / For what" },
    { id: 36, front: "लघु", back: "Small" },
    { id: 37, front: "महत्", back: "Big / Great" },
    { id: 38, front: "सुन्दर", back: "Beautiful" },
    { id: 39, front: "शीघ्रम्", back: "Fast / Quickly" },
    { id: 40, front: "मन्दम्", back: "Slow / Slowly" },
    { id: 41, front: "एकम्", back: "One" },
    { id: 42, front: "द्वे", back: "Two" },
    { id: 43, front: "त्रीणि", back: "Three" },
    { id: 44, front: "चत्वारि", back: "Four" },
    { id: 45, front: "पञ्च", back: "Five" },
    { id: 46, front: "प्रेम", back: "Love" },
    { id: 47, front: "शान्तिः", back: "Peace" },
    { id: 48, front: "धर्मः", back: "Duty / Righteousness" },
    { id: 49, front: "योगः", back: "Union / Yoga" },
    { id: 50, front: "गुरुः", back: "Teacher" },
];

export const grammarToolSentence = {
    sentence: "रामः पुस्तकं पठति।",
    words: [
        {
            word: "रामः",
            info: { type: "Noun", gender: "Masculine", number: "Singular", case: "Nominative", meaning: "Rama" },
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            word: "पुस्तकं",
            info: { type: "Noun", gender: "Neuter", number: "Singular", case: "Accusative", meaning: "Book" },
            color: "text-green-600 dark:text-green-400"
        },
        {
            word: "पठति।",
            info: { type: "Verb", root: "पठ्", person: "Third", number: "Singular", tense: "Present", meaning: "reads" },
            color: "text-red-600 dark:text-red-400"
        },
    ]
}

export const culturalFacts = [
    {
        title: "The Mother of Languages",
        content: "Sanskrit is one of the oldest languages in the world and is considered the mother of many modern Indian languages. It belongs to the Indo-Aryan branch of the Indo-European languages."
    },
    {
        title: "Language of Yoga",
        content: "Many of the foundational texts of yoga, including the Yoga Sutras of Patanjali, were written in Sanskrit. The names of most yoga poses (asanas) are Sanskrit words."
    },
    {
        title: "Sanskrit and Ayurveda",
        content: "Ayurveda, the traditional Indian system of medicine, has its roots in ancient Sanskrit texts like the Charaka Samhita and Sushruta Samhita."
    },
    {
        title: "A Scientific Grammar",
        content: "The grammar of Sanskrit, particularly as codified by the ancient grammarian Pāṇini in his Aṣṭādhyāyī, is considered one of the most systematic and scientific grammars ever developed."
    }
];

export const wordBuilderGame = {
    roots: [
        {
            root: "गम्",
            meaning: "to go",
            syllables: ["ग", "च्छ", "ति", "मि", "सि", "न्ति", "वः", "मः"],
            validWords: ["गच्छति", "गच्छामि", "गच्छसि", "गच्छन्ति", "गच्छावः", "गच्छामः"]
        },
        {
            root: "भू",
            meaning: "to be, to become",
            syllables: ["भ", "व", "ति", "सि", "न्ति", "थः", "मि", "मः"],
            validWords: ["भवति", "भवसि", "भवन्ति", "भवथः", "भवामि", "भवामः"]
        },
        {
            root: "कृ",
            meaning: "to do, to make",
            syllables: ["क", "रो", "ति", "षि", "कु", "र्व", "न्ति", "मि"],
            validWords: ["करोति", "करोषि", "कुर्वन्ति", "करोमि"]
        }
    ]
};
