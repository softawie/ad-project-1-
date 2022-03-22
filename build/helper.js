"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.catchError = void 0;
function catchError({ res, filename, source }) {
    // const filename  = req.query.filename as string;
    // const source = Data.includes(filename);
    if (filename === undefined) {
        return res.status(400).send('bad req 400');
    }
    if (source === false) {
        return res.status(500).send('no resourse req 500');
    }
}
exports.catchError = catchError;
