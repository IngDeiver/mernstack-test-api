import { ObjectId, Schema } from "mongoose";
import { IUser } from "../types";
import BaseCrudRepository from "./BaseCrudRepository";

export default class UserRepository implements BaseCrudRepository<IUser, ObjectId> {
    listAll(): Promise<IUser[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: Schema.Types.ObjectId): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    save(resource: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    remove(id: Schema.Types.ObjectId): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
    update(resource: IUser): Promise<IUser> {
        throw new Error("Method not implemented.");
    }
   
}