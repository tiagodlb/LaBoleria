import { connection } from "../databases/postgres.js";

export class clientsRepository {
    static async postClient(cleanName, cleanAddress, cleanPhone) {
        return connection.query(`INSERT INTO clients (name, address, phone) VALUES ($1,$2,$3)`, [cleanName, cleanAddress, cleanPhone]);
    }
    static async getClientOrder(id){
        return connection.query(`SELECT orders.id as "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes.name as "cakeName" FROM orders JOIN clients ON clients.id = orders."clientId" JOIN cakes ON cakes.id = orders."cakeId" WHERE orders."clientId" = $1
        `, [id]);
    }
    static async clientExists(id) {
        return connection.query(`SELECT * FROM clients WHERE id = $1`, [id]);
    }
}