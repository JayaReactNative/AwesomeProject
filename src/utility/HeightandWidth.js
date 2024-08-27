import { useState } from 'react';
import { useWindowDimensions } from 'react-native';

const useCustomDimensions = (widthRatio, heightRatio) => {
  const { width, height } = useWindowDimensions(); // Get device dimensions

  // Function to calculate custom dimensions based on the given ratios
  const calculateDimensions = (containerWidth, containerHeight) => ({
    width: Math.round(containerWidth * widthRatio),
    height: Math.round(containerHeight * heightRatio),
  });

  // State to store the container dimensions
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 });

  // Handler to update container dimensions
  const handleLayout = ({ nativeEvent: { layout } }) => {
    const { width, height } = layout;
    setContainerDimensions({ width, height });
  };

  // Get custom dimensions based on container size
  const customDimensions = calculateDimensions(containerDimensions.width, containerDimensions.height);

  return { customDimensions, handleLayout };
};

export default useCustomDimensions;
