import { TestBed } from '@angular/core/testing';

import { QuestionCursorImplementation.ServiceService } from './question-cursor-implementation.service.service';

describe('QuestionCursorImplementation.ServiceService', () => {
  let service: QuestionCursorImplementation.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionCursorImplementation.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
