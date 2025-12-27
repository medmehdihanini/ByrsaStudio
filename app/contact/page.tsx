import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Start Your Game Development Project",
  description: "Get in touch with Byrsa Studio to discuss your game development project. We specialize in Unity, Unreal Engine, VR, AR, MR development. Email us at jawher.inbox@gmail.com or schedule a consultation.",
  keywords: [
    "contact game developers",
    "hire game development studio",
    "game development consultation",
    "Unity developers for hire",
    "Unreal Engine developers",
    "VR development contact",
    "game development inquiry",
  ],
  openGraph: {
    title: "Contact Byrsa Studio - Let's Create Your Game",
    description: "Ready to start your game development project? Contact our expert team today.",
    url: "https://byrsastudio.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://byrsastudio.com/contact",
  },
};

export default function ContactPage() {
  // JSON-LD for Contact Page
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Byrsa Studio',
    description: 'Get in touch with Byrsa Studio for game development services',
    url: 'https://byrsastudio.com/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Byrsa Studio',
      email: 'jawher.inbox@gmail.com',
      url: 'https://byrsastudio.com',
    },
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">Contact</h1>
        <p className="text-2xl text-gray-400">Coming Soon</p>
      </div>
    </div>
  );
}
