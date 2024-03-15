'use strict';

// Exercise 8
function getTimeFromMinutes(allMinutes) {
    if ( !Number.isInteger( allMinutes ) || allMinutes < 0 || allMinutes > 600 ) {
        return 'Ошибка, проверьте данные!';
    }

    const hours = Math.trunc( allMinutes / 60 ); 
    const minutes = allMinutes - (hours * 60);
    let string;

    switch (hours) {
        case 1:
            string = 'Это ' + hours + ' час и ';
            break;
        case 2:
        case 3: 
        case 4:
            string = 'Это ' + hours + ' часа и ';
            break;
        default:
            string = 'Это ' + hours + ' часов и ';
            break; 
    }

    switch (minutes) {
        case 1:
        case 21:
        case 31:
        case 41:
        case 51:
            string = string + minutes + " минута";
            break;
        case 2:
        case 3:
        case 4:
        case 22:
        case 23:
        case 24:
        case 32:
        case 33:
        case 34:
        case 42:
        case 43:
        case 44:
        case 52:
        case 53:
        case 54:
            string = string + minutes + " минуты";
            break;
        default:
            string = string + minutes + " минут";
            break;        
    }
    
    return string;
}

console.log(getTimeFromMinutes(undefined));

function findMaxNumber( a, b, c, d ) {
    if ( typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number' || typeof d !== 'number' ) {
        return 0;
    }

    return Math.max(a, b, c, d);
}

console.log(findMaxNumber(1, 7.7, 5));

// Exercise 9
function fib(n) {
    if ( !Number.isInteger(n) || n <= 0 ) {
        return '""';
    }
    
    const resFib = [];

    for ( let i = 0; i < n; i++ ) {
        if ( i < 2 ) {
            resFib[i] = i;
        } else {
            resFib[i] = resFib[i - 2] + resFib[i - 1];
        }
    }
    return '"' + resFib.join(' ') + '"';
    
}

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(7));

// Exercise 10
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            html: '100%',
            css: '100%',
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (obj) {
        let {age, skills: {languages}} = obj;
        const lang = languages.join(', ').toUpperCase();
        return `Мне ${age} и я владею языками ${lang}`; 
    }   
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

function showExperience(obj) {
    let {skills: {exp}} = obj;
    return exp;
}

function showProgrammingLangs(obj) {
    let {skills: {programmingLangs}} = obj;
    let result = '';
    for (let key in programmingLangs) {
        if (programmingLangs.hasOwnProperty(key)) {
            result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
        }
    }
    return result;
}

console.log(showProgrammingLangs(personalPlanPeter));