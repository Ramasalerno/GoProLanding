// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = {
//   // Configuración personalizada aquí
//   basePath: '',
//   assetPrefix: 'https://gopro.ar',
//   // ...
// };


/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  // Configuración de la rutas de los archivos estáticos
  async rewrites() {
    const isProduction = process.env.NODE_ENV === 'production';

    return [
      // Ruta para servir los archivos estáticos en producción
      isProduction
        ? {
          source: '/_next/:path*',
          destination: 'https://gopro.ar/_next/:path*',
        }
        : // Ruta para servir los archivos estáticos en desarrollo
        {
          source: '/_next/:path*',
          destination: '/_next/:path*',
        },
    ];
  },
};