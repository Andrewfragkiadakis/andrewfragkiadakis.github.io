// src/components/TimelineItem.js
import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ item, alignment = 'left', isLast = false, children, hideMarker }) => {
    // Animation variants for Framer Motion
    const itemVariants = {
        hidden: { opacity: 0, x: alignment === 'left' ? -100 : 100 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div 
            className={`timeline-item-wrapper ${alignment}`}
            initial="hidden"
            whileInView="visible" // Triggers animation when item scrolls into view
            viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% of item is visible
            variants={itemVariants}
        >
            {!hideMarker && (
                <div className="timeline-marker">
                    <div className="timeline-dot"></div>
                    {!isLast && <div className="timeline-connector"></div>}
                </div>
            )}
            <div className="timeline-content-card">
                {children} {/* Content (degree, role, details) will be passed here */}
            </div>
        </motion.div>
    );
};

export default TimelineItem;