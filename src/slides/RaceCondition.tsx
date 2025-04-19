import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%;
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-top: -0.8rem;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 95%;
  gap: 1.5rem;
  margin: 0 auto;
  padding: 0 1.5rem;
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

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 0.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const SubTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--primary);
  margin: 0.6rem 0;
  font-weight: 600;
`;

const TextContent = styled.p`
  color: white;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const CodeBlock = styled.pre`
  background: rgba(20, 30, 50, 0.7);
  border-radius: 8px;
  padding: 0.8rem;
  margin: 0.8rem 0;
  border: 1px solid rgba(80, 100, 180, 0.3);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #e2e8f0;
`;

const ThreadBox = styled(motion.div)`
  background: rgba(35, 45, 70, 0.6);
  border-radius: 8px;
  padding: 0.8rem;
  margin: 0.8rem 0;
  border: 1px solid rgba(100, 120, 200, 0.3);
  color: white;
  font-size: 0.95rem;
`;

const ContainerSection = styled.div`
  padding: 0 0.5rem;
`;

const RaceCondition: React.FC = () => {
  return (
    <Slide title="Race Conditions and Deadlocks">
      <ContentContainer>
        <CardsContainer>
          {/* Left Card - Race Condition Explanation */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContainerSection>
              <SectionTitle>Race Conditions in Non-Thread-Safe Languages</SectionTitle>
              
              <TextContent>
                A <HighlightText>race condition</HighlightText> occurs when multiple threads access and modify shared data concurrently, 
                with the final result depending on the exact timing of their execution.
              </TextContent>
              
              <TextContent>Let's look at this simple Python code:</TextContent>
              
              <CodeBlock>
                x = 2
                x = 3
                x = 1
              </CodeBlock>
              
              <TextContent>
                In a single-threaded program, this would simply set x to 1 after all operations complete. 
                However, if we have 3 threads executing these operations concurrently:
              </TextContent>
              
              <ThreadBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div>Thread A: x = 2</div>
                <div>Thread B: x = 3</div>
                <div>Thread C: x = 1</div>
              </ThreadBox>
              
              <TextContent>
                These threads will "race" with each other to modify the value of x. Since the language isn't thread-safe, 
                there's no guarantee about which thread will execute last, making the final value of x unpredictable.
              </TextContent>
            </ContainerSection>
          </Card>
          
          {/* Right Card - Consequences */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContainerSection>
              <SectionTitle>Consequences of Race Conditions</SectionTitle>
              
              <TextContent>
                Race conditions can lead to various issues in your programs:
              </TextContent>

              <ThreadBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div>• <HighlightText>Unpredictable Results:</HighlightText> The same program may produce different outputs on different runs</div>
                <div>• <HighlightText>Data Corruption:</HighlightText> Shared data structures may end up in invalid states</div>
                <div>• <HighlightText>Hard to Debug:</HighlightText> Race conditions are often intermittent and difficult to reproduce</div>
                <div>• <HighlightText>Security Vulnerabilities:</HighlightText> Time-of-check to time-of-use (TOCTOU) bugs can be exploited</div>
              </ThreadBox>
              
              <TextContent>
                Without proper thread synchronization, the final value could be 2, 3, or 1, depending on which thread completes its operation last.
              </TextContent>
              
              <TextContent>
                To prevent race conditions, synchronization mechanisms such as mutexes, semaphores, and atomic operations 
                are essential when working with shared resources in multi-threaded environments.
              </TextContent>
              
              <TextContent>
                Even languages with built-in thread safety mechanisms can suffer from race conditions if developers don't use the appropriate synchronization.
              </TextContent>
            </ContainerSection>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </Slide>
  );
};

export default RaceCondition; 