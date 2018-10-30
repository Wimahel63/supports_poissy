//solution utilisant une serie de if/else

for (var nombre = 1; nombre <= 100; nombre++ ){
    if ((nombre % 3 === 0) && (nombre % 5=== 0))
    console.log("fizzbuzz");
    else if (nombre % 3 === 0)
    console.log("fizz");
    else if (nombre % 5 === 0)
    console.log("buzz");
    else
    console.log(nombre);
}
// une seule accolade car tous les elements qui suivent sont dans le FOR