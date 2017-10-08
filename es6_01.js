const name='Stephen' ;
const arr= ['Hello', 'World'] ;
const dynaProperty = 'newName' ;

const originalObj = {
  name:'Stephen',
  age:30,
  firstName: 'Tang'
}

const newObj = {
  name: 'Peter',
  [dynaProperty]:'Howard'
}

Object.assign(newObj, originalObj) ;


