import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  padding-top: 30px;
`;

const ExampleContainer = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.4rem 2rem;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
`;

const ExampleText = styled.p`
  font-size: 1.05rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
`;

const Highlight = styled.span`
  color: #ff79c6;
  font-weight: bold;
  background: rgba(255, 121, 198, 0.1);
  padding: 0 4px;
  border-radius: 4px;
`;

const Highlight2 = styled.span`
  color: #50fa7b;
  font-weight: bold;
  background: rgba(80, 250, 123, 0.1);
  padding: 0 4px;
  border-radius: 4px;
`;

const RealWorldExample: React.FC = () => {
  return (
    <Slide title="Real World Example" subtitle="Understanding the concepts with a cake analogy">
      <ContentContainer>
        <ExampleContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ExampleText>
            When baking a cake alone, you demonstrate <Highlight>multithreading</Highlight> by initiating background processes (like preheating the oven or letting butter soften) while actively working on other tasks (mixing ingredients or preparing pans). This creates the illusion of simultaneous execution, though you're actually switching between tasks as a single processing unit. 
            
            True <Highlight2>parallelism</Highlight2>, however, requires multiple independent workers (like additional people), each with dedicated resources (their own mixing bowls and tools) working simultaneously on different aspects of cake-making. This <Highlight2>parallel</Highlight2> approach offers significant speed improvements without context-switching overhead and scales well with additional workers, though it introduces challenges in coordination, resource allocation, communication, and task division. 
            
            The fundamental difference is that <Highlight>multithreading</Highlight> simulates concurrency through task-switching on a single processor, while <Highlight2>parallelism</Highlight2> achieves genuine simultaneity through multiple processing units working independently.
          </ExampleText>
        </ExampleContainer>
      </ContentContainer>
    </Slide>
  );
};

export default RealWorldExample; 