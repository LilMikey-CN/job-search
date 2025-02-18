import HttpClient from "../utils/axios";

export async function fetchJobs() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          jobTitle: "Frontend Developer",
          companyName: "Tech Innovators Inc.",
          jobDescription: "Develop modern web applications using React and TypeScript.",
        },
        {
          jobTitle: "Software Engineer",
          companyName: "NextGen Solutions",
          jobDescription: "Build scalable backend systems with Node.js and cloud platforms.",
        },
        {
          jobTitle: "Data Analyst",
          companyName: "Global Insights Ltd.",
          jobDescription: "Analyze large datasets and create reports for business decisions.",
        },
        {
          jobTitle: "Product Manager",
          companyName: "Big Corp",
          jobDescription: "Define product vision, strategy, and roadmap.",
        },
        {
          jobTitle: "Cybersecurity Analyst",
          companyName: "SecureTech",
          jobDescription: "Monitor security threats and ensure data protection.",
        },

      ]);
    }, 500); // Simulating a delay of 1 second
  });
}
