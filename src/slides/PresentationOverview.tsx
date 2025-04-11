import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ListItem = styled(motion.li)`
  margin-bottom: 1rem;
  font-size: 1.25rem;
  opacity: 0.9;
  line-height: 1.5;
  position: relative;
  padding-left: 2rem;
  color: white;
  
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 10px;
    height: 10px;
    background: var(--primary);
    border-radius: 50%;
    box-shadow: 0 0 8px var(--primary);
  }
`;

const PresentationOverview: React.FC = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  const topics = [
    "Basic concepts of multi-threading",
    "Hardware support for threading",
    "Thread scheduling and management",
    "Performance considerations",
    "Synchronization mechanisms",
    "Modern CPU threading features",
    "Practical implementations",
    "Advanced concepts and future trends"
  ];

  return (
    <Slide title="Presentation Overview" subtitle="What we'll cover in this presentation">
      <motion.ul
        style={{ 
          listStyle: 'none',
          padding: 0,
          margin: '1rem 0',
          maxWidth: '800px'
        }}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {topics.map((topic, index) => (
          <ListItem
            key={index}
            custom={index}
            variants={listItemVariants}
          >
            {topic}
          </ListItem>
        ))}
      </motion.ul>
    </Slide>
  );
};

export default PresentationOverview; 