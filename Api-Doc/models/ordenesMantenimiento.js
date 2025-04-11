import mongoose from 'mongoose';
import OrdenMantenimiento from '../schemas/ordenesMantenimiento.js'

class ordenesModelo {

    async create(orden) {
        return await OrdenMantenimiento.create(orden);
    }

    async getAll() {
        return await OrdenMantenimiento.find();
    }

    async getOne(id) {
        return await OrdenMantenimiento.findById({_id: new mongoose.Types.ObjectId(id)});
    }

    async update(id, orden) {
        return await OrdenMantenimiento.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, orden, {new: true});
    }

    async delete(id) {
        return await OrdenMantenimiento.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }


}

export default new ordenesModelo;