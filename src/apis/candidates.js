
export async function fetchCandidates() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "Alice Johnson",
          location: "San Francisco, CA",
          advantages: "Strong frontend skills, React expert, team player.",
          education: "B.Sc. in Computer Science, Stanford University",
          avatarURL: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          name: "Michael Smith",
          location: "New York, NY",
          advantages: "Cloud computing, full-stack expertise, DevOps experience.",
          education: "M.Sc. in Software Engineering, MIT",
          avatarURL: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          name: "Sophia Martinez",
          location: "Austin, TX",
          advantages: "Data visualization, SQL, and Python expert.",
          education: "B.A. in Data Science, University of Texas",
          avatarURL: "https://randomuser.me/api/portraits/women/22.jpg",
        },
        {
          name: "David Brown",
          location: "Seattle, WA",
          advantages: "Cybersecurity specialist, penetration testing skills.",
          education: "B.Sc. in Cybersecurity, University of Washington",
          avatarURL: "https://randomuser.me/api/portraits/men/65.jpg",
        },
        {
          name: "Emily Davis",
          location: "Chicago, IL",
          advantages: "UX/UI designer, Figma and Adobe XD expert.",
          education: "M.A. in Design, Chicago School of Arts",
          avatarURL: "https://randomuser.me/api/portraits/women/29.jpg",
        },
      ]);
    }, 500); // Simulating a delay of 500ms
  });
}
