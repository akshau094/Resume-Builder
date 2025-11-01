import { useState } from "react";
import { Header } from "@/components/resume/Header";
import { FormEditor } from "@/components/resume/FormEditor";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { ResumeData, DesignSettings } from "@/types/resume";

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
      photo: null,
      includePhoto: false,
      includeLinkedin: false,
      includeWebsite: false,
    },
    content: {
      summary: "",
      experience: "",
      education: "",
      skills: "",
      projects: "",
      certifications: "",
    },
  });

  const [designSettings, setDesignSettings] = useState<DesignSettings>({
    template: "Classic Professional",
    fontSize: "12pt",
    colorScheme: "Professional Blue",
    margin: 25,
    lineSpacing: 1.2,
  });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header 
        resumeData={resumeData} 
        setResumeData={setResumeData}
        designSettings={designSettings}
      />
      
      <main className="flex-1 flex flex-col lg:flex-row gap-0 overflow-hidden">
        <FormEditor 
          resumeData={resumeData}
          setResumeData={setResumeData}
          designSettings={designSettings}
          setDesignSettings={setDesignSettings}
        />
        
        <ResumePreview 
          resumeData={resumeData}
          designSettings={designSettings}
        />
      </main>
    </div>
  );
};

export default Index;
