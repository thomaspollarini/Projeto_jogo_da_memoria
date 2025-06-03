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
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}


function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        openCards.push(this);
        if (openCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards.forEach(card => card.classList.add("boxMatch"));
        openCards = [];
        if (document.querySelectorAll(".boxMatch").length === shuffledEmojis.length) {
            setTimeout(() => alert("You win!"), 200);
        }
    } else {
        setTimeout(() => {
            openCards.forEach(card => card.classList.remove("boxOpen"));
            openCards = [];
        }, 500);
    }
}