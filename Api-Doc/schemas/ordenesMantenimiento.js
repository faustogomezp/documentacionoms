import mongoose, { mongo } from "mongoose";

const ordenSchema = new mongoose.Schema(
    {
        orden: {
            type: String,
            require: true
        },
        descripcion: {
            type: String,
            require: true
        },

        puestoTrabajo: {
            type: String,
            require: true
        },

        revision: {
            type: String,
        }
    },
    {
        timestamps:true
    }
);

export default mongoose.model('ordenes', ordenSchema);