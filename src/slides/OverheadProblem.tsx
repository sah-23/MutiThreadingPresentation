import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Slide from '../components/Slide';

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 1.5rem;
  justify-content: flex-start;
  padding-top: 3rem;
`;

const Card = styled(motion.div)<{ borderColor?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.8rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor || 'rgba(100, 120, 200, 0.3)'};
  display: flex;
  flex-direction: column;
  min-height: 65vh;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 2rem;
  margin-bottom: 1.2rem;
  height: 100%;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled(Column)`
  flex: 1.3;
`;

const MemoryDiagram = styled.div`
  background: rgba(35, 45, 70, 0.6);
  border-radius: 8px;
  border: 1px solid rgba(100, 120, 200, 0.3);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
`;

const MemoryBlock = styled.div<{ color: string }>`
  background: ${props => props.color};
  border-radius: 6px;
  padding: 0.7rem;
  color: white;
  font-size: 0.9rem;
  text-align: center;
  font-weight: 500;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  
  svg {
    width: 40px;
    height: 20px;
  }
`;

const AppDiagram = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  margin-top: 0.5rem;
  min-height: 200px;
`;

const AppContainer = styled.div<{ isActive: boolean }>`
  border: 2px solid ${props => props.isActive ? 'rgba(74, 144, 226, 0.7)' : 'rgba(100, 100, 100, 0.3)'};
  border-radius: 8px;
  padding: 1rem;
  flex: 1;
  background: ${props => props.isActive ? 'rgba(74, 144, 226, 0.1)' : 'rgba(40, 50, 80, 0.2)'};
  
  ${props => props.isActive && `
    box-shadow: 0 0 10px rgba(74, 144, 226, 0.3);
  `}
`;

const AppHeader = styled.div`
  border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
  padding-bottom: 0.6rem;
  margin-bottom: 0.6rem;
  font-weight: 600;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
`;

const Feature = styled.div`
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  
  &:before {
    content: "•";
    color: rgba(74, 144, 226, 0.8);
    margin-right: 0.3rem;
  }
`;

const MemoryInfo = styled.div<{ isHighlighted?: boolean }>`
  font-size: 0.8rem;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 0.5rem;
  margin-top: 0.6rem;
  color: ${props => props.isHighlighted ? 'rgba(255, 190, 100, 0.95)' : 'rgba(255, 255, 255, 0.8)'};
  font-family: monospace;
  
  ${props => props.isHighlighted && `
    border: 1px dashed rgba(255, 190, 100, 0.4);
  `}
`;

const ContextSwitchArrow = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;
  gap: 0.3rem;
`;

const OverheadItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
  padding: 0.7rem;
  border-radius: 8px;
  background: rgba(180, 70, 70, 0.1);
  border: 1px dashed rgba(220, 100, 100, 0.4);
`;

const IconBox = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.7rem;
  font-size: 1.3rem;
`;

const OverheadTitle = styled.div`
  font-weight: 600;
  font-size: 0.95rem;
  color: rgba(220, 100, 100, 0.9);
  margin-right: 0.4rem;
`;

const OverheadText = styled.div`
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.85);
`;

const SolutionBox = styled.div`
  background: rgba(106, 217, 126, 0.1);
  border: 1px dashed rgba(106, 217, 126, 0.4);
  border-radius: 8px;
  padding: 0.8rem 1rem;
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
`;

const SolutionText = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  font-style: italic;
  line-height: 1.4;
`;

const OverheadProblem: React.FC = () => {
  return (
    <Slide title="The Overhead Problem" subtitle="Memory Context Switching Costs">
      <ContentContainer>
        <Card 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Row>
            <Column>
              <MemoryDiagram>
                <MemoryBlock color="rgba(74, 144, 226, 0.7)">
                  Process 1 Memory Context
                </MemoryBlock>
                <Arrow>
                  <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 20L40 10L20 0V7H0V13H20V20Z" fill="rgba(255, 255, 255, 0.3)" />
                  </svg>
                </Arrow>
                <MemoryBlock color="rgba(240, 147, 43, 0.7)">
                  Process 2 Memory Context
                </MemoryBlock>
              </MemoryDiagram>
              
              <OverheadItem>
                <IconBox>⚠️</IconBox>
                <div>
                  <OverheadTitle>Memory Switch Overhead:</OverheadTitle>
                  <OverheadText>
                    Each context switch requires changing the entire memory context of the CPU, which includes:
                  </OverheadText>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', margin: '0.4rem 0 0 0.5rem' }}>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.75rem' }}>Virtual Memory Tables</span>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.75rem' }}>TLB Flush</span>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.75rem' }}>Cache Invalidation</span>
                    <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '0.2rem 0.4rem', borderRadius: '4px', fontSize: '0.75rem' }}>Heap/Stack References</span>
                  </div>
                </div>
              </OverheadItem>
            </Column>
            
            <RightColumn>
              <AppDiagram>
                <AppContainer isActive={true}>
                  <AppHeader>
                    <span>Word Processor: Edit Process</span>
                    <span style={{ fontSize: '0.8rem', background: 'rgba(106, 217, 126, 0.2)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>Active</span>
                  </AppHeader>
                  <Feature>Document content management</Feature>
                  <Feature>Text formatting</Feature>
                  <Feature>Cursor positioning</Feature>
                  <MemoryInfo isHighlighted={true}>
                    Memory: 245MB | Document data at 0x8A72F000
                  </MemoryInfo>
                </AppContainer>
                
                <ContextSwitchArrow
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Context</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)' }}>Switch</div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ContextSwitchArrow>
                
                <AppContainer isActive={false}>
                  <AppHeader>
                    <span>Word Processor: Print Process</span>
                    <span style={{ fontSize: '0.8rem', background: 'rgba(100, 100, 100, 0.2)', padding: '0.2rem 0.4rem', borderRadius: '4px' }}>Waiting</span>
                  </AppHeader>
                  <Feature>Document rendering</Feature>
                  <Feature>Printer communication</Feature>
                  <Feature>Print queue management</Feature>
                  <MemoryInfo>
                    Memory: 180MB | Duplicate document data at 0xB2F41C00
                  </MemoryInfo>
                </AppContainer>
              </AppDiagram>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '1rem' }}>
                <OverheadItem>
                  <IconBox>🔄</IconBox>
                  <div>
                    <OverheadTitle>Data Duplication:</OverheadTitle>
                    <OverheadText>
                      Both processes need the same document data, requiring either complete duplication or complex IPC
                    </OverheadText>
                  </div>
                </OverheadItem>
                
                <OverheadItem>
                  <IconBox>⏱️</IconBox>
                  <div>
                    <OverheadTitle>Latency:</OverheadTitle>
                    <OverheadText>
                      Users experience delay when switching from editing to printing due to full context switch
                    </OverheadText>
                  </div>
                </OverheadItem>
              </div>
              
              <SolutionBox>
                <IconBox style={{ color: 'rgba(106, 217, 126, 0.9)' }}>💡</IconBox>
                <SolutionText>
                  Using threads instead of processes would allow shared memory access, eliminating data duplication and reducing context switch overhead while maintaining isolation between features.
                </SolutionText>
              </SolutionBox>
            </RightColumn>
          </Row>
        </Card>
      </ContentContainer>
    </Slide>
  );
};

export default OverheadProblem; 