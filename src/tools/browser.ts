export class BrowserTool {
  async navigate(url: string): Promise<string> {
    // headless browser integration
    return '';
  }
  
  async screenshot(url: string): Promise<Buffer> {
    return Buffer.alloc(0);
  }
}
