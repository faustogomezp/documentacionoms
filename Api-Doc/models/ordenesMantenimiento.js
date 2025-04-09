import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";

class ordenesModelo {

    async create(orden) {
        const colOrdenes = dbClient.db.collection('ordenes');
        return await colOrdenes.insertOne(orden);
    }

    async getAll() {
        const colOrdenes = dbClient.db.collection('ordenes');
        return await colOrdenes.find({}).toArray();
    }

    async getOne(id) {
        const colOrdenes = dbClient.db.collection('ordenes');
        return await colOrdenes.findOne({ _id: new ObjectId(id)});
    }

}

export default new ordenesModelo;