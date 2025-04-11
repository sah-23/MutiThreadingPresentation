import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
`;

const ArchitectureContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 1rem;
  height: auto;
  max-height: 95%;
`;

const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InfoBox = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 0.8rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--primary);
  font-weight: 600;
  margin-bottom: 0.3rem;
  text-align: center;
`;

const InfoText = styled.p`
  font-size: 0.85rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.3rem;
`;

const BulletList = styled.ul`
  padding-left: 1rem;
  margin: 0.3rem 0;
`;

const BulletItem = styled.li`
  font-size: 0.85rem;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.2rem;
`;

const DiagramContainer = styled(motion.div)`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  height: auto;
`;

const BrowserDiagram = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  overflow: hidden;
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ChromeBrowser = styled(motion.div)`
  background: rgba(66, 133, 244, 0.2);
  border: 2px solid rgba(66, 133, 244, 0.5);
  border-radius: 8px;
  width: 100%;
  height: 100%;
  padding: 0.8rem;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const ChromeToolbar = styled.div`
  height: 25px;
  background: rgba(66, 133, 244, 0.5);
  border-radius: 4px;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 0.3rem;
  height: 22px;
`;

const Tab = styled.div`
  width: 100px;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px 4px 0 0;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ActiveTab = styled(Tab)`
  background: rgba(255, 255, 255, 0.4);
`;

const BrowserTitle = styled.div`
  position: absolute;
  top: -12px;
  left: 20px;
  background: var(--background);
  padding: 0 10px;
  font-size: 0.9rem;
  color: rgba(66, 133, 244, 1);
  font-weight: bold;
`;

const ProcessContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
  flex: 1;
  padding: 0.5rem;
`;

const Process = styled(motion.div)<{ color: string; height?: string }>`
  background: ${props => props.color};
  border-radius: 6px;
  width: 46%;
  height: ${props => props.height || '45%'};
  padding: 0.7rem;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const ProcessTitle = styled.div`
  font-size: 0.85rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.4rem;
  text-align: center;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.3);
  padding-bottom: 0.3rem;
`;

const ThreadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
  justify-content: center;
`;

const Thread = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  padding: 0.4rem;
  font-size: 0.75rem;
  color: white;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const ProcessVsThread: React.FC = () => {
  return (
    <Slide title="Chrome's Architecture" subtitle="Threads and Parallelism">
      <ContentContainer>
        <ArchitectureContainer>
          <InfoColumn>
            <InfoBox 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle>Multi-Process Architecture</SectionTitle>
              <InfoText>Chrome runs a separate process for:</InfoText>
              <BulletList>
                <BulletItem>Browser process (UI and coordination)</BulletItem>
                <BulletItem>Renderer processes (one per tab/site)</BulletItem>
                <BulletItem>Plugin processes (Flash, etc.)</BulletItem>
                <BulletItem>GPU process</BulletItem>
                <BulletItem>Extension & utility processes</BulletItem>
              </BulletList>
              <InfoText><strong>Advantages:</strong></InfoText>
              <BulletList>
                <BulletItem>Isolation: One tab crash doesn't affect others</BulletItem>
                <BulletItem>Security: Each renderer in a sandbox</BulletItem>
                <BulletItem>Performance: Uses multiple CPU cores</BulletItem>
              </BulletList>
            </InfoBox>
            
            <InfoBox 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <SectionTitle>Threading Model</SectionTitle>
              <InfoText>Within each process, Chrome uses multiple threads:</InfoText>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                  <InfoText><strong>Browser Process:</strong></InfoText>
                  <BulletList>
                    <BulletItem>UI thread</BulletItem>
                    <BulletItem>Network thread</BulletItem>
                    <BulletItem>Storage thread</BulletItem>
                  </BulletList>
                </div>
                <div style={{ flex: 1 }}>
                  <InfoText><strong>Renderer Process:</strong></InfoText>
                  <BulletList>
                    <BulletItem>Main thread</BulletItem>
                    <BulletItem>Compositor thread</BulletItem>
                    <BulletItem>Worker threads</BulletItem>
                  </BulletList>
                </div>
              </div>
            </InfoBox>
            
            <InfoBox 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <SectionTitle>Parallelism in Chrome</SectionTitle>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1 }}>
                  <BulletList>
                    <BulletItem><strong>Tab Isolation:</strong> Different tabs run in different processes</BulletItem>
                    <BulletItem><strong>Task Scheduling:</strong> Work distributed across threads</BulletItem>
                  </BulletList>
                </div>
                <div style={{ flex: 1 }}>
                  <BulletList>
                    <BulletItem><strong>Parallel Rendering:</strong> Smooth scrolling via compositor</BulletItem>
                    <BulletItem><strong>Site Isolation:</strong> Origins in separate processes</BulletItem>
                  </BulletList>
                </div>
              </div>
            </InfoBox>
          </InfoColumn>
          
          <DiagramContainer
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BrowserDiagram>
              <ChromeBrowser
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <BrowserTitle>Chrome Browser</BrowserTitle>
                <ChromeToolbar>
                  <TabContainer>
                    <Tab>Gmail</Tab>
                    <ActiveTab>YouTube</ActiveTab>
                    <Tab>Maps</Tab>
                  </TabContainer>
                </ChromeToolbar>
                
                <ProcessContainer>
                  <Process 
                    color="rgba(66, 133, 244, 0.6)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <ProcessTitle>Browser Process</ProcessTitle>
                    <ThreadContainer>
                      <Thread>UI Thread</Thread>
                      <Thread>Network Thread</Thread>
                      <Thread>Storage Thread</Thread>
                    </ThreadContainer>
                  </Process>
                  
                  <Process 
                    color="rgba(234, 67, 53, 0.6)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                    <ProcessTitle>Renderer: Gmail</ProcessTitle>
                    <ThreadContainer>
                      <Thread>Main Thread</Thread>
                      <Thread>Compositor Thread</Thread>
                      <Thread>Worker Thread</Thread>
                    </ThreadContainer>
                  </Process>
                  
                  <Process 
                    color="rgba(251, 188, 5, 0.6)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <ProcessTitle>Renderer: YouTube</ProcessTitle>
                    <ThreadContainer>
                      <Thread>Main Thread</Thread>
                      <Thread>Compositor Thread</Thread>
                      <Thread>Worker Thread</Thread>
                    </ThreadContainer>
                  </Process>
                  
                  <Process 
                    color="rgba(52, 168, 83, 0.6)" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                  >
                    <ProcessTitle>GPU Process</ProcessTitle>
                    <ThreadContainer>
                      <Thread>Compositor Thread</Thread>
                      <Thread>Raster Thread</Thread>
                    </ThreadContainer>
                  </Process>
                </ProcessContainer>
              </ChromeBrowser>
            </BrowserDiagram>
          </DiagramContainer>
        </ArchitectureContainer>
      </ContentContainer>
    </Slide>
  );
};

export default ProcessVsThread; 