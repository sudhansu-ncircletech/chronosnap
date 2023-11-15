import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/util.js";
import { Group } from "three";

const ParticleRing = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <Canvas
        camera={{ position: [-12, 7.5, 5] }}
        style={{ height: "100vh" }}
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <h1
        className="appHeader"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: 600,
          fontFamily: "Montserrat",
          fontSize: "2rem",
          pointerEvents: "none",
          color: "#ffffff",
        }}
      >
        Timeline Infographic
      </h1>
      <p
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: 200,
          fontFamily: "Montserrat",
          fontSize: "1rem",
          cursor: "pointer",
          color: "#ffffff",
        }}
        onClick={() => navigate("/about")}
      >
        Click Here to know more details about <b>nCircle Tech</b> journey over the years
      </p>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(new Group());

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
