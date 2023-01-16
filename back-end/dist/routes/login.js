var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Router from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
export const router = Router();
const prisma = new PrismaClient();
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, password } = req.body;
        const nameOrEmail = name;
        yield prisma.user.findFirst({ where: { OR: [{ name: nameOrEmail.toLowerCase() }, { email: nameOrEmail }] } }).then(user => {
            if (!user) {
                return res.json({ message: "Invalid Username or Password" });
            }
            ;
            bcrypt.compare(password, user === null || user === void 0 ? void 0 : user.password).then(isCorrect => {
                if (isCorrect) {
                    const payload = {
                        id: user === null || user === void 0 ? void 0 : user.id, name: user === null || user === void 0 ? void 0 : user.name,
                    };
                    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 86400 }, (err, token) => {
                        if (err)
                            return res.json({ message: err });
                        return res.json({ message: "Success", token: `Bearer ${token}` });
                    });
                }
                else {
                    return res.json({ message: "Invalid UserName or Password" });
                }
            });
        });
    }
    catch (error) {
        res.json(error);
    }
}));
