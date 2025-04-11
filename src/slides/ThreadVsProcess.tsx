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

const ComparisonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1.5rem;
`;

const ComparisonRow = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
`;

const DefinitionContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DefinitionItem = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DefinitionTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  color: var(--primary);
  font-weight: 600;
`;

const DefinitionList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DefinitionListItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.5rem;
  
  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--primary);
  }
`;

const KeyDistinction = styled(motion.div)`
  background: rgba(74, 144, 226, 0.2);
  border: 1px solid rgba(74, 144, 226, 0.4);
  border-radius: 8px;
  padding: 1.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.1rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.95);
  font-style: italic;
`;

const DiagramContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProcessDiagram = styled(motion.div)`
  width: 100%;
  max-width: 320px;
  height: 250px;
  background: rgba(10, 25, 47, 0.3);
  border: 2px solid rgba(74, 144, 226, 0.4);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const ProcessLabel = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #ff79c6;
  text-align: center;
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
`;

const ThreadDiagram = styled(motion.div)`
  width: 100%;
  max-width: 320px;
  height: 250px;
  background: rgba(10, 25, 47, 0.3);
  border: 2px solid rgba(80, 250, 123, 0.4);
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const ThreadLabel = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #50fa7b;
  text-align: center;
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
`;

const MemoryBlock = styled.div<{ bgColor: string; height?: string }>`
  width: 80%;
  height: ${props => props.height || '40px'};
  background: ${props => props.bgColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 5px 0;
`;

const ThreadBox = styled.div<{ bgColor: string }>`
  width: 80%;
  height: 30px;
  background: ${props => props.bgColor};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 5px 0;
`;

const ThreadVsProcess: React.FC = () => {
  return (
    <Slide title="Thread vs Process" subtitle="Understanding the fundamental differences">
      <ComparisonContainer>
        <ComparisonRow>
          <DefinitionContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <DefinitionItem>
              <DefinitionTitle>Process</DefinitionTitle>
              <DefinitionList>
                <DefinitionListItem>An independent program in execution with its own memory space</DefinitionListItem>
                <DefinitionListItem>Has its own resources allocated by the operating system</DefinitionListItem>
                <DefinitionListItem>Contains at least one thread (the main thread)</DefinitionListItem>
                <DefinitionListItem>Processes are isolated from each other for stability and security</DefinitionListItem>
                <DefinitionListItem>Communication between processes requires special mechanisms (IPC)</DefinitionListItem>
                <DefinitionListItem>More resource-intensive to create and manage</DefinitionListItem>
              </DefinitionList>
            </DefinitionItem>
          </DefinitionContainer>
          
          <DiagramContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProcessDiagram>
              <ProcessLabel>Process</ProcessLabel>
              <MemoryBlock bgColor="rgba(255, 121, 198, 0.4)">Memory Space</MemoryBlock>
              <MemoryBlock bgColor="rgba(255, 121, 198, 0.3)">Code Section</MemoryBlock>
              <MemoryBlock bgColor="rgba(255, 121, 198, 0.2)">Data Section</MemoryBlock>
              <MemoryBlock bgColor="rgba(255, 121, 198, 0.3)">Resources</MemoryBlock>
              <ThreadBox bgColor="rgba(255, 121, 198, 0.5)">Main Thread</ThreadBox>
            </ProcessDiagram>
          </DiagramContainer>
        </ComparisonRow>
        
        <ComparisonRow>
          <DefinitionContainer
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DefinitionItem>
              <DefinitionTitle>Thread</DefinitionTitle>
              <DefinitionList>
                <DefinitionListItem>A lightweight execution unit within a process</DefinitionListItem>
                <DefinitionListItem>Shares memory space and resources with other threads in the same process</DefinitionListItem>
                <DefinitionListItem>Multiple threads in a process can run concurrently</DefinitionListItem>
                <DefinitionListItem>Share access to the process's code, data, and files</DefinitionListItem>
                <DefinitionListItem>Communication between threads is simpler and more efficient</DefinitionListItem>
                <DefinitionListItem>Less overhead to create and manage</DefinitionListItem>
              </DefinitionList>
            </DefinitionItem>
          </DefinitionContainer>
          
          <DiagramContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <ThreadDiagram>
              <ThreadLabel>Process with Multiple Threads</ThreadLabel>
              <MemoryBlock bgColor="rgba(80, 250, 123, 0.2)" height="60px">
                Shared Memory Space
              </MemoryBlock>
              <MemoryBlock bgColor="rgba(80, 250, 123, 0.3)" height="40px">
                Shared Resources
              </MemoryBlock>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
                <ThreadBox bgColor="rgba(80, 250, 123, 0.5)">Thread 1</ThreadBox>
                <ThreadBox bgColor="rgba(80, 250, 123, 0.5)">Thread 2</ThreadBox>
                <ThreadBox bgColor="rgba(80, 250, 123, 0.5)">Thread 3</ThreadBox>
              </div>
            </ThreadDiagram>
          </DiagramContainer>
        </ComparisonRow>
      </ComparisonContainer>
    </Slide>
  );
};

export default ThreadVsProcess; 