/* eslint-disable guard-for-in */
import create from './create';

export default function rowTable(obj) {
  const tableRow = create('tr');
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    create('td', null, obj[key], tableRow);
  }
}
