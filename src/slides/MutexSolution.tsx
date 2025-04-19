import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-top: -0.8rem;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 95%;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--accent);
  margin-bottom: 0.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const TextContent = styled.p`
  color: white;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const MutexVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin: 0.8rem 0;
`;

const MutexLock = styled(motion.div)`
  background: rgba(40, 50, 80, 0.7);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  border: 2px solid rgba(100, 140, 220, 0.6);
  box-shadow: 0 0 15px rgba(100, 140, 220, 0.3);
  font-size: 0.8rem;
`;

const ThreadVisual = styled(motion.div)`
  background: ${props => props.color || 'rgba(100, 120, 220, 0.3)'};
  border-radius: 12px;
  padding: 0.5rem 0.8rem;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
`;

const Arrow = styled(motion.div)`
  width: 40px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.6);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -4px;
    border-width: 5px 0 5px 8px;
    border-style: solid;
    border-color: transparent transparent transparent rgba(255, 255, 255, 0.6);
  }
`;

const ContainerSection = styled.div`
  padding: 0 0.5rem;
`;

const SolutionStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.7rem;
  padding: 0.6rem;
  border-radius: 8px;
  background: rgba(40, 50, 80, 0.3);
  border-left: 3px solid var(--primary);
`;

const StepNumber = styled.div`
  min-width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  margin-right: 0.8rem;
  font-size: 0.8rem;
`;

const StepContent = styled.div`
  flex: 1;
`;

const MutexSolution: React.FC = () => {
  return (
    <Slide title="Mutex: Solution to Race Conditions">
      <ContentContainer>
        <CardsContainer>
          {/* Left Card - Mutex Explanation */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContainerSection>
              <SectionTitle>What is a Mutex?</SectionTitle>
              
              <TextContent>
                A <HighlightText>mutex</HighlightText> (mutual exclusion) is a synchronization primitive that prevents multiple 
                threads from accessing a shared resource simultaneously.
              </TextContent>
              
              <MutexVisual>
                <ThreadVisual 
                  color="rgba(240, 140, 100, 0.6)"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Thread A
                </ThreadVisual>
                
                <Arrow
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                />
                
                <MutexLock
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  MUTEX
                </MutexLock>
                
                <Arrow
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                />
                
                <ThreadVisual 
                  color="rgba(100, 140, 220, 0.6)"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Resource
                </ThreadVisual>
              </MutexVisual>
              
              <TextContent>
                With a mutex, only one thread can modify x at a time. Other threads must wait until the mutex is released 
                before they can acquire it and modify x.
              </TextContent>
            
              <SectionTitle>How Mutex Works</SectionTitle>
            
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <StepNumber>1</StepNumber>
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    Before accessing a shared resource, a thread must first <HighlightText>acquire the lock</HighlightText>. 
                    If already locked, the thread will be blocked.
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <StepNumber>2</StepNumber>
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    Once a thread has acquired the lock, it has <HighlightText>exclusive access</HighlightText> to the protected resource.
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <StepNumber>3</StepNumber>
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    After the thread has finished, it must <HighlightText>release the lock</HighlightText>, allowing other threads to acquire it.
                  </TextContent>
                </StepContent>
              </SolutionStep>
            </ContainerSection>
          </Card>
          
          {/* Right Card - Mutex Challenges */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContainerSection>
              <SectionTitle>The Challenge with Many Threads</SectionTitle>
            
              <TextContent>
                When dealing with many threads, managing mutexes becomes increasingly difficult:
              </TextContent>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Complexity:</HighlightText> Each thread needs to acquire locks in the right order and release them properly. 
                    The complexity grows exponentially with the number of threads and shared resources.
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Deadlocks:</HighlightText> If not careful, threads can end up waiting for each other in a circular 
                    manner, resulting in a deadlock where none of the threads can proceed.
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SectionTitle>Best Practices</SectionTitle>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Minimize lock duration:</HighlightText> Hold locks for the shortest time possible
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Consistent ordering:</HighlightText> Always acquire multiple locks in the same order to prevent deadlocks
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.7 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Fine-grained locking:</HighlightText> Use more locks on smaller resources rather than fewer locks on larger ones
                  </TextContent>
                </StepContent>
              </SolutionStep>
            </ContainerSection>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </Slide>
  );
};

export default MutexSolution; 