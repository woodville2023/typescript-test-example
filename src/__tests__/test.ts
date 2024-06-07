import { Person } from '../model/types';
import { sum } from '../utils/sum';
import {getComparator,testNoop} from "../utils/sortHelper";

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

const initArr = ():Person[] => {
  const parr: Person[] = [

    {
      fullname: 'decond',
    },
    {
      fullname: '1econd',
    },
    {
      fullname: 'xfirst',
    },
  ];
  return parr;
}
function personArrTest() {
  const parr: Person[] = initArr();

  console.log('parr', parr);
  expect(parr.length).toBe(2);
}
test('personarr', personArrTest);

test('personArrSort', () => {
  let parr: Person[] = initArr();
  console.log('before parr', parr);
  parr = parr.sort(getComparator('fullname'))
  console.log('after parr', parr);
})
