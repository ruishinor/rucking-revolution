const fs = require('fs');

const filePath = 'src/data/quotes.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Match text: "..." patterns and truncate if over 150 chars
content = content.replace(/text: "([^"]+)"/g, (match, text) => {
  if (text.length > 150) {
    // Truncate at 150 chars, try to break at a word boundary
    let truncated = text.substring(0, 150);
    // Find last space before cutoff to avoid cutting mid-word
    const lastSpace = truncated.lastIndexOf(' ');
    if (lastSpace > 100) {
      truncated = truncated.substring(0, lastSpace);
    }
    // Add ellipsis if we truncated
    if (truncated.length < text.length) {
      truncated += '...';
    }
    return `text: "${truncated}"`;
  }
  return match;
});

fs.writeFileSync(filePath, content);
console.log('Done truncating quotes over 150 characters');
