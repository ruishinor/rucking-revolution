# Rucking Revolution Admin Guide

This guide provides step-by-step instructions for managing content on the Rucking Revolution website. No technical expertise is required - follow these instructions to add and update content through the website's data files.

## How to Add an Article

Articles are the main content pieces for the Rucking Revolution library, covering topics like technique, nutrition, mental resilience, and community applications.

### Step-by-Step Instructions:

1. **Locate the articles data file**
   - Open the file: `src/data/articles.ts`

2. **Find the articles array**
   - Look for the line: `export const articles: Article[] = [`

3. **Add a new article object**
   - Copy an existing article object (between `{` and `},`)
   - Paste it at the end of the array, before the closing `]`
   - Update all the fields with your new article's information:

   | Field | Description | Example |
   |-------|-------------|---------|
   | `id` | Unique identifier (use next sequential number) | `"11"` |
   | `slug` | URL-friendly version of title (lowercase, hyphens) | `"your-article-title"` |
   | `title` | Full article title | `"Your Article Title"` |
   | `excerpt` | Short summary shown in listings | `"Brief description of what the article covers"` |
   | `heroImage.src` | Path to hero image | `"/images/articles/your-article-hero.jpg"` |
   | `heroImage.alt` | Description of image for accessibility | `"Descriptive alt text"` |
   | `author` | Author name | `"Your Name"` |
   | `date` | Publication date (YYYY-MM-DD) | `"2024-01-15"` |
   | `readingTime` | Estimated reading time in minutes | `10` |
   | `tags` | Array of relevant topics | `["technique", "beginners"]` |
   | `body` | Main content in Markdown format | `"# Your Article Title\n\nYour content here..."` |
   | `estimatedCaloriesBurned` | Optional: calories burned during activity | `300` |

4. **Save the file**
   - Save your changes to `src/data/articles.ts`

5. **Verify your changes**
   - The new article should now appear in the library when the site is rebuilt

### Important Notes:
- All dates must be in YYYY-MM-DD format
- The `body` field supports Markdown formatting
- Images should be placed in the `public/images/articles/` directory
- Tag suggestions: technique, nutrition, mental-health, community, leadership, beginners, advanced, gear, family

## How to Add an Exercise

Exercises are training movements that help ruckers build strength, endurance, and proper form.

### Step-by-Step Instructions:

1. **Locate the exercises data file**
   - Open the file: `src/data/exercises.ts`

2. **Find the exercises array**
   - Look for the line: `export const exercises: Exercise[] = [`

3. **Add a new exercise object**
   - Copy an existing exercise object (between `{` and `},`)
   - Paste it at the end of the array, before the closing `]`
   - Update all the fields with your new exercise's information:

   | Field | Description | Example |
   |-------|-------------|---------|
   | `id` | Unique identifier (follow existing pattern: `upper-11`, `lower-11`, etc.) | `"upper-11"` |
   | `slug` | URL-friendly version of title (lowercase, hyphens) | `"your-exercise-name"` |
   | `title` | Exercise name | `"Your Exercise Name"` |
   | `difficulty` | Skill level: `"beginner"`, `"intermediate"`, or `"advanced"` | `"beginner"` |
   | `equipment` | Array of required equipment | `["bodyweight"]` or `["dumbbells", "barbell"]` |
   | `targetMuscles` | Array of muscles worked | `["chest", "shoulders", "triceps"]` |
   | `steps` | Array of instruction steps | `["Step 1 description", "Step 2 description"]` |
   | `mistakes` | Array of common mistakes to avoid | `["Mistake 1", "Mistake 2"]` |
   | `progressions` | Array of exercise variations from easy to hard | `["Easy version", "Standard version", "Hard version"]` |
   | `media.src` | Path to exercise image/video | `"/images/exercises/your-exercise.jpg"` |
   | `media.alt` | Description of media for accessibility | `"Descriptive alt text"` |
   | `media.type` | Either `"image"` or `"video"` | `"image"` |

4. **Save the file**
   - Save your changes to `src/data/exercises.ts`

5. **Verify your changes**
   - The new exercise should now appear in the exercise library when the site is rebuilt

### Important Notes:
- Exercises are categorized as Upper Body (IDs: upper-1 to upper-10) or Lower Body (IDs: lower-1 to lower-10)
- Follow the existing numbering pattern when adding new exercises
- Images should be placed in the `public/images/exercises/` directory
- For videos, set `media.type` to `"video"` and provide the video file path

## How to Add CrewTactics Cards

CrewTactics cards are leadership and decision-making prompts designed for team training and development.

### Step-by-Step Instructions:

1. **Locate the CrewTactics data file**
   - Open the file: `src/data/crewTactics.ts`

2. **Find the crewTactics array**
   - Look for the line: `export const crewTactics: CrewTactic[] = [`

3. **Add a new CrewTactic object**
   - Copy an existing CrewTactic object (between `{` and `},`)
   - Paste it at the end of the array, before the closing `]`
   - Update all the fields with your new CrewTactic's information:

   | Field | Description | Example |
   |-------|-------------|---------|
   | `id` | Unique identifier (follow category pattern: `ct-lead-11`, `ct-comm-11`, etc.) | `"ct-lead-11"` |
   | `category` | Category name (must match existing: Leadership, Communication, Decision Making, Adaptability) | `"Leadership"` |
   | `text` | The main tactic/prompt text | `"Your leadership prompt here"` |
   | `difficulty` | Skill level: `"beginner"`, `"intermediate"`, or `"advanced"` | `"beginner"` |
   | `duration` | Time in seconds to complete the tactic | `30` |
   | `prompts` | Array of reflection questions | `["Question 1?", "Question 2?"]` |

4. **Save the file**
   - Save your changes to `src/data/crewTactics.ts`

5. **Verify your changes**
   - The new CrewTactic card should now appear in the generator when the site is rebuilt

### Important Notes:
- Categories must be exactly: Leadership, Communication, Decision Making, or Adaptability
- Follow the existing ID pattern: `ct-[category-prefix]-[number]`
  - Leadership: `ct-lead-`
  - Communication: `ct-comm-`
  - Decision Making: `ct-dec-`
  - Adaptability: `ct-adapt-`
- Duration is in seconds (typical range: 15-60 seconds)
- Prompts should be open-ended questions that encourage reflection

## How to Add Products

Products are downloadable guides, plans, and resources available for purchase in the Rucking Revolution store.

### Step-by-Step Instructions:

1. **Locate the products data file**
   - Open the file: `src/data/products.ts`

2. **Find the products array**
   - Look for the line: `export const products: Product[] = [`

3. **Add a new product object**
   - Copy an existing product object (between `{` and `},`)
   - Paste it at the end of the array, before the closing `]`
   - Update all the fields with your new product's information:

   | Field | Description | Example |
   |-------|-------------|---------|
   | `id` | Unique identifier (follow pattern: `prod-13`, `prod-14`, etc.) | `"prod-13"` |
   | `sku` | Stock Keeping Unit (unique product code) | `"RR-NEW-001"` |
   | `title` | Product title | `"Your Product Title"` |
   | `description` | Detailed product description | `"Comprehensive description of what the product offers"` |
   | `priceEUR` | Price in Euros (number only) | `24.99` |
   | `files.name` | Display name for each file | `"Your Product - PDF"` |
   | `files.src` | Path to downloadable file | `"/files/products/your-product.pdf"` |
   | `files.type` | File type: `'pdf'`, `'epub'`, `'zip'`, `'spreadsheet'`, `'ios-app'`, `'android-app'` | `"pdf"` |
   | `files.size` | File size (human readable) | `"5.2 MB"` |
   | `purchaseLink` | URL where product is sold | `"https://ruckingrevolution.org/store/your-product"` |
   | `previewImages.src` | Path to preview images | `"/images/products/your-product-preview1.jpg"` |
   | `previewImages.alt` | Description of preview image | `"Descriptive alt text"` |
   | `whatYouLearn` | Array of learning outcomes | `["Skill 1 you'll learn", "Skill 2 you'll learn"]` |

4. **Save the file**
   - Save your changes to `src/data/products.ts`

5. **Verify your changes**
   - The new product should now appear in the store when the site is rebuilt

### Important Notes:
- Files must be placed in the appropriate directories:
  - PDFs/EPUBs/ZIPs: `public/files/products/`
  - Preview images: `public/images/products/`
  - iOS/Android apps: `public/apps/`
- Price must be a number (no currency symbols)
- SKU should follow the pattern: `RR-[CATEGORY]-001` where CATEGORY describes the product type
- whatYouLearn array should contain specific, measurable learning outcomes

## How to Update Navigation

Navigation controls what links appear in the website's header and footer menus.

### Step-by-Step Instructions:

1. **Locate the site configuration file**
   - Open the file: `src/data/site.ts`

2. **Find the navigation sections**
   - Look for `primaryNav:` (main menu) and `secondaryNav:` (footer menu)

3. **Update primary navigation (header menu)**
   - To add a new link:
     - Add a new object to the array: `{ name: 'Link Name', link: '/url-path' }`
   - To remove a link:
     - Delete the corresponding object from the array
   - To change a link:
     - Modify the `name` and/or `link` values in an existing object

4. **Update secondary navigation (footer menu)**
   - Follow the same process as primary navigation within the `secondaryNav` array

5. **Save the file**
   - Save your changes to `src/data/site.ts`

6. **Verify your changes**
   - The updated navigation should now appear in the header and footer when the site is rebuilt

### Important Notes:
- Link paths should start with `/` (e.g., `/learn`, `/train`, `/lead`)
- External links should include the full URL (e.g., `https://example.com`)
- The order of items in the array determines their display order
- Common primary nav items: Home, Learn, Train, Lead, Red Rucker, About
- Common secondary nav items: Privacy Policy, FAQ, Contact, Social Media, Terms

## How to Deploy Updates

Deploying updates makes your changes live on the website for visitors to see.

### Step-by-Step Instructions:

1. **Commit your changes**
   - Open your Git client or terminal
   - Stage all modified files: `git add .`
   - Commit your changes with a descriptive message: `git commit -m "Add new article about topic X"`

2. **Push to the repository**
   - Push your commits to the remote repository: `git push origin main`

3. **Trigger deployment**
   - The website is configured to automatically deploy when changes are pushed to the main branch
   - No additional steps are required - the deployment will start automatically

4. **Verify deployment**
   - Wait for the deployment to complete (typically 1-3 minutes)
   - Visit the website to verify your changes are live
   - Check that new content appears in the appropriate sections

### Important Notes:
- Deployments happen automatically on pushes to the main branch
- You can check deployment status in your Git provider's interface (GitHub, GitLab, etc.)
- If you encounter issues, check the deployment logs for error messages
- Always test your changes locally before committing if possible
- For major changes, consider creating a backup branch before deploying

## Content Guidelines

### Image Requirements
- Articles: Hero images should be placed in `public/images/articles/`
- Exercises: Images should be placed in `public/images/exercises/`
- Products: Preview images should be placed in `public/images/products/`
- CrewTactics: No images required (text-only cards)
- Recommended format: JPG or PNG, optimized for web (under 500KB when possible)

### Text Formatting
- Use clear, concise language
- Follow the existing tone and style of the Rucking Revolution brand
- For articles: Use Markdown formatting in the body field
- For exercises: Keep instructions simple and actionable
- For CrewTactics: Create prompts that encourage reflection and discussion

### Validation Checklist
Before committing your changes, verify:
- [ ] All required fields are filled
- [ ] IDs are unique and follow the correct pattern
- [ ] Dates are in YYYY-MM-DD format
- [ ] Prices are numbers only (no currency symbols)
- [ ] File paths exist in the public directory
- [ ] Navigation links use correct URL paths
- [ ] No trailing commas in arrays or objects
- [ ] File saves without syntax errors

## Troubleshooting

### Common Issues
1. **Changes not appearing after deployment**
   - Verify you saved the file before committing
   - Check that you committed and pushed to the main branch
   - Confirm the deployment completed successfully

2. **Website shows error after deployment**
   - Check for syntax errors in your JSON/JavaScript
   - Common issues: missing commas, extra brackets, incorrect quotes
   - Revert to previous version and fix the error

3. **Images not displaying**
   - Verify the file path is correct
   - Check that the image file exists in the public directory
   - Ensure the file name matches exactly (including case sensitivity)

4. **Links not working**
   - Verify navigation links start with `/` for internal links
   - Check external links include `http://` or `https://`
   - Test links after deployment to confirm they work

### Getting Help
If you encounter issues you can't resolve:
1. Check the console for error messages
2. Review the git commit history to see what changed
3. Consult with a developer for complex issues
4. Refer to the original data files for formatting examples

---
*Last updated: March 2026*