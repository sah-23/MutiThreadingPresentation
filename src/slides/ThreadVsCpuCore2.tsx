import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1rem;
  overflow-y: auto;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  position: relative;
  border: 1px solid rgba(100, 120, 200, 0.3);
  overflow: hidden;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.4rem;
  text-align: center;
`;

const CardList = styled.ul`
  padding-left: 1.3rem;
  margin: 0.5rem 0;
`;

const CardListItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.4rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
  text-align: center;
  font-style: italic;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--primary);
  margin: 0.8rem 0 0.4rem 0;
  font-weight: 600;
`;

// Components for the relationship diagram
const RelationshipDiagram = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  margin: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CpuContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 680px;
  height: 100%;
  background: rgba(30, 40, 60, 0.4);
  border: 1px solid rgba(100, 120, 200, 0.3);
  border-radius: 8px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
`;

const CpuLabel = styled.div`
  position: absolute;
  top: -15px;
  left: 30px;
  background: var(--background);
  padding: 0 15px;
  font-size: 1.1rem;
  color: var(--primary);
  font-weight: bold;
`;

const CoreRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  gap: 1.5rem;
  padding: 0 1.5rem;
`;

const CoreBox = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: rgba(58, 123, 213, 0.2);
  border: 2px solid rgba(58, 123, 213, 0.6);
  border-radius: 8px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoreNumber = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 25px;
  height: 25px;
  background: rgba(58, 123, 213, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
`;

const ThreadDot = styled(motion.div)<{ color: string }>`
  width: 35px;
  height: 35px;
  background: ${props => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  color: white;
  font-weight: bold;
  margin: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ThreadQueue = styled.div`
  position: absolute;
  right: -180px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  background: rgba(30, 40, 60, 0.4);
  border: 1px solid rgba(100, 120, 200, 0.3);
  border-radius: 15px;
  padding: 10px;
`;

const QueueLabel = styled.div`
  position: absolute;
  top: -25px;
  left: 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  text-align: center;
`;

const SchedulerArrow = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  top: 60px;
  right: -110px;
  transform: rotate(-25deg);
  transform-origin: right;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 10px solid rgba(255, 255, 255, 0.5);
  }
`;

const ThreadVsCpuCore2: React.FC = () => {
  return (
    <Slide title="Thread vs CPU Core" subtitle="Relationship & Interaction">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardTitle>Relationship Between Threads and Cores</CardTitle>
          
          <RelationshipDiagram>
            <CpuContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CpuLabel>CPU</CpuLabel>
              
              <CoreRow>
                <CoreBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <CoreNumber>1</CoreNumber>
                  <ThreadDot 
                    color="#ef4444"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >T1</ThreadDot>
                </CoreBox>
                
                <CoreBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <CoreNumber>2</CoreNumber>
                  <ThreadDot 
                    color="#3b82f6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >T2</ThreadDot>
                </CoreBox>
                
                <CoreBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <CoreNumber>3</CoreNumber>
                  <ThreadDot 
                    color="#22c55e"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >T3</ThreadDot>
                </CoreBox>
                
                <CoreBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <CoreNumber>4</CoreNumber>
                  <ThreadDot 
                    color="#eab308"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >T4</ThreadDot>
                </CoreBox>
              </CoreRow>
            </CpuContainer>
            
            <SchedulerArrow
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            
            <ThreadQueue>
              <QueueLabel>Thread Queue</QueueLabel>
              <ThreadDot 
                color="#f56d42"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >T5</ThreadDot>
              <ThreadDot 
                color="#f56d42"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >T6</ThreadDot>
              <ThreadDot 
                color="#f56d42"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >T7</ThreadDot>
            </ThreadQueue>
          </RelationshipDiagram>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <SectionTitle>Physical Limitations</SectionTitle>
              <CardList>
                <CardListItem>One CPU core can execute only one thread at a time (ignoring hyperthreading)</CardListItem>
                <CardListItem>If more threads than cores exist, OS uses time slicing</CardListItem>
              </CardList>
              
              <SectionTitle>Thread Scheduling</SectionTitle>
              <CardList>
                <CardListItem>OS schedules threads to run on available cores</CardListItem>
                <CardListItem>Threads can move between cores during execution</CardListItem>
                <CardListItem>With more threads than cores, scheduler rotates execution</CardListItem>
              </CardList>
            </div>
            
            <div style={{ flex: 1 }}>
              <SectionTitle>Hardware Threading</SectionTitle>
              <CardList>
                <CardListItem>SMT/Hyperthreading: Makes one physical core appear as two logical cores</CardListItem>
                <CardListItem>Enables working on two threads by utilizing idle execution units</CardListItem>
              </CardList>
              
              <SectionTitle>Performance Considerations</SectionTitle>
              <CardList>
                <CardListItem>Optimal performance when thread count matches core count</CardListItem>
                <CardListItem>Too few threads underutilizes hardware resources</CardListItem>
                <CardListItem>Too many threads causes excessive context switching</CardListItem>
              </CardList>
            </div>
          </div>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadVsCpuCore2; 