const fs = require('fs');
const content = fs.readFileSync('src/data/quotes.ts', 'utf8');
const regex = /text: "([^"]+)"/g;
let match;
let longQuotes = [];
while ((match = regex.exec(content)) !== null) {
  if (match[1].length > 150) {
    longQuotes.push({ len: match[1].length, line: match[0].substring(0, 80) });
  }
}
console.log('Total over 150 chars:', longQuotes.length);
longQuotes.forEach((q, i) => console.log(`${i+1}. [${q.len}] ${q.line}...`));