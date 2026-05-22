// Server entry point for TanStack Start (Nitro / Vercel deployment).
// This file is referenced by vite.config.ts → tanstackStart.server.entry.

import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";

export default createStartHandler(defaultStreamHandler);
