import { connection } from "../databases/postgres.js";

export class clientsRepository {
    static async postClient(cleanName, cleanAddress, cleanPhone) {
        return connection.query(`INSERT INTO clients (name, address, phone) VALUES ($1,$2,$3)`, [cleanName, cleanAddress, cleanPhone]);
    }
}