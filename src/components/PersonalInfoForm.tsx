import { PersonalInfo } from '../types';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export default function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const handleChange = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white mb-4">Personal Information</h2>
      
      <div>
        <label className="block text-purple-200 text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="John Doe"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-purple-200 text-sm font-medium mb-2">Email *</label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-purple-200 text-sm font-medium mb-2">Phone *</label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
            <input
              type="tel"
              value={data.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="+1 234 567 8900"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-purple-200 text-sm font-medium mb-2">Location *</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="New York, NY"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-purple-200 text-sm font-medium mb-2">LinkedIn</label>
          <div className="relative">
            <Linkedin className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
            <input
              type="url"
              value={data.linkedin}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="linkedin.com/in/johndoe"
            />
          </div>
        </div>

        <div>
          <label className="block text-purple-200 text-sm font-medium mb-2">Website</label>
          <div className="relative">
            <Globe className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
            <input
              type="url"
              value={data.website}
              onChange={(e) => handleChange('website', e.target.value)}
              className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="johndoe.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
