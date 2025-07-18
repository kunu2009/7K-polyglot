
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
              translation: "Lighter than grass is cotton, and even lighter than cotton is a beggar. Why is he not carried away by the wind? Because the wind fears, 'This fellow might ask something from me!'",
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
            },
            {
                sanskrit: "द्वन्द्वोऽहं द्विगुरप्यहं मद्गेहे नित्यमव्ययीभावः।\nतत्पुरुष कर्मधारय येनाहं स्यां बहुव्रीहिः॥५॥",
                translation: "I am a couple (dvandva), I am also a master of two cows (dvigu), in my house there is always a lack of spending (avyayībhāva). O great man (tatpuruṣa), do your duty (karmadhāraya), so that I may become one with much grain (bahuvrīhi)!",
                explanation: "A brilliant verse where a poor but witty poet uses the names of the six main types of Sanskrit compounds (samāsa) as puns to cleverly ask the king for wealth."
            },
            {
                sanskrit: "चतुरः सखि मे भर्ता यल्लिखति तत्परो न वाचयति।\nतस्मादप्यधिको मे स्वयमपि लिखितं स्वयं न वाचयति॥६॥",
                translation: "First friend: 'My husband is so clever, friend, that whatever he writes, another person cannot read it.' Second friend: 'Mine is even more clever than that; whatever he himself writes, he himself cannot read.'",
                explanation: "A humorous dialogue between two friends, each boasting about their husband's 'cleverness,' which is ironically a complete lack of writing skill."
            },
            {
                sanskrit: "वासः प्रधानं खलु योग्यताया वासोविहीनं विजहाति लक्ष्मीः।\nपीताम्बरं वीक्ष्य ददौ स्वकन्यां दिगम्बरं वीक्ष्य विषं समुद्रः॥७॥",
                translation: "Clothes are indeed more important than qualification. Fortune deserts one who is without clothes. The ocean, seeing the one clad in yellow silk (Pītāmbara, i.e., Vishnu), gave his own daughter (Lakshmi). Seeing the one clad in the sky (Digambara, i.e., Shiva), he gave poison.",
                explanation: "A satirical verse emphasizing the importance of appearance. The ocean gives his precious daughter Lakshmi to the well-dressed Vishnu but gives poison to the unclothed Shiva, judging them solely by their attire."
            }
        ]
      }
    ]
  }
];

export const practiceQuestions = [
  // क्षणं मनोविनोदनम्
  { chapterId: "ksanam-manovinodanam", question: "In the weddings of camels (उष्ट्राणां विवाहेषु), who sings the songs?", options: ["Horses (अश्वाः)", "Elephants (गजाः)", "Donkeys (गर्दभाः)", "Crows (काकाः)"], answer: "Donkeys (गर्दभाः)" },
  { chapterId: "ksanam-manovinodanam", question: "What do the camels and donkeys praise in each other?", options: ["Their strength and speed", "Their beauty and voice", "Their wealth and status", "Their wisdom and knowledge"], answer: "Their beauty and voice" },
  { chapterId: "ksanam-manovinodanam", question: "Who is said to be lighter than cotton (तूलः)?", options: ["A feather (पिच्छः)", "A leaf (पत्रम्)", "A beggar (याचकः)", "A flower (पुष्पम्)"], answer: "A beggar (याचकः)" },
  { chapterId: "ksanam-manovinodanam", question: "Why does the wind not carry away the beggar?", options: ["He is too heavy", "He is holding onto a post", "The wind is afraid the beggar will ask for something", "The wind likes the beggar"], answer: "The wind is afraid the beggar will ask for something" },
  { chapterId: "ksanam-manovinodanam", question: "Who does the speaker sarcastically thank for making them a 'siddha' (invisible)?", options: ["The King (राजा)", "Wealth (धनम्)", "God (देवः)", "Poverty (दारिद्र्यम्)"], answer: "Poverty (दारिद्र्यम्)" },
  { chapterId: "ksanam-manovinodanam", question: "What is the name of the 'maiden' who remains a virgin (कौमारम्)?", options: ["Praise (स्तुति)", "Wisdom (प्रज्ञा)", "Wealth (लक्ष्मी)", "Courage (धृति)"], answer: "Praise (स्तुति)" },
  { chapterId: "ksanam-manovinodanam", question: "In verse 5, which word is used as a pun for 'a couple' and also a type of compound?", options: ["बहुव्रीहिः", "द्विगुः", "द्वन्द्वः", "अव्ययीभावः"], answer: "द्वन्द्वः" },
  { chapterId: "ksanam-manovinodanam", question: "In verse 7, who does the ocean give poison to?", options: ["Vishnu", "Brahma", "Indra", "Shiva"], answer: "Shiva" },
  { chapterId: "ksanam-manovinodanam", question: "What is the reason the ocean gives poison to Shiva?", options: ["Because he was thirsty", "Because he was poorly dressed (Digambara)", "Because he asked for it", "Because the ocean disliked him"], answer: "Because he was poorly dressed (Digambara)" },
];

export const flashcards = [
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
  { id: 20, chapterId: "ksanam-manovinodanam", front: "द्वन्द्वः", back: "A couple / A type of compound" },
  { id: 21, chapterId: "ksanam-manovinodanam", front: "बहुव्रीहिः", back: "Rich in grain / A type of compound" },
  { id: 22, chapterId: "ksanam-manovinodanam", front: "भर्ता", back: "Husband" },
  { id: 23, chapterId: "ksanam-manovinodanam", front: "वाचयति", back: "Reads / causes to be read" },
  { id: 24, chapterId: "ksanam-manovinodanam", front: "वासः", back: "Cloth / Attire" },
  { id: 25, chapterId: "ksanam-manovinodanam", front: "पीताम्बरम्", back: "Yellow silk garment (worn by Vishnu)" },
  { id: 26, chapterId: "ksanam-manovinodanam", front: "दिगम्बरम्", back: "Clothed in the sky / naked (an epithet of Shiva)" },
  { id: 27, chapterId: "ksanam-manovinodanam", front: "वीक्ष्य", back: "Having seen" },
  { id: 28, chapterId: "ksanam-manovinodanam", front: "समुद्रः", back: "Ocean" },
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
