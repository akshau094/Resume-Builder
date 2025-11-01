import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ResumeContent } from "@/types/resume";
import { Briefcase, GraduationCap, Code, Award, FolderOpen, FileText } from "lucide-react";

interface ContentTabProps {
  content: ResumeContent;
  setContent: (content: ResumeContent) => void;
}

export const ContentTab = ({ content, setContent }: ContentTabProps) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Professional Summary
          </CardTitle>
          <CardDescription>Write a brief overview of your professional background</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content.summary}
            onChange={(e) => setContent({ ...content, summary: e.target.value })}
            placeholder="Results-driven professional with 5+ years of experience..."
            rows={4}
            className="resize-none"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Work Experience
          </CardTitle>
          <CardDescription>List your relevant work experience</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content.experience}
            onChange={(e) => setContent({ ...content, experience: e.target.value })}
            placeholder="Senior Software Engineer | ABC Corp | 2020-Present&#10;- Led development of..."
            rows={6}
            className="resize-none font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Education
          </CardTitle>
          <CardDescription>Add your educational background</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content.education}
            onChange={(e) => setContent({ ...content, education: e.target.value })}
            placeholder="Bachelor of Science in Computer Science&#10;University Name | 2016-2020&#10;GPA: 3.8/4.0"
            rows={4}
            className="resize-none font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code className="w-5 h-5" />
            Skills & Technologies
          </CardTitle>
          <CardDescription>List your technical and professional skills</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content.skills}
            onChange={(e) => setContent({ ...content, skills: e.target.value })}
            placeholder="Programming: JavaScript, Python, Java&#10;Frameworks: React, Node.js, Django&#10;Tools: Git, Docker, AWS"
            rows={4}
            className="resize-none font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="w-5 h-5" />
            Projects
          </CardTitle>
          <CardDescription>Showcase your notable projects</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content.projects}
            onChange={(e) => setContent({ ...content, projects: e.target.value })}
            placeholder="E-Commerce Platform | React, Node.js, MongoDB&#10;- Built a full-stack application..."
            rows={5}
            className="resize-none font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5" />
            Certifications
          </CardTitle>
          <CardDescription>Add your professional certifications</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            value={content.certifications}
            onChange={(e) => setContent({ ...content, certifications: e.target.value })}
            placeholder="AWS Certified Solutions Architect | 2023&#10;Google Professional Cloud Developer | 2022"
            rows={4}
            className="resize-none font-mono text-sm"
          />
        </CardContent>
      </Card>
    </div>
  );
};
