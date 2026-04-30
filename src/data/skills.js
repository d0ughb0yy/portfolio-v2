export const skills = [
  {
    id: 1,
    name: "Penetration Testing",
    tier: "Intermediate",
    proficiency: 53,
    description: "Security assessments, vulnerability identification",
    tools: ["Privilege Escalation", "Active Directory", "Linux Security"],
    icon: "shield",
  },
  {
    id: 2,
    name: "Threat Detection",
    tier: "Proficient",
    proficiency: 60,
    description: "SIEM monitoring and threat response",
    tools: ["Wazuh", "ELK Stack", "MITRE ATT&CK"],
    icon: "radar",
  },
  {
    id: 3,
    name: "Network Security",
    tier: "Beginner",
    proficiency: 34,
    description: "Network infrastructure security practices",
    tools: ["Suricata IDS/IPS", "pfSense", "Wireshark"],
    icon: "network",
  },
  {
    id: 4,
    name: "Security Automation",
    tier: "Proficient",
    proficiency: 60,
    description: "Scripting and automation for security operations",
    tools: ["Python", "Bash", "Golang"],
    icon: "bot",
  },
  {
    id: 5,
    name: "Email Security",
    tier: "Beginner",
    proficiency: 35,
    description: "Suspicious email analysis and file analysis",
    tools: ["VirusTotal", "AnyRun", "Email Analysis"],
    icon: "mail",
  },
  {
    id: 6,
    name: "Web Security",
    tier: "Intermediate",
    proficiency: 60,
    description: "Web security concepts and vulnerability analysis",
    tools: ["Burpsuite", "OWASP Top10", "Code Analysis"],
    icon: "globe",
  },
];

export const getTierColor = (tier) => {
  switch (tier) {
    case "Proficient":
      return "var(--color-proficient)";
    case "Intermediate":
      return "var(--color-intermediate)";
    case "Beginner":
      return "var(--color-beginner)";
    default:
      return "var(--color-text-muted)";
  }
};

export const getTierBadgeClass = (tier) => {
  switch (tier) {
    case "Proficient":
      return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
    case "Intermediate":
      return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    case "Beginner":
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30";
  }
};
