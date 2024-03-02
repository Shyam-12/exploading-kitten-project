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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { authorization } = req.headers;
    if (!authorization) {
        console.log("no authorization header");
        return res.status(401).json({ error: "Authorization token not present" });
    }
    const token = authorization.split(' ')[1];
    try {
        const { id } = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        // console.log(`user id is -> ${id}`)
        // req.currUser = await userRepository.search().where('id').eq(id).return.all()
        req.currUserId = id; // settting currUserId inorder for fetching the user from redis using entityId
        console.log("curr user is - ", req.currUserId);
        next();
    }
    catch (err) {
        res.status(401).json({ error: "Token not verified" });
    }
});
exports.checkAuth = checkAuth;
