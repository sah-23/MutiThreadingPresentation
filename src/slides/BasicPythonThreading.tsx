import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
`;

const CodeContainer = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const CodeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(74, 144, 226, 0.3);
`;

const CodeTitle = styled.div`
  font-size: 1.1rem;
  color: var(--primary-light);
  font-weight: 500;
`;

const CodeEditor = styled.div`
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  overflow-y: auto;
  height: calc(100% - 2.5rem);
`;

const CodeLine = styled(motion.div)<{ indent?: number; highlight?: boolean }>`
  margin-left: ${props => (props.indent || 0) * 1.5}rem;
  padding: 0.1rem 0.5rem;
  white-space: pre;
  background: ${props => props.highlight ? 'rgba(80, 200, 120, 0.1)' : 'transparent'};
  border-radius: 4px;
`;

const Keyword = styled.span`
  color: #ff79c6;
`;

const FunctionName = styled.span`
  color: #50fa7b;
`;

const StringLiteral = styled.span`
  color: #f1fa8c;
`;

const Comment = styled.span`
  color: #6272a4;
`;

const NumberLiteral = styled.span`
  color: #bd93f9;
`;

const Variable = styled.span`
  color: #f8f8f2;
`;

const OutputContainer = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1.5rem;
  flex: 1;
  position: relative;
`;

const OutputHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(74, 144, 226, 0.3);
`;

const OutputTitle = styled.div`
  font-size: 1.1rem;
  color: var(--primary-light);
  font-weight: 500;
`;

const OutputContent = styled.div`
  font-family: 'Fira Code', monospace;
  line-height: 1.5;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.9);
  overflow-y: auto;
  height: calc(100% - 2.5rem);
`;

const OutputLine = styled(motion.div)<{ color?: string }>`
  margin-bottom: 0.2rem;
  color: ${props => props.color || 'rgba(255, 255, 255, 0.9)'};
`;

const BasicPythonThreading: React.FC = () => {
  return (
    <Slide title="Basic Python Thread Example" subtitle="Simple threading implementation in Python">
      <ContentContainer>
        <CodeContainer
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CodeHeader>
            <CodeTitle>thread_example.py</CodeTitle>
          </CodeHeader>
          <CodeEditor>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Keyword>import</Keyword> threading
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <Keyword>import</Keyword> time
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <Keyword>def</Keyword> <FunctionName>worker</FunctionName>(name, delay):
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              indent={1}
            >
              <Comment>"""Thread worker function"""</Comment>
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              indent={1}
              highlight
            >
              <Keyword>print</Keyword>(<StringLiteral>f"Thread {name} starting"</StringLiteral>)
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              indent={1}
            >
              <Keyword>for</Keyword> <Variable>i</Variable> <Keyword>in</Keyword> <FunctionName>range</FunctionName>(<NumberLiteral>3</NumberLiteral>):
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.45 }}
              indent={2}
              highlight
            >
              time.<FunctionName>sleep</FunctionName>(delay)
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              indent={2}
              highlight
            >
              <Keyword>print</Keyword>(<StringLiteral>f"Thread {name}: step {i}"</StringLiteral>)
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.55 }}
              indent={1}
              highlight
            >
              <Keyword>print</Keyword>(<StringLiteral>f"Thread {name} finished"</StringLiteral>)
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.65 }}
            >
              <Comment># Create threads</Comment>
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              highlight
            >
              thread1 = threading.<FunctionName>Thread</FunctionName>(target=worker, args=(<StringLiteral>"A"</StringLiteral>, <NumberLiteral>0.5</NumberLiteral>))
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.75 }}
              highlight
            >
              thread2 = threading.<FunctionName>Thread</FunctionName>(target=worker, args=(<StringLiteral>"B"</StringLiteral>, <NumberLiteral>0.7</NumberLiteral>))
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 }}
            >
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.85 }}
            >
              <Comment># Start threads</Comment>
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
              highlight
            >
              <Keyword>print</Keyword>(<StringLiteral>"Starting threads"</StringLiteral>)
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.95 }}
              highlight
            >
              thread1.<FunctionName>start</FunctionName>()
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.0 }}
              highlight
            >
              thread2.<FunctionName>start</FunctionName>()
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.05 }}
            >
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.1 }}
            >
              <Comment># Wait for threads to complete</Comment>
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.15 }}
              highlight
            >
              thread1.<FunctionName>join</FunctionName>()
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              highlight
            >
              thread2.<FunctionName>join</FunctionName>()
            </CodeLine>
            <CodeLine
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 1.25 }}
              highlight
            >
              <Keyword>print</Keyword>(<StringLiteral>"All threads completed"</StringLiteral>)
            </CodeLine>
          </CodeEditor>
        </CodeContainer>
        
        <OutputContainer
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <OutputHeader>
            <OutputTitle>Program Output</OutputTitle>
          </OutputHeader>
          <OutputContent>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.3 }}
            >
              Starting threads
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.4 }}
              color="rgba(80, 200, 120, 1)"
            >
              Thread A starting
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.5 }}
              color="rgba(255, 107, 107, 1)"
            >
              Thread B starting
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              color="rgba(80, 200, 120, 1)"
            >
              Thread A: step 0
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.7 }}
              color="rgba(255, 107, 107, 1)"
            >
              Thread B: step 0
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
              color="rgba(80, 200, 120, 1)"
            >
              Thread A: step 1
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.9 }}
              color="rgba(80, 200, 120, 1)"
            >
              Thread A: step 2
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.0 }}
              color="rgba(80, 200, 120, 1)"
            >
              Thread A finished
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.1 }}
              color="rgba(255, 107, 107, 1)"
            >
              Thread B: step 1
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.2 }}
              color="rgba(255, 107, 107, 1)"
            >
              Thread B: step 2
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.3 }}
              color="rgba(255, 107, 107, 1)"
            >
              Thread B finished
            </OutputLine>
            <OutputLine
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.4 }}
            >
              All threads completed
            </OutputLine>
          </OutputContent>
        </OutputContainer>
      </ContentContainer>
    </Slide>
  );
};

export default BasicPythonThreading; 