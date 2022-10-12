"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect(config_1.default.DB.URI);
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('MongoDB ContactBook database connection established successfully');
});
connection.on('error', (err) => {
    console.log(err);
    process.exit(0);
});
