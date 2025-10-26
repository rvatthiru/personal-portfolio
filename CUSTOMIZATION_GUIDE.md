# Customization Guide

This guide will help you replace the placeholder content with your actual information from your resume.

## 📝 Where to Update Content

### 1. Hero Section (`components/Hero.tsx`)
- **Line 41**: Update your full name (currently: "Thirunarayanan Raman")
- **Line 47**: Update your tagline
- **Line 53**: Update your description

### 2. About Section (`components/About.tsx`)
- **Lines 29-43**: Update the journey narrative with your actual career story
- Keep it under 150 words
- Focus on your transition from BI to Data Science

### 3. Experience Section (`components/Experience.tsx`)
- **Lines 8-31**: Replace the `experiences` array with your actual work experience
- Extract from your resume PDF
- Include:
  - Role
  - Company name
  - Period (dates)
  - 1-2 key achievements per role

**Example:**
```typescript
const experiences = [
  {
    role: 'Senior Data Analyst',
    company: 'ABC Corp',
    period: '2022 - Present',
    achievements: [
      'Developed predictive model with 85% accuracy',
      'Built 10+ dashboards improving decision-making by 40%'
    ]
  },
  // Add more roles...
];
```

### 4. Projects Section (`components/Projects.tsx`)
- **Lines 8-25**: Replace with your actual projects
- Use STAR method (Situation, Task, Action, Result)
- Include measurable impact

**Example:**
```typescript
const projects = [
  {
    title: 'Customer Churn Prediction',
    description: 'Developed predictive model with 85% accuracy using ensemble learning, reducing churn by 25%',
    tags: ['Python', 'Machine Learning', 'XGBoost'],
    image: '🔬'
  },
  // Add more projects...
];
```

### 5. Skills Section (`components/Skills.tsx`)
- **Lines 8-31**: Update with your actual skills
- Organize by category (Programming, BI Tools, Databases, ETL & Cloud)
- Adjust proficiency levels (0-100)

**Example from your resume:**
```typescript
const skillCategories = [
  {
    name: 'Programming',
    skills: ['Python', 'SQL', 'R', 'Java'],
    level: 90
  },
  {
    name: 'BI Tools',
    skills: ['Power BI', 'Tableau', 'QlikView'],
    level: 95
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
    level: 88
  },
  {
    name: 'ETL & Cloud',
    skills: ['Airbyte', 'AWS', 'Docker', 'Kubernetes'],
    level: 80
  }
];
```

### 6. Impact Section (`components/Impact.tsx`)
- **Lines 8-11**: Update with your actual metrics
- Extract quantifiable achievements from your resume

**Examples:**
- Number of dashboards created
- Model accuracy percentages
- Data volumes analyzed
- Cost savings achieved
- Team sizes managed

### 7. Contact Section (`components/Contact.tsx`)
- **Line 88**: Update email address
- **Line 99**: Update LinkedIn profile URL
- **Line 107**: Update GitHub profile URL

## 🎨 Styling Customization

### Color Scheme
The portfolio uses a gradient color scheme. To change colors, update the following classes:

- **Blue gradient**: `from-blue-400 to-blue-600`
- **Purple gradient**: `from-purple-400 to-purple-600`
- **Pink gradient**: `from-pink-400 to-pink-600`

Search and replace these in components to change the color scheme.

### Font
Currently using Inter. To change, update `app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google';
const yourFont = YourFont({ subsets: ["latin"] });
```

### Background
The gradient background is in `app/layout.tsx` line 21. Modify to your preference.

## 📄 Extracting Content from Resume

Since your resume is in PDF format, here's how to extract content:

1. **Open the PDF** in a PDF reader
2. **Copy text** section by section
3. **Paste into appropriate components** as outlined above
4. **Format as JSON arrays** where needed (experiences, projects, skills)

## ✨ Quick Start Checklist

- [ ] Update name in Hero section
- [ ] Update contact information
- [ ] Replace experience entries with real data
- [ ] Add your actual projects with metrics
- [ ] Update skills list with your tools
- [ ] Add real impact metrics
- [ ] Update social media links
- [ ] Review and refine content
- [ ] Test on mobile and desktop
- [ ] Deploy to Vercel/Netlify

## 🚀 Next Steps

After customizing content:

1. **Run development server**: `npm run dev`
2. **Preview**: Open http://localhost:3000
3. **Test responsive design**: Resize browser window
4. **Build production**: `npm run build`
5. **Deploy**: Push to GitHub and deploy on Vercel

## 💡 Tips

- Keep achievement statements under 15 words
- Use numbers and percentages for impact
- Start with action verbs (Developed, Built, Created, etc.)
- Be specific about technologies and tools
- Focus on business outcomes, not just tasks
- Proofread for typos and grammar

Good luck with your portfolio! 🎉

