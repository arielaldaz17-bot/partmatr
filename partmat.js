



let vidas = 3;
let puntos = 0;

document.getElementById("vidas").innerText = vidas;
document.getElementById("puntos").innerText = puntos;

document.getElementById("btnGuardarPerfil").addEventListener("click", guardarPerfil);

function guardarPerfil(){
    let nombre = document.getElementById("nombre").value;
    let edad = document.getElementById("edad").value;
    let estudios = document.getElementById("estudios").value;

    if(nombre && edad && estudios){
        localStorage.setItem("perfil", JSON.stringify({nombre, edad, estudios}));
        alert("Perfil guardado correctamente ✅");
    } else {
        alert("Completa todos los campos.");
    }
}

let respuestaCorrecta;
let pistaActual = "";

document.getElementById("btnEmpezar").addEventListener("click", generarEjercicio);
document.getElementById("btnVerificar").addEventListener("click", verificarRespuesta);
document.getElementById("btnPista").addEventListener("click", mostrarPista);

function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generarEjercicio(){

    let nivel = document.getElementById("nivel").value;
    let tema = document.getElementById("tema").value;

    let pregunta = "";
    pistaActual = "";

    // ========================
    // OPERACIONES
    // ========================
    if(tema === "operaciones"){

        let tipo = random(1,5);

        if(tipo === 1){
            let a = random(10,100);
            let b = random(2,20);
            pregunta = `${a} + ${b} × 3`;
            respuestaCorrecta = a + b * 3;
            pistaActual = "Recuerda que la multiplicación va antes que la suma (PEMDAS).";
        }

        if(tipo === 2){
            let a = random(2,9);
            let b = random(2,5);
            pregunta = `${a}^${b}`;
            respuestaCorrecta = Math.pow(a,b);
            pistaActual = "Potencia significa multiplicar la base por sí misma varias veces.";
        }

        if(tipo === 3){
            let a = random(20,100);
            let b = random(2,10);
            pregunta = `${a} ÷ ${b}`;
            respuestaCorrecta = a/b;
            pistaActual = "Dividir es repartir en partes iguales.";
        }

        if(tipo === 4){
            let a = random(1,10);
            let b = random(1,10);
            pregunta = `${a}/${b} + ${b}/${a}`;
            respuestaCorrecta = (a/b)+(b/a);
            pistaActual = "Para sumar fracciones usa denominador común.";
        }

        if(tipo === 5){
            let a = random(1,10);
            let b = random(1,10);
            pregunta = `${a} × ${b}`;
            respuestaCorrecta = a*b;
            pistaActual = "Multiplica normalmente.";
        }
    }

    // ========================
    // ÁLGEBRA
    // ========================
    if(tema === "algebra"){

        let tipo = random(1,4);

        if(tipo === 1){
            let a = random(2,9);
            let b = a * random(2,10);
            pregunta = `${a}x = ${b}`;
            respuestaCorrecta = b/a;
            pistaActual = "Divide ambos lados por el número que multiplica a x.";
        }

        if(tipo === 2){
            let a = random(2,5);
            pregunta = `Factoriza: ${a}x + ${a}y`;
            respuestaCorrecta = `${a}(x+y)`;
            pistaActual = "Saca factor común.";
        }

        if(tipo === 3){
            let a = random(2,10);
            pregunta = `Expande: ${a}(x+3)`;
            respuestaCorrecta = `${a}x+${a*3}`;
            pistaActual = "Multiplica el número por cada término del paréntesis.";
        }

        if(tipo === 4){
            pregunta = "¿Cuánto vale x si 2x + 4 = 10?";
            respuestaCorrecta = 3;
            pistaActual = "Primero resta 4 a ambos lados.";
        }
    }

    // ========================
    // TRIGONOMETRÍA
    // ========================
    if(tema === "trigonometria"){

        let tipo = random(1,4);

        if(tipo === 1){
            pregunta = "sen(30°)";
            respuestaCorrecta = 0.5;
            pistaActual = "Es un valor notable.";
        }

        if(tipo === 2){
            pregunta = "cos(60°)";
            respuestaCorrecta = 0.5;
            pistaActual = "También es valor notable.";
        }

        if(tipo === 3){
            pregunta = "tan(45°)";
            respuestaCorrecta = 1;
            pistaActual = "En 45°, seno y coseno son iguales.";
        }

        if(tipo === 4){
            pregunta = "Si un triángulo tiene 90° y 30°, ¿cuánto mide el otro ángulo?";
            respuestaCorrecta = 60;
            pistaActual = "La suma de ángulos internos es 180°.";
        }
    }

    // ========================
    // CÁLCULO
    // ========================
    if(tema === "calculo"){

        let tipo = random(1,5);

        if(tipo === 1){
            let a = random(2,6);
            pregunta = `Deriva: ${a}x`;
            respuestaCorrecta = a;
            pistaActual = "La derivada de ax es a.";
        }

        if(tipo === 2){
            let a = random(2,6);
            pregunta = `Deriva: ${a}x²`;
            respuestaCorrecta = `${2*a}x`;
            pistaActual = "Baja el exponente y resta 1.";
        }

        if(tipo === 3){
            pregunta = "Deriva: sen(x)";
            respuestaCorrecta = "cos(x)";
            pistaActual = "La derivada del seno es coseno.";
        }

        if(tipo === 4){
            pregunta = "lim(x→0) sen(x)/x";
            respuestaCorrecta = 1;
            pistaActual = "Es un límite notable.";
        }

        if(tipo === 5){
            pregunta = "Deriva: ln(x)";
            respuestaCorrecta = "1/x";
            pistaActual = "Es una derivada básica.";
        }
    }

    // ========================
// GEOMETRÍA
// ========================
if(tema === "geometria"){

    let tipo;

    // 🔹 BÁSICO
    if(nivel === "basico"){

        tipo = random(1,5);

        if(tipo === 1){
            let lado = random(2,20);
            pregunta = `Área de un cuadrado de lado ${lado}`;
            respuestaCorrecta = lado * lado;
            pistaActual = "Área = lado × lado.";
        }

        else if(tipo === 2){
            let base = random(2,20);
            let altura = random(2,20);
            pregunta = `Área de un rectángulo base ${base} y altura ${altura}`;
            respuestaCorrecta = base * altura;
            pistaActual = "Multiplica base por altura.";
        }

        else if(tipo === 3){
            let lado = random(2,20);
            pregunta = `Perímetro de un cuadrado de lado ${lado}`;
            respuestaCorrecta = lado * 4;
            pistaActual = "Perímetro = lado × 4.";
        }

        else if(tipo === 4){
            pregunta = "¿Cuánto suman los ángulos internos de un triángulo?";
            respuestaCorrecta = 180;
            pistaActual = "Es una propiedad básica.";
        }

        else{
            let base = random(2,20);
            let altura = random(2,20);
            pregunta = `Área de un triángulo base ${base} y altura ${altura}`;
            respuestaCorrecta = (base * altura) / 2;
            pistaActual = "Área triángulo = (base × altura) / 2.";
        }
    }

    // 🔹 INTERMEDIO
    else if(nivel === "intermedio"){

        tipo = random(1,5);

        if(tipo === 1){
            let radio = random(2,15);
            pregunta = `Área de un círculo radio ${radio} (π=3.14)`;
            respuestaCorrecta = (3.14 * radio * radio).toFixed(2);
            pistaActual = "Área = π × r².";
        }

        else if(tipo === 2){
            let lado = random(3,15);
            pregunta = `Volumen de un cubo de lado ${lado}`;
            respuestaCorrecta = lado * lado * lado;
            pistaActual = "Volumen = lado³.";
        }

        else if(tipo === 3){
            let base = random(5,20);
            let altura = random(5,20);
            pregunta = `Área de un rombo base ${base} y altura ${altura}`;
            respuestaCorrecta = base * altura;
            pistaActual = "Área rombo = base × altura.";
        }

        else if(tipo === 4){
            pregunta = "¿Cuánto mide cada ángulo interno de un cuadrado?";
            respuestaCorrecta = 90;
            pistaActual = "360° dividido para 4.";
        }

        else{
            let base = random(5,20);
            let altura = random(5,20);
            pregunta = `Perímetro de un rectángulo base ${base} y altura ${altura}`;
            respuestaCorrecta = 2*(base + altura);
            pistaActual = "Perímetro = 2(base + altura).";
        }
    }

    // 🔹 AVANZADO
    else if(nivel === "avanzado"){

        tipo = random(1,5);

        if(tipo === 1){
            let radio = random(3,10);
            let altura = random(5,15);
            pregunta = `Volumen de un cilindro radio ${radio} y altura ${altura} (π=3.14)`;
            respuestaCorrecta = (3.14 * radio * radio * altura).toFixed(2);
            pistaActual = "V = π × r² × h.";
        }

        else if(tipo === 2){
            let radio = random(3,10);
            pregunta = `Área de una esfera radio ${radio} (π=3.14)`;
            respuestaCorrecta = (4 * 3.14 * radio * radio).toFixed(2);
            pistaActual = "Área esfera = 4πr².";
        }

        else if(tipo === 3){
            pregunta = "¿Cuánto mide cada ángulo interno de un hexágono regular?";
            respuestaCorrecta = 120;
            pistaActual = "(n−2)×180 / n";
        }

        else if(tipo === 4){
            let a = random(3,10);
            let b = random(4,12);
            pregunta = `Hipotenusa de triángulo rectángulo con catetos ${a} y ${b}`;
            respuestaCorrecta = Math.sqrt(a*a + b*b).toFixed(2);
            pistaActual = "Usa el Teorema de Pitágoras.";
        }

        else{
            let lado = random(5,20);
            pregunta = `Área de un pentágono regular de lado ${lado} (usa fórmula aproximada: 1.72 × lado²)`;
            respuestaCorrecta = (1.72 * lado * lado).toFixed(2);
            pistaActual = "Área ≈ 1.72 × lado².";
        }
    }
}

    document.getElementById("pregunta").innerText = pregunta;
    document.getElementById("resultado").innerText = "";
    document.getElementById("pista").innerText = "";
    document.getElementById("respuesta").value = "";
}



function verificarRespuesta(){

    let usuario = document.getElementById("respuesta").value.trim();

    if(usuario == respuestaCorrecta){

        puntos += 10;
        document.getElementById("puntos").innerText = puntos;
        


        document.getElementById("resultado").innerText = "✅ Correcto 🔥";
        document.getElementById("resultado").style.color = "green";

        setTimeout(() => {
            generarEjercicio();
        }, 1000);

    }else{

        vidas--;
        document.getElementById("vidas").innerText = vidas;

        document.getElementById("resultado").innerText = "❌ Incorrecto";
        document.getElementById("resultado").style.color = "red";

        document.getElementById("respuesta").value = "";

        if(vidas <= 0){
            alert("💀 Te quedaste sin vidas. Puntuación final: " + puntos);
            vidas = 3;
            puntos = 0;
            document.getElementById("vidas").innerText = vidas;
            document.getElementById("puntos").innerText = puntos;
            generarEjercicio();
        }
    }
 
}

function mostrarPista(){
    document.getElementById("pista").innerText = "💡 Pista: " + pistaActual;
}