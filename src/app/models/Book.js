const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Book = new Schema ({
    name: { type: String, required: true },
    description: { type: String, },
    price: { type: Number, },
    page: { type: Number, },
    image: { type: String },
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true,
});

// add plugins
mongoose.plugin(slug);
Book.plugin(mongooseDelete, {
    deletedAt: true, 
    overrideMethods: 'all',
});

module.exports = mongoose.model('Book', Book);
