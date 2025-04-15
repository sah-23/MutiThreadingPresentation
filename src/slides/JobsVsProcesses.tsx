import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.5rem;
`;

const CardContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const ComparisonTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ComparisonColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: rgba(15, 25, 50, 0.6);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(100, 120, 200, 0.2);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const ColumnTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
`;

const ColumnContent = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
`;

const Feature = styled.div`
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start;
  
  span {
    margin-right: 0.5rem;
    font-size: 1.1rem;
  }
`;

const DiagramContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 340px;
  position: relative;
`;

const DiagramBox = styled(motion.div)<{ color?: string, background?: string }>`
  background: ${props => props.background || 'rgba(25, 35, 60, 0.7)'};
  border: 1px solid ${props => props.color || 'rgba(100, 120, 200, 0.4)'};
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

const DiagramArrow = styled(motion.div)<{ rotate?: string }>`
  width: 40px;
  height: 3px;
  background: rgba(100, 120, 200, 0.7);
  position: absolute;
  z-index: 0;
  transform: ${props => props.rotate || 'none'};
  
  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 8px solid rgba(100, 120, 200, 0.7);
  }
`;

const DiagramLabel = styled.div<{ color?: string }>`
  font-size: 0.8rem;
  color: ${props => props.color || 'rgba(100, 120, 200, 1)'};
  position: absolute;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
`;

const ProcessDiagram = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const ProcessComponent = styled(motion.div)<{ color: string }>`
  position: absolute;
  background: rgba(15, 25, 50, 0.7);
  border: 1px solid ${props => props.color};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  color: white;
  width: 120px;
  
  h5 {
    color: ${props => props.color};
    font-size: 0.9rem;
    margin: 0 0 0.3rem 0;
    text-align: center;
  }
`;

const PCBComponent = styled.div`
  margin-top: 0.5rem;
  width: 90%;
  font-size: 0.7rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  padding: 0.3rem;
  
  div {
    margin-bottom: 0.2rem;
  }
`;

const JobsVsProcesses: React.FC = () => {
  return (
    <Slide title="Jobs vs. Processes" subtitle="From Job Submission to Process Execution">
      <ContentContainer>
        <Row>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle>Understanding Jobs and Processes</CardTitle>
            <CardContent>
              <ComparisonTable>
                <ComparisonColumn
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ColumnTitle>Jobs</ColumnTitle>
                  <ColumnContent>
                    <Feature>
                      <span>📋</span> Programs or tasks waiting to be executed
                    </Feature>
                    <Feature>
                      <span>🔄</span> Blueprint or recipe for what needs to happen
                    </Feature>
                    <Feature>
                      <span>⏳</span> Not actively consuming CPU resources
                    </Feature>
                    <Feature>
                      <span>📁</span> May be stored in job queues or scheduling systems
                    </Feature>
                    <Feature>
                      <span>🚫</span> No memory allocation or system resources yet
                    </Feature>
                  </ColumnContent>
                </ComparisonColumn>
                
                <ComparisonColumn
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <ColumnTitle>Processes</ColumnTitle>
                  <ColumnContent>
                    <Feature>
                      <span>⚙️</span> Active, running instances of programs
                    </Feature>
                    <Feature>
                      <span>🖥️</span> Managed by the operating system
                    </Feature>
                    <Feature>
                      <span>🧠</span> Loaded into memory and executed by CPU
                    </Feature>
                    <Feature>
                      <span>🏷️</span> Has a unique Process ID (PID)
                    </Feature>
                    <Feature>
                      <span>🔍</span> Contains code, data, stack, and process state
                    </Feature>
                  </ColumnContent>
                </ComparisonColumn>
              </ComparisonTable>
              
              <DiagramContainer style={{ height: 200 }}>
                <DiagramBox 
                  style={{ left: '35%', top: '20%', width: '150px', height: '100px' }}
                  color="rgba(106, 217, 126, 0.7)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', color: 'rgba(106, 217, 126, 1)' }}>📋</div>
                    <div style={{ marginTop: '0.5rem', color: 'white', fontWeight: 'bold' }}>JOB</div>
                  </div>
                </DiagramBox>
                
                <DiagramBox 
                  style={{ left: '55%', top: '20%', width: '150px', height: '100px' }}
                  color="rgba(74, 144, 226, 0.7)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', color: 'rgba(74, 144, 226, 1)' }}>⚙️</div>
                    <div style={{ marginTop: '0.5rem', color: 'white', fontWeight: 'bold' }}>PROCESS</div>
                  </div>
                </DiagramBox>
              </DiagramContainer>
            </CardContent>
          </Card>
        </Row>
      </ContentContainer>
    </Slide>
  );
};

export default JobsVsProcesses; 