const db = require('../db/connect');

class User {

    constructor({ user_id, username, password, is_admin }) {
        this.id = user_id;
        this.username = username;
        this.password = password;
        this.isAdmin = is_admin;
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM user_account WHERE user_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async getOneByUsername(username) {
        const response = await db.query("SELECT * FROM user_account WHERE username = $1", [username]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate user.");
        }
        return new User(response.rows[0]);
    }

    static async create(data) {
        const { username, password, isAdmin } = data;
        let response = await db.query("INSERT INTO user_account (username, password) VALUES ($1, $2) RETURNING user_id;",
            [username, password]); // inserts the users entered username and password into the database
        const newId = response.rows[0].user_id; // returns the user id
        const newUser = await User.getOneById(newId); // run the getOneById class method which returns a new instance of our User class
        return newUser; // return the new instance of User class
    }
}

module.exports = User;
