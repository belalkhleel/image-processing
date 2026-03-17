import express from 'express';
import fs from 'fs';
import path from 'path';
const images = express.Router();

import { resizeImage, getResizedImagePath } from '../../utils/resize';

images.get('/', async (req, res) => {
  try {
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    if (!filename) {
      return res.status(400).send('Missing filename parameter');
    }
    if (!req.query.width || !req.query.height) {
      return res.status(400).send('Missing width or height parameters');
    }
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      return res.status(400).send('Width and height must be positive integers');
    }
    if (!fs.existsSync(path.resolve(`src/images/full/${filename}.jpg`))) {
      return res.status(404).send('Image not found');
    }
    const outputPath = getResizedImagePath(filename, width, height);
    if (fs.existsSync(outputPath)) {
      return res.sendFile(outputPath);
    }
    await resizeImage(filename, width, height);
    return res.sendFile(outputPath);
  } catch (error) {
    console.error('Error processing image:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default images;
