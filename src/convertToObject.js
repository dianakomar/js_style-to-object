'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};

  const styles = sourceString
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean);

  styles.forEach((line) => {
    const idx = line.indexOf(':');

    if (idx === -1) {
      return;
    }

    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();

    if (value.endsWith(';')) {
      value = value.slice(0, -1).trim();
    }

    result[key] = value;
  });

  return result;
}

module.exports = convertToObject;
