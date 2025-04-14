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

const DescriptionContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const ComponentsContainer = styled(motion.div)`
  flex: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -20rem;
`;

const InfoCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardTitle = styled.h3`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  font-size: 0.95rem;
  line-height: 1.4;
  color: white;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
  color: white;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary);
  }
`;

const ThreadDiagram = styled.div`
  width: 100%;
  max-width: 500px;
  height: 440px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ThreadContainer = styled(motion.div)`
  width: 450px;
  height: 430px;
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  background: rgba(10, 25, 47, 0.5);
  display: grid;
  grid-template-rows: auto auto 1fr 1fr auto;
  gap: 10px;
  padding: 15px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ThreadTitle = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  background: var(--background);
  padding: 0 0.8rem;
  color: var(--primary);
  font-weight: 600;
  font-size: 1rem;
`;

const ComponentSection = styled(motion.div)<{ color: string }>`
  border: 1px solid ${props => props.color};
  border-radius: 8px;
  background: rgba(10, 25, 47, 0.5);
  padding: 1rem;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ComponentLabel = styled.div<{ color: string }>`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--background);
  padding: 0 0.5rem;
  color: ${props => props.color};
  font-size: 0.9rem;
  font-weight: 500;
`;

const ComponentContent = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
`;

const ThreadID = styled(motion.div)`
  padding: 0.8rem;
  border-radius: 8px;
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--primary-light);
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RegistersSection = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

const Register = styled.div`
  background: rgba(255, 180, 50, 0.1);
  border: 1px solid rgba(255, 180, 50, 0.3);
  border-radius: 4px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 180, 50, 1);
`;

const StackHeapContainer = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
`;

const StackSection = styled(motion.div)`
  flex: 1;
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(80, 200, 120, 0.3);
  border-radius: 8px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StackItem = styled(motion.div)<{ index: number }>`
  background: rgba(80, 200, 120, ${props => 0.1 + props.index * 0.15});
  border: 1px solid rgba(80, 200, 120, 0.4);
  border-radius: 4px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(80, 200, 120, 1);
`;

const HeapSection = styled(motion.div)`
  flex: 1;
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 8px;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const HeapItem = styled(motion.div)<{ size: number }>`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.4);
  border-radius: 4px;
  padding: 0.5rem;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 107, 107, 1);
  height: ${props => `${props.size}%`};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StateSection = styled(motion.div)`
  display: flex;
  gap: 1rem;
`;

const StateItem = styled.div<{ active?: boolean }>`
  flex: 1;
  padding: 0.7rem;
  background: ${props => props.active ? 'rgba(147, 51, 234, 0.2)' : 'rgba(10, 25, 47, 0.5)'};
  border: 1px solid rgba(147, 51, 234, ${props => props.active ? 0.6 : 0.3});
  border-radius: 8px;
  text-align: center;
  font-size: 0.9rem;
  color: ${props => props.active ? 'rgba(147, 51, 234, 1)' : 'rgba(147, 51, 234, 0.7)'};
  font-weight: ${props => props.active ? 600 : 400};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ThreadComponents: React.FC = () => {
  return (
    <Slide title="Thread Components" subtitle="Essential elements of a thread">
      <ContentContainer>
        <DescriptionContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InfoCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <CardTitle>Core Components</CardTitle>
            <CardContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem><strong>Thread ID:</strong> Unique identifier for each thread</ListItem>
                <ListItem><strong>Program Counter:</strong> Current position in the code</ListItem>
                <ListItem><strong>Register Set:</strong> Thread-specific CPU registers</ListItem>
                <ListItem><strong>Stack:</strong> Thread-local memory for function calls and variables</ListItem>
              </ul>
            </CardContent>
          </InfoCard>
          
          <InfoCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <CardTitle>Shared Resources</CardTitle>
            <CardContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem><strong>Heap Memory:</strong> Dynamically allocated memory shared between threads</ListItem>
                <ListItem><strong>Global Variables:</strong> Application-wide data accessible by all threads</ListItem>
                <ListItem><strong>File Handles:</strong> References to open files</ListItem>
                <ListItem><strong>Network Connections:</strong> Shared network resources</ListItem>
              </ul>
            </CardContent>
          </InfoCard>
          
          <InfoCard
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <CardTitle>Thread State</CardTitle>
            <CardContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem><strong>New:</strong> Thread created but not started</ListItem>
                <ListItem><strong>Runnable/Ready:</strong> Ready to run, waiting for CPU time</ListItem>
                <ListItem><strong>Running:</strong> Currently executing on CPU</ListItem>
                <ListItem><strong>Blocked/Waiting:</strong> Waiting for a resource or event</ListItem>
                <ListItem><strong>Terminated:</strong> Execution completed</ListItem>
              </ul>
            </CardContent>
          </InfoCard>
        </DescriptionContainer>
        
        <ComponentsContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ThreadDiagram>
            <ThreadContainer
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <ThreadTitle>Thread Structure</ThreadTitle>
              
              <ThreadID
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                Thread ID: 0x1A2B3C
              </ThreadID>
              
              <ComponentSection 
                color="rgba(255, 180, 50, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <ComponentLabel color="rgba(255, 180, 50, 1)">Register Set & Program Counter</ComponentLabel>
                <ComponentContent>
                  <p style={{ marginBottom: '0.5rem' }}>Program Counter: 0x7FFBA438</p>
                  <RegistersSection
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <Register>RIP</Register>
                    <Register>RSP</Register>
                    <Register>RAX</Register>
                    <Register>RBX</Register>
                    <Register>RCX</Register>
                    <Register>RDX</Register>
                    <Register>RSI</Register>
                    <Register>RDI</Register>
                  </RegistersSection>
                </ComponentContent>
              </ComponentSection>
              
              <StackHeapContainer>
                <StackSection
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <ComponentLabel color="rgba(80, 200, 120, 1)">Stack (Thread-Local)</ComponentLabel>
                  <StackItem 
                    index={0}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.0 }}
                  >
                    Local Variable
                  </StackItem>
                  <StackItem 
                    index={1}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.1 }}
                  >
                    Function Parameters
                  </StackItem>
                  <StackItem 
                    index={2}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.2 }}
                  >
                    Return Address
                  </StackItem>
                  <StackItem 
                    index={3}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.3 }}
                  >
                    Stack Frame
                  </StackItem>
                </StackSection>
                
                <HeapSection
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                >
                  <ComponentLabel color="rgba(255, 107, 107, 1)">Shared Resources</ComponentLabel>
                  <HeapItem 
                    size={30}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 1.5 }}
                  >
                    Heap Memory
                  </HeapItem>
                  <HeapItem 
                    size={20}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 1.6 }}
                  >
                    Global Variables
                  </HeapItem>
                  <HeapItem 
                    size={15}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: 1.7 }}
                  >
                    File Handles
                  </HeapItem>
                </HeapSection>
              </StackHeapContainer>
              
              <StateSection
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.8 }}
              >
                <ComponentLabel color="rgba(147, 51, 234, 1)" style={{ left: '40%' }}>Thread State</ComponentLabel>
                <StateItem>New</StateItem>
                <StateItem>Ready</StateItem>
                <StateItem active>Running</StateItem>
                <StateItem>Blocked</StateItem>
                <StateItem>Terminated</StateItem>
              </StateSection>
            </ThreadContainer>
          </ThreadDiagram>
        </ComponentsContainer>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadComponents; 