import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import GlobalStyles from './styles/GlobalStyles';
import Slide from './components/Slide';
import BackgroundEffect from './components/BackgroundEffect';
import Controls from './components/Controls';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import GridForeground from './components/GridForeground';
import SlideInput from './components/SlideInput';

// Import our slides
import Introduction from './slides/Introduction';
import PresentationOverview from './slides/PresentationOverview';
import JobsVsProcesses from './slides/JobsVsProcesses';
import OsAndCpu from './slides/OsAndCpu';
import OsAndCpu2 from './slides/OsAndCpu2';
import SequentialProgramming from './slides/SequentialProgramming';
import Chrome from './slides/Chrome';
import MultiThreadingTimeSlicing from './slides/MultiThreadingTimeSlicing';
import TimeSlicingRelationship from './slides/TimeSlicingRelationship';
import TimeSlicingVisual from './slides/TimeSlicingVisual';
import TimeSlicing3 from './slides/TimeSlicing3';
import BenefitsOfMultiThreading from './slides/BenefitsOfMultiThreading';
import ThreadWorkingModel from './slides/ThreadWorkingModel';
import MultiThreadingModes from './slides/MultiThreadingModes';
import UserModeThreading from './slides/UserModeThreading';
import KernelModeThreading from './slides/KernelModeThreading';
import HybridThreading from './slides/HybridThreading';
import PythonMultiThreading from './slides/PythonMultiThreading';
import TimeSlicingPython from './slides/TimeSlicingPython';
import ThreadingRealWorld from './slides/ThreadingRealWorld';
import RealWorldExample from './slides/RealWorldExample';
import ContextSwitchingConcurrency from './slides/ContextSwitchingConcurrency';
import ContextSwitching2 from './slides/ContextSwitching2';
import OverheadProblem from './slides/OverheadProblem';
import ThreadSolution from './slides/ThreadSolution';
import ConcurrencyVsParallelism from './slides/ConcurrencyVsParallelism';
import ThreadVsProcess from './slides/ThreadVsProcess';
import ProcessVsThread from './slides/ProcessVsThread';
import ThreadVsCpuCore from './slides/ThreadVsCpuCore';
import ThreadVsCpuCore2 from './slides/ThreadVsCpuCore2';
import TypesOfMultiThreading from './slides/TypesOfMultiThreading';
import ThreadComponents from './slides/ThreadComponents';
import ThreadLifecycle from './slides/ThreadLifecycle';
import BasicPythonThreading from './slides/BasicPythonThreading';
import CPUArchitecture from './slides/CPUArchitecture';
import SMT from './slides/SMT';
import RaceCondition from './slides/RaceCondition';
import MutexSolution from './slides/MutexSolution';
import RaceCondition2 from './slides/RaceCondition2';
import PythonGIL from './slides/PythonGIL';
import GILsProblem from './slides/GILsProblem';
import GILStillUseful from './slides/GILStillUseful';
import PythonParallelism from './slides/PythonParallelism';
import CpuBoundExample from './slides/CpuBoundExample';
import GilExample from './slides/GilExample';
import MultiprocessingExample from './slides/MultiprocessingExample';
import TheEnd from './slides/TheEnd';

// Custom cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number, y: number, opacity: number }>>([]);
  const [isMoving, setIsMoving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  const inactivityTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Make cursor visible again if it was hidden
      setIsVisible(true);
      
      // Set moving state to true
      setIsMoving(true);
      
      // Add new position to trail only while moving
      setTrail(prevTrail => {
        const newTrail = [{ x: e.clientX, y: e.clientY, opacity: 1 }, ...prevTrail];
        return newTrail.slice(0, 10).map((point, index) => ({
          ...point,
          opacity: 1 - (index * 0.1)
        }));
      });
      
      // Clear any existing timeout
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      
      // Reset inactivity timer
      if (inactivityTimeoutRef.current) {
        window.clearTimeout(inactivityTimeoutRef.current);
      }
      
      // Set timeout to clear trail after movement stops
      timeoutRef.current = window.setTimeout(() => {
        setIsMoving(false);
        setTrail([]);
      }, 50); // Immediate effect (50ms delay for detection)
      
      // Set inactivity timeout (5 seconds)
      inactivityTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial inactivity timeout
    inactivityTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      
      if (inactivityTimeoutRef.current) {
        window.clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, []);

  // Only render the cursor components if it's visible
  if (!isVisible) return null;

  return (
    <>
      {/* Cursor trail - only shown while moving */}
      {isMoving && trail.map((point, index) => (
        <div 
          key={`trail-${index}`}
          className="cursor-trail"
          style={{ 
            left: `${point.x}px`, 
            top: `${point.y}px`,
            opacity: point.opacity
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div 
        className={`custom-cursor ${isActive ? 'active' : ''}`} 
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`
        }}
      />
    </>
  );
};

const AppContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #1a2980 0%, #0f0c29 100%);
  /* Add support for zoom functionality */
  will-change: transform;
  transform-origin: center center;
`;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const PresentationContainer = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 90%;
  height: 85%;
  max-width: 1600px;
  margin-top: -30px; /* Move it slightly up */
`;

const SlideContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
`;

const NavigationOverlay = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 100;
`;

const NavigationButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: linear-gradient(90deg, #00b4d8, #90e0ef);
  transition: width 0.3s ease;
`;

const SlideWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const AppContent: React.FC = () => {
  const { currentSlide, totalSlides, goToNextSlide, goToPreviousSlide, setTotalSlides } = useNavigation();

  const slides = [
    // Introduction
    <Introduction />,
    
    // Presentation Overview
    <PresentationOverview />,
    
    // Jobs vs Processes
    <JobsVsProcesses />,
    
    // The OS and the CPU
    <OsAndCpu />,
    
    // The OS and the CPU - Part 2
    <OsAndCpu2 />,
    
    // Sequential Programming
    <SequentialProgramming />,
    
    // Chrome
    <Chrome />,
    
    // Concurrency vs Parallelism
    <ConcurrencyVsParallelism />,
    
    // Real World Example
    <RealWorldExample />,
    
    // Context Switching in Concurrency
    <ContextSwitchingConcurrency />,
    
    // Context Switching 2
    <ContextSwitching2 />,
    
    // The Overhead Problem
    <OverheadProblem />,
    
    // The Thread Solution
    <ThreadSolution />,
    
    // Thread vs Process
    <ThreadVsProcess />,
    
    // Process vs. Thread (Chrome's Architecture)
    <ProcessVsThread />,
    
    // Thread vs CPU Core
    <ThreadVsCpuCore />,
    
    // Thread vs CPU Core - Relationship
    <ThreadVsCpuCore2 />,
    
    // Multi-Threading and Time Slicing
    <MultiThreadingTimeSlicing />,
    
    // Time Slicing Relationship
    <TimeSlicingRelationship />,
    
    // Time Slicing Visualization
    <TimeSlicingVisual />,
    
    // Time Slicing Key Points
    <TimeSlicing3 />,
    
    // Benefits of Multi-Threading
    <BenefitsOfMultiThreading />,
    
    // How Do We Actually Work With Threads
    <ThreadWorkingModel />,
    
    // Multi-threading Modes and Thread Operations
    <MultiThreadingModes />,
    
    // User Mode Threading
    <UserModeThreading />,
    
    // Kernel Mode Threading
    <KernelModeThreading />,
    
    // Hybrid Threading Model
    <HybridThreading />,
    
    // Python Multi-Threading
    <PythonMultiThreading />,
    
    // Race Condition
    <RaceCondition />,
    
    // Mutex Solution
    <MutexSolution />,
    
    // Race Condition 2
    <RaceCondition2 />,
    
    // Python GIL
    <PythonGIL />,
    
    // GIL's Problem
    <GILsProblem />,
    
    // Why is GIL still useful
    <GILStillUseful />,
    
    // Then How to really multi thread in python
    <PythonParallelism />,
    
    // An Example
    <CpuBoundExample />,
    
    // GIL Example
    <GilExample />,
    
    // Multi processing Example
    <MultiprocessingExample />,
    
    // The End
    <TheEnd />
  ];

  // Set total slides when component mounts
  React.useEffect(() => {
    setTotalSlides(slides.length);
  }, [setTotalSlides]);

  // Add keyboard navigation effect directly in AppContent
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (currentSlide < totalSlides) {
          goToNextSlide();
        }
      } else if (e.key === 'ArrowLeft') {
        goToPreviousSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPreviousSlide, currentSlide, totalSlides]);

  React.useEffect(() => {
    // Add body styles to support zoom
    document.body.style.overflow = 'hidden';
    document.body.style.width = '100vw';
    document.body.style.height = '100vh';
    
    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, []);

  return (
    <AppContainer>
      <GlobalStyles />
      <SlideInput />
      
      {/* Custom Cursor */}
      {/* <CustomCursor /> */}
      
      {/* 3D Background */}
      <CanvasContainer>
        <Canvas>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <BackgroundEffect />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </CanvasContainer>
      
      {/* Grid Foreground */}
      <GridForeground />
      
      {/* Presentation Container with Content Only */}
      <PresentationContainer>
        {/* Main Presentation Content with AnimatePresence for transitions */}
        <ContentContainer>
          <AnimatePresence mode="wait">
            <SlideWrapper
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {slides[currentSlide - 1]}
            </SlideWrapper>
          </AnimatePresence>
        </ContentContainer>
      </PresentationContainer>
      
      {/* Controls component with no visible UI, just for keyboard handling */}
      <Controls 
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={goToNextSlide}
        onPrevious={goToPreviousSlide}
      />
    </AppContainer>
  );
};

const App: React.FC = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;