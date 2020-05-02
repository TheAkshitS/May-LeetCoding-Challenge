var numJewelsInStones = function (J, S) {
  const uniqueJewels = String.prototype.concat(...new Set(J))
  const stonesArray = S.split('')
  let count = 0

  for (jewel in uniqueJewels) {
    for (stone in stonesArray) {
      if (uniqueJewels[jewel] === stonesArray[stone]) count++
    }
  }
  return count
}
