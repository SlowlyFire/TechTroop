let studentScores = [92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81];

const gradeCounts = studentScores.reduce((acc, score) => {
  if (score >= 90)      acc.A++;
  else if (score >= 80) acc.B++;
  else if (score >= 70) acc.C++;
  else                  acc.F++;
  return acc;
}, { A: 0, B: 0, C: 0, F: 0 });

console.log(gradeCounts); // { A: 5, B: 6, C: 4, F: 0 }