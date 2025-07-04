import React, { useState } from 'react';
import { Skill } from '../../types/resume';
import { Plus, Trash2, Code, Star } from 'lucide-react';

interface SkillsFormProps {
  data: Skill[];
  onChange: (data: Skill[]) => void;
}

const SkillsForm: React.FC<SkillsFormProps> = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Intermediate' as const });

  const addSkill = () => {
    if (!newSkill.name.trim()) return;
    
    const skill: Skill = {
      id: Date.now().toString(),
      name: newSkill.name.trim(),
      level: newSkill.level
    };
    
    onChange([...data, skill]);
    setNewSkill({ name: '', level: 'Intermediate' });
  };

  const removeSkill = (id: string) => {
    onChange(data.filter(skill => skill.id !== id));
  };

  const updateSkill = (id: string, field: keyof Skill, value: any) => {
    onChange(data.map(skill => 
      skill.id === id ? { ...skill, [field]: value } : skill
    ));
  };

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'] as const;

  const getStarCount = (level: string) => {
    switch (level) {
      case 'Beginner': return 1;
      case 'Intermediate': return 2;
      case 'Advanced': return 3;
      case 'Expert': return 4;
      default: return 2;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
      </div>

      {/* Add New Skill */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-4">Add New Skill</h4>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={newSkill.name}
              onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Skill name (e.g., JavaScript, Project Management)"
            />
          </div>
          <div>
            <select
              value={newSkill.level}
              onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {skillLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          <button
            onClick={addSkill}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Skills List */}
      {data.length > 0 && (
        <div className="space-y-3">
          {data.map((skill) => (
            <div key={skill.id} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <input
                    type="text"
                    value={skill.name}
                    onChange={(e) => updateSkill(skill.id, 'name', e.target.value)}
                    className="text-lg font-medium text-gray-900 bg-transparent border-none focus:outline-none focus:ring-0 p-0"
                  />
                  <div className="flex items-center space-x-4 mt-2">
                    <select
                      value={skill.level}
                      onChange={(e) => updateSkill(skill.id, 'level', e.target.value)}
                      className="text-sm border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      {skillLevels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, index) => (
                        <Star
                          key={index}
                          className={`h-4 w-4 ${
                            index < getStarCount(skill.level)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeSkill(skill.id)}
                  className="text-red-600 hover:text-red-800 transition-colors ml-4"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.length === 0 && (
        <div className="text-center py-8">
          <Code className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No skills added yet</p>
          <p className="text-sm text-gray-400">Add your first skill above</p>
        </div>
      )}
    </div>
  );
};

export default SkillsForm;