
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
        ],
      },
      {
        id: "vyavaharik-shabdasangrah",
        title: "व्यावहारिकशब्दसंग्रहः",
        title_en: "Practical Vocabulary",
        description: "A collection of frequently used words categorized by context.",
        items: [
            { sanskrit: "परिवारः (Family): माता, पिता, भ्राता, भगिनी" },
            { sanskrit: "शरीराङ्गाणि (Body Parts): शिरः, हस्तः, पादः, नेत्रम्" },
            { sanskrit: "वस्तूनि (Objects): पुस्तकम्, लेखनी, गृहम्, आसनम्" },
            { sanskrit: "क्रियाः (Actions): पठति, लिखति, गच्छति, खादति" },
        ]
      }
    ]
  },
  {
    title: "द्वितीयमण्डलम्",
    title_en: "Section 2: Poetry Section",
    content: [
      {
        id: "ksanam-manovinodanam",
        title: "क्षणं मनोविनोदनम्",
        title_en: "A Moment of Entertainment",
        description: "Humorous verses (Subhāṣitas) that entertain through satire and wordplay.",
        details: "भूमिका: सुभाषितं नाम सुष्ठु भाषितम्। परं न केवलं सुष्ठु भाषितम् अपि तु विनोदनमपि सुभाषितेषु विद्यते। विनोदनं नाम मनोरञ्जनम्। प्राचीने वाङ्मये विकीर्णानि विनोदनप्रधानानि सुभाषितानि अत्र सङ्गृहीतानि। एतानि सुभाषितानि विभिन्नप्रकारैः हास्यं जनयन्ति। कुत्रचित् परिहासः, कुत्रचित् उपहासः। श्लेषस्य तथा सूचितार्थस्य योजनापि क्रियते। (Introduction: A 'Subhāṣita' means a well-spoken verse. But Subhāṣitas not only contain good sayings but also entertainment. Entertainment means amusement. In ancient literature, scattered verses with a focus on entertainment have been collected here. These Subhāṣitas generate laughter in various ways. Sometimes there is jest, sometimes satire. The use of puns and implied meanings is also done.)",
        items: [
            { 
              sanskrit: "उष्ट्राणां च विवाहेषु गीतं गायन्ति गर्दभाः।\nपरस्परं प्रशंसन्ति “अहो रूपम्!” “अहो ध्वनिः!”॥१॥", 
              translation: "In the weddings of camels, donkeys sing songs. They praise each other, “Oh, what a beautiful form!” “Oh, what a beautiful voice!”",
              explanation: "This is a satirical verse highlighting how mediocre individuals praise each other's equally mediocre talents in their own circles, oblivious to their actual quality."
            },
            {
              sanskrit: "तृणाल्लघुतरस्तूलस्तूलादपि च याचकः।\nवायुना किं न नीतोऽसौ मामयं प्रार्थयेदिति॥२॥",
              translation: "Lighter than grass is cotton, and even lighter than cotton is a beggar. Why is he not carried away by the wind? Because he thinks, 'This fellow might ask something from me!'",
              explanation: "A humorous take on the extreme lightness and perceived worthlessness of a beggar, suggesting even the wind avoids him for fear of being asked for something."
            },
            {
              sanskrit: "भो दारिद्र्य नमस्तुभ्यं सिद्धोऽहं त्वत्प्रसादतः।\nपश्याम्यहं जगत्सर्वं न मां पश्यति कश्चन॥३॥",
              translation: "Oh Poverty, salutations to you! By your grace, I have become a 'siddha' (an accomplished one). I see the whole world, but no one sees me.",
              explanation: "This verse uses a pun on the word 'siddha', which means both a perfected being and an invisible one. The speaker sarcastically 'thanks' poverty for making him so insignificant that he has become invisible to everyone."
            },
            {
              sanskrit: "अद्यापि दुर्निवारं स्तुतिकन्या वहति कौमारम्।\nसद्भ्यो न रोचते साऽसन्तोऽप्यस्यै न रोचन्ते॥४॥",
              translation: "To this day, the maiden named 'Flattery' (Stuti-kanyā), who is hard to stop, remains a virgin. She is not liked by the good people, and the wicked people are not liked by her.",
              explanation: "This is a clever personification of flattery. It says that good/wise people dislike being flattered, and flattery itself (being a 'noble' maiden in this analogy) doesn't like the wicked. Thus, it remains 'unmarried' or unused in ideal situations."
            }
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
        description: "A dialogue about rituals in the holy month of Shravan."
      },
      {
        id: "pracinakale-prathamam",
        title: "प्राचीनकाले प्रथमम्",
        title_en: "Leadership in Ancient Times",
        description: "Insights into governance in ancient India."
      },
      {
        id: "rajakartavyani",
        title: "प्रजापालायार्थं राजकर्तव्यानि",
        title_en: "Royal Duties for People’s Welfare",
        description: "Describes a king’s duties toward his citizens."
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
        description: "Overview of traditional sciences like Ayurveda, Yoga, and grammar."
      },
      {
        id: "natyavisesah",
        title: "नाट्यविशेषः",
        title_en: "Special Aspects of Drama",
        description: "Introduces Sanskrit drama theory, characters, and aesthetics (rasa)."
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
            description: "A dramatic scene from Bhāsa's 'Madhyamavyāyoga'."
        },
        {
            id: "duryodhanasya-manasthiti",
            title: "दुर्योधनस्य मनःस्थिति",
            title_en: "Duryodhana’s Mindset",
            description: "Shows the psychological conflict of Duryodhana."
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
        description: "Guidelines and examples for composing essays in Sanskrit."
      },
      {
        id: "vrttalekhanam",
        title: "वृत्तालेखनम्",
        title_en: "Report Writing",
        description: "How to write reports on events in Sanskrit."
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
  // व्यावहारिक-सूचना
  { chapterId: "vyavaharik-suchana", question: "How do you say 'Thank you' in Sanskrit?", options: ["कृपया", "स्वागतम्", "धन्यवादः", "अस्तु"], answer: "धन्यवादः" },
  { chapterId: "vyavaharik-suchana", question: "What does 'कृपया उपविशतु' mean?", options: ["Please come here", "Please sit down", "Please go there", "Please read"], answer: "Please sit down" },
  
  // व्यावहारिकशब्दसंग्रहः
  { chapterId: "vyavaharik-shabdasangrah", question: "The word 'भ्राता' refers to whom?", options: ["Father", "Son", "Brother", "Friend"], answer: "Brother" },
  { chapterId: "vyavaharik-shabdasangrah", question: "Which word means 'to read'?", options: ["लिखति", "पठति", "गच्छति", "खादति"], answer: "पठति" },

  // क्षणं मनोविनोदनम्
  { chapterId: "ksanam-manovinodanam", question: "In the weddings of camels (उष्ट्राणां विवाहेषु), who sings the songs?", options: ["Horses (अश्वाः)", "Elephants (गजाः)", "Donkeys (गर्दभाः)", "Crows (काकाः)"], answer: "Donkeys (गर्दभाः)" },
  { chapterId: "ksanam-manovinodanam", question: "What do the camels and donkeys praise in each other?", options: ["Their strength and speed", "Their beauty and voice", "Their wealth and status", "Their wisdom and knowledge"], answer: "Their beauty and voice" },
  { chapterId: "ksanam-manovinodanam", question: "Who is said to be lighter than cotton (तूलः)?", options: ["A feather (पिच्छः)", "A leaf (पत्रम्)", "A beggar (याचकः)", "A flower (पुष्पम्)"], answer: "A beggar (याचकः)" },
  { chapterId: "ksanam-manovinodanam", question: "Who does the speaker sarcastically thank for making them a 'siddha' (invisible)?", options: ["The King (राजा)", "Wealth (धनम्)", "God (देवः)", "Poverty (दारिद्र्यम्)"], answer: "Poverty (दारिद्र्यम्)" },
  { chapterId: "ksanam-manovinodanam", question: "What is the name of the 'maiden' who remains a virgin (कौमारम्)?", options: ["Praise (स्तुति)", "Wisdom (प्रज्ञा)", "Wealth (लक्ष्मी)", "Courage (धृति)"], answer: "Praise (स्तुति)" },

  // Other Sections (placeholders)
  { chapterId: "yace-vinayakam-mudam", question: "The verse 'वक्रतुण्ड महाकाय' is a prayer to which deity?", options: ["Shiva", "Vishnu", "Ganesha", "Brahma"], answer: "Ganesha" },
  { chapterId: "rajakartavyani", question: "What is the primary duty of a king mentioned as 'प्रजापालनम्'?", options: ["Conquering lands", "Building palaces", "Protecting citizens", "Performing rituals"], answer: "Protecting citizens" },
  { chapterId: "natyavisesah", question: "The aesthetic sentiment or emotion evoked in the audience of a Sanskrit drama is called:", options: ["Nandi", "Rasa", "Nayaka", "Vidushaka"], answer: "Rasa" },
  { chapterId: "samasa", question: "The grammatical concept of 'Samāsa' refers to:", options: ["Verb conjugation", "Compound words", "Sentence structure", "Pronouns"], answer: "Compound words" },
];

export const flashcards = [
  // व्यावहारिक-सूचना
  { id: 1, chapterId: "vyavaharik-suchana", front: "सुप्रभातम्", back: "Good morning" },
  { id: 2, chapterId: "vyavaharik-suchana", front: "कथम् अस्ति?", back: "How are you?" },

  // व्यावहारिकशब्दसंग्रहः
  { id: 3, chapterId: "vyavaharik-shabdasangrah", front: "भगिनी", back: "Sister" },
  { id: 4, chapterId: "vyavaharik-shabdasangrah", front: "गृहम्", back: "House" },

  // क्षणं मनोविनोदनम्
  { id: 5, chapterId: "ksanam-manovinodanam", front: "उष्ट्रः", back: "Camel" },
  { id: 6, chapterId: "ksanam-manovinodanam", front: "गर्दभः", back: "Donkey" },
  { id: 7, chapterId: "ksanam-manovinodanam", front: "विवाहः", back: "Wedding" },
  { id: 8, chapterId: "ksanam-manovinodanam", front: "प्रशंसन्ति", back: "They praise" },
  { id: 9, chapterId: "ksanam-manovinodanam", front: "ध्वनिः", back: "Voice / Sound" },
  { id: 10, chapterId: "ksanam-manovinodanam", front: "रूपम्", back: "Form / Beauty" },
  { id: 11, chapterId: "ksanam-manovinodanam", front: "याचकः", back: "Beggar" },
  { id: 12, chapterId: "ksanam-manovinodanam", front: "लघुतरः", back: "Lighter" },
  { id: 13, chapterId: "ksanam-manovinodanam", front: "दारिद्र्यम्", back: "Poverty" },
  { id: 14, chapterId: "ksanam-manovinodanam", front: "त्वत्प्रसादतः", back: "By your grace" },
  { id: 15, chapterId: "ksanam-manovinodanam", front: "पश्यामि", back: "I see" },
  { id: 16, chapterId: "ksanam-manovinodanam", front: "कश्चन", back: "Anyone / Someone" },
  { id: 17, chapterId: "ksanam-manovinodanam", front: "स्तुतिकन्या", back: "Maiden of flattery" },
  { id: 18, chapterId: "ksanam-manovinodanam", front: "कौमारम्", back: "Virginity / Maidenhood" },
  { id: 19, chapterId: "ksanam-manovinodanam", front: "रोचते", back: "Likes / Is pleasing to" },

  // Other sections (placeholders)
  { id: 20, chapterId: "yace-vinayakam-mudam", front: "निर्विघ्नम्", back: "Without obstacles" },
  { id: 21, chapterId: "rajakartavyani", front: "प्रजा", back: "Citizens / Subjects" },
  { id: 22, chapterId: "natyavisesah", front: "रसः", back: "Aesthetic sentiment in drama" },
  { id: 23, chapterId: "samasa", front: "समासः", back: "Compound Word" },
];

export const culturalFacts = [
    { title: "Origins of Sanskrit", content: "Sanskrit is one of the oldest Indo-European languages and is the root of many modern Indian languages. It's known as 'Devavani' (language of the gods)." },
    { title: "The Two Great Epics", content: "The Rāmāyaṇa and the Mahābhārata are two of India's most famous epics, written in Sanskrit. They contain timeless stories of dharma, morality, and human struggle." },
    { title: "Sanskrit in Yoga", content: "Most Yoga postures (asanas) and philosophical concepts have Sanskrit names. For example, 'asana' means 'seat' or 'posture', and 'namaste' means 'I bow to you'." },
    { title: "Ayurveda's Language", content: "The foundational texts of Ayurveda, the traditional Indian system of medicine, like the Charaka Samhita and Sushruta Samhita, were composed in Sanskrit." },
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

    