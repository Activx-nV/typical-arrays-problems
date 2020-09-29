
exports.min = function min(array = []) {
  let temp = array[0];
  if (array.length) {
    for (let item of array) {
      if (item < temp) {
        temp = item;
      }
    }
    return temp;
  } else if (array.length == 0) {
    return 0;
  }
}

exports.max = function max(array = []) {
  let temp = array[0];
  if (array.length) {
    for (let item of array) {
      if (item > temp) {
        temp = item;
      }
    }
    return temp;
  } else if (array.length == 0) {
    return 0;
  }
}

exports.avg = function avg(array = []) {
  let summ = 0;
  if (array.length) {
    for (let item of array) {
      summ += item;
    }
    summ /= array.length;
    return summ;
  } else return 0;
}
