const fs = require('fs');

// Read the quotes file
const content = fs.readFileSync('src/data/quotes.ts', 'utf8');

// Extract the quotes array
const match = content.match(/export const quotes: Quote\[\] = \[([\s\S]*)\];/);
if (!match) {
  console.error('Could not find quotes array');
  process.exit(1);
}

// Parse quotes (simple manual parsing since it's TypeScript)
const quotesText = match[1];
const quoteItems = quotesText.split(/\s*\},\s*/).filter(item => item.trim());

let keptCount = 0;
let removedCount = 0;
const filteredQuotes = [];

for (const item of quoteItems) {
  if (!item.trim()) continue;
  
  const textMatch = item.match(/text:\s*"([^"]*?)"/);
  if (!textMatch) continue;
  
  const text = textMatch[1];
  if (text.length <= 150) {
    filteredQuotes.push(item.trim() + (item.trim().endsWith(',') ? '' : ','));
    keptCount++;
  } else {
    removedCount++;
    console.log(`Removed: "${text.substring(0, 50)}..." (${text.length} chars)`);
  }
}

// Rebuild the file
const newContent = content.replace(
  /export const quotes: Quote\[\] = \[[\s\S]*\];/,
  `export const quotes: Quote[] = [\n${filteredQuotes.join('\n').replace(/,$/, '')}\n];`
);

fs.writeFileSync('src/data/quotes.ts', newContent);
console.log(`\nFiltered quotes: kept ${keptCount}, removed ${removedCount}`);
