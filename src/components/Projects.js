// src/components/Projects.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

// ProjectItem updated to handle navigation directly
const ProjectItem = ({ 
    name, 
    tags, 
    description, 
    githubLink, 
    liveSiteLink, 
    reportLink, 
    publicationLink, 
    imageSrc,
    language
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
    
    // Clicking the item will navigate to the live site or github
    const handleItemClick = () => {
        const primaryLink = liveSiteLink || githubLink;
        if (primaryLink) {
            window.open(primaryLink, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="project-item" onClick={handleItemClick} role="button" tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && handleItemClick()}> 
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
                        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn" onClick={(e) => e.stopPropagation()}>
                            <i className="fab fa-github"></i> GitHub
                        </a>
                    )}
                    {liveSiteLink && (
                        <a href={liveSiteLink} target="_blank" rel="noopener noreferrer" className="btn" onClick={(e) => e.stopPropagation()}>
                            <i className="fas fa-external-link-alt"></i> {language === 'gr' ? 'Live Παρουσίαση' : 'Live Presentation'}
                        </a>
                    )}
                    {reportLink && (
                        <a
                            href={reportLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                            onClick={(e) => { e.stopPropagation(); gtagDownloadReport(name); }}
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
    
    // No state or handlers for modal needed
    
    if (!t || !t.portfolio) {
        return <section id="projects" className="section" ref={sectionRef}>Loading projects...</section>;
    }

    const getProjectImage = (projectKey) => {
        const imageMap = {
            portfolio: 'portfolio-website/portfolio-site.png',
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

    return (
        <section 
            id="projects" 
            className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={sectionRef}
        >
            <h2><i className="fas fa-laptop-code"></i> {t.title}</h2>
            <div className="projects-grid">
                {Object.keys(t).filter(key => key !== 'title').map(projectKey => (
                    <ProjectItem 
                        key={projectKey}
                        {...t[projectKey]} 
                        imageSrc={getProjectImage(projectKey)} 
                        language={language}
                        // onProjectClick prop is removed
                    />
                ))}
            </div>
        </section>
    );
};

export default Projects;