// MAP

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.

let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1');
console.log(map.get('1')) // 'str1'
console.log(map.get(1)) // 'num1'
console.log(map.get(true)) // 'bool1'
console.log(map.size); // 3

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.
// map.forEach()

//Object.entries(obj) = [[key1,value1],[key2,value2],[key3,value3]..]
//obj = Object.fromEntries([[key1,value1],[key2,value2],[key3,value3]..])
//obj = Object.fromEntries(map)



// SET

// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.


// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries(sal) {
    return Object.values(sal)
        .reduce((sum,sal) => sum + sal,0);
}

function topSalaries(sal) {
    return Object.entries(sal)
        .reduce((max, [name, salary]) => salary>max[1] ? [name,salary] : max,[null,0])[0];
}

console.log(sumSalaries(salaries));
console.log(topSalaries(salaries));
console.log(topSalaries({}));