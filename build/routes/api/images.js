"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const constants_1 = require("../../constants");
const helper_1 = require("../../helper");
const Images = express_1.default.Router();
Images.get('/', (req, res) => {
    const fileName = req.query.fileName;
    const source = constants_1.Data.includes(fileName);
    (0, helper_1.catchError)({ res, fileName, source });
    res.send(path_1.default.resolve('./') + `../../images/${fileName}.jpg`);
});
exports.default = Images;
