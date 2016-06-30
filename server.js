/**
 * Express Web Server
 * Listening to port 3000 or server port
 * To start the server type in console `npm start`
 */

'use strict';

import express from 'express';
import path from 'path';
import mongoose from 'mongoose'; //Interact with our MongoDB database
import globalMiddlewares from './globalMiddlewares/globalMiddlewares';
import getDbConnectionUrl from './configuration/getDbConnectionUrl';
import deckRouter from './modules/deckModule/middlewares/deckRouter';

const app = express(),
	port = process.env.PORT || 3000;

/**
 * @description Set port
 */
app.listen(port);

/**
 * @description Connect with database
 */
mongoose.connect(getDbConnectionUrl().prodaction);

/**
 * @description Use global middle-wares
 */
globalMiddlewares(app);

/**
 * @description Router for index page
 */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '..') + '/App/index.html'));

/**
 * @description Authentication API for signIn, signUp
 */
deckRouter(app);

export default app