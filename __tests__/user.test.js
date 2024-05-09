const ExpressError  = require("../helpers/expressError");
const db = require("../db");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const { BCRYPT_WORK_FACTOR } = require("../config");

beforeEach(async () => {
    await db.query(`DELETE FROM users`);
    await db.query(
        `INSERT INTO users(username, password, first_name, last_name, email, phone)
         VALUES ('u1', $1, 'FN1', 'LN1', 'u1@email.com', '555-555-5555')
               ('u2', $2, 'FN2', 'LN2', 'u2@email.com', '444-555-5555')
         RETURNING username`, [
            await bcrypt.hash("password1", BCRYPT_WORK_FACTOR),
            await bcrypt.hash("password2", BCRYPT_WORK_FACTOR),
        ]);
});

afterEach(async () => await db.query("ROLLBACK"));

afterAll(async () => {
    await db.end()
});

describe("register", function () {
    const newUser = {
        username: "new",
        firstName: "FirstTest",
        lastName: "LastTest",
        email: "test@email.com",
        phone: "555-555-1234",
    };

    test("works", async function () {
        let user = await User.register({...newUser, password: "password",});
        expect(user).toEqual(newUser);
        const foundUser = await db.query(`SELECT * FROM users WHERE username = 'new'`);
        expect(foundUser.rows.length).toEqual(1);
        expect(foundUser.rows[0].password.startsWith("$2b$")).toEqual(true);
    });
});

describe("getAll", function () {
    test("works", async function () {
        const users = await User.getAll();
        expect(users).toEqual([
            {
              username: "u1",
              firstName: "FN1",
              lastName: "LN1",
              email: "u1@email.com",
              phone: "555-555-5555",
            },
            {
              username: "u2",
              firstName: "FN2",
              lastName: "LN2",
              email: "u2@email.com",
              phone: "444-555-5555",
            },
        ]);
    });
});

describe("get username", function () {
    test("works", async function () {
        let user = await User.get("u1");
        expect(user).toEqual({
            username: "u1",
            firstName: "FN1",
            lastName: "LN1",
            email: "u1@email.com",
            phone: "555-555-5555",
        });
    })

    test("not a user", async function () {
        let user = await User.get("not a user");
        expect(err instanceof ExpressError).toBeTruthy();
    });
});

describe("update", function () {
    const updateData = {
        firstName: "NewF",
        lastName: "NewL",
        email: "new@email.com",
        phone: "333-555-5555",
    };

    test("works", async function () {
        let updateUser = await User.update("u1", updateData);
        expect(updateUser).toEqual({
            username: "u1", ...updateData,
        });
    }); 
});

describe("remove", function () {
    test("works", async function () {
        await User.delete("u1");
        const res = await db.query(`SELECT * FROM WHERE username = "u1"`);
        expect(res.rows.length).toEqual(0);
    })
})