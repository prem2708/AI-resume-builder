import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Download, Brain, Sparkles } from 'lucide-react';

const TemplatesPage: React.FC = () => {
  const templates = [
    {
      id: 1,
      name: 'Modern Professional',
      description: 'Clean, modern design perfect for tech and business professionals',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Professional',
      data: {
        personalInfo: {
          fullName: 'Alex Johnson',
          email: 'alex.johnson@email.com',
          phone: '+1 (555) 123-4567',
          location: 'San Francisco, CA',
          website: 'https://alexjohnson.dev',
          linkedin: 'https://linkedin.com/in/alexjohnson',
          github: 'https://github.com/alexjohnson'
        },
        summary: 'Experienced software engineer with 5+ years developing scalable web applications. Passionate about clean code, user experience, and innovative solutions.',
        workExperience: [
          {
            id: '1',
            company: 'TechCorp Inc.',
            position: 'Senior Software Engineer',
            startDate: '2022-01',
            endDate: '',
            current: true,
            description: 'Lead development of microservices architecture serving 1M+ users. Mentored junior developers and improved deployment efficiency by 40%.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Stanford University',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2016-09',
            endDate: '2020-06',
            gpa: '3.8/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'JavaScript', level: 'Expert' as const },
          { id: '2', name: 'React', level: 'Expert' as const },
          { id: '3', name: 'Node.js', level: 'Advanced' as const },
          { id: '4', name: 'Python', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'E-commerce Platform',
            description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing and inventory management.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            url: 'https://github.com/alexjohnson/ecommerce'
          }
        ]
      }
    },
    {
      id: 2,
      name: 'Creative Portfolio',
      description: 'Showcase your creative work with this visually appealing template',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Creative',
      data: {
        personalInfo: {
          fullName: 'Maya Chen',
          email: 'maya.chen@design.com',
          phone: '+1 (555) 987-6543',
          location: 'New York, NY',
          website: 'https://mayachen.design',
          linkedin: 'https://linkedin.com/in/mayachen',
          github: ''
        },
        summary: 'Creative UX/UI designer with 4+ years of experience crafting beautiful, user-centered digital experiences. Specialized in mobile-first design and design systems.',
        workExperience: [
          {
            id: '1',
            company: 'Design Studio Pro',
            position: 'Senior UX Designer',
            startDate: '2021-03',
            endDate: '',
            current: true,
            description: 'Lead design for mobile applications with 500K+ downloads. Created comprehensive design systems and improved user engagement by 35%.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Parsons School of Design',
            degree: 'Bachelor of Fine Arts',
            field: 'Communication Design',
            startDate: '2017-09',
            endDate: '2021-05',
            gpa: '3.9/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'Figma', level: 'Expert' as const },
          { id: '2', name: 'Adobe Creative Suite', level: 'Expert' as const },
          { id: '3', name: 'Prototyping', level: 'Advanced' as const },
          { id: '4', name: 'User Research', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Mobile Banking App',
            description: 'Designed complete UX/UI for a mobile banking application focusing on accessibility and user trust.',
            technologies: ['Figma', 'Principle', 'InVision'],
            url: 'https://dribbble.com/mayachen/banking-app'
          }
        ]
      }
    },
    {
      id: 3,
      name: 'Academic Scholar',
      description: 'Traditional format ideal for academic and research positions',
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Academic',
      data: {
        personalInfo: {
          fullName: 'Dr. Sarah Williams',
          email: 'sarah.williams@university.edu',
          phone: '+1 (555) 456-7890',
          location: 'Boston, MA',
          website: 'https://sarahwilliams.academia.edu',
          linkedin: 'https://linkedin.com/in/drsarahwilliams',
          github: ''
        },
        summary: 'Research scientist with 8+ years of experience in computational biology and machine learning. Published 15+ peer-reviewed papers and secured $2M+ in research funding.',
        workExperience: [
          {
            id: '1',
            company: 'Harvard Medical School',
            position: 'Research Scientist',
            startDate: '2020-01',
            endDate: '',
            current: true,
            description: 'Lead computational biology research projects. Developed novel algorithms for genomic data analysis and supervised graduate students.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'MIT',
            degree: 'Ph.D.',
            field: 'Computational Biology',
            startDate: '2014-09',
            endDate: '2019-12',
            gpa: ''
          }
        ],
        skills: [
          { id: '1', name: 'Python', level: 'Expert' as const },
          { id: '2', name: 'R', level: 'Expert' as const },
          { id: '3', name: 'Machine Learning', level: 'Expert' as const },
          { id: '4', name: 'Bioinformatics', level: 'Expert' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Genomic Analysis Pipeline',
            description: 'Developed open-source pipeline for large-scale genomic data analysis, used by 50+ research institutions worldwide.',
            technologies: ['Python', 'Docker', 'AWS'],
            url: 'https://github.com/sarahwilliams/genomic-pipeline'
          }
        ]
      }
    },
    {
      id: 4,
      name: 'Executive Level',
      description: 'Sophisticated design for senior management and executive roles',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'Executive',
      data: {
        personalInfo: {
          fullName: 'Michael Rodriguez',
          email: 'michael.rodriguez@executive.com',
          phone: '+1 (555) 321-0987',
          location: 'Chicago, IL',
          website: 'https://michaelrodriguez.com',
          linkedin: 'https://linkedin.com/in/michaelrodriguez',
          github: ''
        },
        summary: 'Strategic executive leader with 15+ years driving digital transformation and revenue growth. Successfully scaled organizations from startup to IPO with proven track record in P&L management.',
        workExperience: [
          {
            id: '1',
            company: 'Global Tech Solutions',
            position: 'Chief Technology Officer',
            startDate: '2019-01',
            endDate: '',
            current: true,
            description: 'Led digital transformation initiatives resulting in 200% revenue growth. Built and managed engineering teams of 100+ across multiple locations.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Wharton School',
            degree: 'MBA',
            field: 'Executive Management',
            startDate: '2005-09',
            endDate: '2007-05',
            gpa: ''
          }
        ],
        skills: [
          { id: '1', name: 'Strategic Planning', level: 'Expert' as const },
          { id: '2', name: 'Team Leadership', level: 'Expert' as const },
          { id: '3', name: 'Digital Transformation', level: 'Expert' as const },
          { id: '4', name: 'P&L Management', level: 'Expert' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Digital Platform Migration',
            description: 'Led company-wide migration to cloud infrastructure, reducing operational costs by 40% and improving system reliability.',
            technologies: ['AWS', 'Kubernetes', 'Microservices'],
            url: ''
          }
        ]
      }
    }
  ];

  const handlePreview = (template: any) => {
    // Store template data in localStorage for preview
    localStorage.setItem('previewResumeData', JSON.stringify(template.data));
    // Open preview in new tab
    window.open('/builder?preview=true', '_blank');
  };

  const handleUseTemplate = (template: any) => {
    // Store template data in localStorage
    localStorage.setItem('selectedTemplate', JSON.stringify(template.data));
    // Navigate to builder
    window.location.href = '/builder?template=' + template.id;
  };

  const handleAIRecommendation = () => {
    // Navigate to builder with AI recommendation flag
    window.location.href = '/builder?ai-recommend=true';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Templates</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our professionally designed templates to create your perfect resume
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template) => (
            <div key={template.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                <img
                  src={template.image}
                  alt={template.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {template.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-4">{template.description}</p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => handlePreview(template)}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview</span>
                  </button>
                  <button 
                    onClick={() => handleUseTemplate(template)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Use</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <div className="flex justify-center mb-4">
              <Brain className="h-12 w-12" />
            </div>
            <h2 className="text-2xl font-bold mb-4">
              Can't find the right template?
            </h2>
            <p className="text-blue-100 mb-6">
              Our AI can help you create a custom resume tailored to your industry and experience level
            </p>
            <button 
              onClick={handleAIRecommendation}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center space-x-2"
            >
              <Sparkles className="h-5 w-5" />
              <span>Get AI Recommendations</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;