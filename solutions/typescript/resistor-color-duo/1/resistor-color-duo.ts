const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

export function decodedValue(arr: string[]) {
  const firstIndex = colors.indexOf(arr[0]).toString();
  const secondIndex = colors.indexOf(arr[1]).toString();

  return Number(firstIndex + secondIndex);
}
