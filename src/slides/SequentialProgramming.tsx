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
  padding-top: 20px;
  gap: 1rem;
`;

const ExplanationText = styled(motion.div)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.4;
  max-width: 800px;
  margin: 0 auto;
`;

const CodeContainer = styled(motion.div)`
  background: #121212;
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  padding-top: 2.2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  width: 70%;
  margin: 0 auto;
  position: relative;
  overflow: visible;
`;

const WindowHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 28px;
  background: #1f1f1f;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  align-items: center;
  padding-left: 12px;
`;

const CodeDot = styled.div<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.color};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  margin-right: 6px;
`;

const Pre = styled.pre`
  margin: 0;
  padding-top: 0;
  font-family: 'Fira Code', monospace;
  overflow: hidden;
  background: #121212;
`;

const Code = styled.code`
  color: #f8f8f2;
  font-size: 0.95rem;
  line-height: 1.4;
`;

const Line = styled(motion.div)<{ indent?: number; color?: string }>`
  margin-left: ${props => (props.indent || 0) * 20}px;
  color: ${props => props.color || 'inherit'};
`;

const Keyword = styled.span`
  color: #ff79c6;
  font-weight: bold;
`;

const FunctionName = styled.span`
  color: #50fa7b;
`;

const Comment = styled.span`
  color: #6272a4;
`;

const StringLiteral = styled.span`
  color: #f1fa8c;
`;

const Highlight = styled.span`
  color: #ff5555;
  font-weight: bold;
`;

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

const SequentialProgramming: React.FC = () => {
  return (
    <Slide title="Sequential Programming" subtitle="Default execution flow in programming languages">
      <ContentContainer>
        <ExplanationText
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          By default, programming languages are sequential in nature.
          Code execution happens line by line in the usual scenario.
          Consider the following Python example:
        </ExplanationText>
        
        <CodeContainer
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <WindowHeader>
            <CodeDot color="#ff5f56" />
            <CodeDot color="#ffbd2e" />
            <CodeDot color="#27c93f" />
          </WindowHeader>
          
          <Pre>
            <Code>
              <Line><Keyword>class</Keyword> <Highlight>Runner</Highlight>:</Line>
              <Line indent={1}><Keyword>def</Keyword> <FunctionName>main</FunctionName>():</Line>
              <Line indent={2}>init_database()</Line>
              <Line indent={2}><Highlight>download_data</Highlight>()</Line>
              <Line indent={2}>process_on_data()</Line>
              <Line indent={2}>show_the_results()</Line>
              <Line></Line>
              <Line indent={1}><Keyword>def</Keyword> <FunctionName>init_database</FunctionName>():</Line>
              <Line indent={2}><Comment># Initialize database connection</Comment></Line>
              <Line indent={2}><Keyword>print</Keyword>(<StringLiteral>"Initializing database..."</StringLiteral>)</Line>
              <Line indent={1}></Line>
              <Line indent={1}><Keyword>def</Keyword> <FunctionName>download_data</FunctionName>():</Line>
              <Line indent={2}><Comment># Download data from server</Comment></Line>
              <Line indent={2}><Keyword>print</Keyword>(<StringLiteral>"Downloading data..."</StringLiteral>)</Line>
              <Line indent={1}></Line>
              <Line indent={1}><Keyword>def</Keyword> <FunctionName>process_on_data</FunctionName>():</Line>
              <Line indent={2}><Comment># Process the downloaded data</Comment></Line>
              <Line indent={2}><Keyword>print</Keyword>(<StringLiteral>"Processing data..."</StringLiteral>)</Line>
              <Line indent={1}></Line>
              <Line indent={1}><Keyword>def</Keyword> <FunctionName>show_the_results</FunctionName>():</Line>
              <Line indent={2}><Comment># Display processed results</Comment></Line>
              <Line indent={2}><Keyword>print</Keyword>(<StringLiteral>"Showing results..."</StringLiteral>)</Line>
              <Line></Line>
              <Line><Keyword>if</Keyword> __name__ == <StringLiteral>"__main__"</StringLiteral>:</Line>
              <Line indent={1}>Runner.main()</Line>
            </Code>
          </Pre>
        </CodeContainer>
      </ContentContainer>
    </Slide>
  );
};

export default SequentialProgramming; 