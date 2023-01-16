var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { verifyJwt } from "../utility/verify_jwt.js";
export const router = Router();
const prisma = new PrismaClient();
router.get('/register', verifyJwt, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    res.json({ isLoggedIn: true, username: (_a = req.user) === null || _a === void 0 ? void 0 : _a.name });
}));
router.post('/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password } = req.body;
        const takenUser = yield prisma.user.findFirst({ where: {
                name: name.toLowerCase()
            } });
        const takenUserEmail = yield prisma.user.findUnique({ where: { email } });
        if (takenUser || takenUserEmail) {
            res.json({ message: "User name or email has already been taken" });
        }
        else {
            const hashPassword = yield bcrypt.hash(password, 10);
            const result = yield prisma.user.create({ data: {
                    name: name.toLowerCase(), email: email.toLowerCase(), password: hashPassword
                } });
            res.json(result);
        }
    }
    catch (error) {
        res.json(error);
    }
}));
