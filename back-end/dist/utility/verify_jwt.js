import jwt from 'jsonwebtoken';
export const verifyJwt = (req, res, next) => {
    var _a;
    const token = (_a = req.headers['x-access-token']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if (err) {
                res.json({
                    isLoggedIn: false,
                    message: "Failed to authenticate"
                });
            }
            else {
                req.user.id = payload === null || payload === void 0 ? void 0 : payload.id;
                req.user.name = payload === null || payload === void 0 ? void 0 : payload.name;
                next();
            }
        });
    }
    else {
        res.json({ isLoggedIn: false, message: "Plz Sig Up First." });
    }
};
