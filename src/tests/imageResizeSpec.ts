import { resizeImage } from '../utils/resize';

describe('Testing image processing API', () => {
  it('Resolves successfully when provided the right filename, height and width parameters', async () => {
    await expectAsync(resizeImage('santamonica', 400, 200)).toBeResolved();
  });
  it('Rejects when provided with a non-existing filename', async () => {
    await expectAsync(resizeImage('non-existing-filename', 400, 200)).toBeRejected();
  });
});
