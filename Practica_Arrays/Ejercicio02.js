function validateFrequencies () {
    const frequencies = Array(10).fill(0);
    for (let i = 0; i < 10000; i++) {
        const numRandom = Math.floor(Math.random() * 10)+ 1;
        frequencies[numRandom - 1]++;        
    }

    for (let i = 0; i < frequencies.length; i++) {
        const contFreq = frequencies[i];
        console.log(`Numero ${i + 1}: ${contFreq}`);
    }
}
validateFrequencies();