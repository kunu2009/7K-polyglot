export const dailyTasks = [
    {
        title: "Learn 5 New Words",
        description: "Expand your vocabulary.",
        progress: 2,
        goal: 5,
        href: "/vocabulary",
    },
    {
        title: "Take 1 Quiz",
        description: "Test your knowledge.",
        progress: 0,
        goal: 1,
        href: "/practice",
    },
    {
        title: "Practice Pronunciation",
        description: "Master one phrase.",
        progress: 1,
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
];

export const flashcards = [
    { id: 1, front: "नमस्ते", back: "Greetings / Hello" },
    { id: 2, front: "धन्यवादः", back: "Thank you" },
    { id: 3, front: "जलम्", back: "Water" },
    { id: 4, front: "अग्निः", back: "Fire" },
    { id: 5, front: "मित्रम्", back: "Friend" },
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
