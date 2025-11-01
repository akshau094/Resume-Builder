import { ResumeData, DesignSettings } from "@/types/resume";

export const generateResumeText = (data: ResumeData, settings: DesignSettings): string => {
  const { personalInfo, content } = data;
  const template = settings.template;

  const templates: { [key: string]: () => string } = {
    "Classic Professional": buildClassicTemplate,
    "Modern Creative": buildModernTemplate,
    "Corporate Executive": buildCorporateTemplate,
    "Tech Specialist": buildTechTemplate,
    Academic: buildAcademicTemplate,
    Minimalist: buildMinimalistTemplate,
    Elegant: buildElegantTemplate,
    "Bold Graphic": buildBoldTemplate,
  };

  const builder = templates[template] || buildClassicTemplate;
  return builder();

  function buildClassicTemplate(): string {
    let resume = "";
    
    resume += "=====================================\n";
    resume += `           ${personalInfo.name.toUpperCase()}\n`;
    resume += "=====================================\n\n";
    
    resume += "Contact Information:\n";
    resume += `Email: ${personalInfo.email}\n`;
    resume += `Phone: ${personalInfo.phone}\n`;
    if (personalInfo.address) resume += `Address: ${personalInfo.address}\n`;
    if (personalInfo.includeLinkedin && personalInfo.linkedin) resume += `LinkedIn: ${personalInfo.linkedin}\n`;
    if (personalInfo.includeWebsite && personalInfo.website) resume += `Website: ${personalInfo.website}\n`;
    
    if (content.summary) {
      resume += "\n--- PROFESSIONAL SUMMARY ---\n";
      resume += content.summary + "\n";
    }
    
    if (content.experience) {
      resume += "\n--- WORK EXPERIENCE ---\n";
      resume += content.experience + "\n";
    }
    
    if (content.education) {
      resume += "\n--- EDUCATION ---\n";
      resume += content.education + "\n";
    }
    
    if (content.skills) {
      resume += "\n--- SKILLS & TECHNOLOGIES ---\n";
      resume += content.skills + "\n";
    }
    
    if (content.projects) {
      resume += "\n--- NOTABLE PROJECTS ---\n";
      resume += content.projects + "\n";
    }
    
    if (content.certifications) {
      resume += "\n--- CERTIFICATIONS ---\n";
      resume += content.certifications + "\n";
    }
    
    return resume;
  }

  function buildModernTemplate(): string {
    let resume = "";
    
    resume += `★★★ ${personalInfo.name.toUpperCase()} ★★★\n`;
    resume += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n";
    
    resume += `📧 ${personalInfo.email} | 📱 ${personalInfo.phone}`;
    if (personalInfo.address) resume += ` | 📍 ${personalInfo.address}`;
    resume += "\n";
    
    if (personalInfo.includeLinkedin && personalInfo.linkedin) resume += `💼 ${personalInfo.linkedin}\n`;
    if (personalInfo.includeWebsite && personalInfo.website) resume += `🌐 ${personalInfo.website}\n`;
    
    if (content.summary) {
      resume += "\n🎯 PROFESSIONAL SUMMARY\n";
      resume += "─────────────────────────\n";
      resume += content.summary + "\n";
    }
    
    if (content.experience) {
      resume += "\n💼 EXPERIENCE\n";
      resume += "─────────────────────────\n";
      resume += content.experience + "\n";
    }
    
    if (content.education) {
      resume += "\n🎓 EDUCATION\n";
      resume += "─────────────────────────\n";
      resume += content.education + "\n";
    }
    
    if (content.skills) {
      resume += "\n⚡ SKILLS\n";
      resume += "─────────────────────────\n";
      resume += content.skills + "\n";
    }
    
    if (content.projects) {
      resume += "\n🚀 PROJECTS\n";
      resume += "─────────────────────────\n";
      resume += content.projects + "\n";
    }
    
    if (content.certifications) {
      resume += "\n🏆 CERTIFICATIONS\n";
      resume += "─────────────────────────\n";
      resume += content.certifications + "\n";
    }
    
    return resume;
  }

  function buildCorporateTemplate(): string {
    let resume = "";
    
    resume += "═══════════════════════════════════════\n";
    resume += `         ${personalInfo.name.toUpperCase()}\n`;
    resume += "═══════════════════════════════════════\n\n";
    
    resume += "CONTACT INFORMATION\n";
    resume += "═══════════════════\n";
    resume += `Email: ${personalInfo.email}\n`;
    resume += `Phone: ${personalInfo.phone}\n`;
    if (personalInfo.address) resume += `Address: ${personalInfo.address}\n`;
    if (personalInfo.includeLinkedin && personalInfo.linkedin) resume += `LinkedIn: ${personalInfo.linkedin}\n`;
    if (personalInfo.includeWebsite && personalInfo.website) resume += `Website: ${personalInfo.website}\n`;
    
    if (content.summary) {
      resume += "\n═══ EXECUTIVE SUMMARY ═══\n";
      resume += content.summary + "\n";
    }
    
    if (content.experience) {
      resume += "\n═══ PROFESSIONAL EXPERIENCE ═══\n";
      resume += content.experience + "\n";
    }
    
    if (content.education) {
      resume += "\n═══ EDUCATION & QUALIFICATIONS ═══\n";
      resume += content.education + "\n";
    }
    
    if (content.skills) {
      resume += "\n═══ CORE COMPETENCIES ═══\n";
      resume += content.skills + "\n";
    }
    
    if (content.projects) {
      resume += "\n═══ KEY PROJECTS ═══\n";
      resume += content.projects + "\n";
    }
    
    if (content.certifications) {
      resume += "\n═══ PROFESSIONAL CERTIFICATIONS ═══\n";
      resume += content.certifications + "\n";
    }
    
    return resume;
  }

  function buildTechTemplate(): string {
    let resume = "";
    
    resume += `▶▶▶ ${personalInfo.name.toUpperCase()} ◀◀◀\n`;
    resume += "════════════════════════════════════════════\n\n";
    
    resume += `📧 ${personalInfo.email} | 📱 ${personalInfo.phone}`;
    if (personalInfo.address) resume += ` | 📍 ${personalInfo.address}`;
    resume += "\n";
    
    if (personalInfo.includeLinkedin && personalInfo.linkedin) resume += `💼 LinkedIn: ${personalInfo.linkedin}\n`;
    if (personalInfo.includeWebsite && personalInfo.website) resume += `🌐 Portfolio: ${personalInfo.website}\n`;
    
    if (content.summary) {
      resume += "\n🎯 TECHNICAL SUMMARY\n";
      resume += "════════════════════\n";
      resume += content.summary + "\n";
    }
    
    if (content.skills) {
      resume += "\n⚡ TECHNICAL STACK\n";
      resume += "═══════════════════\n";
      resume += content.skills + "\n";
    }
    
    if (content.experience) {
      resume += "\n💻 EXPERIENCE\n";
      resume += "═══════════════════\n";
      resume += content.experience + "\n";
    }
    
    if (content.projects) {
      resume += "\n🚀 PROJECTS\n";
      resume += "═══════════════════\n";
      resume += content.projects + "\n";
    }
    
    if (content.education) {
      resume += "\n🎓 EDUCATION\n";
      resume += "═══════════════════\n";
      resume += content.education + "\n";
    }
    
    if (content.certifications) {
      resume += "\n🏆 CERTIFICATIONS\n";
      resume += "═══════════════════\n";
      resume += content.certifications + "\n";
    }
    
    return resume;
  }

  function buildAcademicTemplate(): string {
    let resume = "";
    
    resume += `${personalInfo.name.toUpperCase()}\n`;
    resume += "=====================================\n\n";
    
    resume += "Contact Information\n";
    resume += `Email: ${personalInfo.email}\n`;
    resume += `Phone: ${personalInfo.phone}\n`;
    if (personalInfo.address) resume += `Address: ${personalInfo.address}\n`;
    if (personalInfo.includeLinkedin && personalInfo.linkedin) resume += `LinkedIn: ${personalInfo.linkedin}\n`;
    if (personalInfo.includeWebsite && personalInfo.website) resume += `Website: ${personalInfo.website}\n`;
    
    if (content.education) {
      resume += "\nEducation\n";
      resume += "-------------------------------------\n";
      resume += content.education + "\n";
    }
    
    if (content.summary) {
      resume += "\nResearch Interests\n";
      resume += "-------------------------------------\n";
      resume += content.summary + "\n";
    }
    
    if (content.experience) {
      resume += "\nProfessional Experience\n";
      resume += "-------------------------------------\n";
      resume += content.experience + "\n";
    }
    
    if (content.projects) {
      resume += "\nResearch & Publications\n";
      resume += "-------------------------------------\n";
      resume += content.projects + "\n";
    }
    
    if (content.skills) {
      resume += "\nSkills & Expertise\n";
      resume += "-------------------------------------\n";
      resume += content.skills + "\n";
    }
    
    if (content.certifications) {
      resume += "\nAwards & Certifications\n";
      resume += "-------------------------------------\n";
      resume += content.certifications + "\n";
    }
    
    return resume;
  }

  function buildMinimalistTemplate(): string {
    let resume = "";
    
    resume += `${personalInfo.name}\n`;
    resume += `${personalInfo.email} • ${personalInfo.phone}`;
    if (personalInfo.address) resume += ` • ${personalInfo.address}`;
    resume += "\n";
    if (personalInfo.includeLinkedin && personalInfo.linkedin) resume += `${personalInfo.linkedin} `;
    if (personalInfo.includeWebsite && personalInfo.website) resume += `• ${personalInfo.website}`;
    resume += "\n\n";
    
    if (content.summary) resume += content.summary + "\n\n";
    if (content.experience) resume += "EXPERIENCE\n" + content.experience + "\n\n";
    if (content.education) resume += "EDUCATION\n" + content.education + "\n\n";
    if (content.skills) resume += "SKILLS\n" + content.skills + "\n\n";
    if (content.projects) resume += "PROJECTS\n" + content.projects + "\n\n";
    if (content.certifications) resume += "CERTIFICATIONS\n" + content.certifications + "\n";
    
    return resume;
  }

  function buildElegantTemplate(): string {
    return buildClassicTemplate(); // Similar to classic with different styling
  }

  function buildBoldTemplate(): string {
    return buildModernTemplate(); // Similar to modern with bolder elements
  }
};
