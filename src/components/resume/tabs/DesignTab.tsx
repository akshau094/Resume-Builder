import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { DesignSettings } from "@/types/resume";
import { Palette, Type, Frame, AlignLeft } from "lucide-react";

interface DesignTabProps {
  designSettings: DesignSettings;
  setDesignSettings: (settings: DesignSettings) => void;
}

const templates = [
  "Classic Professional",
  "Modern Creative",
  "Corporate Executive",
  "Tech Specialist",
  "Academic",
  "Minimalist",
  "Elegant",
  "Bold Graphic",
];

const fontSizes = ["10pt", "11pt", "12pt", "13pt", "14pt"];

const colorSchemes = [
  "Professional Blue",
  "Corporate Gray",
  "Creative Green",
  "Academic Black",
  "Modern Purple",
  "Elegant Maroon",
  "Tech Teal",
  "Bold Orange",
];

export const DesignTab = ({ designSettings, setDesignSettings }: DesignTabProps) => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Frame className="w-5 h-5" />
            Resume Template
          </CardTitle>
          <CardDescription>Choose a professional template for your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={designSettings.template}
            onValueChange={(value) => setDesignSettings({ ...designSettings, template: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {templates.map((template) => (
                <SelectItem key={template} value={template}>
                  {template}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Type className="w-5 h-5" />
            Font Size
          </CardTitle>
          <CardDescription>Adjust the text size of your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={designSettings.fontSize}
            onValueChange={(value) => setDesignSettings({ ...designSettings, fontSize: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {fontSizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Color Scheme
          </CardTitle>
          <CardDescription>Select a color scheme for your resume</CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={designSettings.colorScheme}
            onValueChange={(value) => setDesignSettings({ ...designSettings, colorScheme: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {colorSchemes.map((scheme) => (
                <SelectItem key={scheme} value={scheme}>
                  {scheme}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Frame className="w-5 h-5" />
            Page Margins
          </CardTitle>
          <CardDescription>Adjust the page margins (10-50)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={[designSettings.margin]}
            onValueChange={(value) => setDesignSettings({ ...designSettings, margin: value[0] })}
            min={10}
            max={50}
            step={5}
          />
          <div className="text-sm text-muted-foreground text-center">
            Current: {designSettings.margin}px
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlignLeft className="w-5 h-5" />
            Line Spacing
          </CardTitle>
          <CardDescription>Adjust the spacing between lines (1.0-3.0)</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={[designSettings.lineSpacing * 10]}
            onValueChange={(value) =>
              setDesignSettings({ ...designSettings, lineSpacing: value[0] / 10 })
            }
            min={10}
            max={30}
            step={1}
          />
          <div className="text-sm text-muted-foreground text-center">
            Current: {designSettings.lineSpacing.toFixed(1)}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
