'use strict';

/**
 * @param {string} date
 * @param {string[]} fromFormat
 * @param {string[]} toFormat
 *
 * @returns {string}
 */
function formatDate(date, fromFormat, toFormat) {
  const dateArray = date.split(fromFormat[3]);
  const dateList = {};
  const newDateArray = [];

  fromFormat.slice(0, 3).forEach((part, i) => {
    dateList[part] = dateArray[i];
  });

  if (toFormat.includes('YY') && dateList['YYYY']) {
    const year = dateList['YYYY'];

    dateList['YY'] = year.slice(-2);
  } else if (toFormat.includes('YYYY') && dateList['YY']) {
    let year = dateList['YY'];

    year = Number(year) < 30 ? '20' + year : '19' + year;
    dateList['YY'] = year;
    dateList['YYYY'] = year;
  }

  for (let i = 0; i < 3; i++) {
    newDateArray.push(dateList[toFormat[i]]);
  }

  return newDateArray.join(toFormat[3]);
}

module.exports = formatDate;
