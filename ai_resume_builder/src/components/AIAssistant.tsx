import React, { useState } from 'react';
import { ResumeData } from '../types/resume';
import { Brain, Sparkles, Loader2, MessageCircle } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface AIAssistantProps {
  resumeData: ResumeData;
  onSuggestionApply: (data: ResumeData) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ resumeData, onSuggestionApply }) => {
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [customPrompt, setCustomPrompt] = useState('');

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

  const generateSuggestions = async (type: 'summary' | 'experience' | 'skills' | 'custom') => {
    setLoading(true);
    setSuggestions([]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      let prompt = '';
      switch (type) {
        case 'summary':
          prompt = `Based on this resume data, write a professional summary (2-3 sentences) that highlights key strengths and career goals. Resume data: ${JSON.stringify(resumeData)}`;
          break;
        case 'experience':
          prompt = `Review this work experience and suggest 3 improvements for better impact and ATS optimization. Focus on action verbs and quantifiable achievements. Experience: ${JSON.stringify(resumeData.workExperience)}`;
          break;
        case 'skills':
          prompt = `Based on this resume, suggest 5 additional relevant skills that would strengthen this profile. Current skills: ${JSON.stringify(resumeData.skills)}`;
          break;
        case 'custom':
          prompt = `${customPrompt} Context: ${JSON.stringify(resumeData)}`;
          break;
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (type === 'summary') {
        onSuggestionApply({
          ...resumeData,
          summary: text.trim()
        });
      } else {
        setSuggestions(text.split('\n').filter(line => line.trim()));
      }
    } catch (error) {
      console.error('AI generation error:', error);
      setSuggestions(['Error generating suggestions. Please check your API key.']);
    } finally {
      setLoading(false);
    }
  };

  const handleCustomPrompt = async () => {
    if (!customPrompt.trim()) return;
    await generateSuggestions('custom');
    setCustomPrompt('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Brain className="h-6 w-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
      </div>

      <div className="space-y-4">
        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button
            onClick={() => generateSuggestions('summary')}
            disabled={loading}
            className="flex items-center justify-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors disabled:opacity-50"
          >
            <Sparkles className="h-4 w-4" />
            <span>Generate Summary</span>
          </button>
          
          <button
            onClick={() => generateSuggestions('experience')}
            disabled={loading}
            className="flex items-center justify-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Improve Experience</span>
          </button>
          
          <button
            onClick={() => generateSuggestions('skills')}
            disabled={loading}
            className="flex items-center justify-center space-x-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors disabled:opacity-50"
          >
            <Brain className="h-4 w-4" />
            <span>Suggest Skills</span>
          </button>
        </div>

        {/* Custom Prompt */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Custom AI Request
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Ask AI anything about your resume..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleCustomPrompt}
              disabled={loading || !customPrompt.trim()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              Ask
            </button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center space-x-2 py-4">
            <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            <span className="text-gray-600">AI is thinking...</span>
          </div>
        )}

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">AI Suggestions:</h4>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <div key={index} className="bg-white p-3 rounded border text-sm text-gray-700">
                  {suggestion}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;