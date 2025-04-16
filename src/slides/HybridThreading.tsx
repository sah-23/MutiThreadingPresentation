import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 90%; /* Reduced height to avoid scrolling */
  padding: 0;
  justify-content: center;
  align-items: center;
  margin-top: -0.8rem; /* Adjusted to move content up slightly */
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 16px;
  padding: 1.2rem; /* Reduced padding to save space */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(100, 120, 200, 0.4);
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
`;

const SectionsContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  transform: translateX(-6px); /* Move 6px to the left */
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  color: var(--accent);
  margin-bottom: 0.8rem; /* Reduced margin */
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transform: translateX(-20px); /* Increased from -6px to -12px to move further left */
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const BenefitsList = styled.ul`
  margin: 0.8rem 0; /* Reduced margin */
  padding-left: 1.5rem;
  list-style-type: none;
`;

const BenefitItem = styled(motion.li)`
  margin-bottom: 0.8rem; /* Reduced margin */
  position: relative;
  padding-left: 0.5rem;
  font-size: 1.1rem;
  color: white; /* Set default text color to white */
  
  &::before {
    content: "•";
    color: var(--primary);
    display: inline-block;
    width: 1.5rem;
    position: absolute;
    left: -1.5rem;
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const HighlightText = styled.span`
  color: var(--primary);
  font-weight: 600;
`;

const TextSection = styled.div`
  background: rgba(30, 40, 70, 0.5);
  border-radius: 10px;
  padding: 1rem; /* Reduced padding */
  margin: 0.8rem 0; /* Reduced margin */
  border: 1px solid rgba(100, 120, 200, 0.3);
`;

const TextContent = styled.p`
  color: white; /* Full white */
  font-size: 1rem; /* Slightly smaller font */
  line-height: 1.4; /* Reduced line height */
  margin-bottom: 0.6rem; /* Reduced margin */
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DiagramContainer = styled.div`
  background: rgba(30, 40, 70, 0.7);
  border-radius: 10px;
  padding: 1rem; /* Reduced padding */
  margin: 0.8rem 0; /* Reduced margin */
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 100%;
  height: 270px; /* Fixed height for diagram */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent overflow */
`;

const HybridDiagram = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HybridThreading: React.FC = () => {
  return (
    <Slide title="Hybrid Threading Model">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionsContainer>
            <Section>
              <SectionTitle>Many-to-Many Threading</SectionTitle>
              <TextContent>
                The hybrid threading model combines the advantages of both user-mode and kernel-mode threading 
                approaches, providing the best of both worlds:
              </TextContent>
              
              <TextSection>
                <TextContent>
                  <HighlightText>Key Components:</HighlightText> The hybrid model consists of user-level threads 
                  managed in user space and Lightweight Processes (LWPs) that act as bridges between user threads 
                  and the kernel.
                </TextContent>
                <TextContent>
                  <HighlightText>M:N Mapping:</HighlightText> Multiple user-level threads (M) are mapped to 
                  multiple kernel-level threads or LWPs (N), where typically M {'>'}N, allowing efficient 
                  resource utilization.
                </TextContent>
              </TextSection>
              
              <DiagramContainer>
                <HybridDiagram
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <svg width="380" height="260" viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* User space */}
                    <rect x="10" y="10" width="360" height="120" rx="5" fill="rgba(60, 80, 170, 0.2)" stroke="#6080CC" strokeWidth="2" />
                    <text x="65" y="30" fontSize="14" fill="white">User Space</text>
                    <text x="350" y="30" fontSize="14" fontWeight="bold" fill="#f0a04b" textAnchor="end">Hybrid Mode</text>
                    
                    {/* User threads box */}
                    <rect x="30" y="40" width="320" height="80" rx="4" fill="rgba(60, 100, 180, 0.2)" stroke="#22c55e" strokeWidth="2" />
                    <text x="190" y="60" fontSize="12" textAnchor="middle" fill="#22c55e" fontWeight="bold">User-Level Threads</text>
                    
                    {/* User threads */}
                    <rect x="45" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="60" y="95" fontSize="12" textAnchor="middle" fill="white">T1</text>
                    
                    <rect x="85" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="100" y="95" fontSize="12" textAnchor="middle" fill="white">T2</text>
                    
                    <rect x="125" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="140" y="95" fontSize="12" textAnchor="middle" fill="white">T3</text>
                    
                    <rect x="165" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="180" y="95" fontSize="12" textAnchor="middle" fill="white">T4</text>
                    
                    <rect x="205" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="220" y="95" fontSize="12" textAnchor="middle" fill="white">T5</text>
                    
                    <rect x="245" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="260" y="95" fontSize="12" textAnchor="middle" fill="white">T6</text>
                    
                    <rect x="285" y="75" width="30" height="30" rx="4" stroke="#22c55e" strokeWidth="1.5" fill="rgba(34, 197, 94, 0.2)" />
                    <text x="300" y="95" fontSize="12" textAnchor="middle" fill="white">T7</text>
                    
                    {/* Many-to-few mapping arrows */}
                    <path d="M60 105 L60 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    <path d="M100 105 L100 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    <path d="M140 105 L100 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    <path d="M180 105 L180 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    <path d="M220 105 L180 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    <path d="M260 105 L260 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    <path d="M300 105 L260 160" stroke="#f0a04b" strokeWidth="1.5" strokeDasharray="3,2" />
                    
                    {/* Kernel space */}
                    <rect x="10" y="140" width="360" height="110" rx="5" fill="rgba(40, 60, 100, 0.3)" stroke="#5070B0" strokeWidth="2" />
                    <text x="65" y="160" fontSize="14" fill="white">Kernel Space</text>
                    
                    {/* LWPs box */}
                    <rect x="30" y="170" width="320" height="70" rx="4" fill="rgba(60, 100, 180, 0.2)" stroke="#f0a04b" strokeWidth="2" />
                    <text x="190" y="190" fontSize="12" textAnchor="middle" fill="#f0a04b" fontWeight="bold">Lightweight Processes (LWPs)</text>
                    
                    {/* LWPs */}
                    <circle cx="60" cy="220" r="15" fill="rgba(240, 160, 75, 0.3)" stroke="#f0a04b" strokeWidth="1.5" />
                    <text x="60" y="225" fontSize="12" textAnchor="middle" fill="white">LWP1</text>
                    
                    <circle cx="100" cy="220" r="15" fill="rgba(240, 160, 75, 0.3)" stroke="#f0a04b" strokeWidth="1.5" />
                    <text x="100" y="225" fontSize="12" textAnchor="middle" fill="white">LWP2</text>
                    
                    <circle cx="180" cy="220" r="15" fill="rgba(240, 160, 75, 0.3)" stroke="#f0a04b" strokeWidth="1.5" />
                    <text x="180" y="225" fontSize="12" textAnchor="middle" fill="white">LWP3</text>
                    
                    <circle cx="260" cy="220" r="15" fill="rgba(240, 160, 75, 0.3)" stroke="#f0a04b" strokeWidth="1.5" />
                    <text x="260" y="225" fontSize="12" textAnchor="middle" fill="white">LWP4</text>
                    
                    {/* Explanatory text */}
                    <text x="30" y="250" fontSize="10" fill="white">M User Threads</text>
                    <text x="290" y="250" fontSize="10" textAnchor="end" fill="white">N Kernel Threads (LWPs)</text>
                  </svg>
                </HybridDiagram>
              </DiagramContainer>
            </Section>
            
            <Section>
              <SectionTitle>How Hybrid Threading Works</SectionTitle>
              <TextContent>
                This model provides a flexible approach to threading that solves the limitations 
                of both pure user-mode and kernel-mode implementations:
              </TextContent>
              
              <BenefitsList>
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <HighlightText>Thread Management in User Space:</HighlightText> Creation, termination, and basic 
                  thread operations happen in user space, making them fast and efficient.
                </BenefitItem>
                
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <HighlightText>LWPs as Kernel Interface:</HighlightText> When system calls are needed, user threads 
                  get mapped to available LWPs which then interact with the kernel.
                </BenefitItem>
                
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <HighlightText>Blocking Resolution:</HighlightText> When a thread makes a blocking system call, 
                  only its associated LWP is blocked—other LWPs continue executing other user threads.
                </BenefitItem>
                
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <HighlightText>Dynamic Adjustment:</HighlightText> The thread library can create additional 
                  LWPs when needed, such as when many threads are blocking on I/O operations.
                </BenefitItem>
              </BenefitsList>
              
              <TextSection>
                <TextContent>
                  <HighlightText>Real-World Examples:</HighlightText> Several systems have implemented variations 
                  of the hybrid model:
                </TextContent>
                <TextContent>
                  • Solaris implemented a full M:N threading model in earlier versions
                </TextContent>
                <TextContent>
                  • FreeBSD supported the M:N model with its user threading library
                </TextContent>
                <TextContent>
                  • Modern Go language uses a variation of M:N threading with "goroutines" scheduled onto 
                  a pool of OS threads
                </TextContent>
              </TextSection>
              
              <TextContent>
                The hybrid model effectively provides a "best of both worlds" approach, maintaining the performance 
                advantages of user-mode threading while solving its critical blocking problem through the 
                use of LWPs as intermediaries to the kernel.
              </TextContent>
            </Section>
          </SectionsContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default HybridThreading; 