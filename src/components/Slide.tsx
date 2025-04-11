import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Slide props interface
interface SlideProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

// Styled components
const SlideContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

// Animation variants
const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

// Title and subtitle components
const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  text-align: center;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
`;

const SubtitleText = styled.h2`
  font-size: 1.2rem;
  color: var(--primary-light);
  font-weight: 500;
  opacity: 0.9;
`;

// Slide component
const Slide: React.FC<SlideProps> = ({ children, title, subtitle }) => {
  return (
    <SlideContainer
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6 }}
      variants={slideVariants}
    >
      {/* Visual flash effect on slide transition */}
      <TransitionFlash 
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.7, 0] }}
        transition={{ duration: 0.6, times: [0, 0.1, 1] }}
      />
      <ScanLines />
      <PanelContent>
        {(title || subtitle) && (
          <TitleContainer>
            {title && <TitleText>{title}</TitleText>}
            {subtitle && <SubtitleText>{subtitle}</SubtitleText>}
          </TitleContainer>
        )}
        {children}
      </PanelContent>
    </SlideContainer>
  );
};

// Scan lines overlay effect
const ScanLines = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 1px,
    rgba(0, 0, 0, 0.1) 1px,
    rgba(0, 0, 0, 0.1) 2px
  );
  pointer-events: none;
  z-index: 20;
  opacity: 0.2;
`;

const PanelContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
  padding: 20px;
`;

// Flash effect for slide transitions
const TransitionFlash = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary);
  z-index: 30;
  pointer-events: none;
`;

export default Slide; 