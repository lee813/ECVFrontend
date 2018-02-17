import request from '../utils/request';

export function query() {
  return request('https://randomuser.me/api/');
}
