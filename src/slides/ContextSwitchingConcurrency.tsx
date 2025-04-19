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
  padding: 0 1.5rem;
`;

const Card = styled(motion.div)<{ borderColor?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor || 'rgba(100, 120, 200, 0.3)'};
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3<{ color?: string }>`
  font-size: 1.15rem;
  color: ${props => props.color || 'var(--primary)'};
  margin-bottom: 0.8rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.6rem;
`;

const CardContent = styled.div`
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 0.4rem;
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

const ListItem = styled.div`
  margin-bottom: 0.35rem;
  display: flex;
  align-items: flex-start;
  
  &:before {
    content: "•";
    color: rgba(74, 144, 226, 0.8);
    margin-right: 0.5rem;
    font-weight: bold;
  }
`;

const StepContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 0.7rem;
  margin-bottom: 1.2rem;
`;

const Step = styled(motion.div)`
  background: rgba(74, 144, 226, 0.1);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 0.8rem 0.7rem 1.1rem 0.7rem;
  width: calc(20% - 1rem);
  text-align: center;
  position: relative;
  
  &:not(:last-child):after {
    content: "→";
    position: absolute;
    right: -1.1rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
    font-size: 1.2rem;
  }
`;

const StepIcon = styled.div`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const StepTitle = styled.div`
  font-weight: 600;
  font-size: 0.8rem;
  margin-bottom: 0.25rem;
  color: rgba(74, 144, 226, 0.9);
`;

const StepDescription = styled.div`
  font-size: 0.75rem;
  line-height: 1.3;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1.3rem 0 1rem 0;
  position: relative;
  padding-top: 2.2rem;
`;

const TimelineAxis = styled.div`
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 0.6rem 0;
  
  &:after {
    content: 'Time →';
    position: absolute;
    right: 0;
    top: -25px;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ProcessTimeline = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
`;

const ProcessSegment = styled(motion.div)<{ bgColor: string, isRunning: boolean }>`
  height: ${props => props.isRunning ? '22px' : '11px'};
  margin-top: ${props => props.isRunning ? '-5px' : '0px'};
  background: ${props => props.bgColor};
  border-radius: 4px;
  position: relative;
  
  ${props => props.isRunning && `
    box-shadow: 0 0 8px ${props.bgColor};
    z-index: 2;
  `}
  
  &:after {
    content: ${props => props.isRunning ? "'Running'" : "'Waiting'"};
    position: absolute;
    top: ${props => props.isRunning ? '-20px' : '-18px'};
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.7rem;
    color: ${props => props.isRunning ? props.bgColor : 'rgba(255, 255, 255, 0.6)'};
    white-space: nowrap;
  }
`;

const ContextSwitchingConcurrency: React.FC = () => {
  return (
    <Slide title="Context Switching in Concurrency" subtitle="Process State Management & CPU Sharing">
      <ContentContainer>
        <Row>
          <Column>
            <Card 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              borderColor="rgba(100, 120, 200, 0.4)"
            >
              <CardTitle>Job to Process Transformation</CardTitle>
              <CardContent>
                <div style={{ marginBottom: "0.5rem" }}>When jobs transform into processes, they follow a sequential pattern:</div>
                
                <StepContainer>
                  <Step
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <StepIcon>📋</StepIcon>
                    <StepTitle>Job Analysis</StepTitle>
                    <StepDescription>OS examines requirements and dependencies</StepDescription>
                  </Step>
                  
                  <Step
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <StepIcon>🆕</StepIcon>
                    <StepTitle>Process Initialization</StepTitle>
                    <StepDescription>Creates address space, PID, initial state</StepDescription>
                  </Step>
                  
                  <Step
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <StepIcon>💾</StepIcon>
                    <StepTitle>Memory Loading</StepTitle>
                    <StepDescription>Code and data loaded into memory</StepDescription>
                  </Step>
                  
                  <Step
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <StepIcon>⚙️</StepIcon>
                    <StepTitle>Execution Prep</StepTitle>
                    <StepDescription>Initializes registers, PC, stack pointer</StepDescription>
                  </Step>
                  
                  <Step
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <StepIcon>⏳</StepIcon>
                    <StepTitle>Queue Placement</StepTitle>
                    <StepDescription>Process enters ready queue</StepDescription>
                  </Step>
                </StepContainer>
              </CardContent>
            </Card>
          </Column>
        </Row>
        
        <Row style={{ marginTop: '3rem' }}>
          <Column>
            <Card 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              borderColor="rgba(106, 217, 126, 0.4)"
            >
              <CardTitle color="rgba(106, 217, 126, 1)">Context Switching and State Preservation</CardTitle>
              <CardContent>                
                {/* Process Timeline Visualization */}
                <TimelineContainer>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    style={{ width: '100%' }}
                  >
                    <ProcessTimeline>
                      <div style={{ display: 'flex', width: '100%' }}>
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          bgColor="rgba(240, 147, 43, 0.7)" 
                          isRunning={true} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '15%' }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                          bgColor="rgba(240, 147, 43, 0.3)" 
                          isRunning={false} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '25%' }}
                          transition={{ duration: 0.6, delay: 1.9 }}
                          bgColor="rgba(240, 147, 43, 0.7)" 
                          isRunning={true} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ duration: 0.7, delay: 2.5 }}
                          bgColor="rgba(240, 147, 43, 0.3)" 
                          isRunning={false} 
                        />
                      </div>
                    </ProcessTimeline>
                    
                    <ProcessTimeline>
                      <div style={{ display: 'flex', width: '100%' }}>
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          bgColor="rgba(74, 144, 226, 0.3)" 
                          isRunning={false} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '15%' }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                          bgColor="rgba(74, 144, 226, 0.7)" 
                          isRunning={true} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '25%' }}
                          transition={{ duration: 0.6, delay: 1.9 }}
                          bgColor="rgba(74, 144, 226, 0.3)" 
                          isRunning={false} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ duration: 0.7, delay: 2.5 }}
                          bgColor="rgba(74, 144, 226, 0.7)" 
                          isRunning={true} 
                        />
                      </div>
                    </ProcessTimeline>
                    
                    <ProcessTimeline>
                      <div style={{ display: 'flex', width: '100%' }}>
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ duration: 0.8, delay: 0.6 }}
                          bgColor="rgba(106, 217, 126, 0.3)" 
                          isRunning={false} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '15%' }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                          bgColor="rgba(106, 217, 126, 0.3)" 
                          isRunning={false} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '25%' }}
                          transition={{ duration: 0.6, delay: 1.9 }}
                          bgColor="rgba(106, 217, 126, 0.7)" 
                          isRunning={true} 
                        />
                        <ProcessSegment 
                          initial={{ width: 0 }}
                          animate={{ width: '30%' }}
                          transition={{ duration: 0.7, delay: 2.5 }}
                          bgColor="rgba(106, 217, 126, 0.3)" 
                          isRunning={false} 
                        />
                      </div>
                    </ProcessTimeline>
                    
                    <TimelineAxis />
                  </motion.div>
                </TimelineContainer>
                
                <div style={{ marginTop: '0.3rem', marginBottom: '0.3rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <div style={{ flex: '1', minWidth: '200px', marginBottom: '0.3rem' }}>
                      <strong style={{ color: 'rgba(240, 147, 43, 0.9)' }}>State Saving:</strong> OS saves process state in PCB (registers, PC, memory map, I/O status)
                    </div>
                    
                    <div style={{ flex: '1', minWidth: '200px', marginBottom: '0.3rem' }}>
                      <strong style={{ color: 'rgba(180, 180, 180, 0.9)' }}>Scheduling Decision:</strong> OS selects next process based on priority/algorithm
                    </div>
                    
                    <div style={{ flex: '1', minWidth: '200px', marginBottom: '0.3rem' }}>
                      <strong style={{ color: 'rgba(74, 144, 226, 0.9)' }}>State Restoration:</strong> OS loads saved state from PCB to CPU
                    </div>
                    
                    <div style={{ flex: '1', minWidth: '200px', marginBottom: '0.3rem' }}>
                      <strong style={{ color: 'rgba(106, 217, 126, 0.9)' }}>Execution Resumption:</strong> Process continues from where it left off
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Column>
        </Row>
      </ContentContainer>
    </Slide>
  );
};

export default ContextSwitchingConcurrency; 