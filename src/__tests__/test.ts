import { Person } from '../model/types';
import { sum } from '../utils/sum';

test('sumtest', () => {
  const ret = sum(1, 2);
  expect(ret).toBe(3);
  console.log('ret:', ret);
});

test('person', () => {
  const p: Person = {
    fullname: 'nara',
  };
  expect(p.fullname).toBe('nara');
});

function personArrTest() {
  const parr: Person[] = [
    {
      fullname: 'first',
    },
    {
      fullname: 'second',
    },
  ];

  console.log('parr', parr);
  expect(parr.length).toBe(2);
}
test('personarr', personArrTest);
