// https://leetcode.com/explore/featured/card/may-leetcoding-challenge/534/week-1-may-1st-may-7th/3316/

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1
    let high = n

    while (low < high) {
      let mid = Math.floor((high + low) / 2)

      if (isBadVersion(mid)) high = mid
      else {
        low = mid + 1
      }
    }
    return low
  }
}
