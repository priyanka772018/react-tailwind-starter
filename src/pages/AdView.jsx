import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const AdView = () => {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const current = mountRef.current;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, current.clientWidth / current.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(current.clientWidth, current.clientHeight);
      current.appendChild(renderer.domElement);

      // Light
      const light = new THREE.AmbientLight(0xffffff); 
      scene.add(light);

      // Cube
      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshStandardMaterial({ color: "#4f46e5" });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 3;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      // Cleanup
      return () => {
        current.removeChild(renderer.domElement);
      };
    }
  }, [loading]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 text-center">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">
        Experience Print Come to Life
      </h1>

      {loading ? (
        <p className="text-gray-600 animate-pulse text-lg">Loading AR Scene...</p>
      ) : (
        <>
          <div
            ref={mountRef}
            className="w-[360px] h-[400px] border rounded-xl shadow-lg mb-6"
          />
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
            Buy Now
          </button>

          {/* Dummy Analytics */}
          <div className="mt-10 max-w-md w-full text-left">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Campaign Analytics
            </h2>
            <ul className="text-gray-600">
              <li>📈 Scans: <strong>527</strong></li>
              <li>⏱ Avg. Time Spent: <strong>51s</strong></li>
              <li>📍 Region: <strong>India</strong></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default AdView;
