import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Ensure the root is absolute to avoid warnings and improve stability on Windows
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;

