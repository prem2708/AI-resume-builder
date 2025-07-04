import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Zap, Download, Eye, Sparkles, CheckCircle } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Content',
      description: 'Generate professional resume content using Google Gemini AI technology'
    },
    {
      icon: Eye,
      title: 'Live Preview',
      description: 'See your resume come to life in real-time as you make changes'
    },
    {
      icon: Download,
      title: 'Multiple Export Options',
      description: 'Share via email, print directly, or download as PDF'
    },
    {
      icon: Sparkles,
      title: 'Beautiful Templates',
      description: 'Choose from professionally designed resume templates'
    }
  ];

  const benefits = [
    'ATS-friendly resume formats',
    'Industry-specific optimization',
    'Real-time grammar and spell checking',
    'Professional formatting',
    'Instant AI suggestions',
    'Mobile-responsive design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-blue-100 p-4 rounded-full">
              <Brain className="h-12 w-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Build Your Perfect Resume with
            <span className="text-blue-600 block">AI Intelligence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Create professional, ATS-optimized resumes in minutes using the power of Google Gemini AI. 
            Get personalized suggestions, live previews, and export options that help you land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/builder"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 group"
            >
              <span>Start Building Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/examples"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-blue-600"
            >
              View Examples
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our AI Resume Builder?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powered by cutting-edge AI technology to give you the competitive edge you need
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need for Success
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-center">
                <Zap className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of professionals who have created winning resumes with our AI technology
                </p>
                <Link
                  to="/builder"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Create Your Resume</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Dream Job is Just One Resume Away
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start building your professional resume today with the power of AI
          </p>
          <Link
            to="/builder"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <span>Get Started Free</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;