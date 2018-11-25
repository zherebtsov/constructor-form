export class Utils {

  /**
   * The function checks the array for emptiness
   * @param array
   * @returns {bool}
   */
  static isEmptyArray(array) {
    return Array.isArray(array) && array.length === 0;
  }

  /**
   * Correction of array elements by the index pair
   * @param array([10, 20, 30])
   * @param pair([2, 3])
   * @return array([10, 30, 20])
   */
  static correctArray(array, pair) {
    if ((pair[0] < 0 || pair[0] > array.length - 1) || (pair[1] < 0 || pair[1] > array.length - 1)) {
      return array;
    }
    const result = array.slice();
    result[pair[1]] = result.splice(pair[0],1, result[pair[1]])[0];
    return result;
  }

  /**
   * Return unique array
   * @param array
   * @return {string[]}
   */
  static uniqueArray(array) {
    const obj = {};

    array.forEach(element => {
      obj[element] = ''
    });

    return Object.keys(obj);
  }

  /**
   * Сheck for empty elements in the array
   * @param array
   * @return {boolean}
   */
  static hasEmptyElement(array) {
    if (this.isEmptyArray(array)) {
      return true;
    }
    return array.findIndex(element => element === '') !== -1
  }

  /**
   * Generates a random string
   * @return {string}
   */
  static generateRandomString() {
    return Math.random().toString(36).substr(2, 11);
  }

}
