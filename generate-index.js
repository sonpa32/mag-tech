const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, ''); // Thư mục chứa file static
const outputFile = path.join(dirPath, 'index.html');

const files = fs.readdirSync(dirPath).filter(file => file !== 'index.html');

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>File Explorer</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        body { font-family: sans-serif; padding: 20px; line-height: 1.6; }
        ul { list-style: none; padding: 0; }
        li { margin: 10px 0; border-bottom: 1px solid #eee; padding-bottom: 5px; }
        a { text-decoration: none; color: #0070f3; font-weight: bold; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Index of /</h1>
    <ul>
        ${files.map(file => `<li><a href="./${file}">${file}</a></li>`).join('')}
    </ul>
</body>
</html>
`;

fs.writeFileSync(outputFile, htmlContent);
console.log('✅ index.html has been generated successfully!');
