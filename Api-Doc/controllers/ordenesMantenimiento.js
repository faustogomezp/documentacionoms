import ordenesModel from '../models/ordenesMantenimiento.js';

class ordenesController {
    constructor() {

    }

    async create (req, res) {
        try {
            const data = await ordenesModel.create(req.body);
            res.status(201).json(data);
        } catch(e) {
            res.status(500).send(e);
        }
    }

    async update (req, res) {
        try {
            res.status(201).json({status: 'Update Ok'});
        } catch(e) {
            res.status(500).send(e);
        }
    }

    async delete (req, res) {
        try {
            res.status(201).json({status: 'Delete Ok'});
        } catch(e) {
            res.status(500).send(e);
        }
    }

    async getAll (req, res) {
        try {
            const data = await ordenesModel.getAll();
            res.status(201).json(data);
        } catch(e) {
            res.status(500).send(e);
        }
    }

    async getOne (req, res) {
        try {
            const { id } = req.params;
            const data = await ordenesModel.getOne(id);
            res.status(201).json(data);
        } catch(e) {
            res.status(500).send(e);
        }
    }
}

export default new ordenesController();