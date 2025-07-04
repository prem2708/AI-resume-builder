import React from 'react';
import { WorkExperience } from '../../types/resume';
import { Plus, Trash2, Building, Briefcase, Calendar } from 'lucide-react';

interface WorkExperienceFormProps {
  data: WorkExperience[];
  onChange: (data: WorkExperience[]) => void;
}

const WorkExperienceForm: React.FC<WorkExperienceFormProps> = ({ data, onChange }) => {
  const addExperience = () => {
    const newExperience: WorkExperience = {
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

  const removeExperience = (id: string) => {
    onChange(data.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof WorkExperience, value: any) => {
    onChange(data.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Work Experience</h3>
        <button
          onClick={addExperience}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Experience</span>
        </button>
      </div>

      {data.map((experience) => (
        <div key={experience.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">Experience Entry</h4>
            <button
              onClick={() => removeExperience(experience.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="inline h-4 w-4 mr-1" />
                Company *
              </label>
              <input
                type="text"
                value={experience.company}
                onChange={(e) => updateExperience(experience.id, 'company', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="inline h-4 w-4 mr-1" />
                Position *
              </label>
              <input
                type="text"
                value={experience.position}
                onChange={(e) => updateExperience(experience.id, 'position', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Job Title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                Start Date *
              </label>
              <input
                type="month"
                value={experience.startDate}
                onChange={(e) => updateExperience(experience.id, 'startDate', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline h-4 w-4 mr-1" />
                End Date
              </label>
              <input
                type="month"
                value={experience.endDate}
                onChange={(e) => updateExperience(experience.id, 'endDate', e.target.value)}
                disabled={experience.current}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`current-${experience.id}`}
              checked={experience.current}
              onChange={(e) => updateExperience(experience.id, 'current', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={`current-${experience.id}`} className="text-sm text-gray-700">
              I currently work here
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              Job Description
              <button
                type="button"
                className="ml-2 text-blue-600 hover:underline text-xs border border-blue-200 rounded px-2 py-1 bg-blue-50"
                onClick={async () => {
                  // Use a custom event or callback to trigger AI suggestion for this job
                  const prompt = `Write a concise, impactful job description for this role: ${experience.position} at ${experience.company}. Include responsibilities and achievements. Context: ${experience.description}`;
                  if (window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent('ai-generate-job-description', {
                      detail: {
                        prompt,
                        experienceId: experience.id
                      }
                    }));
                  }
                }}
              >
                Generate with AI
              </button>
            </label>
            <textarea
              value={experience.description}
              onChange={(e) => updateExperience(experience.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe your responsibilities, achievements, and key accomplishments..."
            />
          </div>
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8">
          <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No work experience added yet</p>
          <p className="text-sm text-gray-400">Click "Add Experience" to get started</p>
        </div>
      )}
    </div>
  );
};

export default WorkExperienceForm;