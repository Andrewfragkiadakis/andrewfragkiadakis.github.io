// src/components/Projects.js
import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
// import Project3DPlaceholder from './Project3DPlaceholder'; // No longer needed if we removed all 3D project items

// ProjectItem remains largely the same
const ProjectItem = ({ 
    name, 
    tags, 
    description, 
    githubLink, 
    liveSiteLink, 
    reportLink, 
    publicationLink, 
    imageSrc,
    language,
    // is3D, // Removing this prop as we are not using 3D placeholders for projects now
    onProjectClick 
}) => {
    const fullImageSrc = imageSrc ? `${process.env.PUBLIC_URL}/images/${imageSrc}` : null;

    const gtagDownloadReport = (reportName) => {
        if (typeof gtag === 'function' && reportLink) {
            gtag('event', 'file_download', {
                'link_text': `Download ${reportName} Report`,
                'link_url': reportLink,
                'language': language,
                'project_name': name
            });
        }
    };
    
    const handleItemClick = () => {
        if (onProjectClick) {
            onProjectClick({ name, tags, description, githubLink, liveSiteLink, reportLink, publicationLink, imageSrc });
        }
    };

    return (
        <div className="project-item" onClick={handleItemClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleItemClick()}> 
            {/* Always render image now, or placeholder if no imageSrc */}
            {fullImageSrc ? (
                <img src={fullImageSrc} alt={`${name} screenshot`} loading="lazy" />
            ) : (
                <div style={{ width: '100%', height: '200px', backgroundColor: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span>No Image</span>
                </div>
            )}
            <div className="project-content">
                <h3>{name}</h3>
                {tags && tags.length > 0 && (
                    <div className="project-tags">
                        {tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
                <p>{description}</p>
                <div className="project-links">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    )}
                    {liveSiteLink && (
                        <a href={liveSiteLink} target="_blank" rel="noopener noreferrer" className="btn">
                            <i className="fas fa-external-link-alt"></i> {language === 'gr' ? 'Live Παρουσίαση' : 'Live Presentation'}
                        </a>
                    )}
                    {reportLink && (
                        <a
                            href={reportLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            onClick={(e) => { e.stopPropagation(); gtagDownloadReport(name); }} // Stop propagation to prevent item click
                        >
                            <i className="fas fa-download"></i> {language === 'gr' ? 'Λήψη Διπλωματικής Εργασίας' : 'Download Thesis Report'}
                        </a>
                    )}
                    {publicationLink && (
                        <a href={publicationLink} target="_blank" rel="noopener noreferrer" className="btn" onClick={(e) => e.stopPropagation()}>
                            <i className="fas fa-book-open"></i> {language === 'gr' ? 'Προβολή Δημοσίευσης' : 'View Publication'}
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};


const Projects = ({ t, language }) => {
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 });
    
    const [selectedProject, setSelectedProject] = useState(null); // Keep for future modal

    if (!t || !t.portfolio) {
        return <section id="projects" className="section" ref={sectionRef}>Loading projects...</section>;
    }

    const getProjectImage = (projectKey) => {
        const imageMap = {
            portfolio: 'portfolio-website/portfolio-site.png', // Ensure this path is correct
            happyFox: 'happyfox/happyfox-app.png',
            schiller: 'schiller-project/schiller.png',
            raspberryPi: 'raspberry-pi-adblocker-streamer/raspberry-pi.png',
            llmResearch: 'research-llms-human-knowledge/llm-research.png',
            silenceHero: 'silence-hero/silence-hero.png',
            thesisPresentation: 'thesis-presentation/thesis-image.png',
            friendlyWheelchair: 'friendly-wheelchair-concept/friendly-wheelchair.png',
        };
        return imageMap[projectKey] || '';
    };

    const handleProjectClick = (projectData) => {
        // This is where you would open a modal with projectData
        // For now, let's just log it to show it's working.
        console.log("Project item clicked:", projectData.name);
        alert(`Project Clicked: ${projectData.name}`);
        // setSelectedProject(projectData);
    };

    return (
        <section 
            id="projects" 
            className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={sectionRef}
        >
            <h2><i className="fas fa-laptop-code"></i> {t.title}</h2>
            <div className="projects-grid">
                <ProjectItem 
                    {...t.portfolio} 
                    imageSrc={getProjectImage('portfolio')} // Use image for portfolio
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.happyFox} 
                    imageSrc={getProjectImage('happyFox')} 
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.schiller} 
                    imageSrc={getProjectImage('schiller')} 
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.raspberryPi} 
                    imageSrc={getProjectImage('raspberryPi')} 
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.thesisPresentation}
                    imageSrc={getProjectImage('thesisPresentation')}
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.llmResearch} 
                    imageSrc={getProjectImage('llmResearch')} 
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.silenceHero} 
                    imageSrc={getProjectImage('silenceHero')} 
                    language={language}
                    onProjectClick={handleProjectClick}
                />
                <ProjectItem 
                    {...t.friendlyWheelchair} 
                    imageSrc={getProjectImage('friendlyWheelchair')} 
                    language={language}
                    onProjectClick={handleProjectClick}
                />
            </div>
            {/* Modal placeholder */}
            {/* {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />} */}
        </section>
    );
};

export default Projects;