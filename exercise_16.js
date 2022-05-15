/* 
16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.
*/
let smokerYears = parseInt(prompt(`How long have you smoked?`));
let cigarByDays = parseInt(prompt(`How many cigarettes do you somke a day?`));

let totalMinutesLost = smokerYears * 365 * cigarByDays * 10; 

let totalDaysLost = totalMinutesLost / 60 / 24;

document.write(`you lost ${parseInt(totalDaysLost)} days of your life!`);
