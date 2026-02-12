import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { Suspense } from 'react';
import WobbleScene from "ui/WobbleScene";


// Componente 3D animado - Esferas orgánicas deformadas
function AnimatedSphere() {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5} position={[2, 0, -1]}>
        <MeshDistortMaterial
          color="#444684"
          attach="material"
          distort={0.8}
          speed={2}
          roughness={0.05}
          metalness={0.05}
          transparent={true}
          opacity={0.35}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Sphere>
    </Float>
  );
}

// Esferas flotantes adicionales - Más orgánicas
function FloatingOrbs() {
  return (
    <>
      {/* Esfera grande izquierda */}
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.5}>
        <Sphere args={[0.8, 64, 64]} position={[-2.5, -0.5, 0]}>
          <MeshDistortMaterial
            color="#444684"
            distort={0.7}
            speed={1.5}
            roughness={0.05}
            metalness={0.05}
            transparent={true}
            opacity={0.3}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </Sphere>
      </Float>

      {/* Esfera pequeña arriba derecha */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.5, 64, 64]} position={[3, 2, -2]}>
          <MeshDistortMaterial
            color="#444684"
            distort={0.6}
            speed={1.8}
            roughness={0.05}
            metalness={0.05}
            transparent={true}
            opacity={0.28}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </Sphere>
      </Float>

      {/* Esfera pequeña abajo izquierda */}
      <Float speed={2.2} rotationIntensity={0.3} floatIntensity={2}>
        <Sphere args={[0.4, 64, 64]} position={[-3, -2, -1]}>
          <MeshDistortMaterial
            color="#444684"
            distort={0.5}
            speed={1.6}
            roughness={0.05}
            metalness={0.05}
            transparent={true}
            opacity={0.25}
            clearcoat={1}
            clearcoatRoughness={0}
          />
        </Sphere>
      </Float>
    </>
  );
}

const Hero = () => {
  return (
    <>
      <style>{`
        /* Asegurar que el canvas no cause problemas */
        canvas {
          outline: none;
        }
      `}</style>

      <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#E4E4E4' }}>
        
        {/* React Three Fiber 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75 }}
            style={{ background: 'transparent' }}
          >
            <Suspense fallback={null}>
              {/* Luces - Ajustadas para fondo claro */}
              <ambientLight intensity={0.8} />
              <directionalLight position={[10, 10, 5]} intensity={1.2} />
              <pointLight position={[-10, -10, -5]} intensity={0.6} color="#444684" />
              <pointLight position={[10, 10, 10]} intensity={0.4} color="#444684" />
              
              {/* Esfera principal animada */}
              <AnimatedSphere />
              
              {/* Esferas flotantes adicionales */}
              <FloatingOrbs />
              
              {/* Controles para rotar con el mouse (opcional) */}
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Suspense>
          </Canvas>
          
          {/* Overlay sutil para depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
        </div>

       {/* Content */}
<div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">

  {/* Main heading - centrado */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-center"
  >
    <h1
      className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider leading-tight"
      style={{
        color: "#444684",
        fontFamily: "Inter, sans-serif",
        letterSpacing: "0.7em",
        fontWeight: '400',
        lineHeight: "1.6em"
      }}
    >
      HI, I'M
      <br />
      MIGUEL
    </h1>
  </motion.div>

  {/* Info block - abajo y más a la derecha */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="mt-16 w-full max-w-7xl flex justify-end"
  >
    <div className="text-left space-y-6">
      {/* Roles */}
      <div className="space-y-1">
        <p className="text-sm md:text-[1rem] tracking-widest uppercase"
           style={{ color: "#444684", letterSpacing: "0.25em", fontWeight: "400" }}>
          FRONT END DEVELOPER
        </p>
        <p className="text-sm md:text-[1rem] tracking-widest font-light uppercase"
           style={{ color: "#444684", letterSpacing: "0.25em", fontWeight: "400" }}>
          PRODUCT DESIGNER
        </p>
      </div>

      {/* Contact */}
      <div className="space-y-1">
        <p className="text-xs tracking-wider font-light uppercase break-all"
           style={{ color: "#444684", letterSpacing: "0.12em", fontWeight: "300" }}>
          MIGUELALEJANDRODELOMORAAROCHA@GMAIL.COM
        </p>
        <p className="text-xs tracking-wider font-light uppercase"
           style={{ color: "#444684", letterSpacing: "0.12em", fontWeight: "300" }}>
          MIGUEL DE LA MORA
        </p>
      </div>
    </div>
  </motion.div>

</div>

        {/* CTAs en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center pb-20 px-6 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
          >
            {/* Primary CTA */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#444684' }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Ver mis proyectos
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </span>
              
              <motion.div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, #444684, #5a5fa0)' }}
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Secondary CTA */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#444684' }}
            >
              Contactar
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
            style={{ color: '#444684' }}
          >
            <span className="text-sm">Scroll</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;