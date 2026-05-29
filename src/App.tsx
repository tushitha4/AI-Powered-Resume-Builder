import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResumeData, TemplateType } from './types';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import ExperienceForm from './components/ExperienceForm';
import SkillsForm from './components/SkillsForm';
import TemplateSelector from './components/TemplateSelector';
import ResumePreview from './components/ResumePreview';
import ATSScoreChecker from './components/ATSScoreChecker';
import { Download, Sparkles, RefreshCw, Loader2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: ''
    },
    summary: '',
    education: [],
    experience: [],
    skills: []
  });

  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');
  const [activeTab, setActiveTab] = useState<'personal' | 'education' | 'experience' | 'skills' | 'ats'>('personal');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showMobilePreview, setShowMobilePreview] = useState(false);

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const canvas = await html2canvas(element, { 
      scale: 3,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });
    
    const imgData = canvas.toDataURL('image/png', 1.0);
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;
    
    pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
    pdf.save(`${resumeData.personalInfo.fullName || 'resume'}.pdf`);
  };

  const generateAISummary = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const summary = `Results-driven professional with expertise in ${resumeData.skills.map(s => s.name).join(', ') || 'various technologies'}. Proven track record of delivering high-quality solutions. Passionate about leveraging skills to drive innovation and achieve business objectives.`;
    setResumeData({ ...resumeData, summary });
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center justify-center gap-3 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            <Sparkles className="text-yellow-400" />
            AI-Powered Resume Builder
          </h1>
          <p className="text-purple-200 text-lg">Create professional resumes in minutes</p>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-8 lg:hidden">
          <button
            onClick={() => setShowMobilePreview(!showMobilePreview)}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium mb-4"
          >
            {showMobilePreview ? 'Edit Resume' : 'Preview Resume'}
          </button>
        </div>

        <div className={`grid gap-8 ${showMobilePreview ? 'grid-cols-1' : 'lg:grid-cols-2'}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`${showMobilePreview ? 'hidden' : 'block'} bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl lg:sticky lg:top-8 lg:self-start lg:block`}
          >
            <TemplateSelector selectedTemplate={selectedTemplate} onSelect={setSelectedTemplate} />
            
            <div className="flex gap-2 mb-6 mt-6 flex-wrap">
              {(['personal', 'education', 'experience', 'skills', 'ats'] as const).map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeTab === tab
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-purple-200 hover:bg-white/20'
                  }`}
                >
                  {tab === 'ats' ? 'ATS Score' : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'personal' && (
                <motion.div
                  key="personal"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <PersonalInfoForm data={resumeData.personalInfo} onChange={(personalInfo) => setResumeData({ ...resumeData, personalInfo })} />
                </motion.div>
              )}
              {activeTab === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <EducationForm data={resumeData.education} onChange={(education: any) => setResumeData({ ...resumeData, education })} />
                </motion.div>
              )}
              {activeTab === 'experience' && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExperienceForm data={resumeData.experience} onChange={(experience) => setResumeData({ ...resumeData, experience })} />
                </motion.div>
              )}
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <SkillsForm data={resumeData.skills} onChange={(skills: any) => setResumeData({ ...resumeData, skills })} />
                </motion.div>
              )}
              {activeTab === 'ats' && (
                <motion.div
                  key="ats"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <ATSScoreChecker data={resumeData} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <label className="block text-purple-200 text-sm font-medium mb-2">Professional Summary</label>
              <textarea
                value={resumeData.summary}
                onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
                placeholder="Write your professional summary..."
              />
              <div className="flex gap-2 mt-2">
                <motion.button
                  onClick={generateAISummary}
                  disabled={isGenerating}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 text-purple-300 hover:text-purple-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  {isGenerating ? 'Generating...' : 'Generate with AI'}
                </motion.button>
                {resumeData.summary && (
                  <motion.button
                    onClick={generateAISummary}
                    disabled={isGenerating}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 text-purple-300 hover:text-purple-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Regenerate
                  </motion.button>
                )}
              </div>
            </div>

            <motion.button
              onClick={handleDownloadPDF}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${showMobilePreview ? 'block' : 'hidden lg:block'} bg-white rounded-2xl p-6 shadow-2xl overflow-hidden`}
          >
            <motion.div
              key={selectedTemplate}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ResumePreview data={resumeData} template={selectedTemplate} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
