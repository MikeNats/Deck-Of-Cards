'use strict';

import should from 'should';
import request from 'supertest';
import appConfig from '../../../configuration/config';
import getDbConnectionUrl from '../../../configuration/getDbConnectionUrl';
import DECK_API_PATHS from '../../../modules/deckModule/consts/DECK_API_PATHS';

describe('deckModule', () => {
	it('should get the cards', (done) => {
		request(appConfig.devUrl)
			.get('/api' + DECK_API_PATHS.CARDS)
			.end((err, res) => {
				if (err) {
					throw err;
				}

				res.should.have.property('status', 200);
				done();
			});
	});
});