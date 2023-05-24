"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_routes_1 = require("./routers/users.routes");
const login_routes_1 = require("./routers/login.routes");
const errors_1 = require("./errors");
const contacts_routes_1 = require("./routers/contacts.routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", users_routes_1.userRoutes);
app.use("/login", login_routes_1.loginRouter);
app.use("/contacts", contacts_routes_1.contactsRoute);
app.use(errors_1.handleErrors);
exports.default = app;
