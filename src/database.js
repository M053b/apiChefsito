const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/intersec',{
    userNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(db => console.log('Ya esta conectada'))
.catch((err) => console.error(err));