'use strict';

const User = require('../auth/models/users.js');

class routerFunctions {

  async handleGetAll(req, res) {
      let allRecords = await req.model.get();
      res.status(200).json(allRecords);
    }

  async handleGetOne(req, res) {
      const id = req.params.id;
      let theRecord = await req.model.get(id)
      res.status(200).json(theRecord);
    }

  async handleCreate(req, res) {
      let obj = req.body;
      let newRecord = await req.model.create(obj);
      res.status(201).json(newRecord);
    }

  async handleUpdate(req, res) {
      const id = req.params.id;
      const obj = req.body;
      let updatedRecord = await req.model.update(id, obj)
      res.status(200).json(updatedRecord);
    }

  async handleDelete(req, res) {
      let id = req.params.id;
      let deletedRecord = await req.model.delete(id);
      res.status(200).json(deletedRecord);
    }
}
module.exports = routerFunctions;
