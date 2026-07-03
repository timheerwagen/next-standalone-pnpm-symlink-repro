This repository reproduces a potential issue in Next.js standalone output when using pnpm.

After running `next build`, the `.next/standalone` output contains symlinks inside `node_modules` that may resolve outside of the standalone directory (e.g. to the root `node_modules/.pnpm` instead of `.next/standalone/node_modules/.pnpm`).

This breaks the standalone guarantee, since the build is expected to be fully portable without requiring the original repository or its `node_modules`.

## Reproduction

```
pnpm install

pnpm build

pnpm test
```