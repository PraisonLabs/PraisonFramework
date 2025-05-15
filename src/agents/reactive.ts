import { Agent } from './agent';

export class ReactiveAgent extends Agent {
  private triggers: Map<string, Function> = new Map();
  
  on(event: string, handler: Function): void {
    this.triggers.set(event, handler);
  }
  
  async handleEvent(event: string, data: unknown): Promise<void> {
    const handler = this.triggers.get(event);
    if (handler) await handler(data);
  }
}
