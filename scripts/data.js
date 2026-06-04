const dialogue = document.getElementById("dialogue");
const hpBar = document.getElementById("enemyHp");
const hpText = document.getElementById("enemyHpText");

const questions = [
    {
        q: "What’s our go-to food when we hang out?",
        a: [
            { text: "Sushi 🍣", correct: false },
            { text: "Fast food 🍔", correct: true },
            { text: "Instant noodles 🍜", correct: false },
            { text: "Random snacks 🍕", correct: false }
        ]
    },
    // {
    //     q: "What is our favourite thing to eat?",
    //     a: [
    //         { text: "Potatoes 🥔", correct: true },
    //         { text: "Burgers 🍔", correct: false },
    //         { text: "Bánh mì 🥖", correct: false },
    //         { text: "Fried chicken 🍗", correct: false }
    //     ]
    // },
    // {
    //     q: "Where was our first proper hangout?",
    //     a: [
    //         { text: "Gym 🏋️", correct: true },
    //         { text: "Shopping centre 🛍️", correct: false },
    //         { text: "Cafe ☕", correct: false },
    //         { text: "Park 🌳", correct: false }
    //     ]
    // },
    // {
    //     q: "What Pokémon type are our favourite Pokémon?",
    //     a: [
    //         { text: "Fairy 💖", correct: false },
    //         { text: "Fire 🔥", correct: false },
    //         { text: "Water 💧", correct: true },
    //         { text: "Steel ⚙️", correct: false }
    //     ]
    // },
    // {
    //     q: "Which Pokémon starter would we choose together?",
    //     a: [
    //         { text: "Piplup & Tepig 🔥", correct: false },
    //         { text: "Piplup & Totodile 💧", correct: false },
    //         { text: "Piplup & Oshawott 🌊", correct: false },
    //         { text: "Piplup & Squirtle 🐢", correct: true }
    //     ]
    // },
    // {
    //     q: "What question is asked daily?",
    //     a: [
    //         { text: "Where to eat 🍽️", correct: false },
    //         { text: "What’s for dinner 🍜", correct: true },
    //         { text: "What’s the weather today ☁️", correct: false },
    //         { text: "Should we sleep? 💤", correct: false }
    //     ]
    // },
    // {
    //     q: "Which trading card game would we play together?",
    //     a: [
    //         { text: "Pokémon 🃏", correct: true },
    //         { text: "Yu-Gi-Oh! 🧙", correct: false },
    //         { text: "Gundam Cards 🤖", correct: false },
    //         { text: "We don’t play games 🎮", correct: false }
    //     ]
    // },
    // {
    //     q: "What sport would we watch together?",
    //     a: [
    //         { text: "Soccer ⚽", correct: false },
    //         { text: "Basketball 🏀", correct: true },
    //         { text: "Tennis 🎾", correct: false },
    //         { text: "Esports 🎮", correct: false }
    //     ]
    // },
    // {
    //     q: "What gets playfully teased the most?",
    //     a: [
    //         { text: "Head 😵", correct: false },
    //         { text: "Arms 💪", correct: false },
    //         { text: "Cheeks 😊", correct: true },
    //         { text: "Shoulders 🧥", correct: false }
    //     ]
    // },
    // {
    //     q: "What’s our ‘comfort activity’?",
    //     a: [
    //         { text: "Watching a show together 📺", correct: true },
    //         { text: "Walking outdoors 🌳", correct: false },
    //         { text: "Shopping 🛍️", correct: false },
    //         { text: "Doom scrolling 📱", correct: false }
    //     ]
    // },
    // {
    //     q: "What’s our ideal date idea?",
    //     a: [
    //         { text: "Luxury restaurant 🍷", correct: false },
    //         { text: "Beach vacation 🏖️", correct: false },
    //         { text: "Arcade + food combo 🎮🍜", correct: true },
    //         { text: "Stay at home together 🏠", correct: false }
    //     ]
    // }
];