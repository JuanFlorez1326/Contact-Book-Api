"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const private_routes_1 = __importDefault(require("./routes/private.routes"));
// Initializations
exports.app = (0, express_1.default)();
// Settings
exports.app.set('port', process.env.PORT || 3000);
// Middlewares
exports.app.use((0, morgan_1.default)('dev'));
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(express_1.default.json());
exports.app.use(auth_routes_1.default);
exports.app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
exports.app.use(private_routes_1.default);
// Routes
exports.app.get('/', (req, res) => {
    res.send('The API is at http://localhost:' + exports.app.get('port'));
});
