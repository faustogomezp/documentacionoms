import OrdenMantenimiento from '../schemas/ordenesMantenimiento.js'

class ordenesModelo {

    async create(orden) {
        return await OrdenMantenimiento.create(orden);
    }

    async getAll() {
        return await OrdenMantenimiento.find();
    }

    async getOne(id) {
        return await OrdenMantenimiento.findById(id);
    }

    async update(id, orden) {
        return await OrdenMantenimiento.findOneAndUpdate(id, orden, {new: true});
    }

    async delete(id) {
        return await OrdenMantenimiento.findOneAndDelete(id);
    }


}

export default new ordenesModelo;