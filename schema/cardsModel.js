'use strict';

import mongoose from 'mongoose';

export default mongoose.model('Cards', new mongoose.Schema({
	cards: []
}));