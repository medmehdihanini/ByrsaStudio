import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Game Development Experts",
  description: "Learn about Byrsa Studio, a passionate team of game developers, designers, and storytellers with years of experience in Unity, Unreal Engine, VR, AR, MR development, and 3D animation. Discover our mission to create unforgettable gaming experiences.",
  keywords: [
    "about Byrsa Studio",
    "game development team",
    "professional game developers",
    "Unity experts",
    "Unreal Engine specialists",
    "VR developers",
    "game design team",
  ],
  openGraph: {
    title: "About Byrsa Studio - Professional Game Development Team",
    description: "Passionate team of game developers creating immersive experiences with cutting-edge technology.",
    url: "https://byrsastudio.com/about",
    type: "website",
  },
  alternates: {
    canonical: "https://byrsastudio.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">About</h1>
        <p className="text-2xl text-gray-400">Coming Soon</p>
      </div>
    </div>
  );
}
