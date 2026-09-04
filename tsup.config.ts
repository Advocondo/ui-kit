import { defineConfig } from 'tsup';
import { readFileSync, writeFileSync } from 'node:fs';

const CLIENT_DIRECTIVE = "'use client';";

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  treeshake: true,
  external: ['react', 'react-dom'],
  // Every component here uses hooks/handlers and needs `'use client'` for Next.js App
  // Router consumers. Each source file carries its own directive for documentation,
  // but esbuild refuses to keep a directive once bundling merges multiple modules into
  // one output file ("Module level directives cause errors when bundled") — true with
  // splitting on or off, directive at the source entry or not; verified empirically
  // against tsup 8.5.1, not assumed from docs. Prepending onto the existing first line
  // (not a new line before it) keeps every other line's number — and so its sourcemap
  // mapping — unchanged; only line 1's column offsets shift, and line 1 is an import.
  onSuccess: async () => {
    for (const file of ['dist/index.js', 'dist/index.cjs']) {
      const code = readFileSync(file, 'utf8');
      if (!code.startsWith(CLIENT_DIRECTIVE)) writeFileSync(file, CLIENT_DIRECTIVE + code);
    }
  },
});
