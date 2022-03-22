"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let ts = Date.now();
let date_ob = new Date(ts);
const logger = (req, res, next) => {
    let url = req.url;
    console.log(`this site ${url} visited at ${date_ob}`);
    next();
};
exports.default = logger;
