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
  gap: 1rem;
  overflow-y: auto;
`;

const CardRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  align-items: stretch;
`;

const Card = styled(motion.div)<{ width?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: ${props => props.width || '50%'};
  position: relative;
  border: 1px solid rgba(100, 120, 200, 0.3);
  overflow: hidden;
`;

const CardTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--primary);
  margin-bottom: 0.8rem;
  font-weight: 600;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.5rem;
`;

const CardText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.5rem;
`;

const CardList = styled.ul`
  padding-left: 1.2rem;
  margin: 0.5rem 0;
`;

const CardListItem = styled.li`
  font-size: 0.9rem;
  line-height: 1.4;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 0.3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: var(--primary);
  margin: 0.5rem 0;
  text-align: center;
`;

// Thread diagram components
const DiagramContainer = styled.div`
  position: relative;
  height: 180px;
  margin: 1rem 0;
`;

const ThreadCoreContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const CoreColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  flex: 1;
`;

const Core = styled(motion.div)`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #3a7bd5, #2e4a8a);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
`;

const CoreCircuitEffect = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
                    radial-gradient(circle at 70% 40%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
                    radial-gradient(circle at 40% 70%, rgba(255, 255, 255, 0.3) 2px, transparent 2px),
                    radial-gradient(circle at 80% 60%, rgba(255, 255, 255, 0.3) 2px, transparent 2px);
  opacity: 0.6;
`;

const CoreLabel = styled.div`
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
  position: relative;
  z-index: 2;
`;

const Thread = styled(motion.div)`
  width: 50px;
  height: 20px;
  background: linear-gradient(135deg, #f83600, #fe8c00);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ThreadCodeLine = styled(motion.div)`
  position: absolute;
  top: 50%;
  width: 7px;
  height: 2px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1px;
  transform: translateY(-50%);
`;

const ThreadLabel = styled.div`
  font-size: 0.7rem;
  color: white;
  font-weight: bold;
  position: relative;
  z-index: 2;
`;

const ProcessingLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.7);
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

// Time slicing diagram components
const TimelineContainer = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  margin-top: 1rem;
  background: rgba(20, 30, 60, 0.5);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

const Timeline = styled.div`
  width: 90%;
  height: 6px;
  background: rgba(40, 50, 80, 0.8);
  position: relative;
  margin: 0 auto;
  border-radius: 3px;
  margin-top: 50px;
`;

const ContextSwitch = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 50px;
  background: rgba(255, 255, 255, 0.5);
  top: -25px;
  z-index: 3;
`;

const TimeSliceSegment = styled(motion.div)<{ color: string }>`
  position: absolute;
  height: 24px;
  background: ${props => props.color};
  top: -9px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  z-index: 2;
`;

const SegmentLabel = styled.div`
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
  white-space: nowrap;
`;

const ProcessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 45px;
`;

const ProcessIndicator = styled(motion.div)<{ color: string, isActive: boolean }>`
  width: 50px;
  height: 35px;
  background: ${props => props.color};
  opacity: ${props => props.isActive ? 1 : 0.5};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  box-shadow: ${props => props.isActive ? `0 0 15px ${props.color}` : 'none'};
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  width: 15px;
  height: 15px;
  background: #ffffff;
  border-radius: 50%;
  top: -4px;
  z-index: 4;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const TimeMarker = styled.div<{ position: string }>`
  position: absolute;
  bottom: -25px;
  left: ${props => props.position};
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  transform: translateX(-50%);
`;

// Add a new custom hook to manage the active thread state
const useActiveThread = (initialThread: number = 1) => {
  const [activeThread, setActiveThread] = React.useState(initialThread);
  
  React.useEffect(() => {
    // Set up a sequence of timeouts to change active thread based on animation timeline
    const timeouts = [
      setTimeout(() => setActiveThread(1), 0),    // Thread 1 at start
      setTimeout(() => setActiveThread(2), 1500), // Thread 2 after 1.5s
      setTimeout(() => setActiveThread(3), 3000), // Thread 3 after 3s
      setTimeout(() => setActiveThread(4), 4500), // Thread 4 after 4.5s
      setTimeout(() => setActiveThread(1), 6000), // Back to Thread 1 after 6s
    ];
    
    // Set up a loop to repeat the sequence
    const interval = setInterval(() => {
      setActiveThread(1);
      setTimeout(() => setActiveThread(2), 1500);
      setTimeout(() => setActiveThread(3), 3000);
      setTimeout(() => setActiveThread(4), 4500);
      setTimeout(() => setActiveThread(1), 6000);
    }, 8000);
    
    // Clean up timeouts and interval on unmount
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
      clearInterval(interval);
    };
  }, []);
  
  return activeThread;
};

const MultiThreadingTimeSlicing: React.FC = () => {
  // Use the custom hook to track which thread is active
  const activeThread = useActiveThread();
  
  return (
    <Slide title="Multi-Threading and Time Slicing" subtitle="Concepts and Relationships">
      <ContentContainer>
        <CardRow>
          <Card 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CardTitle>Multi-Threading</CardTitle>
            <CardText>
              Multi-threading is a programming concept where a single process contains multiple threads of execution that can run concurrently. Each thread represents an independent flow of control within the process.
            </CardText>
            <SectionTitle>Key characteristics:</SectionTitle>
            <CardList>
              <CardListItem>Threads within a process share the same memory space and resources</CardListItem>
              <CardListItem>Multiple threads can execute different parts of program code simultaneously</CardListItem>
              <CardListItem>Enables parallelism on multi-core processors</CardListItem>
              <CardListItem>Threads can communicate with each other directly through shared memory</CardListItem>
            </CardList>
            
            <SectionTitle>Common use cases:</SectionTitle>
            <CardList>
              <CardListItem>Handling multiple tasks simultaneously (UI responsiveness while processing)</CardListItem>
              <CardListItem>Taking advantage of multiple CPU cores</CardListItem>
              <CardListItem>Background operations that shouldn't block the main program flow</CardListItem>
              <CardListItem>I/O operations that have waiting periods</CardListItem>
            </CardList>
            
            <DiagramContainer>
              <ThreadCoreContainer>
                <CoreColumn
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Core
                    whileHover={{ scale: 1.05 }}
                    animate={{ boxShadow: ['0 4px 8px rgba(0, 0, 0, 0.2)', '0 4px 12px rgba(58, 123, 213, 0.4)', '0 4px 8px rgba(0, 0, 0, 0.2)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <CoreCircuitEffect 
                      animate={{ opacity: [0.4, 0.7, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <CoreLabel>Core 1</CoreLabel>
                    <ProcessingLine
                      animate={{ 
                        opacity: [0, 1, 0],
                        width: ['0%', '100%', '0%']
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity,
                        repeatType: 'loop'
                      }}
                    />
                  </Core>
                  <Thread
                    initial={{ x: -50 }}
                    animate={{ 
                      x: 0,
                      y: [0, -3, 0],
                      boxShadow: ['0 2px 4px rgba(0, 0, 0, 0.2)', '0 4px 8px rgba(248, 54, 0, 0.4)', '0 2px 4px rgba(0, 0, 0, 0.2)']
                    }}
                    transition={{ 
                      x: { duration: 0.5, delay: 0.8 },
                      y: { duration: 1.5, repeat: Infinity, repeatType: 'mirror' },
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <ThreadLabel>T1</ThreadLabel>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <ThreadCodeLine
                        key={i}
                        style={{ left: `${i * 10 + 10}px` }}
                        animate={{ 
                          width: ['5px', '12px', '5px'],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{ 
                          duration: 0.7 + i * 0.2, 
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatType: 'mirror' 
                        }}
                      />
                    ))}
                  </Thread>
                  <Thread
                    initial={{ x: -50 }}
                    animate={{ 
                      x: 0,
                      y: [0, 3, 0],
                      boxShadow: ['0 2px 4px rgba(0, 0, 0, 0.2)', '0 4px 8px rgba(248, 54, 0, 0.4)', '0 2px 4px rgba(0, 0, 0, 0.2)'] 
                    }}
                    transition={{ 
                      x: { duration: 0.5, delay: 1.0 },
                      y: { duration: 1.7, repeat: Infinity, repeatType: 'mirror' },
                      boxShadow: { duration: 2.2, repeat: Infinity }
                    }}
                  >
                    <ThreadLabel>T2</ThreadLabel>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <ThreadCodeLine
                        key={i}
                        style={{ left: `${i * 10 + 10}px` }}
                        animate={{ 
                          width: ['7px', '10px', '7px'],
                          opacity: [0.5, 0.9, 0.5]
                        }}
                        transition={{ 
                          duration: 0.8 + i * 0.15, 
                          delay: i * 0.15,
                          repeat: Infinity,
                          repeatType: 'mirror' 
                        }}
                      />
                    ))}
                  </Thread>
                </CoreColumn>
                
                <CoreColumn
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Core
                    whileHover={{ scale: 1.05 }}
                    animate={{ boxShadow: ['0 4px 8px rgba(0, 0, 0, 0.2)', '0 4px 12px rgba(58, 123, 213, 0.4)', '0 4px 8px rgba(0, 0, 0, 0.2)'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <CoreCircuitEffect 
                      animate={{ opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.2 }}
                    />
                    <CoreLabel>Core 2</CoreLabel>
                    <ProcessingLine
                      animate={{ 
                        opacity: [0, 1, 0],
                        width: ['0%', '100%', '0%']
                      }}
                      transition={{ 
                        duration: 1.2, 
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: 0.3
                      }}
                    />
                  </Core>
                  <Thread
                    initial={{ x: 50 }}
                    animate={{ 
                      x: 0,
                      y: [0, -4, 0],
                      boxShadow: ['0 2px 4px rgba(0, 0, 0, 0.2)', '0 4px 8px rgba(248, 54, 0, 0.4)', '0 2px 4px rgba(0, 0, 0, 0.2)'] 
                    }}
                    transition={{ 
                      x: { duration: 0.5, delay: 0.9 },
                      y: { duration: 1.3, repeat: Infinity, repeatType: 'mirror' },
                      boxShadow: { duration: 1.8, repeat: Infinity }
                    }}
                  >
                    <ThreadLabel>T3</ThreadLabel>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <ThreadCodeLine
                        key={i}
                        style={{ left: `${i * 10 + 10}px` }}
                        animate={{ 
                          width: ['4px', '8px', '4px'],
                          opacity: [0.3, 0.7, 0.3]
                        }}
                        transition={{ 
                          duration: 0.6 + i * 0.25, 
                          delay: i * 0.12,
                          repeat: Infinity,
                          repeatType: 'mirror' 
                        }}
                      />
                    ))}
                  </Thread>
                  <Thread
                    initial={{ x: 50 }}
                    animate={{ 
                      x: 0,
                      y: [0, 2, 0],
                      boxShadow: ['0 2px 4px rgba(0, 0, 0, 0.2)', '0 4px 8px rgba(248, 54, 0, 0.4)', '0 2px 4px rgba(0, 0, 0, 0.2)'] 
                    }}
                    transition={{ 
                      x: { duration: 0.5, delay: 1.1 },
                      y: { duration: 1.6, repeat: Infinity, repeatType: 'mirror' },
                      boxShadow: { duration: 2.1, repeat: Infinity, delay: 0.2 }
                    }}
                  >
                    <ThreadLabel>T4</ThreadLabel>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <ThreadCodeLine
                        key={i}
                        style={{ left: `${i * 10 + 10}px` }}
                        animate={{ 
                          width: ['6px', '9px', '6px'],
                          opacity: [0.4, 0.8, 0.4]
                        }}
                        transition={{ 
                          duration: 0.7 + i * 0.18, 
                          delay: i * 0.13,
                          repeat: Infinity,
                          repeatType: 'mirror' 
                        }}
                      />
                    ))}
                  </Thread>
                </CoreColumn>
              </ThreadCoreContainer>
            </DiagramContainer>
          </Card>
          
          <Card 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardTitle>Time Slicing</CardTitle>
            <CardText>
              Time slicing is a CPU scheduling technique that allows multiple processes or threads to share a single CPU by allocating time slots to each task.
            </CardText>
            
            <SectionTitle>How it works:</SectionTitle>
            <CardList>
              <CardListItem>The CPU executes a process/thread for a small time interval (time quantum)</CardListItem>
              <CardListItem>When the time quantum expires, the current task is suspended</CardListItem>
              <CardListItem>The CPU context (registers, program counter) is saved</CardListItem>
              <CardListItem>The CPU switches to another waiting task</CardListItem>
              <CardListItem>The process repeats, creating the illusion of parallelism</CardListItem>
            </CardList>
            
            <SectionTitle>Key aspects:</SectionTitle>
            <CardList>
              <CardListItem>Managed by the operating system scheduler</CardListItem>
              <CardListItem>Creates the appearance of simultaneous execution even on a single core</CardListItem>
              <CardListItem>Shorter time slices make switching more frequent (more responsive but higher overhead)</CardListItem>
              <CardListItem>Longer time slices reduce overhead but may delay task response</CardListItem>
            </CardList>
            
            <TimelineContainer>
              <ProcessContainer>
                <ProcessIndicator 
                  color="rgba(235, 87, 87, 0.8)" 
                  isActive={activeThread === 1}
                  animate={{ 
                    scale: activeThread === 1 ? [1, 1.05, 1] : 1,
                    boxShadow: activeThread === 1 ? [
                      '0 0 8px rgba(235, 87, 87, 0.6)', 
                      '0 0 15px rgba(235, 87, 87, 0.8)', 
                      '0 0 8px rgba(235, 87, 87, 0.6)'
                    ] : 'none',
                    opacity: activeThread === 1 ? 1 : 0.5
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: activeThread === 1 ? Infinity : 0,
                    repeatType: 'loop'
                  }}
                >
                  T1
                </ProcessIndicator>
                <ProcessIndicator 
                  color="rgba(106, 130, 251, 0.8)" 
                  isActive={activeThread === 2}
                  animate={{ 
                    scale: activeThread === 2 ? [1, 1.05, 1] : 1,
                    boxShadow: activeThread === 2 ? [
                      '0 0 8px rgba(106, 130, 251, 0.6)', 
                      '0 0 15px rgba(106, 130, 251, 0.8)', 
                      '0 0 8px rgba(106, 130, 251, 0.6)'
                    ] : 'none',
                    opacity: activeThread === 2 ? 1 : 0.5
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: activeThread === 2 ? Infinity : 0,
                    repeatType: 'loop'
                  }}
                >
                  T2
                </ProcessIndicator>
                <ProcessIndicator 
                  color="rgba(69, 178, 107, 0.8)" 
                  isActive={activeThread === 3}
                  animate={{ 
                    scale: activeThread === 3 ? [1, 1.05, 1] : 1,
                    boxShadow: activeThread === 3 ? [
                      '0 0 8px rgba(69, 178, 107, 0.6)', 
                      '0 0 15px rgba(69, 178, 107, 0.8)', 
                      '0 0 8px rgba(69, 178, 107, 0.6)'
                    ] : 'none',
                    opacity: activeThread === 3 ? 1 : 0.5
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: activeThread === 3 ? Infinity : 0,
                    repeatType: 'loop'
                  }}
                >
                  T3
                </ProcessIndicator>
                <ProcessIndicator 
                  color="rgba(254, 197, 68, 0.8)" 
                  isActive={activeThread === 4}
                  animate={{ 
                    scale: activeThread === 4 ? [1, 1.05, 1] : 1,
                    boxShadow: activeThread === 4 ? [
                      '0 0 8px rgba(254, 197, 68, 0.6)', 
                      '0 0 15px rgba(254, 197, 68, 0.8)', 
                      '0 0 8px rgba(254, 197, 68, 0.6)'
                    ] : 'none',
                    opacity: activeThread === 4 ? 1 : 0.5
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: activeThread === 4 ? Infinity : 0,
                    repeatType: 'loop'
                  }}
                >
                  T4
                </ProcessIndicator>
              </ProcessContainer>

              <Timeline>
                {/* Context switch indicators */}
                <ContextSwitch 
                  style={{ left: '20%' }}
                  initial={{ height: 0 }}
                  animate={{ height: 50 }}
                  transition={{ duration: 0.3, delay: 1.5 }}
                />
                <ContextSwitch 
                  style={{ left: '40%' }}
                  initial={{ height: 0 }}
                  animate={{ height: 50 }}
                  transition={{ duration: 0.3, delay: 3 }}
                />
                <ContextSwitch 
                  style={{ left: '60%' }}
                  initial={{ height: 0 }}
                  animate={{ height: 50 }}
                  transition={{ duration: 0.3, delay: 4.5 }}
                />
                <ContextSwitch 
                  style={{ left: '80%' }}
                  initial={{ height: 0 }}
                  animate={{ height: 50 }}
                  transition={{ duration: 0.3, delay: 6 }}
                />

                {/* Time slices */}
                <TimeSliceSegment
                  color="rgba(235, 87, 87, 0.8)"
                  style={{ left: '0%', width: '20%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    boxShadow: [
                      '0 0 8px rgba(235, 87, 87, 0.5)', 
                      '0 0 15px rgba(235, 87, 87, 0.7)', 
                      '0 0 8px rgba(235, 87, 87, 0.5)'
                    ]
                  }}
                  transition={{ 
                    scaleY: { duration: 0.3 },
                    boxShadow: { duration: 1.5, repeat: Infinity }
                  }}
                >
                  <SegmentLabel>Thread 1</SegmentLabel>
                </TimeSliceSegment>

                <TimeSliceSegment
                  color="rgba(106, 130, 251, 0.8)"
                  style={{ left: '20%', width: '20%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    boxShadow: [
                      '0 0 8px rgba(106, 130, 251, 0.5)', 
                      '0 0 15px rgba(106, 130, 251, 0.7)', 
                      '0 0 8px rgba(106, 130, 251, 0.5)'
                    ]
                  }}
                  transition={{ 
                    scaleY: { duration: 0.3, delay: 1.5 },
                    boxShadow: { duration: 1.5, repeat: Infinity, delay: 1.5 }
                  }}
                >
                  <SegmentLabel>Thread 2</SegmentLabel>
                </TimeSliceSegment>

                <TimeSliceSegment
                  color="rgba(69, 178, 107, 0.8)"
                  style={{ left: '40%', width: '20%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    boxShadow: [
                      '0 0 8px rgba(69, 178, 107, 0.5)', 
                      '0 0 15px rgba(69, 178, 107, 0.7)', 
                      '0 0 8px rgba(69, 178, 107, 0.5)'
                    ]
                  }}
                  transition={{ 
                    scaleY: { duration: 0.3, delay: 3 },
                    boxShadow: { duration: 1.5, repeat: Infinity, delay: 3 }
                  }}
                >
                  <SegmentLabel>Thread 3</SegmentLabel>
                </TimeSliceSegment>

                <TimeSliceSegment
                  color="rgba(254, 197, 68, 0.8)"
                  style={{ left: '60%', width: '20%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    boxShadow: [
                      '0 0 8px rgba(254, 197, 68, 0.5)', 
                      '0 0 15px rgba(254, 197, 68, 0.7)', 
                      '0 0 8px rgba(254, 197, 68, 0.5)'
                    ]
                  }}
                  transition={{ 
                    scaleY: { duration: 0.3, delay: 4.5 },
                    boxShadow: { duration: 1.5, repeat: Infinity, delay: 4.5 }
                  }}
                >
                  <SegmentLabel>Thread 4</SegmentLabel>
                </TimeSliceSegment>

                <TimeSliceSegment
                  color="rgba(235, 87, 87, 0.8)"
                  style={{ left: '80%', width: '20%' }}
                  initial={{ scaleY: 0 }}
                  animate={{ 
                    scaleY: 1,
                    boxShadow: [
                      '0 0 8px rgba(235, 87, 87, 0.5)', 
                      '0 0 15px rgba(235, 87, 87, 0.7)', 
                      '0 0 8px rgba(235, 87, 87, 0.5)'
                    ]
                  }}
                  transition={{ 
                    scaleY: { duration: 0.3, delay: 6 },
                    boxShadow: { duration: 1.5, repeat: Infinity, delay: 6 }
                  }}
                >
                  <SegmentLabel>Thread 1</SegmentLabel>
                </TimeSliceSegment>

                {/* Progress indicator */}
                <ActiveIndicator
                  animate={{ 
                    left: ['0%', '100%'],
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      '0 0 10px rgba(255, 255, 255, 0.7)',
                      '0 0 15px rgba(255, 255, 255, 0.9)',
                      '0 0 10px rgba(255, 255, 255, 0.7)'
                    ]
                  }}
                  transition={{ 
                    left: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 1.5, repeat: Infinity, repeatType: 'mirror' },
                    boxShadow: { duration: 1.5, repeat: Infinity, repeatType: 'mirror' }
                  }}
                />
              </Timeline>

              {/* Move time markers below the timeline */}
              <div style={{ 
                width: '90%', 
                position: 'relative', 
                height: '25px', 
                margin: '0 auto', 
                marginTop: '5px'
              }}>
                <TimeMarker position="0%">0ms</TimeMarker>
                <TimeMarker position="20%">25ms</TimeMarker>
                <TimeMarker position="40%">50ms</TimeMarker>
                <TimeMarker position="60%">75ms</TimeMarker>
                <TimeMarker position="80%">100ms</TimeMarker>
                <TimeMarker position="100%">125ms</TimeMarker>
              </div>
            </TimelineContainer>
          </Card>
        </CardRow>
      </ContentContainer>
    </Slide>
  );
};

export default MultiThreadingTimeSlicing; 