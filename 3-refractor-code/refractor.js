function findFirstStringInBracket(str) {
  if (str.length > 0) {
    let indexFirstBracketFound = str.indexOf("(");
    if (indexFirstBracketFound >= 0) {
      let wordsAfterFirstBracket = str.substr(
        indexFirstBracketFound + 1,
        str.length - 1
      );
      if (wordsAfterFirstBracket) {
        let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
        if (indexClosingBracketFound >= 0) {
          return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
        } else {
          return "empty closing bracket";
        }
      } else {
        return "empty string";
      }
    } else {
      return "empty bracket";
    }
  } else {
    return "empty input";
  }
}

console.log(findFirstStringInBracket("(indonesia)"));
