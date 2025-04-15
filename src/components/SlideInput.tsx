import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigation } from '../context/NavigationContext';

const SlideInputContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 20, 50, 0.95);
  padding: 12px;
  transform: translateY(${props => props.isVisible ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  color: var(--primary);
  font-size: 1rem;
  font-weight: 500;
`;

const Input = styled.input`
  background: rgba(30, 40, 60, 0.7);
  border: 1px solid var(--primary);
  border-radius: 4px;
  color: white;
  padding: 8px 12px;
  font-size: 1rem;
  width: 100%;
  outline: none;
  
  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 2px rgba(100, 180, 255, 0.3);
  }
`;

const GoButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: var(--accent);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const SlideCountInfo = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-left: 10px;
`;

const SlideInput: React.FC = () => {
  const { isSlideInputVisible, setSlideInputVisible, goToSlide, totalSlides, currentSlide } = useNavigation();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when visible
  useEffect(() => {
    if (isSlideInputVisible && inputRef.current) {
      inputRef.current.focus();
      setInputValue('');
    }
  }, [isSlideInputVisible]);
  
  // Listen for 'u' key press to toggle visibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'u' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        setSlideInputVisible(true);
      } else if (e.key === 'Escape' && isSlideInputVisible) {
        setSlideInputVisible(false);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSlideInputVisible, setSlideInputVisible]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slideNumber = parseInt(inputValue);
    
    if (!isNaN(slideNumber)) {
      goToSlide(slideNumber);
      setSlideInputVisible(false);
    }
  };
  
  return (
    <SlideInputContainer isVisible={isSlideInputVisible}>
      <form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Go to slide:</Label>
          <Input 
            ref={inputRef}
            type="number" 
            min={1} 
            max={totalSlides}
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={`1-${totalSlides}`}
          />
          <GoButton type="submit">Go</GoButton>
          <SlideCountInfo>Current: {currentSlide} / Total: {totalSlides}</SlideCountInfo>
        </InputWrapper>
      </form>
    </SlideInputContainer>
  );
};

export default SlideInput; 