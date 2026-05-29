import { ResumeData } from '../types';
import { CheckCircle, XCircle, AlertCircle, Target, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface ATSScoreCheckerProps {
  data: ResumeData;
}

export default function ATSScoreChecker({ data }: ATSScoreCheckerProps) {
  const calculateScore = () => {
    let score = 0;
    const checks: { name: string; passed: boolean; weight: number }[] = [];

    // Personal Info Checks (30 points)
    if (data.personalInfo.fullName) { score += 5; checks.push({ name: 'Full Name', passed: true, weight: 5 }); }
    else checks.push({ name: 'Full Name', passed: false, weight: 5 });
    
    if (data.personalInfo.email) { score += 5; checks.push({ name: 'Email Address', passed: true, weight: 5 }); }
    else checks.push({ name: 'Email Address', passed: false, weight: 5 });
    
    if (data.personalInfo.phone) { score += 5; checks.push({ name: 'Phone Number', passed: true, weight: 5 }); }
    else checks.push({ name: 'Phone Number', passed: false, weight: 5 });
    
    if (data.personalInfo.location) { score += 5; checks.push({ name: 'Location', passed: true, weight: 5 }); }
    else checks.push({ name: 'Location', passed: false, weight: 5 });
    
    if (data.personalInfo.linkedin) { score += 5; checks.push({ name: 'LinkedIn Profile', passed: true, weight: 5 }); }
    else checks.push({ name: 'LinkedIn Profile', passed: false, weight: 5 });
    
    if (data.personalInfo.website) { score += 5; checks.push({ name: 'Website/Portfolio', passed: true, weight: 5 }); }
    else checks.push({ name: 'Website/Portfolio', passed: false, weight: 5 });

    // Summary Check (15 points)
    if (data.summary && data.summary.length > 50) { score += 15; checks.push({ name: 'Professional Summary (50+ chars)', passed: true, weight: 15 }); }
    else checks.push({ name: 'Professional Summary (50+ chars)', passed: false, weight: 15 });

    // Experience Checks (25 points)
    if (data.experience.length > 0) { score += 10; checks.push({ name: 'Work Experience Added', passed: true, weight: 10 }); }
    else checks.push({ name: 'Work Experience Added', passed: false, weight: 10 });
    
    if (data.experience.some(exp => exp.description.length > 50)) { score += 15; checks.push({ name: 'Detailed Experience Descriptions', passed: true, weight: 15 }); }
    else checks.push({ name: 'Detailed Experience Descriptions', passed: false, weight: 15 });

    // Education Checks (15 points)
    if (data.education.length > 0) { score += 15; checks.push({ name: 'Education Added', passed: true, weight: 15 }); }
    else checks.push({ name: 'Education Added', passed: false, weight: 15 });

    // Skills Checks (15 points)
    if (data.skills.length >= 3) { score += 15; checks.push({ name: '3+ Skills Listed', passed: true, weight: 15 }); }
    else checks.push({ name: '3+ Skills Listed', passed: false, weight: 15 });

    return { score, checks };
  };

  const { score, checks } = calculateScore();
  const percentage = Math.round((score / 100) * 100);
  
  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-400';
    if (percentage >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = () => {
    if (percentage >= 80) return 'Excellent';
    if (percentage >= 60) return 'Good';
    if (percentage >= 40) return 'Needs Improvement';
    return 'Poor';
  };

  const suggestions = checks.filter(c => !c.passed).map(c => c.name);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
    >
      <div className="flex items-center gap-3 mb-6">
        <Target className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-bold text-white">ATS Score Checker</h2>
      </div>

      <div className="flex items-center gap-6 mb-6">
        <div className="relative">
          <svg className="w-32 h-32 transform -rotate-90">
            <circle cx="64" cy="64" r="56" stroke="rgba(255,255,255,0.1)" strokeWidth="12" fill="none" />
            <motion.circle
              cx="64" cy="64" r="56"
              stroke={percentage >= 80 ? '#4ade80' : percentage >= 60 ? '#facc15' : '#f87171'}
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: percentage / 100 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              style={{ pathLength: percentage / 100 }}
              strokeDasharray={`${2 * Math.PI * 56}`}
              strokeDashoffset={`${2 * Math.PI * 56 * (1 - percentage / 100)}`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-3xl font-bold ${getScoreColor()}`}>{percentage}%</span>
          </div>
        </div>
        
        <div>
          <div className={`text-2xl font-bold ${getScoreColor()}`}>{getScoreLabel()}</div>
          <p className="text-purple-200 text-sm mt-1">
            {percentage >= 80 ? 'Your resume is well-optimized!' : 'Keep improving to increase your score'}
          </p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Completeness Check
        </h3>
        {checks.map((check, index) => (
          <motion.div
            key={check.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
          >
            <div className="flex items-center gap-2">
              {check.passed ? (
                <CheckCircle className="w-5 h-5 text-green-400" />
              ) : (
                <XCircle className="w-5 h-5 text-red-400" />
              )}
              <span className="text-purple-100 text-sm">{check.name}</span>
            </div>
            <span className="text-purple-300 text-xs font-medium">{check.weight} pts</span>
          </motion.div>
        ))}
      </div>

      {suggestions.length > 0 && (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 mt-0.5" />
            <div>
              <h4 className="text-yellow-400 font-semibold mb-1">Suggestions to Improve</h4>
              <ul className="text-purple-200 text-sm space-y-1">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>• Add {suggestion.toLowerCase()}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
