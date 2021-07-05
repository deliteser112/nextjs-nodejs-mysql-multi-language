import { combineReducers } from "redux";
import storage from "./storage";
// slices
import settingsReducer from "./slices/settings";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["settings"],
};

const rootReducer = combineReducers({
  settings: settingsReducer,
});

export { rootPersistConfig, rootReducer };
