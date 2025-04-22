export interface PipelineStep {
  agentId: string;
  task: string;
  dependsOn?: string[];
}

export class Pipeline {
  private steps: PipelineStep[] = [];
  
  addStep(step: PipelineStep): this {
    this.steps.push(step);
    return this;
  }
  
  async execute(): Promise<Map<string, unknown>> {
    const results = new Map<string, unknown>();
    // topological sort and execute
    return results;
  }
}
