"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repository = void 0;
class repository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        return this.model.create(data);
    }
    async findOne(query, populate, select) {
        const x = this.model.findOne(query);
        if (populate) {
            x.populate(populate);
        }
        if (select) {
            x.select(select);
        }
        return await x;
    }
    async find({ filter = {}, populate, page, select, sort }) {
        const query = this.model.find(filter);
        if (populate) {
            query.populate(populate);
        }
        if (select) {
            query.select(select);
        }
        if (sort) {
            query.sort(sort);
        }
        if (!page) {
            return await query;
        }
        const limit = 2;
        const skip = (page - 1) * limit;
        const result = await query.skip(skip).limit(limit);
        return result;
    }
    async findOneAndUpdate(query, data) {
        return this.model.findOneAndUpdate(query, data, { new: true });
    }
    async findOneAndDelete(query) {
        return this.model.findOneAndDelete(query);
    }
}
exports.repository = repository;
//# sourceMappingURL=DB.repository.js.map