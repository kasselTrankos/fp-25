import { Redis } from '@upstash/redis';
import { curry } from 'ramda';
import Reader from './lib/reader.js';
import { logger } from './utils/index.js';
import Task from './lib/Task.js';
const REDIS_URL =`https://neat-tapir-14955.upstash.io`;
const REDIS_TOKEN = `ATprAAIjcDEzZDJkZmE1ODI1NTc0YjM3YWE2YjE3YTJjOGNjZGRmZnAxMA`;

const redis = new Redis({
  url: REDIS_URL,
  token: REDIS_TOKEN,
});

const set = curry ((redis, key, value) => {
  return new Task((reject, resolve) =>  {
    redis.set(key, value).then(resolve).catch(reject);

  });
})

set(redis, 'love', {a:1, n:2, r:3}).fork(logger('ERR'), logger('OK'))

// await redis.set('foo', 'bar');
// const data = await redis.get('foo');