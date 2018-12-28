var password = checkPass(prompt('Введите пароль', ''));

console.log(password);

function checkPass(pass) {
  var correctPass = '12345';

  for (var i = 1; i <= 5; i++) {
    for (var j = 0; j <= correctPass.length; j++) {
      if (pass.charAt(j) !== correctPass.charAt(j)) {
        break;
      }
    }
  }

  return true;
}
