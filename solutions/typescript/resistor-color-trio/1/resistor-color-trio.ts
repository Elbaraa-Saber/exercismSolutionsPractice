const colors = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

function getFirstAndSecondNumber(first: number, second: number): string {
  let number: string;
  if (first === 0 && second === 0) {
    number = "0";
  } else if (first === 0 && second !== 0) {
    number = second.toString();
  } else {
    number = first.toString() + second.toString();
  }
  return number;
}

function getZeros(thirdIndex: number): string {
  let zeros: string;
  if (thirdIndex === 0) {
    zeros = "";
  } else {
    zeros = (10 ** thirdIndex).toString();
  }
  return zeros;
}

function addZerosToString(number: string, zeros: string): string {
  let counter = Number(zeros);
  let result = number;
  for (counter; counter > 1; counter = counter / 10) {
    result += "0";
  }
  return result;
}

function getTheLastResult(result: string): string {
  let number = Number(result);
  let lastResult: string = "";
  if (number > 1000000000) {
    number /= 1000000000;
    lastResult = number.toString() + " gigaohms";
    return lastResult;
  } else if (number > 1000000) {
    number /= 1000000;
    lastResult = number.toString() + " megaohms";
    return lastResult;
  } else if (number > 1000) {
    number /= 1000;
    lastResult = number.toString() + " kiloohms";
    return lastResult;
  } else {
    lastResult = number.toString() + " ohms";
    return lastResult;
  }
}

export function decodedResistorValue(colorsArr : string[]) {
  const firstIndex = colors.indexOf(colorsArr[0]);
  const seconedIndex = colors.indexOf(colorsArr[1]);
  const thirdIndex = colors.indexOf(colorsArr[2]);

  let firstAndSecondNumber = getFirstAndSecondNumber(firstIndex, seconedIndex);

  let zeros = getZeros(thirdIndex);

  let result = addZerosToString(firstAndSecondNumber, zeros);

  let lastResult = getTheLastResult(result);

  return lastResult;
}
