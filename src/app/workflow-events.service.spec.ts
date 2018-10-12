import { TestBed, inject } from '@angular/core/testing';

import { WorkflowEventsService } from './workflow-events.service';

describe('WorkflowEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkflowEventsService]
    });
  });

  it('should be created', inject([WorkflowEventsService], (service: WorkflowEventsService) => {
    expect(service).toBeTruthy();
  }));
});
