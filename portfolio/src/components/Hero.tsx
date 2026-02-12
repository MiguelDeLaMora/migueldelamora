import * as THREE from "three";
import { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  MeshDistortMaterial,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useSpring as useSpringThree, a as a3 } from "@react-spring/three";
import { motion, AnimatePresence } from "framer-motion";

// Wrap de drei material para animarlo con react-spring (igual que el sandbox)
const AnimatedMaterial = a3(MeshDistortMaterial);

function Scene({
  setDarkMode,
}: {
  setDarkMode: (v: boolean) => void;
}) {
  const sphere = useRef<THREE.Mesh>(null!);
  const light = useRef<THREE.PointLight>(null!);

  const [mode, setMode] = useState(false);
  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  // ✅ Estado reactivo para baseScale que se actualiza con resize
  const [baseScale, setBaseScale] = useState(() => {
    const width = window.innerWidth;
    if (width < 640) return 1.0;        // Mobile más grande
    if (width < 768) return 1.0;        // Mobile grande
    if (width < 1024) return 1.1;       // Tablet
    return 1.25;                         // Desktop
  });

  // ✅ Listener de resize para actualizar baseScale
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setBaseScale(1.0);
      else if (width < 768) setBaseScale(1.0);
      else if (width < 1024) setBaseScale(1.1);
      else setBaseScale(1.25);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cursor igual que el sandbox
  useEffect(() => {
    document.body.style.cursor = hovered
      ? "none"
      : `url("data:image/svg+xml;base64,${btoa(
          '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="10" fill="#E8B059"/></svg>'
        )}"), auto`;

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // Follow mouse + floating
  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;

    if (sphere.current) {
      sphere.current.position.x = THREE.MathUtils.lerp(
        sphere.current.position.x,
        hovered ? state.mouse.x / 2 : 0,
        0.2
      );

      sphere.current.position.y = THREE.MathUtils.lerp(
        sphere.current.position.y,
        Math.sin(state.clock.elapsedTime / 1.5) / 6 + (hovered ? state.mouse.y / 2 : 0),
        0.2
      );
    }
  });

  // Springs (three)
  const [springs, api] = useSpringThree(() => ({
    wobble: 1,
    coat: 1,
    ambient: 0.5,
    env: 1,
    color: "white",
  }));

  useEffect(() => {
    api.start({
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: mode && !hovered ? 0.04 : 1,
      ambient: mode && !hovered ? 1.5 : 0.5,
      env: mode && !hovered ? 0.4 : 1,
      color: hovered ? "#E8B059" : mode ? "#202020" : "white",
      config: hovered
        ? { mass: 2, tension: 1000, friction: 10 }
        : { mass: 1, tension: 170, friction: 26 },
    });
  }, [api, mode, hovered, down]);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a3.ambientLight intensity={springs.ambient} />
        <a3.pointLight
          ref={light}
          position-z={-15}
          intensity={springs.env}
          color="#F8C069"
        />
      </PerspectiveCamera>

      <Suspense fallback={null}>
        <a3.mesh
          ref={sphere}
          scale={springs.wobble.to((w) => w * baseScale) as any}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            setMode((m) => {
              const next = !m;
              setDarkMode(next);
              return next;
            });
          }}
        >
          <sphereGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={springs.color}
            envMapIntensity={springs.env}
            clearcoat={springs.coat}
            clearcoatRoughness={0}
            metalness={0.1}
            distort={0.35}
            speed={2}
          />
        </a3.mesh>

        <Environment preset="warehouse" />

        <ContactShadows
          rotation={[Math.PI / 2, 0, 0]}
          position={[0, -1.6, 0]}
          opacity={mode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={1.6}
        />
      </Suspense>
    </>
  );
}

export default function Hero({ 
  darkMode, 
  setDarkMode 
}: { 
  darkMode: boolean; 
  setDarkMode: (v: boolean) => void 
}) {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // ✅ Detectar scroll para ocultar/mostrar el indicador
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Mostrar si está arriba (menos de 100px de scroll)
      setShowScrollIndicator(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main 
      style={{ 
        backgroundColor: darkMode ? "#202020" : "#E4E4E4",
        transition: 'background-color 0.35s ease-out'
      }} 
      className="min-h-screen w-full overflow-hidden relative"
    >
      <div className="min-h-screen w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-0">
        {/* IZQUIERDA: TEXTO */}
        <motion.div
          className="relative z-10 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-0 pointer-events-none order-2 lg:order-1"
          animate={{ color: darkMode ? "#f0f0f0" : "#444684" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{ backgroundColor: 'transparent' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-left w-full"
          >
            <h1
              className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl leading-[1.1] sm:leading-tight w-full"
              style={{
                fontFamily: "Inter, sans-serif",
                letterSpacing: "0.25em",
                lineHeight: "1.3em",
                fontWeight: 400,
              }}
            >
              HI, I'M
              <br />
              MIGUEL
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-10 md:mt-12 max-w-xl"
          >
            <div className="text-left space-y-4 sm:space-y-6">
              {/* Títulos */}
              <div className="space-y-1">
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium">
                  FRONT END DEVELOPER
                </p>
                <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.25em] font-medium">
                  PRODUCT DESIGNER
                </p>
              </div>

              {/* Contacto */}
              <div className="space-y-1">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.12em] break-all font-light">
                  MIGUELALEJANDRODELOMORAAROCHA@GMAIL.COM
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.12em] font-light">
                  MIGUEL DE LA MORA
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* DERECHA: CANVAS */}
        <div className="relative h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-screen order-1 lg:order-2" style={{ margin: 0, padding: 0, border: 'none' }}>
          <Canvas className="h-full w-full" dpr={[1, 2]} style={{ display: 'block' }}>
            <Scene setDarkMode={setDarkMode} />
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
          </Canvas>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {showScrollIndicator && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 pointer-events-none"
          >
            <motion.span
              className="text-xs uppercase tracking-widest font-light"
              style={{ color: darkMode ? "#f0f0f0" : "#444684" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll
            </motion.span>
            
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke={darkMode ? "#f0f0f0" : "#444684"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}