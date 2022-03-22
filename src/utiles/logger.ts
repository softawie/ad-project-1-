import express from 'express';

let ts = Date.now();
let date_ob = new Date(ts);

  const logger = (
    req: express.Request, 
    res: express.Response, 
    next: Function
): void => {
    let url = req.url;
    console.log(`this site ${url} visited at ${date_ob}`);
    next();
};


export default logger;