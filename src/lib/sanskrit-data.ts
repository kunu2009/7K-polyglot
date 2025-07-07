
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
      { sanskrit: "चन्द्रः", english: "Moon" },
      { sanskrit: "लोकः", english: "World" },
    ],
  },
  {
    category: "Verbs",
    words: [
      { sanskrit: "पठति", english: "Reads", etymology: { root: "पठ्", meaning: "to read, recite" } },
      { sanskrit: "गच्छति", english: "Goes", etymology: { root: "गम्", meaning: "to go" } },
      { sanskrit: "अस्ति", english: "Is", etymology: { root: "अस्", meaning: "to be" } },
      { sanskrit: "करोति", english: "Does", etymology: { root: "कृ", meaning: "to do, make" } },
      { sanskrit: "वदति", english: "Speaks" },
      { sanskrit: "पश्यति", english: "Sees" },
    ],
  },
  {
    category: "Nature",
    words: [
      { sanskrit: "वृक्षः", english: "Tree", etymology: { root: "वृक्ष्", meaning: "to grow" } },
      { sanskrit: "नदी", english: "River" },
      { sanskrit: "पर्वतः", english: "Mountain" },
      { sanskrit: "आकाशः", english: "Sky" },
      { sanskrit: "भूमिः", english: "Earth" },
      { sanskrit: "समुद्रः", english: "Ocean" },
    ],
  },
  {
    category: "Family",
    words: [
      { sanskrit: "माता", english: "Mother" },
      { sanskrit: "पिता", english: "Father" },
      { sanskrit: "भ्राता", english: "Brother" },
      { sanskrit: "भगिनी", english: "Sister" },
      { sanskrit: "पुत्रः", english: "Son" },
      { sanskrit: "पुत्री", english: "Daughter" },
    ],
  },
  {
    category: "Adjectives",
    words: [
      { sanskrit: "सुन्दर", english: "Beautiful" },
      { sanskrit: "महत्", english: "Great / Big" },
      { sanskrit: "लघु", english: "Small" },
      { sanskrit: "नवीन", english: "New" },
      { sanskrit: "पुरातन", english: "Old" },
      { sanskrit: "उत्तम", english: "Best / Excellent" },
    ],
  },
  {
    category: "Animals",
    words: [
      { sanskrit: "सिंहः", english: "Lion" },
      { sanskrit: "अश्वः", english: "Horse" },
      { sanskrit: "वानरः", english: "Monkey" },
      { sanskrit: "सर्पः", english: "Snake" },
      { sanskrit: "धेनुः", english: "Cow" },
      { sanskrit: "खगः", english: "Bird" },
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
    title: "Verbs (Kriyā)",
    content: "Sanskrit verbs (क्रिया) are highly inflected. They are conjugated for person, number, and tense/mood. The root (धातु) is the basic element from which the verb forms are derived.",
  },
  {
    title: "Vowels (Svara)",
    content: "Sanskrit has short, long, and extra-long (pluta) vowels. The primary vowels are अ, इ, उ, ऋ, ऌ and their long counterparts आ, ई, ऊ, ॠ.",
  },
  {
    title: "Consonants (Vyanjana)",
    content: "Consonants are grouped by their point of articulation in the mouth, from the throat (velar) to the lips (labial). Each group has five consonants.",
  },
  {
    title: "Gender (Linga)",
    content: "There are three genders in Sanskrit: masculine (पुंलिङ्ग), feminine (स्त्रीलिङ्ग), and neuter (नपुंसकलिङ्ग). Gender is grammatical and doesn't always align with natural gender.",
  },
  {
    title: "Number (Vachana)",
    content: "Sanskrit is unique for having three numbers: singular (एकवचन), dual (द्विवचन) for two items, and plural (बहुवचन) for more than two items.",
  },
  {
    title: "Nominative Case (Prathamā Vibhakti)",
    content: "The Nominative case is used for the subject of a sentence. Example: 'रामः पठति' (Rama reads), where 'रामः' is in the Nominative case.",
  },
  {
    title: "Accusative Case (Dvitīyā Vibhakti)",
    content: "The Accusative case is used for the direct object of a verb. Example: 'रामः पुस्तकं पठति' (Rama reads a book), where 'पुस्तकं' is in the Accusative case.",
  },
  {
    title: "Instrumental Case (Tṛtīyā Vibhakti)",
    content: "The Instrumental case indicates the means or instrument by which an action is performed. Example: 'सः हस्तेन लिखति' (He writes with a hand).",
  },
  {
    title: "Dative Case (Caturthī Vibhakti)",
    content: "The Dative case is used for the indirect object, indicating 'to' or 'for' someone/something. Example: 'गुरवे नमः' (Salutations to the Guru).",
  },
  {
    title: "Ablative Case (Pañcamī Vibhakti)",
    content: "The Ablative case indicates separation or 'from' a source. Example: 'वृक्षात् पत्रं पतति' (A leaf falls from the tree).",
  },
  {
    title: "Genitive Case (Ṣaṣṭhī Vibhakti)",
    content: "The Genitive case shows possession, similar to 'of' or 's in English. Example: 'रामस्य पुस्तकम्' (Rama's book).",
  },
  {
    title: "Locative Case (Saptamī Vibhakti)",
    content: "The Locative case indicates location, 'in', 'on', or 'at'. Example: 'गृहे बालकः अस्ति' (The boy is in the house).",
  },
  {
    title: "Vocative Case (Saṃbodhana)",
    content: "The Vocative case is used for addressing someone directly. Example: 'हे राम!' (Oh, Rama!).",
  },
  {
    title: "Present Tense (Laṭ Lakāra)",
    content: "The present tense describes actions happening now. Verbs are conjugated based on person and number. Example: पठति (he reads), पठामि (I read).",
  },
  {
    title: "Personal Pronouns",
    content: "Pronouns replace nouns. Key pronouns are अहम् (I), त्वम् (you), सः (he), सा (she), and तत् (it).",
  },
  {
    title: "Sandhi: Vowel Combination",
    content: "Sandhi refers to the euphonic combination of sounds at word boundaries. For example, 'देव + आलयः' becomes 'देवालयः'.",
  },
  {
    title: "Indeclinables (Avyaya)",
    content: "Avyayas are words that do not change their form based on gender, number, or case. Examples include च (and), अपि (also), and अत्र (here).",
  },
  {
    title: "Past Tense (Laṅ Lakāra)",
    content: "The imperfect past tense describes actions that happened in the past. It's often marked by a prefixed 'अ'. Example: अपठत् (he read).",
  },
  {
    title: "Future Tense (Lṛṭ Lakāra)",
    content: "The simple future tense describes actions that will happen. It's often characterized by the 'स्य' or 'ष्य' infix. Example: पठिष्यति (he will read).",
  },
  {
    title: "Adjectives (Viśeṣaṇa)",
    content: "Adjectives must agree with the nouns they describe in gender, number, and case. Example: 'सुन्दरः बालकः' (beautiful boy), 'सुन्दरी बालिका' (beautiful girl).",
  },
  {
    title: "Samāsa: Compounds",
    content: "Sanskrit frequently uses compounds (samāsa), where multiple words are combined into one. Example: 'राजपुत्रः' (king's son) from 'राज्ञः पुत्रः'.",
  },
  {
    title: "Active Voice (Kartari Prayoga)",
    content: "In the active voice, the subject performs the action, and the verb agrees with the subject. Most sentences are in this voice. Example: 'छात्रः पाठं पठति' (The student reads the lesson).",
  },
  {
    title: "Passive Voice (Karmaṇi Prayoga)",
    content: "In the passive voice, the subject is acted upon. The verb agrees with the object. Example: 'छात्रेण पाठः पठ्यते' (The lesson is read by the student).",
  },
  {
    title: "Imperative Mood (Loṭ Lakāra)",
    content: "The imperative mood is used for commands, requests, or blessings. Example: 'गच्छ' (Go!), 'पठतु' (Let him read).",
  },
  {
    title: "Optative Mood (Vidhi Liṅ Lakāra)",
    content: "The optative mood expresses possibilities, recommendations, or duties ('should', 'ought to'). Example: 'पठेत्' (He should read).",
  },
  {
    title: "Numerals 1-10",
    content: "Numbers in Sanskrit: एक (1), द्वि (2), त्रि (3), चतुर् (4), पञ्च (5), षष् (6), सप्त (7), अष्ट (8), नव (9), दश (10). They decline like adjectives.",
  },
  {
    title: "Prefixes (Upasarga)",
    content: "Prefixes are added to verb roots to modify their meaning. For example, 'गच्छति' (goes) becomes 'आगच्छति' (comes) with the prefix 'आ'.",
  },
  {
    title: "Gerunds (Ktvā Pratyaya)",
    content: "The gerund, formed with the suffix '-tvā', indicates a previous action done by the same subject. Example: 'रामः गृहं गत्वा खादति' (Having gone home, Rama eats).",
  },
  {
    title: "Infinitive (Tumun Pratyaya)",
    content: "The infinitive, formed with '-tum', expresses purpose ('to do something'). Example: 'सः पठितुं गच्छति' (He goes to read).",
  },
  {
    title: "Present Participles (Śatṛ/Śānac)",
    content: "Present participles describe an ongoing action, like '-ing' in English. They function as adjectives. Example: 'पठन् बालकः' (the reading boy).",
  },
  {
    title: "Past Passive Participles (Kta Pratyaya)",
    content: "Used very frequently, the '-ta' participle often indicates a completed action in the passive voice. Example: 'कृतम्' (done).",
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
  {
    question: "The verb 'वदति' means:",
    options: ["He sees", "He goes", "He speaks", "He does"],
    answer: "He speaks",
  },
  {
    question: "Which pronoun means 'We'?",
    options: ["वयम्", "यूयम्", "ते", "ताः"],
    answer: "वयम्",
  },
  {
    question: "What is the Sanskrit for 'Horse'?",
    options: ["गजः", "सिंहः", "अश्वः", "वानरः"],
    answer: "अश्वः",
  },
  {
    question: "The word 'भोजनम्' means:",
    options: ["Water", "Fruit", "Meal", "Sleep"],
    answer: "Meal",
  },
  {
    question: "The dual number (द्विवचन) is used for how many items?",
    options: ["One", "Two", "Three", "More than two"],
    answer: "Two",
  },
  {
    question: "In 'रामस्य गृहम्', what does 'रामस्य' mean?",
    options: ["To Rama", "From Rama", "Rama's", "In Rama"],
    answer: "Rama's",
  },
  {
    question: "Which case is used for the subject of a sentence?",
    options: ["Accusative", "Instrumental", "Nominative", "Genitive"],
    answer: "Nominative",
  },
  {
    question: "'अत्र' means:",
    options: ["There", "Here", "Everywhere", "Nowhere"],
    answer: "Here",
  },
  {
    question: "'तत्र' means:",
    options: ["Here", "Now", "There", "When"],
    answer: "There",
  },
  {
    question: "The word 'धन्यवादः' means:",
    options: ["Hello", "Please", "Sorry", "Thank you"],
    answer: "Thank you",
  },
  {
    question: "What is a 'student' in Sanskrit?",
    options: ["गुरुः", "शिष्यः", "बालकः", "नरः"],
    answer: "शिष्यः",
  },
  {
    question: "The word 'सत्यम्' means:",
    options: ["Lie", "Truth", "Illusion", "Dream"],
    answer: "Truth",
  },
  {
    question: "'आनन्दः' translates to:",
    options: ["Sorrow", "Joy", "Fear", "Anger"],
    answer: "Joy",
  },
  {
    question: "Which word means 'new'?",
    options: ["पुरातन", "लघु", "महत्", "नवीन"],
    answer: "नवीन",
  },
  {
    question: "What is 'king' in Sanskrit?",
    options: ["सेवकः", "नृपः", "मित्रम्", "शत्रुः"],
    answer: "नृपः",
  },
  {
    question: "The word 'करोति' comes from which root (धातु)?",
    options: ["गम्", "कृ", "पठ्", "अस्"],
    answer: "कृ",
  },
  {
    question: "Which of these is a body part?",
    options: ["हस्तः", "ग्रामः", "देशः", "नगरम्"],
    answer: "हस्तः",
  },
  {
    question: "What does 'स्वागतम्' mean?",
    options: ["Goodbye", "Welcome", "Thank you", "Excuse me"],
    answer: "Welcome",
  },
  {
    question: "The opposite of 'सत्यम्' (Truth) is:",
    options: ["धर्मः", "असत्यम्", "ज्ञानम्", "सुखम्"],
    answer: "असत्यम्",
  },
  {
    question: "What is the meaning of 'सर्वदा'?",
    options: ["Sometimes", "Never", "Always", "Often"],
    answer: "Always",
  },
  {
    question: "How do you write 'Five' in Sanskrit?",
    options: ["पञ्च", "षष्", "सप्त", "अष्ट"],
    answer: "पञ्च",
  },
  {
    question: "The verb 'पिबति' means:",
    options: ["He eats", "He sleeps", "He drinks", "He runs"],
    answer: "He drinks",
  },
  {
    question: "Which term refers to 'Euphonic Combination' of sounds?",
    options: ["Samāsa", "Vibhakti", "Sandhi", "Lakāra"],
    answer: "Sandhi",
  },
  {
    question: "What is the meaning of 'इदानीम्'?",
    options: ["Then", "Now", "Later", "Before"],
    answer: "Now",
  },
  {
    question: "The word 'वायुः' means:",
    options: ["Earth", "Water", "Fire", "Air"],
    answer: "Air",
  },
  {
    question: "Which of the following means 'and'?",
    options: ["अपि", "च", "एव", "इति"],
    answer: "च",
  },
  {
    question: "What is 'mind' in Sanskrit?",
    options: ["शरीरम्", "आत्मा", "मनः", "बुद्धिः"],
    answer: "मनः",
  },
  {
    question: "'कविः' is a:",
    options: ["Singer", "Dancer", "Poet", "Actor"],
    answer: "Poet",
  },
  {
    question: "Which word means 'night'?",
    options: ["दिनम्", "सायम्", "रात्रिः", "प्रातः"],
    answer: "रात्रिः",
  },
  {
    question: "The word 'दुःखम्' means:",
    options: ["Happiness", "Sorrow", "Peace", "Love"],
    answer: "Sorrow",
  },
  {
    question: "'शुभम्' means:",
    options: ["Bad", "Auspicious", "Ugly", "Difficult"],
    answer: "Auspicious",
  },
  {
    question: "What is a 'rāja-putra' (राजपुत्रः)?",
    options: ["King's minister", "King's son", "King's enemy", "King's friend"],
    answer: "King's son",
  },
  {
    question: "The command 'pāṭhaya' (पाठय) means:",
    options: ["Read!", "Write!", "Teach!", "Go!"],
    answer: "Teach!",
  },
  {
    question: "Which word is a color?",
    options: ["मधुर", "अम्ल", "नील", "लवण"],
    answer: "नील",
  },
  {
    question: "What does 'सह' mean when used with the instrumental case?",
    options: ["Without", "For", "With/Together", "From"],
    answer: "With/Together",
  },
  {
    question: "The word 'विना' means:",
    options: ["With", "Inside", "Without", "Upon"],
    answer: "Without",
  },
  {
    question: "Which number is 'aṣṭa' (अष्ट)?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "What is the meaning of 'सहज'?",
    options: ["Difficult", "Complicated", "Easy/Natural", "Artificial"],
    answer: "Easy/Natural",
  },
  {
    question: "The word 'मम' is which form of 'I'?",
    options: ["Nominative (I)", "Accusative (me)", "Genitive (my/mine)", "Instrumental (by me)"],
    answer: "Genitive (my/mine)",
  },
  {
    question: "'Pustakāni' (पुस्तकानि) is the plural of 'pustakam' (पुस्तकम्). What does it mean?",
    options: ["A big book", "Two books", "Books", "The book's"],
    answer: "Books",
  },
  {
    question: "The prefix 'ā-' added to 'gacchati' (गच्छति - he goes) makes 'āgacchati' (आगच्छति). What does it mean?",
    options: ["He goes away", "He goes quickly", "He comes", "He goes slowly"],
    answer: "He comes",
  },
  {
    question: "What is the meaning of 'मार्गः'?",
    options: ["House", "Village", "Path/Road", "Forest"],
    answer: "Path/Road",
  },
  {
    question: "The word 'देवः' refers to:",
    options: ["A demon", "A human", "An animal", "A god/deity"],
    answer: "A god/deity",
  },
  {
    question: "What does 'चिन्ता' mean?",
    options: ["Joy", "Worry", "Peace", "Courage"],
    answer: "Worry",
  },
  {
    question: "The verb 'jīvati' (जीवति) means:",
    options: ["He dies", "He lives", "He sleeps", "He wakes"],
    answer: "He lives",
  },
  {
    question: "What is the meaning of 'इच्छा'?",
    options: ["Hate", "Desire/Wish", "Fear", "Duty"],
    answer: "Desire/Wish",
  },
  {
    question: "The term 'śabda' (शब्दः) means:",
    options: ["Meaning", "Silence", "Sentence", "Word/Sound"],
    answer: "Word/Sound",
  },
  {
    question: "'Bālaḥ hasati' (बालः हसति). What is the action?",
    options: ["The boy cries", "The boy eats", "The boy laughs", "The boy runs"],
    answer: "The boy laughs",
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
    { id: 51, front: "शिष्यः", back: "Student" },
    { id: 52, front: "ज्ञानम्", back: "Knowledge" },
    { id: 53, front: "पुस्तकम्", back: "Book" },
    { id: 54, front: "लेखनी", back: "Pen" },
    { id: 55, front: "भोजनम्", back: "Meal / Food" },
    { id: 56, front: "आपणः", back: "Shop / Market" },
    { id: 57, front: "धनम्", back: "Wealth / Money" },
    { id: 58, front: "ग्रामः", back: "Village" },
    { id: 59, front: "नगरम्", back: "City" },
    { id: 60, front: "देशः", back: "Country" },
    { id: 61, front: "लोकः", back: "World / People" },
    { id: 62, front: "सूर्यः", back: "Sun" },
    { id: 63, front: "चन्द्रः", back: "Moon" },
    { id: 64, front: "नक्षत्रम्", back: "Star" },
    { id: 65, front: "आकाशः", back: "Sky / Ether" },
    { id: 66, front: "भूमिः", back: "Earth / Ground" },
    { id: 67, front: "पर्वतः", back: "Mountain" },
    { id: 68, front: "नदी", back: "River" },
    { id: 69, front: "समुद्रः", back: "Ocean / Sea" },
    { id: 70, front: "वृक्षः", back: "Tree" },
    { id: 71, front: "लता", back: "Creeper / Vine" },
    { id: 72, front: "सिंहः", back: "Lion" },
    { id: 73, front: "अश्वः", back: "Horse" },
    { id: 74, front: "वानरः", back: "Monkey" },
    { id: 75, front: "सर्पः", back: "Snake" },
    { id: 76, front: "खगः", back: "Bird" },
    { id: 77, front: "हस्तः", back: "Hand" },
    { id: 78, front: "पादः", back: "Foot" },
    { id: 79, front: "नेत्रम्", back: "Eye" },
    { id: 80, front: "मुखम्", back: "Face / Mouth" },
    { id: 81, front: "सत्यम्", back: "Truth" },
    { id: 82, front: "असत्यम्", back: "Falsehood" },
    { id: 83, front: "सुखम्", back: "Happiness" },
    { id: 84, front: "दुःखम्", back: "Sorrow" },
    { id: 85, front: "क्रोधः", back: "Anger" },
    { id: 86, front: "भयम्", back: "Fear" },
    { id: 87, front: "इच्छा", back: "Wish / Desire" },
    { id: 88, front: "मार्गः", back: "Path / Road" },
    { id: 89, front: "यानम्", back: "Vehicle" },
    { id: 90, front: "कार्यम्", back: "Work / Task" },
    { id: 91, front: "समयः", back: "Time" },
    { id: 92, front: "शब्दः", back: "Word / Sound" },
    { id: 93, front: "अर्थः", back: "Meaning / Purpose" },
    { id: 94, front: "देवः", back: "God / Deity" },
    { id: 95, front: "मनः", back: "Mind" },
    { id: 96, front: "बुद्धिः", back: "Intellect" },
    { id: 97, front: "आत्मा", back: "Soul / Self" },
    { id: 98, front: "शरीरम्", back: "Body" },
    { id: 99, front: "रक्तम्", back: "Blood" },
    { id: 100, front: "हृदयम्", back: "Heart" },
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
