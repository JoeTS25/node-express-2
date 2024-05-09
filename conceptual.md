### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
It is a JSON Web Token. It comes with a header (metadata about token), 
a payload (data to be stored), and signature

- What is the signature portion of the JWT?  What does it do?
The signature is the version of the header and payload that is signed
with a secret key

- If a JWT is intercepted, can the attacker see what's inside the payload?
They cannot see what's inside the payload without the secret key provided.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
The JWT authentication function looks for the token, then will try to verify token. 
Then add the payload you get back to the request itself.

example: const tokenFromBody = req.body._token;
         const payload = jwt.verify(tokenFromBody, SECRET_KEY);
         req.user = payload;
         return next();

- Compare and contrast unit, integration and end-to-end tests.
Unit tests: test smaller components of an application one by one (its units)
Integration tests: test multiple parts to see if they work together
End-to-end tests: test the whole app from start to end at once (from one end to another)

- What is a mock? What are some things you would mock?
Mock functions are used in unit testing; the object under test may have dependencies
on other complex objects.  The example we used in this section was when testing a dice roll, a mock was used to guarantee what the dice would roll in order to test its function.

- What is continuous integration?
The practice of merging in small code changes frequently, rather than merging in a large change at the end of the development cycle.

- What is an environment variable and what are they used for?
An environment variable configures a specific environment. They are made up of a key/value pair, all uppercase, and joined with an underscore. Example: API_KEY. Environment variables can be used to affect the way apps run.

- What is TDD? What are some benefits and drawbacks?
Test-Driven Development: write tests first (that will fail). Only write code necessary to get those tests to pass.  As more code is written, keep running tests and make sure they are passing.  The benefit is having a safer code.  Constantly testing will assure you that you won't miss any errors when creating your app.  The drawback is that this takes more time than writing tests after the code is completed.  Although more accurate, having to test every step of the way is more tedious and will take longer for app production.

- What is the value of using JSONSchema for validation?
JSONSchema describes JSON in a human and machine-readable format.  It allows you to auto-generate validation from sample data.

- What are some ways to decide which code to test?
Test the API, not the database.  Don't worry about 100% coverage, just test the important parts because apps change constantly.

- What does `RETURNING` do in SQL? When would you use it?
`RETURNING` retrives data selected when executing some sort of UPDATE or DELETE function when using SQL.

- What are some differences between Web Sockets and HTTP?
HTTP is unidirectional while Web Sockets are bidirectional.  A Web Socket is can be used for a real-time web app.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  At this point it's still hard to say.  I like how Flask is written in Python making it less hard to remember syntax, but I'd have to say that I've enjoyed Express more.  I feel like the information has come easier to me with Express (that could be because I learned Flask first, but it seems to have made a better connection with me).
