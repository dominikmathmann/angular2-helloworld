import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2HelloworldAppComponent } from '../app/angular2-helloworld.component';

beforeEachProviders(() => [Angular2HelloworldAppComponent]);

describe('App: Angular2Helloworld', () => {
  it('should create the app',
      inject([Angular2HelloworldAppComponent], (app: Angular2HelloworldAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-helloworld works!\'',
      inject([Angular2HelloworldAppComponent], (app: Angular2HelloworldAppComponent) => {
    expect(app.title).toEqual('angular2-helloworld works!');
  }));
});
