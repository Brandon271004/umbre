import { Server } from 'azle';
import express from 'express';


export default Server(() => {
    const data = [
        {
    
            conductividad:0
        }
    ]
    const app = express();

    app.post('/atrapar-datos', (req, res) => {
        const body = req.body;
        const new_register = {
            conductividad:body.conductividad
        }
        data.push(new_register)

        return res.send('ok')
    })

    app.get('/obtener-datos', (_req, res) => {
        return res.status(200).json(data)
    })
    
    return app.listen()
})
