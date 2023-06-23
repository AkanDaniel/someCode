function insertCommaIntoNumber(numy) {
  const num = numy.split(".");
  const m = num[0];
  var dum = [];
  var count;
  let result = "";

  for (let i = 0; i < m.length; i++) {
    dum.push(m[i]);
  }
  count = dum.length;

  if (count < 4) {
    for (let i = 0; i < dum.length; i++) {
      result += dum[i];
    }
    console.log(result.concat(".").concat(num[1]));
  } else if (count == 4) {
    dum.splice(1, 0, ",");
    for (let i = 0; i < dum.length; i++) {
      result += dum[i];
    }
    console.log(result.concat(".").concat(num[1]));
  } else {
    let anotherCount = count;
    for (let i = 0; i < count; i++) {
      if (anotherCount > 0 && anotherCount < 4) {
        for (let i = 0; i < dum.length; i++) {
          result += dum[i];
        }
        console.log(result.concat(".").concat(num[1]));
        break;
      } else if (anotherCount == 4) {
        dum.splice(1, 0, ",");
        for (let i = 0; i < dum.length; i++) {
          result += dum[i];
        }
        console.log(result.concat(".").concat(num[1]));
      } else {
        dum.splice(anotherCount - 3, 0, ",");
        anotherCount -= 3;
      }
    }
  }
}

module.exports = insertCommaIntoNumber;
