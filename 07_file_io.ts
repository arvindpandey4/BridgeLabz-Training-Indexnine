import * as fs from "fs";
import * as path from "path";

interface FileData {
  name: string;
  content: string;
}

class FileManager {
  private basePath: string = "./data";

  constructor(basePath?: string) {
    if (basePath) {
      this.basePath = basePath;
    }
    this.ensureDirectory();
  }

  private ensureDirectory(): void {
    if (!fs.existsSync(this.basePath)) {
      fs.mkdirSync(this.basePath, { recursive: true });
    }
  }

  writeFile(filename: string, content: string): void {
    const filePath = path.join(this.basePath, filename);
    fs.writeFileSync(filePath, content);
    console.log(`File written: ${filePath}`);
  }

  readFile(filename: string): string {
    const filePath = path.join(this.basePath, filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf-8");
    }
    throw new Error(`File not found: ${filePath}`);
  }

  deleteFile(filename: string): void {
    const filePath = path.join(this.basePath, filename);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`File deleted: ${filePath}`);
    }
  }

  listFiles(): string[] {
    if (fs.existsSync(this.basePath)) {
      return fs.readdirSync(this.basePath);
    }
    return [];
  }
}

const fm = new FileManager();
fm.writeFile("test.txt", "Hello, World!");
console.log(fm.readFile("test.txt"));
console.log(fm.listFiles());

export { FileManager, FileData };
