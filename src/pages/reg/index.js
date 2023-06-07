import Form from "../../components/form/index.js";
import Auth  from "../../services/auth/index.js";
import loading from "../../services/loading/index.js";
import location from "../../services/location/index.js";

const init = async () => {
    const { ok: isLogged } = await Auth.me();

    if (isLogged) {
        return location.user();
    } else {
        loading.stop();
    }

    const formEl = document.getElementById('login-form');

    new Form(formEl, {
        'email': (value) => {
            if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))) {
                return 'Это не email';
            }

            return false;
        },
        'name': (value) => {
            if (value.length < 3) {
                return 'Минимальная длина 3 символа';
            } else if (value.length > 32) {
                return 'Максимальная длина 32 символа';
            }

            return false;
        },
        'age': (value) => {
            if (isNaN(+value)) {
                return 'Введите положительное число';
            }else if  (+value > 1) {
                return 'Введите положительное число';
            }

            return false;
        },
        'password': (value) => {
            if (value.length < 6) {
                return 'Минимальная длина 6 символов';
            } else if (value.length > 32) {
                return 'Максимальная длина 32 символа';
            }

            return false;
        },
        'password-repeat': (value, fields) => {
            const password = fields.find(field => field.name === 'password');

            if (password.input.value !== value) {
                return 'Пароли не совпадают';
            }

            return false;
        }
    }, (values) => {
        delete values['password-repeat']
        Auth.reg(values);
    })
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
