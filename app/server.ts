import express, { Application } from "express";
import sequelize from "./config/database";
import { config } from "dotenv";
import mainRouter from "./routes/mainRouter";

config();

const PORT: number| string = process.env.PORT || 3001;
const app: Application = express();

app.use(express.json());
app.use("/api", mainRouter);


const startApp = async (): Promise<void> => {
    try{
        await sequelize.authenticate();
        console.log("Connection is established");  
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT);      
        })

    }catch(err){
        console.error("There is an error trying to connect the database", err)

    }

}

startApp();






