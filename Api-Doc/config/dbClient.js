import mongoose from 'mongoose';
import 'dotenv/config';

class dbClient {
    constructor() {
        this.conectarBaseDatos();
    }

    async conectarBaseDatos(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=Cluster0`  ;
        await mongoose.connect(queryString);
        console.log("Conexión a base de datos realizad");
    }

    async cerrarConexion() {
        try{
            await mongoose.diconnect();
            console.log("Conexión a la base de datos cerrada");
        } catch (e) {
            console.error("Error al cerrar la conexión", e);
        }
    }

 
}

export default new dbClient();