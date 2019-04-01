import { SharedPipeBPipe } from './shared-pipe-b.pipe';

describe('SharedPipeBPipe', () => {
  it('create an instance', () => {
    const pipe = new SharedPipeBPipe();
    expect(pipe).toBeTruthy();
  });
});
