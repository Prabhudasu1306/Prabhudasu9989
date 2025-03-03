import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="section-title">My Skills</h1>

      <div className="skills-grid">
        <div className="skill-category">
          <h2>Programming Languages</h2>
          <ul>
            <li>Python</li>
            <li>R</li>
            <li>SQL</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Web Technologies</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Backend Technologies</h2>
          <ul>
            <li>Spring Boot</li>
            <li>JDBC</li>
            <li>JSP</li>
            <li>Servlets</li>
            <li>Hibernate</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Databases</h2>
          <ul>
            <li>MySQL</li>
            <li>MongoDB (NoSQL)</li>
            <li>Oracle</li>
            <li>Vector DBs (Faiss)</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Generative AI & LLMs</h2>
          <ul>
            <li>GPT (ChatGPT, GPT-4)</li>
            <li>BERT</li>
            <li>T5 (Text-to-Text Transfer Transformer)</li>
            <li>LangChain</li>
            <li>Stable Diffusion</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Fine-Tuning Techniques</h2>
          <ul>
            <li>LoRA (Low-Rank Adaptation)</li>
            <li>QLoRA (Quantized LoRA)</li>
            <li>Parameter-efficient tuning</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Machine Learning & AI</h2>
          <ul>
            <li>TensorFlow</li>
            <li>PyTorch</li>
            <li>Keras</li>
            <li>Scipy</li>
            <li>Scikit-learn</li>
            <li>Hugging Face Transformers</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Data Science & Analytics</h2>
          <ul>
            <li>Pandas</li>
            <li>NumPy</li>
            <li>Matplotlib</li>
            <li>Seaborn</li>
            <li>Power BI</li>
            <li>Tableau</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>API & Testing</h2>
          <ul>
            <li>Postman</li>
          
            <li>Selenium</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Build & Deployment</h2>
          <ul>
            <li>Maven</li>
            <li>Jenkins</li>
            <li>Docker</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Cloud Platforms</h2>
          <ul>
            <li>AWS</li>
                      </ul>
        </div>

        <div className="skill-category">
          <h2>AI App Development</h2>
          <ul>
            <li>Gradio</li>
            <li>Streamlit</li>
            
          </ul>
        </div>

        <div className="skill-category">
          <h2>Version Control</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Project Management</h2>
          <ul>
            <li>Jira</li>
          </ul>
        </div>

        <div className="skill-category">
          <h2>Productivity Tools</h2>
          <ul>
            <li>Excel</li>
            <li>Google Docs</li>
            <li>Microsoft Word</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
