import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem 4rem;
  justify-content: flex-start;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--accent);
  margin-bottom: 0.6rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const TextContent = styled.p`
  color: white;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const ContainerSection = styled.div`
  padding: 0 0.5rem;
`;

const CodeBlock = styled.pre`
  background-color: rgba(30, 40, 65, 0.8);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid var(--primary);
  margin: 0.5rem 0 1rem 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #eaeaea;
  overflow-x: auto;
`;

const CodeLine = styled.div`
  margin-bottom: 0.2rem;
  display: flex;
`;

const LimitationPoint = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.7rem;
  padding: 0.6rem;
  border-radius: 8px;
  background: rgba(40, 50, 80, 0.3);
  border-left: 3px solid var(--primary);
`;

const StepContent = styled.div`
  flex: 1;
`;

const UsagePoint = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  
  &::before {
    content: '✓';
    color: var(--primary);
    font-weight: bold;
    margin-right: 0.5rem;
    display: inline-block;
  }
`;

const NegativePoint = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  padding: 0.5rem;
  
  &::before {
    content: '✗';
    color: #ff6b6b;
    font-weight: bold;
    margin-right: 0.5rem;
    display: inline-block;
  }
`;

const ComparisonDiagram = styled(motion.div)`
  width: 100%;
  height: 140px;
  background-color: rgba(12, 17, 43, 0.8);
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
`;

const CoreColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`;

const CoreTitle = styled.div`
  font-size: 0.9rem;
  color: white;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ThreadBox = styled(motion.div)`
  width: 40px;
  height: 25px;
  border-radius: 6px;
  margin: 0.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  color: white;
  font-weight: 600;
`;

const GILsProblem: React.FC = () => {
  return (
    <Slide title="GIL's Problem">
      <ContentContainer>
        <CardsContainer>
          {/* Left Card - GIL Limitations */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContainerSection>
              <SectionTitle>The Single-Threaded Nature of Python with GIL</SectionTitle>
              
              <TextContent>
                However, the GIL has a significant downside - it essentially forces Python to be 
                single-threaded for CPU-bound tasks:
              </TextContent>
              
              <LimitationPoint
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Makes true parallelism impossible:</HighlightText> Even on multi-core systems, 
                    only one Python thread can execute at a time. The GIL prevents threads from utilizing 
                    multiple CPU cores for parallel computation.
                  </TextContent>
                </StepContent>
              </LimitationPoint>
              
              <LimitationPoint
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Thread switching overhead:</HighlightText> The constant acquisition and 
                    release of the GIL adds overhead to threaded programs, sometimes making them slower than 
                    their single-threaded counterparts.
                  </TextContent>
                </StepContent>
              </LimitationPoint>
              
              <LimitationPoint
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <StepContent>
                  <TextContent style={{ margin: 0 }}>
                    <HighlightText>Ineffective for CPU-bound tasks:</HighlightText> When your code is primarily 
                    doing CPU-intensive calculations in Python, threading provides virtually no performance benefit 
                    because of the GIL.
                  </TextContent>
                </StepContent>
              </LimitationPoint>
              
              <ComparisonDiagram
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.3 }}
              >
                <CoreColumn>
                  <CoreTitle>Single-Threaded</CoreTitle>
                  <ThreadBox 
                    style={{ backgroundColor: 'rgba(100, 140, 220, 0.6)', width: '80%', height: '80px' }}
                  >
                    Thread 1
                  </ThreadBox>
                </CoreColumn>
                
                <motion.div
                  style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                >
                  <span style={{ color: 'white', fontSize: '0.8rem' }}>Same performance</span>
                  <motion.div
                    style={{ 
                      width: '50px', 
                      height: '2px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.5)', 
                      margin: '0.5rem auto' 
                    }}
                  />
                </motion.div>
                
                <CoreColumn>
                  <CoreTitle>Multi-Threaded with GIL</CoreTitle>
                  <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
                    <ThreadBox style={{ backgroundColor: 'rgba(100, 140, 220, 0.9)' }}>T1</ThreadBox>
                    <ThreadBox style={{ backgroundColor: 'rgba(100, 140, 220, 0.4)' }}>T2</ThreadBox>
                    <ThreadBox style={{ backgroundColor: 'rgba(100, 140, 220, 0.4)' }}>T3</ThreadBox>
                    <ThreadBox style={{ backgroundColor: 'rgba(100, 140, 220, 0.4)' }}>T4</ThreadBox>
                  </div>
                  <motion.div
                    style={{ 
                      fontSize: '0.7rem', 
                      color: 'rgba(255, 100, 100, 0.9)', 
                      marginTop: '5px',
                      fontWeight: 'bold'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                  >
                    Only one active at a time!
                  </motion.div>
                </CoreColumn>
              </ComparisonDiagram>
            </ContainerSection>
          </Card>
          
          {/* Right Card - Code Example */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContainerSection>
              <SectionTitle>Example: Threading with CPU-Bound Tasks</SectionTitle>
              <TextContent>
                Despite using multiple threads, CPU-bound tasks in Python won't run any faster because of the GIL:
              </TextContent>
              
              <CodeBlock>
                <CodeLine>import threading</CodeLine>
                <CodeLine>import time</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine>def cpu_bound_task(n):</CodeLine>
                <CodeLine>    # This computation won't benefit from threading</CodeLine>
                <CodeLine>    result = 0</CodeLine>
                <CodeLine>    for i in range(n):</CodeLine>
                <CodeLine>        result += i * i</CodeLine>
                <CodeLine>    return result</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine># Creating multiple threads for a CPU-bound task</CodeLine>
                <CodeLine>threads = []</CodeLine>
                <CodeLine>for i in range(4):  # 4 threads</CodeLine>
                <CodeLine>    t = threading.Thread(target=cpu_bound_task, </CodeLine>
                <CodeLine>                        args=(10000000,))</CodeLine>
                <CodeLine>    threads.append(t)</CodeLine>
                <CodeLine>    t.start()</CodeLine>
                <CodeLine></CodeLine>
                <CodeLine>for t in threads:</CodeLine>
                <CodeLine>    t.join()</CodeLine>
              </CodeBlock>
              
              <TextContent>
                In this example, despite using 4 threads, the computation won't run any faster than 
                a single-threaded version because the GIL ensures only one thread executes Python bytecode at a time.
              </TextContent>
              
              <TextContent style={{ marginTop: '1rem' }}>
                The GIL forces each thread to <HighlightText>wait for its turn</HighlightText> to execute Python code, 
                eliminating the expected performance benefits of parallel execution for CPU-intensive tasks.
              </TextContent>
            </ContainerSection>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </Slide>
  );
};

export default GILsProblem; 