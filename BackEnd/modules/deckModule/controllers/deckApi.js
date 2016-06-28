'use strict';

import express from 'express';
import DECK_API_PATHS from '../consts/DECK_API_PATHS';
import getCards from '../services/getCards';

let deckApi = express.Router(); // Get an instance of a router

deckApi.get(DECK_API_PATHS.CARDS, (req, res) => { //Sign in
	getCards(req, res);
});

export default deckApi;