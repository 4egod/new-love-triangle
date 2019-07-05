/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
    var res = 0;

    for (var i = 0; i < preferences.length; i++) {

        var x = preferences[i];

        x--;

        if (x >= preferences.length) {
            continue;
        }

        var y = preferences[x];

        y--;

        if (y <= x || y < i) {
            continue;
        }

        if (y >= preferences.length) {
            continue;
        }

        if (preferences[y] === i + 1) {
            res++;
        }
    }

    return res;
};
