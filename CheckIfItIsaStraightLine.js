// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

// Example 1:

// Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
// Output: true
// Example 2:

// Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
// Output: false

// Constraints:

// 2 <= coordinates.length <= 1000
// coordinates[i].length == 2
// -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
// coordinates contains no duplicate point.

var checkStraightLine = function (coordinates) {
  const xDifference = Math.floor(coordinates[1][0] - coordinates[0][0])
  const yDifference = Math.floor(coordinates[1][1] - coordinates[0][1])
  let xCurrentDifference
  let yCurrentDifference

  for (let i = 2; i < coordinates.length; ++i) {
    xCurrentDifference = Math.floor(coordinates[i][0] - coordinates[i - 1][0])
    yCurrentDifference = Math.floor(coordinates[i][1] - coordinates[i - 1][1])

    if (yDifference * xCurrentDifference !== xDifference * yCurrentDifference)
      return false
  }

  return true
}
