/*
var listOneEl = document.querySelector('#list1');
var listTwoEl = document.querySelector('#list2');
var listThreeEl = document.querySelector('#list3');
*/

const jsScore = require('./ncaafPickEm2');

var picks = [
    {entry: "Brit",
    champ: "bama",
    sec: "bama",
    big10: "michigan"
    },
    {entry: "mike",
    champ: "clemson",
    sec: "bama",
    big10: "osu"
    },
    {entry: "alec",
    champ: "michigan",
    sec: "georgia",
    big10: "penn state"
    },
];

console.log(
    `jsScore: ${jsScore.scoring(picks)}`);
