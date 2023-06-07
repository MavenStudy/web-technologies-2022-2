import Form from "../components/form/index.js";
import Auth from "../services/auth/index.js";
import ToDo from "../../services/todo/index.js";
import loading from "../../services/loading/index.js";
import location from "../../services/location/index.js";

const init = async () => {
    const { ok: isLogged, user:id} = await Auth.me()
    const formEl = document.getElementById('todos')
    const todo = document.getElementById('todos-items')
    const {data} = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }
    const updateListTodos = () =>{
        loading.start();
        const allTodos = ToDo.getAll(data.user.id);
        todo.innerHTML = ''
        let html = ''
        allTodos.then((x)=>{
            x.data.map((el)=>{
                html += `<div class="todo"><input id="${el.id}" type="checkbox"> <div id="${el.id}">${el.description}</div></div>`;
            });
            todo.innerHTML = html;

            x.data.forEach((el)=>{
                const div = document.getElementById(el.id);
                div.addEventListener("click", () => deleteTODO(el.id), false);
                const checkBox = document.getElementById(`${el.id}`);
                checkBox.checked = el.completed;
                checkBox.onchange = (e) => updateStatusTodo(e, el.id);
            })
            loading.stop();
        })
    }

    async function deleteTODO(id) {
        const isDelete = confirm('Удалить?');
        if (isDelete) {
            loading.start();
            const res = await ToDo.delete(id);
            if (res.ok) {
                updateListTodos();
            }
        }
    }

    const addTodo = async (description) => {
        loading.start();
        const res = await ToDo.create(description);
        if(res.ok) {
            updateListTodos();
            const input = formEl.getElementsByTagName('input')[0];
            input.value = '';
        }
    }

    const updateStatusTodo = async (e, id) => {
        const checkboxValue = e.target.checked;
        e.target.checked = !e.target.checked;
        loading.start();
        const res = await ToDo.update(id, checkboxValue);
        if(res.ok) {
            updateListTodos();
        }
    }

    new Form(formEl, {
        'description': (value) => {
            if (value.length < 3) {
                return 'Минимальная длина 6 символов';
            } else if (value.length > 32) {
                return 'Максимальная длина 32 символа';
            }

            return false;
        }
    }, (values) => addTodo(values));

    updateListTodos();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}