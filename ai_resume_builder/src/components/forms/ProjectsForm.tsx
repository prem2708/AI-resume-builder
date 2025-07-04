import React from 'react';
import { Plus, Trash2, FolderOpen, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

const ProjectsForm: React.FC<ProjectsFormProps> = ({ data, onChange }) => {
  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      name: '',
      description: '',
      technologies: [],
      url: ''
    };
    onChange([...data, newProject]);
  };

  const removeProject = (id: string) => {
    onChange(data.filter(project => project.id !== id));
  };

  const updateProject = (id: string, field: keyof Project, value: any) => {
    onChange(data.map(project => 
      project.id === id ? { ...project, [field]: value } : project
    ));
  };

  const updateTechnologies = (id: string, techString: string) => {
    const technologies = techString.split(',').map(tech => tech.trim()).filter(tech => tech);
    updateProject(id, 'technologies', technologies);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
        <button
          onClick={addProject}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Add Project</span>
        </button>
      </div>

      {data.map((project) => (
        <div key={project.id} className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-start">
            <h4 className="font-medium text-gray-900">Project Entry</h4>
            <button
              onClick={() => removeProject(project.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FolderOpen className="inline h-4 w-4 mr-1" />
                Project Name *
              </label>
              <input
                type="text"
                value={project.name}
                onChange={(e) => updateProject(project.id, 'name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Project Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <ExternalLink className="inline h-4 w-4 mr-1" />
                Project URL (Optional)
              </label>
              <input
                type="url"
                value={project.url}
                onChange={(e) => updateProject(project.id, 'url', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="https://github.com/username/project"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Description *
            </label>
            <textarea
              value={project.description}
              onChange={(e) => updateProject(project.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Describe what the project does, your role, and key achievements..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technologies Used
            </label>
            <input
              type="text"
              value={project.technologies.join(', ')}
              onChange={(e) => updateTechnologies(project.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="React, Node.js, MongoDB, AWS (separate with commas)"
            />
            <p className="text-xs text-gray-500 mt-1">Separate technologies with commas</p>
          </div>

          {project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}

      {data.length === 0 && (
        <div className="text-center py-8">
          <FolderOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No projects added yet</p>
          <p className="text-sm text-gray-400">Click "Add Project" to get started</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;