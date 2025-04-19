import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  justify-content: flex-start;
  padding-top: 3rem;
`;

const Card = styled(motion.div)<{ borderColor?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor || 'rgba(100, 120, 200, 0.3)'};
  display: flex;
  flex-direction: column;
  min-height: 65vh;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-bottom: 1.2rem;
  height: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DiagramContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 1rem 0 2rem 0;
`;

const ProcessDiagram = styled.div<{ isMultiThread?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%; /* Same width for both diagrams */
`;

const ProcessCircle = styled.div<{ isMultiThread?: boolean }>`
  width: 220px; /* Same size for both circles */
  height: 220px; /* Same size for both circles */
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(40, 50, 80, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const ProcessLabel = styled.div`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ThreadWave = styled.div<{ color: string, rotation?: number }>`
  width: 80px;
  height: 20px;
  position: relative;
  transform: ${props => props.rotation ? `rotate(${props.rotation}deg)` : 'none'};
  margin: 0.8rem;
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.color};
    box-shadow: 0 0 4px ${props => props.color};
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      90deg,
      transparent,
      transparent 5px,
      ${props => props.color} 5px,
      ${props => props.color} 7px
    );
    opacity: 0.5;
    border-radius: 2px;
  }
`;

const SingleThread = styled.div`
  width: 2px;
  height: 120px; /* Increased height to look better in the larger circle */
  background: rgba(255, 255, 255, 0.8);
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -4px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }
`;

const ArrowRight = styled.div`
  width: 50px;
  height: 2px;
  background: rgba(255, 255, 255, 0.5);
  position: relative;
  margin: 0 1rem;
  align-self: center;
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: -5px;
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 10px solid rgba(255, 255, 255, 0.5);
  }
`;

const ThreadLabel = styled.div<{ right?: boolean }>`
  position: absolute;
  ${props => props.right ? 'right: -40px;' : 'left: -40px;'};
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  background: rgba(106, 217, 126, 0.05);
  border-radius: 8px;
  padding: 0.8rem;
  border: 1px solid rgba(106, 217, 126, 0.2);
`;

const BenefitIcon = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  font-size: 1.3rem;
  color: rgba(106, 217, 126, 0.9);
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: rgba(106, 217, 126, 0.9);
  margin-bottom: 0.3rem;
`;

const BenefitText = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.4;
`;

const ExampleBox = styled.div`
  background: rgba(74, 144, 226, 0.1);
  border: 1px dashed rgba(74, 144, 226, 0.4);
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
`;

const ExampleTitle = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: rgba(74, 144, 226, 0.9);
  margin-bottom: 0.5rem;
  border-bottom: 1px solid rgba(74, 144, 226, 0.2);
  padding-bottom: 0.3rem;
`;

const ExampleText = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.4;
`;

const ThreadSolution: React.FC = () => {
  return (
    <Slide title="The Thread Solution" subtitle="Solving Overhead Problems with Threads">
      <ContentContainer>
        <Card 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DiagramContainer>
            <ProcessDiagram>
              <ProcessCircle>
                <SingleThread />
              </ProcessCircle>
              <ProcessLabel>Single-Threaded Process</ProcessLabel>
            </ProcessDiagram>
            
            <ArrowRight />
            
            <ProcessDiagram isMultiThread>
              <ProcessCircle isMultiThread>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', height: '70%', width: '100%' }}>
                  <ThreadWave color="rgba(240, 147, 43, 0.9)" />
                  <ThreadWave color="rgba(74, 144, 226, 0.9)" />
                  <ThreadWave color="rgba(106, 217, 126, 0.9)" />
                </div>
              </ProcessCircle>
              <ProcessLabel>Multi-Threaded Process</ProcessLabel>
              <div style={{ fontSize: '0.85rem', textAlign: 'center', color: 'rgba(255, 255, 255, 0.7)' }}>
                Threads share process memory
              </div>
            </ProcessDiagram>
          </DiagramContainer>
          
          <Row>
            <Column>
              <BenefitItem>
                <BenefitIcon>🧠</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Shared Memory Space</BenefitTitle>
                  <BenefitText>
                    Unlike separate processes, threads within the same process share memory space, eliminating the need for data duplication or complex inter-process communication.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>⚡</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Lighter Context Switching</BenefitTitle>
                  <BenefitText>
                    Thread context switches are much lighter than process context switches. Thread switching only requires saving/restoring CPU registers, not the entire memory context.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>
            </Column>
            
            <Column>
              <BenefitItem>
                <BenefitIcon>🚀</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Efficient Resource Usage</BenefitTitle>
                  <BenefitText>
                    Threads require less overhead to create and maintain than processes. Creating a new thread is much faster than creating a new process.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>
              
              <BenefitItem>
                <BenefitIcon>🔄</BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Simple Communication</BenefitTitle>
                  <BenefitText>
                    Threads can communicate by directly accessing shared variables, eliminating the need for complex IPC mechanisms like pipes or sockets.
                  </BenefitText>
                </BenefitContent>
              </BenefitItem>
            </Column>
          </Row>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadSolution; 