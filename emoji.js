const emojis = [
  { emoji: "😀", keywords: ["happy", "smile", "face"] },
  { emoji: "❤️", keywords: ["heart", "love"] },
  { emoji: "🌸", keywords: ["flower", "blossom"] },
  { emoji: "🐱", keywords: ["cat", "kitty"] },
  { emoji: "🐶", keywords: ["dog", "puppy"] },
  { emoji: "🍕", keywords: ["pizza", "food"] },
  { emoji: "🌞", keywords: ["sun", "sunny"] },
  { emoji: "🌈", keywords: ["rainbow", "colorful"] },
  { emoji: "🎉", keywords: ["celebration", "party"] },
  { emoji: "🚀", keywords: ["rocket", "space"] },
  { emoji: "🦄", keywords: ["unicorn", "magical"] },
  { emoji: "🍦", keywords: ["ice cream", "dessert"] },
  { emoji: "🎈", keywords: ["balloon", "celebrate"] },
  { emoji: "🐬", keywords: ["dolphin", "ocean"] },
  { emoji: "🌊", keywords: ["wave", "water"] },
  { emoji: "🎵", keywords: ["music", "note"] },
  { emoji: "🎮", keywords: ["game", "controller"] },
  { emoji: "🍔", keywords: ["burger", "food"] },
  { emoji: "🚲", keywords: ["bike", "cycling"] },
  { emoji: "🌍", keywords: ["earth", "globe"] },
  { emoji: "🌟", keywords: ["star", "glow"] },
  { emoji: "🌻", keywords: ["sunflower", "plant"] },
  { emoji: "🐠", keywords: ["fish", "aquatic"] },
  { emoji: "📚", keywords: ["book", "reading"] },
  { emoji: "🍂", keywords: ["fall", "autumn"] },
  { emoji: "🍁", keywords: ["maple leaf", "fall"] },
  { emoji: "⏰", keywords: ["clock", "time"] },
  { emoji: "📷", keywords: ["camera", "photo"] },
  { emoji: "🍩", keywords: ["doughnut", "food"] },
  { emoji: "🚁", keywords: ["helicopter", "fly"] },
  { emoji: "🌴", keywords: ["palm tree", "tropical"] },
  { emoji: "🎶", keywords: ["musical notes", "song"] },
  { emoji: "🏖️", keywords: ["beach", "vacation"] },
  { emoji: "🎨", keywords: ["palette", "painting"] },
  { emoji: "🚤", keywords: ["speedboat", "water"] },
  { emoji: "🌮", keywords: ["taco", "food"] },
  { emoji: "🌠", keywords: ["shooting star", "night"] },
  { emoji: "📱", keywords: ["mobile phone", "cell"] },
  { emoji: "🎃", keywords: ["jack-o-lantern", "halloween"] },
  { emoji: "🍰", keywords: ["cake", "dessert"] },
  { emoji: "🌧️", keywords: ["cloud with rain", "weather"] },
  { emoji: "🏞️", keywords: ["national park", "nature"] },
  { emoji: "🎤", keywords: ["microphone", "music"] },
  { emoji: "🎸", keywords: ["guitar", "music"] },
  { emoji: "🏄‍♂️", keywords: ["surfing", "water"] },
  { emoji: "🎓", keywords: ["graduation cap", "education"] },
  { emoji: "🍎", keywords: ["apple", "fruit"] },
  { emoji: "🎥", keywords: ["movie camera", "film"] },
  { emoji: "🌃", keywords: ["night with stars", "city"] },
  { emoji: "📮", keywords: ["postbox", "mail"] },
  { emoji: "🎄", keywords: ["Christmas tree", "holiday"] },
  { emoji: "🎁", keywords: ["gift", "present"] },
  { emoji: "🌓", keywords: ["first quarter moon", "night"] },
  { emoji: "🐦", keywords: ["bird", "nature"] },
];


const searchInput = document.getElementById("search-input");
const results = document.getElementById("results");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredEmojis = emojis.filter(emoji =>
    emoji.keywords.some(keyword => keyword.includes(searchTerm))
  );
  
  renderEmojis(filteredEmojis);
});

function renderEmojis(emojiArray) {
  results.innerHTML = "";

  if (emojiArray.length === 0) {
    const noResultsMessage = document.createElement("div");
    noResultsMessage.textContent = "Emoji not found.";
    results.appendChild(noResultsMessage);
    return;
  }
  
  emojiArray.forEach(emoji => {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
    emojiDiv.textContent = emoji.emoji;
    results.appendChild(emojiDiv);
  });
}
