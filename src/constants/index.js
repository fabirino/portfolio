import {
    code,
    security,
    alticelabs,
    // javascript,
    // cpp,
    // python,
    // java,
    // postgresql,
    // html,
    // css,
    // nodejs,
    // git,
    // docker,
    // AlticeLabs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend Developer",
      icon: code,
    },
    {
      title: "Cybersecurity Analyst",
      icon: security,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      // icon: html,
    },
    {
      name: "CSS 3",
      // icon: css,
    },
    {
      name: "JavaScript",
      // icon: javascript,
    },
    {
      name: "Node JS",
      // icon: nodejs,
    },
    {
      name: "git",
      // icon: git,
    },
    {
      name: "docker",
      // icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Academic Internship",
      company_name: "AlticeLabs",
      icon: alticelabs,
      iconBg: "#383E56",
      date: "Oct 2024 - Jul 2025",
      points: [
        "Deployed a SIEM platform to centralise logs and accelerate incident detection.",
        "Integrated various AWS, GCP and on‑prem services, adding coverage for systems that were previously not monitored.",
        "Developed custom correlation and detection rules to support security operations and compliance requirements.",
      ],
    },
    {
      title: "Professional Internship",
      company_name: "AlticeLabs",
      icon: alticelabs,
      iconBg: "#383E56",
      date: "Sept 2025 - Aug 2026",
      points: [
        "Automated CrowdStrike Falcon and Qualys deployments with Ansible, covering ~85% of datacenter VMs and improving asset and vulnerability visibility",
        "Built a GitHub Copilot analytics platform with GitHub APIs, Elasticsearch, Grafana and Kibana, delivering actionable insights to engineering leadership.",
        "Automated asset discovery and inventory aligned with ISO 27001, reducing blind spots and strengthening datacenter security.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      // image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      // image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      // image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
