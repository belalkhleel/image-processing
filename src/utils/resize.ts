import sharp from 'sharp';
import path from 'path';

export const resizeImage = async (
  fileName: string,
  width: number,
  height: number,
) => {
  try {
    return sharp(path.resolve(`src/images/full/${fileName}.jpg`))
      .resize(width, height)
      .toFile(getResizedImagePath(fileName, width, height));
  } catch (error) {
    console.error('Error resizing image:', error);
  }
};

export const getResizedImagePath = (
  filename: string,
  width: number,
  height: number,
): string => {
  return path.resolve(`src/images/thumb/${filename}_${width}x${height}.jpg`);
};
