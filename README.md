# Personal Portfolio Website

A modern, responsive personal portfolio website for a final-year IT student specializing in Information Systems Development. Built with vanilla HTML, CSS, and JavaScript—no frameworks required.

## 🎨 Features

✨ **Modern Design**
- Clean, minimal UI with soft pink, white, and dark accents
- Professional typography using Google Fonts (Poppins)
- Smooth animations and hover effects

📱 **Fully Responsive**
- Mobile-first design (320px+)
- Tablet optimization (768px+)
- Desktop layout (1024px+)
- No horizontal scrolling at any viewport size

🌙 **Dark/Light Mode**
- Toggle between light and dark themes
- Theme preference persists in browser local storage
- Smooth transitions between modes

🧭 **Smooth Navigation**
- Sticky header with navigation menu
- Hamburger menu for mobile devices
- Active link highlighting based on scroll position
- Smooth scroll to sections

📋 **Complete Sections**
- Hero section with typing animation
- About section with professional background
- Skills section with 6 skill categories
- Projects section with 6 detailed project cards
- Professional experience timeline
- Certifications and achievements
- Clubs and leadership roles
- Contact form with validation
- Resume download
- Footer with social links

✅ **Form Validation**
- Email format validation
- Required field validation
- Real-time error messages
- Success feedback

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main stylesheet
│   └── variables.css      # CSS custom properties
├── js/
│   ├── script.js          # Main JavaScript
│   ├── navigation.js      # Navigation and smooth scrolling
│   ├── theme.js           # Dark/Light mode toggle
│   └── form.js            # Contact form validation
├── assets/
│   └── cv.pdf             # Resume file
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. Clone or download the repository
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### Customization

**Update Student Information:**
- Edit `index.html` to replace "Student Name" with your actual name
- Update email addresses and social media links
- Modify project details, skills, and experience

**Customize Colors:**
- Edit `css/variables.css` to change the color palette
- Update `--primary-color`, `--secondary-color`, and `--accent-color`

**Add Your CV:**
- Replace `assets/cv.pdf` with your actual resume file

**Update Social Links:**
- Edit social media URLs in the contact section and footer

## 🎯 Key Features Explained

### Responsive Design
The website uses CSS Grid and Flexbox for flexible layouts that adapt to any screen size:
- **Mobile (320px)**: Single column layout
- **Tablet (768px)**: Two-column layout where appropriate
- **Desktop (1024px+)**: Multi-column layout with optimal spacing

### Dark/Light Mode
Theme preference is stored in browser local storage and persists across sessions:
```javascript
// Theme is automatically restored on page reload
localStorage.getItem('portfolio-theme')
```

### Navigation
Active navigation links update automatically as you scroll:
```javascript
// Detects current section and highlights corresponding nav link
updateActiveNavLink()
```

### Contact Form
Form validation ensures data quality:
- Email format validation using regex
- Required field checking
- Real-time error messages
- Success feedback

### Smooth Scrolling
All navigation links use smooth scroll behavior:
```javascript
scrollIntoView({ behavior: 'smooth' })
```

## 🎨 Color Palette

**Light Mode:**
- Primary: `#FF69B4` (Soft Pink)
- Secondary: `#FFFFFF` (White)
- Accent: `#1A1A1A` (Dark)
- Text: `#333333` (Dark Gray)

**Dark Mode:**
- Primary: `#FF69B4` (Soft Pink)
- Secondary: `#1A1A1A` (Dark)
- Accent: `#FFFFFF` (White)
- Text: `#FFFFFF` (White)

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- No external dependencies or frameworks
- Lightweight CSS and JavaScript
- Optimized images and assets
- Fast load times
- Smooth animations using CSS transitions

## ♿ Accessibility

- Semantic HTML5 structure
- Alt text for all images
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- High contrast colors

## 📝 Sections Overview

### Hero Section
- Student name with typing animation
- Professional title
- Short introduction
- Call-to-action buttons

### About Section
- Professional photo/avatar
- Background and specialization
- Passion and career goals

### Skills Section
- 6 skill categories
- Backend Development
- Frontend Development
- AI & Data Science
- Databases & BI
- Architecture & Web Services
- Methodologies & Tools

### Projects Section
- 6 detailed project cards
- Project timeline
- Technologies used
- GitHub and demo links
- Project descriptions

### Experience Section
- Professional internships
- Company details
- Job descriptions
- Technologies used

### Certifications Section
- 5 certifications
- Issuing organizations
- Certification dates

### Clubs Section
- 3 club memberships
- Leadership roles
- Membership dates

### Contact Section
- Contact form with validation
- Social media links
- Email contact option

### Resume Section
- CV download button
- Professional summary

## 🔧 Customization Guide

### Change Colors
Edit `css/variables.css`:
```css
:root {
    --primary-color: #FF69B4;  /* Change this */
    --secondary-color: #FFFFFF;
    --accent-color: #1A1A1A;
}
```

### Add New Projects
Edit `index.html` in the projects section:
```html
<article class="project-card">
    <div class="project-image">
        <div class="image-placeholder">🎯</div>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <!-- Add project details -->
    </div>
</article>
```

### Update Skills
Edit the skills section in `index.html`:
```html
<div class="skill-card">
    <h3>Your Skill Category</h3>
    <ul class="skill-list">
        <li>Skill 1</li>
        <li>Skill 2</li>
    </ul>
</div>
```

## 📞 Contact

For questions or support, please reach out through the contact form on the website.

## 📄 License

This project is open source and available for personal use.

## 🙏 Credits

- Fonts: [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins)
- Icons: Emoji icons for visual appeal
- Design: Modern, minimal UI principles

---

**Last Updated:** January 2025

**Version:** 1.0.0

Enjoy your new portfolio website! 🚀
