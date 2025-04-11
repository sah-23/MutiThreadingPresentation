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

const InfoContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const InfoSection = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const SectionContent = styled.div`
  font-size: 0.95rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
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
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CPUDiagram = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
`;

const CPUChip = styled(motion.div)`
  width: 400px;
  height: 380px;
  border: 2px solid var(--primary);
  border-radius: 8px;
  background: rgba(74, 144, 226, 0.05);
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr 1fr auto;
  gap: 15px;
  padding: 15px;
  box-shadow: 0 0 20px rgba(74, 144, 226, 0.2);
`;

const CPUTitle = styled.div`
  position: absolute;
  top: -15px;
  left: 20px;
  background: var(--background);
  padding: 0 0.8rem;
  color: var(--primary);
  font-weight: 600;
  font-size: 1rem;
`;

const CPULabel = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
`;

const CoreContainer = styled(motion.div)<{ color: string }>`
  border: 1px solid ${props => props.color};
  border-radius: 6px;
  background: ${props => `${props.color}10`};
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  position: relative;
`;

const CoreLabel = styled.div<{ color: string }>`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--background);
  padding: 0 0.5rem;
  color: ${props => props.color};
  font-size: 0.8rem;
  font-weight: 500;
`;

const ThreadBox = styled.div<{ color: string }>`
  height: 20px;
  margin: 0.3rem 0;
  background: ${props => props.color};
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: black;
  font-weight: 500;
`;

const ComponentBox = styled.div<{ color: string }>`
  margin: 0.3rem 0;
  padding: 0.3rem;
  border: 1px dashed ${props => props.color};
  border-radius: 3px;
  font-size: 0.7rem;
  color: ${props => props.color};
  text-align: center;
`;

const CacheContainer = styled(motion.div)`
  grid-column: 1 / -1;
  border: 1px solid rgba(255, 180, 50, 0.7);
  border-radius: 6px;
  background: rgba(255, 180, 50, 0.05);
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  position: relative;
`;

const CacheLabel = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--background);
  padding: 0 0.5rem;
  color: rgba(255, 180, 50, 1);
  font-size: 0.8rem;
  font-weight: 500;
`;

const CacheBox = styled.div<{ width: string }>`
  width: ${props => props.width};
  padding: 0.3rem;
  border: 1px solid rgba(255, 180, 50, 0.5);
  border-radius: 3px;
  font-size: 0.7rem;
  color: rgba(255, 180, 50, 1);
  text-align: center;
`;

const MemoryController = styled(motion.div)`
  grid-column: 1 / -1;
  border: 1px solid rgba(147, 51, 234, 0.7);
  border-radius: 6px;
  background: rgba(147, 51, 234, 0.05);
  padding: 0.8rem;
  text-align: center;
  position: relative;
  font-size: 0.8rem;
  color: rgba(147, 51, 234, 1);
`;

const MemoryLabel = styled.div`
  position: absolute;
  top: -10px;
  left: 10px;
  background: var(--background);
  padding: 0 0.5rem;
  color: rgba(147, 51, 234, 1);
  font-size: 0.8rem;
  font-weight: 500;
`;

const CPUArchitecture: React.FC = () => {
  return (
    <Slide title="CPU Architecture and Threading" subtitle="Hardware support for multi-threading">
      <ContentContainer>
        <InfoContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InfoSection
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <SectionTitle>Core Architecture</SectionTitle>
            <SectionContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem>Single-core vs. multi-core processors</ListItem>
                <ListItem>Physical cores vs. logical cores (hardware threads)</ListItem>
                <ListItem>Modern CPUs: 4-64+ physical cores</ListItem>
              </ul>
            </SectionContent>
          </InfoSection>
          
          <InfoSection
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <SectionTitle>CPU Components</SectionTitle>
            <SectionContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem>Execution units (ALU, FPU, Vector units)</ListItem>
                <ListItem>Registers (general purpose, control, etc.)</ListItem>
                <ListItem>Caches (L1, L2, L3)</ListItem>
                <ListItem>Memory controllers</ListItem>
              </ul>
            </SectionContent>
          </InfoSection>
          
          <InfoSection
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <SectionTitle>Thread Execution</SectionTitle>
            <SectionContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem>Each physical core can run 1+ threads</ListItem>
                <ListItem>Simultaneous Multi-Threading (SMT) allows multiple threads per core</ListItem>
                <ListItem>Threads compete for core resources</ListItem>
                <ListItem>Multi-core enables true parallel thread execution</ListItem>
              </ul>
            </SectionContent>
          </InfoSection>
          
          <InfoSection
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <SectionTitle>Performance Considerations</SectionTitle>
            <SectionContent>
              <ul style={{ paddingLeft: '1.2rem' }}>
                <ListItem>Cache hierarchy impact on thread performance</ListItem>
                <ListItem>Memory access patterns</ListItem>
                <ListItem>Thread scheduling and CPU affinity</ListItem>
                <ListItem>Resource contention between threads</ListItem>
              </ul>
            </SectionContent>
          </InfoSection>
        </InfoContainer>
        
        <DiagramContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <CPUDiagram>
            <CPUChip
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CPUTitle>Multi-Core CPU</CPUTitle>
              <CPULabel>Modern CPU Architecture</CPULabel>
              
              <CoreContainer 
                color="rgba(74, 144, 226, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <CoreLabel color="rgba(74, 144, 226, 1)">Core 0</CoreLabel>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 0</ThreadBox>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 1</ThreadBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Execution Units</ComponentBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Registers</ComponentBox>
              </CoreContainer>
              
              <CoreContainer 
                color="rgba(74, 144, 226, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <CoreLabel color="rgba(74, 144, 226, 1)">Core 1</CoreLabel>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 2</ThreadBox>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 3</ThreadBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Execution Units</ComponentBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Registers</ComponentBox>
              </CoreContainer>
              
              <CoreContainer 
                color="rgba(74, 144, 226, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <CoreLabel color="rgba(74, 144, 226, 1)">Core 2</CoreLabel>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 4</ThreadBox>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 5</ThreadBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Execution Units</ComponentBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Registers</ComponentBox>
              </CoreContainer>
              
              <CoreContainer 
                color="rgba(74, 144, 226, 0.7)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.0 }}
              >
                <CoreLabel color="rgba(74, 144, 226, 1)">Core 3</CoreLabel>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 6</ThreadBox>
                <ThreadBox color="rgba(74, 144, 226, 0.5)">Thread 7</ThreadBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Execution Units</ComponentBox>
                <ComponentBox color="rgba(74, 144, 226, 1)">Registers</ComponentBox>
              </CoreContainer>
              
              <CacheContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.1 }}
              >
                <CacheLabel>Cache Hierarchy</CacheLabel>
                <CacheBox width="25%">L1 Cache</CacheBox>
                <CacheBox width="35%">L2 Cache</CacheBox>
                <CacheBox width="40%">L3 Shared Cache</CacheBox>
              </CacheContainer>
              
              <MemoryController
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                <MemoryLabel>Memory Interface</MemoryLabel>
                Memory Controller
              </MemoryController>
            </CPUChip>
          </CPUDiagram>
        </DiagramContainer>
      </ContentContainer>
    </Slide>
  );
};

export default CPUArchitecture; 