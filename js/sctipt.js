//     _______/ shartga oid masalalar \________

// // 1-masala
// let son = 10;
// if (son > 0) {
//     son += 1;
// }
// console.log("Natija:", son);

// // 2-masala
// let son = 10;
// if (son > 0) {
//     son += 1;
// } else {
//     son -= 2;
// }
// console.log("Natija:", son);

// // 3-masala
// let son = 10;
// if (son > 0) {
//     son += 1;
// } else if (son < 0) {
//     son -= 2;
// } else {
//     son = 10;
// }
// console.log("Natija:", son);

// // 4-masala
// let son1 = 10;
// let son2 = -15;
// let son3 = 17;
// let musbatlarSoni = 0;

// if (son1 > 0) musbatlarSoni++;
// if (son2 > 0) musbatlarSoni++;
// if (son3 > 0) musbatlarSoni++;

// console.log("Musbat sonlar soni:", musbatlarSoni);


// // 5-masala
// let son1 = 10;
// let son2 = -15;
// let son3 = 17;
// let musbatlarSoni = 0;
// let manfiylarSoni = 0;

// if (son1 > 0) musbatlarSoni++;
// else if (son1 < 0) manfiylarSoni++;

// if (son2 > 0) musbatlarSoni++;
// else if (son2 < 0) manfiylarSoni++;

// if (son3 > 0) musbatlarSoni++;
// else if (son3 < 0) manfiylarSoni++;

// console.log("Musbat sonlar soni:", musbatlarSoni);
// console.log("Manfiy sonlar soni:", manfiylarSoni);

// // 6-masala
// let son1 = 7;
// let son2 = 5;
// let katta = son1 > son2 ? son1 : son2;
// console.log("Katta son:", katta);

// // 7-masala
// let son1 = 5;
// let son2 = 7;
// let kichikTartib = son1 < son2 ? 1 : 2;
// console.log("Kichik sonning tartib raqami:", kichikTartib);

// // 8-masala
// let son1 = 13;
// let son2 = 17;
// if (son1 > son2) {
//     console.log("Katta son:", son1);
//     console.log("Kichik son:", son2);
// } else {
//     console.log("Katta son:", son2);
//     console.log("Kichik son:", son1);
// }

// // 9-masala
// let A = 9;
// let B = 7;
// if (A > B) {
//     let temp = A;
//     A = B;
//     B = temp;
// }
// console.log("A:", A);
// console.log("B:", B);

// // 10-masala
// let A = 16;
// let B = 13;
// if (A !== B) {
//     A = A + B;
//     B = A;
// } else {
//     A = 0;
//     B = 0;
// }
// console.log("A:", A);
// console.log("B:", B);

// // 11-masala
// let A = 18;
// let B = 21;
// if (A !== B) {
//     let katta = A > B ? A : B;
//     A = katta;
//     B = katta;
// } else {
//     A = 0;
//     B = 0;
// }
// console.log("A:", A);
// console.log("B:", B);

// // 12-masala
// let son1 = 17;
// let son2 = 9;
// let son3 = 11;
// let kichik = son1;
// if (son2 < kichik) kichik = son2;
// if (son3 < kichik) kichik = son3;
// console.log("Kichik son:", kichik);

// // 13-masala
// let son1 = 5;
// let son2 = 7;
// let son3 = 9;
// let ortacha;
// if ((son1 > son2 && son1 < son3) || (son1 > son3 && son1 < son2)) {
//     ortacha = son1;
// } else if ((son2 > son1 && son2 < son3) || (son2 > son3 && son2 < son1)) {
//     ortacha = son2;
// } else {
//     ortacha = son3;
// }
// console.log("O'rtacha son:", ortacha);

// // 14-masala
// let son1 = 5;
// let son2 = 7;
// let son3 = 9;
// let kichik, katta;
// if (son1 <= son2 && son1 <= son3) {
//     kichik = son1;
// } else if (son2 <= son1 && son2 <= son3) {
//     kichik = son2;
// } else {
//     kichik = son3;
// }

// if (son1 >= son2 && son1 >= son3) {
//     katta = son1;
// } else if (son2 >= son1 && son2 >= son3) {
//     katta = son2;
// } else {
//     katta = son3;
// }
// console.log("Kichik son:", kichik);
// console.log("Katta son:", katta);

// // 15-masala
// let son1 = 15;
// let son2 = 7;
// let son3 = 9;
// let sum1 = son1 + son2;
// let sum2 = son1 + son3;
// let sum3 = son2 + son3;
// if (sum1 >= sum2 && sum1 >= sum3) {
//     console.log("Eng katta yig'indi:", sum1);
//     console.log("Ikki son:", son1, son2);
// } else if (sum2 >= sum1 && sum2 >= sum3) {
//     console.log("Eng katta yig'indi:", sum2);
//     console.log("Ikki son:", son1, son3);
// } else {
//     console.log("Eng katta yig'indi:", sum3);
//     console.log("Ikki son:", son2, son3);
// }



//      ______________/ mantiqiy masalalar \_________________

// // 1-masala
// let A = 5;
// let natija = A > 0;
// console.log("A soni musbat:", natija);

// // 2-masala
// let A = 7;
// let natija = A % 2 !== 0;
// console.log("A soni toq son:", natija);

// // 3-masala
// let A = 8;
// let natija = A % 2 === 0;
// console.log("A soni juft son:", natija);

// // 4-masala
// let A = 5;
// let B = 7;
// let natija = A > 2 && B <= 3;
// console.log("A > 2 va B <= 3:", natija);

// // 5-masala
// let A = 7;
// let B = 5;
// let natija = A >= 0 || B < -2;
// console.log("A >= 0 yoki B < -2:", natija);

// // 6-masala
// let A = 5;
// let B = 7;
// let C = 9;
// let natija = A <= B && B <= C;
// console.log("A <= B <= C:", natija);

// // 7-masala
// let A = 5;
// let B = 7;
// let C = 9;
// let natija = (A < B && B < C) || (C < B && B < A);
// console.log("B soni A va C sonlari orasida yotadi:", natija);

// // 8-masala
// let A = 5;
// let B = 7;
// let natija = (A % 2 !== 0) && (B % 2 !== 0);
// console.log("A va B sonlari toq sonlar:", natija);

// // 9-masala
// let A = 7;
// let B = 9;
// let natija = (A % 2 !== 0) || (B % 2 !== 0);
// console.log("A va B sonlarning hech bo'lmaganda bittasi toq son:", natija);

// // 10-masala
// let A = 5;
// let B = 9;
// let natija = (A % 2 !== 0 && B % 2 === 0) || (A % 2 === 0 && B % 2 !== 0);
// console.log("A va B sonlarning faqat bittasi toq son:", natija);










