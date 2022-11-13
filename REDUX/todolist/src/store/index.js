import { legacy_createStore as createStore, legacy_createStore} from 'redux'
import rootReducer from "../reducers";

export default legacy_createStore(rootReducer);