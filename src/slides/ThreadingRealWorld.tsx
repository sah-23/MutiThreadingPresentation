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
  flex: 1;
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
  overflow: hidden;
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
  font-size: 0.85rem;
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

const DiagramContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: rgba(15, 25, 50, 0.4);
  border: 1px solid rgba(100, 120, 200, 0.2);
`;

const DiagramTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 1rem;
  text-align: center;
`;

const ThreadBox = styled(motion.div)<{ color: string }>`
  background: ${props => `rgba(${props.color}, 0.2)`};
  border: 1px solid ${props => `rgba(${props.color}, 0.7)`};
  border-radius: 8px;
  padding: 0.8rem 1rem;
  margin-bottom: 1rem;
  position: relative;
`;

const ThreadHeader = styled.div<{ color: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid ${props => `rgba(${props.color}, 0.3)`};
  padding-bottom: 0.5rem;
  
  h5 {
    color: ${props => `rgba(${props.color}, 1)`};
    font-size: 1rem;
    margin: 0;
  }
`;

const ThreadInfo = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.9);
`;

const ThreadBody = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
`;

const ThreadFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  
  span {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;

const ScrollArea = styled.div`
  margin-top: 1rem;
  height: 10rem;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 0.5rem;
`;

const ScenarioDescription = styled.div`
  padding: 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 1rem;
  
  h4 {
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.5;
  }
`;

const ThreadingRealWorld: React.FC = () => {
  return (
    <Slide title="Real-World Threading Example" subtitle="Web Scraper with Python Threads">
      <ContentContainer>
        <Row>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <CardTitle>Multi-threaded Web Scraper in Python</CardTitle>
            <CardContent>
              <CodeBlock>
                <Comment># Python multi-threaded web scraper demonstrating time slicing benefits</Comment>{'\n'}
                <Keyword>import</Keyword> threading{'\n'}
                <Keyword>import</Keyword> queue{'\n'}
                <Keyword>import</Keyword> requests{'\n'}
                <Keyword>import</Keyword> time{'\n'}
                <Keyword>from</Keyword> bs4 <Keyword>import</Keyword> BeautifulSoup{'\n\n'}
                <Comment># Shared resources and synchronization</Comment>{'\n'}
                url_queue = queue.<Function>Queue</Function>(){'\n'}
                results = []{'\n'}
                result_lock = threading.<Function>Lock</Function>(){'\n'}
                print_lock = threading.<Function>Lock</Function>(){'\n\n'}
                <Keyword>def</Keyword> <Function>worker</Function>(worker_id):{'\n'}
                {'  '}<Keyword>while</Keyword> <Keyword>not</Keyword> url_queue.<Function>empty</Function>():{'\n'}
                {'    '}<Keyword>try</Keyword>:{'\n'}
                {'      '}url = url_queue.<Function>get</Function>(block=<Keyword>False</Keyword>){'\n'}
                {'      '}<Keyword>with</Keyword> print_lock:{'\n'}
                {'        '}<Function>print</Function>(<String>{"\"Thread \" + str(worker_id) + \": Processing \" + url"}</String>){'\n\n'}
                {'      '}<Comment># Simulate network request with potential blocking I/O</Comment>{'\n'}
                {'      '}response = requests.<Function>get</Function>(url, timeout=5){'\n'}
                {'      '}soup = BeautifulSoup(response.content, <String>'html.parser'</String>){'\n'}
                {'      '}title = soup.<Function>find</Function>(<String>'title'</String>).text.strip(){'\n\n'}
                {'      '}<Comment># Critical section - accessing shared data</Comment>{'\n'}
                {'      '}<Keyword>with</Keyword> result_lock:{'\n'}
                {'        '}results.<Function>append</Function>({'{'}<String>"url": url, "title": title</String>{'}'}){'\n\n'}
                {'      '}<Comment># Simulate some processing time</Comment>{'\n'}
                {'      '}time.<Function>sleep</Function>(0.2){'\n\n'}
                {'      '}url_queue.<Function>task_done</Function>(){'\n'}
                {'    '}<Keyword>except</Keyword> queue.Empty:{'\n'}
                {'      '}<Keyword>break</Keyword>{'\n'}
                {'    '}<Keyword>except</Keyword> <Function>Exception</Function> <Keyword>as</Keyword> e:{'\n'}
                {'      '}<Keyword>with</Keyword> print_lock:{'\n'}
                {'        '}<Function>print</Function>(<String>{"\"Thread \" + str(worker_id) + \": Error on \" + url + \" - \" + str(e)"}</String>){'\n'}
                {'      '}url_queue.<Function>task_done</Function>(){'\n\n'}
                <Comment># Add URLs to the queue</Comment>{'\n'}
                <Keyword>for</Keyword> url <Keyword>in</Keyword> [<String>'https://example.com'</String>, <String>'https://python.org'</String>, <String>'...'</String>]:{'\n'}
                {'  '}url_queue.<Function>put</Function>(url){'\n\n'}
                <Comment># Create and start worker threads</Comment>{'\n'}
                threads = []{'\n'}
                <Keyword>for</Keyword> i <Keyword>in</Keyword> <Function>range</Function>(5):{'\n'}
                {'  '}thread = threading.<Function>Thread</Function>(target=worker, args=(i+1,)){'\n'}
                {'  '}thread.<Function>start</Function>(){'\n'}
                {'  '}threads.<Function>append</Function>(thread){'\n\n'}
                <Comment># Wait for all URLs to be processed</Comment>{'\n'}
                url_queue.<Function>join</Function>(){'\n\n'}
                <Comment># Print results</Comment>{'\n'}
                <Function>print</Function>(<String>{"\"Scraped \" + str(len(results)) + \" pages successfully\""}</String>)
              </CodeBlock>
            </CardContent>
          </Card>
          
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardTitle>Time Slicing Benefits & Implementation</CardTitle>
            <CardContent>
              <DiagramContainer>
                <DiagramTitle>Web Scraper Thread Interaction</DiagramTitle>
                
                <ThreadBox 
                  color="74, 144, 226"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <ThreadHeader color="74, 144, 226">
                    <h5>Thread 1 - Network I/O</h5>
                    <ThreadInfo>Status: Waiting (I/O Blocked)</ThreadInfo>
                  </ThreadHeader>
                  <ThreadBody>
                    <ThreadFeature>
                      <span>🌐</span> Currently: HTTP request to python.org
                    </ThreadFeature>
                    <ThreadFeature>
                      <span>⏱️</span> Time slice yielded during network wait
                    </ThreadFeature>
                  </ThreadBody>
                </ThreadBox>
                
                <ThreadBox 
                  color="106, 217, 126"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <ThreadHeader color="106, 217, 126">
                    <h5>Thread 2 - Processing</h5>
                    <ThreadInfo>Status: Running</ThreadInfo>
                  </ThreadHeader>
                  <ThreadBody>
                    <ThreadFeature>
                      <span>📊</span> Currently: Parsing HTML content
                    </ThreadFeature>
                    <ThreadFeature>
                      <span>🔄</span> Using CPU time efficiently
                    </ThreadFeature>
                  </ThreadBody>
                </ThreadBox>
                
                <ThreadBox 
                  color="235, 87, 87"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  <ThreadHeader color="235, 87, 87">
                    <h5>Thread 3 - Resource Access</h5>
                    <ThreadInfo>Status: Waiting (Lock)</ThreadInfo>
                  </ThreadHeader>
                  <ThreadBody>
                    <ThreadFeature>
                      <span>🔒</span> Currently: Waiting for result_lock
                    </ThreadFeature>
                    <ThreadFeature>
                      <span>⏸️</span> Will resume when lock is released
                    </ThreadFeature>
                  </ThreadBody>
                </ThreadBox>
              </DiagramContainer>
              
              <ScenarioDescription>
                <h4>Time Slicing Impact:</h4>
                <p>
                  This web scraper demonstrates optimal usage of time slicing. When one thread is 
                  blocked waiting for a network response (I/O bound task), the CPU can immediately 
                  switch to another thread to parse already downloaded content (CPU bound task), 
                  maintaining high efficiency. The OS scheduler allocates time slices to maximize 
                  throughput by prioritizing threads ready to execute.
                </p>
                <p>
                  Thread synchronization with locks ensures safe access to shared resources like 
                  the results list. Time slicing allows the program to perform multiple network 
                  requests concurrently without waiting for each request to complete sequentially.
                </p>
              </ScenarioDescription>
            </CardContent>
          </Card>
        </Row>
      </ContentContainer>
    </Slide>
  );
};

export default ThreadingRealWorld; 