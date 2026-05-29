import { Skill } from '../types';
import { Star, Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

export default function SkillsForm({ data, onChange }: SkillsFormProps) {
  const addSkill = () => {
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: '',
      level: 'Intermediate'
    };
    onChange([...data, newSkill]);
  };

  const updateSkill = (id: string, field: keyof Skill, value: string) => {
    onChange(data.map(skill => skill.id === id ? { ...skill, [field]: value } : skill));
  };

  const removeSkill = (id: string) => {
    onChange(data.filter(skill => skill.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Skills</h2>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          Add Skill
        </button>
      </div>

      {data.map((skill) => (
        <div key={skill.id} className="p-4 bg-white/5 rounded-lg border border-white/10 space-y-3">
          <div className="flex justify-end">
            <button
              onClick={() => removeSkill(skill.id)}
              className="text-red-400 hover:text-red-300"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">Skill Name *</label>
            <input
              type="text"
              value={skill.name}
              onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="JavaScript"
            />
          </div>

          <div>
            <label className="block text-purple-200 text-sm font-medium mb-2">Proficiency Level</label>
            <select
              value={skill.level}
              onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
              className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="flex gap-1">
            {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
              <Star
                key={level}
                className={`w-5 h-5 ${
                  ['Beginner', 'Intermediate', 'Advanced', 'Expert'].indexOf(skill.level) >= index
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8 text-purple-300">
          <Star className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p>No skills added yet. Click "Add Skill" to get started.</p>
        </div>
      )}
    </div>
  );
}
