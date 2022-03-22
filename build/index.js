"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = __importDefault(require("./utiles/logger"));
const app = (0, express_1.default)();
// for Route with middleware logger
app.use('/', logger_1.default, routes_1.default);
// using express in server
const port = 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
