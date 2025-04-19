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

const ContainerSection = styled.div`
  padding: 0 0.5rem;
`;

const DeadlockDiagramContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  position: relative;
  height: 240px;
  background-color: rgba(12, 17, 43, 0.8);
  border-radius: 8px;
  overflow: hidden;
`;

// Styled components for the deadlock diagram
const Resource = styled(motion.div)`
  background: ${props => props.color || 'rgba(60, 80, 120, 0.9)'};
  border-radius: 12px;
  width: 75px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid rgba(100, 140, 220, 0.8);
  box-shadow: 0 0 15px rgba(100, 140, 220, 0.4);
  position: absolute;
  z-index: 10;
`;

const Process = styled(motion.div)`
  background: ${props => props.color || 'rgba(100, 120, 220, 0.4)'};
  border-radius: 12px;
  padding: 0.6rem;
  font-weight: 600;
  min-width: 60px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  position: absolute;
  color: white;
  font-size: 1rem;
  z-index: 10;
`;

const RelationshipIndicator = styled(motion.div)`
  position: absolute;
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${props => props.bg || 'rgba(20, 30, 50, 0.8)'};
  color: ${props => props.color || 'white'};
  padding: 3px 7px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 5;
`;

const Glow = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, ${props => props.color || 'rgba(200, 100, 100, 0.2)'} 0%, transparent 70%);
  opacity: 0.6;
  z-index: 1;
`;

const Icon = styled(motion.div)`
  font-size: 1rem;
  color: white;
  margin-right: 6px;
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

const StepContent = styled.div`
  flex: 1;
`;

const RaceCondition2: React.FC = () => {
  return (
    <Slide title="Race Conditions and Deadlocks">
      <ContentContainer>
        <CardsContainer>
          {/* Left Card - Deadlock Explanation */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContainerSection>
              <SectionTitle>Understanding Deadlocks</SectionTitle>
              
              <TextContent>
                A more serious issue that arises with locks is <HighlightText>deadlock</HighlightText>. Deadlock occurs when two or more threads 
                are blocked forever, each waiting for resources held by the other.
              </TextContent>
              
              <TextContent>
                If thread_1 acquires mutex_a and thread_2 acquires mutex_b at about the same time, they will both be stuck waiting forever:
              </TextContent>
              
              <DeadlockDiagramContainer>
                {/* Glows representing relationships */}
                <Glow 
                  color="rgba(200, 100, 100, 0.3)"
                  style={{ top: '20px', left: '20px', width: '200px', height: '200px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
                
                <Glow 
                  color="rgba(100, 100, 200, 0.3)"
                  style={{ bottom: '20px', right: '20px', width: '200px', height: '200px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ duration: 1, delay: 1.0 }}
                />
                
                {/* Thread P1 */}
                <Process 
                  color="rgba(200, 100, 100, 0.7)" 
                  style={{ top: '40px', left: '45px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  P1
                </Process>
                
                {/* Thread P2 */}
                <Process 
                  color="rgba(100, 100, 200, 0.7)" 
                  style={{ bottom: '40px', right: '45px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  P2
                </Process>
                
                {/* Resource R1 */}
                <Resource 
                  color="rgba(60, 80, 120, 0.9)" 
                  style={{ top: '40px', right: '45px', borderColor: 'rgba(100, 100, 200, 0.8)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                    style={{ position: 'absolute', top: '-12px', right: '-12px', 
                           backgroundColor: 'rgba(100, 100, 200, 0.8)', 
                           borderRadius: '50%', width: '24px', height: '24px',
                           display: 'flex', justifyContent: 'center', alignItems: 'center',
                           fontSize: '0.7rem', fontWeight: 'bold' }}>
                    P2
                  </motion.div>
                  R1
                </Resource>
                
                {/* Resource R2 */}
                <Resource 
                  color="rgba(60, 80, 120, 0.9)" 
                  style={{ bottom: '40px', left: '45px', borderColor: 'rgba(200, 100, 100, 0.8)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                    style={{ position: 'absolute', top: '-12px', left: '-12px', 
                           backgroundColor: 'rgba(200, 100, 100, 0.8)', 
                           borderRadius: '50%', width: '24px', height: '24px',
                           display: 'flex', justifyContent: 'center', alignItems: 'center',
                           fontSize: '0.7rem', fontWeight: 'bold' }}>
                    P1
                  </motion.div>
                  R2
                </Resource>
                
                {/* P1 assigns to R2 indicator */}
                <RelationshipIndicator
                  bg="rgba(200, 100, 100, 0.7)"
                  color="white"
                  style={{ left: '75px', top: '98px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  Assigns
                </RelationshipIndicator>
                
                {/* P2 assigns to R1 indicator */}
                <RelationshipIndicator
                  bg="rgba(100, 100, 200, 0.7)"
                  color="white"
                  style={{ right: '75px', top: '98px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  Assigns
                </RelationshipIndicator>
                
                {/* P1 waits for R1 indicator */}
                <RelationshipIndicator
                  bg="rgba(40, 50, 80, 0.8)"
                  color="rgba(200, 100, 100, 0.9)"
                  style={{ left: '155px', top: '40px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, x: [0, 10, 0], y: [0, -3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1.3 }, 
                    scale: { duration: 0.5, delay: 1.3 },
                    x: { duration: 2, delay: 1.3, repeat: Infinity, repeatType: "reverse" },
                    y: { duration: 1.5, delay: 1.3, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <span style={{ color: 'orange' }}>⌛</span> P1 Waits
                </RelationshipIndicator>
                
                {/* P2 waits for R2 indicator */}
                <RelationshipIndicator
                  bg="rgba(40, 50, 80, 0.8)"
                  color="rgba(100, 100, 200, 0.9)"
                  style={{ right: '155px', bottom: '40px' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, x: [0, -10, 0], y: [0, 3, 0] }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1.5 }, 
                    scale: { duration: 0.5, delay: 1.5 },
                    x: { duration: 2, delay: 1.5, repeat: Infinity, repeatType: "reverse" },
                    y: { duration: 1.5, delay: 1.5, repeat: Infinity, repeatType: "reverse" }
                  }}
                >
                  <span style={{ color: 'orange' }}>⌛</span> P2 Waits
                </RelationshipIndicator>
                
                {/* Deadlock indication */}
                <motion.div
                  style={{ 
                    position: 'absolute',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 50, 50, 0.15)',
                    border: '2px dashed rgba(255, 100, 100, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 20
                  }}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: [1, 1.1, 1],
                    rotate: 360
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: 1.8 },
                    scale: { duration: 2, repeat: Infinity, repeatType: "reverse" },
                    rotate: { duration: 10, repeat: Infinity, ease: "linear" }
                  }}
                >
                  <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>DEADLOCK</span>
                </motion.div>
              </DeadlockDiagramContainer>
            </ContainerSection>
          </Card>
          
          {/* Right Card - Solutions */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContainerSection>
              <SectionTitle>Deadlock Situation</SectionTitle>
              
              <TextContent>
                In this classic deadlock scenario:
              </TextContent>

              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Thread 1</HighlightText> holds mutex_a and waits for mutex_b
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
                    <HighlightText>Thread 2</HighlightText> holds mutex_b and waits for mutex_a
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <TextContent>
                Neither thread can proceed, resulting in deadlock. This situation can be extremely difficult to debug, 
                especially in complex systems with many locks and threads.
              </TextContent>
              
              <SectionTitle>Deadlock Prevention</SectionTitle>
              
              <TextContent>
                To avoid deadlocks, developers must follow careful design principles:
              </TextContent>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Lock ordering:</HighlightText> Always acquire locks in the same order
                  </TextContent>
                </StepContent>
              </SolutionStep>
              
              <SolutionStep
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Timeouts:</HighlightText> Use timeouts on lock acquisitions
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
                    <HighlightText>Higher-level constructs:</HighlightText> Use atomic operations or thread-safe data structures
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

export default RaceCondition2; 