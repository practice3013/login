const mongoose = require('mongoose');
const Schema = mongoose.Schema;

main()
    .then( () => {
        console.log("Connected to DB");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://pchaitanya3013:TTGbaxaSGEqrL1hC@cluster0.tokq1pi.mongodb.net/');
}

const loginSchema = new Schema( {
    email: String,
    password: String,
});

const login = mongoose.model('login', loginSchema);

module.exports = login;
