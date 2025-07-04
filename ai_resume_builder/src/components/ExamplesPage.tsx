import React from 'react';
import { Eye, Download, Star, ExternalLink } from 'lucide-react';

const ExamplesPage: React.FC = () => {
  const examples = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Full-stack developer with 5 years experience',
      industry: 'Technology',
      experience: '5+ years',
      rating: 4.9,
      downloads: 1200,
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
      data: {
        personalInfo: {
          fullName: 'David Kim',
          email: 'david.kim@tech.com',
          phone: '+1 (555) 234-5678',
          location: 'Seattle, WA',
          website: 'https://davidkim.dev',
          linkedin: 'https://linkedin.com/in/davidkim',
          github: 'https://github.com/davidkim'
        },
        summary: 'Full-stack software engineer with 5+ years of experience building scalable web applications. Expertise in React, Node.js, and cloud technologies.',
        workExperience: [
          {
            id: '1',
            company: 'Microsoft',
            position: 'Senior Software Engineer',
            startDate: '2021-06',
            endDate: '',
            current: true,
            description: 'Developed and maintained cloud-based applications serving millions of users. Led cross-functional teams and improved system performance by 50%.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'University of Washington',
            degree: 'Bachelor of Science',
            field: 'Computer Science',
            startDate: '2015-09',
            endDate: '2019-06',
            gpa: '3.7/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'JavaScript', level: 'Expert' as const },
          { id: '2', name: 'React', level: 'Expert' as const },
          { id: '3', name: 'Node.js', level: 'Advanced' as const },
          { id: '4', name: 'AWS', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Task Management App',
            description: 'Built a collaborative task management application with real-time updates and team collaboration features.',
            technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
            url: 'https://github.com/davidkim/task-manager'
          }
        ]
      }
    },
    {
      id: 2,
      title: 'Marketing Manager',
      description: 'Digital marketing specialist with proven ROI track record',
      industry: 'Marketing',
      experience: '3-5 years',
      rating: 4.8,
      downloads: 890,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      data: {
        personalInfo: {
          fullName: 'Jessica Martinez',
          email: 'jessica.martinez@marketing.com',
          phone: '+1 (555) 345-6789',
          location: 'Austin, TX',
          website: 'https://jessicamartinez.com',
          linkedin: 'https://linkedin.com/in/jessicamartinez',
          github: ''
        },
        summary: 'Results-driven digital marketing manager with 4+ years of experience driving growth through data-driven campaigns. Specialized in SEM, social media, and content marketing.',
        workExperience: [
          {
            id: '1',
            company: 'Growth Marketing Co.',
            position: 'Digital Marketing Manager',
            startDate: '2020-03',
            endDate: '',
            current: true,
            description: 'Managed $500K+ annual ad spend across multiple channels. Increased lead generation by 150% and improved conversion rates by 35%.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'University of Texas',
            degree: 'Bachelor of Business Administration',
            field: 'Marketing',
            startDate: '2016-09',
            endDate: '2020-05',
            gpa: '3.6/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'Google Ads', level: 'Expert' as const },
          { id: '2', name: 'Facebook Ads', level: 'Expert' as const },
          { id: '3', name: 'Analytics', level: 'Advanced' as const },
          { id: '4', name: 'Content Strategy', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'E-commerce Growth Campaign',
            description: 'Led comprehensive digital marketing campaign that increased online sales by 200% over 6 months.',
            technologies: ['Google Ads', 'Facebook Ads', 'Google Analytics'],
            url: ''
          }
        ]
      }
    },
    {
      id: 3,
      title: 'Data Scientist',
      description: 'ML engineer with expertise in Python and R',
      industry: 'Data Science',
      experience: '2-3 years',
      rating: 4.9,
      downloads: 654,
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
      data: {
        personalInfo: {
          fullName: 'Emily Zhang',
          email: 'emily.zhang@data.com',
          phone: '+1 (555) 456-7890',
          location: 'San Francisco, CA',
          website: 'https://emilyzhang.ai',
          linkedin: 'https://linkedin.com/in/emilyzhang',
          github: 'https://github.com/emilyzhang'
        },
        summary: 'Data scientist with 3+ years of experience in machine learning and statistical analysis. Passionate about turning data into actionable insights.',
        workExperience: [
          {
            id: '1',
            company: 'DataTech Solutions',
            position: 'Data Scientist',
            startDate: '2021-01',
            endDate: '',
            current: true,
            description: 'Developed predictive models that improved business outcomes by 25%. Built automated data pipelines and created interactive dashboards for stakeholders.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'UC Berkeley',
            degree: 'Master of Science',
            field: 'Data Science',
            startDate: '2019-09',
            endDate: '2021-05',
            gpa: '3.8/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'Python', level: 'Expert' as const },
          { id: '2', name: 'Machine Learning', level: 'Advanced' as const },
          { id: '3', name: 'SQL', level: 'Advanced' as const },
          { id: '4', name: 'Tableau', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Customer Churn Prediction',
            description: 'Built machine learning model to predict customer churn with 92% accuracy, helping reduce churn by 30%.',
            technologies: ['Python', 'Scikit-learn', 'Pandas', 'AWS'],
            url: 'https://github.com/emilyzhang/churn-prediction'
          }
        ]
      }
    },
    {
      id: 4,
      title: 'Product Manager',
      description: 'Strategic product leader with B2B SaaS experience',
      industry: 'Product',
      experience: '7+ years',
      rating: 4.7,
      downloads: 432,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      data: {
        personalInfo: {
          fullName: 'Robert Chen',
          email: 'robert.chen@product.com',
          phone: '+1 (555) 567-8901',
          location: 'San Jose, CA',
          website: 'https://robertchen.pm',
          linkedin: 'https://linkedin.com/in/robertchen',
          github: ''
        },
        summary: 'Strategic product manager with 7+ years of experience leading B2B SaaS products from conception to market. Expert in user research, roadmap planning, and cross-functional collaboration.',
        workExperience: [
          {
            id: '1',
            company: 'SaaS Innovations',
            position: 'Senior Product Manager',
            startDate: '2019-08',
            endDate: '',
            current: true,
            description: 'Led product strategy for enterprise platform serving 10K+ businesses. Increased user engagement by 40% and reduced churn by 25% through data-driven product decisions.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Stanford University',
            degree: 'MBA',
            field: 'Product Management',
            startDate: '2015-09',
            endDate: '2017-06',
            gpa: ''
          }
        ],
        skills: [
          { id: '1', name: 'Product Strategy', level: 'Expert' as const },
          { id: '2', name: 'User Research', level: 'Expert' as const },
          { id: '3', name: 'Data Analysis', level: 'Advanced' as const },
          { id: '4', name: 'Agile/Scrum', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Enterprise Dashboard Redesign',
            description: 'Led complete redesign of enterprise dashboard, resulting in 50% improvement in user satisfaction scores.',
            technologies: ['Figma', 'Analytics', 'A/B Testing'],
            url: ''
          }
        ]
      }
    },
    {
      id: 5,
      title: 'UX Designer',
      description: 'User-centered design expert with portfolio of successful apps',
      industry: 'Design',
      experience: '4-6 years',
      rating: 4.8,
      downloads: 789,
      image: 'https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=400',
      data: {
        personalInfo: {
          fullName: 'Lisa Thompson',
          email: 'lisa.thompson@design.com',
          phone: '+1 (555) 678-9012',
          location: 'Portland, OR',
          website: 'https://lisathompson.design',
          linkedin: 'https://linkedin.com/in/lisathompson',
          github: ''
        },
        summary: 'User experience designer with 5+ years creating intuitive digital experiences. Specialized in mobile app design and design systems with a focus on accessibility.',
        workExperience: [
          {
            id: '1',
            company: 'Design Forward',
            position: 'Senior UX Designer',
            startDate: '2020-02',
            endDate: '',
            current: true,
            description: 'Lead UX design for mobile applications with 1M+ downloads. Created comprehensive design systems and improved user satisfaction scores by 45%.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'Art Center College',
            degree: 'Bachelor of Fine Arts',
            field: 'Interaction Design',
            startDate: '2016-09',
            endDate: '2020-05',
            gpa: '3.7/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'Figma', level: 'Expert' as const },
          { id: '2', name: 'User Research', level: 'Expert' as const },
          { id: '3', name: 'Prototyping', level: 'Advanced' as const },
          { id: '4', name: 'Design Systems', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Fitness Tracking App',
            description: 'Designed complete UX/UI for fitness tracking app that achieved 4.8 star rating and 500K+ downloads.',
            technologies: ['Figma', 'Principle', 'Zeplin'],
            url: 'https://dribbble.com/lisathompson/fitness-app'
          }
        ]
      }
    },
    {
      id: 6,
      title: 'Sales Executive',
      description: 'Top-performing sales professional with enterprise clients',
      industry: 'Sales',
      experience: '6+ years',
      rating: 4.6,
      downloads: 345,
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=400',
      data: {
        personalInfo: {
          fullName: 'Mark Johnson',
          email: 'mark.johnson@sales.com',
          phone: '+1 (555) 789-0123',
          location: 'Dallas, TX',
          website: 'https://markjohnson.sales',
          linkedin: 'https://linkedin.com/in/markjohnson',
          github: ''
        },
        summary: 'Results-driven sales executive with 6+ years of experience in enterprise B2B sales. Consistently exceeded quotas and built lasting client relationships.',
        workExperience: [
          {
            id: '1',
            company: 'Enterprise Solutions Inc.',
            position: 'Senior Sales Executive',
            startDate: '2019-01',
            endDate: '',
            current: true,
            description: 'Managed enterprise accounts worth $5M+ annually. Exceeded sales targets by 125% for three consecutive years and maintained 95% client retention rate.'
          }
        ],
        education: [
          {
            id: '1',
            institution: 'University of Texas',
            degree: 'Bachelor of Business Administration',
            field: 'Sales and Marketing',
            startDate: '2014-09',
            endDate: '2018-05',
            gpa: '3.5/4.0'
          }
        ],
        skills: [
          { id: '1', name: 'Enterprise Sales', level: 'Expert' as const },
          { id: '2', name: 'CRM Management', level: 'Expert' as const },
          { id: '3', name: 'Negotiation', level: 'Advanced' as const },
          { id: '4', name: 'Lead Generation', level: 'Advanced' as const }
        ],
        projects: [
          {
            id: '1',
            name: 'Enterprise Client Acquisition',
            description: 'Developed and executed strategy to acquire Fortune 500 clients, resulting in $2M+ in new annual revenue.',
            technologies: ['Salesforce', 'HubSpot', 'LinkedIn Sales Navigator'],
            url: ''
          }
        ]
      }
    }
  ];

  const handlePreview = (example: any) => {
    // Store example data in localStorage for preview
    localStorage.setItem('previewResumeData', JSON.stringify(example.data));
    // Open preview in new tab
    window.open('/builder?preview=true', '_blank');
  };

  const handleUse = (example: any) => {
    // Store example data in localStorage
    localStorage.setItem('selectedTemplate', JSON.stringify(example.data));
    // Navigate to builder
    window.location.href = '/builder?example=' + example.id;
  };

  const handleViewPortfolio = (example: any) => {
    if (example.data.personalInfo.website) {
      window.open(example.data.personalInfo.website, '_blank');
    } else {
      alert('Portfolio website not available for this example.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume Examples</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by successful resumes from various industries and experience levels
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            All Industries
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors border">
            Technology
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors border">
            Marketing
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors border">
            Design
          </button>
          <button className="bg-white text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors border">
            Sales
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example) => (
            <div key={example.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] bg-gray-200 relative overflow-hidden">
                <img
                  src={example.image}
                  alt={example.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {example.industry}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{example.title}</h3>
                <p className="text-gray-600 mb-3">{example.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{example.experience}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span>{example.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{example.downloads} downloads</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handlePreview(example)}
                      className="flex items-center space-x-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center text-sm"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Preview</span>
                    </button>
                    <button 
                      onClick={() => handleUse(example)}
                      className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      <Download className="h-4 w-4" />
                      <span>Use</span>
                    </button>
                  </div>
                  <button 
                    onClick={() => handleViewPortfolio(example)}
                    className="w-full flex items-center justify-center space-x-2 bg-purple-600 text-white px-3 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View Portfolio</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">
              Ready to create your own winning resume?
            </h2>
            <p className="text-blue-100 mb-6">
              Use our AI-powered builder to create a resume that stands out from the crowd
            </p>
            <button 
              onClick={() => window.location.href = '/builder'}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Start Building Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamplesPage;