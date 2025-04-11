import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  padding-top: 30px;
  gap: 1.5rem;
`;

const SectionContainer = styled(motion.div)`
  background: rgba(245, 245, 245, 0.95);
  border-radius: 12px;
  padding: 1.2rem 2rem;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200, 200, 200, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 1;
  pointer-events: none;
`;

const SectionTitle = styled.h3<{ color: string }>`
  font-size: 2rem;
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 0.8rem;
  position: relative;
  z-index: 2;
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.4;
  color: #3a5583;
  position: relative;
  z-index: 2;
  text-align: center;
  font-family: 'Arial', sans-serif;
`;

const Crown = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 40px;
  height: 30px;
  border: 3px solid #000;
  border-bottom: none;
  position: relative;
  z-index: 2;
  
  &:before, &:after {
    content: '';
    position: absolute;
    bottom: 0;
    border-style: solid;
  }
  
  &:before {
    left: -3px;
    border-width: 0 10px 10px 0;
    border-color: transparent #000 transparent transparent;
  }
  
  &:after {
    right: -3px;
    border-width: 0 0 10px 10px;
    border-color: transparent transparent #000 transparent;
  }
`;

const Chrome: React.FC = () => {
  return (
    <Slide title="Sequential Programming" subtitle="Problem & Solution">
      <ContentContainer>
        <SectionContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GridBackground />
          
          
          <SectionTitle color="#ff5555">Problem</SectionTitle>
          <SectionText>
            In a single threaded program these instructions will be executed one by one. 
            The time consuming sections of the code can freeze the entire application!
          </SectionText>
        </SectionContainer>
        
        <SectionContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GridBackground />
          
         
          <SectionTitle color="#50fa7b">Solution</SectionTitle>
          <SectionText>
            Figure out the time consuming tasks and decide if they can be run separately. 
            If yes, run such task(s) in separate threads.
          </SectionText>
        </SectionContainer>
      </ContentContainer>
    </Slide>
  );
};

export default Chrome; 