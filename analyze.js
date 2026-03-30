const fs = require('fs');
const path = require('path');

// Directories to ignore (same as classify.js)
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

// Visual file extensions (from classify.js)
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

// Function to check if a visual file affects content
async function affectsContent(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const relative = getRelativePath(filePath);

  // For Astro files: check if they import data, use fetch, or have dynamic content
  if (ext === '.astro') {
    try {
      const content = await fs.promises.readFile(filePath, 'utf8');
      // Check for data imports
      if (content.includes('from \"../data') || content.includes('from \'../data') ||
          content.includes('from \"/data') || content.includes('from \'/data') ||
          content.includes('fetch(') || content.includes('getCollection(')) {
        return true;
      }
      // Check for dynamic content: look for {} expressions that are not just static
      // We'll look for any { } that contains a variable or expression (not just a string)
      // This is a simple heuristic: if there is a { } that is not just a string and not just a number
      // We'll do a regex that matches { ... } and then check if the inside is not a string literal.
      // But for simplicity, we'll assume that if there is any { } and the file is a page or component that is likely to display data.
      // Alternatively, we can check if the file is in src/pages/ (except API routes) or if it imports props.
      if (relative.startsWith('src/pages' + path.sep) && !relative.includes('src/pages/api')) {
        // It's a page, likely to display content
        return true;
      }
      // Check if it's a component that receives props (look for --- frontmatter with props or just the fact that it's a component)
      // We'll assume that any .astro file in src/components that has { } expressions is likely to display content.
      if (relative.startsWith('src/components' + path.sep)) {
        // Look for { } in the content (outside of comments and scripts?)
        // We'll do a simple check: if there is a { } that is not inside a <style> or <script> tag.
        // For simplicity, we'll just check if there is any { } and the file is not just a pure HTML component.
        // We'll look for { } that is not preceded by <style> or <script> and not followed by </style> or </script>? Too complex.
        // Let's just assume that if it's a component and it has any { } then it's likely to display content.
        if (content.includes('{') && content.includes('}')) {
          // But we need to avoid counting the { } in JavaScript expressions inside <script>.
          // We'll do a very rough check: if there is more than one { } or if there is a { } that is not in a script tag.
          // We'll skip for now and assume all components affect content? Not true.
          // Instead, let's look for specific component names that are known to be UI-only: Button, Container, Grid, etc.
          const uiOnlyComponents = ['Button', 'Container', 'Grid', 'SEO', 'MediaPlaceholder', 'CookieConsent'];
          const fileName = path.basename(filePath, '.astro');
          if (uiOnlyComponents.includes(fileName)) {
            return false; // These are purely UI
          }
          // Otherwise, assume it affects content
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error(`Error reading ${filePath}: ${err}`);
      return false;
    }
  }

  // For CSS/SCSS files: they generally do not affect content (they affect style)
  // Unless they are CSS-in-JS that is dynamically generated based on props? Not in this project.
  if (visualExtensions.has(ext) || filePath.endsWith('tailwind.config.cjs')) {
    return false;
  }

  // For design images: they do not affect content
  if (isDesignImage(filePath)) {
    return false;
  }

  // For JS/TS files that are visual (due to DOM manipulation): we need to see if the DOM manipulation is for content or style.
  // We'll check if the file manipulates text content, innerHTML, or imports data.
  if (['.js', '.ts'].includes(ext)) {
    try {
      const content = await fs.promises.readFile(filePath, 'utf8');
      // Check for data fetching or importing data
      if (content.includes('fetch(') || content.includes('from \"../data') || content.includes('from \'../data') ||
          content.includes('from \"/data') || content.includes('from \'/data') ||
          content.includes('getCollection(')) {
        return true;
      }
      // Check for setting text content or innerHTML (which would affect content)
      if (/\.textContent\s*=|innerHTML\s*=/.test(content)) {
        return true;
      }
      // Check for setting attributes that are not class or style (e.g., src, href, alt) which could affect content
      if (/setAttribute\s*\([^)]*?(src|href|alt|value)/i.test(content)) {
        return true;
      }
      // Otherwise, if it's only manipulating class or style, then it's visual-only.
      // We already know it has visualKeywords, so we need to see if it has any non-visual manipulation.
      // We'll check for any DOM manipulation that is not purely visual.
      // We'll look for: appendChild, insertBefore, removeChild, etc. that could be for content.
      // But note: these could also be for UI elements.
      // Given the time, we'll assume that if it has visualKeywords and also any of the above content-related patterns, then it affects content.
      // If it only has visualKeywords and none of the above, then it's visual-only.
      // We'll do a simple check: if the file has any of the content-related patterns, return true, else false.
      const contentPatterns = [
        /\.textContent\s*=/
        , /\.innerHTML\s*=/
        , /setAttribute\s*\([^)]*?(src|href|alt|value)/i
        , /appendChild/i
        , /insertBefore/i
        , /removeChild/i
        , /replaceChild/i
      ];
      for (const regex of contentPatterns) {
        if (regex.test(content)) {
          return true;
        }
      }
      return false;
    } catch (err) {
      console.error(`Error reading ${filePath}: ${err}`);
      return false;
    }
  }

  // Default: assume does not affect content
  return false;
}

// Main function to walk the directory
async function walkDir(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  const visualWithContent = [];
  const visualWithoutContent = [];

  for (const entry of entries) {
    if (isIgnored(entry.name)) {
      continue;
    }
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const subResults = await walkDir(fullPath);
      visualWithContent.push(...subResults.visualWithContent);
      visualWithoutContent.push(...subResults.visualWithoutContent);
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

      if (isVisual) {
        const contentAffecting = await affectsContent(fullPath);
        if (contentAffecting) {
          visualWithContent.push({ path: relativePath, reason });
        } else {
          visualWithoutContent.push({ path: relativePath, reason });
        }
      }
    }
  }

  return { visualWithContent, visualWithoutContent };
}

// Run the walk
walkDir(process.cwd())
  .then(results => {
    // Sort by path for consistent output
    results.visualWithContent.sort((a, b) => a.path.localeCompare(b.path));
    results.visualWithoutContent.sort((a, b) => a.path.localeCompare(b.path));
    // Output as JSON for easy consumption
    console.log(JSON.stringify({
      visualWithContent: results.visualWithContent,
      visualWithoutContent: results.visualWithoutContent
    }, null, 2));
  })
  .catch(err => {
    console.error('Error walking directory:', err);
    process.exit(1);
  });