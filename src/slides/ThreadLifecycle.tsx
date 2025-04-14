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

const LowerContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  flex-direction: row;
  margin-top: 4rem;
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
  background: rgba(10, 25, 47, 0.7);
  border: 1px solid rgba(74, 144, 226, 0.5);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3), inset 0 1px 3px rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

const DiagramTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  z-index: 2;
`;

const LifecycleDiagram = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, rgba(74, 144, 226, 0.1) 0%, transparent 70%);
    z-index: 1;
  }
`;

const StateCircle = styled(motion.div)<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(15, 30, 52, 0.7);
  border: 2px solid ${props => `rgba(${props.color}, 0.8)`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  box-shadow: 0 0 15px ${props => `rgba(${props.color}, 0.4)`},
              inset 0 0 8px ${props => `rgba(${props.color}, 0.2)`};
  z-index: 3;
  backdrop-filter: blur(2px);
`;

const StateLabel = styled.div<{ color: string }>`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${props => `rgb(${props.color})`};
  margin-bottom: 0.2rem;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

const StateIcon = styled.div<{ color: string }>`
  font-size: 1.2rem;
  color: ${props => `rgb(${props.color})`};
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
`;

const Arrow = styled(motion.div)<{ rotation: string, color: string }>`
  position: absolute;
  width: 100px;
  height: 8px;
  transform: ${props => `rotate(${props.rotation})`};
  transform-origin: 0 50%;
  z-index: 2;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
      rgba(${props => props.color}, 0.3) 0%,
      rgba(${props => props.color}, 0.8) 100%);
    border-radius: 4px;
    filter: drop-shadow(0 0 8px rgba(${props => props.color}, 0.4));
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -6px;
    top: -9px;
    width: 0;
    height: 0;
    border-left: 15px solid rgba(${props => props.color}, 0.8);
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
    filter: drop-shadow(0 0 4px rgba(${props => props.color}, 0.5));
  }
`;

const ArrowLabel = styled(motion.div)<{ color: string }>`
  position: absolute;
  font-size: 0.8rem;
  color: rgba(${props => props.color}, 1);
  white-space: nowrap;
  transform: rotate(0deg);
  font-weight: 600;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.9);
  background: rgba(10, 25, 47, 0.8);
  padding: 4px 8px;
  border-radius: 12px;
  border: 1px solid rgba(${props => props.color}, 0.5);
  box-shadow: 0 0 10px rgba(${props => props.color}, 0.3);
  backdrop-filter: blur(3px);
`;

const CurvedPath = styled(motion.path)<{ color: string }>`
  fill: none;
  stroke: rgba(${props => props.color}, 0.8);
  stroke-width: 3;
  stroke-linecap: round;
  filter: drop-shadow(0 0 4px rgba(${props => props.color}, 0.4));
`;

const DiagramSVG = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  pointer-events: none;
`;

const ArrowMarker = styled.marker<{ color: string }>`
  fill: rgba(${props => props.color}, 0.8);
  filter: drop-shadow(0 0 2px rgba(${props => props.color}, 0.5));
`;

const OperationsContainer = styled(motion.div)`
  flex: 1; 
  padding: 1.5rem;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 350px;
`;

const OperationsTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

const OperationsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-grow: 1;
  padding: 0.5rem;
  height: 100%;
`;

const OperationItem = styled(motion.div)`
  padding: 0.7rem 1.2rem;
  background: rgba(74, 144, 226, 0.1);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 45%;
  margin-bottom: 1rem;
`;

const OperationIcon = styled.span`
  color: var(--primary);
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OperationName = styled.span`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  text-align: center;
`;

const PageNumber = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 400;
`;

const TransitionTable = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.5rem;
`;

const TableHeading = styled.h3`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

const TransitionRow = styled(motion.div)`
  display: flex;
  width: 100%;
  padding: 0.6rem 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  background: rgba(15, 30, 52, 0.4);
  border: 1px solid rgba(74, 144, 226, 0.2);
  justify-content: space-between;
  align-items: center;
`;

const TransitionState = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 30%;
  font-weight: 500;
  color: rgba(${props => props.color}, 1);
`;

const TransitionStateIcon = styled.span<{ color: string }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: rgba(${props => props.color}, 1);
  font-size: 1.1rem;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
`;

const TransitionArrow = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
  color: rgba(255, 255, 255, 0.9);
  
  &::before {
    content: '→';
    margin: 0 0.5rem;
    font-size: 1.2rem;
    color: var(--primary);
  }
`;

const TransitionOperation = styled.div`
  padding: 0.3rem 0.7rem;
  background: rgba(74, 144, 226, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
  text-align: center;
  border: 1px solid rgba(74, 144, 226, 0.3);
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
        
        <LowerContentContainer>
          <DiagramContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <TransitionTable>
              <TableHeading>Thread State Transitions</TableHeading>
              
              <TransitionRow
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <TransitionState color="74, 144, 226">
                  <TransitionStateIcon color="74, 144, 226">⭐</TransitionStateIcon>
                  New
                </TransitionState>
                <TransitionArrow>
                  <TransitionOperation>start()</TransitionOperation>
                </TransitionArrow>
                <TransitionState color="80, 200, 120">
                  <TransitionStateIcon color="80, 200, 120">⏱️</TransitionStateIcon>
                  Ready
                </TransitionState>
              </TransitionRow>
              
              <TransitionRow
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <TransitionState color="80, 200, 120">
                  <TransitionStateIcon color="80, 200, 120">⏱️</TransitionStateIcon>
                  Ready
                </TransitionState>
                <TransitionArrow>
                  <TransitionOperation>schedule</TransitionOperation>
                </TransitionArrow>
                <TransitionState color="255, 180, 50">
                  <TransitionStateIcon color="255, 180, 50">⚙️</TransitionStateIcon>
                  Running
                </TransitionState>
              </TransitionRow>
              
              <TransitionRow
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <TransitionState color="255, 180, 50">
                  <TransitionStateIcon color="255, 180, 50">⚙️</TransitionStateIcon>
                  Running
                </TransitionState>
                <TransitionArrow>
                  <TransitionOperation>wait() / sleep()</TransitionOperation>
                </TransitionArrow>
                <TransitionState color="255, 107, 107">
                  <TransitionStateIcon color="255, 107, 107">🔒</TransitionStateIcon>
                  Blocked
                </TransitionState>
              </TransitionRow>
              
              <TransitionRow
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <TransitionState color="255, 107, 107">
                  <TransitionStateIcon color="255, 107, 107">🔒</TransitionStateIcon>
                  Blocked
                </TransitionState>
                <TransitionArrow>
                  <TransitionOperation>notify() / timeout</TransitionOperation>
                </TransitionArrow>
                <TransitionState color="80, 200, 120">
                  <TransitionStateIcon color="80, 200, 120">⏱️</TransitionStateIcon>
                  Ready
                </TransitionState>
              </TransitionRow>
              
              <TransitionRow
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <TransitionState color="255, 180, 50">
                  <TransitionStateIcon color="255, 180, 50">⚙️</TransitionStateIcon>
                  Running
                </TransitionState>
                <TransitionArrow>
                  <TransitionOperation>yield()</TransitionOperation>
                </TransitionArrow>
                <TransitionState color="80, 200, 120">
                  <TransitionStateIcon color="80, 200, 120">⏱️</TransitionStateIcon>
                  Ready
                </TransitionState>
              </TransitionRow>
              
              <TransitionRow
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                <TransitionState color="255, 180, 50">
                  <TransitionStateIcon color="255, 180, 50">⚙️</TransitionStateIcon>
                  Running
                </TransitionState>
                <TransitionArrow>
                  <TransitionOperation>complete / exit</TransitionOperation>
                </TransitionArrow>
                <TransitionState color="147, 51, 234">
                  <TransitionStateIcon color="147, 51, 234">✅</TransitionStateIcon>
                  Terminated
                </TransitionState>
              </TransitionRow>
            </TransitionTable>
          </DiagramContainer>
          
          <OperationsContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
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
        </LowerContentContainer>
        
        <PageNumber>14</PageNumber>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadLifecycle; 