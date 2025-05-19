#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
fs.mkdirSync(distDir, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Cranky Moon Placeholder</title>
</head>
<body>
  <h1>Cranky Moon</h1>
  <p>This is a placeholder build. Install dependencies to run the full Next.js build.</p>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), html);
console.log('Placeholder build created in dist/index.html');
