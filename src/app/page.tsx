import ThreeBackground from '@/components/ThreeBackground';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 z-0 opacity-100 bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/純粋進化(Concept Promo of MI 6 phone).jpeg')",
          backgroundSize: 'cover',
          imageRendering: 'crisp-edges',
          filter: 'contrast(1.1) brightness(1.05)'
        }}
      />
      
      {/* Light Gradient Overlay for text readability */}
      <div className="fixed inset-0 z-1 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        
        {/* Footer */}
        <footer className="py-12 border-t border-yellow-500/30">
          <div className="container mx-auto px-6 text-center">
            <div className="hud-border inline-block p-4 mb-4 hud-font">
              <div className="text-yellow-400 text-sm mb-2">SYSTEM_INFO:</div>
              <div className="text-gray-400 text-xs space-y-1">
                <div>FRAMEWORK: NEXT.JS_v14.0</div>
                <div>GRAPHICS: THREE.JS_ENGINE</div>
                <div>ANIMATIONS: FRAMER_MOTION.DLL</div>
                <div>STATUS: ALL_SYSTEMS_OPERATIONAL</div>
              </div>
            </div>
            <p className="text-yellow-400 hud-font text-sm">
              © 2024 IRON_MAN_PROTOCOL.EXE • PORTFOLIO_v2.0 • CLASSIFIED
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
