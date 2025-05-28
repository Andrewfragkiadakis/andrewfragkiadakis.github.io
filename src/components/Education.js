// src/components/Education.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import TimelineItem from './TimelineItem'; // Import the new component

// EducationItem content structure (no longer a separate component for individual items)
// It will now be the children passed to TimelineItem

const Education = ({ t }) => {
    const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.05 }); // Lower threshold

    if (!t || !t.uniWestAttica || !t.srhHeidelberg) {
        return <section id="education" className="section" ref={sectionRef}>Loading education...</section>;
    }

    const educationData = [t.uniWestAttica, t.srhHeidelberg]; // Create an array of education entries

    return (
        <section 
            id="education" 
            className={`section fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={sectionRef}
        >
            <h2><i className="fas fa-graduation-cap"></i> {t.title}</h2>
            <div className="timeline-section-container">
                {educationData.map((edu, index) => (
                    <TimelineItem 
                        key={index}
                        item={edu}
                        isLast={index === educationData.length - 1}
                        hideMarker={true} // <-- Add this prop to hide the marker
                    >
                        <h3>{edu.degree}</h3>
                        <p className="institution">{edu.institution} | {edu.duration}</p>
                        {edu.details && edu.details.length > 0 && (
                            <ul>
                                {edu.details.map((item, detailIndex) => (
                                    <li key={detailIndex}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </TimelineItem>
                ))}
            </div>
        </section>
    );
};

export default Education;