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

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 16px;
  padding: 1.2rem;
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
  transform: translateX(-6px);
`;

const Section = styled.div`
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
  transform: translateX(-20px);
  
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

const ListItem = styled(motion.li)`
  margin-bottom: 0.6rem;
  position: relative;
  padding-left: 0.5rem;
  font-size: 0.95rem;
  color: white;
  
  &::before {
    content: "•";
    color: var(--primary);
    display: inline-block;
    width: 1rem;
    position: absolute;
    left: -1rem;
    font-weight: bold;
  }
`;

const List = styled.ul`
  margin: 0.6rem 0;
  padding-left: 1.5rem;
  list-style-type: none;
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const TextContent = styled.p`
  color: white;
  font-size: 0.95rem;
  line-height: 1.4;
  margin-bottom: 0.6rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CodeBlock = styled.pre`
  background: rgba(20, 30, 50, 0.7);
  border-radius: 8px;
  padding: 0.8rem;
  margin: 0.6rem 0;
  border: 1px solid rgba(80, 100, 180, 0.3);
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #e2e8f0;
`;

const CodeLine = styled.div`
  margin-bottom: 0.2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Keyword = styled.span`
  color: #81a1c1;
`;

const Comment = styled.span`
  color: #616e88;
`;

const String = styled.span`
  color: #a3be8c;
`;

const ScrollableSection = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 10px;
  max-height: 500px;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(30, 40, 70, 0.5);
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(100, 120, 200, 0.5);
    border-radius: 10px;
  }
`;

const PythonMultiThreading: React.FC = () => {
  return (
    <Slide title="How to multi thread in Python?">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionsContainer>
            <Section>
              <SectionTitle>Memory Management in Python</SectionTitle>
              <ScrollableSection>
                <TextContent>
                  Every programming language has a memory management system that allocates and tracks memory 
                  addresses for program execution. When your code runs, it needs memory to store data, and the 
                  memory management system handles where and how that data is stored.
                </TextContent>
                
                <SubTitle>Memory Address Spaces</SubTitle>
                
                <TextContent>
                  <HighlightText>Stack Memory:</HighlightText>
                </TextContent>
                <List>
                  <ListItem>Fast, automatically managed memory with LIFO (Last In, First Out) structure</ListItem>
                  <ListItem>Stores local variables, function parameters, and return addresses</ListItem>
                  <ListItem>Memory allocation/deallocation happens automatically when functions are called/returned</ListItem>
                  <ListItem>Fixed size (typically a few MB) and each thread has its own stack</ListItem>
                  <ListItem>Very fast access but limited space</ListItem>
                  <ListItem>Variables have predetermined, compile-time memory requirements</ListItem>
                </List>
                
                <TextContent>
                  <HighlightText>Heap Memory:</HighlightText>
                </TextContent>
                <List>
                  <ListItem>Larger region for dynamic memory allocation</ListItem>
                  <ListItem>Stores objects whose size is determined at runtime or that outlive their creating function</ListItem>
                  <ListItem>Requires explicit allocation and (in some languages) explicit deallocation</ListItem>
                  <ListItem>Shared across the entire process</ListItem>
                  <ListItem>Slower access than stack but much larger capacity</ListItem>
                  <ListItem>Can become fragmented over time</ListItem>
                </List>
                
                <TextContent>
                  <HighlightText>Other Memory Regions:</HighlightText>
                </TextContent>
                <List>
                  <ListItem>Code/Text Segment: Contains executable instructions</ListItem>
                  <ListItem>Data Segment: Stores global/static variables</ListItem>
                  <ListItem>Memory-mapped Files: File contents mapped directly to memory</ListItem>
                  <ListItem>Shared Memory: Regions accessible by multiple processes</ListItem>
                </List>
                
                <TextContent>
                  <HighlightText>Memory Management in Python:</HighlightText>
                </TextContent>
                <List>
                  <ListItem>Uses reference counting and garbage collection</ListItem>
                  <ListItem>All objects are stored on the heap (not the stack)</ListItem>
                  <ListItem>The Global Interpreter Lock (GIL) prevents multiple threads from executing Python bytecode at once</ListItem>
                </List>
              </ScrollableSection>
            </Section>
            
            <Section>
              <SectionTitle>Thread Safety in Python</SectionTitle>
              <ScrollableSection>
                <TextContent>
                  Thread safety refers to code's ability to function correctly when executed by multiple threads 
                  simultaneously without causing data corruption or unexpected behavior. When code is thread-safe, 
                  it can be safely used in multithreaded environments without additional synchronization.
                </TextContent>
                
                <SubTitle>What Makes Code Thread-Safe</SubTitle>
                
                <List>
                  <ListItem>
                    <HighlightText>Atomic Operations:</HighlightText> Operations that complete in a single step 
                    without possibility of interruption
                  </ListItem>
                  <ListItem>
                    <HighlightText>Immutability:</HighlightText> Immutable objects cannot be modified after creation
                  </ListItem>
                  <ListItem>
                    <HighlightText>Thread Local Storage:</HighlightText> Data stored separately for each thread
                  </ListItem>
                  <ListItem>
                    <HighlightText>Synchronization Mechanisms:</HighlightText> Mutexes/locks, semaphores, atomic variables
                  </ListItem>
                  <ListItem>
                    <HighlightText>Thread Confinement:</HighlightText> Restricting data access to a single thread
                  </ListItem>
                </List>
                
                <SubTitle>Thread Safety Example in Python</SubTitle>
                
                <CodeBlock>
                  <CodeLine><Comment># A simple shared variable example</Comment></CodeLine>
                  <CodeLine><Keyword>import</Keyword> threading</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Comment># Shared variable</Comment></CodeLine>
                  <CodeLine>x = 0  <Comment># Initial value</Comment></CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Comment># Three threads want to do different things with x</Comment></CodeLine>
                  <CodeLine><Keyword>def</Keyword> <Keyword>thread1_function</Keyword>():</CodeLine>
                  <CodeLine>    <Keyword>global</Keyword> x</CodeLine>
                  <CodeLine>    x = 1</CodeLine>
                  <CodeLine>    print("Thread 1: Set x to 1")</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Keyword>def</Keyword> <Keyword>thread2_function</Keyword>():</CodeLine>
                  <CodeLine>    <Keyword>global</Keyword> x</CodeLine>
                  <CodeLine>    x = 2</CodeLine>
                  <CodeLine>    print("Thread 2: Set x to 2")</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Keyword>def</Keyword> <Keyword>thread3_function</Keyword>():</CodeLine>
                  <CodeLine>    <Keyword>global</Keyword> x</CodeLine>
                  <CodeLine>    x = 3</CodeLine>
                  <CodeLine>    print("Thread 3: Set x to 3")</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Comment># Create threads</Comment></CodeLine>
                  <CodeLine>t1 = threading.Thread(target=thread1_function)</CodeLine>
                  <CodeLine>t2 = threading.Thread(target=thread2_function)</CodeLine>
                  <CodeLine>t3 = threading.Thread(target=thread3_function)</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Comment># Start all threads</Comment></CodeLine>
                  <CodeLine>t1.start()</CodeLine>
                  <CodeLine>t2.start()</CodeLine>
                  <CodeLine>t3.start()</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Comment># Wait for all threads to finish</Comment></CodeLine>
                  <CodeLine>t1.join()</CodeLine>
                  <CodeLine>t2.join()</CodeLine>
                  <CodeLine>t3.join()</CodeLine>
                  <CodeLine></CodeLine>
                  <CodeLine><Comment># Final value depends on which thread executed last</Comment></CodeLine>
                  <CodeLine>print("Final value of x:", x)</CodeLine>
                </CodeBlock>
                
                <TextContent>
                  In this example, three threads simply try to set a shared variable <HighlightText>x</HighlightText> to different values:
                </TextContent>
                <List>
                  <ListItem>
                    <HighlightText>Thread 1:</HighlightText> Sets x to 1
                  </ListItem>
                  <ListItem>
                    <HighlightText>Thread 2:</HighlightText> Sets x to 2
                  </ListItem>
                  <ListItem>
                    <HighlightText>Thread 3:</HighlightText> Sets x to 3
                  </ListItem>
                </List>
                <TextContent>
                  Because all three threads access the same shared variable without any synchronization, 
                  the final value of x will be determined by whichever thread executes last - a classic race condition.
                  This unpredictability is why thread safety mechanisms like locks are necessary in multi-threaded programs.
                </TextContent>
                
                <SubTitle>Thread Safety Challenges</SubTitle>
                
                <List>
                  <ListItem>
                    <HighlightText>Race Conditions:</HighlightText> Occur when the outcome depends on the timing/sequence of operations
                  </ListItem>
                  <ListItem>
                    <HighlightText>Deadlocks:</HighlightText> Threads waiting indefinitely for each other to release resources
                  </ListItem>
                  <ListItem>
                    <HighlightText>Priority Inversion:</HighlightText> Low-priority thread holds a resource needed by a high-priority thread
                  </ListItem>
                  <ListItem>
                    <HighlightText>Visibility Problems:</HighlightText> Changes made by one thread not being visible to others due to CPU caching
                  </ListItem>
                </List>
                
                <TextContent>
                  Thread safety is critical in concurrent programming, as failures in this area can lead to some of 
                  the most difficult-to-diagnose bugs that may appear randomly and be difficult to reproduce.
                </TextContent>
              </ScrollableSection>
            </Section>
          </SectionsContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default PythonMultiThreading; 