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
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const Card = styled(motion.div)<{ width?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: ${props => props.width || '48%'};
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
  height: 200px;
  position: relative;
  margin-top: 1rem;
`;

const Timeline = styled.div`
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 100px;
`;

const TimeProgress = styled(motion.div)`
  position: absolute;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #ffffff;
  top: 94px;
  z-index: 5;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

const ContextSwitchIndicator = styled(motion.div)<{ left: number }>`
  position: absolute;
  height: 40px;
  width: 3px;
  background: rgba(255, 255, 255, 0.7);
  top: 80px;
  left: ${props => props.left}%;
  z-index: 4;
`;

const TimeSlice = styled(motion.div)<{ color: string; left: number; width: number }>`
  position: absolute;
  height: 30px;
  background: ${props => props.color};
  top: 86px;
  left: ${props => props.left}%;
  width: ${props => props.width}%;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const TimeSliceLabel = styled.div`
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
  white-space: nowrap;
`;

const ThreadState = styled(motion.div)<{ color: string; top: number }>`
  position: absolute;
  left: 5px;
  top: ${props => props.top}px;
  width: 100px;
  height: 30px;
  background: ${props => props.color};
  opacity: 0.3;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 0.8rem;
  color: white;
`;

const RunningState = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 100px;
  height: 30px;
  background: ${props => props.color};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding-left: 8px;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
  box-shadow: 0 0 8px ${props => props.color};
  z-index: 3;
`;

const TimeMarker = styled.div<{ position: number }>`
  position: absolute;
  top: 110px;
  left: ${props => props.position}%;
  transform: translateX(-50%);
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
`;

const StateLabel = styled.div`
  position: absolute;
  left: 110px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
`;

const ActiveThread = styled(motion.div)`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  top: 0;
  z-index: 2;
`;

const MultiThreadingTimeSlicing: React.FC = () => {
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
              <Timeline />
              
              <TimeMarker position={0}>0ms</TimeMarker>
              <TimeMarker position={20}>100ms</TimeMarker>
              <TimeMarker position={40}>200ms</TimeMarker>
              <TimeMarker position={60}>300ms</TimeMarker>
              <TimeMarker position={80}>400ms</TimeMarker>
              <TimeMarker position={100}>500ms</TimeMarker>
              
              {/* Thread state indicators */}
              <ThreadState color="rgba(235, 87, 87, 0.5)" top={20}>
                Thread 1
              </ThreadState>
              <StateLabel style={{ top: '20px' }}>Ready/Waiting</StateLabel>
              
              <ThreadState color="rgba(106, 130, 251, 0.5)" top={60}>
                Thread 2
              </ThreadState>
              <StateLabel style={{ top: '60px' }}>Ready/Waiting</StateLabel>
              
              <ThreadState color="rgba(69, 178, 107, 0.5)" top={140}>
                Thread 3
              </ThreadState>
              <StateLabel style={{ top: '140px' }}>Ready/Waiting</StateLabel>
              
              {/* Context switch indicators */}
              <ContextSwitchIndicator 
                left={20}
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 0.3, delay: 3.0 }}
              />
              
              <ContextSwitchIndicator 
                left={40}
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 0.3, delay: 7.0 }}
              />
              
              <ContextSwitchIndicator 
                left={60}
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 0.3, delay: 11.0 }}
              />
              
              <ContextSwitchIndicator 
                left={80}
                initial={{ height: 0 }}
                animate={{ height: 40 }}
                transition={{ duration: 0.3, delay: 15.0 }}
              />
              
              {/* Time slices */}
              <TimeSlice 
                color="rgba(235, 87, 87, 0.8)" 
                left={0} 
                width={20}
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 1,
                  filter: ['brightness(100%)', 'brightness(120%)', 'brightness(100%)']
                }}
                transition={{ 
                  scaleY: { duration: 0.5, delay: 1.0 },
                  filter: { duration: 2, repeat: Infinity, repeatType: 'mirror' }
                }}
              >
                <TimeSliceLabel>Thread 1 (20ms)</TimeSliceLabel>
              </TimeSlice>
              
              <TimeSlice 
                color="rgba(106, 130, 251, 0.8)" 
                left={20} 
                width={20}
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 1,
                  filter: ['brightness(100%)', 'brightness(120%)', 'brightness(100%)']
                }}
                transition={{ 
                  scaleY: { duration: 0.5, delay: 3.5 },
                  filter: { duration: 2.2, repeat: Infinity, repeatType: 'mirror' }
                }}
              >
                <TimeSliceLabel>Thread 2 (20ms)</TimeSliceLabel>
              </TimeSlice>
              
              <TimeSlice 
                color="rgba(69, 178, 107, 0.8)" 
                left={40} 
                width={20}
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 1,
                  filter: ['brightness(100%)', 'brightness(120%)', 'brightness(100%)']
                }}
                transition={{ 
                  scaleY: { duration: 0.5, delay: 7.5 },
                  filter: { duration: 1.8, repeat: Infinity, repeatType: 'mirror' }
                }}
              >
                <TimeSliceLabel>Thread 3 (20ms)</TimeSliceLabel>
              </TimeSlice>
              
              <TimeSlice 
                color="rgba(235, 87, 87, 0.8)" 
                left={60} 
                width={20}
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 1,
                  filter: ['brightness(100%)', 'brightness(120%)', 'brightness(100%)']
                }}
                transition={{ 
                  scaleY: { duration: 0.5, delay: 11.5 },
                  filter: { duration: 1.9, repeat: Infinity, repeatType: 'mirror' }
                }}
              >
                <TimeSliceLabel>Thread 1 (20ms)</TimeSliceLabel>
              </TimeSlice>
              
              <TimeSlice 
                color="rgba(106, 130, 251, 0.8)" 
                left={80} 
                width={20}
                initial={{ scaleY: 0 }}
                animate={{ 
                  scaleY: 1,
                  filter: ['brightness(100%)', 'brightness(120%)', 'brightness(100%)']
                }}
                transition={{ 
                  scaleY: { duration: 0.5, delay: 15.5 },
                  filter: { duration: 2.1, repeat: Infinity, repeatType: 'mirror' }
                }}
              >
                <TimeSliceLabel>Thread 2 (20ms)</TimeSliceLabel>
              </TimeSlice>
              
              {/* Running thread indicator */}
              <RunningState
                color="rgba(235, 87, 87, 1)"
                animate={{
                  top: ['20px', '20px', '100px', '100px', '20px', '20px', '100px', '100px', '20px'],
                  left: ['5px', '5px', '5px', '5px', '5px', '5px', '5px', '5px', '5px'],
                  opacity: [0, 1, 0, 0, 0, 1, 0, 0, 0],
                }}
                transition={{
                  duration: 19,
                  times: [0, 0.15, 0.16, 0.57, 0.58, 0.73, 0.74, 1, 1],
                  repeat: Infinity,
                }}
              >
                Thread 1 (Running)
              </RunningState>
              
              <RunningState
                color="rgba(106, 130, 251, 1)"
                animate={{
                  top: ['60px', '60px', '100px', '100px', '60px', '60px', '100px', '100px', '60px'],
                  left: ['5px', '5px', '5px', '5px', '5px', '5px', '5px', '5px', '5px'],
                  opacity: [0, 0, 0, 1, 0, 0, 0, 1, 0],
                }}
                transition={{
                  duration: 19,
                  times: [0, 0.15, 0.16, 0.36, 0.37, 0.78, 0.79, 0.99, 1],
                  repeat: Infinity,
                }}
              >
                Thread 2 (Running)
              </RunningState>
              
              <RunningState
                color="rgba(69, 178, 107, 1)"
                animate={{
                  top: ['140px', '140px', '100px', '100px', '140px'],
                  left: ['5px', '5px', '5px', '5px', '5px'],
                  opacity: [0, 0, 0, 1, 0],
                }}
                transition={{
                  duration: 19,
                  times: [0, 0.36, 0.37, 0.57, 0.58],
                  repeat: Infinity,
                }}
              >
                Thread 3 (Running)
              </RunningState>
              
              {/* Time progress indicator */}
              <TimeProgress 
                animate={{ 
                  left: ['0%', '100%'],
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  left: { duration: 19, repeat: Infinity },
                  scale: { duration: 2, repeat: Infinity, repeatType: 'mirror' },
                  opacity: { duration: 2, repeat: Infinity, repeatType: 'mirror' }
                }}
              />
            </TimelineContainer>
          </Card>
        </CardRow>
      </ContentContainer>
    </Slide>
  );
};

export default MultiThreadingTimeSlicing; 