import React, { useState, useEffect } from 'react';
import { ResumeData } from '../types/resume';
import PersonalInfoForm from './forms/PersonalInfoForm';
import WorkExperienceForm from './forms/WorkExperienceForm';
import EducationForm from './forms/EducationForm';
import SkillsForm from './forms/SkillsForm';
import ProjectsForm from './forms/ProjectsForm';
import ResumePreview from './ResumePreview';
import ExportActions from './ExportActions';
import AIAssistant from './AIAssistant';
import { User, Briefcase, GraduationCap, Code, FolderOpen, Eye, Brain } from 'lucide-react';

const ResumeBuilder: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      linkedin: '',
      github: ''
    },
    summary: '',
    workExperience: [],
    education: [],
    skills: [],
    projects: []
  });

  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);

  // Check for template/example data on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isPreview = urlParams.get('preview');
    const templateId = urlParams.get('template');
    const exampleId = urlParams.get('example');
    const aiRecommend = urlParams.get('ai-recommend');

    if (isPreview) {
      const previewData = localStorage.getItem('previewResumeData');
      if (previewData) {
        setResumeData(JSON.parse(previewData));
        setShowPreview(true);
      }
    } else if (templateId || exampleId) {
      const templateData = localStorage.getItem('selectedTemplate');
      if (templateData) {
        setResumeData(JSON.parse(templateData));
        localStorage.removeItem('selectedTemplate'); // Clean up
      }
    } else if (aiRecommend) {
      // Show AI assistant prominently for AI recommendations
      setShowPreview(true);
    }
  }, []);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'work', label: 'Work Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen }
  ];

  const updateResumeData = (section: keyof ResumeData, data: any) => {
    setResumeData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const renderActiveForm = () => {
    switch (activeTab) {
      case 'personal':
        return (
          <PersonalInfoForm
            data={resumeData.personalInfo}
            onChange={(data) => updateResumeData('personalInfo', data)}
            summary={resumeData.summary}
            onSummaryChange={(summary) => updateResumeData('summary', summary)}
          />
        );
      case 'work':
        return (
          <WorkExperienceForm
            data={resumeData.workExperience}
            onChange={(data) => updateResumeData('workExperience', data)}
          />
        );
      case 'education':
        return (
          <EducationForm
            data={resumeData.education}
            onChange={(data) => updateResumeData('education', data)}
          />
        );
      case 'skills':
        return (
          <SkillsForm
            data={resumeData.skills}
            onChange={(data) => updateResumeData('skills', data)}
          />
        );
      case 'projects':
        return (
          <ProjectsForm
            data={resumeData.projects}
            onChange={(data) => updateResumeData('projects', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Resume Builder</h1>
          <p className="text-gray-600">Create your professional resume with AI assistance</p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-8">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Eye className="h-4 w-4" />
            <span>{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
          </button>
          <ExportActions 
            resumeData={resumeData} 
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg transition-colors ${
                    activeTab === id
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Form Content */}
            <div className="space-y-6">
              {renderActiveForm()}
            </div>
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <AIAssistant resumeData={resumeData} onSuggestionApply={setResumeData} />
            
            {showPreview && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
                <ResumePreview resumeData={resumeData} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;