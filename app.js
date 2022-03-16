const initialMemoryUsage = process.memoryUsage();
const yourName = process.argv[1];
const environment = process.env();

for (let i = 0; i<= 10000; i++) {

}

const currentMemoryUsage = process.memoryUsage();
console.log(`Hai, ${yourName}`);
console.log(`Mode environment : ${environment}`);
console.log(`Penggunaanmemori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);