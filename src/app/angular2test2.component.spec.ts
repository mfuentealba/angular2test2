import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2test2AppComponent } from '../app/angular2test2.component';

beforeEachProviders(() => [Angular2test2AppComponent]);

describe('App: Angular2test2', () => {
  it('should create the app',
      inject([Angular2test2AppComponent], (app: Angular2test2AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2test2 works!\'',
      inject([Angular2test2AppComponent], (app: Angular2test2AppComponent) => {
    expect(app.title).toEqual('angular2test2 works!');
  }));
});
