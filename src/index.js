function recur(validData, combination = [], result = []) {
    const current = validData.slice(0, 1)[0];
    const others = validData.length > 1 ? validData.slice(1) : null;
  
    current.forEach(item => {
      const tempCombination = combination.concat(item);
      if (!others) {
        result.push(tempCombination);
      } else {
        recur(others, tempCombination, result);
      }
    });
    return result;
  }
  
  const filter = arr => Array.isArray(arr) && arr.length;
  
  /**
   * cartesian product
   * @param {object} arrays
   * @returns {array}
   */
  function cartesianProductFn(arrays) {
    if (filter(arrays)) {
      return recur(arrays.filter(filter));
    } else if (arrays instanceof Object) {
      const temp = Object.values(arrays).filter(filter);
      if (temp.length) {
        return recur(temp);
      }
    }
    return [];
  }
  
  export default cartesianProductFn;
  

  