In line 132 of models/user.js, I implemented a security measure to assure that the user trying to update has proper authentication.

In line 51 of middleware/auth.js, I changed "jwt.decode" to "jwt.verify".  Using decode will decode the JWT without validating signatures on the token.  To avoid any security risk, I changed it to verify to give the JWT a signature.

In line 103 of routes/users.js, I added the await operator because it was missing in the async function.

In routes/auth.js, the function "createTokenForUser" was used instead of "createToken" which was in the    createToken.js file. I changed it to "createToken" to match the js file.

In app.js, module.exports = app was written twice so I erased one of them.

In server.js, I included PORT from config.js to serve as the app.listen param (I figured that's why PORT was made)