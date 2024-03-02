import { Client, Repository } from 'redis-om';
import { config } from 'dotenv';
config()


const redisClient = new Client();

console.log('USER:', process.env.USER);
console.log('PASS:', process.env.PASS);
console.log('URL:', process.env.URL);

(async () => {
    console.log(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`)
    // await redisClient.open(`redis://${process.env.USER}:${process.env.PASS}@${process.env.URL}`)
    await redisClient.open(`redis://default:1O4Y4ScOHLqEF2FtOE0Bf9U5meFbAvLE@redis-16741.c264.ap-south-1-1.ec2.cloud.redislabs.com:16741`)
})();


// redis://${process.env.username}:${process.env.passsword}@${connecctionstrong}

export { redisClient }
