import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding-top: 0.7rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled(motion.div)<{ borderColor?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.1rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor || 'rgba(100, 120, 200, 0.3)'};
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const CardTitle = styled.h3<{ color?: string }>`
  font-size: 1.15rem;
  color: ${props => props.color || 'var(--primary)'};
  margin-bottom: 0.7rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.5rem;
`;

const CardContent = styled.div`
  font-size: 0.85rem;
`;

const ProcessStep = styled.div`
  margin-bottom: 0.6rem;
`;

const StepTitle = styled.div<{ color?: string }>`
  font-weight: bold;
  color: ${props => props.color || 'rgba(74, 144, 226, 1)'};
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
`;

const StepContent = styled.div`
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.35;
  padding-left: 0.9rem;
`;

const DiagramContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  margin-top: 0.4rem;
  margin-bottom: 0.7rem;
`;

const DiagramElement = styled(motion.div)<{ bgColor: string }>`
  background: ${props => props.bgColor};
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 95px;
  position: relative;
`;

const ElementTitle = styled.div`
  font-weight: bold;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
  text-align: center;
`;

const ElementIcon = styled.div`
  font-size: 1.4rem;
  margin-bottom: 0.25rem;
`;

const Arrow = styled.div`
  width: 35px;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    top: -3px;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 6px solid rgba(255, 255, 255, 0.3);
  }
`;

const ListItem = styled.div`
  margin-bottom: 0.35rem;
  display: flex;
  align-items: flex-start;
  font-size: 0.8rem;
  
  &:before {
    content: "•";
    color: rgba(74, 144, 226, 0.8);
    margin-right: 0.5rem;
  }
`;

const OsAndCpu: React.FC = () => {
  return (
    <Slide title="The OS and the CPU" subtitle="Roles in Process Management">
      <ContentContainer>
        <Row>
          <Column>
            <Card 
              borderColor="rgba(106, 217, 126, 0.4)"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <CardTitle color="rgba(106, 217, 126, 1)">Operating System's Role</CardTitle>
              <CardContent>
                <DiagramContainer>
                  {/* OS Process Management Diagram */}
                  <DiagramElement 
                    bgColor="rgba(106, 217, 126, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <ElementIcon>📋</ElementIcon>
                    <ElementTitle>Job Acceptance</ElementTitle>
                  </DiagramElement>
                  
                  <Arrow />
                  
                  <DiagramElement 
                    bgColor="rgba(106, 217, 126, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <ElementIcon>🔍</ElementIcon>
                    <ElementTitle>Resource Allocation</ElementTitle>
                  </DiagramElement>
                  
                  <Arrow />
                  
                  <DiagramElement 
                    bgColor="rgba(106, 217, 126, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <ElementIcon>🧠</ElementIcon>
                    <ElementTitle>Memory Loading</ElementTitle>
                  </DiagramElement>
                  
                  <Arrow />
                  
                  <DiagramElement 
                    bgColor="rgba(106, 217, 126, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <ElementIcon>⏱️</ElementIcon>
                    <ElementTitle>Scheduling</ElementTitle>
                  </DiagramElement>
                </DiagramContainer>
                
                <div style={{ marginTop: '0.5rem' }}>
                  <ProcessStep>
                    <StepTitle color="rgba(106, 217, 126, 0.9)">Job Acceptance</StepTitle>
                    <StepContent>
                      The OS receives execution requests from users, schedulers, or other processes.
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepTitle color="rgba(106, 217, 126, 0.9)">Resource Allocation & PCB Creation</StepTitle>
                    <StepContent>
                      <ListItem>Allocates memory space (code, data, stack, heap)</ListItem>
                      <ListItem>Reserves I/O devices and files</ListItem>
                      <ListItem>Creates Process Control Block (PID, state, memory details)</ListItem>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepTitle color="rgba(106, 217, 126, 0.9)">Memory Loading & Initialization</StepTitle>
                    <StepContent>
                      <ListItem>Loads executable code from storage into memory</ListItem>
                      <ListItem>Sets up registers, stack, environment variables</ListItem>
                      <ListItem>Links to required libraries</ListItem>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepTitle color="rgba(106, 217, 126, 0.9)">Process Scheduling</StepTitle>
                    <StepContent>
                      Adds the process to the scheduler's queue, typically in "ready" state.
                    </StepContent>
                  </ProcessStep>
                </div>
              </CardContent>
            </Card>
          </Column>
          
          <Column>
            <Card 
              borderColor="rgba(74, 144, 226, 0.4)"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <CardTitle color="rgba(74, 144, 226, 1)">CPU's Role</CardTitle>
              <CardContent>
                <DiagramContainer>
                  {/* CPU Process Execution Diagram */}
                  <DiagramElement 
                    bgColor="rgba(74, 144, 226, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <ElementIcon>🔄</ElementIcon>
                    <ElementTitle>Context Setup</ElementTitle>
                  </DiagramElement>
                  
                  <Arrow />
                  
                  <DiagramElement 
                    bgColor="rgba(74, 144, 226, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <ElementIcon>⚙️</ElementIcon>
                    <ElementTitle>Instruction Execution</ElementTitle>
                  </DiagramElement>
                  
                  <Arrow />
                  
                  <DiagramElement 
                    bgColor="rgba(74, 144, 226, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                  >
                    <ElementIcon>🔒</ElementIcon>
                    <ElementTitle>Privilege Management</ElementTitle>
                  </DiagramElement>
                  
                  <Arrow />
                  
                  <DiagramElement 
                    bgColor="rgba(74, 144, 226, 0.2)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 }}
                  >
                    <ElementIcon>⚠️</ElementIcon>
                    <ElementTitle>Interrupt Handling</ElementTitle>
                  </DiagramElement>
                </DiagramContainer>
                
                <div style={{ marginTop: '0.5rem' }}>
                  <ProcessStep>
                    <StepTitle color="rgba(74, 144, 226, 0.9)">Context Setup</StepTitle>
                    <StepContent>
                      <ListItem>Loads program counter value</ListItem>
                      <ListItem>Restores register values from PCB</ListItem>
                      <ListItem>Switches to appropriate memory space</ListItem>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepTitle color="rgba(74, 144, 226, 0.9)">Instruction Execution</StepTitle>
                    <StepContent>
                      <ListItem>Fetches instructions from memory</ListItem>
                      <ListItem>Decodes each instruction</ListItem>
                      <ListItem>Executes instructions and updates registers/memory</ListItem>
                    </StepContent>
                  </ProcessStep>
                  
                  <ProcessStep>
                    <StepTitle color="rgba(74, 144, 226, 0.9)">Privilege & Interrupt Management</StepTitle>
                    <StepContent>
                      <ListItem>Enforces user/kernel mode boundaries</ListItem>
                      <ListItem>Responds to hardware/software interrupts</ListItem>
                      <ListItem>Saves execution state when interrupted</ListItem>
                    </StepContent>
                  </ProcessStep>
                </div>
              </CardContent>
            </Card>
          </Column>
        </Row>
      </ContentContainer>
    </Slide>
  );
};

export default OsAndCpu; 