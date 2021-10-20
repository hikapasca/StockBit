function anagram(input) {
  const moveToArrayOfObj = [];
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const resultTemp = [];
  const result = [];
  let counter = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      for (let k = 0; k < letter.length; k++) {
        if (input[i][j] === letter[k]) {
          counter += k;
        }
      }
    }
    moveToArrayOfObj.push({
      word: input[i],
      wordLength: input[i].length,
      value: counter,
    });
    counter = 0;
  }
  let flag = false;
  while (!flag) {
    flag = true;
    for (let i = 1; i < moveToArrayOfObj.length; i++) {
      if (
        moveToArrayOfObj[i - 1].wordLength * 10000 +
          moveToArrayOfObj[i - 1].value >
        moveToArrayOfObj[i].wordLength * 10000 + moveToArrayOfObj[i].value
      ) {
        flag = false;
        let temp = moveToArrayOfObj[i - 1];
        moveToArrayOfObj[i - 1] = moveToArrayOfObj[i];
        moveToArrayOfObj[i] = temp;
      }
    }
  }
  moveToArrayOfObj.push({ value: 0, wordLength: 0 });
  let temp2 = [];
  let temp3 = [];
  for (let i = 0; i < moveToArrayOfObj.length; i++) {
    if (temp2.length !== 0) {
      if (
        moveToArrayOfObj[i].wordLength === temp2[0].wordLength &&
        moveToArrayOfObj[i].value === temp2[0].value
      ) {
        temp2.push(moveToArrayOfObj[i]);
        temp3.push(moveToArrayOfObj[i].word);
      } else if (
        moveToArrayOfObj[i].wordLength !== temp2[0].wordLength ||
        moveToArrayOfObj[i].value !== temp2[0].value
      ) {
        resultTemp.push(temp2);
        result.push(temp3);
        temp2 = [];
        temp3 = [];
        temp2.push(moveToArrayOfObj[i]);
        temp3.push(moveToArrayOfObj[i].word);
      }
    } else if (temp2.length === 0) {
      temp2.push(moveToArrayOfObj[i]);
      temp3.push(moveToArrayOfObj[i].word);
    }
  }
  return result;
}

let list = ["kita", "atik", "tika", "aku", "kia", "makan", "kau"];
console.log(anagram(list));
