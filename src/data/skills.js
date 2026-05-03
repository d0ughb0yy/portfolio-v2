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
    description: "SIEM monitoring, threat hunting and vulnerability scanning",
    tools: ["Wazuh", "ELK Stack", "MITRE ATT&CK"],
    icon: "radar",
  },
  {
    id: 3,
    name: "Network Security",
    tier: "Beginner",
    proficiency: 34,
    description: "Secure configuration and monitoring of network devices",
    tools: ["Suricata IDS/IPS", "pfSense", "Wireshark", "Cisco configuration"],
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
    description: "Email security practices and phishing email assessments and tracking",
    tools: ["VirusTotal", "AnyRun", "Email Analysis"],
    icon: "mail",
  },
  {
    id: 6,
    name: "Web Security",
    tier: "Intermediate",
    proficiency: 60,
    description: "Web application security concepts and vulnerability analysis and exploiting",
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
