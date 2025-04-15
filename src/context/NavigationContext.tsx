import React, { createContext, useContext, useState } from 'react';

// Define the shape of our navigation context
interface NavigationContextType {
  currentSlide: number;
  totalSlides: number;
  goToNextSlide: () => void;
  goToPreviousSlide: () => void;
  goToSlide: (slideNumber: number) => void;
  setTotalSlides: (total: number) => void;
  isSlideInputVisible: boolean;
  setSlideInputVisible: (visible: boolean) => void;
}

// Create the context with default placeholder values
const NavigationContext = createContext<NavigationContextType>({
  currentSlide: 1,
  totalSlides: 0,
  goToNextSlide: () => {},
  goToPreviousSlide: () => {},
  goToSlide: () => {},
  setTotalSlides: () => {},
  isSlideInputVisible: false,
  setSlideInputVisible: () => {},
});

// Provider component to wrap around the app
export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);
  const [isSlideInputVisible, setSlideInputVisible] = useState(false);

  const goToNextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  };

  return (
    <NavigationContext.Provider
      value={{
        currentSlide,
        totalSlides,
        goToNextSlide,
        goToPreviousSlide,
        goToSlide,
        setTotalSlides,
        isSlideInputVisible,
        setSlideInputVisible,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

// Custom hook for easy access to the navigation context
export const useNavigation = () => useContext(NavigationContext);

export default NavigationContext; 