var nameList = [
    "Alice",
    "Aaron",
    "Benjamin",
    "Bella",
    "Charlotte",
    "Caleb",
    "Daniel",
    "Diana",
    "Ethan",
    "Emma",
    "Felix",
    "Fiona",
    "George",
    "Grace",
    "Henry",
    "Hannah",
    "Isaac",
    "Isabella",
    "Jack",
    "Julia",
    "Kevin",
    "Katherine",
    "Liam",
    "Lily",
    "Michael",
    "Mia",
    "Nathan",
    "Nora",
    "Oliver",
    "Olivia",
    "Patrick",
    "Penelope",
    "Quentin",
    "Quinn",
    "Ryan",
    "Rebecca",
    "Samuel",
    "Sophia",
    "Thomas",
    "Thea",
    "Ulysses",
    "Uma",
    "Victor",
    "Violet",
    "William",
    "Willow",
    "Xavier",
    "Xena",
    "Yusuf",
    "Yasmin",
    "Zachary",
    "Zoe"
  ];
  

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

export function generateRandomMessage() {
    let length = 20;
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
  
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
  
    const emojis = ["🚀", "🔥", "🎉", "😂", "💡", "🎯", "🚨", "⚡", "🎵", "💖"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  
    return result + randomEmoji;
  }
  