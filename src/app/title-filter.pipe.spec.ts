import { TitleFilterPipe } from './title-filter.pipe';

describe('CamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new TitleFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
