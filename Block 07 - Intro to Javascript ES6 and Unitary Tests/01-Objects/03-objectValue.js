const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};

const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsWithValues = (student) => Object.values(student);

// Sem Object.values
console.log("Sem Object.values")
console.log(listSkillsWithFor(student));

console.log() // \n

// Com Object.values
console.log("Com Object.values")
console.log(listSkillsWithValues(student));