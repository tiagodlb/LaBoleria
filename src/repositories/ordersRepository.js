import { connection } from "../databases/postgres.js";

export class OrdersRepository {
    static async postOrder(clientId, cakeId, quantity, totalPrice) {
        console.log(clientId,cakeId,quantity,totalPrice)
        return connection.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1,$2,$3,$4)`, [clientId, cakeId, quantity, totalPrice]);
    }
    static async cakeExists(cakeId) {
        console.log("aqio2")
        return connection.query(`SELECT * FROM cakes WHERE id = $1`, [cakeId]);
    }
    static async clientExists(clientId) {
        console.log("aqio3")
        return connection.query(`SELECT * FROM clients WHERE id = $1`, [clientId]);
    }
}