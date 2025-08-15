# Panvish Dowripilli - Portfolio Website

A stunning, high-impact, single-page portfolio website built with React, GSAP, and Tailwind CSS. This portfolio showcases advanced front-end animation skills with a "scrollytelling" experience that will impress recruiters and HR professionals.

## 🚀 Features

- **Cinematic Animations**: GSAP-powered animations with ScrollTrigger for smooth scroll-based reveals
- **Interactive Elements**: Hover effects, magnetic buttons, and dynamic transformations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Dark theme with gradient accents and glass-morphism effects
- **Performance Optimized**: Efficient animations using transform properties
- **Accessible**: Proper semantic HTML and keyboard navigation support

## 🎨 Design Highlights

- **Hero Section**: Letter-by-letter name animation with staggered social media icons
- **About Section**: Two-column layout with animated text reveal and interactive achievement cards
- **Projects Section**: Landing animations for project cards with hover effects
- **Skills Section**: Bouncy elastic animations for skill icons
- **Contact Section**: Magnetic button effect and gradient focus states

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **GSAP 3** - Professional-grade animations
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd panvish-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.jsx           # Hero section with name animation
│   ├── About.jsx          # About section with achievements
│   ├── Projects.jsx       # Projects showcase
│   ├── Skills.jsx         # Skills and technologies
│   ├── Contact.jsx        # Contact form and info
│   └── ParticleBackground.jsx # Animated background particles
├── App.jsx                # Main app component
├── main.jsx              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Key Animation Features

### GSAP ScrollTrigger Integration
- Smooth scroll-based animations
- Staggered element reveals
- Performance-optimized transforms

### Interactive Hover Effects
- Social media icon scaling
- Project card transformations
- Skill icon rotations
- Achievement card lifts

### Advanced Animations
- Letter-by-letter text reveals
- Elastic bouncy effects
- Magnetic button interactions
- Particle background system

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary gradient: Cyan to Teal
- Background: Dark slate to purple
- Accent colors: Customizable in the config

### Animations
GSAP animations are configured in each component's `useEffect` hook. Timing and easing can be adjusted for different effects.

### Content
Update the content in each component to match your personal information:
- Personal details in `Hero.jsx`
- About text in `About.jsx`
- Projects in `Projects.jsx`
- Skills in `Skills.jsx`
- Contact information in `Contact.jsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🚀 Performance Tips

- Animations use `transform` and `opacity` for optimal performance
- GSAP ScrollTrigger is properly cleaned up on component unmount
- Images and assets are optimized for web delivery
- CSS is purged in production builds

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, reach out to:
- Email: panvishd@gmail.com
- Phone: 8639460413

---

**Built with ❤️ using React, GSAP, and Tailwind CSS**
