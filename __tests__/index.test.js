import http from 'http';
import {double} from '../src/index';

test('should return 200', done => {
  http.get('http://127.0.0.1:1337', res => {
    expect(res.statusCode).toBe(200);
    done();
  });
});
