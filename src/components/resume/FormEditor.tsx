import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, FileText, Palette } from "lucide-react";
import { PersonalInfoTab } from "./tabs/PersonalInfoTab";
import { ContentTab } from "./tabs/ContentTab";
import { DesignTab } from "./tabs/DesignTab";
import { ResumeData, DesignSettings } from "@/types/resume";

interface FormEditorProps {
  resumeData: ResumeData;
  setResumeData: (data: ResumeData) => void;
  designSettings: DesignSettings;
  setDesignSettings: (settings: DesignSettings) => void;
}

export const FormEditor = ({
  resumeData,
  setResumeData,
  designSettings,
  setDesignSettings,
}: FormEditorProps) => {
  return (
    <div className="w-full lg:w-1/2 bg-form-bg overflow-y-auto border-r border-border">
      <div className="p-6">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="personal" className="gap-2">
              <User className="w-4 h-4" />
              Personal
            </TabsTrigger>
            <TabsTrigger value="content" className="gap-2">
              <FileText className="w-4 h-4" />
              Content
            </TabsTrigger>
            <TabsTrigger value="design" className="gap-2">
              <Palette className="w-4 h-4" />
              Design
            </TabsTrigger>
          </TabsList>

          <TabsContent value="personal" className="space-y-6 animate-fade-in">
            <PersonalInfoTab
              personalInfo={resumeData.personalInfo}
              setPersonalInfo={(info) =>
                setResumeData({ ...resumeData, personalInfo: info })
              }
            />
          </TabsContent>

          <TabsContent value="content" className="space-y-6 animate-fade-in">
            <ContentTab
              content={resumeData.content}
              setContent={(content) =>
                setResumeData({ ...resumeData, content })
              }
            />
          </TabsContent>

          <TabsContent value="design" className="space-y-6 animate-fade-in">
            <DesignTab
              designSettings={designSettings}
              setDesignSettings={setDesignSettings}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
