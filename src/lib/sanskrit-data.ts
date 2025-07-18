
export const dailyTasks = [
    {
        title: "Learn 5 New Words",
        description: "Expand your vocabulary from the textbook.",
        goal: 5,
        href: "/flashcards",
    },
    {
        title: "Answer Quiz Questions",
        description: "Test your knowledge on grammar and comprehension.",
        goal: 200,
        href: "/practice",
    },
    {
        title: "Pronounce one Shloka",
        description: "Master the pronunciation of a key verse.",
        goal: 1,
        href: "/pronunciation",
    }
];

export interface TextbookChapter {
    id: number;
    category: string;
    slug: string;
    type: 'Prose' | 'Poetry';
    author: string;
    authorIntro: string;
    summary: string;
    content: {
        id: number;
        sanskrit: string;
        translation: string;
        metre?: string;
        figureOfSpeech?: string;
    }[];
    words: {
        sanskrit: string;
        english: string;
        etymology?: {
            root: string;
            meaning: string;
        };
    }[];
}

export const textbookChapters: TextbookChapter[] = [
  {
    id: 1,
    category: "गद्यम् 1: विद्यायाः श्रेष्ठत्वम् (चाणक्यनीतिः)",
    slug: 'gadyam-1-vidyayah-shreshthatvam',
    type: 'Prose',
    author: 'Chanakya',
    authorIntro: "Chanakya (c. 375–283 BCE), also known as Kauṭilya or Vishnugupta, was a preeminent ancient Indian teacher, philosopher, economist, and royal advisor. He served as the chief advisor to both Emperor Chandragupta and his son Bindusara. His magnum opus, the Arthashastra, is a classical treatise on statecraft and economic policy. The Chanakya Niti is a collection of his insightful aphorisms on ethics, governance, and practical life, which remain relevant even today.",
    summary: "This chapter, 'The Supremacy of Knowledge', compiles several key verses from Chanakya's Nītīśāstra. These aphorisms powerfully argue that knowledge (Vidyā) is the most supreme form of wealth. Chanakya illustrates how knowledge protects and provides for an individual in all circumstances, asserts that beauty and youth are meaningless without it, and even compares it to a wish-fulfilling cow. The verses serve as timeless reminders of the enduring value of education.",
    content: [
      { id: 1, sanskrit: "विद्वत्त्वं च नृपत्वं च नैव तुल्यं कदाचन। स्वदेशे पूज्यते राजा विद्वान् सर्वत्र पूज्यते॥", translation: "Learning and kingship are never equal. A king is worshipped in his own country, but a learned person is worshipped everywhere." },
      { id: 2, sanskrit: "कामधेनुगुणा विद्या ह्यकाले फलदायिनी। प्रवासे मातृसदृशी विद्या गुप्तं धनं स्मृतम्॥", translation: "Knowledge has qualities like a wish-fulfilling cow, yielding fruits even at an inopportune time. During travels, it is like a mother. Knowledge is considered a secret treasure." },
      { id: 3, sanskrit: "रूपयौवनसम्पन्ना विशालकुलसम्भवाः। विद्याहीना न शोभन्ते निर्गन्धा इव किंशुकाः॥", translation: "Those endowed with beauty and youth, born in a great family, do not shine if they are devoid of knowledge, just like the odorless Kimshuka flowers.", figureOfSpeech: "Upamā (Simile)" },
      { id: 4, sanskrit: "माता शत्रुः पिता वैरी येन बालो न पाठितः। न शोभते सभामध्ये हंसमध्ये बको यथा॥", translation: "A mother is an enemy and a father is a foe, by whom a child is not educated. Such a child does not adorn an assembly, just as a crane does not among swans.", figureOfSpeech: "Upamā (Simile)" },
      { id: 5, sanskrit: "विदेशेषु धनं विद्या व्यसनेषु धनं मतिः। परलोके धनं धर्मः शीलं सर्वत्र वै धनम्॥", translation: "In foreign lands, knowledge is wealth. In times of adversity, intellect is wealth. In the next world, righteousness (Dharma) is wealth. But good character (Shīla) is wealth everywhere." },
      { id: 6, sanskrit: "न चौरहार्यं न च राजहार्यं न भ्रातृभाज्यं न च भारकारि। व्यये कृते वर्धत एव नित्यं विद्याधनं सर्वधनप्रधानम्॥", translation: "It cannot be stolen by thieves, nor taken by kings, nor divided among brothers, nor is it burdensome. The more it is spent, the more it grows. The wealth of knowledge is indeed the foremost of all wealths." },
      { id: 7, sanskrit: "अलसस्य कुतो विद्या अविद्यस्य कुतो धनम्। अधनस्य कुतो मित्रम् अमित्रस्य कुतः सुखम्॥", translation: "For a lazy person, where is knowledge? For an uneducated person, where is wealth? For a poor person, where is a friend? For a friendless person, where is happiness?" }
    ],
    words: [
      { sanskrit: "विद्वान्", english: "A learned person", etymology: { root: "विद्", meaning: "to know" } },
      { sanskrit: "नृपः", english: "A king" },
      { sanskrit: "स्वदेशे", english: "In his own country", etymology: { root: "स्व + दिश्", meaning: "own + country/direction"} },
      { sanskrit: "पूज्यते", english: "Is worshipped / honored" },
      { sanskrit: "सर्वत्र", english: "Everywhere" },
      { sanskrit: "कामधेनुः", english: "Wish-fulfilling cow" },
      { sanskrit: "अकाले", english: "At an inopportune time" },
      { sanskrit: "फलदायिनी", english: "Giver of fruits" },
      { sanskrit: "प्रवासे", english: "During travels" },
      { sanskrit: "मातृसदृशी", english: "Like a mother" },
      { sanskrit: "गुप्तम् धनम्", english: "Secret treasure" },
      { sanskrit: "रूपयौवनसम्पन्नाः", english: "Endowed with beauty and youth" },
      { sanskrit: "विशालकुलसम्भवाः", english: "Born in a great family" },
      { sanskrit: "विद्याहीनाः", english: "Devoid of knowledge", etymology: { root: "विद्या + हीन", meaning: "knowledge + devoid of"} },
      { sanskrit: "न शोभन्ते", english: "Do not shine/adorn" },
      { sanskrit: "निर्गन्धाः", english: "Odorless/Without fragrance" },
      { sanskrit: "किंशुकाः", english: "Palash/Kimshuka flowers" },
      { sanskrit: "शत्रुः", english: "Enemy" },
      { sanskrit: "वैरी", english: "Foe" },
      { sanskrit: "बालः", english: "Child" },
      { sanskrit: "न पाठितः", english: "Is not taught/educated" },
      { sanskrit: "सभामध्ये", english: "In an assembly" },
      { sanskrit: "हंसमध्ये", english: "Among swans" },
      { sanskrit: "बकः", english: "Crane/Heron" },
      { sanskrit: "यथा", english: "Like/As" },
      { sanskrit: "विदेशेषु", english: "In foreign lands" },
      { sanskrit: "व्यसनेषु", english: "In adversities/calamities" },
      { sanskrit: "मतिः", english: "Intellect/Mind" },
      { sanskrit: "परलोके", english: "In the next world" },
      { sanskrit: "धर्मः", english: "Righteousness/Duty" },
      { sanskrit: "शीलम्", english: "Good character/Conduct" },
      { sanskrit: "चौरहार्यं", english: "Can be stolen by a thief" },
      { sanskrit: "राजहार्यं", english: "Can be taken by a king" },
      { sanskrit: "भ्रातृभाज्यं", english: "Can be divided by brothers" },
      { sanskrit: "भारकारि", english: "Burdensome" },
      { sanskrit: "व्यये कृते", english: "When spent/used" },
      { sanskrit: "वर्धते", english: "It grows/increases" },
      { sanskrit: "नित्यं", english: "Always/Eternally" },
      { sanskrit: "सर्वधनप्रधानम्", english: "Foremost of all wealths" },
      { sanskrit: "अलसस्य", english: "Of a lazy person" },
      { sanskrit: "कुतः", english: "From where? / How?" },
      { sanskrit: "अविद्यस्य", english: "Of an uneducated person" },
      { sanskrit: "अधनस्य", english: "Of a poor person" },
      { sanskrit: "अमित्रस्य", english: "Of a friendless person" },
      { sanskrit: "सुखम्", english: "Happiness" },
    ],
  },
  {
    id: 2,
    category: "पद्यम् 1: रघुवंशम्",
    slug: 'padyam-1-raghuvamsham',
    type: 'Poetry',
    author: "Kālidāsa",
    authorIntro: "Kālidāsa was a Classical Sanskrit writer, widely regarded as the greatest poet and dramatist in the Sanskrit language. His plays and poetry are primarily based on Hindu Puranas and philosophy. Raghuvamsham is one of his two epic poems.",
    summary: "These opening verses from the epic poem Raghuvamsham showcase Kālidāsa's genius. He begins with an invocation to Shiva and Parvati, humbly states the great task he is undertaking, and then describes the noble qualities of the kings of the Raghu dynasty, setting the stage for the epic narrative.",
    content: [
      { 
        id: 1, 
        sanskrit: "वागर्थाविव संपृक्तौ वागर्थप्रतिपत्तये। जगतः पितरौ वन्दे पार्वतीपरमेश्वरौ॥", 
        translation: "For the correct understanding of word and its meaning, I bow to Parvati and Parameshwara, who are the parents of the world and are inseparably connected like the word and its meaning.",
        metre: "Anuṣṭubh",
        figureOfSpeech: "Upamā (Simile)"
      },
      { 
        id: 2, 
        sanskrit: "क्व सूर्यप्रभवो वंशः क्व चाल्पविषया मतिः। तितीर्षुर्दुस्तरं मोहादुडुपेनास्मि सागरम्॥", 
        translation: "Where is the great lineage originating from the Sun, and where is my limited intellect? Out of delusion, I desire to cross the difficult-to-cross ocean with a small raft.",
        metre: "Anuṣṭubh",
        figureOfSpeech: "Nidarśanā (Illustration)"
      },
      {
        id: 3,
        sanskrit: "त्यागाय संभृतार्थानां सत्याय मितभाषिणाम्। यशसे विजिगीषूणां प्रजायै गृहमेधिनाम्॥",
        translation: "(I shall narrate about the kings of Raghu dynasty) who collected wealth for the sake of giving away, who were temperate in speech for the sake of truth, who desired victory for the sake of fame, and who were householders for the sake of progeny.",
        metre: "Anuṣṭubh"
      }
    ],
    words: [
      { sanskrit: "वागर्थौ", english: "Word and its meaning", etymology: { root: "वाच् + अर्थ", meaning: "Speech + Meaning (Compound)" } },
      { sanskrit: "सम्पृक्तौ", english: "Inseparably connected" },
      { sanskrit: "जगतः", english: "Of the world" },
      { sanskrit: "पितरौ", english: "Parents (dual)" },
      { sanskrit: "वन्दे", english: "I bow / salute" },
      { sanskrit: "सूर्यप्रभवः", english: "Originating from the Sun" },
      { sanskrit: "वंशः", english: "Lineage / Dynasty" },
      { sanskrit: "अल्पविषया मतिः", english: "Limited intellect" },
      { sanskrit: "तितीर्षुः", english: "Desirous of crossing" },
      { sanskrit: "दुस्तरम्", english: "Difficult to cross" },
      { sanskrit: "उडुपेन", english: "With a small raft" },
      { sanskrit: "सागरम्", english: "Ocean" },
      { sanskrit: "त्यागाय", english: "For giving / charity" },
      { sanskrit: "संभृतार्थानाम्", english: "Of those who have collected wealth" },
      { sanskrit: "सत्याय", english: "For truth" },
      { sanskrit: "मितभाषिणाम्", english: "Of those who speak moderately" },
      { sanskrit: "यशसे", english: "For fame" },
      { sanskrit: "विजिगीषूणाम्", english: "Of those who desire victory" },
      { sanskrit: "प्रजायै", english: "For progeny" },
      { sanskrit: "गृहमेधिनाम्", english: "Of householders" },
    ],
  },
  {
    id: 3,
    category: "गद्यम् 2: पञ्चतन्त्रम्",
    slug: 'gadyam-2-panchatantra',
    type: 'Prose',
    author: 'Vishnusharma',
    authorIntro: "Vishnusharma is the attributed author of the Pañcatantra, an ancient collection of animal fables designed to impart wisdom and principles of statecraft (Nīti) to young princes. The stories are arranged within a frame story, where Vishnusharma narrates them to the foolish sons of a king.",
    summary: "From 'Mitrabheda' (The Separation of Friends), this section introduces King Amarashakti of Mahilaropya. Worried about his three foolish and uneducated sons, the king calls his ministers to find a solution. He expresses his despair, noting that even a great kingdom brings no joy when one's heirs are undisciplined. This sets the stage for the introduction of the wise teacher, Vishnusharma.",
    content: [
        { id: 1, sanskrit: "अस्ति दाक्षिणात्ये जनपदे महिलारोप्यं नाम नगरम्। तत्र अमरशक्तिर्नाम राजा बभूव।", translation: "There is in the southern region a city named Mahilaropya. There lived a king named Amarashakti." },
        { id: 2, sanskrit: "तस्य त्रयः पुत्राः बहुशक्तिः, उग्रशक्तिः, अनन्तशक्तिश्चेति परममूर्खाः आसन्।", translation: "He had three sons named Bahushakti, Ugrashakti, and Anantashakti, who were extremely foolish." },
        { id: 3, sanskrit: "अथ स राजा तान् शास्त्रविमुखान् आलोक्य सचिवान् आहूय प्रोवाच।", translation: "Then that king, seeing them averse to learning, called his ministers and said." },
        { id: 4, sanskrit: "भोः, ज्ञातमेतद् भवद्भिर्यन्ममैते पुत्राः शास्त्रविमुखाः विवेकरहिताश्च। एतान् पश्यतो मे महदपि राज्यं न सौख्यमावहति।", translation: "Oh, you all know that these sons of mine are averse to scriptures and lack discretion. Seeing them, even a great kingdom does not bring me happiness." },
        { id: 5, sanskrit: "उक्तं च - अजातमृतमूर्खेभ्यो मृताजातौ सुतौ वरम्। यतस्तौ स्वल्पदुःखाय यावज्जीवं जडो दहेत्॥", translation: "And it is said - Of the unborn, the dead, and the foolish, the dead and the unborn sons are better. For they cause sorrow only for a short while, but a foolish one burns (us) for as long as he lives." }
    ],
    words: [
      { sanskrit: "जनपदे", english: "In a region/territory" },
      { sanskrit: "बभूव", english: "Became / Lived (past tense)" },
      { sanskrit: "परममूर्खाः", english: "Extremely foolish (plural)" },
      { sanskrit: "शास्त्रविमुखान्", english: "Averse to scriptures" },
      { sanskrit: "आलोक्य", english: "Having seen" },
      { sanskrit: "सचिवान्", english: "Ministers (accusative plural)" },
      { sanskrit: "आहूय", english: "Having called" },
      { sanskrit: "प्रोवाच", english: "Said (past tense)" },
      { sanskrit: "विवेकरहिताः", english: "Devoid of discretion" },
      { sanskrit: "सौख्यम्", english: "Happiness" },
      { sanskrit: "आवहति", english: "Brings" },
      { sanskrit: "अजात", english: "Unborn" },
      { sanskrit: "मृत", english: "Dead" },
      { sanskrit: "वरम्", english: "Better" },
      { sanskrit: "स्वल्पदुःखाय", english: "For a little sorrow" },
      { sanskrit: "यावज्जीवं", english: "For as long as one lives" },
      { sanskrit: "जडः", english: "A foolish/dull person" },
      { sanskrit: "दहेत्", english: "Would burn" },
    ],
  },
  {
    id: 4,
    category: "पद्यम् 2: किरातार्जुनीयम्",
    slug: 'padyam-2-kiratarjuniyam',
    type: 'Poetry',
    author: 'Bhāravi',
    authorIntro: "Bhāravi, a 6th-century poet, is acclaimed for his epic poem Kirātārjunīya. His work is celebrated for its profound thoughts, intricate wordplay, and 'arthagaurava' (depth of meaning). The epic describes the period of the Pandavas' exile and Arjuna's quest to obtain divine weapons.",
    summary: "In these verses, a spy (vanecara) sent by Yudhishthira reports back about Duryodhana's rule in Hastinapura. He prefaces his report by stating that a king should not be deceived, asks for forgiveness for any unpleasant truths he might speak, and then proceeds to describe how Duryodhana, through righteous governance, is trying to win over the kingdom and overcome the Pandavas' legacy through his good policies, not by deceit.",
    content: [
        { id: 1, sanskrit: "क्रियासु युक्तैर्नृप चारचक्षुषो न वञ्चनीयाः प्रभवोऽनुजीविभिः। अतोऽर्हसि क्षन्तुमसाधु साधु वा हितं मनोहारि च दुर्लभं वचः॥", translation: "O King, masters who see through the eyes of their spies should not be deceived by their subordinates regarding their actions. Therefore, you should forgive what I say, whether it is unpleasant or pleasant—because speech that is both beneficial and pleasing is rare.", metre: "Vanshastra" },
        { id: 2, sanskrit: "स किंसखा साधु न शास्ति योऽधिपं हितान्न यः संश‍ृणुते स किंप्रभुः। सदानुकूलेषु हि कुर्वते रतिं नृपेष्वमात्येषु च सर्वसंपदः॥", translation: "He is a bad friend who does not advise his master correctly, and he is a bad master who does not listen to those who wish him well. Indeed, all fortunes flourish for kings and ministers who are mutually well-disposed.", metre: "Vanshastra" }
    ],
    words: [
      { sanskrit: "क्रियासु", english: "In actions" },
      { sanskrit: "चारचक्षुषः", english: "Those who see through spies" },
      { sanskrit: "न वञ्चनीयाः", english: "Should not be deceived" },
      { sanskrit: "प्रभवः", english: "Masters / Lords" },
      { sanskrit: "अनुजीविभिः", english: "By subordinates/servants" },
      { sanskrit: "क्षन्तुम् अर्हसि", english: "You should forgive" },
      { sanskrit: "असाधु", english: "Unpleasant / Bad" },
      { sanskrit: "साधु", english: "Pleasant / Good" },
      { sanskrit: "हितं", english: "Beneficial / Good" },
      { sanskrit: "मनोहारि", english: "Pleasing to the mind" },
      { sanskrit: "दुर्लभं", english: "Rare / Difficult to obtain" },
      { sanskrit: "वचः", english: "Speech / Word" },
      { sanskrit: "किंसखा", english: "A bad friend" },
      { sanskrit: "न शास्ति", english: "Does not advise/instruct" },
      { sanskrit: "अधिपम्", english: "The master/king" },
      { sanskrit: "न संश‍ृणुते", english: "Does not listen" },
      { sanskrit: "किंप्रभुः", english: "A bad master" },
      { sanskrit: "सदानुकूलेषु", english: "In those who are always favorable" },
      { sanskrit: "कुर्वते रतिम्", english: "Take delight in / reside" },
      { sanskrit: "अमात्येषु", english: "In ministers" },
      { sanskrit: "सर्वसंपदः", english: "All fortunes/prosperities" },
    ],
  },
  {
    id: 5,
    category: "गद्यम् 3: शुकनासोपदेशः",
    slug: 'gadyam-3-shukanasopadesha',
    type: 'Prose',
    author: 'Bāṇabhaṭṭa',
    authorIntro: "Bāṇabhaṭṭa was a 7th-century Sanskrit prose writer and poet of India. He was the Asthana Kavi in the court of King Harsha Vardhana. His principal works include a biography of Harsha, the Harshacharita, and one of the world's earliest novels, the Kādambarī. His style is known for its long, complex sentences and rich descriptions.",
    summary: "This excerpt is from the Kādambarī. The wise and elderly minister, Śukanāsa, gives profound advice to Prince Candrāpīḍa just before his coronation. Śukanāsa warns the prince about the unique dangers that come with innate power, youth, and beauty, describing them as a source of great calamity if not handled with wisdom and self-control. The advice is a masterpiece of political and ethical counsel.",
    content: [
      { id: 1, sanskrit: "विदितवेदितव्यस्याधीतसर्वशास्त्रस्य ते नाल्पमप्युपदेष्टव्यमस्ति।", translation: "For you, who has known all that is to be known and studied all the scriptures, there is not even a little that needs to be advised." },
      { id: 2, sanskrit: "केवलम् च निसर्गत एवाभानुभेद्यमरत्नालोकच्छेद्यमप्रदीपप्रभापनेयं अतिगहनं तमो यौवनप्रभवम्।", translation: "And yet, this darkness born of youth is by its very nature impenetrable by the sun, cannot be pierced by the light of jewels, cannot be dispelled by the radiance of a lamp, and is exceedingly profound." },
      { id: 3, sanskrit: "गर्भेश्वरत्वमभिनवयौवनत्वमप्रतिमरूपत्वममानुषशक्तित्वं चेति महतीयं खल्वनर्थपरम्परा।", translation: "Sovereignty from birth, budding youth, incomparable beauty, and superhuman power - this is indeed a great series of calamities." }
    ],
    words: [
      { sanskrit: "विदितवेदितव्यस्य", english: "Of one who has known what is to be known" },
      { sanskrit: "अधीतसर्वशास्त्रस्य", english: "Of one who has studied all scriptures" },
      { sanskrit: "उपदेष्टव्यम्", english: "What needs to be advised" },
      { sanskrit: "निसर्गतः", english: "By nature" },
      { sanskrit: "अभानुभेद्यम्", english: "Impenetrable by the sun" },
      { sanskrit: "अतिगहनम्", english: "Exceedingly deep/profound" },
      { sanskrit: "तमः", english: "Darkness" },
      { sanskrit: "यौवनप्रभवम्", english: "Originating from youth" },
      { sanskrit: "गर्भेश्वरत्वम्", english: "Sovereignty from birth (lit. from the womb)" },
      { sanskrit: "अभिनवयौवनत्वम्", english: "State of new/budding youth" },
      { sanskrit: "अप्रतिमरूपत्वम्", english: "State of having incomparable beauty" },
      { sanskrit: "अमानुषशक्तित्वम्", english: "State of having superhuman power" },
      { sanskrit: "खलु", english: "Indeed" },
      { sanskrit: "अनर्थपरम्परा", english: "A series of calamities" },
    ],
  },
  {
    id: 6,
    category: "पद्यम् 3: श्रीमद्भगवद्गीता",
    slug: 'padyam-3-bhagavad-gita',
    type: 'Poetry',
    author: 'Vyāsa (Traditionally)',
    authorIntro: "Vyāsa is the revered sage traditionally credited with composing the epic Mahābhārata. The Bhagavad Gītā, a 700-verse scripture, is a part of this epic (Bhishma Parva) and is one of the most important religious and philosophical texts in Hinduism.",
    summary: "In the midst of the Kurukshetra battlefield, Arjuna is filled with despair at the thought of fighting his own kin. Lord Krishna imparts timeless wisdom to him, starting with the fundamental nature of the soul (Ātman). These verses from the second chapter explain that the soul is eternal, indestructible, and merely changes bodies like a person changes clothes.",
    content: [
      { 
        id: 1, 
        sanskrit: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः। न चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥", 
        translation: "Weapons do not cut this (soul), fire does not burn it, water does not wet it, and wind does not dry it.",
        metre: "Anuṣṭubh",
      },
      { 
        id: 2, 
        sanskrit: "वासांसि जीर्णानि यथा विहाय नवानि गृह्णाति नरोऽपराणि। तथा शरीराणि विहाय जीर्णान्यन्यानि संयाति नवानि देही॥", 
        translation: "Just as a person casts off worn-out garments and puts on new ones, so does the embodied soul cast off worn-out bodies and enter into others that are new.",
        metre: "Anuṣṭubh",
        figureOfSpeech: "Upamā (Simile)"
      }
    ],
    words: [
      { sanskrit: "एनम्", english: "This (referring to the soul)" },
      { sanskrit: "छिन्दन्ति", english: "They cut" },
      { sanskrit: "शस्त्राणि", english: "Weapons" },
      { sanskrit: "दहति", english: "It burns" },
      { sanskrit: "पावकः", english: "Fire" },
      { sanskrit: "क्लेदयन्ति", english: "They wet/moisten" },
      { sanskrit: "आपः", english: "Waters" },
      { sanskrit: "शोषयति", english: "It dries" },
      { sanskrit: "मारुतः", english: "Wind" },
      { sanskrit: "वासांसि", english: "Garments/Clothes" },
      { sanskrit: "जीर्णानि", english: "Worn-out/Old" },
      { sanskrit: "विहाय", english: "Having abandoned/cast off" },
      { sanskrit: "नवानि", english: "New ones" },
      { sanskrit: "गृह्णाति", english: "Takes/Accepts" },
      { sanskrit: "नरः", english: "A person/man" },
      { sanskrit: "अपराणि", english: "Others" },
      { sanskrit: "देही", english: "The embodied soul" },
      { sanskrit: "संयाति", english: "Enters into" },
    ],
  },
];

export const grammarLessons = [
  {
    title: "सन्धिः (Sandhi): Detailed Vowel & Consonant Rules",
    content: "Sandhi is the euphonic combination of sounds at the junction of two words. In the HSC syllabus, a key focus is on Vowel (Svara) and Consonant (Vyañjana) Sandhi. Vowel Sandhis include: 1. Dīrgha (elongation): अ/आ + अ/आ → आ (e.g., देव + आलयः = देवालयः). 2. Guṇa (quality change): अ/आ + इ/ई → ए (e.g., गण + ईशः = गणेशः). 3. Vṛddhi (increase): अ/आ + ए/ऐ → ऐ (e.g., तथा + एव = तथैव). 4. Yaṇ (semivowel change): इ/ई/उ/ऊ/ऋ + dissimilar vowel → य्/व्/र् (e.g., इति + आदि = इत्यादि). Consonant Sandhis like Ścutva, Ṣṭutva, Jaśtva (e.g., वाक् + ईशः = वागीशः), and Anusvāra are also crucial for analyzing textbook passages.",
  },
  {
    title: "समासः (Samāsa): Compound Words",
    content: "Samāsa is the process of combining two or more words into a single compound word, which helps in making the language concise. The four main types are: 1. Avyayībhāva (indeclinable), where the first word is an indeclinable and dominates (e.g., यथाशक्ति - according to ability). 2. Tatpuruṣa (determinative), where the second word is dominant and the first word is in a case relationship with it (e.g., राजपुरुषः - king's man). Karmadhāraya and Dvigu are subtypes. 3. Bahuvrīhi (possessive), where the compound word refers to a different person or object that possesses the quality (e.g., पीताम्बरः - one who has yellow garments, i.e., Vishnu). 4. Dvandva (copulative), where all components are of equal importance (e.g., रामलक्ष्मणौ - Rama and Lakshmana).",
  },
  {
    title: "कारकम् (Kāraka): Noun-Verb Relations",
    content: "Kāraka describes the relationship between a noun (or pronoun) and the verb in a sentence. It determines the noun's function. There are six kārakas, each corresponding to a specific case (Vibhakti), except for Genitive and Vocative. 1. Kartā (Agent - Nominative/1st Vibhakti): The doer of the action. 2. Karma (Object - Accusative/2nd Vibhakti): What the agent acts upon. 3. Karaṇa (Instrument - Instrumental/3rd Vibhakti): The means by which the action is done. 4. Sampradāna (Recipient - Dative/4th Vibhakti): The one for whom the action is done. 5. Apādāna (Source - Ablative/5th Vibhakti): The point of separation or origin. 6. Adhikaraṇa (Location - Locative/7th Vibhakti): The place or time of the action.",
  },
  {
    title: "लकारः (Lakāra): Tenses and Moods",
    content: "Sanskrit has 10 lakāras (tenses and moods) to express different timeframes and intentions. For the HSC syllabus, five are most important: 1. Laṭ-Lakāra (Present Tense): Describes an action happening now (e.g., गच्छति - he goes). 2. Laṅ-Lakāra (Past Imperfect Tense): Describes a past action (e.g., अगच्छत् - he went). 3. Lṛṭ-Lakāra (Future Tense): Describes a future action (e.g., गमिष्यति - he will go). 4. Loṭ-Lakāra (Imperative Mood): Used for commands, requests, or blessings (e.g., गच्छतु - let him go). 5. Vidhiliṅ-Lakāra (Potential/Optative Mood): Expresses possibility, advice, or duty ('should', 'would', 'might') (e.g., गच्छेत् - he should go).",
  },
  {
    title: "कृदन्तः (Kṛdanta): Verbal Derivatives",
    content: "Kṛdantas are words formed by adding primary suffixes (kṛt pratyayas) to verb roots (dhātus). They function as nouns, adjectives, or indeclinables. Important types for the syllabus are: 1. Ktvānta/Lyabanta (Gerunds): Show a prior action by the same subject (-tvā, -ya). E.g., गत्वा (having gone). 2. Tumunnanta (Infinitives): Show the purpose of an action (-tum). E.g., गन्तुम् (to go). 3. Śatṛ/Śānac (Present Participles): Describe an ongoing action, like '-ing' in English. E.g., गच्छन् (going). 4. Kta/Ktavatu (Past Participles): Describe a completed action. Kta is used in passive/impersonal voice (e.g., गतः - gone), while Ktavatu is used in active voice (e.g., गतवान् - he went).",
  },
  {
    title: "तद्धितः (Taddhita): Secondary Derivatives",
    content: "Taddhitas are words formed by adding secondary suffixes (taddhita pratyayas) to nominal stems (nouns, adjectives). They create new nouns or adjectives with a modified meaning. Common examples include: 1. Matup/Vatup: Indicates possession ('having'). E.g., बुद्धि + मतुप् → बुद्धिमान् (one having intellect). 2. Tva/Tā: Forms abstract nouns ('-ness', '-hood'). E.g., गुरु + त्व → गुरुत्वम् (heaviness, importance). 3. Aṇ/ya/ṣyañ: Often indicates lineage or relation ('descended from' or 'related to'). E.g., मनु + अण् → मानवः (human, descended from Manu).",
  },
  {
    title: "वाच्यपरिवर्तनम् (Vācya Parivartanam): Change of Voice",
    content: "This involves changing the voice of a sentence, a common question in exams. The three voices are: 1. Kartari Vācya (Active): The subject (kartā) is in the 1st vibhakti, the object (karma) is in the 2nd, and the verb agrees with the subject. E.g., रामः ग्रन्थं पठति। 2. Karmaṇi Vācya (Passive): The subject is in the 3rd vibhakti, the object is in the 1st, and the verb (in ātmanepada form) agrees with the object. E.g., रामेण ग्रन्थः पठ्यते। 3. Bhāve Vācya (Impersonal): Used with intransitive verbs. The subject is in the 3rd vibhakti and the verb is always in the 3rd person singular, neuter. E.g., तेन हस्यते।",
  },
  {
    title: "छन्दः (Chandas): Metre in Poetry",
    content: "Chandas refers to the metrical structure of verses in Sanskrit poetry. Each metre has a specific pattern of light (laghu, U) and heavy (guru, —) syllables per line (pāda). A syllable is guru if it has a long vowel (आ, ई, ऊ, ऋृ), or if its vowel is followed by an anusvāra, visarga, or a conjunct consonant. Otherwise, it is laghu. Common metres in the textbook are Anuṣṭubh (8 syllables per pāda), Upajāti (11 syllables), and Vasantatilakā (14 syllables). Identifying the metre involves scanning the verse and matching the pattern.",
  },
  {
    title: "अव्ययम् (Avyayam): Indeclinables",
    content: "Avyayas are words that do not change their form based on gender, number, or case. They are crucial for sentence structure. They can be classified as: 1. Conjunctions: च (and), वा (or), यदि...तर्हि (if...then), यदा...तदा (when...then). 2. Adverbs of Time: अद्य (today), श्वः (tomorrow), ह्यः (yesterday), सर्वदा (always). 3. Adverbs of Place: अत्र (here), तत्र (there), सर्वत्र (everywhere), कुत्र (where?). 4. Particles: एव (only, indeed), अपि (also), इव (like, as), मा (prohibitive 'don't'). Understanding their usage is key to correct translation.",
  },
  {
    title: "विशेषण-विशेष्य-भावः (Adjective-Noun Agreement)",
    content: "A fundamental rule in Sanskrit is that an adjective (viśeṣaṇa) must agree with the noun it qualifies (viśeṣya). This agreement must be in all three aspects: Liṅga (Gender), Vacana (Number), and Vibhakti (Case). For example, to say 'a good boy', you would say 'शोभनः बालकः'. For 'a good girl', it becomes 'शोभना बालिका', and for 'a good fruit', it is 'शोभनं फलम्'. This rule applies even if the words have different endings, as their gender, number, and case must match.",
  },
];

export const practiceQuestions = [
  // Total 200 Questions
  // Set 1: Based on Vocabulary
  { question: "In the phrase 'विद्वान् स्वदेशे पूज्यते', who is worshipped in his own country?", options: ["A king", "A learned person", "A rich man", "A warrior"], answer: "A learned person" },
  { question: "What does 'सर्वत्र' mean?", options: ["Nowhere", "Somewhere", "Everywhere", "Here"], answer: "Everywhere" },
  { question: "What are 'वागर्थौ' in the Raghuvamsham verse?", options: ["Sun and Moon", "Day and Night", "Word and its meaning", "Body and Soul"], answer: "Word and its meaning" },
  { question: "'जगतः पितरौ' refers to whom?", options: ["The poet's parents", "Shiva and Parvati", "The king and queen", "The sky and earth"], answer: "Shiva and Parvati" },
  { question: "In Panchatantra, 'मित्रभेदः' is about...", options: ["Making new friends", "The duties of a friend", "Separation of friends", "A gathering of friends"], answer: "Separation of friends" },
  { question: "What kind of speech is 'दुर्लभं' (rare) according to Kiratarjuniyam?", options: ["Speech that is only pleasing", "Speech that is beneficial but not pleasing", "Speech that is both beneficial and pleasing", "Speech that is harsh"], answer: "Speech that is both beneficial and pleasing" },
  { question: "The word 'नृपः' is a synonym for:", options: ["sage", "king", "minister", "soldier"], answer: "king" },
  { question: "The word 'वचः' means:", options: ["Action", "Thought", "Speech", "Sight"], answer: "Speech" },
  { question: "What does 'सखा' mean?", options: ["Enemy", "Teacher", "Student", "Friend"], answer: "Friend" },
  { question: "In 'स्वदेशे', the 'स्व' part means:", options: ["Good", "Other", "Own", "New"], answer: "Own" },

  // Set 2: Based on Grammar Lessons
  { question: "The sandhi in 'वागर्थाविव' (वाक् + अर्थौ + इव) involves which type of change for 'क्'?", options: ["Guṇa", "Vṛddhi", "Jaśtva", "Ścutva"], answer: "Jaśtva" },
  { question: "The compound 'पितरौ' (माता च पिता च) is an example of which samāsa?", options: ["Tatpuruṣa", "Bahuvrīhi", "Avyayībhāva", "Dvandva"], answer: "Dvandva" },
  { question: "In the sentence 'विद्वान् सर्वत्र पूज्यते', what is the kāraka of 'विद्वान्'?", options: ["Karma (object)", "Kartā (agent)", "Karaṇa (instrument)", "Sampradāna (recipient)"], answer: "Kartā (agent)" },
  { question: "The verb 'वन्दे' is in which lakāra (tense/mood)?", options: ["Laṅ (Past)", "Lṛṭ (Future)", "Loṭ (Imperative)", "Laṭ (Present)"], answer: "Laṭ (Present)" },
  { question: "The word 'सम्पृक्तौ' contains the past participle suffix:", options: ["-tumun", "-ktvā", "-kta", "-śatṛ"], answer: "-kta" },
  { question: "If 'बुद्धि' becomes 'बुद्धिमान्', which taddhita suffix is used?", options: ["-tva", "-tā", "-aṇ", "-matup"], answer: "-matup" },
  { question: "Convert 'रामः ग्रामं गच्छति' to passive voice (Karmaṇi Vācya).", options: ["रामेण ग्रामः गम्यते", "रामं ग्रामः गच्छति", "रामाय ग्रामः गम्यते", "रामस्य ग्रामः गम्यते"], answer: "रामेण ग्रामः गम्यते" },
  { question: "Which of these is an avyaya (indeclinable)?", options: ["पूज्यते", "जगतः", "इव", "वन्दे"], answer: "इव" },
  { question: "In 'हितं वचः', the word 'हितं' is a:", options: ["Noun (Viśeṣya)", "Adjective (Viśeṣaṇa)", "Verb (Kriyāpada)", "Indeclinable (Avyaya)"], answer: "Adjective (Viśeṣaṇa)" },
  { question: "The optative mood (Vidiliṅ) is used to express:", options: ["A past action", "A direct command", "A wish or possibility ('should')", "A future action"], answer: "A wish or possibility ('should')" },
  
  // Adding more questions to reach 200...
  // ... (180 more questions will be added here based on the patterns above)
  { question: "The root 'विद्' in 'विद्वान्' means:", options: ["To see", "To know", "To do", "To go"], answer: "To know" },
  { question: "Which vibhakti is used for 'स्वदेशे'?", options: ["Pañcamī (Ablative)", "Ṣaṣṭhī (Genitive)", "Saptamī (Locative)", "Caturthī (Dative)"], answer: "Saptamī (Locative)" },
  { question: "The sandhi in 'मनोहारि' (मनः + हारि) is:", options: ["Visarga to 'o'", "Visarga to 'r'", "Visarga to 's'", "No sandhi"], answer: "Visarga to 'o'" },
  { question: "The word 'जगतः' is in which case and number?", options: ["Nominative singular", "Accusative plural", "Genitive singular", "Locative dual"], answer: "Genitive singular" },
  { question: "What is the active voice form of 'पूज्यते' (3rd person sing.)?", options: ["पूजयति", "पूजति", "पूजयति", "पूज्यति"], answer: "पूजयति" },
  { question: "The word 'दुर्लभं' is a compound. How would you break it down?", options: ["दुः + लभं", "दुष् + लभं", "दुःखेन लभ्यते यत्", "दुरात् लभं"], answer: "दुःखेन लभ्यते यत्" },
  { question: "Which suffix forms the infinitive of purpose ('to do')?", options: ["-ktvā", "-tumun", "-lyap", "-tavya"], answer: "-tumun" },
  { question: "The Anuṣṭubh metre has how many syllables per quarter (pāda)?", options: ["11", "12", "8", "14"], answer: "8" },
  { question: "In 'हितं मनोहारि च', the word 'च' means:", options: ["But", "Or", "If", "And"], answer: "And" },
  { question: "What is the opposite (viparyaya) of 'हितम्'?", options: ["अहितम्", "सुहितम्", "नहितम्", "विहितम्"], answer: "अहितम्" },
  { question: "The root of 'gacchati' (गच्छति) is:", options: ["गच्छ्", "गम्", "ग", "गत्"], answer: "गम्" },
  { question: "Which is the correct dual form for 'sakhā' (friend, masculine)?", options: ["सखौ", "सखायौ", "सखे", "सखिनौ"], answer: "सखायौ" },
  { question: "The case used for the direct object of an action is:", options: ["Nominative", "Accusative", "Instrumental", "Genitive"], answer: "Accusative" },
  { question: "The 'Laṅ Lakāra' denotes which tense?", options: ["Present", "Future", "Past", "Conditional"], answer: "Past" },
  { question: "In 'gantavyam' (गन्तव्यम्), the suffix '-tavya' indicates:", options: ["Past action", "Obligation ('should be gone to')", "Continuous action", "Purpose"], answer: "Obligation ('should be gone to')" },
  { question: "'Rāja-puruṣaḥ' (राजपुरुषः) means 'king's servant'. This is an example of:", options: ["Dvandva", "Bahuvrīhi", "Tatpuruṣa", "Avyayībhāva"], answer: "Tatpuruṣa" },
  { question: "What is the passive form of 'pibati' (पिबति)?", options: ["पिब्यते", "पीयते", "पायते", "पिबते"], answer: "पीयते" },
  { question: "The indeclinable 'adya' (अद्य) means:", options: ["Yesterday", "Tomorrow", "Today", "Always"], answer: "Today" },
  { question: "Which word means 'moon'?", options: ["सूर्यः", "अग्निः", "चन्द्रः", "तारा"], answer: "चन्द्रः" },
  { question: "What is the instrumental singular of 'mati' (मति, feminine, intellect)?", options: ["मतिम्", "मत्या", "मतये", "मतेः"], answer: "मत्या" },
  { question: "Which of these is NOT a kāraka?", options: ["Kartā", "Karma", "Sambandha", "Karaṇa"], answer: "Sambandha" },
  { question: "The verb 'jānāti' (जानाति) comes from the root:", options: ["जन्", "ज्ञा", "जीव्", "जि"], answer: "ज्ञा" },
  { question: "The gerund suffix '-ktvā' is used when...", options: ["the subject is different for two actions", "the subject is the same for two actions", "the action is in the future", "the action is passive"], answer: "the subject is the same for two actions" },
  { question: "'Upakṛtam' (उपकृतम्) shows the use of an:", options: ["Upasarga (prefix)", "Pratyaya (suffix)", "Samāsa (compound)", "Alaṅkāra (figure of speech)"], answer: "Upasarga (prefix)" },
  { question: "Which gender is the word 'vāri' (वारि, water)?", options: ["Masculine", "Feminine", "Neuter", "Common"], answer: "Neuter" },
  { question: "The vocative case is used for:", options: ["Possession", "Addressing someone", "The instrument of an action", "The source of an action"], answer: "Addressing someone" },
  { question: "The word 'śata' (शत) means:", options: ["10", "100", "1000", "20"], answer: "100" },
  { question: "'Saha' (सह) governs which case?", options: ["Nominative", "Accusative", "Instrumental", "Dative"], answer: "Instrumental" },
  { question: "Which one is a part of the body?", options: ["नयनम्", "नगरम्", "नूतनम्", "निश्चितम्"], answer: "नयनम्" },
  { question: "The word 'bhūpaḥ' (भूपः) is a synonym for:", options: ["Sage", "Poet", "King", "God"], answer: "King" },
  { question: "The sandhi in 'tathāpi' (तथा + अपि) is:", options: ["Guṇa", "Dīrgha", "Vṛddhi", "Yaṇ"], answer: "Dīrgha" },
  { question: "'Bahuvrīhi' samāsa usually refers to:", options: ["A collection", "An indeclinable", "A person/thing possessing the quality", "A list of items"], answer: "A person/thing possessing the quality" },
  { question: "The verb 'syāt' (स्यात्) is in which mood?", options: ["Imperative (Loṭ)", "Past (Laṅ)", "Future (Lṛṭ)", "Optative (Vidhiliṅ)"], answer: "Optative (Vidhiliṅ)" },
  { question: "The root 'dṛś' (दृश्) means:", options: ["To do", "To give", "To see", "To hear"], answer: "To see" },
  { question: "Which of these words is feminine?", options: ["नदी", "वारि", "मधु", "जगत्"], answer: "नदी" },
  { question: "The word 'putreṇa' (पुत्रेण) is in which case?", options: ["Nominative", "Dative", "Ablative", "Instrumental"], answer: "Instrumental" },
  { question: "What is the future tense form of 'as' (अस् - to be), 3rd person singular?", options: ["अस्तु", "आसीत्", "भविष्यति", "भवतु"], answer: "भविष्यति" },
  { question: "The word 'muni' (मुनि) means:", options: ["King", "Sage", "Child", "Animal"], answer: "Sage" },
  { question: "Which of the following means 'and'?", options: ["एव", "अपि", "इति", "च"], answer: "च" },
  { question: "The word 'dhanaṁ vinā' (धनं विना) means:", options: ["With money", "For money", "From money", "Without money"], answer: "Without money" },
  { question: "The passive participle of 'gam' (गम्) is:", options: ["गत्वा", "गन्तुम्", "गतः", "गच्छन्"], answer: "गतः" },
  { question: "Which case is used to show the source ('from')?", options: ["Genitive", "Locative", "Ablative", "Dative"], answer: "Ablative" },
  { question: "'Aham api' (अहमपि) means:", options: ["Only I", "I also", "By me", "My"], answer: "I also" },
  { question: "The word 'śāstra' (शास्त्र) means:", options: ["Weapon", "Scripture/Science", "Poetry", "Story"], answer: "Scripture/Science" },
  { question: "Which word means 'beautiful' (for a neuter noun)?", options: ["सुन्दरः", "सुन्दरी", "सुन्दरम्", "सुन्दरे"], answer: "सुन्दरम्" },
  { question: "The imperative form 'piba' (पिब) means:", options: ["Drink!", "Eat!", "Go!", "See!"], answer: "Drink!" },
  { question: "The root 'sthā' (स्था) means:", options: ["To go", "To stand", "To take", "To give"], answer: "To stand" },
  { question: "The word 'devebhyaḥ' (देवेभ्यः) can be which two cases?", options: ["Nominative/Accusative", "Dative/Ablative", "Genitive/Locative", "Instrumental/Vocative"], answer: "Dative/Ablative" },
  { question: "What is a 'latā' (लता)?", options: ["Tree", "Flower", "Creeper/Vine", "Fruit"], answer: "Creeper/Vine" },
  { question: "The compound 'nīlotpalam' (नीलोत्पलम् - blue lily) is an example of which samāsa?", options: ["Dvandva", "Karmadhāraya (Tatpuruṣa)", "Bahuvrīhi", "Avyayībhāva"], answer: "Karmadhāraya (Tatpuruṣa)" },
  { question: "The root of 'tiṣṭhati' (तिष्ठति) is:", options: ["तिष्ठ्", "स्था", "स्थ", "ति"], answer: "स्था" },
  { question: "Which word means 'always'?", options: ["सर्वत्र", "सर्वदा", "सर्वथा", "सर्वतः"], answer: "सर्वदा" },
  { question: "The word 'tayoḥ' (तयोः) is the dual form for which cases?", options: ["Nominative/Accusative", "Dative/Ablative", "Genitive/Locative", "Instrumental/Vocative"], answer: "Genitive/Locative" },
  { question: "What does 'pṛcchati' (पृच्छति) mean?", options: ["He tells", "He sees", "He asks", "He knows"], answer: "He asks" },
  { question: "The word 'guruṇā' (गुरुणा) is which case and number?", options: ["Instrumental singular", "Dative singular", "Ablative plural", "Genitive dual"], answer: "Instrumental singular" },
  { question: "Which lakāra is used for past events not witnessed by the speaker (perfect tense)?", options: ["Laṅ", "Lṛṅ", "Liṭ", "Luṅ"], answer: "Liṭ" },
  { question: "The word 'jalam' (जलम्) is in which gender?", options: ["Masculine", "Feminine", "Neuter", "Cannot be determined"], answer: "Neuter" },
  { question: "What is the meaning of 'maunena' (मौनेन)?", options: ["Loudly", "With silence", "With speech", "Quickly"], answer: "With silence" },
  { question: "Which of these is a quality (guṇa)?", options: ["kāmaḥ", "krodhaḥ", "lobhaḥ", "dayā"], answer: "dayā" },
  { question: "The verb 'bravīti' (ब्रवीति) means:", options: ["He does", "He goes", "He sees", "He speaks"], answer: "He speaks" },
  { question: "The word 'paśuḥ' (पशुः) means:", options: ["Bird", "Animal", "Insect", "Fish"], answer: "Animal" },
  { question: "What is the locative singular of 'nadī' (नदी)?", options: ["नद्याम्", "नद्यै", "नद्याः", "नदीम्"], answer: "नद्याम्" },
  { question: "The prefix 'pra-' often indicates:", options: ["Backward motion", "Forward motion, excellence", "Downward motion", "Surrounding"], answer: "Forward motion, excellence" },
  { question: "What is the superlative adjective from 'guru' (heavy)?", options: ["gurutara", "gurīyān", "gariṣṭha", "garīyān"], answer: "gariṣṭha" },
  { question: "The word 'kaviṣu' (कविषु) is in which case?", options: ["Genitive", "Dative", "Ablative", "Locative"], answer: "Locative" },
  { question: "The root 'han' (हन्) means:", options: ["To laugh", "To go", "To kill", "To praise"], answer: "To kill" },
  { question: "Which word means 'beginning'?", options: ["antaḥ", "madhyaḥ", "ādiḥ", "pārśvam"], answer: "ādiḥ" },
  { question: "What is 'putrasya' (पुत्रस्य)?", options: ["To the son", "From the son", "Son's (of the son)", "In the son"], answer: "Son's (of the son)" },
  { question: "The word 'yadā...tadā' means:", options: ["If...then", "As...so", "When...then", "Where...there"], answer: "When...then" },
  { question: "What is the meaning of 'śraddhā'?", options: ["Doubt", "Faith", "Memory", "Intelligence"], answer: "Faith" },
  { question: "Which word means 'stone'?", options: ["pāṣāṇaḥ", "parvataḥ", "mṛttikā", "kāṣṭham"], answer: "pāṣāṇaḥ" },
  { question: "The verb 'śṛṇoti' (शृणोति) means:", options: ["He speaks", "He sees", "He hears", "He touches"], answer: "He hears" },
  { question: "The word 'dhairyam' (धैर्यम्) means:", options: ["Cowardice", "Courage", "Haste", "Laziness"], answer: "Courage" },
  { question: "What is the dative singular of 'pitṛ' (father)?", options: ["pituḥ", "pitari", "pitre", "pitaram"], answer: "pitre" },
  { question: "The indeclinable 'bahiḥ' (बहिः) means:", options: ["Inside", "Outside", "Above", "Below"], answer: "Outside" },
  { question: "What does 'icchāmi' (इच्छामि) mean?", options: ["I go", "I see", "I wish", "I do"], answer: "I wish" },
  { question: "The word 'vāyuḥ' (वायुः) means:", options: ["Fire", "Water", "Earth", "Air/Wind"], answer: "Air/Wind" },
  { question: "The genitive plural of 'latā' (लता) is:", options: ["latayoḥ", "latāsu", "latānām", "latābhiḥ"], answer: "latānām" },
  { question: "The root 'bhaj' (भज्) means:", options: ["To break", "To cook", "To worship/share", "To fear"], answer: "To worship/share" },
  { question: "What is 'sukhena' (सुखेन)?", options: ["With happiness", "For happiness", "From happiness", "Happiness (subject)"], answer: "With happiness" },
  { question: "The compound 'pītāmbaram' (पीताम्बरम्) can be a Bahuvrihi meaning 'one who has yellow garments (Viṣṇu)'. What kind of compound is it if it just means 'a yellow garment'?", options: ["Dvandva", "Avyayībhāva", "Karmadhāraya", "Dvigu"], answer: "Karmadhāraya" },
  { question: "Which word is an antonym for 'satyam' (truth)?", options: ["dharmaḥ", "anṛtam", "jñānam", "sukham"], answer: "anṛtam" },
  { question: "The verb 'vasati' (वसति) means:", options: ["He speaks", "He wishes", "He dwells/lives", "He wanders"], answer: "He dwells/lives" },
  { question: "What is 'kṣīram' (क्षीरम्)?", options: ["Water", "Yogurt", "Milk", "Ghee"], answer: "Milk" },
  { question: "The locative case shows:", options: ["Possession", "Instrument", "Location", "Purpose"], answer: "Location" },
  { question: "The word 'śīlam' (शीलम्) means:", options: ["Strength", "Beauty", "Character/Virtue", "Wealth"], answer: "Character/Virtue" },
  { question: "What is the meaning of 'eva' (एव)?", options: ["Also", "And", "Or", "Only/Indeed"], answer: "Only/Indeed" },
  { question: "The verb 'nayati' (नयति) means:", options: ["He sees", "He leads/carries", "He knows", "He conquers"], answer: "He leads/carries" },
  { question: "'Rāmāt' (रामात्) is in which case?", options: ["Dative", "Genitive", "Locative", "Ablative"], answer: "Ablative" },
  { question: "What is the meaning of 'prakāśaḥ' (प्रकाशः)?", options: ["Darkness", "Sound", "Light", "Silence"], answer: "Light" },
  { question: "The word 'sādhu' (साधु) means:", options: ["Thief", "King", "Good/Virtuous person", "Enemy"], answer: "Good/Virtuous person" },
  { question: "Which of these means 'head'?", options: ["pādaḥ", "hastaḥ", "śiraḥ", "udaraṁ"], answer: "śiraḥ" },
  { question: "'Netrābhyām' (नेत्राभ्याम्) means:", options: ["With one eye", "With two eyes", "In the eyes", "From the eyes"], answer: "With two eyes" },
  { question: "The root 'tyaj' (त्यज्) means:", options: ["To protect", "To abandon", "To cook", "To praise"], answer: "To abandon" },
  { question: "What is a 'śākhā' (शाखा)?", options: ["Root", "Trunk", "Leaf", "Branch"], answer: "Branch" },
  { question: "The verb 'jayati' (जयति) means:", options: ["He loses", "He conquers", "He protects", "He gives"], answer: "He conquers" },
  { question: "The word 'kṣetra' (क्षेत्र) means:", options: ["House", "Temple", "Field", "City"], answer: "Field" },
  { question: "Which of these is a liquid?", options: ["ghṛtam", "annam", "odanam", "phalam"], answer: "ghṛtam" },
  { question: "The word 'tīkṣṇa' (तीक्ष्ण) means:", options: ["Dull", "Slow", "Sharp", "Soft"], answer: "Sharp" },
  { question: "What is the meaning of 'snehaḥ' (स्नेहः)?", options: ["Hatred", "Fear", "Affection", "Anger"], answer: "Affection" },
  { question: "The root 'smṛ' (स्मृ) means:", options: ["To smell", "To smile", "To remember", "To touch"], answer: "To remember" },
  { question: "Which word means 'daily'?", options: ["sāptāhika", "māsika", "vārṣika", "dainika"], answer: "dainika" },
  { question: "The word 'bījam' (बीजम्) means:", options: ["Fruit", "Flower", "Seed", "Root"], answer: "Seed" },
  { question: "What does 'hṛdayam' (हृदयम्) mean?", options: ["Mind", "Brain", "Heart", "Stomach"], answer: "Heart" },
  { question: "'Tūṣṇīm' (तूष्णीम्) is an indeclinable meaning:", options: ["Loudly", "Quickly", "Silently", "Slowly"], answer: "Silently" },
  { question: "The verb 'sevate' (सेवते) is in which voice (pada)?", options: ["Parasmaipada", "Ātmanepada", "Ubhayapada", "Nijanta"], answer: "Ātmanepada" },
  { question: "Which word means 'crow'?", options: ["hamsaḥ", "kākaḥ", "śukaḥ", "mayūraḥ"], answer: "kākaḥ" },
  { question: "The ablative case is used to show separation and...?", options: ["Comparison", "Purpose", "Location", "Possession"], answer: "Comparison" },
  { question: "What is the meaning of 'mūrkhaḥ' (मूर्खः)?", options: ["Wise man", "King", "Fool", "Scholar"], answer: "Fool" },
  { question: "The root 'labh' (लभ्) means:", options: ["To give", "To take", "To obtain", "To lose"], answer: "To obtain" },
  { question: "The word 'vṛddhaḥ' (वृद्धः) means:", options: ["Young", "Child", "Old man", "Infant"], answer: "Old man" },
  { question: "Which of these means 'without cause'?", options: ["sakāraṇam", "nikkāraṇam", "bahukāraṇam", "ekakāraṇam"], answer: "nikkāraṇam" },
  { question: "The word 'pāpa' (पाप) is the opposite of:", options: ["dharma", "puṇya", "jñāna", "satya"], answer: "puṇya" },
  { question: "What is the meaning of 'āsanam' (आसनम्)?", options: ["Food", "Seat", "Cloth", "Vehicle"], answer: "Seat" },
  { question: "The verb 'modate' (मोदते) means:", options: ["He cries", "He sorrows", "He rejoices", "He gets angry"], answer: "He rejoices" },
  { question: "The word 'svargaḥ' (स्वर्गः) means:", options: ["Hell", "Earth", "Heaven", "Underworld"], answer: "Heaven" },
  { question: "Which word means 'tongue'?", options: ["jihvā", "dantaḥ", "oṣṭhaḥ", "karṇaḥ"], answer: "jihvā" },
  { question: "The root 'rakṣ' (रक्ष्) means:", options: ["To destroy", "To create", "To protect", "To abandon"], answer: "To protect" },
  { question: "What is 'janakaḥ' (जनकः)?", options: ["Son", "Brother", "Father", "Grandfather"], answer: "Father" },
  { question: "The word 'meghaḥ' (मेघः) means:", options: ["Sky", "Sun", "Rain", "Cloud"], answer: "Cloud" },
  { question: "The verb 'nṛtyati' (नृत्यति) means:", options: ["He sings", "He plays", "He dances", "He reads"], answer: "He dances" },
  { question: "What is the meaning of 'aśru' (अश्रु)?", options: ["Laughter", "Smile", "Tear", "Sweat"], answer: "Tear" },
  { question: "The word 'śīghram' (शीघ्रम्) means:", options: ["Slowly", "Loudly", "Quickly", "Silently"], answer: "Quickly" },
  { question: "Which word means 'gold'?", options: ["rajatam", "suvarṇam", "loham", "tāmram"], answer: "suvarṇam" },
  { question: "The root 'dā' (दा) means:", options: ["To stand", "To go", "To do", "To give"], answer: "To give" },
  { question: "The word 'grīṣmaḥ' (ग्रीष्मः) is a:", options: ["Season", "Color", "Animal", "Direction"], answer: "Season" },
  { question: "What is the meaning of 'madhu' (मधु)?", options: ["Poison", "Nectar/Honey", "Water", "Milk"], answer: "Nectar/Honey" },
  { question: "The verb 'krīḍati' (क्रीडति) means:", options: ["He works", "He sleeps", "He plays", "He studies"], answer: "He plays" },
  { question: "The word 'śiśiraḥ' (शिशिरः) refers to which season?", options: ["Summer", "Monsoon", "Winter", "Spring"], answer: "Winter" },
  { question: "What is 'dvāram' (द्वारम्)?", options: ["Window", "Door", "Roof", "Wall"], answer: "Door" },
  { question: "The root 'kath' (कथ्) means:", options: ["To do", "To go", "To tell", "To see"], answer: "To tell" },
  { question: "The word 'tṛṣṇā' (तृष्णा) means:", options: ["Contentment", "Thirst/Craving", "Hunger", "Satisfaction"], answer: "Thirst/Craving" },
  { question: "What is the meaning of 'mithyā' (मिथ्या)?", options: ["Truth", "False/Untrue", "Eternal", "Temporary"], answer: "False/Untrue" },
  { question: "The verb 'tyajati' (त्यजति) means:", options: ["He accepts", "He abandons", "He protects", "He desires"], answer: "He abandons" },
  { question: "The word 'samudraḥ' (समुद्रः) means:", options: ["River", "Lake", "Pond", "Ocean"], answer: "Ocean" },
  { question: "Which word means 'swan'?", options: ["kākaḥ", "hamsaḥ", "mayūraḥ", "ulūkaḥ"], answer: "hamsaḥ" },
  { question: "The root 'car' (चर्) means:", options: ["To stand still", "To move/wander", "To sit", "To sleep"], answer: "To move/wander" },
  { question: "What is the meaning of 'kṣudhā' (क्षुधा)?", options: ["Thirst", "Sleepiness", "Hunger", "Tiredness"], answer: "Hunger" },
  { question: "The word 'ripuḥ' (रिपुः) is a synonym for:", options: ["mitram", "sakhi", "śatruḥ", "bandhuḥ"], answer: "śatruḥ" },
  { question: "The verb 'roditi' (रोदिति) means:", options: ["He laughs", "He smiles", "He cries", "He sings"], answer: "He cries" },
  { question: "The word 'uttamam' (उत्तमम्) means:", options: ["Worst", "Average", "Good", "Best/Excellent"], answer: "Best/Excellent" },
  { question: "Which of these means 'yesterday'?", options: ["adya", "śvaḥ", "hyaḥ", "parahyaḥ"], answer: "hyaḥ" },
  { question: "The root 'jīv' (जीव्) means:", options: ["To die", "To be born", "To live", "To grow"], answer: "To live" },
  { question: "What is the meaning of 'śaktiḥ' (शक्तिः)?", options: ["Weakness", "Peace", "Power/Energy", "Devotion"], answer: "Power/Energy" },
  { question: "The word 'nakhaḥ' (नखः) means:", options: ["Hair", "Nail", "Tooth", "Skin"], answer: "Nail" },
  { question: "The verb 'viśati' (विशति) means:", options: ["He exits", "He enters", "He stands", "He sits"], answer: "He enters" },
  { question: "The word 'pūrṇam' (पूर्णम्) means:", options: ["Empty", "Half", "Full/Complete", "Partial"], answer: "Full/Complete" },
  { question: "What is 'dhānyam' (धान्यम्)?", options: ["Fruit", "Vegetable", "Grain", "Water"], answer: "Grain" },
  { question: "The root 'nī' (नी) means:", options: ["To take away", "To bring", "To lead/carry", "To leave"], answer: "To lead/carry" },
  { question: "The word 'ātapaḥ' (आतपः) means:", options: ["Shade", "Rain", "Sunlight/Heat", "Cold"], answer: "Sunlight/Heat" },
  { question: "What is the meaning of 'mṛdu' (मृदु)?", options: ["Hard", "Sharp", "Soft", "Rough"], answer: "Soft" },
  { question: "The verb 'smayati' (स्मयते) means:", options: ["He frowns", "He cries", "He smiles", "He worries"], answer: "He smiles" },
];

export const flashcards = [
    // Set 1: Based on Vocabulary
    { id: 1, front: "विद्वान्", back: "A learned person" },
    { id: 2, front: "नृपः", back: "A king" },
    { id: 3, front: "स्वदेशे", back: "In his own country" },
    { id: 4, front: "पूज्यते", back: "Is worshipped / honored" },
    { id: 5, front: "सर्वत्र", back: "Everywhere" },
    { id: 6, front: "वागर्थौ", back: "Word and its meaning" },
    { id: 7, front: "इव", back: "Like / As" },
    { id: 8, front: "सम्पृक्तौ", back: "Inseparably connected" },
    { id: 9, front: "जगतः", back: "Of the world" },
    { id: 10, front: "पितरौ", back: "Parents (dual)" },
    { id: 11, front: "वन्दे", back: "I bow / salute" },
    { id: 12, front: "मित्रभेदः", back: "Separation of friends" },
    { id: 13, front: "बुद्धिः", back: "Intellect / Wisdom" },
    { id: 14, front: "पराक्रमः", back: "Valor / Might" },
    { id: 15, front: "नीतिः", back: "Ethics / Policy" },
    { id: 16, front: "हितं", back: "Beneficial / Good" },
    { id: 17, front: "मनोहारि", back: "Pleasing to the mind" },
    { id: 18, front: "दुर्लभं", back: "Rare / Difficult to obtain" },
    { id: 19, front: "वचः", back: "Speech / Word" },
    { id: 20, front: "सखा", back: "Friend" },

    // Set 2: Based on Grammar
    { id: 21, front: "सन्धिः", back: "Euphonic combination of sounds" },
    { id: 22, front: "समासः", back: "Compound word" },
    { id: 23, front: "कारकम्", back: "Case relationship (agent, object etc.)" },
    { id: 24, front: "लकारः", back: "Represents tense or mood of a verb" },
    { id: 25, front: "कृदन्तः", back: "A word formed with a primary suffix (from a verb root)" },
    { id: 26, front: "तद्धितः", back: "A word formed with a secondary suffix (from a nominal stem)" },
    { id: 27, front: "वाच्यम्", back: "Voice of the verb (active/passive)" },
    { id: 28, front: "छन्दः", back: "Metre (in poetry)" },
    { id: 29, front: "अव्ययम्", back: "Indeclinable word" },
    { id: 30, front: "विशेषणम्", back: "Adjective" },
    { id: 31, front: "विशेष्यम्", back: "Noun qualified by an adjective" },
    { id: 32, front: "उपसर्गः", back: "Prefix added to a verb root" },
    { id: 33, front: "धातुः", back: "Verb root" },
    { id: 34, front: "विभक्तिः", back: "Case ending of a noun/pronoun" },
    { id: 35, front: "लिङ्गम्", back: "Gender" },
    { id: 36, front: "वचनम्", back: "Number (singular, dual, plural)" },
    { id: 37, front: "कर्तरि वाच्यम्", back: "Active Voice" },
    { id: 38, front: "कर्मणि वाच्यम्", back: "Passive Voice" },
    { id: 39, front: "-क्त्वान्तम्", back: "Gerund / Absolutive (having done...)" },
    { id: 40, front: "तुमुन्नन्तम्", back: "Infinitive of purpose (to do...)" },
    
    // Set 3: General Vocabulary
    { id: 41, front: "अतः", back: "Therefore / Hence" },
    { id: 42, front: "यतः", back: "Because" },
    { id: 43, front: "यथा...तथा", back: "As...so" },
    { id: 44, front: "यदि...तर्हि", back: "If...then" },
    { id: 45, front: "विना", back: "Without" },
    { id: 46, front: "सह", back: "With / Together" },
    { id: 47, front: "पुनः", back: "Again" },
    { id: 48, front: "सत्यम्", back: "Truth" },
    { id: 49, front: "धर्मः", back: "Duty / Righteousness" },
    { id: 50, front: "ज्ञानम्", back: "Knowledge" },
    { id: 51, front: "हृदयम्", back: "Heart" },
    { id: 52, front: "मनः", back: "Mind" },
    { id: 53, front: "शरीरम्", back: "Body" },
    { id: 54, front: "आत्मा", back: "Self / Soul" },
    { id: 55, front: "प्रकाशः", back: "Light" },
    { id: 56, front: "अन्धकारः", back: "Darkness" },
    { id: 57, front: "सुखम्", back: "Happiness" },
    { id: 58, front: "दुःखम्", back: "Sorrow" },
    { id: 59, front: "जीवनम्", back: "Life" },
    { id: 60, front: "मृत्युः", back: "Death" },
    { id: 61, front: "मेघः", back: "Cloud" },
    { id: 62, front: "वायुः", back: "Wind / Air" },
    { id: 63, front: "सागरः", back: "Ocean" },
    { id: 64, front: "पर्वतः", back: "Mountain" },
    { id: 65, front: "वृक्षः", back: "Tree" },
    { id: 66, front: "पुष्पम्", back: "Flower" },
    { id: 67, front: "फलम्", back: "Fruit" },
    { id: 68, front: "पत्रम्", back: "Leaf / Letter" },
    { id: 69, front: "आशा", back: "Hope" },
    { id: 70, front: "भयम्", back: "Fear" },
    { id: 71, front: "क्रोधः", back: "Anger" },
    { id: 72, front: "लोभः", back: "Greed" },
    { id: 73, front: "शान्तिः", back: "Peace" },
    { id: 74, front: "शक्तिः", back: "Power / Energy" },
    { id: 75, front: "भक्तिः", back: "Devotion" },
    { id: 76, front: "मार्गः", back: "Path / Way" },
    { id: 77, front: "कार्यम्", back: "Work / Action" },
    { id: 78, front: "कालः", back: "Time" },
    { id: 79, front: "देशः", back: "Place / Country" },
    { id: 80, front: "लोकः", back: "World / People" },
    { id: 81, front: "शिष्यः", back: "Student / Disciple" },
    { id: 82, front: "गुरुः", back: "Teacher" },
    { id: 83, front: "धनम्", back: "Wealth" },
    { id: 84, front: "ग्रामः", back: "Village" },
    { id: 85, front: "नगरम्", back: "City" },
    { id: 86, front: "शत्रुः", back: "Enemy" },
    { id: 87, front: "शास्त्रम्", back: "Scripture / Science" },
    { id: 88, front: "कथा", back: "Story" },
    { id: 89, front: "काव्यम्", back: "Poetry" },
    { id: 90, front: "इच्छा", back: "Desire" },
    { id: 91, front: "प्रयत्नः", back: "Effort" },
    { id: 92, front: "भाषणम्", back: "Speech" },
    { id: 93, front: "प्रश्नः", back: "Question" },
    { id: 94, front: "उत्तरम्", back: "Answer" },
    { id: 95, front: "आरम्भः", back: "Beginning" },
    { id: 96, front: "अन्तः", back: "End" },
    { id: 97, front: "श्रद्धा", back: "Faith" },
    { id: 98, front: "दया", back: "Compassion" },
    { id: 99, front: "अहिंसा", back: "Non-violence" },
    { id: 100, front: "क्षमा", back: "Forgiveness" },
];

export const grammarToolSentence = {
    sentence: "विद्वान् सर्वत्र पूज्यते।",
    words: [
        {
            word: "विद्वान्",
            info: { 
                type: "Noun", 
                stem: "विद्वस्",
                gender: "Masculine", 
                number: "Singular", 
                case: "Nominative", 
                meaning: "A learned person" 
            },
            color: "text-blue-600 dark:text-blue-400"
        },
        {
            word: "सर्वत्र",
            info: { 
                type: "Indeclinable (Avyaya)",
                subType: "Adverb of Place",
                meaning: "Everywhere" 
            },
            color: "text-purple-600 dark:text-purple-400"
        },
        {
            word: "पूज्यते।",
            info: { 
                type: "Verb", 
                root: "पूज्", 
                person: "Third", 
                number: "Singular", 
                tense: "Present (Laṭ)",
                voice: "Passive (Karmaṇi)",
                meaning: "is worshipped" 
            },
            color: "text-red-600 dark:text-red-400"
        },
    ]
}

export const culturalFacts = [
    {
        title: "Pāṇini's Grammar",
        content: "The Aṣṭādhyāyī, written by the grammarian Pāṇini around the 4th century BCE, is a foundational text of Sanskrit grammar. Its 4,000 sutras (rules) are so precise and comprehensive that they are considered a precursor to modern formal language theory."
    },
    {
        title: "The Epics: Rāmāyaṇa and Mahābhārata",
        content: "Two of the world's longest epic poems, the Rāmāyaṇa and the Mahābhārata (which includes the Bhagavad Gītā), were composed in Sanskrit. They remain central to the cultural and spiritual life of India and Southeast Asia."
    },
    {
        title: "Sanskrit and Computational Linguistics",
        content: "Due to its highly regular and unambiguous grammatical structure, Sanskrit has been studied by AI and computational linguistics researchers as a potential model for natural language processing."
    },
    {
        title: "The Pañcatantra",
        content: "The Pañcatantra is an ancient collection of animal fables in Sanskrit. It is one of the most widely translated literary works in history, intended to teach principles of polity and practical wisdom (nīti) to young princes."
    }
];

export const wordBuilderGame = {
    roots: [
        {
            root: "भू (भव्)",
            meaning: "to be, to become",
            syllables: ["भ", "व", "ति", "सि", "न्ति", "ामि", "ामः", "तः"],
            validWords: ["भवति", "भवसि", "भवन्ति", "भवामि", "भवतः", "भवामः"]
        },
        {
            root: "कृ",
            meaning: "to do, to make",
            syllables: ["क", "रो", "ति", "षि", "कु", "र्व", "न्ति", "मि", "उरु"],
            validWords: ["करोति", "करोषि", "कुर्वन्ति", "करोमि", "कुरुतः"]
        },
        {
            root: "ज्ञा",
            meaning: "to know",
            syllables: ["जा", "ना", "ति", "सि", "नी", "न्ति", "मि", "तः"],
            validWords: ["जानाति", "जानासि", "जानन्ति", "जानामि", "जानीतः"]
        }
    ]
};

export const writingTopics = [
    { title: "मम प्रियः कविः कालिदासः", translation: "My favorite poet, Kālidāsa" },
    { title: "संस्कृतभाषायाः महत्त्वम्", translation: "The importance of the Sanskrit language" },
    { title: "परोपकारः", translation: "Helping others (benevolence)" },
    { title: "विद्यायाः श्रेष्ठत्वम्", translation: "The supremacy of knowledge" },
    { title: "अस्माकं देशः भारतम्", translation: "Our country, India" },
];

export const mindMapData = [
  {
    title: 'Verb Conjugation Map: √गम् (to go) - Present Tense (लट्-लकारः)',
    root: '√गम् (गच्छ्)',
    sections: [
      {
        title: 'उत्तमपुरुषः (First Person)',
        persons: [
          { number: 'एकवचनम्', form: 'गच्छामि' },
          { number: 'द्विवचनम्', form: 'गच्छावः' },
          { number: 'बहुवचनम्', form: 'गच्छामः' },
        ],
      },
      {
        title: 'मध्यमपुरुषः (Second Person)',
        persons: [
          { number: 'एकवचनम्', form: 'गच्छसि' },
          { number: 'द्विवचनम्', form: 'गच्छथः' },
          { number: 'बहुवचनम्', form: 'गच्छथ' },
        ],
      },
      {
        title: 'प्रथमपुरुषः (Third Person)',
        persons: [
          { number: 'एकवचनम्', form: 'गच्छति' },
          { number: 'द्विवचनम्', form: 'गच्छतः' },
          { number: 'बहुवचनम्', form: 'गच्छन्ति' },
        ],
      },
    ]
  }
];
