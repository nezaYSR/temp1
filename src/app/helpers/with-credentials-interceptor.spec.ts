import { TestBed } from '@angular/core/testing';

import { WithCredentialsInterceptor } from './with-credentials-interceptor';

describe('WithCredentialsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WithCredentialsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WithCredentialsInterceptor = TestBed.inject(WithCredentialsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
