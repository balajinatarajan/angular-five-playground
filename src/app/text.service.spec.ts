import { TestBed, inject } from '@angular/core/testing';

import { TextService } from './text.service';

describe('TextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextService]
    });
  });

  it('should be created', inject([TextService], (service: TextService) => {
    expect(service).toBeTruthy();
  }));

  it('getText should return a promise', inject([TextService], (service: TextService) => {
    return service.getText()
      .catch(fail)
      .then(response => {
        expect(response).toBe('A promise resolved');
      });
  }))
});
