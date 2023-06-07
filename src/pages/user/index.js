import Auth from "../../services/auth/index.js";
import location from "../../services/location/index.js";
import loading from "../../services/loading/index.js";

const init = async () => {
    const { ok: isLogged, data } = await Auth.me();

    if (!isLogged) {
        return location.login();
    } else {
        loading.stop();
    }

    const user = data?.user;

    const userInfoEl = document.getElementById('user-info');

    const userInfoAgeEl = userInfoEl.querySelector('[data-user-age]');
    const userInfoNameEl = userInfoEl.querySelector('[data-user-name]');
    const userInfoEmailEl = userInfoEl.querySelector('[data-user-email]');

    userInfoNameEl.innerText = user.name;
    userInfoAgeEl.innerText = user.age;
    userInfoEmailEl.innerText = user.email;
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
