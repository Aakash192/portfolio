// Project data
const projects = [
    {
        id: 1,
        title: "Single Sign-On (SSO) Solution",
        description: "Reduced login redundancies by 70% for Wayfinders users by deploying SSO integration using KeyCloak.",
        image: "https://images.unsplash.com/photo-1584433305355-9cb73387fc61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        technologies: ["KeyCloak", "OAuth2", "Security"],
        github: "Capstone Project"
    },
    {
        id: 2,
        title: "Fitness Management Application",
        description: "Developed a full-stack application using Python (Django), MySQL, and HTML/CSS/Bootstrap to assist users in achieving fitness goals.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Python", "Django", "MySQL", "Bootstrap"],
        githubUrl: "https://github.com/aakashsuryavanshi/fitness-app"
    },
    {
        id: 3,
        title: "Predictive Analysis of Student Dropouts",
        description: "Created a machine learning model to predict student dropouts using supervised learning algorithms and visualized insights with Power BI.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        technologies: ["Machine Learning", "Supervised Learning", "Power BI"],
        githubUrl: "https://github.com/aakashsuryavanshi/student-dropout-prediction"
    },
    {
        id: 4,
        title: "Cloud Infrastructure Automation",
        description: "Automated AWS infrastructure deployment using Terraform, reducing deployment time by 60% and ensuring consistency across environments.",
        image: "https://images.unsplash.com/vector-1739806650990-159542e8d2ae?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["Terraform", "AWS", "IaC"],
        githubUrl: "https://github.com/aakashsuryavanshi/cloud-automation"
    },
    {
        id: 5,
        title: "Chest X-Ray Classification using CNN and Computer Vision",
        description: "In this project, I built a chest X-ray classification system using transfer learning with a pretrained ResNet18 to distinguish NORMAL from PNEUMONIA cases. I applied data augmentation and normalization on a well-structured dataset, fine-tuning the model with a batch size of 4 over 10 epochs. The model achieved a test accuracy of 95%, and I implemented a visualization tool to display test images alongside their predicted and true labels.",
        image: "https://images.unsplash.com/photo-1584555684040-bad07f46a21f?q=80&w=1989&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        technologies: ["Machine Learning Model", "Supervised learning", "Computer Vision"],
        githubUrl: "https://github.com/Aakash192/chest_xray_classification"
    },
    {
        id: 6,
        title: "Fake News Detection",
        description: "Developed a machine learning pipeline to detect fake news using Random Forest, achieving reliable classification performance through cross-validation. Applied advanced preprocessing techniques including class balancing, feature scaling, and correlation-based feature selection to optimize model accuracy.Utilized K-Fold Cross-Validation",
        image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D",
        technologies: ["ML Model", "Supervised learning", "NLP"],
        githubUrl: "https://github.com/Aakash192/fake_news"
    },
   {
    id: 7,
    title: "Twitter Sentiment Analysis with NLP",
    description: "Performed sentiment analysis on Twitter data using NLP techniques such as tokenization, stopword removal, and TF-IDF. Trained and evaluated machine learning models to classify tweets as Positive, Negative, or Neutral.",
    image: "https://images.unsplash.com/photo-1517260911058-0fcfd733702f?auto=format&fit=crop&w=1350&q=80",
    technologies: ["NLP", "TF-IDF", "Sentiment Analysis", "Scikit-learn"],
    githubUrl: "https://github.com/Aakash192/twitter-sentiment-analysis.git"
}
];

// Function to create project cards
function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" class="github-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(project => createProjectCard(project)).join('');
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('currentYear').textContent = new Date().getFullYear();
});

