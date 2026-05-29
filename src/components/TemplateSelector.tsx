import { TemplateType } from '../types';
import { LayoutTemplate } from 'lucide-react';

interface TemplateSelectorProps {
  selectedTemplate: TemplateType;
  onSelect: (template: TemplateType) => void;
}

const templates = [
  { id: 'modern' as TemplateType, name: 'Modern', description: 'Clean and contemporary' },
  { id: 'classic' as TemplateType, name: 'Classic', description: 'Traditional and professional' },
  { id: 'minimal' as TemplateType, name: 'Minimal', description: 'Simple and elegant' },
  { id: 'professional' as TemplateType, name: 'Professional', description: 'Corporate and polished' },
];

export default function TemplateSelector({ selectedTemplate, onSelect }: TemplateSelectorProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <LayoutTemplate className="w-5 h-5" />
        Select Template
      </h2>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className={`p-4 rounded-lg border-2 transition-all text-left ${
              selectedTemplate === template.id
                ? 'border-purple-500 bg-purple-500/20'
                : 'border-white/20 bg-white/5 hover:border-purple-400'
            }`}
          >
            <div className="font-medium text-white">{template.name}</div>
            <div className="text-sm text-purple-300">{template.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
