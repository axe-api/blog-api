import { App } from "axe-api";
import LoginHandler from "./Handlers/LoginHandler";

const onBeforeInit = async (app: App) => {
  app.post("/api/v1/login", LoginHandler);
};

const onAfterInit = async (app: App) => {};

export { onBeforeInit, onAfterInit };
