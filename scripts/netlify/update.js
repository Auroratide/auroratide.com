const fs = require('fs');
const path = require('path');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf-8'));
const netlify = fs.readFileSync(path.join(__dirname, 'templates', 'template.toml'), 'utf-8');

let redirects = '';
const addRoute = route =>
  redirects += `
[[redirects]]
  from = "/${route}"
  to = "/index.html"
  status = 200
  force = false
`;

config.routes.forEach(route => addRoute(route));

const contentRoot = path.join(__dirname, '..', '..', 'content');
config.resources.forEach(resource => {
  fs.readdirSync(path.join(contentRoot, resource)).forEach(item => {
    const id = JSON.parse(fs.readFileSync(path.join(contentRoot, resource, item, 'meta.json'), 'utf-8')).id;
    addRoute(`${resource}/${id}`);
  });
});

fs.writeFileSync(path.join(__dirname, '..', '..', 'netlify.toml'), netlify.replace('$REDIRECTS$', redirects));