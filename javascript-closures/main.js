function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

var medicalSchool = graduate('M.D.');
var lawSchool = graduate('Esq.');

console.log('medicalSchool(\'Kenny Park\'):', medicalSchool('Kenny Park'));
console.log('lawSchool(\'Kenny Park\'):', lawSchool('Kenny Park'));
