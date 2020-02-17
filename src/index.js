/* ДЗ 3 - работа с исключениями и отладчиком */

/*
 Задание 1:

 1.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива

 1.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isAllTrue([1, 2, 3, 4, 5], n => n < 10) // вернет true
   isAllTrue([100, 2, 3, 4, 5], n => n < 10) // вернет false
 */
function isAllTrue(array, fn) {
    if (!Array.isArray(array)) {
        throw new Error('empty array')
    } else if (!array.length) {
        throw new Error('empty array')
    } else if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }

    let pass = true;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (!fn(element)) {
            pass = false;
        }

    }

    return pass;
}

/*
 Задание 2:

 2.1: Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива

 2.2: Необходимо выбрасывать исключение в случаях:
   - array не массив или пустой массив (с текстом "empty array")
   - fn не является функцией (с текстом "fn is not a function")

 Зарпещено использовать встроенные методы для работы с массивами

 Пример:
   isSomeTrue([1, 2, 30, 4, 5], n => n > 20) // вернет true
   isSomeTrue([1, 2, 3, 4, 5], n => n > 20) // вернет false
 */
function isSomeTrue(array, fn) {
    if (!Array.isArray(array)) {
        throw new Error('empty array')
    } else if (!array.length) {
        throw new Error('empty array')
    } else if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }

    let pass = false;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        if (fn(element)) {
            pass = true;
        }

    }

    return pass;
}

/*
 Задание 3:

 3.1: Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запустить fn для каждого переданного аргумента (кроме самой fn)

 3.2: Функция должна вернуть массив аргументов, для которых fn выбросила исключение

 3.3: Необходимо выбрасывать исключение в случаях:
   - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn, ...args) {
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }
    const array = args;
    const bad = [];

    for (let index = 0; index < array.length; index++) {
        const element = array[index];

        try {
            fn(element);
        } catch (e) {
            bad.push(element);
        }
    }

    return bad;
}

/*
 Задание 4:

 4.1: Функция имеет параметр number (по умолчанию - 0)

 4.2: Функция должна вернуть объект, у которого должно быть несколько методов:
   - sum - складывает number с переданными аргументами
   - dif - вычитает из number переданные аргументы
   - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
   - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно

 4.3: Необходимо выбрасывать исключение в случаях:
   - number не является числом (с текстом "number is not a number")
   - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator(number) {
    if (!number) {
        number = 0;
    } else if (typeof number !== 'number') {
        throw new Error('number is not a number');
    } 
    
    let result = {};

    result.sum = function (...args) {
        let res = args.reduce((acc, val) => {

            return acc + val;
        }, number);

        return res;
    }
    result.dif = function (...args) {
        let res = args.reduce((acc, val) => {

            return acc - val;
        }, number);

        return res;
    }
    result.div = function (...args) {
        if (args.indexOf(0) !== -1) {
            throw new Error('division by 0');
        }
        let res = args.reduce((acc, val) => {

            return acc / val;
        }, number);

        return res;
    }
    result.mul = function (...args) {
        let res = args.reduce((acc, val) => {

            return acc * val;
        }, number);

        return res;
    }

    return result;
}

/* При решении задач, пострайтесь использовать отладчик */
export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
