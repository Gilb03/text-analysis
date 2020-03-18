var mongoose = require('mongoose');

var opportunitySchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username: String
    },
    link: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'comment'
        }
    ]
});
module.exports = mongoose.model('Opportunity', opportunitySchema);

const port = process.env.PORT || 3000
app.listen(port, process.env.IP, function() {
console.log('server is listening on port: ' + port)
module.exports = app
});

