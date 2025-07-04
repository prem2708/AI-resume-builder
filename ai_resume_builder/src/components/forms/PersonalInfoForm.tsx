import React from 'react';
import { PersonalInfo } from '../../types/resume';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
  summary: string;
  onSummaryChange: (summary: string) => void;
}

const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({ 
  data, 
  onChange, 
  summary, 
  onSummaryChange 
}) => {
  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...data,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <User className="inline h-4 w-4 mr-1" />
            Full Name *
          </label>
          <input
            type="text"
            value={data.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <span role="img" aria-label="Job">💼</span> Current Job Role
          </label>
          <input
            type="text"
            value={data.currentJobRole || ''}
            onChange={(e) => handleInputChange('currentJobRole', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g. Frontend Developer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Mail className="inline h-4 w-4 mr-1" />
            Email *
          </label>
          <input
            type="email"
            value={data.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Phone className="inline h-4 w-4 mr-1" />
            Phone *
          </label>
          <input
            type="tel"
            value={data.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline h-4 w-4 mr-1" />
            Location *
          </label>
          <input
            type="text"
            value={data.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="New York, NY"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Globe className="inline h-4 w-4 mr-1" />
            Website
          </label>
          <input
            type="url"
            value={data.website}
            onChange={(e) => handleInputChange('website', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://johndoe.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Linkedin className="inline h-4 w-4 mr-1" />
            LinkedIn
          </label>
          <input
            type="url"
            value={data.linkedin}
            onChange={(e) => handleInputChange('linkedin', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://linkedin.com/in/johndoe"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Github className="inline h-4 w-4 mr-1" />
            GitHub
          </label>
          <input
            type="url"
            value={data.github}
            onChange={(e) => handleInputChange('github', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://github.com/johndoe"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Professional Summary
        </label>
        <textarea
          value={summary}
          onChange={(e) => onSummaryChange(e.target.value)}
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Write a brief summary of your professional background, skills, and career goals..."
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;