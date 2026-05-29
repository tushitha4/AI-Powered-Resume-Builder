# AI-Powered Resume Builder
live link: https://tushitha4.github.io/AI-Powered-Resume-Builder/

A modern, intelligent web application that helps users create professional and visually appealing resumes quickly and efficiently. Built with React, TypeScript, and TailwindCSS.

## ✨ Features

### Core Functionality
- **📝 Multiple Resume Templates**: Choose from 4 professionally designed templates (Modern, Classic, Minimal, Professional)
- **👤 Personal Information Management**: Add and edit personal details, contact information, and social links
- **🎓 Education Tracking**: Manage educational background with institutions, degrees, and dates
- **💼 Work Experience**: Add professional experience with descriptions and achievements
- **⚡ Skills Management**: List skills with proficiency levels
- **👁️ Real-time Preview**: See changes instantly as you type
- **📄 PDF Export**: Download resumes as high-quality PDF documents
- **🤖 AI-Powered Summaries**: Generate professional summaries automatically

### Premium Features
- **🎯 ATS Score Checker**: Analyze resume completeness and get optimization suggestions
- **✨ Smooth Animations**: Framer Motion powered transitions and interactions
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🔒 Sticky Preview**: Resume preview stays visible while editing
- **⏳ Loading States**: Professional loading indicators for AI generation
- **🔄 Regenerate Option**: Retry AI generation for better results

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AI-Powered Resume Builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎨 Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **PDF Generation**: html2canvas + jsPDF
- **State Management**: React Hooks

## 📋 Architecture

### Component Structure
```
src/
├── components/
│   ├── PersonalInfoForm.tsx    # Personal information input
│   ├── EducationForm.tsx        # Education management
│   ├── ExperienceForm.tsx       # Work experience management
│   ├── SkillsForm.tsx           # Skills management
│   ├── TemplateSelector.tsx     # Template selection UI
│   ├── ResumePreview.tsx        # Resume preview with 4 templates
│   └── ATSScoreChecker.tsx      # ATS analysis and scoring
├── types.ts                    # TypeScript type definitions
├── utils.ts                    # Utility functions
├── App.tsx                     # Main application component
└── main.tsx                    # Application entry point
```

### Key Features Implementation

#### AI Summary Generation
The AI summary generator analyzes user inputs (skills, experience, education) and creates professional summaries tailored to the user's profile.

#### ATS Score Checker
The ATS (Applicant Tracking System) score checker evaluates:
- Personal information completeness
- Summary quality and length
- Experience detail level
- Education presence
- Skills quantity
- Provides actionable suggestions for improvement

#### PDF Export
High-quality PDF generation using:
- html2canvas for rendering
- jsPDF for PDF creation
- Proper A4 page sizing
- High-resolution scaling (3x)
- White background enforcement

## 🎯 Usage Guide

1. **Select a Template**: Choose from Modern, Classic, Minimal, or Professional
2. **Fill Personal Information**: Add your name, contact details, and social links
3. **Add Education**: Include your educational background
4. **Add Experience**: List your work experience with descriptions
5. **Add Skills**: Specify your skills with proficiency levels
6. **Generate Summary**: Use AI to create a professional summary
7. **Check ATS Score**: Analyze your resume for ATS optimization
8. **Preview & Export**: Review your resume and download as PDF

## 🌟 Highlights

### User Experience
- **Intuitive Interface**: Clean, modern design with glassmorphism effects
- **Real-time Updates**: Instant preview of changes
- **Mobile-Friendly**: Tab-based navigation for mobile devices
- **Smooth Animations**: Professional transitions and hover effects

### Technical Excellence
- **Type Safety**: Full TypeScript implementation
- **Performance**: Optimized with Vite for fast builds
- **Accessibility**: Semantic HTML and keyboard navigation
- **Responsive**: Works on all screen sizes

### AI Integration
- **Smart Summaries**: Context-aware summary generation
- **Loading States**: Professional feedback during generation
- **Regenerate Option**: Multiple generation attempts for better results

## 🔮 Future Improvements

- [ ] Integration with real AI APIs (OpenAI, Anthropic)
- [ ] More resume templates
- [ ] Drag-and-drop section reordering
- [ ] Theme customization (colors, fonts, spacing)
- [ ] Resume sharing and collaboration
- [ ] Cloud storage integration
- [ ] Analytics and usage tracking
- [ ] Multi-language support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)

---

**Created with ❤️ for job seekers worldwide**
