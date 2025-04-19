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

const DiagramContainer = styled.div`
  background: rgba(30, 40, 70, 0.7);
  border-radius: 10px;
  padding: 1rem; /* Reduced padding */
  margin: 0.8rem 0; /* Reduced margin */
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 100%;
  height: 270px; /* Fixed height for both diagrams */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Prevent overflow */
`;

const SystemCallDiagram = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Reduced gap */
  align-items: center;
  justify-content: center;
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

const UserModeThreading: React.FC = () => {
  return (
    <Slide title="User-Mode Threading">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SectionsContainer>
            <Section style={{ marginTop: "0" }}>
              <SectionTitle>Benefits of User-Mode Threading</SectionTitle>
              <TextContent style={{ marginBottom: "0.2rem", marginTop: "-0.2rem" }}>
                User-mode threading implements threading functionality entirely in user space through libraries 
                rather than relying on kernel support. This approach offers several key advantages:
              </TextContent>
              
              <BenefitsList style={{ margin: "0.4rem 0" }}>
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <HighlightText>Fast Thread Creation/Termination:</HighlightText> Operations don't require system calls - 
                  just memory allocation and initialization within the process's address space
                </BenefitItem>
                
                <BenefitItem
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <HighlightText>Efficient Context Switching:</HighlightText> Significantly faster than process or 
                  kernel-thread switching since it occurs entirely in user space with minimal context saved/restored
                </BenefitItem>
              </BenefitsList>
              
              <DiagramContainer style={{ marginTop: "6.2rem" }}>
                <svg width="380" height="260" viewBox="0 0 380 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Process Container */}
                  <rect x="10" y="30" width="360" height="200" rx="5" fill="rgba(60, 80, 170, 0.2)" stroke="#6080CC" strokeWidth="2" />
                  <text x="190" y="50" fontSize="14" textAnchor="middle" fill="white">User Process Address Space</text>
                  
                  {/* Thread Library */}
                  <rect x="20" y="60" width="340" height="40" rx="4" fill="rgba(80, 100, 200, 0.3)" stroke="#7090E0" strokeWidth="1.5" />
                  <text x="190" y="85" fontSize="14" textAnchor="middle" fill="white">Thread Library (pthread, std::thread, etc.)</text>
                  
                  {/* Thread Management */}
                  <rect x="30" y="110" width="200" height="110" rx="4" fill="rgba(60, 100, 180, 0.2)" stroke="#7090E0" strokeWidth="1" />
                  <text x="130" y="130" fontSize="12" textAnchor="middle" fill="white">Thread Management (User Space)</text>
                  
                  {/* Threads */}
                  <circle cx="70" cy="160" r="15" fill="#FF9966" />
                  <text x="70" y="165" fontSize="12" textAnchor="middle" fill="white">T1</text>
                  
                  <circle cx="130" cy="160" r="15" fill="#66CCFF" />
                  <text x="130" y="165" fontSize="12" textAnchor="middle" fill="white">T2</text>
                  
                  <circle cx="190" cy="160" r="15" fill="#99FF99" />
                  <text x="190" y="165" fontSize="12" textAnchor="middle" fill="white">T3</text>
                  
                  {/* Fast operations callouts - Modified to prevent overlap */}
                  <text x="70" y="190" fontSize="10" textAnchor="middle" fill="white">Fast creation</text>
                  <text x="130" y="210" fontSize="10" textAnchor="middle" fill="white">Fast context switching</text>
                  <text x="190" y="190" fontSize="10" textAnchor="middle" fill="white">Fast termination</text>
                  
                  {/* Shared memory */}
                  <rect x="240" y="110" width="120" height="110" rx="4" fill="rgba(60, 100, 180, 0.2)" stroke="#7090E0" strokeWidth="1" />
                  <text x="300" y="130" fontSize="12" textAnchor="middle" fill="white">Shared Resources</text>
                  <text x="300" y="150" fontSize="11" textAnchor="middle" fill="white">Memory</text>
                  <text x="300" y="170" fontSize="11" textAnchor="middle" fill="white">Global Variables</text>
                  <text x="300" y="190" fontSize="11" textAnchor="middle" fill="white">File Descriptors</text>
                </svg>
              </DiagramContainer>
            </Section>
            
            <Section>
              <SectionTitle>The Critical Downside: System Call Blocking</SectionTitle>
              <TextContent>
                The major limitation comes from how user-mode threads interact with system calls:
              </TextContent>
              <TextSection>
                <TextContent>
                  <HighlightText>System calls</HighlightText> are controlled entry points into the operating system kernel 
                  that allow processes to request privileged operations. When a user-mode thread makes a blocking system call:
                </TextContent>
                <TextContent>
                  The kernel has no awareness of individual threads within the process - it only sees the entire process. 
                  If the system call blocks (e.g., waiting for I/O), the kernel blocks the <HighlightText>entire process</HighlightText>, 
                  suspending all threads even though they could theoretically continue running.
                </TextContent>
              </TextSection>
              
              <TextContent>
                This "blocking system call problem" means pure user-mode threading systems cannot effectively 
                utilize multiple CPU cores or maintain responsiveness during I/O operations.
              </TextContent>
              
              <DiagramContainer>
                <SystemCallDiagram
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  style={{ marginTop: "20px" }}
                >
                  <svg width="380" height="260" viewBox="0 0 380 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* User space */}
                    <rect x="10" y="10" width="360" height="110" rx="5" fill="rgba(60, 80, 170, 0.2)" stroke="#6080CC" strokeWidth="2" />
                    
                    {/* Process with threads */}
                    <rect x="30" y="40" width="320" height="70" rx="4" fill="rgba(60, 100, 180, 0.2)" stroke="#7090E0" strokeWidth="1" />
                    <text x="190" y="55" fontSize="12" textAnchor="middle" fill="white">Process</text>
                    
                    {/* User Process Address Space label - added to match left diagram */}
                    <text x="190" y="30" fontSize="14" textAnchor="middle" fill="white">User Process Address Space</text>
                    
                    {/* Threads */}
                    <circle cx="70" cy="85" r="15" fill="#FF9966" />
                    <text x="70" y="90" fontSize="12" textAnchor="middle" fill="white">T1</text>
                    
                    <circle cx="130" cy="85" r="15" fill="#66CCFF" />
                    <text x="130" y="90" fontSize="12" textAnchor="middle" fill="white">T2</text>
                    
                    <circle cx="190" cy="85" r="15" fill="#99FF99" />
                    <text x="190" y="90" fontSize="12" textAnchor="middle" fill="white">T3</text>
                    
                    <circle cx="250" cy="85" r="15" fill="#FFCC66" />
                    <text x="250" y="90" fontSize="12" textAnchor="middle" fill="white">T4</text>
                    
                    <circle cx="310" cy="85" r="15" fill="#FF99CC" />
                    <text x="310" y="90" fontSize="12" textAnchor="middle" fill="white">T5</text>
                    
                    {/* Kernel space */}
                    <rect x="10" y="130" width="360" height="110" rx="5" fill="rgba(40, 60, 100, 0.3)" stroke="#5070B0" strokeWidth="2" />
                    
                    {/* System call and blocking */}
                    <path d="M70 100 L70 180" stroke="#FF5555" strokeWidth="2" />
                    <path d="M65 180 L75 180 L70 190 Z" fill="#FF5555" />
                    <text x="70" y="210" fontSize="12" textAnchor="middle" fill="white">Blocking System Call</text>
                    
                    {/* Blocking effect */}
                    <path d="M30 115 L340 115" stroke="#FF5555" strokeWidth="2" strokeDasharray="5,3" />
                    <text x="190" y="145" fontSize="12" textAnchor="middle" fill="#FF5555" fontWeight="600">Entire Process Blocked</text>
                    
                    {/* User space and Kernel space labels with arrows */}
                    {/* User space label */}
                    <rect x="15" y="15" width="90" height="20" rx="3" fill="rgba(60, 100, 200, 0.6)" />
                    <text x="60" y="30" fontSize="14" textAnchor="middle" fill="white" fontWeight="500">User Space</text>
                    
                    {/* Kernel space label */}
                    <rect x="15" y="135" width="90" height="20" rx="3" fill="rgba(60, 100, 200, 0.6)" />
                    <text x="60" y="150" fontSize="14" textAnchor="middle" fill="white" fontWeight="500">Kernel Space</text>
                  </svg>
                </SystemCallDiagram>
              </DiagramContainer>
            </Section>
          </SectionsContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default UserModeThreading; 