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
  transform: translateX(-20px); /* Move section titles further left */
  
  &::before {
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent);
  }
`;

const ModelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem; /* Reduced gap */
`;

const ModelCard = styled(motion.div)`
  background: rgba(30, 40, 70, 0.7);
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  border: 1px solid rgba(100, 120, 200, 0.3);
`;

const ModelDiagram = styled.div`
  width: 140px;
  height: 95px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`;

const ModelContent = styled.div`
  flex: 1;
`;

const ModelTitle = styled.h4`
  font-size: 1.2rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ModelDescription = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  color: white; /* Changed to full white */
`;

const OperationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.8rem; /* Reduced gap */
`;

const OperationCard = styled(motion.div)`
  background: rgba(40, 50, 90, 0.7);
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid rgba(100, 120, 200, 0.3);
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const OperationIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: var(--accent);
  flex-shrink: 0;
`;

const OperationContent = styled.div`
  flex: 1;
`;

const OperationTitle = styled.h4`
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.4rem;
  font-weight: 600;
`;

const OperationDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  color: white; /* Changed to full white */
`;

const IntroText = styled.p`
  color: white; /* Changed to full white */
  font-size: 1rem; /* Slightly smaller */
  line-height: 1.4;
  margin-bottom: 0.8rem; /* Reduced margin */
`;

// SVG Components for thread model diagrams with larger dimensions
const UserThreadsSVG = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="110" height="75" rx="4" fill="rgba(60, 80, 170, 0.3)" stroke="#6080CC" strokeWidth="2" />
    <text x="60" y="20" fontSize="10" textAnchor="middle" fill="white">User Space</text>
    <rect x="12" y="25" width="96" height="25" rx="3" fill="rgba(80, 100, 200, 0.4)" stroke="#7090E0" strokeWidth="1.5" />
    <text x="60" y="40" fontSize="9" textAnchor="middle" fill="white">Thread Library</text>
    <circle cx="30" cy="62" r="6" fill="#FF9966" />
    <circle cx="50" cy="62" r="6" fill="#66CCFF" />
    <circle cx="70" cy="62" r="6" fill="#99FF99" />
    <circle cx="90" cy="62" r="6" fill="#FFCC66" />
    <text x="60" y="78" fontSize="9" textAnchor="middle" fill="white">User-Level Threads</text>
  </svg>
);

const KernelThreadsSVG = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="110" height="30" rx="4" fill="rgba(60, 80, 170, 0.3)" stroke="#6080CC" strokeWidth="2" />
    <text x="60" y="25" fontSize="10" textAnchor="middle" fill="white">User Space</text>
    <rect x="5" y="35" width="110" height="50" rx="4" fill="rgba(40, 60, 100, 0.5)" stroke="#5070B0" strokeWidth="2" />
    <text x="60" y="48" fontSize="10" textAnchor="middle" fill="white">Kernel Space</text>
    <circle cx="30" cy="65" r="6" fill="#FF9966" />
    <circle cx="50" cy="65" r="6" fill="#66CCFF" />
    <circle cx="70" cy="65" r="6" fill="#99FF99" />
    <circle cx="90" cy="65" r="6" fill="#FFCC66" />
    <text x="60" y="80" fontSize="9" textAnchor="middle" fill="white">Kernel Threads</text>
  </svg>
);

const HybridThreadsSVG = () => (
  <svg width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5" width="110" height="40" rx="4" fill="rgba(60, 80, 170, 0.3)" stroke="#6080CC" strokeWidth="2" />
    <text x="60" y="18" fontSize="10" textAnchor="middle" fill="white">User Space</text>
    <circle cx="25" cy="28" r="5" fill="#FF9966" />
    <circle cx="40" cy="28" r="5" fill="#66CCFF" />
    <circle cx="55" cy="28" r="5" fill="#FFCC66" />
    <circle cx="75" cy="28" r="5" fill="#99FF99" />
    <circle cx="90" cy="28" r="5" fill="#FF99CC" />
    <circle cx="105" cy="28" r="5" fill="#99CCFF" />
    <text x="60" y="40" fontSize="8" textAnchor="middle" fill="white">User Threads</text>
    
    <rect x="5" y="45" width="110" height="40" rx="4" fill="rgba(40, 60, 100, 0.5)" stroke="#5070B0" strokeWidth="2" />
    <text x="60" y="57" fontSize="10" textAnchor="middle" fill="white">Kernel Space</text>
    <circle cx="35" cy="72" r="6" fill="#FF9966" />
    <circle cx="60" cy="72" r="6" fill="#66CCFF" />
    <circle cx="85" cy="72" r="6" fill="#99FF99" />
    <text x="60" y="85" fontSize="8" textAnchor="middle" fill="white">Kernel Threads</text>
    
    <line x1="25" y1="33" x2="35" y2="66" stroke="#FF9966" strokeWidth="1.5" strokeDasharray="2,1" />
    <line x1="40" y1="33" x2="35" y2="66" stroke="#66CCFF" strokeWidth="1.5" strokeDasharray="2,1" />
    <line x1="55" y1="33" x2="35" y2="66" stroke="#FFCC66" strokeWidth="1.5" strokeDasharray="2,1" />
    <line x1="75" y1="33" x2="60" y2="66" stroke="#99FF99" strokeWidth="1.5" strokeDasharray="2,1" />
    <line x1="90" y1="33" x2="85" y2="66" stroke="#FF99CC" strokeWidth="1.5" strokeDasharray="2,1" />
    <line x1="105" y1="33" x2="85" y2="66" stroke="#99CCFF" strokeWidth="1.5" strokeDasharray="2,1" />
  </svg>
);

const MultiThreadingModes: React.FC = () => {
  return (
    <Slide title="Multi-threading Modes and Thread Operations">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <IntroText>
            Different multi-threading implementations balance performance, resource usage, and parallelism through various threading models.
            Each model offers distinct advantages and trade-offs in how threads are created and managed.
          </IntroText>
          
          <SectionsContainer>
            <Section>
              <SectionTitle>Threading Models</SectionTitle>
              <ModelsContainer>
                <ModelCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <ModelDiagram>
                    <UserThreadsSVG />
                  </ModelDiagram>
                  <ModelContent>
                    <ModelTitle>User-Mode Threading</ModelTitle>
                    <ModelDescription>
                      Threads managed entirely by application libraries in user space without kernel awareness. 
                      Fast and flexible but lacks true parallelism and can suffer from blocking issues.
                    </ModelDescription>
                  </ModelContent>
                </ModelCard>
                
                <ModelCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <ModelDiagram>
                    <KernelThreadsSVG />
                  </ModelDiagram>
                  <ModelContent>
                    <ModelTitle>Kernel-Mode Threading</ModelTitle>
                    <ModelDescription>
                      Threads managed directly by the operating system kernel. Provides true parallelism 
                      with CPU cores and better system integration, but higher overhead for creation and switching.
                    </ModelDescription>
                  </ModelContent>
                </ModelCard>
                
                <ModelCard
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <ModelDiagram>
                    <HybridThreadsSVG />
                  </ModelDiagram>
                  <ModelContent>
                    <ModelTitle>Hybrid Threading (Many-to-Many)</ModelTitle>
                    <ModelDescription>
                      User threads multiplexed onto kernel threads, combining advantages of both models. 
                      Balances resource utilization with performance but adds implementation complexity.
                    </ModelDescription>
                  </ModelContent>
                </ModelCard>
              </ModelsContainer>
            </Section>
            
            <Section>
              <SectionTitle>Key Thread Operations</SectionTitle>
              <OperationsContainer>
                <OperationCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <OperationIcon>🔄</OperationIcon>
                  <OperationContent>
                    <OperationTitle>Thread Creation</OperationTitle>
                    <OperationDescription>
                      Creating new threads with initial state, stack space, 
                      and entry point function (e.g., pthread_create in C)
                    </OperationDescription>
                  </OperationContent>
                </OperationCard>
                
                <OperationCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <OperationIcon>🛑</OperationIcon>
                  <OperationContent>
                    <OperationTitle>Thread Termination</OperationTitle>
                    <OperationDescription>
                      Voluntarily finishing execution or being forcibly terminated, 
                      with optional result passing (pthread_exit, pthread_cancel)
                    </OperationDescription>
                  </OperationContent>
                </OperationCard>
                
                <OperationCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <OperationIcon>🔄</OperationIcon>
                  <OperationContent>
                    <OperationTitle>Synchronization</OperationTitle>
                    <OperationDescription>
                      Coordinating thread execution using mutexes, semaphores, 
                      condition variables, and other primitives to avoid race conditions
                    </OperationDescription>
                  </OperationContent>
                </OperationCard>
                
                <OperationCard
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <OperationIcon>⏳</OperationIcon>
                  <OperationContent>
                    <OperationTitle>Scheduling</OperationTitle>
                    <OperationDescription>
                      Thread prioritization and CPU time allocation, usually handled by 
                      the kernel in kernel-mode or library in user-mode threading
                    </OperationDescription>
                  </OperationContent>
                </OperationCard>
              </OperationsContainer>
            </Section>
          </SectionsContainer>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default MultiThreadingModes; 