import React, { useContext } from 'react';
import { NavigationContext } from '../context/NavigationContext';
import styled from 'styled-components';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 20px;
  z-index: 100;
`;

const SlideCounter = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-primary);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
`;

const EdgeNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100px;
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  
  &:hover {
    opacity: 1;
  }
  
  &.left {
    left: 0;
    background: linear-gradient(90deg, rgba(74, 144, 226, 0.2), transparent);
  }
  
  &.right {
    right: 0;
    background: linear-gradient(-90deg, rgba(74, 144, 226, 0.2), transparent);
  }
`;

const NavArrow = styled.div`
  font-size: 2rem;
  color: var(--primary);
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const Navigation: React.FC = () => {
  const { currentSlide, totalSlides, goToNextSlide, goToPreviousSlide } = useContext(NavigationContext);
  const slidesRemaining = totalSlides - currentSlide;

  return (
    <>
      <EdgeNav className="left">
        <NavArrow onClick={goToPreviousSlide}>
          <FaChevronLeft />
        </NavArrow>
      </EdgeNav>
      
      <EdgeNav className="right">
        <NavArrow onClick={goToNextSlide}>
          <FaChevronRight />
        </NavArrow>
      </EdgeNav>

      <NavigationContainer>
        <SlideCounter>
          {slidesRemaining} slides remaining
        </SlideCounter>
      </NavigationContainer>
    </>
  );
};

export default Navigation; 