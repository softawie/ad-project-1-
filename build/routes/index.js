"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("./api");
const routes = express_1.default.Router();
routes.get('/', (req, res) => {
    res.send('here is my Main Routes !');
});
routes.use('/api/images', api_1.Images);
routes.use('/images', api_1.Second);
exports.default = routes;
