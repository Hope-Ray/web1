const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'drake',
    age: 24,
    position: 'intern',
  },
]

const getAges = (peep) => peep.age * 2;

const ages = people.map(getAges)

console.log(getAges)