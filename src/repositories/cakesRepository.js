import { connection } from "../databases/postgres.js";

export class CakesRepository {
    static async postCakes(cleanName, price, cleanImage, cleanDescription, flavourId) {
        return connection.query(`INSERT INTO cakes (name,price,image,description, "flavourId") VALUES ($1,$2,$3,$4,$5)`, [cleanName, price, cleanImage, cleanDescription, flavourId]);
    }
    static async cakeExists(cleanName) {
        return connection.query(`SELECT * FROM cakes WHERE name = $1`, [cleanName]);
    }
    static async flavourExists(flavourId) {
        return connection.query(`SELECT * FROM flavours WHERE id = $1`, [flavourId]);
    }
}