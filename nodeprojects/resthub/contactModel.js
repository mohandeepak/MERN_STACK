var mongoose = require('mongoose');
// Setup schema
var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    city: String,
    phone: String,
    email: String
});
// Export Contact model
var Contact = module.exports = mongoose.model('contact', contactSchema);
module.exports.get = function (callback, limit) {
    Contact.find(callback).limit(limit);
}