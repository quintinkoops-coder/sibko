import type { NextConfig } from "next";
import { initOpenNext } from "@opennextjs/cloudflare";

// Explicitly initialize the modern Cloudflare edge context extension
initOpenNext();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// ORIGINAL CONFIGURATION PRESERVED BELOW:
// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//   /* config options here */
// };
// export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
