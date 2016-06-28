'use strict';

import deckApi from '../controllers/deckApi';

export default (app) => {
	/**
	 * @description Middle-Wear: Parse requests as json
	 */
	app.use('/api', deckApi); //Makes available deckApi to the app by Url composition: adds `/api` as prefix in  the url
};