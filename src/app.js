console.log("Hello Code World");

let number = 10;
number = "Burak Fıçıcı";
let student = { id: 1, name: "Burak Fıçıcı" };
console.log(student);

function save(score = 10, student) {
    console.log(student.name + " : " + score);
}
save(undefined, student);

let students = ["Engin Demiroğ", "Burak Fıçıcı", "Dilan Balcı"];
console.log(students);

let students2 = [student, { id: 2, name: "Engin" }, "İstanbul", { city: "İstanbul" }];
console.log(students2);

//rest: Geriye kalan parametreler. Gönderilen değerler array olarak kabul edilir. Eğer fonksiyon içerisinde array olarak gönderirsen sonucunda array içinde array ekrana basılır.
let showProducts = function (id, ...products) {
    console.log(id);
    console.log(products[0]);
}
// console.log(typeof showProducts)
// showProducts(10, "Elma", "Armut", "Karpuz");
// Rest örneği. Math.max methodu içerisine rest parametresi alır.
console.log(Math.max(1, 2, 3, 56, 7, 8, 76));


//Spread: Ayrıştırmak. Gelen dizi içerisindeki değerleri ayrıştırmaya yaraer.
let points = [1, 2, 3, 56, 7, 8, 76];
console.log(...points);
console.log(Math.max(...points));


//Destructuring

//Elinizdeki array'lerin değerlerini değişkenlere atama yöntemidir.

let populations = [10000, 20000, 30000, [40000, 50000]];
let [smallpopulation, mediunpopulation, bigpopulation, [verybigpopulation, maximumpopulation]] = populations;
console.log(smallpopulation);
console.log(mediunpopulation);
console.log(bigpopulation);
console.log(verybigpopulation);
console.log(maximumpopulation);

//Eğer fonksiyonun içerisinde array parametresi kullanılırsa hem o parametrenin zorunlu olması gerektiği algılanıyor hem de en önemlisi destructing edilmesi gereken bir array gönderileceğini varsayıyor.
function someFunction([smallpopulation1], number) {
    console.log(smallpopulation1)
}
someFunction(populations);

let categories = { id: 1, name: "İçecek" };
console.log(categories.id);
console.log(categories["name"]);

//Object destructuring
let { id, name } = categories;
console.log(id);
console.log(name);