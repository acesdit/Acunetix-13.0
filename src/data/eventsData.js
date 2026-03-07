import Brainiac from '../assets/Brainiac.webp';
import Bugbounty from '../assets/Bugbounty.webp';
import BuildAThon from '../assets/build-a-thon.webp';
import CodeOfLies from '../assets/codeOfLies.webp';
import CtrlAltElite from '../assets/CtrlAltElite.webp';
import Dpl from '../assets/dpl.webp';
import GameStorm from '../assets/GameStorm.webp';
import TimeScape from '../assets/timeScape.webp';
import TreasureTrove from '../assets/treasure-trove.webp';

const eventsData = [
    {
        id: 'brainiac',
        name: 'BRAINIAC',
        tagline: '"Think Fast, Think Smart"',
        category: 'Quiz Competition',
        categoryIcon: '🧠',
        poster: Brainiac,
        description:
            'A high-voltage quiz battle that pushes your knowledge to the limit. From tech trivia to rapid-fire rounds, only the sharpest minds survive. Gear up for an electrifying challenge that rewards intellect, speed, and nerves of steel.',
        highlights: [
            'Multiple Rounds: Tech, GK, Rapid Fire',
            'Team Size: 2-3',
            'Buzzer Rounds with Penalties',
            'Live Leaderboard',
        ],
        entryFee: '₹59',
        prizePool: '₹4,000',
        date: 'March 7, 2026',
        time: '11:00 AM',
        venue: 'Seminar Hall',
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
        id: 'bugbounty',
        name: 'BUG BOUNTY',
        tagline: '"Hunt The Bugs, Claim The Bounty"',
        category: 'Debugging Challenge',
        categoryIcon: '🐛',
        poster: Bugbounty,
        description:
            'Dive into lines of broken code and hunt down every bug before time runs out. This isn\'t just debugging — it\'s a high-stakes bounty hunt where precision meets speed. Find. Fix. Dominate.',
        highlights: [
            'Languages: C, C++, Python, Java',
            'Solo Event',
            'Time Limit: 60 Minutes',
            'Difficulty: Progressive',
        ],
        entryFee: '₹59 Solo / ₹99 Duo',
        prizePool: '₹3,000',
        date: 'March 7, 2026',
        time: '10:00 AM',
        venue: 'Lab 1',
        registerLink: '#',
        // Poster: dark navy blue bg (#1a2744), yellow BUG title text, blue code icons
        theme: {
            primary: '#e8c840',
            secondary: '#0c1420',
            glow: '#e8c840',
            gradient: 'radial-gradient(ellipse at 50% 0%, rgba(232,200,64,0.12) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(40,80,140,0.25) 0%, transparent 50%), linear-gradient(160deg, #0c1420 0%, #142238 30%, #1a2e4a 60%, #0c1420 100%)',
            particleColor: '#4a80c0',
            marqueeWords: ['DEBUG', 'HACK', 'CODE', 'BOUNTY', 'TERMINAL', 'EXPLOIT', 'PATCH', 'HUNT'],
        },
    },
    {
        id: 'build-a-thon',
        name: 'BUILD-A-THON',
        tagline: '"Build It. Ship It. Own It."',
        category: 'Hackathon',
        categoryIcon: '🚀',
        poster: BuildAThon,
        description:
            'A rapid-fire hackathon where teams design, develop, and deploy solutions to real-world problems in record time. Bring your A-game, your laptop, and your best ideas. Time is ticking — start building.',
        highlights: [
            'Team Size: 3-4',
            'Duration: 4 Hours',
            'Real-World Problem Statements',
            'Mentorship Available',
        ],
        entryFee: '₹49',
        prizePool: '₹3,000',
        date: 'March 7, 2026',
        time: '09:00 AM',
        venue: 'Lab 2',
        registerLink: '#',
        // Poster: deep purple bg (#5b2d8e), white bold title, cyan robot eyes, purple chat bubbles
        theme: {
            primary: '#9b59d0',
            secondary: '#0e0520',
            glow: '#9b59d0',
            gradient: 'radial-gradient(ellipse at 40% 15%, rgba(155,89,208,0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 85%, rgba(90,40,160,0.25) 0%, transparent 50%), linear-gradient(160deg, #0e0520 0%, #1c0c38 30%, #2d1450 60%, #0e0520 100%)',
            particleColor: '#9b59d0',
            marqueeWords: ['BUILD', 'SHIP', 'HACK', 'CODE', 'DEPLOY', 'AI', 'CREATE', 'LAUNCH'],
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
            'Deception meets strategy in this thrilling game of bluffs and code. Outsmart your opponents, plant false clues, and uncover the truth hidden beneath layers of lies. Only the most cunning will prevail.',
        highlights: [
            'Solo / Duo Modes',
            'Multiple Elimination Rounds',
            'Strategy & Bluffing Based',
            'Surprise Twists Each Round',
        ],
        entryFee: '₹59 Solo / ₹99 Duo',
        prizePool: '₹5,000',
        date: 'March 7, 2026',
        time: '01:00 PM',
        venue: 'Room 301',
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
        tagline: '"Reboot. Rewrite. Reign."',
        category: 'Coding Contest',
        categoryIcon: '⌨️',
        poster: CtrlAltElite,
        description:
            'The ultimate competitive programming showdown. Tackle algorithmic challenges that test your logic, speed, and coding mastery. Only the elite coders will survive the final round.',
        highlights: [
            'Solo Event',
            'DSA + Competitive Programming',
            'Time Limit: 90 Minutes',
            'Platform: HackerRank',
        ],
        entryFee: '₹59 Solo / ₹99 Duo',
        prizePool: '₹6,000',
        date: 'March 7, 2026',
        time: '02:00 PM',
        venue: 'Lab 3',
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
        tagline: '"Draft. Play. Lead."',
        category: 'Auction League',
        categoryIcon: '🏏',
        poster: Dpl,
        description:
            'Step into the shoes of a team owner in this electrifying auction-based league. Draft your dream team, strategize your bids, and lead your squad to victory in a battle of wits and cricket knowledge.',
        highlights: [
            'Team Size: 4-5',
            'Auction-Based Drafting',
            'Fantasy Cricket Format',
            'Live Match Simulation',
        ],
        entryFee: '₹149',
        prizePool: '₹5,000',
        date: 'March 7, 2026',
        time: '03:00 PM',
        venue: 'Auditorium',
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
        id: 'gamestorm',
        name: 'GAME STORM',
        tagline: '"#FightToWin"',
        category: 'Gaming Tournament',
        categoryIcon: '🎮',
        poster: GameStorm,
        description:
            'Valorant. Free Fire. Call of Duty. FC25. The arena is open — only the elite survive. Drop in, gear up, prove you\'re the last one standing.',
        highlights: [
            'Games: Valorant, Free Fire, CoD, FC25',
            'Solo & Squad Modes',
            'Live Leaderboard',
            'LAN Setup Available',
        ],
        entryFee: '₹70–₹250',
        prizePool: '₹10,000+',
        date: 'March 7, 2026',
        time: '10:00 AM',
        venue: 'Gaming Zone',
        registerLink: '#',
        // Poster: very dark/black bg, fire orange explosions (#e85020), dark smoky, military, orange sidebar
        theme: {
            primary: '#e85020',
            secondary: '#0d0604',
            glow: '#e85020',
            gradient: 'radial-gradient(ellipse at 50% 0%, rgba(232,80,32,0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, rgba(200,60,10,0.15) 0%, transparent 40%), radial-gradient(ellipse at 20% 80%, rgba(100,30,5,0.2) 0%, transparent 50%), linear-gradient(160deg, #0d0604 0%, #1c0e08 30%, #2a1410 60%, #0d0604 100%)',
            particleColor: '#e85020',
            marqueeWords: ['VALORANT', 'FREE FIRE', 'CALL OF DUTY', 'FC25', 'ESPORTS', 'PVP', 'ARENA', 'FIGHT'],
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
            'You are locked in. The clock is ticking. Find hidden mechanisms, crack encrypted codes, and dismantle the room\'s secrets before time collapses.',
        highlights: [
            'Team Size: 3-5',
            'Time Limit: 45 Minutes',
            'Difficulty: Expert',
            'Theme: Cyber Vault',
        ],
        entryFee: '₹199',
        prizePool: '₹3,000',
        date: 'March 7, 2026',
        time: '12:00 PM',
        venue: 'Room 105',
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
            'Embark on the ultimate treasure hunt across the campus. Decode cryptic clues, navigate hidden paths, and race against rival teams to unearth the grand treasure. Adventure awaits the bold.',
        highlights: [
            'Team Size: 3-4',
            'Campus-Wide Hunt',
            'Cryptic Clue-Based',
            'Multiple Checkpoints',
        ],
        entryFee: '₹299',
        prizePool: '₹8,000',
        date: 'March 7, 2026',
        time: '11:00 AM',
        venue: 'Campus Grounds',
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
