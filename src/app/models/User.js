// const db = require('../../config/db');
// const fs = require('fs');
// const { hash } = require('bcryptjs');
// const Product = require('../models/Product');
const Base = require('../models/Base');

Base.init({table: 'users'});

module.exports = {
    ...Base
}