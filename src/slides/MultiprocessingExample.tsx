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

const MultiprocessingExample: React.FC = () => {
  return (
    <Slide title="Multi processing Example">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContainerSection>
            <TextContent>
              Here's the same CPU-bound task using Python's multiprocessing module instead of threading:
            </TextContent>
            
            <CodeBlock>
              <Keyword>from</Keyword> <Variable>multiprocessing</Variable> <Keyword>import</Keyword> <Variable>Pool</Variable><br/>
              <Keyword>import</Keyword> <Variable>time</Variable><br/>
              <br/>
              <Variable>count</Variable> <Operator>=</Operator> <Number>50000000</Number><br/>
              <Keyword>def</Keyword> <Function>counter_down</Function>(<Variable>n</Variable>):<br/>
              &nbsp;&nbsp;<Keyword>while</Keyword> <Variable>n</Variable><Operator>{`>`}</Operator><Number>0</Number>:<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;<Variable>n</Variable><Operator>-=</Operator><Number>1</Number><br/>
              <br/>
              <Keyword>if</Keyword> <Variable>__name__</Variable> <Operator>==</Operator> <String>"__main__"</String>:<br/>
              <br/>
              &nbsp;&nbsp;<Variable>pool</Variable> <Operator>=</Operator> <Variable>Pool</Variable>(<Variable>processes</Variable> <Operator>=</Operator> <Number>2</Number>)<br/>
              &nbsp;&nbsp;<Variable>start</Variable> <Operator>=</Operator> <Variable>time</Variable>.<Function>time</Function>()<br/>
              <br/>
              &nbsp;&nbsp;<Variable>r1</Variable> <Operator>=</Operator> <Variable>pool</Variable>.<Function>apply_async</Function>(<Variable>counter_down</Variable>, [<Variable>count</Variable><Operator>//</Operator><Number>2</Number>])<br/>
              &nbsp;&nbsp;<Variable>r2</Variable> <Operator>=</Operator> <Variable>pool</Variable>.<Function>apply_async</Function>(<Variable>counter_down</Variable>, [<Variable>count</Variable><Operator>//</Operator><Number>2</Number>])<br/>
              &nbsp;&nbsp;<Variable>pool</Variable>.<Function>close</Function>()<br/>
              &nbsp;&nbsp;<Variable>pool</Variable>.<Function>join</Function>()<br/>
              <br/>
              &nbsp;&nbsp;<Variable>end</Variable><Operator>=</Operator><Variable>time</Variable>.<Function>time</Function>()<br/>
              &nbsp;&nbsp;<Function>print</Function>(<String>"Elapsed Time eq to:"</String>, <Variable>end</Variable><Operator>-</Operator><Variable>start</Variable>)
            </CodeBlock>
            
            <ResultBox>
              Elapsed Time eq to: 16.220052223205566
            </ResultBox>
            
            <TextContent style={{ marginTop: '1rem' }}>
              Using multiprocessing instead of threading for this CPU-bound task achieves <HighlightText>true parallelism</HighlightText> by creating separate Python processes, each with its own interpreter and memory space.
            </TextContent>
          </ContainerSection>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default MultiprocessingExample; 