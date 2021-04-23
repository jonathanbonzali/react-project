import bodyParser from "body-parser";
import express from "express";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import devBundle from "./dev_config";
import path from "path";
import authRoutes from './features/autthentication/auth_routes'
import storeRoutes from './features/store/store.routes'

const app = express();
devBundle.compile(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress());
app.use( helmet({ contentSecurityPolicy: false,}));
app.use( cors({}));

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));


app.use('/' , authRoutes);
app.use('/' , storeRoutes);


app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
