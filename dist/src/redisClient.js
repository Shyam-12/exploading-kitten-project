"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisClient = void 0;
const redis_om_1 = require("redis-om");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const redisClient = new redis_om_1.Client();
exports.redisClient = redisClient;
console.log('USER:', process.env.USER);
console.log('PASS:', process.env.PASS);
console.log('URL:', process.env.URL);
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`);
    // await redisClient.open(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`)
    yield redisClient.open(`redis://default:1O4Y4ScOHLqEF2FtOE0Bf9U5meFbAvLE@redis-16741.c264.ap-south-1-1.ec2.cloud.redislabs.com:16741`);
}))();
