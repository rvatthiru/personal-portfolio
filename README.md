# Portfolio Website - Thirunarayanan Raman

A modern, interactive, narrative-style portfolio website for a Data Analytics, Business Intelligence, and Data Science professional.

## 🚀 Features

- **Modern Design**: Elegant dark theme with gradient accents
- **Smooth Animations**: Framer Motion for engaging scroll animations
- **Interactive Sections**: 
  - Hero section with animated background
  - About/Journey section
  - Experience timeline
  - Projects gallery
  - Skills visualization
  - Impact highlights
  - Contact form
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Performance Optimized**: Built with Next.js for fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Charts**: React-Chart.js (for future enhancements)
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About/Journey section
│   ├── Experience.tsx      # Experience timeline
│   ├── Projects.tsx        # Projects gallery
│   ├── Skills.tsx          # Skills section
│   ├── Impact.tsx          # Impact highlights
│   └── Contact.tsx         # Contact form
├── public/
│   └── Thirunarayanan_Raman_Resume_1.pdf  # Resume
└── ...config files
```

## 🎨 Customization

### Replace Content

1. **Personal Information**: Update name, tagline, and description in `components/Hero.tsx`
2. **Experience**: Modify the `experiences` array in `components/Experience.tsx`
3. **Projects**: Update the `projects` array in `components/Projects.tsx`
4. **Skills**: Edit the `skillCategories` in `components/Skills.tsx`
5. **Contact**: Update email and social links in `components/Contact.tsx`

### Colors & Theme

The color scheme is defined using Tailwind CSS classes. Primary colors are:
- Blue: `from-blue-400 to-blue-600`
- Purple: `from-purple-400 to-purple-600`
- Pink: `from-pink-400 to-pink-600`

Modify these in the components to match your preferences.

## 📝 Content Guidelines

When updating content, remember:
- Keep paragraphs short and scannable
- Use measurable metrics (e.g., "85% accuracy", "25+ dashboards")
- Focus on impact and business value
- Use action verbs in achievements

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://www.netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy

## 📧 Contact

For questions or feedback, please reach out through the contact form on the website.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

