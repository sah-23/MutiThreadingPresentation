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
  padding-top: 0;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  width: 95%;
  max-width: 1300px;
  gap: 1.5rem;
  margin-top: 1.2rem;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled(motion.div)<{ borderColor?: string, minHeight?: string }>`
  background: rgba(25, 35, 60, 0.8);
  border-radius: 12px;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid ${props => props.borderColor || 'rgba(100, 120, 200, 0.3)'};
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-height: ${props => props.minHeight || 'auto'};
`;

const CardTitle = styled.h3<{ color?: string }>`
  font-size: 1.2rem;
  color: ${props => props.color || 'var(--primary)'};
  margin-bottom: 0.8rem;
  font-weight: 600;
  text-align: center;
  border-bottom: 1px solid rgba(100, 120, 200, 0.3);
  padding-bottom: 0.5rem;
`;

const CardContent = styled.div`
  font-size: 0.9rem;
`;

const OsAndCpu2: React.FC = () => {
  return (
    <Slide title="The OS and the CPU" subtitle="Hardware Features and Relationship">
      <ContentContainer>
        <Row>
          <Card 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            minHeight="320px"
          >
            <CardTitle>OS-CPU Relationship in Process Management</CardTitle>
            <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Row style={{ width: '100%', height: '100%' }}>
                <Column>
                  <div style={{ 
                    border: '1px solid rgba(106, 217, 126, 0.3)', 
                    borderRadius: '8px', 
                    padding: '0.95rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.05rem', 
                      color: 'rgba(106, 217, 126, 0.9)', 
                      marginBottom: '0.6rem',
                      textAlign: 'center' 
                    }}>OS Hardware Support</h4>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.6rem',
                      justifyContent: 'center',
                      flex: 1
                    }}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        style={{ 
                          background: 'rgba(106, 217, 126, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>📊</div>
                        <div>Process Scheduling</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        style={{ 
                          background: 'rgba(106, 217, 126, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>🔄</div>
                        <div>Context Switching</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        style={{ 
                          background: 'rgba(106, 217, 126, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>📝</div>
                        <div>Resource Tracking</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                        style={{ 
                          background: 'rgba(106, 217, 126, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>🧩</div>
                        <div>Memory Management</div>
                      </motion.div>
                    </div>
                  </div>
                </Column>
                
                <Column>
                  <div style={{ 
                    border: '1px solid rgba(74, 144, 226, 0.3)', 
                    borderRadius: '8px', 
                    padding: '0.95rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}>
                    <h4 style={{ 
                      fontSize: '1.05rem', 
                      color: 'rgba(74, 144, 226, 0.9)', 
                      marginBottom: '0.6rem',
                      textAlign: 'center' 
                    }}>CPU Hardware Features</h4>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.6rem',
                      justifyContent: 'center',
                      flex: 1
                    }}>
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        style={{ 
                          background: 'rgba(74, 144, 226, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>🔍</div>
                        <div>MMU (Memory Management Unit)</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.6 }}
                        style={{ 
                          background: 'rgba(74, 144, 226, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>⚡</div>
                        <div>Cache Hierarchies</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        style={{ 
                          background: 'rgba(74, 144, 226, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>⏰</div>
                        <div>Hardware Timers</div>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        style={{ 
                          background: 'rgba(74, 144, 226, 0.2)', 
                          padding: '0.5rem', 
                          borderRadius: '6px',
                          width: '45%',
                          textAlign: 'center',
                          fontSize: '0.85rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>🔧</div>
                        <div>System Call Instructions</div>
                      </motion.div>
                    </div>
                  </div>
                </Column>
              </Row>
            </CardContent>
          </Card>
        </Row>
        
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '65%',
          maxWidth: '850px',
          marginTop: '420px'
        }}>
          <Card 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CardTitle>Interaction Between OS and CPU</CardTitle>
            <CardContent>
              <div style={{ 
                display: 'flex', 
                width: '100%', 
                height: 'auto', 
                alignItems: 'center', 
                justifyContent: 'center', 
                gap: '1.8rem',
                padding: '0.7rem 0'
              }}>
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{ 
                    width: '30%', 
                    background: 'rgba(106, 217, 126, 0.1)', 
                    border: '1px solid rgba(106, 217, 126, 0.3)',
                    borderRadius: '8px',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ fontSize: '2.4rem', marginBottom: '0.6rem' }}>🖥️</div>
                  <div style={{ fontSize: '1.1rem', textAlign: 'center', color: 'rgba(106, 217, 126, 0.9)', marginBottom: '0.4rem' }}>Operating System</div>
                  <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>Manages resources and provides services</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '1.5rem',
                    width: '15%'
                  }}
                >
                  <div style={{ 
                    width: '30px', 
                    height: '30px', 
                    borderTop: '2px solid rgba(255, 255, 255, 0.3)',
                    borderRight: '2px solid rgba(255, 255, 255, 0.3)',
                    transform: 'rotate(45deg)'
                  }}></div>
                  
                  <div style={{ 
                    width: '30px', 
                    height: '30px', 
                    borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                    borderLeft: '2px solid rgba(255, 255, 255, 0.3)',
                    transform: 'rotate(45deg)'
                  }}></div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ 
                    width: '30%', 
                    background: 'rgba(74, 144, 226, 0.1)', 
                    border: '1px solid rgba(74, 144, 226, 0.3)',
                    borderRadius: '8px',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ fontSize: '2.4rem', marginBottom: '0.6rem' }}>⚙️</div>
                  <div style={{ fontSize: '1.1rem', textAlign: 'center', color: 'rgba(74, 144, 226, 0.9)', marginBottom: '0.4rem' }}>CPU</div>
                  <div style={{ fontSize: '0.9rem', textAlign: 'center' }}>Executes instructions and processes data</div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ContentContainer>
    </Slide>
  );
};

export default OsAndCpu2; 