import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%; /* Reduced height to avoid scrolling */
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-top: -0.8rem; /* Adjusted to move content up slightly */
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 16px;
  padding: 1.2rem; /* Reduced padding to save space */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(100, 120, 200, 0.4);
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
`;

const SectionsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  transform: translateX(-6px); /* Move 6px to the left */
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 0.8rem; /* Reduced margin */
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transform: translateX(-20px); /* Increased from -6px to -12px to move further left */
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const BenefitsList = styled.ul`
  margin: 0.8rem 0; /* Reduced margin */
  padding-left: 1.5rem;
  list-style-type: none;
`;

const BenefitItem = styled(motion.li)`
  margin-bottom: 0.8rem; /* Reduced margin */
  position: relative;
  padding-left: 0.5rem;
  font-size: 1.1rem;
  color: white; /* Set default text color to white */
  
  &::before {
    content: "•";
    color: var(--primary);
    display: inline-block;
    width: 1.5rem;
    position: absolute;
    left: -1.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const TextSection = styled.div`
  background: rgba(30, 40, 70, 0.5);
  border-radius: 10px;
  padding: 1rem; /* Reduced padding */
  margin: 0.8rem 0; /* Reduced margin */
  border: 1px solid rgba(100, 120, 200, 0.3);
`;

const TextContent = styled.p`
  color: white; /* Full white */
  font-size: 1rem; /* Slightly smaller font */
  line-height: 1.4; /* Reduced line height */
  margin-bottom: 0.6rem; /* Reduced margin */
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeBlock = styled.pre`
  background: rgba(20, 30, 50, 0.7);
  border-radius: 8px;
  padding: 1rem;
  margin: 0.8rem 0;
  border: 1px solid rgba(80, 100, 180, 0.3);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e2e8f0;
`;

const CodeLine = styled.div`
  margin-bottom: 0.3rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Keyword = styled.span`
  color: #81a1c1;
`;

const FunctionName = styled.span`
  color: #88c0d0;
`;

const Comment = styled.span`
  color: #616e88;
`;

const String = styled.span`
  color: #a3be8c;
`;

const KernelModeThreading: React.FC = () => {
  return (
    <Slide title="Kernel-Mode Threading">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionsContainer>
            <Section>
              <SectionTitle>Kernel Implementation</SectionTitle>
              <TextContent>
                Kernel-mode threads are implemented directly within the operating system kernel, providing 
                true parallelism and direct control over thread execution:
              </TextContent>
              
              <TextSection>
                <TextContent>
                  <HighlightText>Thread Control Blocks (TCBs):</HighlightText> The kernel maintains a TCB for each thread, 
                  which contains the thread's execution context (program counter, registers, stack pointer) and scheduling 
                  information (priority, CPU time used).
                </TextContent>
                <TextContent>
                  <HighlightText>Thread Synchronization:</HighlightText> Kernel provides system calls for synchronization 
                  primitives like mutexes, semaphores, and condition variables that are implemented efficiently using 
                  hardware-level atomic operations.
                </TextContent>
              </TextSection>
              
              <BenefitsList>
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <HighlightText>Kernel Scheduler:</HighlightText> Threads are managed by the kernel's scheduler, 
                  which can implement complex scheduling policies like multilevel feedback queues or fair-share scheduling.
                </BenefitItem>
                
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <HighlightText>Memory Management:</HighlightText> The kernel can provide efficient thread-local 
                  storage while optimizing shared memory access between threads.
                </BenefitItem>
              </BenefitsList>
              
              <CodeBlock>
                <CodeLine><Comment>// Create a kernel thread in Linux</Comment></CodeLine>
                <CodeLine><Keyword>int</Keyword> <FunctionName>clone</FunctionName>(CLONE_VM | CLONE_THREAD | CLONE_SIGHAND, 0);</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine><Comment>// POSIX threads (pthreads) API</Comment></CodeLine>
                <CodeLine><Keyword>pthread_t</Keyword> thread;</CodeLine>
                <CodeLine><FunctionName>pthread_create</FunctionName>(&thread, NULL, thread_function, NULL);</CodeLine>
              </CodeBlock>
            </Section>
            
            <Section>
              <SectionTitle>Real-World Implementation Examples</SectionTitle>
              <TextContent>
                Most modern operating systems implement kernel-mode threading with unique characteristics:
              </TextContent>
              
              <TextSection>
                <TextContent>
                  <HighlightText>Linux Threading Model:</HighlightText> Uses the Native POSIX Thread Library (NPTL) 
                  where each thread is represented as a lightweight process (LWP) sharing the same memory space and 
                  file descriptors but with its own thread ID and task structure.
                </TextContent>
                <TextContent>
                  <HighlightText>Windows Threading:</HighlightText> Uses a two-level threading model with 
                  user-mode threads (fibers) that can be scheduled by the application on top of kernel-mode threads, 
                  giving developers flexibility in thread management.
                </TextContent>
                <TextContent>
                  <HighlightText>macOS/iOS Grand Central Dispatch:</HighlightText> Uses a task parallelism approach where 
                  developers define tasks that are scheduled on a pool of kernel threads managed by the system, abstracting 
                  away direct thread management.
                </TextContent>
              </TextSection>
              
              <TextContent>
                <HighlightText>Performance Considerations:</HighlightText> While kernel-mode threading provides 
                robust capabilities, it comes with higher creation and context-switching costs compared to 
                user-mode threading. Modern systems often employ thread pools to amortize these costs.
              </TextContent>
              
              <TextContent>
                Many operating systems now implement hybrid threading models that combine the advantages of 
                both user-mode and kernel-mode threading, such as the M:N threading model where M user-level 
                threads are mapped to N kernel-level threads for optimal performance.
              </TextContent>
            </Section>
          </SectionsContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default KernelModeThreading; 