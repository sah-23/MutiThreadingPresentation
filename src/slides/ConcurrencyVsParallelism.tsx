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
  padding-top: 15px;
  gap: 1rem;
`;

const TextContainer = styled(motion.div)`
  background: rgba(10, 25, 47, 0.5);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  padding: 1rem 1.8rem;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const DefinitionText = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  text-align: justify;
  margin-bottom: 1rem;
`;

const ListItem = styled.li`
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const HighlightConcurrency = styled.span`
  color: #ff79c6;
  font-weight: bold;
  background: rgba(255, 121, 198, 0.1);
  padding: 0 4px;
  border-radius: 4px;
`;

const HighlightParallelism = styled.span`
  color: #50fa7b;
  font-weight: bold;
  background: rgba(80, 250, 123, 0.1);
  padding: 0 4px;
  border-radius: 4px;
`;

const VisualizationContainer = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  gap: 1rem;
`;

const ThreadVisualization = styled.div`
  position: relative;
  width: 100%;
  height: 170px;
  background: rgba(10, 25, 47, 0.3);
  border: 1px solid rgba(74, 144, 226, 0.3);
  border-radius: 8px;
  overflow: hidden;
  padding-top: 5px;
`;

const VisualizationTitle = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
  color: #f8f8f2;
  text-align: center;
  margin-bottom: 5px;
`;

const ThreadTrack = styled.div`
  height: 20px;
  margin: 8px 20px;
  background: rgba(50, 50, 70, 0.4);
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`;

const ThreadExecution = styled(motion.div)<{ color: string }>`
  position: absolute;
  height: 100%;
  background: ${props => props.color};
  border-radius: 3px;
  box-shadow: 0 0 8px ${props => props.color};
`;

const TimelineLabel = styled.div`
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
`;

const ConcurrencyVsParallelism: React.FC = () => {
  return (
    <Slide title="Concurrency vs Parallelism" subtitle="Understanding the fundamental differences">
      <ContentContainer>
        <TextContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DefinitionText>
            <HighlightConcurrency>Concurrency</HighlightConcurrency>: Multiple tasks that can start, run, and complete in overlapping time periods, but not necessarily simultaneously. Tasks take turns executing, giving the illusion of parallel execution.
          </DefinitionText>
          <DefinitionText>
            <HighlightParallelism>Parallelism</HighlightParallelism>: Multiple tasks executing simultaneously at the exact same instant, requiring multiple processors or cores.
          </DefinitionText>
          <DefinitionText>Key differences:</DefinitionText>
          <ul>
            <ListItem><HighlightConcurrency>Concurrency</HighlightConcurrency> is about dealing with multiple tasks at once; <HighlightParallelism>parallelism</HighlightParallelism> is about doing multiple tasks at once</ListItem>
            <ListItem><HighlightConcurrency>Concurrency</HighlightConcurrency> handles task switching efficiently; <HighlightParallelism>parallelism</HighlightParallelism> requires actual multiple execution units</ListItem>
            <ListItem><HighlightConcurrency>Concurrency</HighlightConcurrency> is primarily a software/design concern; <HighlightParallelism>parallelism</HighlightParallelism> is a hardware/execution concern</ListItem>
            <ListItem><HighlightConcurrency>Concurrent</HighlightConcurrency> systems may execute on a single processor; <HighlightParallelism>parallel</HighlightParallelism> systems always need multiple processors</ListItem>
            <ListItem><HighlightConcurrency>Concurrency</HighlightConcurrency> manages structure; <HighlightParallelism>parallelism</HighlightParallelism> manages execution</ListItem>
          </ul>
        </TextContainer>
        
        <VisualizationContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Single Thread Visualization */}
          <ThreadVisualization>
            <VisualizationTitle>Single Thread</VisualizationTitle>
            <ThreadTrack>
              <ThreadExecution 
                color="rgba(74, 144, 226, 0.8)"
                initial={{ width: 0 }}
                animate={{ width: '30%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <ThreadExecution 
                color="rgba(80, 200, 120, 0.8)"
                initial={{ width: 0, left: '30%' }}
                animate={{ width: '40%', left: '30%' }}
                transition={{ duration: 1, delay: 1.5 }}
              />
              <ThreadExecution 
                color="rgba(255, 180, 50, 0.8)"
                initial={{ width: 0, left: '70%' }}
                animate={{ width: '30%', left: '70%' }}
                transition={{ duration: 1, delay: 2.5 }}
              />
            </ThreadTrack>
            <TimelineLabel>Time →</TimelineLabel>
          </ThreadVisualization>
          
          {/* Concurrency Visualization */}
          <ThreadVisualization>
            <VisualizationTitle>Concurrency</VisualizationTitle>
            <ThreadTrack>
              <ThreadExecution 
                color="rgba(74, 144, 226, 0.8)"
                initial={{ width: 0 }}
                animate={{ width: '20%' }}
                transition={{ duration: 0.5, delay: 0.5 }}
              />
              <ThreadExecution 
                color="rgba(80, 200, 120, 0.8)"
                initial={{ width: 0, left: '25%' }}
                animate={{ width: '15%', left: '25%' }}
                transition={{ duration: 0.5, delay: 1.0 }}
              />
              <ThreadExecution 
                color="rgba(74, 144, 226, 0.8)"
                initial={{ width: 0, left: '45%' }}
                animate={{ width: '15%', left: '45%' }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
              <ThreadExecution 
                color="rgba(255, 180, 50, 0.8)"
                initial={{ width: 0, left: '65%' }}
                animate={{ width: '15%', left: '65%' }}
                transition={{ duration: 0.5, delay: 2.0 }}
              />
              <ThreadExecution 
                color="rgba(80, 200, 120, 0.8)"
                initial={{ width: 0, left: '85%' }}
                animate={{ width: '10%', left: '85%' }}
                transition={{ duration: 0.5, delay: 2.5 }}
              />
            </ThreadTrack>
            <ThreadTrack>
              <ThreadExecution 
                color="rgba(255, 180, 50, 0.8)"
                initial={{ width: 0 }}
                animate={{ width: '10%' }}
                transition={{ duration: 0.5, delay: 0.7 }}
              />
              <ThreadExecution 
                color="rgba(74, 144, 226, 0.8)"
                initial={{ width: 0, left: '15%' }}
                animate={{ width: '15%', left: '15%' }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              <ThreadExecution 
                color="rgba(80, 200, 120, 0.8)"
                initial={{ width: 0, left: '35%' }}
                animate={{ width: '20%', left: '35%' }}
                transition={{ duration: 0.5, delay: 1.7 }}
              />
              <ThreadExecution 
                color="rgba(255, 180, 50, 0.8)"
                initial={{ width: 0, left: '60%' }}
                animate={{ width: '25%', left: '60%' }}
                transition={{ duration: 0.5, delay: 2.2 }}
              />
            </ThreadTrack>
            <TimelineLabel>Time →</TimelineLabel>
          </ThreadVisualization>
          
          {/* Parallelism Visualization */}
          <ThreadVisualization>
            <VisualizationTitle>Parallelism</VisualizationTitle>
            <ThreadTrack>
              <ThreadExecution 
                color="rgba(74, 144, 226, 0.8)"
                initial={{ width: 0 }}
                animate={{ width: '90%' }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </ThreadTrack>
            <ThreadTrack>
              <ThreadExecution 
                color="rgba(80, 200, 120, 0.8)"
                initial={{ width: 0 }}
                animate={{ width: '70%' }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </ThreadTrack>
            <ThreadTrack>
              <ThreadExecution 
                color="rgba(255, 180, 50, 0.8)"
                initial={{ width: 0 }}
                animate={{ width: '80%' }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            </ThreadTrack>
            <TimelineLabel>Time →</TimelineLabel>
          </ThreadVisualization>
        </VisualizationContainer>
      </ContentContainer>
    </Slide>
  );
};

export default ConcurrencyVsParallelism; 