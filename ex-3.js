// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore;
// Start coding here

minScore = scores[0]; // เอา index ขึ้นมาสมมุติว่าต่ำที่สุดก่อนก่อน

for (let i = 1; i < scores.length; i++) {
    if (scores[i] < minScore) {
        minScore = scores[i];
    }
}

console.log(`คะแนนที่ต่ำที่สุดคือ = ${minScore}`);