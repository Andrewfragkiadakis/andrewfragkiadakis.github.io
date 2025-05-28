// src/components/Experience.js
import React, { useState } from 'react'; // Keep useState for "See More"
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import TimelineItem from './TimelineItem'; // Import the new component

// ExperienceItem content structure (no longer a separate component)
// It will now be the children passed to TimelineItem

const Experience = ({ t, language }) => {
    const [showMore, setShowMore] = useState(false);
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 }); // Lower threshold

    if (!t || !t.omilia) { 
        return <section id="experience" className="section" ref={sectionRef}>Loading experience...</section>;
    }

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const seeMoreText = showMore ? t.seeLess : t.seeMore;

    // Consolidate experience data
    // Ensure your translations.js has omilia, keepEatHealthy, anemomyloi, selfEmployed, weballdesign keys
    const mainExperienceData = [t.omilia, t.keepEatHealthy].filter(Boolean);
    const additionalExperienceData = [t.anemomyloi, t.selfEmployed, t.weballdesign].filter(Boolean);
    
    const allExperienceData = showMore ? [...mainExperienceData, ...additionalExperienceData] : mainExperienceData;


    return (
        <section 
            id="experience" 
            className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={sectionRef}
        >
            <h2><i className="fas fa-briefcase"></i> {t.title}</h2>
            <div className="timeline-section-container">
                {allExperienceData.map((exp, index) => (
                    <TimelineItem 
                        key={exp.company || index}
                        item={exp}
                        isLast={!showMore && index === mainExperienceData.length - 1 && additionalExperienceData.length === 0 ||
                                showMore && index === allExperienceData.length - 1}
                        hideMarker={true} // <-- Add this prop to hide the marker
                    >
                        <h3>{exp.role}</h3>
                        <p className="company-duration">{exp.company} | {exp.duration}</p>
                        {exp.tasks && exp.tasks.length > 0 && (
                            <ul>
                                {exp.tasks.map((task, taskIndex) => (
                                    <li key={taskIndex}>{task}</li>
                                ))}
                            </ul>
                        )}
                    </TimelineItem>
                ))}
            </div>

            {additionalExperienceData.length > 0 && ( // Only show button if there's more to see
                <button
                    id={`see-more-btn-${language}`} 
                    className="see-more-btn"
                    onClick={toggleShowMore}
                    style={{marginTop: '1.5rem'}} // Ensure some space above the button
                >
                    {seeMoreText} <i className={`fas ${showMore ? 'fa-arrow-up' : 'fa-arrow-down'}`}></i>
                </button>
            )}
        </section>
    );
};

export default Experience;