# Quick Start Guide

## How to View Your Portfolio

1. **Open in Browser**
   - Right-click on `index.html`
   - Select "Open with" → Your favorite browser
   - Or drag `index.html` into your browser

2. **Key Features to Try**
   - 🌙 **Dark Mode**: Click the moon icon in the navbar
   - 📞 **Call Me**: Red button in navbar (opens phone dial)
   - 💼 **Hire Me**: Green button in navbar (scrolls to contact)
   - ⏰ **Live Time**: Check footer for Bangladesh current time
   - 📱 **Responsive**: Resize browser to test mobile view

## Navigation

| Menu Item | Description |
|-----------|-------------|
| Home | Hero section with introduction |
| About | About you and your skills |
| Portfolio | Your projects showcase |
| Services | Services you offer |
| Contact | Contact information |
| Blog | Your blog articles |

## Customization Guide

### Change Your Contact Information

**File**: `index.html`

```html
<!-- Change phone number -->
<a href="tel:+8801234567890" class="btn btn-danger">
  <i class="fas fa-phone"></i> Call Me
</a>

<!-- Change email -->
<a href="mailto:your@email.com" class="btn btn-success">
  <i class="fas fa-envelope"></i> Email Me
</a>
```

### Update Social Media Links

**File**: `index.html` (Footer section)

```html
<a href="https://github.com/YOUR_USERNAME" target="_blank">
  <i class="fab fa-github"></i>
</a>
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
  <i class="fab fa-linkedin"></i>
</a>
```

### Change Colors

**File**: `css/custom.css`

```css
:root {
  --primary-color: #007bff;      /* Change primary blue */
  --success-color: #28a745;      /* Change "Hire Me" green */
  --danger-color: #dc3545;       /* Change "Call Me" red */
}
```

### Update Page Title

**File**: `index.html` (Head section)

```html
<title>Your Name - Web Developer Portfolio</title>
```

### Change Navbar Brand Text

**File**: `index.html`

```html
<a class="navbar-brand fw-bold" href="#home">
  <i class="fas fa-code"></i> Your Name Here
</a>
```

## Features Explained

### 🌓 Dark Mode
- Click moon icon to toggle dark mode
- Preference is saved automatically
- Works offline

### ⏰ Bangladesh Time
- Footer shows live Bangladesh time (UTC+6)
- Updates every second automatically
- Shows date and current time

### 📱 Responsive Design
- Works on all devices
- Mobile menu appears on small screens
- Touch-friendly buttons

### ✨ Animations
- Smooth scrolling
- Fade-in effects
- Hover animations on buttons and cards

## File Sizes

| File | Size |
|------|------|
| index.html | ~10 KB |
| app.js | ~4 KB |
| custom.css | ~25 KB |
| bootstrap.min.css | ~170 KB |
| bootstrap.min.js | ~75 KB |
| **Total** | **~280 KB** |

## Browser Support

✅ Chrome, Firefox, Safari, Edge (Latest versions)
✅ Mobile: iOS Safari, Chrome Android
✅ All modern browsers

## Performance

- ⚡ Fast load time
- 🎨 Smooth 60fps animations
- 💾 Minimal file sizes
- 📊 Optimized for mobile

## Troubleshooting

### Time not showing?
- Check internet connection
- Browser might need permission for timezone
- Refresh the page

### Dark mode not working?
- Clear browser cache
- Try a different browser
- Check if localStorage is enabled

### Buttons not working?
- Check phone number format
- Ensure email is valid
- Test in different browser

### Mobile menu not opening?
- Make sure Bootstrap JS is loaded
- Check if jQuery is included
- Try different browser

## Tips & Tricks

1. **Update Content Regularly**: Keep your projects and skills current
2. **Add Images**: Create an `img/` folder with project screenshots
3. **Mobile First**: Always test on mobile devices
4. **Fast Loading**: Compress images to reduce load time
5. **SEO Friendly**: Update meta tags in HTML head
6. **Analytics**: Add Google Analytics to track visitors

## Next Steps

1. ✅ Customize content with your information
2. ✅ Add your projects to portfolio section
3. ✅ Update social media links
4. ✅ Test on mobile devices
5. ✅ Share your portfolio link
6. ✅ Monitor with analytics

## Support Resources

- Bootstrap Docs: https://getbootstrap.com/docs
- jQuery Docs: https://jquery.com/
- Font Awesome: https://fontawesome.com/
- MDN Web Docs: https://developer.mozilla.org/

---

**Happy coding!** 🚀
