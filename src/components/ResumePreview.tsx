import { ResumeData, TemplateType } from '../types';
import { Mail, Phone, MapPin, Linkedin, Globe, GraduationCap, Briefcase, Star } from 'lucide-react';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
}

export default function ResumePreview({ data, template }: ResumePreviewProps) {
  const { personalInfo, summary, education, experience, skills } = data;

  const ModernTemplate = () => (
    <div className="bg-white p-6 min-h-[297mm]">
      <div className="border-b-4 border-purple-600 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Linkedin className="w-4 h-4" />
              {personalInfo.linkedin}
            </span>
          )}
          {personalInfo.website && (
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              {personalInfo.website}
            </span>
          )}
        </div>
      </div>

      {summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}
      {!summary && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-2">Professional Summary</h2>
          <p className="text-gray-400 italic">Your professional summary will appear here...</p>
        </div>
      )}

      {experience.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Work Experience
          </h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-purple-600">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-1 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Work Experience
          </h2>
          <p className="text-gray-400 italic">No experience added yet</p>
        </div>
      )}

      {education.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-800">{edu.degree} in {edu.field}</h3>
                  <p className="text-purple-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">
                  {edu.startDate} - {edu.endDate}
                </span>
              </div>
              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </h2>
          <p className="text-gray-400 italic">No education added yet</p>
        </div>
      )}

      {skills.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill.id} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-purple-600 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5" />
            Skills
          </h2>
          <p className="text-gray-400 italic">No skills added yet</p>
        </div>
      )}
    </div>
  );

  const ClassicTemplate = () => (
    <div className="bg-white p-6 min-h-[297mm] font-serif">
      <div className="text-center border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex justify-center gap-4 mt-2 text-sm text-gray-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.location && <span>| {personalInfo.location}</span>}
        </div>
      </div>

      {summary ? (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-2">Professional Summary</h2>
          <p className="text-gray-400 italic">Your professional summary will appear here...</p>
        </div>
      )}

      {experience.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3">Work Experience</h2>
          {experience.map((exp) => (
            <div key={exp.id} className="mb-4">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">{exp.position} - {exp.company}</h3>
                <span className="text-sm text-gray-600">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
              </div>
              <p className="text-gray-700 text-sm mt-1 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3">Work Experience</h2>
          <p className="text-gray-400 italic">No experience added yet</p>
        </div>
      )}

      {education.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3">Education</h2>
          {education.map((edu) => (
            <div key={edu.id} className="mb-3">
              <div className="flex justify-between">
                <h3 className="font-semibold text-gray-800">{edu.degree}, {edu.field}</h3>
                <span className="text-sm text-gray-600">{edu.startDate} - {edu.endDate}</span>
              </div>
              <p className="text-gray-700">{edu.institution}</p>
              {edu.gpa && <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>}
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3">Education</h2>
          <p className="text-gray-400 italic">No education added yet</p>
        </div>
      )}

      {skills.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3">Skills</h2>
          <p className="text-gray-700">{skills.map(s => s.name).join(', ')}</p>
        </div>
      ) : (
        <div>
          <h2 className="text-xl font-bold text-gray-800 border-b border-gray-300 mb-3">Skills</h2>
          <p className="text-gray-400 italic">No skills added yet</p>
        </div>
      )}
    </div>
  );

  const MinimalTemplate = () => (
    <div className="bg-white p-8 min-h-[297mm]">
      <h1 className="text-5xl font-light text-gray-800 mb-6">{personalInfo.fullName || 'Your Name'}</h1>
      
      <div className="text-sm text-gray-600 mb-8 space-y-1">
        {personalInfo.email && <p>{personalInfo.email}</p>}
        {personalInfo.phone && <p>{personalInfo.phone}</p>}
        {personalInfo.location && <p>{personalInfo.location}</p>}
      </div>

      {summary ? (
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      ) : (
        <div className="mb-8">
          <p className="text-gray-400 italic leading-relaxed">Your professional summary will appear here...</p>
        </div>
      )}

      {experience.length > 0 ? (
        <div className="mb-8">
          {experience.map((exp) => (
            <div key={exp.id} className="mb-6">
              <h3 className="font-medium text-gray-800">{exp.position}</h3>
              <p className="text-gray-500 text-sm">{exp.company} | {exp.startDate} - {exp.current ? 'Present' : exp.endDate}</p>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-8">
          <p className="text-gray-400 italic">No experience added yet</p>
        </div>
      )}

      {education.length > 0 ? (
        <div className="mb-8">
          {education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="font-medium text-gray-800">{edu.degree} in {edu.field}</h3>
              <p className="text-gray-500 text-sm">{edu.institution} | {edu.startDate} - {edu.endDate}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="mb-8">
          <p className="text-gray-400 italic">No education added yet</p>
        </div>
      )}

      {skills.length > 0 ? (
        <div>
          <p className="text-gray-700">{skills.map(s => s.name).join(' • ')}</p>
        </div>
      ) : (
        <div>
          <p className="text-gray-400 italic">No skills added yet</p>
        </div>
      )}
    </div>
  );

  const ProfessionalTemplate = () => (
    <div className="bg-slate-50 p-6 min-h-[297mm]">
      <div className="bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-slate-800">{personalInfo.fullName || 'Your Name'}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-sm text-slate-600">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {summary ? (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-2">Executive Summary</h2>
            <p className="text-sm text-slate-700 leading-relaxed">{summary}</p>
          </div>
        ) : (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-2">Executive Summary</h2>
            <p className="text-slate-400 italic text-sm">Your executive summary will appear here...</p>
          </div>
        )}

        {experience.length > 0 ? (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-3">Professional Experience</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="mb-4 last:mb-0">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-800">{exp.position}</h3>
                    <p className="text-sm text-slate-600">{exp.company}</p>
                  </div>
                  <span className="text-xs text-slate-500">{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                </div>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-3">Professional Experience</h2>
            <p className="text-slate-400 italic text-sm">No experience added yet</p>
          </div>
        )}

        {education.length > 0 ? (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-3">Education</h2>
            {education.map((edu) => (
              <div key={edu.id} className="mb-3 last:mb-0">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-800">{edu.degree}</h3>
                    <p className="text-sm text-slate-600">{edu.institution} - {edu.field}</p>
                  </div>
                  <span className="text-xs text-slate-500">{edu.startDate} - {edu.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-3">Education</h2>
            <p className="text-slate-400 italic text-sm">No education added yet</p>
          </div>
        )}

        {skills.length > 0 ? (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-3">Core Competencies</h2>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <span key={skill.id} className="text-sm text-slate-700">• {skill.name}</span>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white p-4 shadow-sm">
            <h2 className="text-base font-bold text-slate-800 uppercase tracking-wide mb-3">Core Competencies</h2>
            <p className="text-slate-400 italic text-sm">No skills added yet</p>
          </div>
        )}
      </div>
    </div>
  );

  const templates = {
    modern: ModernTemplate,
    classic: ClassicTemplate,
    minimal: MinimalTemplate,
    professional: ProfessionalTemplate,
  };

  const Template = templates[template];

  return (
    <div id="resume-preview" className="w-full transform scale-105 origin-top">
      <Template />
    </div>
  );
}
