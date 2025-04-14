import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  gap: 0.8rem;
  overflow-y: auto;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  align-items: flex-start;
`;

const Card = styled(motion.div)<{ width?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: ${props => props.width || '48%'};
  position: relative;
  border: 1px solid rgba(100, 120, 200, 0.3);
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 0.6rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.4rem;
`;

const CardList = styled.ul`
  padding-left: 1.2rem;
  margin: 0.3rem 0;
`;

const CardListItem = styled.li`
  font-size: 0.85rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.25rem;
`;

const CardText = styled.p`
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.4rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--primary);
  margin: 0.7rem 0 0.3rem 0;
  font-weight: 600;
`;

const ComparisonTitle = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  gap: 4rem;
  position: relative;
  padding-bottom: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 1px;
    background: rgba(100, 120, 200, 0.3);
  }
`;

const ComparisonLabel = styled.h2`
  font-size: 1.8rem;
  color: ${props => props.color || 'var(--primary)'};
  font-weight: 600;
  text-align: center;
`;

// Visual components for the illustration
const IllustrationContainer = styled.div`
  height: 150px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 0;
`;

const CoreVisual = styled(motion.div)`
  width: 120px;
  height: 120px;
  border: 3px solid #3a7bd5;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(58, 123, 213, 0.2), rgba(46, 74, 138, 0.3));
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  
  &:before {
    content: 'CPU Core';
    position: absolute;
    top: -25px;
    font-size: 0.9rem;
    color: #3a7bd5;
    font-weight: bold;
  }
`;

const CoreCircuits = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 30%, rgba(58, 123, 213, 0.5) 2px, transparent 2px),
    radial-gradient(circle at 40% 70%, rgba(58, 123, 213, 0.5) 2px, transparent 2px),
    radial-gradient(circle at 70% 40%, rgba(58, 123, 213, 0.5) 2px, transparent 2px),
    radial-gradient(circle at 90% 20%, rgba(58, 123, 213, 0.5) 2px, transparent 2px);
  opacity: 0.7;
`;

const CoreInner = styled.div`
  width: 60%;
  height: 60%;
  background: rgba(58, 123, 213, 0.3);
  border: 1px solid rgba(58, 123, 213, 0.8);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThreadVisual = styled(motion.div)`
  width: 100px;
  height: 100px;
  border: 2px dashed #f83600;
  border-radius: 50%;
  background: rgba(248, 54, 0, 0.1);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1.5rem;
  
  &:before {
    content: 'Thread';
    position: absolute;
    top: -25px;
    font-size: 0.9rem;
    color: #f83600;
    font-weight: bold;
  }
`;

const ThreadCodeLine = styled(motion.div)`
  width: 60%;
  height: 3px;
  background: rgba(248, 54, 0, 0.7);
  margin: 3px 0;
  border-radius: 2px;
`;

const Arrow = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  top: 50%;
  transform-origin: right;
  
  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: -3px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 8px solid rgba(255, 255, 255, 0.5);
  }
`;

// Components for the relationship diagram
const RelationshipDiagram = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
`;

const CpuContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 600px;
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
  top: -10px;
  left: 20px;
  background: var(--background);
  padding: 0 10px;
  font-size: 0.9rem;
  color: var(--primary);
  font-weight: bold;
`;

const CoreRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`;

const CoreBox = styled(motion.div)`
  width: 90px;
  height: 90px;
  background: rgba(58, 123, 213, 0.2);
  border: 2px solid rgba(58, 123, 213, 0.6);
  border-radius: 6px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoreNumber = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  background: rgba(58, 123, 213, 0.8);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: white;
  font-weight: bold;
`;

const ThreadDot = styled(motion.div)<{ color: string }>`
  width: 24px;
  height: 24px;
  background: ${props => props.color};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: white;
  font-weight: bold;
  margin: 3px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ThreadQueue = styled.div`
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: rgba(30, 40, 60, 0.4);
  border: 1px solid rgba(100, 120, 200, 0.3);
  border-radius: 20px;
  padding: 5px 10px;
`;

const QueueLabel = styled.div`
  position: absolute;
  top: -20px;
  left: 10px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
`;

const SchedulerArrow = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 30px;
  border-left: 2px dashed rgba(255, 255, 255, 0.5);
  border-bottom: 2px dashed rgba(255, 255, 255, 0.5);
  top: -5px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: -5px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid rgba(255, 255, 255, 0.5);
  }
`;

const ConceptImage = styled.div`  margin: 0 auto;
  font-size: 2.5rem;
  text-align: center;
  color: ${props => props.color || 'var(--primary)'};
`;

const ThreadVsCpuCore: React.FC = () => {
  return (
    <Slide title="Thread vs CPU Core" subtitle="Understanding the Difference">
      <ContentContainer>
        <ComparisonTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ComparisonLabel color="#3a7bd5">CPU Core</ComparisonLabel>
          <ComparisonLabel>vs</ComparisonLabel>
          <ComparisonLabel color="#f83600">Thread</ComparisonLabel>
        </ComparisonTitle>
        
        <IllustrationContainer>
          <CoreVisual
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CoreCircuits />
            <CoreInner>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚙️
              </motion.span>
            </CoreInner>
          </CoreVisual>
          
          <Arrow
            style={{ left: '50%', transform: 'translateX(-50%) rotate(180deg)' }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          />
          
          <ThreadVisual
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <ThreadCodeLine
              initial={{ width: '30%' }}
              animate={{ width: '60%' }}
              transition={{ duration: 1, delay: 0.8, repeat: Infinity, repeatType: 'reverse' }}
            />
            <ThreadCodeLine
              initial={{ width: '40%' }}
              animate={{ width: '50%' }}
              transition={{ duration: 0.8, delay: 0.9, repeat: Infinity, repeatType: 'reverse' }}
            />
            <ThreadCodeLine
              initial={{ width: '50%' }}
              animate={{ width: '40%' }}
              transition={{ duration: 1.2, delay: 1.0, repeat: Infinity, repeatType: 'reverse' }}
            />
            <ThreadCodeLine
              initial={{ width: '20%' }}
              animate={{ width: '55%' }}
              transition={{ duration: 0.9, delay: 1.1, repeat: Infinity, repeatType: 'reverse' }}
            />
          </ThreadVisual>
        </IllustrationContainer>
      
        <CardRow>
          <Card
            width="48%"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardTitle>CPU Core</CardTitle>
            <ConceptImage color="#3a7bd5">🔋</ConceptImage>
            <CardList>
              <CardListItem>A physical processing unit within a CPU chip</CardListItem>
              <CardListItem>Capable of independently executing instructions</CardListItem>
              <CardListItem>Modern processors contain multiple cores (dual, quad, etc.)</CardListItem>
              <CardListItem>Each core can fetch, decode, and execute instructions</CardListItem>
              <CardListItem>Multiple cores allow for true parallel execution</CardListItem>
              <CardListItem>Physical hardware on the CPU die</CardListItem>
            </CardList>
          </Card>
          
          <Card
            width="48%"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CardTitle>Thread</CardTitle>
            <ConceptImage color="#f83600">📋</ConceptImage>
            <CardList>
              <CardListItem>A software concept representing a sequence of instructions</CardListItem>
              <CardListItem>The smallest unit of processing scheduled by an OS</CardListItem>
              <CardListItem>Exists within a process and shares its resources</CardListItem>
              <CardListItem>Can be executed on any available CPU core</CardListItem>
            </CardList>
          </Card>
        </CardRow>
        
        <CardText style={{ fontStyle: 'italic', marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
          A CPU core is the physical hardware that executes instructions, while a thread is a software construct representing instructions waiting to be executed.
        </CardText>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadVsCpuCore; 
