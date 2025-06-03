const emojis = [
    "🐱‍👤", "😢", "👀", "😃", "🤷‍♂️", "👨‍💻", "🍌", "🎮",
    "🐱‍👤", "😢", "👀", "😃", "🤷‍♂️", "👨‍💻", "🍌", "🎮"
];
let openCards = [];

let shuffledEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);

for(let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffledEmojis[i];
    document.querySelector(".game").appendChild(box);
}