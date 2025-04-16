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
  margin-top: -1rem;
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

const CodeBlock = styled.div`
  background-color: #1e1e2e;
  border-radius: 8px;
  padding: 1.5rem;
  border-left: 3px solid var(--primary);
  margin: 1rem 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  color: #f8f8f2;
  line-height: 1.5;
  position: relative;
  overflow-x: auto;
`;

const Comment = styled.span`
  color: #6272a4;
  font-style: italic;
`;

const Keyword = styled.span`
  color: #ff79c6;
`;

const Function = styled.span`
  color: #50fa7b;
`;

const String = styled.span`
  color: #f1fa8c;
`;

const Number = styled.span`
  color: #bd93f9;
`;

const Variable = styled.span`
  color: #8be9fd;
`;

const Operator = styled.span`
  color: #ff79c6;
`;

const ResultBox = styled.div`
  background-color: #282a36;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  color: #f8f8f2;
  font-family: 'Fira Code', monospace;
`;

const CpuBoundExample: React.FC = () => {
  return (
    <Slide title="An Example">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContainerSection>
            <TextContent>
              Here's an example of a CPU-bound program that demonstrates the performance limitations of Python threading due to the GIL:
            </TextContent>
            
            <CodeBlock>
              <Comment># write a simple cpu-bound program</Comment><br/>
              <Keyword>import</Keyword> <Variable>time</Variable><br/>
              <Keyword>from</Keyword> <Variable>threading</Variable> <Keyword>import</Keyword> <Variable>Thread</Variable><br/>
              <br/>
              <Variable>count</Variable> <Operator>=</Operator> <Number>50000000</Number><br/>
              <Keyword>def</Keyword> <Function>counter_down</Function>(<Variable>n</Variable>):<br/>
              &nbsp;&nbsp;<Keyword>while</Keyword> <Variable>n</Variable><Operator>{`>`}</Operator><Number>0</Number>:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<Variable>n</Variable><Operator>-=</Operator><Number>1</Number><br/>
              <br/>
              <Variable>start</Variable> <Operator>=</Operator> <Variable>time</Variable>.<Function>time</Function>()<br/>
              <Function>counter_down</Function>(<Variable>count</Variable>)<br/>
              <Variable>end</Variable> <Operator>=</Operator> <Variable>time</Variable>.<Function>time</Function>()<br/>
              <Function>print</Function>(<String>"The time in seconds is "</String>, <Variable>end</Variable> <Operator>-</Operator> <Variable>start</Variable>)
            </CodeBlock>
            
            <ResultBox>
              The time in seconds is 32.96816563606262
            </ResultBox>
            
            <TextContent style={{ marginTop: '1rem' }}>
              This program demonstrates a <HighlightText>CPU-bound task</HighlightText> - a simple counter that decrements a large number to zero. Since this is pure computation with no I/O operations, the GIL is not released during execution.
            </TextContent>
            
            <TextContent>
              Even if we were to run this using multiple threads, we wouldn't see a performance improvement because the GIL would prevent true parallel execution of Python bytecode, forcing the threads to run one at a time.
            </TextContent>
            
            <TextContent>
              This is exactly the type of workload where using the <HighlightText>multiprocessing</HighlightText> module would be beneficial, as it would allow the code to utilize multiple CPU cores by running separate Python interpreters in different processes.
            </TextContent>
          </ContainerSection>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default CpuBoundExample; 