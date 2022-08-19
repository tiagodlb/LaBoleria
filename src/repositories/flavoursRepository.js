import { connection } from "../databases/postgres.js";

export class FlavoursRepository {
    static async postFlavour(cleanName) {
        return connection.query(`INSERT INTO flavours (name) VALUES ($1)`, [cleanName]);
    }
    static async flavourExists(cleanName) {
        return connection.query(`SELECT * FROM flavours WHERE name = $1`, [cleanName]);
    }
}