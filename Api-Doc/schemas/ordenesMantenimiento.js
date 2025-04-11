import mongoose, { mongo } from "mongoose";

const ordenSchema = new mongoose.Schema(
    {
        orden: {
            type: String,
            required: true,
            unique: true
        },
        descripcion: {
            type: String,
            required: true
        },

        puestoTrabajo: {
            type: String,
            required: true,
            enum: [
                'DELEENAR',
                'DMCBENAR',
                'DMUBENAR',
                'DMECENAR'
            ]
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