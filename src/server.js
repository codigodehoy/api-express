import express  from "express";
import morgan from "morgan";
import { crearCriptomonedas, obtenerCriptomonedas } from "./controller/criptomonedas.controller";
const port = 4000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true }));
app.use(morgan('dev'))


app.get("/crypto", obtenerCriptomonedas);

app.post("/crypto", crearCriptomonedas);


export const start = () => {
  app.listen(port, () => {
    console.log(`Server is on ${port}`);
  });
}