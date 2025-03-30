let limite = 20;

for (let i = 1; i <= limite; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}