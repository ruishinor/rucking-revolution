const fs = require('fs');

const filePath = 'src/data/quotes.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Remove entire quote blocks where text is over 150 characters
// The file uses 4-space indentation for text/source, 2-space for braces
const quoteBlockRegex = /  \{\r?\n    text: "([^"]+)",\r?\n    source: "[^"]*"\r?\n  \},?\r?\n?/g;

let removedCount = 0;
content = content.replace(quoteBlockRegex, (match, text) => {
  if (text.length > 150) {
    removedCount++;
    return '';
  }
  return match;
});

// Clean up any double newlines left behind
content = content.replace(/\n\n\n+/g, '\n\n');

fs.writeFileSync(filePath, content);
console.log(`Removed ${removedCount} quotes with text over 150 characters`);
