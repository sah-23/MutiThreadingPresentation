import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface ControlsProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
}

interface ZoomStyle {
  transform: string;
  transformOrigin: string;
  transition: string;
}

const Controls: React.FC<ControlsProps> = ({ 
  onNext, 
  onPrevious 
}) => {
  const [isAltPressed, setIsAltPressed] = useState(false);
  const [zoomActive, setZoomActive] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [zoomOrigin, setZoomOrigin] = useState({ x: 50, y: 50 });

  // Add keyboard support for navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && !zoomActive) {
        onNext();
      } else if (e.key === 'ArrowLeft' && !zoomActive) {
        onPrevious();
      } else if (e.key === 'Alt') {
        e.preventDefault(); // Prevent browser's default Alt behavior
        setIsAltPressed(true);
        
        // Immediately activate zoom when Alt is pressed if not already zoomed
        if (!zoomActive) {
          setZoomActive(true);
          // Start zoom from center of screen
          setZoomOrigin({ x: 50, y: 50 });
          // Apply initial zoom effect
          document.body.style.transform = 'scale(1.5)';
          document.body.style.transformOrigin = '50% 50%';
          document.body.style.transition = 'transform 0.3s ease';
          setZoomLevel(1.5);
        }
      }
    };
    
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Alt') {
        e.preventDefault(); // Prevent browser's default Alt behavior
        setIsAltPressed(false);
        // No longer reset zoom when Alt is released - keep current zoom level
      }
    };

    // Mouse move handler for tracking position
    const handleMouseMove = (e: MouseEvent) => {
      if (isAltPressed && zoomActive) {
        // Update zoom origin to mouse position
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        setZoomOrigin({ x, y });
        document.body.style.transformOrigin = `${x}% ${y}%`;
      }
    };
    
    // Wheel handler for zoom level adjustment
    const handleWheel = (e: WheelEvent) => {
      if (isAltPressed && zoomActive) {
        e.preventDefault();
        
        // Adjust zoom level with scroll wheel
        const delta = e.deltaY < 0 ? 0.1 : -0.1;
        const newZoom = Math.max(1, Math.min(5, zoomLevel + delta));
        setZoomLevel(newZoom);
        
        // Apply zoom effect
        document.body.style.transform = `scale(${newZoom})`;
        
        // If zoom level is 1 (100%), exit zoom mode completely
        if (newZoom === 1) {
          setZoomActive(false);
          document.body.style.transform = '';
          document.body.style.transformOrigin = '';
          document.body.style.transition = 'transform 0.3s ease';
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleWheel);
    };
  }, [onNext, onPrevious, isAltPressed, zoomActive, zoomLevel, zoomOrigin]);

  useEffect(() => {
    // Add cursor style to indicate zoom mode
    if (isAltPressed) {
      document.body.style.cursor = 'zoom-in';
    } else {
      document.body.style.cursor = '';
    }

    // Add ESC key to exit zoom mode
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && zoomActive) {
        setZoomActive(false);
        document.body.style.transform = '';
        document.body.style.transformOrigin = '';
        document.body.style.transition = 'transform 0.3s ease';
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isAltPressed, zoomActive]);

  return (
    <>
      {zoomActive && (
        <ZoomIndicator>
          <span>Zoom: {Math.round(zoomLevel * 100)}% - Hold Alt+scroll to adjust - ESC to exit</span>
        </ZoomIndicator>
      )}
    </>
  );
};

const ZoomIndicator = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  z-index: 1000;
  pointer-events: none;
`;

export default Controls; 