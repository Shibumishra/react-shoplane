import { createStore } from "redux";
import reducers from "../reducers";

const ConfigureStore = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default ConfigureStore;