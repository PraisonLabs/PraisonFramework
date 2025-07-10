export interface VectorEntry {
  id: string;
  embedding: number[];
  metadata: Record<string, unknown>;
}

export class VectorStore {
  private entries: VectorEntry[] = [];
  
  async add(text: string, metadata?: Record<string, unknown>): Promise<string> {
    return '';
  }
  
  async search(query: string, topK: number = 5): Promise<VectorEntry[]> {
    return [];
  }
}
