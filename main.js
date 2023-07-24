// Arrays containing different pieces of data for the messages
const firstPart = [
    "You are destined for greatness",
    "Today is your lucky day",
    "Believe in yourself",
    "Embrace new opportunities",
    "Stay positive and focused"
];

const secondPart = [
    "and you will achieve your dreams.",
    "so make the most of it!",
    "and great things will happen.",
    "and you'll find success.",
    "and your future is bright."
];

const thirdPart = [
    "Keep going!",
    "You've got this!",
    "Success is within reach!",
    "You are unstoppable!",
    "The world needs your brilliance!"
];

// Function to generate a random message
function generateMessage() {
    const randomIndex1 = Math.floor(Math.random() * firstPart.length);
    const randomIndex2 = Math.floor(Math.random() * secondPart.length);
    const randomIndex3 = Math.floor(Math.random() * thirdPart.length);

    const message =
        firstPart[randomIndex1] +
        " " +
        secondPart[randomIndex2] +
        " " +
        thirdPart[randomIndex3];

    return message;
}

// Output a random message
console.log(generateMessage());
