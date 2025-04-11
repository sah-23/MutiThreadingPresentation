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
`;

const StatesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
`;

const StateCard = styled(motion.div)<{ color: string }>`
  width: 180px;
  padding: 1rem;
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid ${props => props.color};
  border-radius: 8px;
  box-shadow: 0 0 15px ${props => props.color}40;
`;

const StateTitle = styled.h3<{ color: string }>`
  font-size: 1.1rem;
  color: ${props => props.color};
  margin-bottom: 0.8rem;
  font-weight: 600;
  text-align: center;
`;

const StateDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  text-align: center;
`;

const DiagramContainer = styled(motion.div)`
  flex: 1;
  position: relative;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DiagramTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.9rem;
  color: var(--primary-light);
`;

const LifecycleDiagram = styled.div`
  width: 90%;
  height: 90%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StateCircle = styled(motion.div)<{ color: string }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: ${props => `rgba(${props.color}, 0.1)`};
  border: 2px solid ${props => `rgba(${props.color}, 0.7)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0 0 15px ${props => `rgba(${props.color}, 0.3)`};
`;

const StateLabel = styled.div<{ color: string }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => `rgb(${props.color})`};
  margin-bottom: 0.3rem;
`;

const StateIcon = styled.div<{ color: string }>`
  font-size: 1.5rem;
  color: ${props => `rgb(${props.color})`};
`;

const Arrow = styled(motion.div)<{ rotation: string, color: string }>`
  position: absolute;
  width: 120px;
  height: 2px;
  background: ${props => `rgba(${props.color}, 0.5)`};
  transform: ${props => `rotate(${props.rotation})`};
  transform-origin: 0 50%;
  
  &::after {
    content: '';
    position: absolute;
    top: -4px;
    right: 0;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 10px solid ${props => `rgba(${props.color}, 0.5)`};
  }
`;

const ArrowLabel = styled.div<{ color: string }>`
  position: absolute;
  font-size: 0.8rem;
  color: ${props => `rgba(${props.color}, 0.9)`};
  white-space: nowrap;
  transform: rotate(0deg);
`;

const OperationsContainer = styled(motion.div)`
  width: 100%;
  padding: 1rem;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
`;

const OperationsTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

const OperationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const OperationItem = styled(motion.div)`
  padding: 0.5rem 1rem;
  background: rgba(74, 144, 226, 0.1);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const OperationIcon = styled.span`
  color: var(--primary);
  font-size: 0.9rem;
`;

const OperationName = styled.span`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ThreadLifecycle: React.FC = () => {
  return (
    <Slide title="Thread Creation and Lifecycle" subtitle="States and transitions of a thread">
      <ContentContainer>
        <StatesContainer>
          <StateCard 
            color="rgba(74, 144, 226, 0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <StateTitle color="rgba(74, 144, 226, 1)">New</StateTitle>
            <StateDescription>
              Thread created but not yet started
            </StateDescription>
          </StateCard>
          
          <StateCard 
            color="rgba(80, 200, 120, 0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <StateTitle color="rgba(80, 200, 120, 1)">Runnable/Ready</StateTitle>
            <StateDescription>
              Waiting for CPU time
            </StateDescription>
          </StateCard>
          
          <StateCard 
            color="rgba(255, 180, 50, 0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <StateTitle color="rgba(255, 180, 50, 1)">Running</StateTitle>
            <StateDescription>
              Currently executing on CPU
            </StateDescription>
          </StateCard>
          
          <StateCard 
            color="rgba(255, 107, 107, 0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <StateTitle color="rgba(255, 107, 107, 1)">Blocked/Waiting</StateTitle>
            <StateDescription>
              Waiting for resource or event
            </StateDescription>
          </StateCard>
          
          <StateCard 
            color="rgba(147, 51, 234, 0.7)"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <StateTitle color="rgba(147, 51, 234, 1)">Terminated</StateTitle>
            <StateDescription>
              Execution completed
            </StateDescription>
          </StateCard>
        </StatesContainer>
        
        <DiagramContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <DiagramTitle>Thread State Transition Diagram</DiagramTitle>
          <LifecycleDiagram>
            {/* New State */}
            <StateCircle 
              color="74, 144, 226"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              style={{ top: '10%', left: '10%' }}
            >
              <StateIcon color="74, 144, 226">⭐</StateIcon>
              <StateLabel color="74, 144, 226">New</StateLabel>
            </StateCircle>
            
            {/* Runnable State */}
            <StateCircle 
              color="80, 200, 120"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              style={{ top: '10%', right: '10%' }}
            >
              <StateIcon color="80, 200, 120">⏱️</StateIcon>
              <StateLabel color="80, 200, 120">Ready</StateLabel>
            </StateCircle>
            
            {/* Running State */}
            <StateCircle 
              color="255, 180, 50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              style={{ bottom: '10%', right: '10%' }}
            >
              <StateIcon color="255, 180, 50">⚙️</StateIcon>
              <StateLabel color="255, 180, 50">Running</StateLabel>
            </StateCircle>
            
            {/* Blocked State */}
            <StateCircle 
              color="255, 107, 107"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              style={{ bottom: '10%', left: '10%' }}
            >
              <StateIcon color="255, 107, 107">🔒</StateIcon>
              <StateLabel color="255, 107, 107">Blocked</StateLabel>
            </StateCircle>
            
            {/* Terminated State */}
            <StateCircle 
              color="147, 51, 234"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.1 }}
              style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              <StateIcon color="147, 51, 234">✅</StateIcon>
              <StateLabel color="147, 51, 234">Terminated</StateLabel>
            </StateCircle>
            
            {/* Arrows */}
            <Arrow 
              color="74, 144, 226" 
              rotation="0deg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              style={{ top: '10%', left: '20%' }}
            >
              <ArrowLabel color="74, 144, 226" style={{ top: '-20px', left: '50%' }}>start()</ArrowLabel>
            </Arrow>
            
            <Arrow 
              color="80, 200, 120" 
              rotation="90deg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.3 }}
              style={{ top: '20%', right: '10%' }}
            >
              <ArrowLabel color="80, 200, 120" style={{ top: '10px', right: '50%' }}>schedule</ArrowLabel>
            </Arrow>
            
            <Arrow 
              color="255, 180, 50" 
              rotation="180deg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              style={{ bottom: '10%', right: '20%' }}
            >
              <ArrowLabel color="255, 180, 50" style={{ bottom: '-20px', right: '50%' }}>yield()</ArrowLabel>
            </Arrow>
            
            <Arrow 
              color="255, 107, 107" 
              rotation="270deg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.5 }}
              style={{ bottom: '20%', left: '10%' }}
            >
              <ArrowLabel color="255, 107, 107" style={{ bottom: '10px', left: '50%' }}>resources available</ArrowLabel>
            </Arrow>
            
            <Arrow 
              color="255, 180, 50" 
              rotation="135deg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              style={{ bottom: '25%', right: '25%' }}
            >
              <ArrowLabel color="255, 180, 50" style={{ bottom: '0px', right: '30%', transform: 'rotate(-135deg)' }}>exit()</ArrowLabel>
            </Arrow>
            
            <Arrow 
              color="255, 107, 107" 
              rotation="45deg"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
              style={{ bottom: '25%', left: '25%' }}
            >
              <ArrowLabel color="255, 107, 107" style={{ top: '0px', left: '30%', transform: 'rotate(-45deg)' }}>wait()</ArrowLabel>
            </Arrow>
          </LifecycleDiagram>
        </DiagramContainer>
        
        <OperationsContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <OperationsTitle>Common Thread Operations</OperationsTitle>
          <OperationsList>
            <OperationItem
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 1.9 }}
            >
              <OperationIcon>⭐</OperationIcon>
              <OperationName>create</OperationName>
            </OperationItem>
            
            <OperationItem
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 2.0 }}
            >
              <OperationIcon>▶️</OperationIcon>
              <OperationName>start</OperationName>
            </OperationItem>
            
            <OperationItem
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 2.1 }}
            >
              <OperationIcon>🔄</OperationIcon>
              <OperationName>join</OperationName>
            </OperationItem>
            
            <OperationItem
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 2.2 }}
            >
              <OperationIcon>💤</OperationIcon>
              <OperationName>sleep</OperationName>
            </OperationItem>
            
            <OperationItem
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 2.3 }}
            >
              <OperationIcon>🔃</OperationIcon>
              <OperationName>yield</OperationName>
            </OperationItem>
            
            <OperationItem
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 2.4 }}
            >
              <OperationIcon>🛑</OperationIcon>
              <OperationName>terminate</OperationName>
            </OperationItem>
          </OperationsList>
        </OperationsContainer>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadLifecycle; 