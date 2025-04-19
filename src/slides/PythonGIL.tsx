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

const GILDiagram = styled(motion.div)`
  width: 100%;
  height: 120px;
  background-color: rgba(12, 17, 43, 0.8);
  border-radius: 8px;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const GILMutex = styled(motion.div)`
  width: 70px;
  height: 70px;
  background-color: rgba(100, 140, 220, 0.6);
  border-radius: 50%;
  border: 2px solid rgba(140, 180, 255, 0.8);
  box-shadow: 0 0 20px rgba(100, 140, 220, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  font-size: 1rem;
`;

const Thread = styled(motion.div)`
  position: absolute;
  width: 70px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const PythonGIL: React.FC = () => {
  return (
    <Slide title="Python's Global Interpreter Lock (GIL)">
      <ContentContainer>
        <CardsContainer>
          {/* Left Card - GIL Explanation */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <ContainerSection>
              <TextContent>
                The <HighlightText>Global Interpreter Lock (GIL)</HighlightText> is a mutex that protects access to Python objects, 
                preventing multiple threads from executing Python bytecode simultaneously. The GIL is a core feature of CPython, 
                the most common implementation of Python.
              </TextContent>
              
              <GILDiagram>
                <GILMutex
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  GIL
                </GILMutex>
                
                <Thread
                  style={{ 
                    backgroundColor: 'rgba(220, 100, 100, 0.7)', 
                    top: '20px', 
                    left: '50px',
                    opacity: 0.5,
                    width: '70px'
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Thread 1
                </Thread>
                
                <Thread
                  style={{ 
                    backgroundColor: 'rgba(100, 200, 100, 0.7)', 
                    bottom: '20px', 
                    left: '80px',
                    opacity: 0.5,
                    width: '70px'
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 0.5, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Thread 2
                </Thread>
                
                <Thread
                  style={{ 
                    backgroundColor: 'rgba(100, 100, 220, 0.7)', 
                    top: '20px', 
                    right: '50px',
                    border: '2px solid rgba(255, 255, 255, 0.8)',
                    width: '70px'
                  }}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  Thread 3
                </Thread>
                
                {/* Arrow showing Thread 3 has the GIL */}
                <motion.div
                  style={{ 
                    position: 'absolute',
                    top: '40px',
                    right: '125px',
                    width: '40px',
                    height: '2px',
                    backgroundColor: 'rgba(100, 100, 220, 0.9)',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 1 }}
                />
                
                <motion.div
                  style={{ 
                    position: 'absolute',
                    top: '25px',
                    right: '135px',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  Has GIL
                </motion.div>
              </GILDiagram>
              
              <SectionTitle>How GIL Addresses Race Conditions</SectionTitle>
              <TextContent>
                Let's see how the GIL affects our previous example:
              </TextContent>
              
              <CodeBlock>
                <CodeLine>x = 2</CodeLine>
                <CodeLine>x = 3</CodeLine>
                <CodeLine>x = 1</CodeLine>
              </CodeBlock>
              
              <TextContent>
                When multiple threads try to execute this code, the GIL ensures that only one thread can execute 
                Python bytecode at any given time. This effectively serializes access to shared variables like x, 
                preventing race conditions at the Python code level.
              </TextContent>
            </ContainerSection>
          </Card>
          
          {/* Right Card - GIL Details */}
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ContainerSection>
              <TextContent>
                Each thread must acquire the GIL before executing, and Python's interpreter automatically releases 
                and reacquires the GIL periodically during a thread's execution (typically after a certain number 
                of bytecode instructions).
              </TextContent>
              
              <SectionTitle>How GIL Prevents Deadlocks</SectionTitle>
              
              <TextContent>
                The GIL helps prevent certain types of deadlocks by eliminating the need for many fine-grained locks. 
                Since only one thread can execute Python code at a time, you don't need to worry about complex locking 
                patterns when accessing shared Python objects.
              </TextContent>
              
              <TextContent>
                This significantly reduces the risk of deadlock situations where threads are waiting for each other's locks.
              </TextContent>
              
              <SectionTitle>Limitations of the GIL</SectionTitle>
              
              <TextContent>
                While the GIL prevents race conditions, it also means that CPU-bound Python programs cannot fully 
                utilize multiple cores. For CPU-intensive operations, you might need to use:
              </TextContent>
              
              <motion.ul
                style={{ color: 'white', paddingLeft: '1.5rem', margin: '0.5rem 0' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >
                  <TextContent style={{ margin: '0.3rem 0' }}>
                    <HighlightText>Multiprocessing</HighlightText> (separate Python processes)
                  </TextContent>
                </motion.li>
                
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.4 }}
                >
                  <TextContent style={{ margin: '0.3rem 0' }}>
                    <HighlightText>C extensions</HighlightText> that release the GIL
                  </TextContent>
                </motion.li>
                
                <motion.li
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 }}
                >
                  <TextContent style={{ margin: '0.3rem 0' }}>
                    Alternative Python implementations (<HighlightText>PyPy, Jython</HighlightText>)
                  </TextContent>
                </motion.li>
              </motion.ul>
            </ContainerSection>
          </Card>
        </CardsContainer>
      </ContentContainer>
    </Slide>
  );
};

export default PythonGIL; 