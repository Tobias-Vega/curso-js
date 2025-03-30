// Fecha y hora actual
const ahora = new Date();
console.log(ahora);

// Fecha específica (año, mes, día, hora, minuto, segundo, milisegundo)
const fechaEspecifica = new Date(2024, 1, 3, 10, 30, 0); // 3 de febrero de 2024 (mes empieza desde 0)
console.log(fechaEspecifica);

// Fecha en formato string
const fechaString = new Date("2024-02-03T10:30:00");
console.log(fechaString);

// Desde milisegundos (Epoch time)
const desdeMilisegundos = new Date(1706962200000);
console.log(desdeMilisegundos);

const fecha = new Date();

console.log("Año:", fecha.getFullYear());
console.log("Mes:", fecha.getMonth()); // 0 = enero, 11 = diciembre
console.log("Día:", fecha.getDate());
console.log("Día de la semana:", fecha.getDay()); // 0 = domingo, 6 = sábado
console.log("Hora:", fecha.getHours());
console.log("Minutos:", fecha.getMinutes());
console.log("Segundos:", fecha.getSeconds());
console.log("Milisegundos:", fecha.getMilliseconds());

const fechaMod = new Date();

fechaMod.setFullYear(2025);
fechaMod.setMonth(5); // Junio
fechaMod.setDate(15);
fechaMod.setHours(12);
fechaMod.setMinutes(45);

console.log(fechaMod);

const fecha1 = new Date("2024-01-01");
const fecha2 = new Date("2024-02-01");

// Diferencia en milisegundos
const diferencia = fecha2 - fecha1;
console.log("Diferencia en milisegundos:", diferencia);

// Convertir a días
const diasDiferencia = diferencia / (1000 * 60 * 60 * 24);
console.log("Diferencia en días:", diasDiferencia);

const fecha3 = new Date();

console.log(fecha.toDateString()); // "Mon Feb 03 2024"
console.log(fecha.toISOString());  // "2024-02-03T10:30:00.000Z"
console.log(fecha.toLocaleDateString()); // "3/2/2024" (depende del idioma del navegador)
console.log(fecha.toLocaleTimeString()); // "10:30:00 AM" (depende del idioma del navegador)
console.log(fecha.toUTCString()); // "Sat, 03 Feb 2024 10:30:00 GMT"

const fechaA = new Date("2024-01-01");
const fechaB = new Date("2024-02-01");

console.log(fechaA > fechaB); // false
console.log(fechaA < fechaB); // true
console.log(fechaA.getTime() === fechaB.getTime()); // false
