import { expect } from 'chai';
import {validate} from './index.js';

describe('index validate setup',()=>{
  it('adds two to the input',()=>{
    expect(validate(1)).eq(3);
  });
});
