const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

(async () => {
    console.log("hi");

    const password     = "Rf240688";
    const passwordHash = await bcrypt.hash(password, 10);
    const isEqual      = await bcrypt.compare(password, passwordHash);

    console.log(isEqual);
})();

(() => {
    console.log("hi2");

    const token     = jwt.sign(
        {
        'userId': '123'
        },
        process.env.TOKEN_SECRET,
        {
            expiresIn: '7d'
        }
    );

    console.log(process.env.TOKEN_SECRET);
    console.log(token);

})();