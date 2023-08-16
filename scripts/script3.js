
let sumaNotas=0;

for (let i = 1; i<=5; i++){
    let nota= Number(prompt("ingrese la nota"+i));
    
    sumaNotas=sumaNotas+ nota;
}
let promedio= sumaNotas/5;
alert("el promedio del estudiante es:" + promedio);