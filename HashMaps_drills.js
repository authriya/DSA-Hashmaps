import HashMap from './main'

HashMap.MAX_LOAD_RATIO = 0.5
HashMap.SIZE_RATIO = 3

function main() {
    let lotr = new HashMap()
    const data = [{ 'Hobbit': 'Bilbo' }, { 'Hobbit': 'Frodo' },
    { 'Wizard': 'Gandolf' }, { 'Human': 'Aragon' }, { 'Elf': 'Legolas' }, { 'Maiar': 'The Necromancer' },
    { 'Maiar': 'Sauron' }, { 'RingBearer': 'Gollum' }, { 'LadyOfLight': 'Galadriel' }, { 'HalfElven': 'Arwen' },
    { 'Ent': 'Treebeard' }];

    data.forEach(obj => {
        const key = Object.keys(obj)[0];
        lotr.set(key, obj[key])
    });

    console.log(lotr)

    console.log('Maiar =', lotr.get('Maiar'))
    console.log('Hobbit =', lotr.get('Hobbit'))

    //What are the values of Maiar and Hobbit that I have?
    //I am getting Sauron and Frodo because we have 2 keys storing 2 different values and its only showing the latter value due to not having anything to resolve collisions
    console.log(lotr._capacity);
    //initial capacity = 8; once we went over max load ratio (50%) of 8 and we have to multiply that
    //by our size ratio value of 3, which gives us 24
}

main()

//WhatDoesThisDo?
const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1)); //20
    console.log(map2.get(str3)); //10
}

//function is creating a collision so duplicate keys will overwrite previous data values

//SHOW HASH FXN
//key mod 11
//
//[22, 88, null, null, 4, 15, 28, 17, 59, 31, 10]

//SHOW HASH FXN 2
//key mod 9
//
//[0, [28, 19, 10], 20, 12, 4, 5, [15, 33], 7, 17]

function removeDuplicates (string) {
    const map = new HashMap()
    let newStr = '';

    string.split('').forEach(letter => {
        if(!map.has(letter)) {
            map.set(letter, '')
            newStr += letter;
        }
    })
    return newStr
}

function palindrome(string) {
    const result = new HashMap();
    let odd = 0
    for(let i = 0; i <string.length; i++) {
        if(result.get(string[i]) === undefined) {
            result.set(string[i], 1)
        } else {
            let char = result.get(string[i])
            result.set(string[i], char += 1)
        }
    }
    for(let i = 0; i <result.size; i++) {
        if(result.get(string[i]) % 2 !== 0) {
            odd ++
        }
        if(odd > 1) {
            return false
        }
    }
    return true
}

function anagramGrouping(strArray) {
    const anagramMap = new HashMap();

    strArray.forEach((word) => {
        let sorted = alphabetize(word)
        if(anagramMap.has(sorted)) {
            anagramMap.get(sorted).push(word)
        } else {
            anagramMap.set(sorted, [word])
        }
    })
    return [...anagramMap.values()]

}

const alphabetize = word => {
    let alphabetized = word.split('').sort().join('')
    return alphabetized
}