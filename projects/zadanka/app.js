function alphabetPos(text) {
  console.clear();
  var result = [];
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
    "w", "x", "y", "z"];
  text = text.toLowerCase().split('');
  for (var i = 0; i < text.length; i++) {
    var j = alphabet.indexOf(text[i]) + 1;
    if (j) result.push(j);
  }
  return result.join(" ");
}

function sumTwoSmallestNumbers(numbers) {
  console.clear();
  var first = Number.MAX_VALUE;
  var second = Number.MAX_VALUE;

  for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];

    if (number < first) {
      second = first;
      first = number;
    }

  }
  console.log( first + second);
};
