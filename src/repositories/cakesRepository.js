import { connection } from "../databases/postgres.js";

export class CakesRepository {
    static async postCakes(cleanName, price, cleanImage, cleanDescription) {
        return connection.query(`INSERT INTO cakes (name,price,image,description) VALUES ($1,$2,$3,$4)`, [cleanName, price, cleanImage, cleanDescription]);
    }
    static async cakeExists(cleanName) {
        return connection.query(`SELECT * FROM cakes WHERE name = $1`, [cleanName]);
    }
}