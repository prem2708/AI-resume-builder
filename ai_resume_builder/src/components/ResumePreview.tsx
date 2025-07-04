import React from 'react';
import { ResumeData } from '../types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, Calendar } from 'lucide-react';

interface ResumePreviewProps {
  resumeData: ResumeData;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData }) => {
  const { personalInfo, summary, workExperience, education, skills, projects } = resumeData;

  return (
    <div id="resume-preview" className="bg-white p-8 shadow-lg max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        {personalInfo.currentJobRole && (
          <div className="text-lg text-blue-700 font-semibold mb-2">{personalInfo.currentJobRole}</div>
        )}
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          {personalInfo.website && (
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          {personalInfo.linkedin && (
            <div className="flex items-center space-x-1">
              <Linkedin className="h-4 w-4" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          {personalInfo.github && (
            <div className="flex items-center space-x-1">
              <Github className="h-4 w-4" />
              <span>{personalInfo.github}</span>
            </div>
          )}
        </div>
      </div>

      {/* Summary */}
      {summary && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </div>
      )}

      {/* Work Experience */}
      {workExperience.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
            Work Experience
          </h2>
          <div className="space-y-4">
            {workExperience.map((job) => (
              <div key={job.id} className="border-l-2 border-blue-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{job.position}</h3>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {job.startDate} - {job.current ? 'Present' : job.endDate}
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {education.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.id} className="border-l-2 border-green-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                    <p className="text-green-600 font-medium">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {edu.startDate} - {edu.endDate}
                  </div>
                </div>
                {edu.gpa && (
                  <p className="text-sm text-gray-600">GPA: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-sm text-gray-600 bg-white px-2 py-1 rounded">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-2">
            Projects
          </h2>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="border-l-2 border-purple-200 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      View Project
                    </a>
                  )}
                </div>
                <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePreview;