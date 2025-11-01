import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Camera, Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";
import { PersonalInfo } from "@/types/resume";

interface PersonalInfoTabProps {
  personalInfo: PersonalInfo;
  setPersonalInfo: (info: PersonalInfo) => void;
}

export const PersonalInfoTab = ({ personalInfo, setPersonalInfo }: PersonalInfoTabProps) => {
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPersonalInfo({
          ...personalInfo,
          photo: reader.result as string,
          includePhoto: true,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Enter your contact details and professional links</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Photo Upload */}
        <div className="flex flex-col items-center gap-4 p-4 border-2 border-dashed border-border rounded-lg">
          {personalInfo.photo ? (
            <img
              src={personalInfo.photo}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-muted flex items-center justify-center">
              <Camera className="w-12 h-12 text-muted-foreground" />
            </div>
          )}
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
            onChange={handlePhotoUpload}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => document.getElementById("photo-upload")?.click()}
          >
            {personalInfo.photo ? "Change Photo" : "Upload Photo"}
          </Button>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="include-photo"
              checked={personalInfo.includePhoto}
              onCheckedChange={(checked) =>
                setPersonalInfo({ ...personalInfo, includePhoto: checked as boolean })
              }
            />
            <label htmlFor="include-photo" className="text-sm">
              Include photo in resume
            </label>
          </div>
        </div>

        {/* Basic Info */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              value={personalInfo.name}
              onChange={(e) => setPersonalInfo({ ...personalInfo, name: e.target.value })}
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={personalInfo.email}
              onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={personalInfo.phone}
              onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Address
            </Label>
            <Input
              id="address"
              value={personalInfo.address}
              onChange={(e) => setPersonalInfo({ ...personalInfo, address: e.target.value })}
              placeholder="City, State, Country"
            />
          </div>

          {/* LinkedIn */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="include-linkedin"
                checked={personalInfo.includeLinkedin}
                onCheckedChange={(checked) =>
                  setPersonalInfo({ ...personalInfo, includeLinkedin: checked as boolean })
                }
              />
              <Label htmlFor="include-linkedin" className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                Include LinkedIn
              </Label>
            </div>
            {personalInfo.includeLinkedin && (
              <Input
                value={personalInfo.linkedin}
                onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                placeholder="linkedin.com/in/johndoe"
              />
            )}
          </div>

          {/* Website */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="include-website"
                checked={personalInfo.includeWebsite}
                onCheckedChange={(checked) =>
                  setPersonalInfo({ ...personalInfo, includeWebsite: checked as boolean })
                }
              />
              <Label htmlFor="include-website" className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Include Website
              </Label>
            </div>
            {personalInfo.includeWebsite && (
              <Input
                value={personalInfo.website}
                onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
                placeholder="johndoe.com"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
