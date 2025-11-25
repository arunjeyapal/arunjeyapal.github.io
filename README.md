# Arun Jayapal - Personal Portfolio Website

AI Everywhere: Agentic AI & LLM Expert

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles (variables, layout, responsive)
├── js/
│   ├── config.js           # Site configuration and content data
│   └── main.js             # Interactive functionality (forms, carousel, etc.)
├── images/                 # Profile and other images
├── docs/                   # PDFs (CV, thesis, publications)
├── Papers/                 # Research papers
└── README.md              # This file
```

## 🚀 Features

### Modular Architecture
The codebase has been refactored into separate modules for easier maintenance:

1. **HTML (index.html)**: Clean semantic structure without inline styles or scripts
2. **CSS (css/styles.css)**: All styling including:
   - CSS variables for easy theming
   - Responsive design
   - Component-specific styles
   - Utility classes

3. **JavaScript (js/main.js)**: Interactive functionality including:
   - Contact form handling
   - Smooth scrolling
   - Testimonial carousel with auto-advance

4. **Configuration (js/config.js)**: Centralized content management:
   - Personal information
   - Statistics
   - Company information
   - Core expertise
   - Technology stack
   - Services offered
   - Testimonials
   - Publications
   - Contact form configuration

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `css/styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --primary-dark: #1e40af;       /* Darker shade for hover states */
    --secondary-color: #10b981;    /* Accent color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Light background */
    --border-color: #e5e7eb;       /* Borders */
}
```

### Updating Content
Edit the `siteConfig` object in `js/config.js`:

```javascript
const siteConfig = {
    profile: { ... },      // Personal information
    stats: [ ... ],        // Statistics
    companies: [ ... ],    // Current companies
    expertise: [ ... ],    // Core expertise
    services: [ ... ],     // Services offered
    testimonials: [ ... ], // Client testimonials
    publications: [ ... ]  // Research publications
};
```

### Modifying Services
To change the services displayed on the homepage, edit the `services` array in `js/config.js`. Each service has:
- `icon`: Emoji or icon
- `title`: Service name
- `description`: Brief description
- `features`: Array of key features

## 🔧 Development

### Prerequisites
- Modern web browser
- Local web server (optional, but recommended)

### Running Locally

1. **Using Python's built-in server:**
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

2. **Using Node.js http-server:**
```bash
npx http-server
```

3. **Using VS Code Live Server:**
- Install the "Live Server" extension
- Right-click index.html and select "Open with Live Server"

## 📦 External Dependencies

- **Web3Forms**: Contact form submission (`https://web3forms.com/client/script.js`)

## 📝 Configuration Files

### Contact Form
The contact form uses Web3Forms. Update the access key in `js/config.js`:

```javascript
contactForm: {
    accessKey: "your-access-key-here"
}
```

## 🎯 Key Sections

1. **Hero Section**: Introduction with profile image and CTA buttons
2. **Stats Section**: Key statistics (experience, education, publications)
3. **About Section**: Detailed background, expertise, and technology stack
4. **Services Section**: 6 key service offerings
5. **Testimonials**: Client testimonials with carousel
6. **Publications**: Research publications and academic work
7. **Contact Section**: Contact form and contact information

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Desktop: > 768px
- Tablet: 481px - 768px
- Mobile: ≤ 480px

## 🔐 Security

- No sensitive data in client-side code
- Contact form uses secure HTTPS endpoints
- External scripts loaded with integrity checks where applicable

## 🚀 Deployment

The site is static and can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## 📄 License

© 2024 Arun Jayapal. All rights reserved.

## 🤝 Support

For issues or questions, please contact:
- Email: jayapala@tcd.ie
- LinkedIn: [linkedin.com/in/arunjeyapal](https://www.linkedin.com/in/arunjeyapal/)
