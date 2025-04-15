import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
  padding: 0 1.5rem 1rem 1.5rem;
  justify-content: flex-start;
  padding-top: 2.5rem;
  align-items: center;
  margin-top: -2rem;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 80%;
  max-width: 800px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1.2rem;
  font-weight: 600;
  text-align: center;
`;

const KeyPointsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const KeyPoint = styled(motion.li)`
  color: white;
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  border-left: 4px solid var(--secondary);
  background: rgba(0, 0, 0, 0.3);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  
  &:before {
    content: "•";
    color: var(--secondary);
    font-size: 1.4rem;
    margin-right: 0.8rem;
  }
`;

const AdditionalInfo = styled.div`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1.2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 1.5rem;
  
  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 0.8rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TimeSlicing3: React.FC = () => {
  return (
    <Slide title="Time Slicing Key Points" subtitle="Understanding how CPU time is shared">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Title>Time Slicing in Multi-Threading</Title>
          
          <KeyPointsList>
            <KeyPoint
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              CPU switches rapidly between threads (context switching)
            </KeyPoint>
            
            <KeyPoint
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Each thread receives a "time slice" or "quantum"
            </KeyPoint>
            
            <KeyPoint
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Threads appear to run simultaneously to users
            </KeyPoint>
            
            <KeyPoint
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Scheduling algorithm determines time allocation
            </KeyPoint>
            
            <KeyPoint
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Overhead occurs during context switching
            </KeyPoint>
          </KeyPointsList>
          
          <AdditionalInfo>
            <p>
              Modern operating systems use sophisticated scheduling algorithms to balance execution time between threads. 
              These algorithms consider factors like thread priority, CPU usage history, and waiting time to optimize system performance.
            </p>
            <p>
              While context switching creates the illusion of parallel execution, each physical CPU core can only execute one thread at a time.
            </p>
          </AdditionalInfo>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default TimeSlicing3; 