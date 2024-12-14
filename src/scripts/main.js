'use strict';

const htmlTable = [...document.querySelector('table').rows];

htmlTable.forEach((row) => {
  if (row.childElementCount > 1) {
    const cloneElement = row.children[1].cloneNode(true);

    row.lastElementChild.before(cloneElement);
  }
});
