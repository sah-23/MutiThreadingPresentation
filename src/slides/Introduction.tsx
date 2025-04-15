import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const BackgroundCanvas = styled.canvas`
  position: absolute;
  top: 0;
    left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00BFFF, #7FFF00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.5px;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled(motion.h2)`
  font-size: 2.2rem;
  color: #D6FFFF;
  margin-bottom: 2.5rem;
  text-align: center;
  font-weight: 600;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Author = styled(motion.h3)`
  font-size: 1.0rem;
  color: #FFFFFF;
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Date = styled(motion.p)`
  font-size: 1.3rem;
  color: #D6FFFF;
  text-align: center;
  font-weight: 500;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

// CPU Decoration elements
const CPUContainer = styled(motion.div)`
  position: absolute;
  width: 160px;
  height: 160px;
  background: rgba(10, 25, 47, 0.4);
  border: 1px solid rgba(0, 191, 255, 0.5);
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 4px;
  padding: 8px;
  z-index: 1;
  box-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
  
  &.left {
    top: 15%;
    left: 10%;
    transform: rotate(-10deg);
  }
  
  &.right {
    bottom: 15%;
    right: 10%;
    transform: rotate(10deg);
  }
`;

const Core = styled(motion.div)`
  background: rgba(0, 191, 255, 0.2);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(0, 191, 255, 0.3), transparent);
    transform: translateX(-100%);
    animation: shimmer 2s infinite;
  }
  
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

// Add floating processor elements
const FloatingProcessor = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(10, 25, 47, 0.2);
  border: 1px solid rgba(0, 191, 255, 0.3);
  border-radius: 6px;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 3px;
  padding: 5px;
  box-shadow: 0 0 15px rgba(0, 191, 255, 0.1);
`;

const MiniCore = styled(motion.div)`
  background: rgba(0, 191, 255, 0.15);
  border-radius: 2px;
`;

const CircuitLine = styled(motion.div)<{ width: string; rotate: string; color: string }>`
  position: absolute;
  height: 1px;
  width: ${props => props.width};
  background: ${props => props.color};
  transform: rotate(${props => props.rotate});
  z-index: 1;
  box-shadow: 0 0 8px ${props => props.color};
  opacity: 0.5;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${props => props.color};
    box-shadow: 0 0 5px ${props => props.color};
  }

  &::before {
    left: 0;
    top: -1px;
  }

  &::after {
    right: 0;
    top: -1px;
  }
`;

const DataPacketFloat = styled(motion.div)<{ size: string; color: string }>`
  position: absolute;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: 50%;
  background: ${props => props.color};
  box-shadow: 0 0 10px ${props => props.color};
  z-index: 1;
`;

// Thread animation class
class Thread {
  x: number;
  y: number;
  length: number;
  speed: number;
  color: string;
  width: number;
  direction: number;
  id: number;
  offset: number;
  active: boolean;
  pulse: boolean;
  pulseFrequency: number;
  pulseSize: number;
  
  constructor(id: number, x: number, y: number, canvasWidth: number, canvasHeight: number) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.length = Math.random() * 80 + 80;
    this.speed = Math.random() * 0.8 + 0.4;
    this.direction = Math.random() > 0.5 ? 1 : -1;
    this.width = Math.random() * 1.2 + 0.5;
    this.color = [
      '#00BFFF40', '#7FFF0040', '#FF7F5040', '#7F00FF40', '#FFD70040'
    ][Math.floor(Math.random() * 5)];
    this.offset = Math.random() * 2000;
    this.active = Math.random() > 0.5;
    this.pulse = Math.random() > 0.7;
    this.pulseFrequency = Math.random() * 3000 + 2000;
    this.pulseSize = Math.random() * 1.5 + 1;
  }
  
  update(time: number, canvasWidth: number, canvasHeight: number) {
    if (Math.random() < 0.003) {
      this.active = !this.active;
    }
    
    if (this.active) {
      this.x += this.speed * this.direction;
      
      if (this.x < 0 || this.x > canvasWidth) {
        this.direction *= -1;
      }
      
      if (Math.random() < 0.02) {
        this.y += (Math.random() - 0.5) * 8;
        this.y = Math.max(0, Math.min(canvasHeight, this.y));
      }
    }
  }
  
  draw(ctx: CanvasRenderingContext2D, time: number) {
    const opacity = this.active ? 0.4 : 0.2;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
    
    if (this.pulse && this.active) {
      const pulsePhase = ((time + this.offset) % this.pulseFrequency) / this.pulseFrequency;
      if (pulsePhase < 0.3) {
        const pulseFactor = 1 + (this.pulseSize * Math.sin(pulsePhase * Math.PI / 0.3));
        ctx.lineWidth = this.width * pulseFactor;
        
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 6;
      }
    }
    
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.length * this.direction, this.y);
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    const endpointSize = 2.5;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, endpointSize, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(this.x + this.length * this.direction, this.y, endpointSize, 0, Math.PI * 2);
    ctx.fill();
    
    if (this.active && Math.random() < 0.4) {
      const packetPosition = ((time + this.offset) % 2000) / 2000;
      const packetX = this.x + (this.length * this.direction * packetPosition);
      
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 4;
      ctx.beginPath();
      ctx.arc(packetX, this.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
  }
  
  static connectThreads(ctx: CanvasRenderingContext2D, threads: Thread[], time: number) {
    for (let i = 0; i < threads.length; i++) {
      const t1 = threads[i];
      if (!t1.active) continue;
      
      for (let j = i + 1; j < threads.length; j++) {
        const t2 = threads[j];
        if (!t2.active) continue;
        
        const dx = t1.x - t2.x;
        const dy = t1.y - t2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150 && Math.random() < 0.2) {
          const opacity = Math.max(0, 1 - distance / 150);
          const gradient = ctx.createLinearGradient(t1.x, t1.y, t2.x, t2.y);
          gradient.addColorStop(0, t1.color);
          gradient.addColorStop(1, t2.color);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.4;
          
          ctx.shadowColor = t1.color;
          ctx.shadowBlur = 2;
          
          ctx.beginPath();
          ctx.moveTo(t1.x, t1.y);
          ctx.lineTo(t2.x, t2.y);
          ctx.stroke();
          ctx.shadowBlur = 0;
          
          if (Math.random() < 0.05) {
            const packetPosition = ((time + t1.offset + t2.offset) % 3000) / 3000;
            const packetX = t1.x + (t2.x - t1.x) * packetPosition;
            const packetY = t1.y + (t2.y - t1.y) * packetPosition;
            
            ctx.fillStyle = '#FFFFFF40';
            ctx.shadowColor = '#FFFFFF40';
            ctx.shadowBlur = 4;
            ctx.beginPath();
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        }
      }
    }
  }
}

const Introduction: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const threadsRef = useRef<Thread[]>([]);
  const animationRef = useRef<number>(0);
  
  // Add refs for floating elements
  const floatingElementsRef = useRef<{
    id: number;
    x: number;
    y: number;
    xSpeed: number;
    ySpeed: number;
    rotate: number;
    rotateSpeed: number;
  }[]>([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const setCanvasDimensions = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      
      threadsRef.current = [];
      const threadCount = Math.floor(width / 70);
      
      for (let i = 0; i < threadCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        threadsRef.current.push(new Thread(i, x, y, width, height));
      }
    };
    
    setCanvasDimensions();
    
    window.addEventListener('resize', setCanvasDimensions);
    
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      threadsRef.current.forEach(thread => {
        thread.update(time, canvas.width, canvas.height);
        thread.draw(ctx, time);
      });
      
      Thread.connectThreads(ctx, threadsRef.current, time);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);
  
  // Add useEffect for floating elements animation
  useEffect(() => {
    // Create floating elements
    floatingElementsRef.current = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      xSpeed: (Math.random() - 0.5) * 0.5,
      ySpeed: (Math.random() - 0.5) * 0.5,
      rotate: Math.random() * 360,
      rotateSpeed: (Math.random() - 0.5) * 0.7
    }));
  }, []);
  
  // Animation variants for CPU cores
  const coreVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
        type: "spring",
      }
    })
  };
  
  // Create floating circuit positions
  const circuitLines = [
    { width: '150px', top: '15%', left: '5%', rotate: '25deg', color: '#00BFFF80' },
    { width: '200px', top: '75%', left: '15%', rotate: '-15deg', color: '#7FFF0080' },
    { width: '180px', top: '35%', right: '10%', rotate: '40deg', color: '#FF7F5080' },
    { width: '120px', bottom: '20%', right: '25%', rotate: '-30deg', color: '#7F00FF80' }
  ];
  
  // Create data packets that will float across the screen
  const dataPackets = [
    { size: '8px', color: '#00BFFF', initialX: '-10px', initialY: '30%', finalX: '110%', finalY: '45%', duration: 8 },
    { size: '6px', color: '#7FFF00', initialX: '110%', initialY: '70%', finalX: '-5%', finalY: '60%', duration: 12 },
    { size: '5px', color: '#FF7F50', initialX: '20%', initialY: '-10px', finalX: '70%', finalY: '110%', duration: 10 },
    { size: '7px', color: '#7F00FF', initialX: '80%', initialY: '110%', finalX: '30%', finalY: '-5%', duration: 9 }
  ];
  
  return (
    <Container>
      <BackgroundCanvas ref={canvasRef} />
      
      {/* Circuit lines */}
      {circuitLines.map((line, index) => (
        <CircuitLine
          key={`circuit-${index}`}
          width={line.width}
          rotate={line.rotate}
          color={line.color}
          style={{
            top: line.top,
            left: line.left,
            right: line.right,
            bottom: line.bottom
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: index * 0.7 }}
        />
      ))}
      
      {/* Floating processors */}
      {[0, 1, 2].map(i => (
        <FloatingProcessor
          key={`processor-${i}`}
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: 0,
            opacity: 0
          }}
          animate={{ 
            x: [
              Math.random() * window.innerWidth * 0.8,
              Math.random() * window.innerWidth * 0.8,
              Math.random() * window.innerWidth * 0.8
            ],
            y: [
              Math.random() * window.innerHeight * 0.8,
              Math.random() * window.innerHeight * 0.8,
              Math.random() * window.innerHeight * 0.8
            ],
            rotate: [0, Math.random() * 40 - 20, Math.random() * 40 - 20],
            opacity: 0.6
          }}
          transition={{ 
            duration: 30 + i * 10,
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {Array.from({ length: 4 }).map((_, j) => (
            <MiniCore
              key={`mini-core-${i}-${j}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ 
                duration: 2 + j * 0.5,
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            />
          ))}
        </FloatingProcessor>
      ))}
      
      {/* Moving data packets */}
      {dataPackets.map((packet, i) => (
        <DataPacketFloat
          key={`data-packet-${i}`}
          size={packet.size}
          color={packet.color}
          initial={{ 
            x: packet.initialX, 
            y: packet.initialY,
            opacity: 0
          }}
          animate={{ 
            x: packet.finalX,
            y: packet.finalY,
            opacity: [0, 0.8, 0]
          }}
          transition={{ 
            duration: packet.duration,
            repeat: Infinity,
            repeatDelay: i * 2,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Left CPU decoration */}
      <CPUContainer 
        className="left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <Core
            key={`left-core-${i}`}
            custom={i}
            variants={coreVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </CPUContainer>
      
      {/* Right CPU decoration */}
      <CPUContainer 
        className="right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <Core
            key={`right-core-${i}`}
            custom={i}
            variants={coreVariants}
            initial="initial"
            animate="animate"
          />
        ))}
      </CPUContainer>
      
      <Content
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Title
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Multi-Threading and How Modern CPUs Handle It in 2025
        </Title>
        
        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          A Deep Dive into CPU Threading in 2025
        </Subtitle>
        
        <Author
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Presented by Sahand Mazrue
        </Author>
      </Content>
    </Container>
  );
};

export default Introduction; 