import React, { Suspense } from "react"; // Import React and Suspense for lazy loading
import { Canvas } from "@react-three/fiber"; // Import Canvas for 3D rendering
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // Import 3D components and hooks

// Import a custom loader component for showing a loading state
import CanvasLoader from "./Loader";

// Earth component to load and display the 3D Earth model
const Earth = () => {
  // Load the 3D model of Earth using the useGLTF hook
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // Render the loaded model as a primitive object
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

// EarthCanvas component to render the Earth model within a Canvas
const EarthCanvas = () => {
  return (
    // Canvas component to create a 3D rendering context
    <Canvas
      shadows // Enable shadows
      frameloop="demand" // Render only when needed
      dpr={[1, 2]} // Set device pixel ratio for resolution
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer
      camera={{
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position
      }}
    >
      {/* Suspense component to show a fallback loader while the canvas is loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls to enable user interaction with the 3D model */}
        <OrbitControls
          autoRotate // Enable automatic rotation
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2} // Max angle for vertical rotation
          minPolarAngle={Math.PI / 2} // Min angle for vertical rotation
        />
        {/* Render the Earth component inside the Canvas */}
        <Earth />
        {/* Preload all assets for smoother experience */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; // Export the EarthCanvas component for use in other parts of the app
