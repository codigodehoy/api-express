import { criptomonedas } from "../model/criptomoneda.modelo"

export const obtenerCriptomonedas = (req, res) =>{
  try {
    res.json({
      criptomonedas
    })
    res.status(200)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const crearCriptomonedas = (req, res) => {
  const data = req.body.data;
  try {
    criptomonedas.push(data);
    res.status(201)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }

}