import { SanitizeUrlPipe } from './sanitize-url.pipe';
import {inject} from '@angular/core/testing';
import {DomSanitizer} from '@angular/platform-browser';

describe('SanitizeUrlPipe', () => {
  it('create an instance', inject([DomSanitizer], (sanitize: DomSanitizer) => {
    const pipe = new SanitizeUrlPipe(sanitize);
    expect(pipe).toBeTruthy();
  }));
});
