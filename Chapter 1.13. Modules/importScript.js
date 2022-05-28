'use strict';
import { str } from './exportScript';

async function checkImport() {
  try {
    await alert(str);
    alert('Done!');
  } catch (e) {
    await alert(e);
  }
}


checkImport();
alert('test');