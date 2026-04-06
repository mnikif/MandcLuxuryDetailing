import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let redis: Redis;
function getRedis() {
  if (!redis) redis = Redis.fromEnv();
  return redis;
}

let _bookLimit: Ratelimit;
export function getBookingRateLimit() {
  if (!_bookLimit) {
    _bookLimit = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(5, "1 h"),
      prefix: "rl:book",
    });
  }
  return _bookLimit;
}

let _contactLimit: Ratelimit;
export function getContactRateLimit() {
  if (!_contactLimit) {
    _contactLimit = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(10, "1 h"),
      prefix: "rl:contact",
    });
  }
  return _contactLimit;
}
