import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import dotenv from "dotenv";
import { resolve } from 'node:path';
import { Dialect } from "sequelize";
import { strUnd } from "../helpers/helperTypes";
import { UserModel } from "../models/userModel";
import { RoleModel } from "../models/roleModel";
import { ProductModel } from "../models/productModel";

config({path: resolve(__dirname, "../../.env")});

const dialecDB: Dialect = process.env.DB_DIALECT as Dialect;
const hostDB: strUnd = process.env.DB_HOST
const userNameBD: strUnd = process.env.DB_USERNAME
const passwordDB: strUnd = process.env.DB_PASSWORD
const nameDB: strUnd = process.env.DB_NAME

console.log(dialecDB, hostDB, userNameBD, passwordDB, nameDB );

const sequelize: Sequelize = new Sequelize({
    dialect: dialecDB,
    host: hostDB,
    username: userNameBD,
    password: passwordDB,
    database: nameDB,
    models: [UserModel, RoleModel, ProductModel]

})


export default sequelize
