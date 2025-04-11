import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

// Types for the thread component
export interface ThreadProps {
  id: string;
  color?: string;
  label?: string;
  state?: 'ready' | 'running' | 'blocked' | 'terminated';
  priority?: number;
  size?: 'small' | 'medium' | 'large';
  progress?: number;
  animate?: boolean;
  isActive?: boolean;
}

// Styled components
const ThreadContainer = styled(motion.div)<{ 
  size: string; 
  isActive: boolean;
}>`
  position: relative;
  width: ${props => 
    props.size === 'small' ? '120px' : 
    props.size === 'large' ? '280px' : '200px'
  };
  height: ${props => 
    props.size === 'small' ? '30px' : 
    props.size === 'large' ? '50px' : '40px'
  };
  margin: 8px 0;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: ${props => props.isActive 
    ? '0 0 15px rgba(100, 179, 244, 0.8)' 
    : '0 0 8px rgba(0, 0, 0, 0.3)'};
  backdrop-filter: blur(4px);
  transition: box-shadow 0.3s ease;
`;

const ThreadBody = styled(motion.div)<{ 
  color: string; 
  state: string;
  isActive: boolean;
}>`
  width: 100%;
  height: 100%;
  background: ${props => {
    const baseColor = props.color;
    switch(props.state) {
      case 'running': return `linear-gradient(90deg, ${baseColor}80, ${baseColor})`;
      case 'blocked': return `linear-gradient(90deg, ${baseColor}40, ${baseColor}80)`;
      case 'terminated': return `linear-gradient(90deg, ${baseColor}30, ${baseColor}50)`;
      default: return `linear-gradient(90deg, ${baseColor}60, ${baseColor}90)`;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 100%
    );
    transform: translateX(-100%);
    animation: ${props => props.isActive ? 'shimmer 1.5s infinite' : 'none'};
  }

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

const ThreadLabel = styled.span<{ size: string }>`
  color: white;
  font-weight: bold;
  font-size: ${props => 
    props.size === 'small' ? '0.8rem' : 
    props.size === 'large' ? '1.2rem' : '1rem'
  };
  z-index: 2;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 90%;
`;

const ProgressBar = styled(motion.div)<{ color: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 5px ${props => props.color};
`;

const StateIndicator = styled(motion.div)<{ state: string }>`
  position: absolute;
  right: 8px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    switch(props.state) {
      case 'running': return '#0cff9a';
      case 'blocked': return '#ffcc00';
      case 'terminated': return '#ff3358';
      default: return '#4a90e2';
    }
  }};
  box-shadow: 0 0 5px ${props => {
    switch(props.state) {
      case 'running': return 'rgba(12, 255, 154, 0.7)';
      case 'blocked': return 'rgba(255, 204, 0, 0.7)';
      case 'terminated': return 'rgba(255, 51, 88, 0.7)';
      default: return 'rgba(74, 144, 226, 0.7)';
    }
  }};
`;

const PriorityTag = styled.div<{ priority: number }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 12px 12px 0 0;
  border-color: ${props => {
    if (props.priority >= 8) return '#ff3358 transparent transparent transparent';
    if (props.priority >= 5) return '#ffcc00 transparent transparent transparent';
    return 'rgba(255, 255, 255, 0.3) transparent transparent transparent';
  }};
`;

// Data Packet Animation
const DataPacket = styled(motion.div)<{ color: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0 0 8px ${props => props.color};
`;

// Thread Component
const Thread: React.FC<ThreadProps> = ({
  id,
  color = '#4a90e2',
  label = 'Thread',
  state = 'ready',
  priority = 3,
  size = 'medium',
  progress = 0,
  animate = true,
  isActive = false
}) => {
  const controls = useAnimation();
  const [packets, setPackets] = useState<{id: number, x: number}[]>([]);
  
  // Animate based on state
  useEffect(() => {
    if (animate) {
      if (state === 'running') {
        controls.start({
          scale: [1, 1.03, 1],
          transition: { 
            repeat: Infinity, 
            duration: 2, 
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        });
      } else if (state === 'blocked') {
        controls.start({
          opacity: [1, 0.7, 1],
          transition: { 
            repeat: Infinity, 
            duration: 1.5, 
            repeatType: 'reverse'
          }
        });
      } else if (state === 'terminated') {
        controls.start({
          scale: 0.95,
          opacity: 0.7,
          transition: { duration: 0.3 }
        });
      } else {
        controls.start({
          scale: 1,
          opacity: 1,
          transition: { duration: 0.3 }
        });
      }
    }
  }, [state, animate, controls]);

  // Generate data packets
  useEffect(() => {
    if (state === 'running' && animate && isActive) {
      const interval = setInterval(() => {
        setPackets(prev => {
          // Add a new packet and remove old ones that have gone off screen
          const newPackets = [...prev, { id: Date.now(), x: 0 }];
          return newPackets.filter(p => p.x < 100).map(p => ({
            ...p,
            x: p.x + (Math.random() * 10 + 5)
          }));
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [state, animate, isActive]);

  return (
    <ThreadContainer 
      size={size}
      isActive={isActive}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <ThreadBody 
        color={color} 
        state={state}
        isActive={isActive}
        animate={controls}
      >
        <ThreadLabel size={size}>
          {label}
        </ThreadLabel>
        
        {priority > 0 && (
          <PriorityTag priority={priority} />
        )}
        
        <StateIndicator 
          state={state}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        />
        
        <AnimatePresence>
          {progress > 0 && (
            <ProgressBar 
              color={color}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              exit={{ width: 0 }}
              transition={{ duration: 0.5 }}
            />
          )}
        </AnimatePresence>
        
        <AnimatePresence>
          {packets.map(packet => (
            <DataPacket
              key={packet.id}
              color={color}
              initial={{ left: 0, opacity: 0.7 }}
              animate={{ left: `${packet.x}%`, opacity: packet.x > 80 ? 0 : 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          ))}
        </AnimatePresence>
      </ThreadBody>
    </ThreadContainer>
  );
};

// Thread Queue Component
export interface ThreadQueueProps {
  title?: string;
  threads: ThreadProps[];
  type?: 'vertical' | 'horizontal';
  animate?: boolean;
  activeThread?: string;
}

const QueueContainer = styled.div<{ direction: string }>`
  display: flex;
  flex-direction: ${props => props.direction === 'horizontal' ? 'row' : 'column'};
  gap: ${props => props.direction === 'horizontal' ? '15px' : '4px'};
  padding: 15px;
  background: rgba(10, 25, 47, 0.4);
  border-radius: 12px;
  border: 1px solid rgba(100, 179, 244, 0.2);
  backdrop-filter: blur(5px);
  width: fit-content;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(100, 179, 244, 0.5), transparent);
  }
`;

const QueueTitle = styled.h4`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  text-align: center;
`;

const ThreadQueue: React.FC<ThreadQueueProps> = ({
  title,
  threads,
  type = 'vertical',
  animate = true,
  activeThread
}) => {
  return (
    <QueueContainer direction={type}>
      {title && <QueueTitle>{title}</QueueTitle>}
      
      <AnimatePresence>
        {threads.map(thread => (
          <Thread
            key={thread.id}
            {...thread}
            animate={animate}
            isActive={activeThread === thread.id}
          />
        ))}
      </AnimatePresence>
    </QueueContainer>
  );
};

// CPU Execution Component
export interface CPUProps {
  activeThreads?: ThreadProps[];
  cores?: number;
  utilization?: number;
  size?: 'small' | 'medium' | 'large';
}

const CPUContainer = styled(motion.div)<{ size: string }>`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 15px;
  width: ${props => 
    props.size === 'small' ? '300px' : 
    props.size === 'large' ? '600px' : '450px'
  };
  background: rgba(10, 25, 47, 0.7);
  border-radius: 15px;
  padding: 20px;
  border: 1px solid rgba(100, 179, 244, 0.3);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(100, 179, 244, 0.2) inset;
  position: relative;
  overflow: hidden;
`;

const CPULabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 8px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(100, 179, 244, 0.3);
  background: rgba(10, 25, 47, 0.5);
`;

const CPUCore = styled(motion.div)<{ active: boolean }>`
  background: ${props => props.active ? 
    'linear-gradient(180deg, #193053, #0f1b30)' : 
    'linear-gradient(180deg, #0f1b30, #0a1325)'
  };
  border-radius: 8px;
  padding: 10px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.active ? 
    'rgba(100, 179, 244, 0.4)' : 
    'rgba(100, 179, 244, 0.1)'
  };
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(100, 179, 244, ${props => props.active ? 0.1 : 0.02}),
      transparent 70%
    );
  }
`;

const CoreLabel = styled.span`
  position: absolute;
  top: 3px;
  left: 6px;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.5);
`;

const UtilizationBar = styled.div<{ utilization: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: rgba(16, 32, 53, 0.8);
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.utilization}%;
    height: 100%;
    background-color: rgba(100, 179, 244, ${props => props.utilization > 80 ? 0.9 : 0.6});
    box-shadow: 0 0 5px rgba(100, 179, 244, 0.5);
  }
`;

const CPU: React.FC<CPUProps> = ({
  activeThreads = [],
  cores = 4,
  utilization = 50,
  size = 'medium'
}) => {
  return (
    <CPUContainer 
      size={size}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CPULabel>CPU - {cores} Cores</CPULabel>
      
      {Array.from({ length: cores }).map((_, index) => {
        const threadForCore = activeThreads[index];
        return (
          <CPUCore 
            key={`core-${index}`}
            active={!!threadForCore}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <CoreLabel>Core {index + 1}</CoreLabel>
            {threadForCore && (
              <Thread
                {...threadForCore}
                size="small"
                animate={true}
                isActive={true}
              />
            )}
          </CPUCore>
        );
      })}
      
      <UtilizationBar utilization={utilization} />
    </CPUContainer>
  );
};

export { Thread, ThreadQueue, CPU }; 