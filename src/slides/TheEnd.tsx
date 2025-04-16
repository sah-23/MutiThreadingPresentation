import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 90%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const EndTitle = styled.h1`
  color: var(--primary);
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  text-shadow: 0 0 10px rgba(100, 140, 250, 0.5);
`;

const ThankYou = styled.p`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const EndNote = styled.p`
  color: white;
  font-size: 1rem;
  opacity: 0.6;
  max-width: 500px;
  line-height: 1.5;
`;

const TheEnd: React.FC = () => {
  return (
    <div className="slide">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <EndTitle>The End</EndTitle>
          <ThankYou>Thank you for your attention!</ThankYou>
          <EndNote>
            This presentation covered key concepts of multi-threading, Python's GIL, 
            and alternative approaches for achieving true parallelism in Python applications.
          </EndNote>
        </Card>
      </ContentContainer>
    </div>
  );
};

export default TheEnd; 