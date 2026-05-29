import { Education } from '../types';
import { GraduationCap, Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

export default function EducationForm({ data, onChange }: EducationFormProps) {
  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      field: '',
      startDate: '',
      endDate: '',
      gpa: ''
    };
    onChange([...data, newEducation]);
  };

  const updateEducation = (id: string, field: keyof Education, value: string | boolean) => {
    onChange(data.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));
  };

  const removeEducation = (id: string) => {
    onChange(data.filter(edu => edu.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Education</h2>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Education
        </button>
      </div>

      {data.map((education) => (
        <div key={education.id} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
          <div className="flex justify-end">
            <button
              onClick={() => removeEducation(education.id)}
              className="text-red-400 hover:text-red-300"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">Institution *</label>
            <input
              type="text"
              value={education.institution}
              onChange={(e) => updateEducation(education.id, 'institution', e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Harvard University"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Degree *</label>
              <input
                type="text"
                value={education.degree}
                onChange={(e) => updateEducation(education.id, 'degree', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Bachelor of Science"
              />
            </div>

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Field *</label>
              <input
                type="text"
                value={education.field}
                onChange={(e) => updateEducation(education.id, 'field', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Computer Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Start Date *</label>
              <input
                type="month"
                value={education.startDate}
                onChange={(e) => updateEducation(education.id, 'startDate', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">End Date *</label>
              <input
                type="month"
                value={education.endDate}
                onChange={(e) => updateEducation(education.id, 'endDate', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">GPA (Optional)</label>
            <input
              type="text"
              value={education.gpa}
              onChange={(e) => updateEducation(education.id, 'gpa', e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="3.8/4.0"
            />
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-purple-300">
          <GraduationCap className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No education added yet. Click "Add Education" to get started.</p>
        </div>
      )}
    </div>
  );
}
