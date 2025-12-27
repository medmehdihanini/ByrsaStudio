import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Byrsa Studio - Game Development Agency',
    short_name: 'Byrsa Studio',
    description: 'Professional game development studio specializing in Unity, Unreal Engine, VR, AR, MR experiences, 3D modeling, animation, and cross-platform game development for global clients.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#a855f7',
    icons: [
      {
        src: '/assets/mainlogo.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/assets/mainlogo.png',
        sizes: 'any',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
