const fs = require('fs');
const path = require('path');

// Thư mục gốc (Vercel chạy build tại đây)
const dirPath = __dirname; 
const outputFile = path.join(dirPath, 'index.html');

// Danh sách các file/thư mục cần loại bỏ (không muốn hiện lên web)
const exclude = [
  'node_modules', 
  'package.json', 
  'package-lock.json', 
  'generate-index.js', 
  '.git', 
  '.vercel',
  'index.html' // Không liệt kê chính nó
];

const files = fs.readdirSync(dirPath).filter(file => !exclude.includes(file));

const htmlContent = `
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>File Explorer</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; background: #f4f7f6; }
        .container { max-width: 800px; margin: auto; background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        h1 { border-bottom: 2px solid #eee; padding-bottom: 10px; color: #333; }
        ul { list-style: none; padding: 0; }
        li { padding: 12px; border-bottom: 1px solid #eee; display: flex; align-items: center; }
        li:last-child { border: none; }
        li:hover { background: #f9f9f9; }
        a { text-decoration: none; color: #0070f3; font-size: 18px; flex-grow: 1; }
        .file-icon { margin-right: 15px; font-size: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📂 File Explorer</h1>
        <ul>
            ${files.map(file => `
                <li>
                    <span class="file-icon">📄</span>
                    <a href="./${file}">${file}</a>
                </li>
            `).join('')}
        </ul>
    </div>
</body>
</html>
`;

fs.writeFileSync(outputFile, htmlContent);
console.log('✅ Đã tạo file index.html thành công!');
