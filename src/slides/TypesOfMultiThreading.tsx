import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

const TypesContainer = styled(motion.div)`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DiagramContainer = styled(motion.div)`
  flex: 2;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const TypeCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
`;

const TypeIcon = styled.div<{ color: string }>`
  width: 40px;
  height: 40px;
  background: ${props => `rgba(${props.color}, 0.2)`};
  border: 1px solid ${props => `rgba(${props.color}, 0.6)`};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => `rgb(${props.color})`};
  font-size: 1.2rem;
  margin-right: 1rem;
  flex-shrink: 0;
`;

const TypeContent = styled.div`
  flex: 1;
`;

const TypeTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--primary-light);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const TypeDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
`;

const DiagramTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.9rem;
  color: var(--primary-light);
`;

const VisualContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem 0;
`;

const ThreadGroup = styled(motion.div)<{ type: string }>`
  width: 90%;
  height: 70px;
  position: relative;
  border-radius: 6px;
  padding: 0.5rem;
  margin-bottom: 1rem;
  
  ${props => props.type === 'preemptive' && `
    background: rgba(74, 144, 226, 0.1);
    border: 1px solid rgba(74, 144, 226, 0.3);
  `}
  
  ${props => props.type === 'cooperative' && `
    background: rgba(255, 180, 50, 0.1);
    border: 1px solid rgba(255, 180, 50, 0.3);
  `}
  
  ${props => props.type === 'smt' && `
    background: rgba(80, 200, 120, 0.1);
    border: 1px solid rgba(80, 200, 120, 0.3);
  `}
  
  ${props => props.type === 'parallel' && `
    background: rgba(255, 107, 107, 0.1);
    border: 1px solid rgba(255, 107, 107, 0.3);
  `}
`;

const ThreadLabel = styled.div<{ type: string }>`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--background);
  padding: 0 0.5rem;
  font-size: 0.8rem;
  
  ${props => props.type === 'preemptive' && `
    color: rgba(74, 144, 226, 1);
  `}
  
  ${props => props.type === 'cooperative' && `
    color: rgba(255, 180, 50, 1);
  `}
  
  ${props => props.type === 'smt' && `
    color: rgba(80, 200, 120, 1);
  `}
  
  ${props => props.type === 'parallel' && `
    color: rgba(255, 107, 107, 1);
  `}
`;

const ThreadContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
`;

const Thread = styled(motion.div)<{ color: string, width?: number }>`
  height: 100%;
  width: ${props => props.width ? `${props.width}%` : '33%'};
  background: ${props => props.color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.7);
  font-weight: 500;
`;

const TypesOfMultiThreading: React.FC = () => {
  return (
    <Slide title="Types of Multi-Threading" subtitle="Different approaches to thread implementation">
      <ContentContainer>
        <TypesContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <TypeCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <TypeIcon color="74, 144, 226">P</TypeIcon>
            <TypeContent>
              <TypeTitle>Preemptive Multi-Threading</TypeTitle>
              <TypeDescription>
                OS controls thread scheduling and switching. Threads can be interrupted at any time by the scheduler, ensuring fair CPU time distribution and preventing any single thread from monopolizing resources.
              </TypeDescription>
            </TypeContent>
          </TypeCard>
          
          <TypeCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <TypeIcon color="255, 180, 50">C</TypeIcon>
            <TypeContent>
              <TypeTitle>Cooperative Multi-Threading</TypeTitle>
              <TypeDescription>
                Threads voluntarily yield control. Each thread must explicitly yield execution to allow other threads to run, making the system more predictable but vulnerable if a thread doesn't cooperate.
              </TypeDescription>
            </TypeContent>
          </TypeCard>
          
          <TypeCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <TypeIcon color="80, 200, 120">S</TypeIcon>
            <TypeContent>
              <TypeTitle>Simultaneous Multi-Threading (SMT)</TypeTitle>
              <TypeDescription>
                Hardware feature allowing multiple threads on a single core. This enables a single physical CPU core to appear as multiple logical cores, improving resource utilization when threads would otherwise be waiting.
              </TypeDescription>
            </TypeContent>
          </TypeCard>
          
          <TypeCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <TypeIcon color="255, 107, 107">P</TypeIcon>
            <TypeContent>
              <TypeTitle>Parallel vs. Concurrent Threading</TypeTitle>
              <TypeDescription>
                True parallelism requires multiple cores. Concurrent threads appear to run simultaneously but actually take turns on a single core, while parallel threads execute simultaneously on different physical cores.
              </TypeDescription>
            </TypeContent>
          </TypeCard>
        </TypesContainer>
        
        <DiagramContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <DiagramTitle>Threading Models Visualization</DiagramTitle>
          <VisualContainer>
            <ThreadGroup 
              type="preemptive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <ThreadLabel type="preemptive">Preemptive</ThreadLabel>
              <ThreadContainer>
                <Thread 
                  color="rgba(74, 144, 226, 0.6)"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 0.7, repeat: Infinity, repeatType: 'reverse' }}
                >
                  Thread 1
                </Thread>
              </ThreadContainer>
            </ThreadGroup>
            
            <ThreadGroup 
              type="cooperative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              <ThreadLabel type="cooperative">Cooperative</ThreadLabel>
              <ThreadContainer>
                <Thread 
                  color="rgba(255, 180, 50, 0.6)"
                  width={70}
                >
                  Thread 1
                </Thread>
                <Thread 
                  color="rgba(255, 180, 50, 0.6)"
                  width={30}
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >
                  Thread 2
                </Thread>
              </ThreadContainer>
            </ThreadGroup>
            
            <ThreadGroup 
              type="smt"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
              <ThreadLabel type="smt">SMT (Simultaneous Multi-Threading)</ThreadLabel>
              <ThreadContainer>
                <Thread 
                  color="rgba(80, 200, 120, 0.6)"
                  width={48}
                >
                  Thread 1
                </Thread>
                <Thread 
                  color="rgba(80, 200, 120, 0.4)"
                  width={48}
                >
                  Thread 2
                </Thread>
              </ThreadContainer>
            </ThreadGroup>
            
            <ThreadGroup 
              type="parallel"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <ThreadLabel type="parallel">Parallel Execution</ThreadLabel>
              <ThreadContainer>
                <Thread 
                  color="rgba(255, 107, 107, 0.6)"
                  width={33}
                >
                  Core 1
                </Thread>
                <Thread 
                  color="rgba(255, 107, 107, 0.6)"
                  width={33}
                >
                  Core 2
                </Thread>
                <Thread 
                  color="rgba(255, 107, 107, 0.6)"
                  width={33}
                >
                  Core 3
                </Thread>
              </ThreadContainer>
            </ThreadGroup>
          </VisualContainer>
        </DiagramContainer>
      </ContentContainer>
    </Slide>
  );
};

export default TypesOfMultiThreading; 