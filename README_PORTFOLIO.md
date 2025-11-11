# Professional Web Developer Portfolio

A modern, responsive portfolio website with dark mode support and live Bangladesh time display.

## Features

### 1. **Responsive Navigation Bar**
- Fixed navbar with smooth scrolling
- Brand logo with icon
- Menu items: Home, About, Portfolio, Services, Contact, Blog
- **"Call Me" Button** (Red) - Phone link
- **"Hire Me" Button** (Green) - Redirect to Contact section
- Dark mode toggle button (Moon/Sun icon)
- Mobile-friendly hamburger menu

### 2. **Dark Mode Support**
- Toggle switch in the navbar
- Smooth transitions with no color collisions
- Two complete color schemes:
  - **Light Mode**: White backgrounds with dark text
  - **Dark Mode**: Dark backgrounds (#1a1a1a) with light text
- Persistent storage using localStorage (preference saved across sessions)
- CSS Variables for easy theme management

### 3. **Hero Section**
- Full-screen hero with gradient background
- Animated background pattern
- Call-to-action buttons with hover effects
- Fade-in animations

### 4. **Multiple Sections**
- **About Section**: Introduction and key skills
- **Portfolio Section**: Project showcase cards
- **Services Section**: Services offered
- **Contact Section**: Contact options
- **Blog Section**: Latest articles

### 5. **Footer with Live Bangladesh Time**
- Real-time clock showing Bangladesh timezone (UTC+6)
- Current date and day display
- Social media links (GitHub, LinkedIn, Twitter, Facebook)
- Auto-updates every second

### 6. **Color Scheme (No Collisions)**
- **Primary Blue**: `#007bff` - Links, accents
- **Success Green**: `#28a745` - "Hire Me" button
- **Danger Red**: `#dc3545` - "Call Me" button
- **Dark Navbar**: `#343a40` (Light) / `#0d0d0d` (Dark)
- **Text**: Dark in light mode, Light in dark mode
- **Backgrounds**: Contrasting colors ensure readability

## File Structure

```
portfolio/
├── index.html              # Main HTML file
├── app.js                  # JavaScript functionality
├── css/
│   ├── bootstrap.min.css   # Bootstrap framework
│   └── custom.css          # Custom styles + dark mode
├── js/
│   └── bootstrap.min.js    # Bootstrap JS
└── img/                    # Images folder
```

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with CSS variables for theming
- **Bootstrap 5**: Responsive grid and components
- **jQuery**: DOM manipulation and time updates
- **Font Awesome 6**: Icons for navbar and social links

## Key Features Implementation

### Dark Mode Toggle
- Uses CSS custom properties (variables) for theme colors
- `body.dark-mode` class switches entire theme
- Persisted in localStorage

### Live Bangladesh Time
- Uses `toLocaleString()` with `Asia/Dhaka` timezone
- Updates every 1000ms (1 second)
- Displays full date and formatted time

### Responsive Design
- Mobile-first approach
- Bootstrap grid system
- Hamburger menu for mobile devices
- Optimized for all screen sizes

### Smooth Interactions
- Navbar link underline animation
- Button hover effects
- Card elevation on hover
- Fade-in animations on page load
- Scroll-to-top button

## How to Use

1. Open `index.html` in a web browser
2. Navigate using the menu or smooth scroll anchors
3. Click the moon/sun icon to toggle dark mode
4. Click "Call Me" to dial or "Hire Me" to contact
5. View live Bangladesh time in the footer

## Customization

### Change Contact Information
Edit these sections in `index.html`:
- Phone number in "Call Me" button
- Email in contact section
- Social media links in footer

### Modify Color Scheme
Edit CSS variables in `custom.css`:
```css
:root {
  --primary-color: #007bff;
  --success-color: #28a745;
  --danger-color: #dc3545;
  /* ... more colors ... */
}
```

### Update Portfolio Content
Replace the placeholder content in:
- About section
- Portfolio project cards
- Services cards
- Blog articles

## Browser Support

- Chrome (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Checklist

✅ Responsive Navbar with Hire Me & Call Me buttons
✅ Menu items (Home, About, Portfolio, Services, Contact, Blog)
✅ Dark Mode toggle with smooth transitions
✅ No color collisions between themes
✅ Live Bangladesh time display with jQuery
✅ Footer with social media links
✅ Mobile-friendly design
✅ Smooth scrolling navigation
✅ Persistent dark mode preference
✅ Professional styling and animations

---

Made with ❤️ for Web Developers
