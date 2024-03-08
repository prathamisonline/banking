import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import helmet from "helmet";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
dotenv.config();


const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));



const PORT = process.env.PORT || 4001;
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>
            console.log(`Server up and running on port ${PORT}`)
        );
    })
    .catch((error) => console.log(error));