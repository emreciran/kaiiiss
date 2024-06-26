import { Html, useProgress } from "@react-three/drei"; // Import Html and useProgress from the drei library

// Component to show a loader while the canvas is loading
const CanvasLoader = () => {
  // useProgress hook provides the loading progress of assets
  const { progress } = useProgress();

  return (
    // Html component to render HTML elements inside the 3D canvas
    <Html
      as="div" // Render as a div element
      center // Center the loader in the canvas
      style={{
        display: "flex", // Use flexbox for layout
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        flexDirection: "column", // Arrange items in a column
      }}
    >
      <span className="canvas-loader"></span> {/* Loader indicator */}
      <p
        style={{
          fontSize: 14, // Text size
          color: "#F1F1F1", // Text color
          fontWeight: 800, // Text weight
          marginTop: 40, // Space above the text
        }}
      >
        {/* Display the loading progress as a percentage */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader; // Export the CanvasLoader component for use in other parts of the app
