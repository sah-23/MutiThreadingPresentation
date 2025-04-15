import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem 1rem 1.5rem;
  justify-content: flex-start;
  padding-top: 2.5rem;
  align-items: center;
  margin-top: -1.5rem;
`;

const Card = styled(motion.div)`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(100, 120, 200, 0.3);
  width: 80%;
  max-width: 850px;
`;

const TitleContainer = styled.div`
  margin-bottom: 1.2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.7rem;
  color: var(--primary);
  margin-bottom: 0.3rem;
  font-weight: 600;
  text-align: center;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BenefitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const BenefitItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const BenefitIcon = styled(motion.div)`
  min-width: 45px;
  height: 45px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--secondary), var(--primary));
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const BenefitContent = styled.div`
  flex: 1;
`;

const BenefitTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin-bottom: 0.4rem;
  font-weight: 600;
`;

const BenefitDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
`;

const UseCaseContainer = styled(motion.div)`
  margin-top: 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1rem;
  border-left: 4px solid var(--accent);
`;

const UseCaseTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--accent);
  margin-bottom: 0.5rem;
`;

const UseCaseContent = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.4;
`;

const BenefitsOfMultiThreading: React.FC = () => {
  return (
    <Slide title="Benefits of Multi-Threading" subtitle="Why threads are essential in modern applications">
      <ContentContainer>
        <Card
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <TitleContainer>
            <Title>Advantages of Using Threads</Title>
          </TitleContainer>
          
          <BenefitsContainer>
            <BenefitItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BenefitIcon
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                1
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Improved Performance & Responsiveness</BenefitTitle>
                <BenefitDescription>
                  Multi-threaded applications execute faster by utilizing CPU cores efficiently. 
                  Tasks can run in parallel, leading to performance gains. UI operations remain 
                  responsive on separate threads from intensive tasks.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            
            <BenefitItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <BenefitIcon
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                2
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Faster Context Switching</BenefitTitle>
                <BenefitDescription>
                  Context switching between threads is significantly faster than between processes. 
                  Threads share memory space, allowing the OS to switch between them with minimal 
                  overhead for more efficient CPU utilization.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            
            <BenefitItem
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <BenefitIcon
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                3
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Resource Optimization</BenefitTitle>
                <BenefitDescription>
                  Threads share memory space and resources of their parent process, making them 
                  lightweight and efficient compared to multiple processes. This results in lower
                  memory usage and better system resource utilization.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
          </BenefitsContainer>
          
          <UseCaseContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <UseCaseTitle>When Threads Are Absolutely Necessary</UseCaseTitle>
            <UseCaseContent>
              Some applications fundamentally require multi-threading. Real-time systems like 
              video games, multimedia software, and trading platforms need concurrent processing.
              Web browsers use multiple threads for rendering, JavaScript, and network requests.
              Without multi-threading, these apps would experience poor performance and lag.
            </UseCaseContent>
          </UseCaseContainer>
          
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default BenefitsOfMultiThreading; 