const fs = require('fs');
const path = require('path');

const files = ['about.tsx', 'contact.tsx', 'portfolio.tsx', 'process.tsx', 'technologies.tsx'];

for (const file of files) {
  const filePath = path.join(__dirname, 'src/routes', file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Remove import { createFileRoute } ...
  content = content.replace(/import \{ createFileRoute \} from "@tanstack\/react-router";\n/, '');
  
  // Remove export const Route = createFileRoute(...)({ ... });
  // We can use a regex to match from "export const Route =" up to "});\n\n"
  // A safer way is to replace the specific block. Since it varies, we can find "export const Route =" and remove until "});" that has component: PageComponent.
  const routeMatch = content.match(/export const Route = createFileRoute[\s\S]*?\}\);\n*/);
  if (routeMatch) {
    content = content.replace(routeMatch[0], '');
  }
  
  // Change "function PageName() {" to "export default function PageName() {"
  content = content.replace(/function (\w+Page)\(\) \{/, 'export default function $1() {');
  
  fs.writeFileSync(filePath, content);
}
