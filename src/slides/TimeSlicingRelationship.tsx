import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  width: 85%;
  max-width: 900px;
  position: relative;
  border: 1px solid rgba(100, 120, 200, 0.3);
  overflow: hidden;
`;

const CardTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.8rem;
`;

const CardList = styled.ul`
  padding-left: 2rem;
  margin: 1.5rem 0;
`;

const CardListItem = styled(motion.li)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 0.5rem;
    width: 0.8rem;
    height: 0.8rem;
    background: var(--primary);
    border-radius: 50%;
  }
`;

const CardText = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 1rem 0;
  text-align: center;
  font-style: italic;
`;

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  width: 100%;
`;

const CoreContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2rem;
`;

const CoreLabel = styled.div`
  font-size: 1rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Core = styled.div`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #3a7bd5, #2e4a8a);
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Thread = styled(motion.div)<{ color: string }>`
  width: 40px;
  height: 40px;
  background: ${props => props.color};
  border-radius: 50%;
  margin: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 0.8rem;
`;

const TimeSlicingRelationship: React.FC = () => {
  return (
    <Slide title="Time Slicing" subtitle="Relationship with Multi-Threading">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <CardTitle>Relationship Between Time Slicing & Multi-Threading</CardTitle>
          
          <CardList>
            <CardListItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              On a single-core CPU, multi-threading uses time slicing to create the illusion of parallelism
            </CardListItem>
            
            <CardListItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              On multi-core CPUs, threads can truly run in parallel on different cores
            </CardListItem>
            
            <CardListItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Time slicing is still used when there are more active threads than available CPU cores
            </CardListItem>
            
            <CardListItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Modern operating systems use sophisticated scheduling algorithms that go beyond simple time slicing
            </CardListItem>
          </CardList>
          
          <CardText
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Time slicing makes multi-threading efficient even on limited hardware by ensuring all threads get execution time, creating responsive applications even without true parallelism.
          </CardText>
          
          <IllustrationContainer>
            <CoreContainer
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <CoreLabel>Single Core CPU</CoreLabel>
              <Core>
                <Thread 
                  color="rgba(235, 87, 87, 0.8)"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >T1</Thread>
                <Thread 
                  color="rgba(106, 130, 251, 0.8)"
                  initial={{ opacity: 0.3, scale: 0.9 }}
                  animate={{ opacity: 0.3, scale: 0.9 }}
                  style={{ width: '35px', height: '35px' }}
                >T2</Thread>
              </Core>
            </CoreContainer>
            
            <CoreContainer
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <CoreLabel>Multi-Core CPU</CoreLabel>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Core>
                  <Thread 
                    color="rgba(235, 87, 87, 0.8)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                  >T1</Thread>
                </Core>
                <Core>
                  <Thread 
                    color="rgba(106, 130, 251, 0.8)"
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  >T2</Thread>
                </Core>
              </div>
            </CoreContainer>
          </IllustrationContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default TimeSlicingRelationship; 