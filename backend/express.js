import bodyParser from "body-parser";
import express from "express";
import cooKieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import devBundle from "./devBundle";
import path from "path";
import React from "react";
import ReactDOMServer from "react-dom/server";
import StaticRouter from "react-router-dom/StaticRouter";
import { ServerStyleSheets, ThemeProvider } from  "@material-ui/core/styles";


const app = express();
devBundle.compile(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cooKieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use("/", authRoutes);
app.use("/", userRoutes);

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
