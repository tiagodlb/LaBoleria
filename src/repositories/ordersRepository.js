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
    static async getOrders() {
        return connection.query(`SELECT clients.id as "clientId", clients.name as "clientName", clients.address as "clientAddress", clients.phone as "clientPhone",cakes.id as "cakeId", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", orders.id as "orderId", "createdAt", quantity,"totalPrice" FROM orders JOIN cakes ON cakes.id = orders."cakeId" JOIN clients ON clients.id = orders."clientId";
        `)
    }
    static async getOrdersByDate(date) {
        return connection.query(`SELECT clients.id as "clientId", clients.name as "clientName", clients.address as "clientAddress", clients.phone as "clientPhone",cakes.id as "cakeId", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", orders.id as "orderId", "createdAt", quantity,"totalPrice" FROM orders JOIN cakes ON cakes.id = orders."cakeId" JOIN clients ON clients.id = orders."clientId" WHERE DATE("createdAt") = $1;`, [date])
    }
    static async getOrdersById(id) {
        return connection.query(`SELECT clients.id as "clientId", clients.name as "clientName", clients.address as "clientAddress", clients.phone as "clientPhone",cakes.id as "cakeId", cakes.name as "cakeName", cakes.price as "cakePrice", cakes.description as "cakeDescription", cakes.image as "cakeImage", orders.id as "orderId", "createdAt", quantity,"totalPrice" FROM orders JOIN cakes ON cakes.id = orders."cakeId" JOIN clients ON clients.id = orders."clientId" WHERE orders.id = $1`, [id])
    }
    static async orderExists(id) {
        return connection.query(`SELECT * FROM orders WHERE id = $1`, [id]);
    }
}