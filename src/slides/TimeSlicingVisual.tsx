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
  padding: 1rem;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
  font-weight: 600;
  text-align: center;
`;

const VisualizationContainer = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  position: relative;
  gap: 1.5rem;
  margin-top: 2rem;
  padding-left: 0;
`;

const Timeline = styled.div`
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ThreadLabel = styled.div<{ color: string }>`
  position: absolute;
  left: -6rem;
  width: 6rem;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.color};
  }
`;

const TimeSlot = styled(motion.div)<{ color: string }>`
  height: 2.5rem;
  background: ${props => `linear-gradient(135deg, ${props.color}90, ${props.color}50)`};
  border: 2px solid ${props => props.color};
  border-radius: 6px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const TickLine = styled.div`
  width: 1px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: absolute;
`;

const TickLabel = styled.div`
  position: absolute;
  bottom: -1.5rem;
  transform: translateX(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
`;

const TimeAxis = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin-top: 2rem;
`;

const Legend = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 4rem;
  padding: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

const LegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  
  &::before {
    content: '';
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 4px;
    background-color: ${props => props.color};
  }
`;

const TimeSlicingVisual: React.FC = () => {
  // Create tick marks for the timeline
  const ticks = [];
  for (let i = 0; i <= 10; i++) {
    const percentage = i * 10;
    ticks.push(
      <React.Fragment key={i}>
        <TickLine style={{ left: `${percentage}%` }} />
        <TickLabel style={{ left: `${percentage}%` }}>{i * 100}ms</TickLabel>
      </React.Fragment>
    );
  }

  return (
    <Slide title="Time Slicing Visualization" subtitle="How threads share CPU time">
      <ContentContainer>
        <VisualizationContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Title>CPU Time Allocation with Time Slicing</Title>
          
          <TimelineContainer>
            {/* Thread 1 Timeline */}
            <Timeline>
              <TimeSlot 
                color="#FF6B6B" 
                style={{ left: '0%', width: '15%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Execute
              </TimeSlot>
              <TimeSlot 
                color="#FF6B6B" 
                style={{ left: '40%', width: '20%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Execute
              </TimeSlot>
              <TimeSlot 
                color="#FF6B6B" 
                style={{ left: '75%', width: '15%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                Execute
              </TimeSlot>
            </Timeline>
            
            {/* Thread 2 Timeline */}
            <Timeline>
              <TimeSlot 
                color="#4D96FF" 
                style={{ left: '15%', width: '25%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Execute
              </TimeSlot>
              <TimeSlot 
                color="#4D96FF" 
                style={{ left: '60%', width: '15%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                Execute
              </TimeSlot>
            </Timeline>
            
            {/* Thread 3 Timeline */}
            <Timeline>
              <TimeSlot 
                color="#6BCB77" 
                style={{ left: '90%', width: '10%' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                Execute
              </TimeSlot>
            </Timeline>
            
            {/* Time axis with ticks */}
            <TimeAxis>
              {ticks}
            </TimeAxis>
          </TimelineContainer>
          
          <Legend>
            <LegendItem color="#FF6B6B">Thread 1: User Interface</LegendItem>
            <LegendItem color="#4D96FF">Thread 2: Data Processing</LegendItem>
            <LegendItem color="#6BCB77">Thread 3: Network I/O</LegendItem>
          </Legend>
        </VisualizationContainer>
      </ContentContainer>
    </Slide>
  );
};

export default TimeSlicingVisual; 