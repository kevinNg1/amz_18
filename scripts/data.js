const dialogue = document.getElementById("dialogue");
const enemyImg = document.querySelector(".enemy-sprite img");
const hpBar = document.getElementById("enemyHp");
const hpText = document.getElementById("enemyHpText");

const questions = [
    {
        q: "What’s my favorite food?",
        a: [
            { text: "Sushi 🍣", correct: true },
            { text: "Burger 🍔", correct: false },
            { text: "Burger 🍔", correct: false },
            { text: "Pizza 🍕", correct: false }
        ]
    },
    {
        q: "Where did we first meet?",
        a: [
            { text: "School 🏫", correct: true },
            { text: "Cafe ☕", correct: false },
            { text: "Cafe ☕", correct: false },
            { text: "Random place 🚶", correct: false }
        ]
    },
    {
        q: "What do I like most about you?",
        a: [
            { text: "Your smile 😊", correct: true },
            { text: "Your phone 📱", correct: false },
            { text: "Cafe ☕", correct: false },
            { text: "Your snacks 🍕", correct: false }
        ]
    }
];