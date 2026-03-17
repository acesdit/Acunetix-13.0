import Brainiac from '../assets/Brainiac.webp';
import CodeOfLies from '../assets/codeOfLies.webp';
import CtrlAltElite from '../assets/CtrlAltElite.webp';
import Dpl from '../assets/dpl.webp';
import TimeScape from '../assets/timeScape.webp';
import TreasureTrove from '../assets/treasure-trove.webp';

const eventsData = [
    {
        id: 'brainiac',
        name: 'BRAINIAC',
        tagline: '"Think Fast, Think Smart"',
        category: 'Placement Preparation Challenge',
        categoryIcon: '🧠',
        poster: Brainiac,
        description:
            'A placement preparation challenge designed to test your aptitude, communication, and interview skills through three intense rounds—Aptitude Test, Group Discussion, and Mock Interview. Compete solo, refine your problem-solving abilities, and gain real-world interview experience. Showcase your potential and take a step closer to your dream job!',
        highlights: [
            'Multiple Rounds: Aptitude Test, Group Discussion, Mock Interview',
            'Solo Competition Format',
            'Real-World Interview Simulation',
            'Boost Placement Readiness',
        ],
        entryFee: '₹79',
        prizePool: '₹3,000',
        date: 'March 27,28,29 2026',
        //time: '11:00 AM',
        //venue: 'Seminar Hall',
        registerLink: '#',
        // Poster: warm sandy/orange beige bg, orange clipboards, brown text
        theme: {
            primary: '#d4883c',
            secondary: '#1a1008',
            glow: '#d4883c',
            gradient: 'radial-gradient(ellipse at 30% 20%, rgba(212,136,60,0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(180,110,40,0.2) 0%, transparent 50%), linear-gradient(160deg, #1a1008 0%, #2e1c0c 30%, #3d2812 60%, #1a1008 100%)',
            particleColor: '#d4883c',
            marqueeWords: ['QUIZ', 'BRAINIAC', 'KNOWLEDGE', 'TRIVIA', 'RAPID FIRE', 'INTELLECT', 'BUZZER', 'THINK'],
        },
    },
    {
        id: 'codeoflies',
        name: 'CODE OF LIES',
        tagline: '"Trust No One"',
        category: 'Mind Games',
        categoryIcon: '🃏',
        poster: CodeOfLies,
        description:
            'A thrilling cryptic hunt that challenges participants to decode mind-boggling puzzles and unravel mysteries. The event takes participants on a journey through a series of thought-provoking challenges that require sharp logic and creativity. This is the perfect event to push your intellectual limits.',
        highlights: [
            'Cryptic Puzzle Hunt Experience',
            'Mind-Boggling Challenges',
            'Journey of Clues & Codes',
            'Push Your Intellectual Limits',
        ],
        entryFee: '₹79 Solo / ₹119 Duo',
        prizePool: '₹6,000',
        date: 'March 27,28,29 2026',
        //time: '01:00 PM',
        //venue: 'Room 301',
        registerLink: '#',
        // Poster: brown/sepia vintage bg (#6b4226), dark orange title, playing cards, question marks
        theme: {
            primary: '#c26a18',
            secondary: '#120a04',
            glow: '#c26a18',
            gradient: 'radial-gradient(ellipse at 50% 20%, rgba(194,106,24,0.2) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(107,66,38,0.3) 0%, transparent 50%), linear-gradient(160deg, #120a04 0%, #25180c 30%, #3a2414 60%, #120a04 100%)',
            particleColor: '#c26a18',
            marqueeWords: ['BLUFF', 'DECEIVE', 'STRATEGY', 'CARDS', 'LIES', 'TRUTH', 'CUNNING', 'MYSTERY'],
        },
    },
    {
        id: 'ctrlaltelite',
        name: 'CTRL+ALT+ELITE',
        tagline: '"Code. Compete. Conquer."',
        category: 'Coding Contest',
        categoryIcon: '⌨️',
        poster: CtrlAltElite,
        description:
            'An electrifying coding competition where the best prevail! Compete solo or in a duo through three intense rounds—an MCQ-based challenge, a debugging round, and a final coding battle where you can use any programming language. Test your skills, solve complex problems, and prove your coding prowess. Exciting cash prizes, rewards, and goodies await the champions. Register now and step into the ultimate coding battlefield!',
        highlights: [
            'Solo or Duo Participation',
            'Three Rounds: MCQ, Debugging, Final Coding Battle',
            'Use Any Programming Language',
            'Exciting Cash Prizes & Rewards',
        ],
        entryFee: '₹79 Solo / ₹119 Duo',
        prizePool: '₹6,000',
        date: 'March 27,28,29 2026',
        //time: '02:00 PM',
        //venue: 'Lab 3',
        registerLink: '#',
        // Poster: dark teal/dark cyan-green bg (#0f3038), aqua/teal highlights (#4ac8c8), code editor
        theme: {
            primary: '#4ac8c8',
            secondary: '#06181c',
            glow: '#4ac8c8',
            gradient: 'radial-gradient(ellipse at 40% 10%, rgba(74,200,200,0.2) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(15,48,56,0.5) 0%, transparent 50%), linear-gradient(160deg, #06181c 0%, #0c2a30 30%, #103840 60%, #06181c 100%)',
            particleColor: '#4ac8c8',
            marqueeWords: ['CODE', 'ALGORITHM', 'DSA', 'COMPETE', 'ELITE', 'LOGIC', 'HACKERRANK', 'SPEED'],
        },
    },
    {
        id: 'dpl',
        name: 'DPL',
        tagline: '"Think Like a Captain. Bid Like a Champion."',
        category: 'The Cricket League',
        categoryIcon: '🏏',
        poster: Dpl,
        description:
            'Are you ready to test your cricket knowledge, strategic skills, and auction tactics? From a thrilling Cricket Quiz to an IPL-style Auction, this event is your chance to craft the perfect XI and compete for glory! Round 1: General Quiz Round on Cricket Round 2: Image Recognition Quiz Round 3: IPL Auction',
        highlights: [
            'Cricket Quiz + IPL-Style Auction Experience',
            'Three Rounds: General Quiz, Image Recognition, Auction',
            'Build Your Perfect Playing XI',
            'Test Cricket Knowledge & Strategy Skills',
        ],
        entryFee: '₹179',
        prizePool: '₹4,000',
        date: 'March 27,28,29 2026',
        //time: '03:00 PM',
        //venue: 'Auditorium',
        registerLink: '#',
        // Poster: dark navy blue bg (#1a2856), bright yellow trophy (#e8d020), yellow bottom section
        theme: {
            primary: '#e8d020',
            secondary: '#0a0e20',
            glow: '#e8d020',
            gradient: 'radial-gradient(ellipse at 50% 30%, rgba(232,208,32,0.12) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(26,40,86,0.5) 0%, transparent 50%), linear-gradient(160deg, #0a0e20 0%, #141e3a 30%, #1a2856 60%, #0a0e20 100%)',
            particleColor: '#3858a0',
            marqueeWords: ['AUCTION', 'DRAFT', 'CRICKET', 'LEAGUE', 'STRATEGY', 'BID', 'CAPTAIN', 'PLAY'],
        },
    },
    {
        id: 'timescape',
        name: 'ESCAPE ROOM',
        tagline: '"There Is No Way Out"',
        category: 'Puzzle Challenge',
        categoryIcon: '🔐',
        poster: TimeScape,
        description:
            'A mind-bending escape room experience where nothing is as it seems! Step into a world of shifting realities, crack intricate puzzles, and unravel secrets that defy time. Work in teams, test your wit, and escape before the illusion traps you forever. Do you have what it takes?',
        highlights: [
            'Mind-Bending Escape Room Experience',
            'Time-Bound Escape Challenge',
            'Intricate Clues & Hidden Secrets',
            'Race Against Time to Escape',
        ],
        entryFee: '₹249',
        prizePool: '₹3,000',
        date: 'March 27,28,29 2026',
        //time: '12:00 PM',
        //venue: 'Room 105',
        registerLink: '#',
        // Poster: dark indigo-purple bg (#1a1040), bright violet-blue door, purple jigsaw pieces, purple glow rays
        theme: {
            primary: '#7b68ee',
            secondary: '#08041a',
            glow: '#7b68ee',
            gradient: 'radial-gradient(ellipse at 50% 40%, rgba(123,104,238,0.25) 0%, transparent 50%), radial-gradient(ellipse at 20% 10%, rgba(80,50,180,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(60,30,140,0.15) 0%, transparent 40%), linear-gradient(160deg, #08041a 0%, #120a30 30%, #1a1048 60%, #08041a 100%)',
            particleColor: '#7b68ee',
            marqueeWords: ['TICKING', 'CODES', 'ESCAPE', 'PUZZLE', 'VAULT', 'CIPHER', 'LOCKED', 'TIME'],
        },
    },
    {
        id: 'treasure-trove',
        name: 'TREASURE TROVE',
        tagline: '"Seek and You Shall Find"',
        category: 'Adventure Hunt',
        categoryIcon: '🗺️',
        poster: TreasureTrove,
        description:
            'An exciting treasure hunt that takes teams on a quest.Solve intricate clues and tackle challenges to uncover hidden treasures. Get ready to put your problem-solving skills to the ultimate test ',
        highlights: [
            'Thrilling Team-Based Treasure Hunt',
            'Intricate Clues & Hidden Challenges',
            'Adventure-Filled Quest Experience',
            'Race to Find the Hidden Treasure',
        ],
        entryFee: '₹299',
        prizePool: '₹5,000',
        date: 'March 27,28,29 2026',
        //time: '11:00 AM',
        //venue: 'Campus Grounds',
        registerLink: '#',
        // Poster: dark charcoal/brown border, sandy/tan parchment center, dark brown title text, gold coins
        theme: {
            primary: '#c49a5c',
            secondary: '#100c06',
            glow: '#c49a5c',
            gradient: 'radial-gradient(ellipse at 50% 30%, rgba(196,154,92,0.2) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(80,60,30,0.3) 0%, transparent 50%), linear-gradient(160deg, #100c06 0%, #221a0e 30%, #342816 60%, #100c06 100%)',
            particleColor: '#c49a5c',
            marqueeWords: ['TREASURE', 'HUNT', 'ADVENTURE', 'CLUES', 'EXPLORE', 'DISCOVER', 'GOLD', 'QUEST'],
        },
    },
];

export default eventsData;