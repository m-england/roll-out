import { PipelineModule } from './pipeline.module';

describe('PipelineModule', () => {
  let pipelineModule: PipelineModule;

  beforeEach(() => {
    pipelineModule = new PipelineModule();
  });

  it('should create an instance', () => {
    expect(pipelineModule).toBeTruthy();
  });
});
