import { FilterQuery, Model, PopulateOptions } from "mongoose";
interface findOptions<td> {
    filter?: FilterQuery<td>;
    populate?: PopulateOptions[];
    select?: string;
    sort?: string;
    page?: number;
}
export declare abstract class repository<td> {
    private readonly model;
    constructor(model: Model<td>);
    create(data: Partial<td>): Promise<td>;
    findOne(query: FilterQuery<td>, populate?: PopulateOptions[], select?: string): Promise<td | null>;
    find({ filter, populate, page, select, sort }: findOptions<td>): Promise<td[] | []>;
    findOneAndUpdate(query: FilterQuery<td>, data: any): Promise<td | null>;
    findOneAndDelete(query: FilterQuery<td>): Promise<td | null>;
}
export {};
