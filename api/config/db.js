const mongoose= require('mongoose')

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER_PASSWORD}@cluster0.htztngc.mongodb.net/checkpoint_4`)
    .then(()=> console.log('Connected ot MongoDB'))
    .catch((err)=>console.log('Failed to connect to MongoDB',err))