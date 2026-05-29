import { Experience } from '../types';
import { Briefcase, Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

export default function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      current: false,
      description: ''
    };
    onChange([...data, newExperience]);
  };

  const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
    onChange(data.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));
  };

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Work Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Experience
        </button>
      </div>

      {data.map((experience) => (
        <div key={experience.id} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
          <div className="flex justify-end">
            <button
              onClick={() => removeExperience(experience.id)}
              className="text-red-400 hover:text-red-300"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Company *</label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Google"
              />
            </div>

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Position *</label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Software Engineer"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">Start Date *</label>
              <input
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-purple-200 text-sm font-medium mb-2">End Date</label>
              <input
                type="month"
                value={experience.endDate}
                onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                disabled={experience.current}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:opacity-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id={`current-${experience.id}`}
              checked={experience.current}
              onChange={(e) => updateExperience(experience.id, 'current', e.target.checked)}
              className="w-4 h-4 rounded bg-white/10 border-white/20 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor={`current-${experience.id}`} className="text-purple-200 text-sm">
              I currently work here
            </label>
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">Description *</label>
            <textarea
              value={experience.description}
              onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows={4}
              placeholder="Describe your responsibilities and achievements..."
            />
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-purple-300">
          <Briefcase className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No experience added yet. Click "Add Experience" to get started.</p>
        </div>
      )}
    </div>
  );
}
