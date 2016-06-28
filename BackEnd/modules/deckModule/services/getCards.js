'use strict';

import Cards from '../../../schema/cardsModel';

export default (req, res) => {
	Cards.find({}, (err, cards) => {
		if (err) { //if DB connection error
			res.status(503).json({
				status: 'Service Unavailable'
			});
		} else if (cards) {
			res.json(cards);
		} else {
			res.status(401).json({
				status: 'Unauthorized'
			});
		}
	});
};