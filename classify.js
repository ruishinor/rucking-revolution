const fs = require('fs');
const path = require('path');

// Directories to ignore
const ignoreDirs = new Set([
  'node_modules',
  '.git',
  'dist',
  '.astro',
  '.vercel',
  '.agents',
  '.qodo',
  '.claude',
  '.cursor',
  '.gemini',
  '_bmad',
  '_bmad-output',
  'project-documents-ugc',
  'docs/qa/module-01' // ignore the image files in module-01 for now, we'll handle them by extension
]);

// Visual file extensions
const visualExtensions = new Set(['.css', '.scss', '.sass', '.less']);

// Image extensions (we'll treat as non-visual unless in design directories)
const imageExtensions = new Set(['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico']);

// Design directories for images and CSS
const designDirs = new Set([
  'src/styles',
  'public/brand-build/assets'
]);

// Keywords that indicate visual manipulation in JS/TS
const visualKeywords = [
  /document\.getElementById/i,
  /document\.querySelector/i,
  /classList\./i,
  /style\./i,
  /setAttribute.*(class|style)/i,
  /window\.getComputedStyle/i,
  /getBoundingClientRect/i,
  /offsetWidth/i,
  /offsetHeight/i,
  /clientWidth/i,
  /clientHeight/i
];

// Function to check if a path is in an ignored directory
function isIgnored(filePath) {
  const parts = filePath.split(path.sep);
  for (const part of parts) {
    if (ignoreDirs.has(part)) {
      return true;
    }
  }
  return false;
}

// Function to get the relative path from the project root
function getRelativePath(filePath) {
  return path.relative(process.cwd(), filePath);
}

// Function to check if a file is visual based on extension and directory
function isVisualByExtension(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (visualExtensions.has(ext)) {
    return true;
  }
  // Tailwind config is visual
  if (filePath.endsWith('tailwind.config.cjs')) {
    return true;
  }
  return false;
}

// Function to check if an image file is likely part of the design
function isDesignImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!imageExtensions.has(ext)) {
    return false;
  }
  // Check if the file is in a design directory
  const relative = getRelativePath(filePath);
  for (const dir of designDirs) {
    if (relative.startsWith(dir + path.sep) || relative === dir) {
      return true;
    }
  }
  // Also consider images in src/components or src/pages that are used as icons/logos? Hard to know.
  // We'll skip for now.
  return false;
}

// Function to check JS/TS file for visual keywords
async function hasVisualKeywords(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    for (const regex of visualKeywords) {
      if (regex.test(content)) {
        return true;
      }
    }
    return false;
  } catch (err) {
    console.error(`Error reading ${filePath}: ${err}`);
    return false; // Assume non-visual on error
  }
}

// Function to check Astro file for visual indicators (class or style attributes)
async function hasAstroVisualIndicators(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    // Look for class or style attributes in HTML tags
    const classRegex = /class\s*=/i;
    const styleRegex = /style\s*=/i;
    return classRegex.test(content) || styleRegex.test(content);
  } catch (err) {
    console.error(`Error reading ${filePath}: ${err}`);
    return false;
  }
}

// Main function to walk the directory
async function walkDir(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const results = [];

  for (const entry of entries) {
    if (isIgnored(entry.name)) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subResults = await walkDir(fullPath);
      results.push(...subResults);
    } else {
      const relativePath = getRelativePath(fullPath);
      let isVisual = false;
      let reason = '';

      // Check by extension and known visual files
      if (isVisualByExtension(fullPath)) {
        isVisual = true;
        reason = 'CSS or Tailwind config';
      }
      // Check for design images
      else if (isDesignImage(fullPath)) {
        isVisual = true;
        reason = 'Design image asset';
      }
      // Check Astro and HTML files
      else if (['.astro', '.html'].includes(path.extname(fullPath))) {
        // Check if it's an API route (for Astro)
        if (path.extname(fullPath) === '.astro' && relativePath.startsWith('src/pages/api' + path.sep)) {
          isVisual = false;
          reason = 'API route (no visual output)';
        } else {
          // Check for visual indicators in the content
          const hasIndicators = await hasAstroVisualIndicators(fullPath);
          if (hasIndicators) {
            isVisual = true;
            reason = 'Contains class or style attributes (visual component)';
          } else {
            isVisual = false;
            reason = 'No visual indicators found (likely pure content or data)';
          }
        }
      }
      // Check JS/TS files
      else if (['.js', '.ts'].includes(path.extname(fullPath))) {
        const hasKeywords = await hasVisualKeywords(fullPath);
        if (hasKeywords) {
          isVisual = true;
          reason = 'Contains DOM or style manipulation keywords';
        } else {
          isVisual = false;
          reason = 'No visual manipulation keywords found';
        }
      }
      // Everything else is non-visual by default
      else {
        isVisual = false;
        reason = 'Not a visual file type (data, config, documentation, etc.)';
      }

      if (!isVisual) {
        results.push({
          path: relativePath,
          reason: reason
        });
      }
    }
  }

  return results;
}

// Run the walk
walkDir(process.cwd())
  .then(results => {
    // Sort by path for consistent output
    results.sort((a, b) => a.path.localeCompare(b.path));
    // Output as JSON for easy consumption
    console.log(JSON.stringify(results, null, 2));
  })
  .catch(err => {
    console.error('Error walking directory:', err);
    process.exit(1);
  });