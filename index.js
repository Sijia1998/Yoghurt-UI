var isArr = function() {
  return Object.prototype.toString().slice(8, -1).toLowerCase() === 'array';
}
module.exports = isArr;
