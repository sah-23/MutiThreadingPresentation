import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 14px;
  padding: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border: 2px solid rgba(100, 120, 200, 0.4);
  width: 98%;
  max-width: 1300px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-weight: 600;
  text-align: center;
`;

const ThreadModelContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  height: 100%;
  width: 100%;
`;

const TextSection = styled(motion.div)`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1.2rem;
  border-left: 5px solid var(--accent);
  color: rgba(255, 255, 255, 0.95);
  font-size: 1.05rem;
  line-height: 1.5;
  width: 32%;
  align-self: stretch;
  flex-shrink: 0;
`;

const HighlightText = styled.span`
  color: var(--accent);
  font-weight: 600;
`;

const DiagramSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68%;
  position: relative;
`;

const ProcessBox = styled.div`
  border: 3px solid var(--primary);
  border-radius: 10px;
  background: rgba(30, 40, 70, 0.7);
  padding: 1.3rem;
  width: 100%;
  position: relative;
`;

const ProcessTitle = styled.div`
  position: absolute;
  top: -12px;
  left: 20px;
  background: rgba(25, 35, 60, 1);
  padding: 0 12px;
  color: var(--primary);
  font-weight: 600;
  font-size: 1.1rem;
`;

const SharedSection = styled.div`
  background: rgba(60, 120, 180, 0.3);
  border: 1px solid rgba(60, 120, 180, 0.6);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.2rem;
`;

const SharedTitle = styled.h3`
  color: rgba(100, 180, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(100, 180, 255, 0.9);
  }
`;

const SharedResources = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SharedItem = styled(motion.div)`
  background: rgba(40, 70, 100, 0.7);
  border-radius: 6px;
  padding: 0.6rem 0.9rem;
  color: white;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ThreadsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
`;

const ThreadBox = styled(motion.div)`
  background: rgba(90, 50, 120, 0.3);
  border: 1px solid rgba(140, 80, 200, 0.6);
  border-radius: 8px;
  padding: 0.9rem;
  flex: 1;
  position: relative;
`;

const ThreadTitle = styled.h3`
  color: rgba(180, 130, 230, 0.9);
  font-size: 1.1rem;
  margin-bottom: 0.7rem;
  font-weight: 600;
  text-align: center;
`;

const ThreadResources = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ThreadItem = styled.div`
  background: rgba(60, 30, 80, 0.7);
  border-radius: 6px;
  padding: 0.5rem 0.7rem;
  color: white;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 1rem;
`;

const ThreadWorkingModel: React.FC = () => {
  return (
    <Slide title="How Do We Actually Work With Threads?" subtitle="Understanding thread components and shared resources">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ThreadModelContainer>
            <TextSection
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <p>
                Working with threads requires understanding what resources are <HighlightText>shared</HighlightText> versus 
                what each thread maintains <HighlightText>separately</HighlightText>. Threads within the same process share 
                the process's address space, global variables, and open files, allowing for efficient communication and 
                resource sharing.
              </p>
              <p>
                However, each thread has its own execution context including a program counter, registers, stack, 
                Processor Status Word (PSW), and thread-local data. This separation allows threads to execute independently 
                while still operating within the same process environment.
              </p>
            </TextSection>
            
            <DiagramSection
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <ProcessBox>
                <ProcessTitle>Process</ProcessTitle>
                
                <SharedSection>
                  <SharedTitle>Shared Among All Threads</SharedTitle>
                  <SharedResources>
                    <SharedItem
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <IconWrapper>📚</IconWrapper> Address Space
                    </SharedItem>
                    <SharedItem
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <IconWrapper>🌐</IconWrapper> Global Variables
                    </SharedItem>
                    <SharedItem
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <IconWrapper>📁</IconWrapper> Open Files
                    </SharedItem>
                    <SharedItem
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.8 }}
                    >
                      <IconWrapper>🔌</IconWrapper> Sockets
                    </SharedItem>
                    <SharedItem
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    >
                      <IconWrapper>🔒</IconWrapper> Semaphores
                    </SharedItem>
                  </SharedResources>
                </SharedSection>
                
                <ThreadsContainer>
                  <ThreadBox
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.9 }}
                  >
                    <ThreadTitle>Thread 1</ThreadTitle>
                    <ThreadResources>
                      <ThreadItem><IconWrapper>🔢</IconWrapper> Program Counter</ThreadItem>
                      <ThreadItem><IconWrapper>⚙️</IconWrapper> Registers</ThreadItem>
                      <ThreadItem><IconWrapper>📚</IconWrapper> Stack</ThreadItem>
                      <ThreadItem><IconWrapper>🔐</IconWrapper> Thread-Local Data</ThreadItem>
                      <ThreadItem><IconWrapper>📝</IconWrapper> PSW</ThreadItem>
                    </ThreadResources>
                  </ThreadBox>
                  
                  <ThreadBox
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.0 }}
                  >
                    <ThreadTitle>Thread 2</ThreadTitle>
                    <ThreadResources>
                      <ThreadItem><IconWrapper>🔢</IconWrapper> Program Counter</ThreadItem>
                      <ThreadItem><IconWrapper>⚙️</IconWrapper> Registers</ThreadItem>
                      <ThreadItem><IconWrapper>📚</IconWrapper> Stack</ThreadItem>
                      <ThreadItem><IconWrapper>🔐</IconWrapper> Thread-Local Data</ThreadItem>
                      <ThreadItem><IconWrapper>📝</IconWrapper> PSW</ThreadItem>
                    </ThreadResources>
                  </ThreadBox>
                  
                  <ThreadBox
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1.1 }}
                  >
                    <ThreadTitle>Thread 3</ThreadTitle>
                    <ThreadResources>
                      <ThreadItem><IconWrapper>🔢</IconWrapper> Program Counter</ThreadItem>
                      <ThreadItem><IconWrapper>⚙️</IconWrapper> Registers</ThreadItem>
                      <ThreadItem><IconWrapper>📚</IconWrapper> Stack</ThreadItem>
                      <ThreadItem><IconWrapper>🔐</IconWrapper> Thread-Local Data</ThreadItem>
                      <ThreadItem><IconWrapper>📝</IconWrapper> PSW</ThreadItem>
                    </ThreadResources>
                  </ThreadBox>
                </ThreadsContainer>
              </ProcessBox>
            </DiagramSection>
          </ThreadModelContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadWorkingModel; 