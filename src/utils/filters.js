/**
 * @param  {number} num
 * @return {string}
 *
 * 123456 -> "123,456"
 *
 */
export function toThousandFilter(num) {
  return num.toLocaleString();
}
