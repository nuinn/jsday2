//Booleanos
const b1 = true;
const b2 = false;
const booleanoAnd = b1 && b2;
const booleanoOr = b1 || b2;
const booleanoNot = !b1;
const booleanoMix0 = (b1 || b2) && (b1 || (!b1 && !b2));

//Operadores
let valorDivision = 17 / 3
valorDivision = valorDivision.toFixed(2);
const valorResto = 17 % 7;

//Lógica de programación
const A = 9;
const B = "9";
if (A === B) {
    console.log("Son iguales.")
}
else {
    console.log("NO son iguales.")
}
const mochila = [1];
if (mochila.length > 10) {
    console.log("No puedo cargar con tantas cosas")
}
else if (mochila.length >= 2) {
    console.log("Que bien voy con mi mochila")
}
else {
    console.log("Creo q no necesito una mochila")
}
const diaFestivo = false;
diaFestivo == true ? console.log("Hoy no trabajo") : console.log("Hoy trabajo");

//Extras;
const ordenador = {
    marca: "La pava",
    tipo: "portátil",
    perifericos: ["touchScreen", "touchPad"],
    almacenamiento: {
        discos: ["externo", "HDD"],
        maestro: 0,
    },
};

// // TEST 1
// if (typeof ordenador === "object") {
//     console.log("apruebas");
// } else {
//     console.log("suspendes");
// }

// // TEST 2
// if (ordenador.marca === "La pava") {
//     console.log("apruebas");
// } else {
//     console.log("suspendes");
// }

// // TEST 3
// if (ordenador.tipo === "portátil") {
//     console.log("apruebas");
// } else {
//     console.log("suspendes");
// }

// // TEST 4
// if (ordenador.perifericos[1] === "touchPad") {
//     console.log("apruebas");
// } else {
//     console.log("suspendes");
// }

// // TEST 5
// if (ordenador["almacenamiento"]["discos"][1] === "HDD") {
//     console.log("apruebas");
// } else {
//     console.log("suspendes");
// }

// // TEST 6
// if (ordenador.almacenamiento.maestro === 0) {
//     console.log("apruebas");
// } else {
//     console.log("suspendes");
// }

const arr = [{ name: "pepito", age: 25, }, { name: "pepito", age: 20, }, { name: "J", age: 13 }];

// TEST 1
if (typeof arr === "object" && arr.length >= 0) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 2
if (typeof arr[0] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 3
if (typeof arr[1] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 4
if (typeof arr[2] === "object") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 5
if (arr.length === 3) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[0].name === arr[1].name) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 6
if (arr[1].name === "pepito") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 7
if (arr[1].age > arr[2].age) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 8
if (arr[0].age === 25) {
    console.log("apruebas");
} else {
    console.log("suspendes");
}
// TEST 9
if (typeof arr[2].name === "string") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

// TEST 10
if (arr[2].name[0] === "J") {
    console.log("apruebas");
} else {
    console.log("suspendes");
}

