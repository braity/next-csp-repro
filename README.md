# next-csp-repro

Minimal Next.js 16.4.3 Pages Router app that reproduces the inline bootstrap
script emitted by Turbopack when `experimental.turbopackSharedRuntime` is on
(the default on Canary), under a strict `script-src 'self'` policy.

The policy is set with a `<meta http-equiv="Content-Security-Policy">` tag in
`pages/_document.js`, because GitHub Pages cannot set HTTP headers.

Build and check locally:

    npm install
    npx next build
    grep -c '<script>(globalThis' out/index.html   # 1 inline bootstrap script

Open `out/index.html` through any static server and the browser console shows
the `Executing inline script violates ... script-src 'self'` error.
