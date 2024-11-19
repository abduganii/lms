/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains:["min-just-api.darkspace.uz",'lms.adliya.uz'],
        unoptimized: true, // Отключает оптимизацию изображений
      },
     
};

export default nextConfig;