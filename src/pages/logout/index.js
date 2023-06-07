import Auth from "../../services/auth/index.js";
import location from "../../services/location/index.js";
import loading from "../../services/loading/index.js";

const init = async () => {
    const response = await Auth.logout();
    location.index();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
