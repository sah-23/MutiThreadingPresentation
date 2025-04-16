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

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--accent);
  margin-bottom: 0.8rem;
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

const SolutionBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(40, 50, 80, 0.3);
  border-left: 3px solid var(--primary);
`;

const CodeBlock = styled.pre`
  background-color: rgba(30, 40, 65, 0.8);
  border-radius: 8px;
  padding: 1rem;
  border-left: 3px solid var(--primary);
  margin: 0.8rem 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #eaeaea;
  overflow-x: auto;
`;

const CodeLine = styled.div`
  margin-bottom: 0.2rem;
`;

const ComparisonsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ComparisonColumn = styled.div`
  flex: 1;
`;

const PythonParallelism: React.FC = () => {
  return (
    <Slide title="Then How to really multi thread in python">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContainerSection>
            <TextContent>
              For CPU-bound tasks requiring true parallelism, Python developers typically use alternatives like the multiprocessing 
              module (which uses separate processes instead of threads), or alternative Python implementations like Jython or 
              IronPython that don't have a GIL.
            </TextContent>
            
            <SectionTitle>True Parallelism Solutions in Python</SectionTitle>
            
            <ComparisonsContainer>
              <ComparisonColumn>
                <SolutionBox
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <SectionTitle>Multiprocessing Module</SectionTitle>
                  <TextContent>
                    Uses separate processes instead of threads, completely bypassing the GIL. Each process has its own Python 
                    interpreter and memory space.
                  </TextContent>
                  
                  <CodeBlock>
                    <CodeLine>from multiprocessing import Process</CodeLine>
                    <CodeLine></CodeLine>
                    <CodeLine>def cpu_intensive_task(n):</CodeLine>
                    <CodeLine>    # This will run in parallel</CodeLine>
                    <CodeLine>    result = 0</CodeLine>
                    <CodeLine>    for i in range(n):</CodeLine>
                    <CodeLine>        result += i * i</CodeLine>
                    <CodeLine>    print("Process result: {0}".format(result))</CodeLine>
                    <CodeLine></CodeLine>
                    <CodeLine>if __name__ == "__main__":</CodeLine>
                    <CodeLine>    # Create 4 processes</CodeLine>
                    <CodeLine>    processes = []</CodeLine>
                    <CodeLine>    for i in range(4):</CodeLine>
                    <CodeLine>        p = Process(</CodeLine>
                    <CodeLine>            target=cpu_intensive_task,</CodeLine>
                    <CodeLine>            args=(10000000,)</CodeLine>
                    <CodeLine>        )</CodeLine>
                    <CodeLine>        processes.append(p)</CodeLine>
                    <CodeLine>        p.start()</CodeLine>
                    <CodeLine></CodeLine>
                    <CodeLine>    # Wait for all processes to finish</CodeLine>
                    <CodeLine>    for p in processes:</CodeLine>
                    <CodeLine>        p.join()</CodeLine>
                  </CodeBlock>
                </SolutionBox>
              </ComparisonColumn>
              
              <ComparisonColumn>
                <SolutionBox
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <SectionTitle>Alternative Python Implementations</SectionTitle>
                  <TextContent>
                    Some Python implementations don't have a GIL, allowing true thread-based parallelism:
                  </TextContent>
                  
                  <TextContent>
                    <HighlightText>Jython:</HighlightText> Implementation of Python that runs on the Java Virtual Machine. 
                    It uses Java's threading model and doesn't have a GIL.
                  </TextContent>
                  
                  <TextContent>
                    <HighlightText>IronPython:</HighlightText> Implementation of Python for the .NET Framework. 
                    Also doesn't have a GIL, enabling true parallel execution.
                  </TextContent>
                  
                  <SectionTitle style={{ marginTop: '1rem' }}>Other Parallelism Options</SectionTitle>
                  
                  <TextContent>
                    <HighlightText>concurrent.futures:</HighlightText> A high-level interface for asynchronously executing callables. 
                    Its ProcessPoolExecutor uses multiprocessing for true parallelism.
                  </TextContent>
                  
                  <TextContent>
                    <HighlightText>Dask:</HighlightText> Parallel computing library that scales Python to multi-core machines and 
                    distributed clusters.
                  </TextContent>
                  
                  <TextContent>
                    <HighlightText>Numba:</HighlightText> JIT compiler that generates optimized machine code from Python code, 
                    with support for parallelism.
                  </TextContent>
                </SolutionBox>
              </ComparisonColumn>
            </ComparisonsContainer>
            
            <TextContent style={{ marginTop: '1rem' }}>
              The key tradeoff: Multiprocessing introduces overhead from process creation and inter-process 
              communication. Choose your parallelism solution based on your specific workload and requirements.
            </TextContent>
          </ContainerSection>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default PythonParallelism; 