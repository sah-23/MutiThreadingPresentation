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

const InfoRow = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

const InfoColumn = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  font-size: 0.95rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
`;

const ListTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--primary-light);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.2rem;
  
  &:before {
    content: '•';
    position: absolute;
    left: 0;
    top: 0;
    color: var(--primary);
  }
`;

const DiagramContainer = styled(motion.div)`
  flex: 1;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DiagramTitle = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.9rem;
  color: var(--primary-light);
`;

const ProcessorDiagram = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
`;

const CoreComparisonRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 3rem;
`;

const CoreContainer = styled(motion.div)<{ type: 'smt' | 'single' }>`
  width: 300px;
  height: ${props => props.type === 'smt' ? '380px' : '280px'};
  border: 2px solid var(--primary);
  border-radius: 8px;
  background: rgba(74, 144, 226, 0.05);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  box-shadow: 0 0 15px rgba(74, 144, 226, 0.2);
`;

const CoreTitle = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  background: var(--background);
  padding: 0 0.8rem;
  color: var(--primary);
  font-weight: 600;
  font-size: 1rem;
`;

const ResourceSection = styled.div<{ type: 'shared' | 'duplicated' }>`
  border: 1px solid ${props => props.type === 'shared' ? 'rgba(80, 200, 120, 0.7)' : 'rgba(255, 180, 50, 0.7)'};
  border-radius: 6px;
  background: ${props => props.type === 'shared' ? 'rgba(80, 200, 120, 0.05)' : 'rgba(255, 180, 50, 0.05)'};
  padding: 0.8rem;
  position: relative;
`;

const ResourceLabel = styled.div<{ type: 'shared' | 'duplicated' }>`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--background);
  padding: 0 0.5rem;
  color: ${props => props.type === 'shared' ? 'rgba(80, 200, 120, 1)' : 'rgba(255, 180, 50, 1)'};
  font-size: 0.8rem;
  font-weight: 500;
`;

const ResourceRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ResourceItem = styled.div<{ type: 'shared' | 'duplicated' }>`
  flex: 1;
  padding: 0.4rem;
  text-align: center;
  font-size: 0.8rem;
  border: 1px dashed ${props => props.type === 'shared' ? 'rgba(80, 200, 120, 0.7)' : 'rgba(255, 180, 50, 0.7)'};
  color: ${props => props.type === 'shared' ? 'rgba(80, 200, 120, 1)' : 'rgba(255, 180, 50, 1)'};
  border-radius: 4px;
`;

const ThreadSection = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.5rem 0;
`;

const ThreadBox = styled.div<{ index: number }>`
  flex: 1;
  height: 40px;
  background: ${props => props.index === 0 ? 'rgba(74, 144, 226, 0.7)' : 'rgba(255, 107, 107, 0.7)'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
`;

const ComparisonLabel = styled.div`
  font-size: 1rem;
  color: var(--primary-light);
  text-align: center;
  margin-top: -1.5rem;
  font-weight: 500;
`;

const SMT: React.FC = () => {
  return (
    <Slide title="Simultaneous Multi-Threading (SMT)" subtitle="Multiple hardware threads on a single core">
      <ContentContainer>
        <InfoRow>
          <InfoColumn
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <InfoCard
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <CardTitle>What is SMT?</CardTitle>
              <CardContent>
                Simultaneous Multi-Threading (SMT) is a hardware capability that allows a single processor core to execute
                multiple independent threads of instructions simultaneously, improving resource utilization
                and computational throughput.
              </CardContent>
            </InfoCard>
            
            <InfoCard
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <CardTitle>Common Implementations</CardTitle>
              <CardContent>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <ListItem>Intel Hyper-Threading: 2 threads per core</ListItem>
                  <ListItem>AMD SMT: 2 threads per core</ListItem>
                  <ListItem>IBM POWER: 4-8 threads per core</ListItem>
                  <ListItem>ARM SMT: 2-4 threads per core</ListItem>
                </ul>
              </CardContent>
            </InfoCard>
          </InfoColumn>
          
          <InfoColumn
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <InfoCard
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <CardTitle>Resource Sharing</CardTitle>
              <CardContent>
                <ListTitle>Shared Resources:</ListTitle>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <ListItem>Execution units (ALU, FPU)</ListItem>
                  <ListItem>Cache memory (L1, L2)</ListItem>
                  <ListItem>Branch predictors</ListItem>
                  <ListItem>Instruction decoders</ListItem>
                </ul>
                
                <ListTitle>Duplicated Resources:</ListTitle>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <ListItem>Architectural registers</ListItem>
                  <ListItem>Instruction pointers</ListItem>
                  <ListItem>Thread state storage</ListItem>
                </ul>
              </CardContent>
            </InfoCard>
            
            <InfoCard
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <CardTitle>Performance Impact</CardTitle>
              <CardContent>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <ListItem>10-30% throughput improvement on average</ListItem>
                  <ListItem>Best for workloads with mixed instruction types</ListItem>
                  <ListItem>Diminishing returns beyond 2-4 threads per core</ListItem>
                  <ListItem>Thread contention can reduce per-thread performance</ListItem>
                </ul>
              </CardContent>
            </InfoCard>
          </InfoColumn>
        </InfoRow>
        
        <DiagramContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <DiagramTitle>Single-Threaded vs. SMT Core</DiagramTitle>
          <ProcessorDiagram>
            <CoreComparisonRow>
              <CoreContainer
                type="single"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <CoreTitle>Single-Threaded Core</CoreTitle>
                
                <ThreadSection>
                  <ThreadBox index={0}>Thread 0</ThreadBox>
                </ThreadSection>
                
                <ResourceSection type="shared">
                  <ResourceLabel type="shared">Execution Resources</ResourceLabel>
                  <ResourceRow>
                    <ResourceItem type="shared">ALU</ResourceItem>
                    <ResourceItem type="shared">FPU</ResourceItem>
                    <ResourceItem type="shared">SIMD</ResourceItem>
                  </ResourceRow>
                  <ResourceRow>
                    <ResourceItem type="shared">L1 Cache</ResourceItem>
                    <ResourceItem type="shared">L2 Cache</ResourceItem>
                  </ResourceRow>
                </ResourceSection>
                
                <ResourceSection type="duplicated">
                  <ResourceLabel type="duplicated">Thread State</ResourceLabel>
                  <ResourceRow>
                    <ResourceItem type="duplicated">Registers</ResourceItem>
                    <ResourceItem type="duplicated">PC</ResourceItem>
                  </ResourceRow>
                </ResourceSection>
              </CoreContainer>
              
              <CoreContainer
                type="smt"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <CoreTitle>SMT Core (2 Threads)</CoreTitle>
                
                <ThreadSection>
                  <ThreadBox index={0}>Thread 0</ThreadBox>
                  <ThreadBox index={1}>Thread 1</ThreadBox>
                </ThreadSection>
                
                <ResourceSection type="shared">
                  <ResourceLabel type="shared">Shared Execution Resources</ResourceLabel>
                  <ComparisonLabel>Improved Utilization</ComparisonLabel>
                  <ResourceRow>
                    <ResourceItem type="shared">ALU</ResourceItem>
                    <ResourceItem type="shared">FPU</ResourceItem>
                    <ResourceItem type="shared">SIMD</ResourceItem>
                  </ResourceRow>
                  <ResourceRow>
                    <ResourceItem type="shared">L1 Cache</ResourceItem>
                    <ResourceItem type="shared">L2 Cache</ResourceItem>
                  </ResourceRow>
                  <ResourceRow>
                    <ResourceItem type="shared">Branch Prediction</ResourceItem>
                    <ResourceItem type="shared">Instruction Fetch</ResourceItem>
                  </ResourceRow>
                </ResourceSection>
                
                <ResourceSection type="duplicated">
                  <ResourceLabel type="duplicated">Duplicated Thread State</ResourceLabel>
                  <ResourceRow>
                    <ResourceItem type="duplicated">Registers (Thread 0)</ResourceItem>
                    <ResourceItem type="duplicated">Registers (Thread 1)</ResourceItem>
                  </ResourceRow>
                  <ResourceRow>
                    <ResourceItem type="duplicated">PC (Thread 0)</ResourceItem>
                    <ResourceItem type="duplicated">PC (Thread 1)</ResourceItem>
                  </ResourceRow>
                </ResourceSection>
              </CoreContainer>
            </CoreComparisonRow>
          </ProcessorDiagram>
        </DiagramContainer>
      </ContentContainer>
    </Slide>
  );
};

export default SMT; 