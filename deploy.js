// @ts-check
import { publish } from 'gh-pages';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// The folder that contains the built assets
const distFolder = resolve(__dirname, './dist');

// Copy 404.html to dist folder if it doesn't exist
const source404Path = resolve(__dirname, './public/404.html');
const target404Path = resolve(distFolder, '404.html');
if (fs.existsSync(source404Path) && !fs.existsSync(target404Path)) {
  fs.copyFileSync(source404Path, target404Path);
  console.log('Successfully copied 404.html to dist folder');
}

// Ensure the .nojekyll file exists in the dist folder
const nojekyllPath = resolve(distFolder, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('Created .nojekyll file in dist folder');
}

// Deploy options
const options = {
  branch: 'gh-pages',
  repo: 'https://github.com/sah-23/MutiThreadingPresentation.git',
  message: 'Auto-deploy from custom script [timestamp: ' + new Date().toISOString() + ']',
  dotfiles: true, // Include dotfiles like .nojekyll
};

// Deploy to GitHub Pages
publish(distFolder, options, (err) => {
  if (err) {
    console.error('Deployment failed:', err);
    process.exit(1);
  } else {
    console.log('Deployed successfully!');
  }
}); 