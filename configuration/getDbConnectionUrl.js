'use strict';

import dbCredentials from './config'

export default () => {
	let credentials = 'mongodb://' + dbCredentials.userName + ':' + dbCredentials.passWord;

	return {
		prodaction: credentials + '@ds023694.mlab.com:23694/ibm'
	}
};