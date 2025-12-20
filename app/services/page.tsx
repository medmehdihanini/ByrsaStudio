export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-32 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-bold text-white mb-6">Our Services</h1>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          We specialize in creating immersive gaming experiences that captivate players worldwide.
          Our team of expert developers brings your vision to life with cutting-edge technology.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Game Development</h2>
            <p className="text-gray-300 leading-relaxed">
              Full-cycle game development from concept to launch. We build engaging gameplay 
              mechanics, stunning visuals, and optimized performance across all platforms.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">3D Modeling & Animation</h2>
            <p className="text-gray-300 leading-relaxed">
              Create breathtaking 3D assets and fluid character animations that bring 
              your game world to life with professional quality and attention to detail.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">Game Design</h2>
            <p className="text-gray-300 leading-relaxed">
              Strategic game design that balances fun, challenge, and player engagement. 
              We craft compelling narratives and intuitive gameplay systems.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-lg backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-4">QA & Testing</h2>
            <p className="text-gray-300 leading-relaxed">
              Comprehensive quality assurance to ensure your game runs flawlessly. 
              We identify bugs, optimize performance, and polish every detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
