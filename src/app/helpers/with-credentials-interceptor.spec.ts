import { TestBed } from '@angular/core/testing';

import { WithCredentialsInterceptorInterceptor } from './with-credentials-interceptor.interceptor';

describe('WithCredentialsInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      WithCredentialsInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: WithCredentialsInterceptorInterceptor = TestBed.inject(WithCredentialsInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
