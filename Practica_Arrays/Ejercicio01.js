function primitiveLotto() {
    const combis = [];

    for (let i = 0; i < 50; i++) {
        const combination = new Set();
        while (combination.size < 6) {
            const numRandom = Math.floor(Math.random() * 49) + 1;
            combination.add(numRandom);
        }
        combis.push([...combination].sort((a, b) => a - b));  
    }

    for (let index = 0; index < combis.length; index++) {
        const combina = combis[index];
        console.log(`Combinación ${index + 1}: ${combina.join(", ")}`);
    }
}

primitiveLotto();