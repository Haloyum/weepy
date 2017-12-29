import assert from 'assert';
import Enum from './utils/enum';

export const MAX_MATERIAL_COUNT = 20;
export const MIN_MATERIAL_COUNT = 1;

export const MIN_MATERIAL_OFFSET = 0;

export const MaterialType = new Enum({
  IMAGE: 'image',
  VOICE: 'voice',
  VIDEO: 'video',
  // THUMB: 'thumb',  // Currently drop support for thumb
  NEWS: 'news'
});

export class MultiMediaMaterial {
  constructor(file, type, title, introduction) {
    assert(file, 'MultiMediaMaterial must contain file path or file blob object');
    assert(type, 'MultiMediaMaterial must have a file type');

    this.file = file;
    this.type = type;
    this.title = title || '';
    this.introduction = introduction || '';
  }
}

export class NewsMaterial {
  // TODO: add support for news material
}
