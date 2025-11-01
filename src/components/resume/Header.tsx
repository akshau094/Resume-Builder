import { Button } from "@/components/ui/button";
import { FileText, Download, Trash2, Save, Upload } from "lucide-react";
import { ResumeData, DesignSettings } from "@/types/resume";
import { useToast } from "@/hooks/use-toast";
import { generateResumeText } from "@/utils/resumeGenerator";

interface HeaderProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  designSettings: DesignSettings;
}

export const Header = ({ resumeData, setResumeData, designSettings }: HeaderProps) => {
  const { toast } = useToast();

  const handleClear = () => {
    if (confirm("Are you sure you want to clear all fields?")) {
      setResumeData({
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
      toast({
        title: "Cleared",
        description: "All fields have been cleared.",
      });
    }
  };

  const handleSave = () => {
    const dataToSave = JSON.stringify({ resumeData, designSettings });
    localStorage.setItem("resumeTemplate", dataToSave);
    toast({
      title: "Template Saved",
      description: "Your resume template has been saved successfully.",
    });
  };

  const handleLoad = () => {
    const savedData = localStorage.getItem("resumeTemplate");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setResumeData(parsed.resumeData);
      toast({
        title: "Template Loaded",
        description: "Your saved template has been loaded.",
      });
    } else {
      toast({
        title: "No Template Found",
        description: "No saved template was found.",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    if (!resumeData.personalInfo.name) {
      toast({
        title: "Missing Information",
        description: "Please enter your name before generating the resume.",
        variant: "destructive",
      });
      return;
    }

    const content = generateResumeText(resumeData, designSettings);
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    const timestamp = new Date().toISOString().split("T")[0];
    link.download = `Resume_${resumeData.personalInfo.name.replace(/\s+/g, "_")}_${timestamp}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Resume Generated!",
      description: "Your resume has been downloaded successfully.",
    });
  };

  return (
    <header className="bg-header-gradient text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileText className="w-8 h-8" />
            <div>
              <h1 className="text-2xl font-bold">Professional Resume Builder</h1>
              <p className="text-sm opacity-90">Create stunning resumes in minutes</p>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-2">
            <Button
              onClick={handleLoad}
              variant="secondary"
              size="sm"
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Load
            </Button>
            
            <Button
              onClick={handleSave}
              variant="secondary"
              size="sm"
              className="gap-2"
            >
              <Save className="w-4 h-4" />
              Save
            </Button>
            
            <Button
              onClick={handleClear}
              variant="destructive"
              size="sm"
              className="gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </Button>
            
            <Button
              onClick={handleDownload}
              className="gap-2 bg-accent hover:bg-accent-hover"
              size="sm"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
