import mockjs from 'mockjs';

mockjs.mock('/demo', 'get', options => {
  window.console.log(options);
  const response = mockjs.mock({
    'A|1-100': 1,
    'B|1-100.1-2': 1,
    'C|1': true,
    'D|2': [{ a: 1, b: 2 }],
    'E': '@string',
    'F': '@date',
    'G': '@time',
    'H': '@title',
    'I': '@name',
    'J': '@domain',
    'K': '@email',
    'L': '@ip',
    'M': '@guid',
    'N': '@ctitle',
    'O': '@csentence',
    'P': '@region',
    'Q': '@province',
    'R': '@city'
  });
  return response;
});
