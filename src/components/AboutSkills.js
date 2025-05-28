// src/components/AboutSkills.js
import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AboutSkills = ({ t_about, t_skills }) => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const isMobile = window.innerWidth <= 900;

  if (!t_about || !t_skills || typeof t_skills.skills !== 'object') {
    return (
      <section id="about-skills" className="section" ref={sectionRef}>
        Loading about & skills...
      </section>
    );
  }

  const skillsEntries = Object.entries(t_skills.skills);

  // SkillItem sub-component
  const SkillItem = ({ iconClass, label, detail }) => {
    if (isMobile) {
      // Mobile: icon and label only, no dropdown, no chevron
      return (
        <div className="highlight-item skill-card" tabIndex={0}>
          <div className="skill-card-front">
            <i className={iconClass}></i>
            <span>{label}</span>
          </div>
        </div>
      );
    }
    // Desktop: icon, label, popout on hover, no chevron
    return (
      <div className="highlight-item skill-card" tabIndex={0}>
        <div className="skill-card-front">
          <i className={iconClass}></i>
          <span>{label}</span>
        </div>
        {detail && (
          <div className="skill-detail-content" role="region">
            <p>{detail}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      id="about-skills"
      className={`section about-skills-container fade-in-section${isVisible ? ' is-visible' : ''}`}
      ref={sectionRef}
    >
      <div className="about-content">
        <h2>{t_about.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: t_about.p1 }} />
        <p dangerouslySetInnerHTML={{ __html: t_about.p2 }} />
      </div>
      <div className="skills-content">
        <h2>{t_skills.title}</h2>
        <div className="skills-highlights">
          {skillsEntries.length === 0 ? (
            <div>No skills found.</div>
          ) : (
            skillsEntries.map(([key, skill]) => (
              <SkillItem
                key={key}
                iconClass={skill.icon}
                label={skill.label}
                detail={skill.detail}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSkills;