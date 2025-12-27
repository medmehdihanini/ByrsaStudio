import LenisProvider from "./components/LenisProvider";
import UnifiedBackground from "./components/UnifiedBackground";
import IntroAnimation from "./components/IntroAnimation";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Testimonials from "./components/sections/Testimonials";
import ContactCTA from "./components/sections/ContactCTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Professional Game Development Studio",
  description: "Professional game development studio specializing in Unity, Unreal Engine, VR/AR/MR experiences, 3D modeling, and cross-platform games. Creating immersive gaming experiences worldwide.",
  openGraph: {
    title: "Byrsa Studio - Professional Game Development Studio",
    description: "Professional game development studio specializing in Unity, Unreal Engine, VR/AR/MR experiences, 3D modeling, and cross-platform games.",
    url: "https://byrsastudio.com",
    type: "website",
  },
  alternates: {
    canonical: "https://byrsastudio.com",
  },
};

export default function Home() {
  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Byrsa Studio',
    url: 'https://byrsastudio.com',
    logo: 'https://byrsastudio.com/assets/mainlogo.png',
    description: 'Professional game development studio specializing in Unity, Unreal Engine, VR, AR, MR experiences, 3D modeling, and animation.',
    email: 'jawher.inbox@gmail.com',
    sameAs: [],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Global',
    },
    founder: {
      '@type': 'Person',
      name: 'Jawher Ben Jeddou',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '10+',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
    },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '6',
      offers: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Game Development',
            description: 'End-to-end game development from concept to launch',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'VR Development',
            description: 'Immersive Virtual Reality experiences',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AR Development',
            description: 'Augmented Reality solutions',
          },
        },
      ],
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://byrsastudio.com',
      },
    ],
  };

  return (
    <LenisProvider>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      
      <IntroAnimation />
      <UnifiedBackground />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <ContactCTA />
      </main>
    </LenisProvider>
  );
}
