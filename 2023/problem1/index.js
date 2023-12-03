const text = await Deno.readTextFile("./input.txt");
const lines = text.split("\n");

let sum = 0;
for (let i = 0; i < lines.length - 1; i++) {
    let arr = [];
    const chars = lines[i].split("");
    for (let j = 0; j < chars.length; j++) {
        if (/\d/.test(chars[j])) {
            arr.push(chars[j]);
        }
    }
    let num = Number(arr[0] + arr[arr.length - 1]);
    sum += num;
}
console.log("First problem sum: " + sum);

// Second problem w/Regex
const numberMap = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
}

sum = 0;
const pattern = /(?=(one|two|three|four|five|six|seven|eight|nine|[0-9]))/g;

for (let i = 0; i < lines.length-1; i++) {
    let matches = Array.from(lines[i].matchAll(pattern));
    let first = new String(parseElement(matches[0][1]));
    let last = new String(parseElement(matches[matches.length-1][1]));
    let num = Number(first + last);
    sum += num;
}

function parseElement(element) {
    let isNumber = /\d/.test(element);
    return isNumber ? element : numberMap[element];
}

console.log("Second problem sum: " + sum);