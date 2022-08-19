import { connection } from "../databases/postgres.js";

export class OrdersRepository {
    static async postOrder(clientId, cakeId, quantity, totalPrice) {
        return connection.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1,$2,$3,$4)`, [clientId, cakeId, quantity, totalPrice]);
    }
    static async cakeExists(cakeId) {
        return connection.query(`SELECT * FROM cakes WHERE id = $1`, [cakeId]);
    }
    static async clientExists(clientId) {
        return connection.query(`SELECT * FROM clients WHERE id = $1`, [clientId]);
    }
    static async getOrders(){
        return connection.query(`SELECT * FROM orders`)
    }
    static async getOrdersByDate(date){
        return connection.query(`SELECT id, "clientId", "cakeId", quantity, "totalPrice", DATE("createdAt") as "createdAt" FROM orders WHERE DATE("createdAt") = $1;`,[date])
    }
    static async getOrdersById(){
        return connection.query(``)
    }
}