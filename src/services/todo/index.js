import ToDosRepository from "../../repository/todos/index.js";

class ToDo {
    static async create (values) {
        return await ToDosRepository.create(values)
    }

    static async get (id) {
        return await ToDosRepository.get(id)
    }
    static async getAll () {
        return await ToDosRepository.getAll()
    }
    static async update (id, completed) {
        return await ToDosRepository.update(id, completed)
    }

    static async delete (id) {
        return await ToDosRepository.delete(id)
    }

}

export default ToDo