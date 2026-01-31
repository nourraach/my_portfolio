# Design Document: Personal Portfolio Website

## Overview

The portfolio website is a single-page application (SPA) built with vanilla HTML, CSS, and JavaScript. It features a modern, responsive design with smooth animations, dark/light mode support, and semantic HTML structure. The website showcases a final-year IT student's projects, skills, experience, and certifications in a recruiter-friendly format.

**Key Design Principles:**
- Mobile-first responsive design
- Semantic HTML5 for accessibility
- CSS Grid and Flexbox for layout
- Vanilla JavaScript for interactivity (no frameworks)
- Progressive enhancement
- Performance-optimized

## Architecture

### File Structure

```
portfolio-website/
├── index.html              # Main HTML file with semantic structure
├── css/
│   ├── style.css          # Main stylesheet with responsive design
│   └── variables.css      # CSS custom properties for theming
├── js/
│   ├── script.js          # Main JavaScript file
│   ├── navigation.js      # Navigation and smooth scrolling
│   ├── theme.js           # Dark/Light mode toggle
│   └── form.js            # Contact form validation
├── assets/
│   ├── images/            # Project screenshots and profile photo
│   ├── icons/             # Social media and UI icons
│   └── cv.pdf             # Resume file
└── README.md              # Project documentation
```

### Technology Stack

- **HTML5**: Semantic markup with proper structure
- **CSS3**: Grid, Flexbox, CSS Variables, Media Queries, Animations
- **JavaScript (ES6+)**: DOM manipulation, event handling, local storage
- **Google Fonts**: Poppins or Inter for typography
- **No external frameworks or libraries**

## Components and Interfaces

### 1. Navigation Component

**Purpose:** Provide smooth navigation between sections with active state indication

**Features:**
- Sticky header with logo/name
- Navigation links for all sections
- Hamburger menu for mobile (< 768px)
- Active link highlighting based on scroll position
- Smooth scroll behavior

**HTML Structure:**
```html
<header>
  <nav class="navbar">
    <div class="nav-container">
      <div class="nav-logo">Student Name</div>
      <div class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul class="nav-menu">
        <li><a href="#home" class="nav-link">Home</a></li>
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#experience" class="nav-link">Experience</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <button class="theme-toggle">🌙</button>
    </div>
  </nav>
</header>
```

### 2. Hero Section Component

**Purpose:** Create an impressive first impression with student profile and CTAs

**Features:**
- Student name with optional typing animation
- Professional title
- Short introduction (2-3 sentences)
- Two CTA buttons: "View Projects" and "Contact Me"
- Background gradient or subtle animation
- Responsive text sizing

**HTML Structure:**
```html
<section id="home" class="hero">
  <div class="hero-content">
    <h1 class="hero-title">
      <span class="typing-text">Student Name</span>
    </h1>
    <p class="hero-subtitle">Final-Year IT Student | Information Systems Development</p>
    <p class="hero-description">
      Passionate about building innovative solutions with full-stack development, 
      AI, and data engineering. Seeking internship and international opportunities.
    </p>
    <div class="hero-buttons">
      <button class="btn btn-primary" onclick="scrollToSection('projects')">View Projects</button>
      <button class="btn btn-secondary" onclick="scrollToSection('contact')">Contact Me</button>
    </div>
  </div>
</section>
```

### 3. About Section Component

**Purpose:** Provide background and career context

**Features:**
- Professional photo/avatar placeholder
- Specialization statement
- Passion description
- Career goals
- Two-column layout on desktop, single column on mobile

**HTML Structure:**
```html
<section id="about" class="about">
  <div class="container">
    <h2>About Me</h2>
    <div class="about-content">
      <div class="about-image">
        <img src="assets/images/profile.jpg" alt="Profile Photo">
      </div>
      <div class="about-text">
        <p>Final-year IT student specializing in Information Systems Development...</p>
        <p>Passionate about software engineering, web development, AI, and data analysis...</p>
        <p>Career goal: pursuing internships and international opportunities...</p>
      </div>
    </div>
  </div>
</section>
```

### 4. Skills Section Component

**Purpose:** Display technical skills organized by category

**Features:**
- Skills organized into 7 categories
- Card or grid layout
- Visual representation (list or progress bars)
- Hover effects
- Responsive grid (1 column mobile, 2-3 columns desktop)

**HTML Structure:**
```html
<section id="skills" class="skills">
  <div class="container">
    <h2>Skills</h2>
    <div class="skills-grid">
      <div class="skill-card">
        <h3>Backend Development</h3>
        <ul class="skill-list">
          <li>Java</li>
          <li>Kotlin</li>
          <li>Spring Boot</li>
          <!-- ... -->
        </ul>
      </div>
      <!-- More skill cards -->
    </div>
  </div>
</section>
```

### 5. Projects Section Component

**Purpose:** Showcase student projects with detailed information

**Features:**
- Project cards with title, timeline, description, technologies
- GitHub and demo buttons
- Screenshot placeholders
- Hover effects (shadow, scale)
- Responsive grid layout
- 6 projects total

**HTML Structure:**
```html
<section id="projects" class="projects">
  <div class="container">
    <h2>Projects</h2>
    <div class="projects-grid">
      <article class="project-card">
        <div class="project-image">
          <img src="assets/images/project1.jpg" alt="Project Screenshot">
        </div>
        <div class="project-content">
          <h3>Project Title</h3>
          <p class="project-timeline">Jan 2024 – Feb 2024</p>
          <p class="project-description">Description...</p>
          <div class="project-tech">
            <span class="tech-tag">Spring Boot</span>
            <span class="tech-tag">Angular</span>
            <!-- ... -->
          </div>
          <div class="project-buttons">
            <a href="#" class="btn btn-small">GitHub</a>
            <a href="#" class="btn btn-small">Live Demo</a>
          </div>
        </div>
      </article>
      <!-- More project cards -->
    </div>
  </div>
</section>
```

### 6. Experience Section Component

**Purpose:** Display professional internship experience

**Features:**
- Timeline or card format
- Company name, position, dates
- Description and technologies
- Chronological order

**HTML Structure:**
```html
<section id="experience" class="experience">
  <div class="container">
    <h2>Professional Experience</h2>
    <div class="experience-timeline">
      <div class="experience-item">
        <h3>National Center for Informatics</h3>
        <p class="position">IT Intern</p>
        <p class="dates">Jan 2025 – Feb 2025</p>
        <p class="description">Developed web-based training management system...</p>
        <div class="tech-tags">
          <span>PHP</span>
          <span>MySQL</span>
          <!-- ... -->
        </div>
      </div>
      <!-- More experience items -->
    </div>
  </div>
</section>
```

### 7. Certifications Section Component

**Purpose:** Display certifications and achievements

**Features:**
- List or card format
- Certification name, issuer, date
- 5 certifications total

**HTML Structure:**
```html
<section id="certifications" class="certifications">
  <div class="container">
    <h2>Certifications</h2>
    <div class="certifications-list">
      <div class="cert-item">
        <h4>Database Programming with SQL</h4>
        <p class="issuer">Oracle Academy</p>
        <p class="date">Dec 2024</p>
      </div>
      <!-- More certifications -->
    </div>
  </div>
</section>
```

### 8. Clubs Section Component

**Purpose:** Display club memberships and leadership roles

**Features:**
- Club name, role, dates
- 3 clubs total

**HTML Structure:**
```html
<section id="clubs" class="clubs">
  <div class="container">
    <h2>Clubs & Leadership</h2>
    <div class="clubs-list">
      <div class="club-item">
        <h4>IEEE Student Branch ISET Radès</h4>
        <p class="role">Member</p>
        <p class="dates">2024–2026</p>
      </div>
      <!-- More clubs -->
    </div>
  </div>
</section>
```

### 9. Contact Section Component

**Purpose:** Allow visitors to send messages and find social profiles

**Features:**
- Contact form with Name, Email, Message fields
- Form validation (email format, required fields)
- Success/error messages
- Social media icons (LinkedIn, GitHub, Email)
- Links open in new tabs

**HTML Structure:**
```html
<section id="contact" class="contact">
  <div class="container">
    <h2>Get In Touch</h2>
    <form class="contact-form" id="contactForm">
      <input type="text" placeholder="Your Name" required>
      <input type="email" placeholder="Your Email" required>
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
    <div class="social-links">
      <a href="#" class="social-icon">LinkedIn</a>
      <a href="#" class="social-icon">GitHub</a>
      <a href="#" class="social-icon">Email</a>
    </div>
  </div>
</section>
```

### 10. Resume Section Component

**Purpose:** Provide CV download

**Features:**
- Download CV button
- Professional summary
- Link to CV file

**HTML Structure:**
```html
<section id="resume" class="resume">
  <div class="container">
    <h2>Resume</h2>
    <p class="resume-summary">Professional summary...</p>
    <a href="assets/cv.pdf" download class="btn btn-primary">Download CV</a>
  </div>
</section>
```

### 11. Footer Component

**Purpose:** Display copyright and social links

**Features:**
- Copyright text
- Social media links
- Consistent with header

**HTML Structure:**
```html
<footer class="footer">
  <div class="container">
    <p>&copy; 2025 Student Name. All rights reserved.</p>
    <div class="footer-social">
      <a href="#">LinkedIn</a>
      <a href="#">GitHub</a>
      <a href="#">Email</a>
    </div>
  </div>
</footer>
```

## Data Models

### Theme State
```javascript
{
  mode: 'light' | 'dark',
  colors: {
    primary: '#FF69B4',      // Soft pink
    secondary: '#FFFFFF',    // White
    accent: '#1A1A1A',       // Dark accent
    text: '#333333',         // Dark text
    textLight: '#FFFFFF'     // Light text
  }
}
```

### Project Data
```javascript
{
  id: string,
  title: string,
  timeline: string,
  description: string,
  technologies: string[],
  features: string[],
  image: string,
  githubUrl: string,
  demoUrl: string
}
```

### Contact Form Data
```javascript
{
  name: string,
  email: string,
  message: string
}
```

## Correctness Properties

A property is a characteristic or behavior that should hold true across all valid executions of a system—essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.

### Property 1: Responsive Layout Adaptation

**For any** viewport width, the website layout SHALL adapt correctly:
- Mobile (< 768px): single column layout
- Tablet (768px - 1024px): two-column layout where appropriate
- Desktop (> 1024px): multi-column layout with optimal spacing

**Validates: Requirements 1.1, 1.2, 1.3, 1.4**

### Property 2: Navigation Link Highlighting

**For any** scroll position on the page, the active navigation link SHALL correspond to the currently visible section.

**Validates: Requirements 3.3**

### Property 3: Smooth Scroll Navigation

**For any** navigation link click, the page SHALL scroll smoothly to the target section without jumping.

**Validates: Requirements 2.5, 2.6, 3.2**

### Property 4: Dark/Light Mode Persistence

**For any** theme toggle action, the selected theme SHALL be persisted to local storage and restored on page reload.

**Validates: Requirements 12.4, 12.5**

### Property 5: Contact Form Validation

**For any** contact form submission with invalid email format or empty required fields, the form SHALL display an error message and prevent submission.

**Validates: Requirements 10.2, 10.3**

### Property 6: Contact Form Success

**For any** contact form submission with valid data (non-empty name, valid email, non-empty message), the form SHALL display a success message.

**Validates: Requirements 10.4**

### Property 7: Social Link Navigation

**For any** social media icon click, the corresponding profile SHALL open in a new browser tab.

**Validates: Requirements 10.6, 14.3**

### Property 8: Semantic HTML Structure

**For any** section of the website, the HTML SHALL use semantic elements (header, nav, main, section, article, footer) appropriately.

**Validates: Requirements 15.1**

### Property 9: Image Responsive Scaling

**For any** image element, the image SHALL scale proportionally across all viewport sizes without distortion.

**Validates: Requirements 1.5**

### Property 10: Mobile Menu Toggle

**For any** hamburger menu click on mobile devices, the navigation menu SHALL toggle between open and closed states.

**Validates: Requirements 3.4, 3.5**

## Error Handling

### Contact Form Validation Errors

**Invalid Email Format:**
- Display: "Please enter a valid email address"
- Action: Prevent form submission
- Recovery: User corrects email and resubmits

**Empty Required Fields:**
- Display: "Please fill in all required fields"
- Action: Prevent form submission
- Recovery: User fills in missing fields and resubmits

**Network/Submission Errors:**
- Display: "An error occurred. Please try again later."
- Action: Allow user to retry
- Recovery: User can resubmit form

### Graceful Degradation

- If JavaScript is disabled, basic page structure and content remain accessible
- Navigation links use anchor tags for fallback
- Form submission uses standard HTML form behavior
- Images have alt text for accessibility

## Testing Strategy

### Unit Testing

Unit tests verify specific examples, edge cases, and error conditions:

1. **Navigation Tests**
   - Verify hamburger menu toggles on mobile
   - Verify active link highlighting updates on scroll
   - Verify smooth scroll to sections works

2. **Theme Toggle Tests**
   - Verify theme switches between light and dark
   - Verify theme persists in local storage
   - Verify theme applies to all elements

3. **Contact Form Tests**
   - Verify form rejects invalid email formats
   - Verify form rejects empty required fields
   - Verify form accepts valid data
   - Verify success message displays

4. **Responsive Design Tests**
   - Verify layout adapts at breakpoints (320px, 768px, 1024px)
   - Verify images scale proportionally
   - Verify no horizontal scrolling on mobile

### Property-Based Testing

Property-based tests verify universal properties across all inputs using a testing framework like fast-check (JavaScript):

1. **Property 1: Responsive Layout Adaptation**
   - Generate random viewport widths
   - Verify layout adapts correctly for each width
   - Verify no horizontal scrolling

2. **Property 2: Navigation Link Highlighting**
   - Generate random scroll positions
   - Verify active link matches visible section
   - Verify only one link is active at a time

3. **Property 4: Dark/Light Mode Persistence**
   - Generate random theme selections
   - Toggle theme multiple times
   - Verify theme persists after page reload

4. **Property 5: Contact Form Validation**
   - Generate random invalid email formats
   - Verify form rejects all invalid formats
   - Verify error message displays

5. **Property 6: Contact Form Success**
   - Generate random valid form data
   - Verify form accepts all valid data
   - Verify success message displays

6. **Property 7: Social Link Navigation**
   - Generate random social links
   - Verify all links open in new tabs
   - Verify correct URLs are used

### Testing Configuration

- **Minimum iterations per property test:** 100
- **Test framework:** fast-check (JavaScript)
- **Test file location:** `tests/` directory
- **Test naming:** `*.test.js` suffix
- **Coverage target:** 80%+ for core functionality

### Test Execution

```bash
# Run all tests
npm test

# Run specific test file
npm test -- navigation.test.js

# Run with coverage
npm test -- --coverage
```

