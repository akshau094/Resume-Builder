import { ResumeData, DesignSettings } from "@/types/resume";
import { Card } from "@/components/ui/card";
import { Eye } from "lucide-react";

interface ResumePreviewProps {
  resumeData: ResumeData;
  designSettings: DesignSettings;
}

export const ResumePreview = ({ resumeData, designSettings }: ResumePreviewProps) => {
  const { personalInfo, content } = resumeData;

  const getFontSize = () => {
    const sizes: { [key: string]: string } = {
      "10pt": "text-xs",
      "11pt": "text-sm",
      "12pt": "text-base",
      "13pt": "text-lg",
      "14pt": "text-xl",
    };
    return sizes[designSettings.fontSize] || "text-base";
  };

  const getMargin = () => `p-${Math.floor(designSettings.margin / 4)}`;

  const renderSection = (title: string, content: string, icon?: string) => {
    if (!content.trim()) return null;

    return (
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-2 pb-1 border-b-2 border-primary uppercase tracking-wide">
          {icon && <span className="mr-2">{icon}</span>}
          {title}
        </h2>
        <div className="whitespace-pre-line text-foreground/90 leading-relaxed">
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full lg:w-1/2 bg-preview-bg overflow-y-auto">
      <div className="sticky top-0 bg-card border-b border-border p-4 shadow-sm z-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Eye className="w-4 h-4" />
          <span className="font-medium">Live Preview</span>
          <span className="text-xs">• {designSettings.template}</span>
        </div>
      </div>

      <div className="flex justify-center p-8">
        <Card className="w-full max-w-4xl bg-card shadow-xl animate-fade-in">
          <div className={`${getMargin()} ${getFontSize()}`}>
            {/* Header Section */}
            <div className="text-center mb-8 border-b-4 border-primary pb-6">
              {personalInfo.includePhoto && personalInfo.photo && (
                <div className="flex justify-center mb-4">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
                  />
                </div>
              )}
              
              <h1 className="text-4xl font-bold mb-2 text-primary uppercase tracking-wider">
                {personalInfo.name || "Your Name"}
              </h1>
              
              <div className="text-sm text-muted-foreground space-y-1">
                {personalInfo.email && (
                  <div>✉️ {personalInfo.email}</div>
                )}
                {personalInfo.phone && (
                  <div>📱 {personalInfo.phone}</div>
                )}
                {personalInfo.address && (
                  <div>📍 {personalInfo.address}</div>
                )}
                {personalInfo.includeLinkedin && personalInfo.linkedin && (
                  <div>💼 {personalInfo.linkedin}</div>
                )}
                {personalInfo.includeWebsite && personalInfo.website && (
                  <div>🌐 {personalInfo.website}</div>
                )}
              </div>
            </div>

            {/* Content Sections */}
            <div style={{ lineHeight: designSettings.lineSpacing }}>
              {renderSection("Professional Summary", content.summary, "🎯")}
              {renderSection("Work Experience", content.experience, "💼")}
              {renderSection("Education", content.education, "🎓")}
              {renderSection("Skills & Technologies", content.skills, "⚡")}
              {renderSection("Projects", content.projects, "🚀")}
              {renderSection("Certifications", content.certifications, "🏆")}
            </div>

            {!personalInfo.name && !content.summary && (
              <div className="text-center py-12 text-muted-foreground">
                <p className="text-lg mb-2">Start building your resume</p>
                <p className="text-sm">Fill in your information on the left to see it appear here</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
