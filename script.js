// Project data. Projects are shown in this order.
// Add a githubUrl to show a "View code" link on the card.
const projects = [
    {
        title: "Franquicia Boost AI Chatbot",
        description: "Production RAG chatbot for Franquicia Boost's website. It answers questions from franchise disclosure documents, including their fee tables, and returns exact answers for known questions before falling back to retrieval. Deployed on AWS EC2 with Gunicorn and Nginx and embedded in the company's WordPress site.",
        image: "images/covers/franquicia-chatbot.svg",
        technologies: ["Python", "Flask", "ChromaDB", "OpenAI API", "AWS EC2"],
        githubUrl: "https://github.com/Aakash192/FB_Bot_Langchain"
    },
    {
        title: "Azure Bicep Pipeline",
        description: "Reusable Bicep templates for an Azure static website, deployed by GitHub Actions to a staging environment first and then to production behind a manual approval gate.",
        image: "images/covers/azure-bicep.svg",
        technologies: ["Azure", "Bicep", "GitHub Actions", "IaC"],
        githubUrl: "https://github.com/Aakash192/azure-bicep-pipeline"
    },
    {
        title: "Azure Infrastructure with Terraform and Ansible",
        description: "Eight Terraform modules build a multi VM Azure environment with a load balancer, PostgreSQL, monitoring and backups. Terraform then triggers Ansible roles that configure the Linux servers: data disks, users, sudo policy and Apache.",
        image: "images/covers/terraform-ansible.svg",
        technologies: ["Terraform", "Ansible", "Azure", "Linux"],
        githubUrl: "https://github.com/Aakash192/terraform_ansible_project"
    },
    {
        title: "AWS CI/CD for a Java Web App",
        description: "A Java web app developed on Amazon EC2, with Maven dependencies served from AWS CodeArtifact and builds run by AWS CodeBuild that package the app as a WAR artifact.",
        image: "images/covers/aws-java-cicd.svg",
        technologies: ["AWS CodeBuild", "CodeArtifact", "EC2", "Maven", "Java"],
        githubUrl: "https://github.com/Aakash192/nextwork-web-project"
    },
    {
        title: "PetroScan: P&ID Diagram Analysis (SAIT Capstone)",
        description: "Proof of concept for automated P&ID diagram analysis using YOLOv8 object detection and OCR. Served inference through a Dockerized Flask microservice and explored deployment on Azure. Presented at YYC DataCon Future Summit 2025.",
        image: "images/covers/petroscan.svg",
        technologies: ["YOLOv8", "OCR", "Docker", "Flask", "Computer Vision"],
        githubUrl: "https://github.com/Aakash192/pid-diagram-analysis"
    },
    {
        title: "Chest X-Ray Classification",
        description: "Fine-tuned a pretrained ResNet18 with transfer learning to classify chest X-rays as normal or pneumonia, using data augmentation and ImageNet normalization. Reached 95% test accuracy and built a visualization of predicted versus true labels.",
        image: "images/covers/chest-xray.svg",
        technologies: ["PyTorch", "ResNet18", "Transfer Learning", "Computer Vision"],
        githubUrl: "https://github.com/Aakash192/chest_xray_classification"
    },
    {
        title: "Twitter Sentiment Analysis with NLP",
        description: "Classified tweets as Positive, Negative or Neutral with NLTK preprocessing (tokenization, stopword removal, stemming) and a Multinomial Naive Bayes model on bag of words features, reaching 77% accuracy on 12,339 validation tweets. Compared against a VADER lexicon baseline.",
        image: "images/covers/twitter-sentiment.svg",
        technologies: ["NLP", "NLTK", "Naive Bayes", "Scikit-learn"],
        githubUrl: "https://github.com/Aakash192/twitter-sentiment-analysis"
    },
    {
        title: "Fake News Detection",
        description: "Compared Random Forest, Logistic Regression and SVM for fake news detection with class balancing, correlation based feature selection, K-Fold cross validation and grid search tuning. Diagnosed why the models scored a suspicious 100%: the article subject category leaked the label. Documented a text based TF-IDF redesign to fix it.",
        image: "images/covers/fake-news.svg",
        technologies: ["Scikit-learn", "Supervised Learning", "NLP"],
        githubUrl: "https://github.com/Aakash192/fake_news"
    },
    {
        title: "Single Sign-On (SSO) Solution",
        description: "Reduced login redundancies by 70% for Wayfinders users by deploying SSO integration using KeyCloak.",
        image: "images/covers/sso.svg",
        technologies: ["KeyCloak", "OAuth2", "Security"]
    },
    {
        title: "Cloud Infrastructure Automation",
        description: "Automated AWS infrastructure deployment using Terraform, reducing deployment time by 60% and ensuring consistency across environments.",
        image: "images/covers/cloud-automation.svg",
        technologies: ["Terraform", "AWS", "IaC"]
    },
    {
        title: "Travel Planner Web Application",
        description: "Collaboratively built a responsive travel planning web app using HTML, CSS, JavaScript, and Streamlit. Designed high-fidelity GUI prototypes with Canva, implemented multi-page navigation, and integrated search features. Tackled UI/UX optimization for a smooth and intuitive travel booking experience.",
        image: "images/covers/travel-planner.svg",
        technologies: ["HTML", "CSS", "JavaScript", "Streamlit", "Beautiful Soup"],
        githubUrl: "https://github.com/Aakash192/travel-planner"
    },
    {
        title: "Predictive Analysis of Student Dropouts",
        description: "Created a machine learning model to predict student dropouts using supervised learning algorithms and visualized insights with Power BI.",
        image: "images/covers/student-dropout.svg",
        technologies: ["Machine Learning", "Supervised Learning", "Power BI"]
    }
];

const GITHUB_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`;

// Build one project card
function createProjectCard(project) {
    const link = project.githubUrl
        ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="github-link">${GITHUB_ICON} View code</a>`
        : '';

    return `
        <article class="project-card">
            <img src="${project.image}" alt="" loading="lazy">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                ${link}
            </div>
        </article>
    `;
}

document.addEventListener("DOMContentLoaded", function () {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projects.map(createProjectCard).join('');
    }

    // Smooth scrolling for in page links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
