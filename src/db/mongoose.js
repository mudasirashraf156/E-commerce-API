const mongoose = require('mongoose');
console.log('MongoDB URL:', process.env.URL);

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error.message);
    });
