#!/usr/bin/env node

/**
 * Replace literal escape sequences (\n, \") in a file with their actual characters.
 * Usage: node scripts/unescape-file.js <file_path>
 */
const fs = require("fs");
const path = require("path");

const [, , inputPath] = process.argv;

if (!inputPath) {
  console.error("Usage: node scripts/unescape-file.js <file_path>");
  process.exit(1);
}

const targetPath = path.resolve(process.cwd(), inputPath);

let content;
try {
  content = fs.readFileSync(targetPath, "utf8");
} catch (error) {
  console.error(`Failed to read "${targetPath}": ${error.message}`);
  process.exit(1);
}

const updated = content.replace(/\\n/g, "\n").replace(/\\"/g, '"');

try {
  fs.writeFileSync(targetPath, updated, "utf8");
} catch (error) {
  console.error(`Failed to write "${targetPath}": ${error.message}`);
  process.exit(1);
}

console.log(`Updated ${targetPath}`);
