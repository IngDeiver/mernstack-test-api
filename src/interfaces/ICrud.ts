export default interface ICrud<T, ID> {
    listAll(): Promise<Array<T>>
    findById(id: ID): Promise<T | null>
    save(resource: T): Promise<T>
    remove(id: ID):  Promise<any>
    update(resource: T): Promise<T | null>
}