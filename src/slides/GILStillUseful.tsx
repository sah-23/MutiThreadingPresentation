import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.5rem 4rem;
  justify-content: flex-start;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 90%;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
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
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 0.6rem;
  
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

const UsagePoint = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  padding: 0.8rem;
  border-radius: 8px;
  background: rgba(40, 50, 80, 0.3);
  border-left: 3px solid var(--primary);
`;

const PointIcon = styled.div`
  color: var(--primary);
  font-weight: bold;
  margin-right: 0.8rem;
  font-size: 1.1rem;
`;

const PointContent = styled.div`
  flex: 1;
`;

const CodeExample = styled.div`
  background-color: rgba(30, 40, 65, 0.8);
  border-radius: 8px;
  padding: 0.7rem;
  border-left: 3px solid var(--primary);
  margin: 0.6rem 0;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: #eaeaea;
`;

const CodeLine = styled.div`
  margin-bottom: 0.15rem;
`;

const GILStillUseful: React.FC = () => {
  return (
    <Slide title="Why is GIL still useful">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <ContainerSection>
            <SectionTitle>When Python Threading Is Still Useful</SectionTitle>
            
            <TextContent>
              Despite the GIL's limitations for CPU-bound tasks, Python threading still offers significant benefits in many scenarios:
            </TextContent>
            
            <UsagePoint
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <PointIcon>✓</PointIcon>
              <PointContent>
                <TextContent style={{ margin: 0 }}>
                  <HighlightText>I/O-bound tasks:</HighlightText> When threads are waiting for external operations 
                  (file I/O, network requests), the GIL is released, allowing other threads to run.
                </TextContent>
                
                <CodeExample>
                  <CodeLine># Example: Threading for network requests</CodeLine>
                  <CodeLine>def fetch_url(url):</CodeLine>
                  <CodeLine>    # GIL is released during network I/O</CodeLine>
                  <CodeLine>    response = requests.get(url)</CodeLine>
                  <CodeLine>    return response.text</CodeLine>
                  <CodeLine># Multiple threads can make requests concurrently</CodeLine>
                </CodeExample>
              </PointContent>
            </UsagePoint>
            
            <UsagePoint
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <PointIcon>✓</PointIcon>
              <PointContent>
                <TextContent style={{ margin: 0 }}>
                  <HighlightText>C extension modules:</HighlightText> Extensions can release the GIL when 
                  performing computations, enabling true parallelism.
                </TextContent>
                
                <CodeExample>
                  <CodeLine># NumPy operations can release the GIL</CodeLine>
                  <CodeLine>import numpy as np</CodeLine>
                  <CodeLine># NumPy releases GIL during computation</CodeLine>
                  <CodeLine>result = np.fft.fft(array)  # Parallel execution</CodeLine>
                </CodeExample>
              </PointContent>
            </UsagePoint>
            
            <UsagePoint
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <PointIcon>✓</PointIcon>
              <PointContent>
                <TextContent style={{ margin: 0 }}>
                  <HighlightText>Maintaining responsiveness:</HighlightText> Threading can keep an application 
                  responsive while performing background tasks.
                </TextContent>
                
                <CodeExample>
                  <CodeLine># Example: GUI with background processing</CodeLine>
                  <CodeLine>def long_running_task():</CodeLine>
                  <CodeLine>    while not done: process_next_chunk()</CodeLine>
                  <CodeLine>    time.sleep(0.001)  # Give other threads a chance</CodeLine>
                  <CodeLine># Start background thread, main remains responsive</CodeLine>
                </CodeExample>
              </PointContent>
            </UsagePoint>
            
            <TextContent style={{ marginTop: '0.8rem' }}>
              The GIL's design, while limiting for CPU-bound tasks, still supports these common threading 
              use cases effectively, making Python threading a valuable tool for many applications.
            </TextContent>
          </ContainerSection>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default GILStillUseful; 