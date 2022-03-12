let a: number = 15

let arr: (number | string)[] = [12, 3, 6]

let b: number | string = arr[0]

/**
 * Data structure
 * 
 * Array
 * [0] > 12, [1] > 3, [2] > 6  => number[]
 * index
 * 
 * 
 * Object
 * 
 * name > olimjon, age > 13, hobby > carusel
 * name > javohir, age > 14, hobby > scrollMagic
 * 
 * name property : string
 * age property  : number
 * hobby property : string
 */

// { } -> object
// 45 - number
// 'str' - string
// [] - array
// true -> boolean


// Type 

type Unknown = number | string | boolean

let unknown:  Unknown = false


// Object type

type Group = {
  name: string,
  number: number
}

type Pupil = {
  name:  string,
  age:   number,
  hobby: string,
  group: Group
}

let nodejs140: Group = {
  name: 'NodeJs',
  number: 140
}

let web303: Group = {
  name: 'Web',
  number: 303
}

let olimjonObj: Pupil = {
  name: 'Olimjon',
  age:  13,
  hobby: 'Bo`shachi narsala',
  group: nodejs140
}

let jovohirObj: Pupil = {
  name:  'Javohir',
  age:   14,
  hobby: 'Bo`shachi narsala',
  group: web303
}


console.log(
`#1 Oq'uvchi: ${ olimjonObj.name  }
Yoshi:        ${ olimjonObj.age   }
Qiziqishi:    ${ olimjonObj.hobby }
Guruhi:       ${ olimjonObj.group.name } ${olimjonObj.group.number}
`
);

console.log(
`#2 Oq'uvchi: ${ jovohirObj.name  }
Yoshi:        ${ jovohirObj.age   }
Qiziqishi:    ${ jovohirObj.hobby }
Guruhi:       ${ jovohirObj.group.name } ${jovohirObj.group.number}
`
);

export {}