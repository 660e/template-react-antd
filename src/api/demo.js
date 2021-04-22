import { service } from '@/utils/service.js';
import mockjs from 'mockjs';

const demoApi = {
  getRandomuserData(results, page, seed) {
    return service.get('https://randomuser.me/api/', {
      params: { results, page, seed }
    });
  },
  getMockData1() {
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
    return new Promise(resolve => resolve(response));
  },
  getMockData2() {
    return service.get('/demo');
  }
};

export default demoApi;
