import React from 'react';
import { ResumeData } from '../types/resume';
import { Share2, Mail, Printer } from 'lucide-react';

type ExportActionsProps = {
  resumeData: ResumeData;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ExportActions: React.FC<ExportActionsProps> = ({ resumeData, activeTab, setActiveTab }) => {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const element = document.getElementById('resume-preview');
    if (!element) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>Resume - ${resumeData.personalInfo.fullName}</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .bg-gray-50 { background-color: #f9fafb; }
            .text-gray-900 { color: #111827; }
            .text-gray-700 { color: #374151; }
            .text-gray-600 { color: #4b5563; }
            .text-blue-600 { color: #2563eb; }
            .text-green-600 { color: #059669; }
            .border-b { border-bottom: 1px solid #e5e7eb; }
            .border-l-2 { border-left: 2px solid; }
            .border-blue-200 { border-color: #dbeafe; }
            .border-green-200 { border-color: #d1fae5; }
            .border-purple-200 { border-color: #e9d5ff; }
            .pl-4 { padding-left: 1rem; }
            .mb-8 { margin-bottom: 2rem; }
            .mb-4 { margin-bottom: 1rem; }
            .mb-3 { margin-bottom: 0.75rem; }
            .mb-2 { margin-bottom: 0.5rem; }
            .pb-2 { padding-bottom: 0.5rem; }
            .space-y-4 > * + * { margin-top: 1rem; }
            .flex { display: flex; }
            .justify-between { justify-content: space-between; }
            .items-center { align-items: center; }
            .items-start { align-items: flex-start; }
            .font-bold { font-weight: 700; }
            .font-semibold { font-weight: 600; }
            .font-medium { font-weight: 500; }
            .text-3xl { font-size: 1.875rem; }
            .text-xl { font-size: 1.25rem; }
            .text-sm { font-size: 0.875rem; }
            .text-xs { font-size: 0.75rem; }
            .text-center { text-align: center; }
            .bg-purple-100 { background-color: #f3e8ff; }
            .text-purple-800 { color: #6b21a8; }
            .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
            .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
            .rounded { border-radius: 0.25rem; }
            .gap-2 { gap: 0.5rem; }
            .gap-4 { gap: 1rem; }
            .flex-wrap { flex-wrap: wrap; }
            .leading-relaxed { line-height: 1.625; }
            @media print {
              body { -webkit-print-color-adjust: exact; }
            }
          </style>
        </head>
        <body>
          ${element.innerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.print();
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Resume - ${resumeData.personalInfo.fullName}`,
          text: 'Check out my resume',
          url: window.location.href
        });
      } catch (error) {
        // Fallback: copy to clipboard if share fails
        navigator.clipboard.writeText(window.location.href);
        alert('Resume link copied to clipboard!');
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Resume link copied to clipboard!');
    }
  };

  const handleEmail = () => {
    const subject = `Resume - ${resumeData.personalInfo.fullName}`;
    const body = `Hi,\n\nI'm sharing my resume with you. You can view it at: ${window.location.href}\n\nBest regards,\n${resumeData.personalInfo.fullName}`;
    const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  // Tabs for navigation (should match ResumeBuilder)
  const tabs = [
    { id: 'personal', label: 'Personal Info' },
    { id: 'education', label: 'Education' },
    { id: 'work', label: 'Work Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
  ];

  const currentIndex = tabs.findIndex(tab => tab.id === activeTab);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };
  const handleNext = () => {
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  return (
    <div className="flex flex-wrap gap-3 items-center">
      {/* ...existing code... */}
      <button
        onClick={handleShare}
        className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <Share2 className="h-4 w-4" />
        <span>Share</span>
      </button>
      <button
        onClick={handleEmail}
        className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
      >
        <Mail className="h-4 w-4" />
        <span>Email</span>
      </button>
      <button
        onClick={handlePrint}
        className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
      >
        <Printer className="h-4 w-4" />
        <span>Print</span>
      </button>
      {/* Next and Previous buttons beside Print */}
      <button
        onClick={handlePrevious}
        className="flex items-center space-x-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-colors ml-2"
        style={{ minWidth: 90 }}
        disabled={currentIndex === 0}
      >
        <span>&larr; Previous</span>
      </button>
      <span className="mx-2 text-sm font-medium text-gray-700 select-none">{tabs[currentIndex]?.label}</span>
      <button
        onClick={handleNext}
        className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        style={{ minWidth: 70 }}
        disabled={currentIndex === tabs.length - 1}
      >
        <span>Next &rarr;</span>
      </button>
    </div>
  );
};

export default ExportActions;