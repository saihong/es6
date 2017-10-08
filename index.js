const name='Stephen' ;
const arr= ['Hello', 'World'] ;

// Object.defineProperty

const originalObj = {
  name:'Stephen',
  age:30
}
const newObj = {
  name: 'Peter'
}

Object.defineProperties(newObj, originalObj) ;
 
