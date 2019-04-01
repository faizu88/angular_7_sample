import { SharedPipeAPipe } from './shared-pipe-a.pipe';

describe('SharedPipeAPipe', () => {
  it('create an instance', () => {
    const pipe = new SharedPipeAPipe();
    expect(pipe).toBeTruthy();
  });
});
