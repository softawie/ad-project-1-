"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// for Route 
app.get('/api', (req, res) => {
    res.send('server working fine !');
});
// using express in server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
