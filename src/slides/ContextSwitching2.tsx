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
  padding-top: 0;
  justify-content: flex-start;
  align-items: center;
  margin-top: -1.5rem;
`;

const Card = styled(motion.div)<{ borderColor?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.8rem 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor || 'rgba(100, 120, 200, 0.3)'};
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 2rem;
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
  line-height: 1.4;
`;

const ContextSwitchDiagram = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 2rem 0;
`;

const Process = styled.div<{ borderColor: string }>`
  border: 2px solid ${props => props.borderColor};
  background: rgba(25, 35, 60, 0.6);
  border-radius: 8px;
  padding: 0.7rem;
  width: 180px;
  text-align: center;
`;

const ProcessTitle = styled.div<{ color: string }>`
  font-weight: bold;
  color: ${props => props.color};
  margin-bottom: 0.3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.2rem;
  font-size: 1.1rem;
`;

const PCBBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  padding: 0.4rem;
  margin-top: 0.5rem;
  font-size: 0.85rem;
`;

const PCBItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.1rem 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
`;

const CPU = styled(motion.div)`
  background: rgba(74, 144, 226, 0.2);
  border: 2px solid rgba(74, 144, 226, 0.4);
  border-radius: 50%;
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
`;

const Arrow = styled(motion.div)<{ direction: 'in' | 'out', color: string }>`
  width: 70px;
  height: 3px;
  background: ${props => props.color};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    right: ${props => props.direction === 'in' ? '0' : 'auto'};
    left: ${props => props.direction === 'out' ? '0' : 'auto'};
    top: -4px;
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: ${props => props.direction === 'in' ? '8px solid ' + props.color : 'none'};
    border-right: ${props => props.direction === 'out' ? '8px solid ' + props.color : 'none'};
  }
`;

const ContextSwitching2: React.FC = () => {
  return (
    <Slide title="Context Switching Mechanism" subtitle="Process State Preservation During Context Switches">
      <ContentContainer>
        <Card 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          borderColor="rgba(106, 217, 126, 0.4)"
        >
          <CardTitle color="rgba(106, 217, 126, 1)">Context Switching Between Processes</CardTitle>
          <CardContent>
            <ContextSwitchDiagram>
              <Process borderColor="rgba(240, 147, 43, 0.7)">
                <ProcessTitle color="rgba(240, 147, 43, 0.9)">Process A</ProcessTitle>
                <div style={{ fontSize: '0.9rem' }}>Running → Suspended</div>
                <PCBBox>
                  <ProcessTitle color="rgba(240, 147, 43, 0.7)">PCB</ProcessTitle>
                  <PCBItem><span>Registers:</span><span>0x42F...</span></PCBItem>
                  <PCBItem><span>PC:</span><span>0x1024</span></PCBItem>
                  <PCBItem><span>Memory:</span><span>0x8000</span></PCBItem>
                </PCBBox>
              </Process>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Arrow direction="out" color="rgba(240, 147, 43, 0.7)" />
              </motion.div>
              
              <CPU
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.4rem' }}>⚙️</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', textAlign: 'center' }}>CPU</div>
                <div style={{ fontSize: '0.9rem', textAlign: 'center', marginTop: '0.3rem' }}>Context Switch</div>
              </CPU>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Arrow direction="in" color="rgba(74, 144, 226, 0.7)" />
              </motion.div>
              
              <Process borderColor="rgba(74, 144, 226, 0.7)">
                <ProcessTitle color="rgba(74, 144, 226, 0.9)">Process B</ProcessTitle>
                <div style={{ fontSize: '0.9rem' }}>Suspended → Running</div>
                <PCBBox>
                  <ProcessTitle color="rgba(74, 144, 226, 0.7)">PCB</ProcessTitle>
                  <PCBItem><span>Registers:</span><span>0x53A...</span></PCBItem>
                  <PCBItem><span>PC:</span><span>0x2048</span></PCBItem>
                  <PCBItem><span>Memory:</span><span>0xA000</span></PCBItem>
                </PCBBox>
              </Process>
            </ContextSwitchDiagram>
            
            <div style={{ marginTop: '1.2rem', textAlign: 'center', fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.9)' }}>
              <p>The context switching mechanism preserves the complete state of processes when switching CPU execution.</p>
              <p>This allows the CPU to efficiently move between processes while maintaining their execution state.</p>
              <p style={{ marginTop: '0.6rem', fontStyle: 'italic', color: 'rgba(255, 255, 255, 0.85)' }}>
                This mechanism allows multiple processes to share a single CPU while maintaining the illusion that each has dedicated resources.
              </p>
            </div>
          </CardContent>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default ContextSwitching2; 