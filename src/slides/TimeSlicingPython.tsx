import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
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

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.5rem;
`;

const CardContent = styled.div`
  flex: 1;
  overflow: auto;
`;

const CodeBlock = styled.pre`
  background: rgba(15, 25, 50, 0.8);
  border-radius: 8px;
  padding: 1rem;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  overflow: auto;
  border: 1px solid rgba(100, 120, 200, 0.2);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
`;

const Comment = styled.span`
  color: #6a9955;
`;

const Keyword = styled.span`
  color: #569cd6;
`;

const String = styled.span`
  color: #ce9178;
`;

const Function = styled.span`
  color: #dcdcaa;
`;

const OutputSection = styled.div`
  margin-top: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid rgba(100, 120, 200, 0.2);
`;

const OutputTitle = styled.div`
  font-size: 0.9rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const OutputText = styled.pre`
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.8);
  white-space: pre-wrap;
`;

const TimeSlicingPython: React.FC = () => {
  return (
    <Slide title="Time Slicing in Python" subtitle="Multi-threading Example">
      <ContentContainer>
        <Row>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CardTitle>Python Threading with Time Slicing</CardTitle>
            <CardContent>
              <CodeBlock>
                <Comment># Demonstrating time slicing in Python threading</Comment>{'\n'}
                <Keyword>import</Keyword> threading{'\n'}
                <Keyword>import</Keyword> time{'\n'}
                <Keyword>import</Keyword> random{'\n\n'}
                <Comment># Shared resource</Comment>{'\n'}
                output_lock = threading.<Function>Lock</Function>(){'\n\n'}
                <Keyword>def</Keyword> <Function>cpu_intensive_task</Function>(thread_id, iterations):{'\n'}
                {'  '}<Comment># Simulating a CPU-intensive task</Comment>{'\n'}
                {'  '}<Keyword>for</Keyword> i <Keyword>in</Keyword> <Function>range</Function>(iterations):{'\n'}
                {'    '}<Keyword>with</Keyword> output_lock:{'\n'}
                {'      '}<Function>print</Function>(<String>{"\"Thread \" + str(thread_id) + \": Working on iteration \" + str(i+1) + \"/\" + str(iterations)"}</String>){'\n'}
                {'    '}<Comment># CPU-bound calculation to demonstrate time slicing</Comment>{'\n'}
                {'    '}result = 0{'\n'}
                {'    '}<Keyword>for</Keyword> j <Keyword>in</Keyword> <Function>range</Function>(5000000):{'\n'}
                {'      '}result += j{'\n'}
                {'    '}<Comment># Random small sleep to make time slicing more observable</Comment>{'\n'}
                {'    '}time.<Function>sleep</Function>(random.<Function>uniform</Function>(0.01, 0.05)){'\n\n'}
                <Comment># Create multiple threads</Comment>{'\n'}
                threads = []{'\n'}
                <Keyword>for</Keyword> i <Keyword>in</Keyword> <Function>range</Function>(4):{'\n'}
                {'  '}thread = threading.<Function>Thread</Function>(target=cpu_intensive_task, args=(i+1, 3)){'\n'}
                {'  '}threads.<Function>append</Function>(thread){'\n\n'}
                <Comment># Start all threads</Comment>{'\n'}
                <Function>print</Function>(<String>"Starting all threads..."</String>){'\n'}
                <Keyword>for</Keyword> thread <Keyword>in</Keyword> threads:{'\n'}
                {'  '}thread.<Function>start</Function>(){'\n\n'}
                <Comment># Wait for all threads to complete</Comment>{'\n'}
                <Keyword>for</Keyword> thread <Keyword>in</Keyword> threads:{'\n'}
                {'  '}thread.<Function>join</Function>(){'\n\n'}
                <Function>print</Function>(<String>"All threads have completed."</String>)
              </CodeBlock>
            </CardContent>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardTitle>Execution Output & Analysis</CardTitle>
            <CardContent>
              <OutputSection>
                <OutputTitle>Sample Output:</OutputTitle>
                <OutputText>
                  Starting all threads...{'\n'}
                  Thread 1: Working on iteration 1/3{'\n'}
                  Thread 2: Working on iteration 1/3{'\n'}
                  Thread 3: Working on iteration 1/3{'\n'}
                  Thread 4: Working on iteration 1/3{'\n'}
                  Thread 1: Working on iteration 2/3{'\n'}
                  Thread 2: Working on iteration 2/3{'\n'}
                  Thread 3: Working on iteration 2/3{'\n'}
                  Thread 4: Working on iteration 2/3{'\n'}
                  Thread 2: Working on iteration 3/3{'\n'}
                  Thread 1: Working on iteration 3/3{'\n'}
                  Thread 3: Working on iteration 3/3{'\n'}
                  Thread 4: Working on iteration 3/3{'\n'}
                  All threads have completed.
                </OutputText>
              </OutputSection>
              
              <div style={{ marginTop: '1.5rem' }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Key Observations:</h4>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  <li style={{ marginBottom: '0.5rem' }}>The output shows how the CPU switches between threads</li>
                  <li style={{ marginBottom: '0.5rem' }}>Order of execution is non-deterministic due to time slicing</li>
                  <li style={{ marginBottom: '0.5rem' }}>All threads make progress rather than one thread completing entirely before the next begins</li>
                  <li style={{ marginBottom: '0.5rem' }}>The OS scheduler decides which thread gets time on the CPU</li>
                  <li style={{ marginBottom: '0.5rem' }}>Python's Global Interpreter Lock (GIL) affects true parallelism, but time slicing still occurs</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Row>
      </ContentContainer>
    </Slide>
  );
};

export default TimeSlicingPython; 