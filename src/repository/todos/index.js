import api from "../../services/api/index.js";

const ToDosRepository = {
    async create (values) {
        return await api('/todo', {method: 'POST', body: JSON.stringify(values)
        });
    },

    async get (id) {
        return await api(`/todo/${id}`, {method: 'GET'
        });
    },
    async getAll () {
        return await api('/todo', {method: 'GET'});
    },
    async update (id, completed) {
        return await api(`/todo/${id}`, {method: 'PUT', body: JSON.stringify({completed})
        });
    },

    async delete (id) {return await api(`/todo/${id}`, {method: 'DELETE'});
    }
}

export default ToDosRepository