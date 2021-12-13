import { Request, Response } from 'express';

import db from '../database';

class PacientesController {

    public async list (req: Request, res: Response){
        const pacientes = await db.query('SELECT paciente.NOMBRE_PAC, paciente.APELLIDO_PAC, paciente.ENFERMEDADES_PAC, sesion.TIPO_SES, sesion.REPETICIONES_SES, sesion.TIEMPO_SES, sesion.FECHA_SES, sesion.SUPERVISOR_SES FROM paciente INNER JOIN sesion ON paciente.ID_PAC=sesion.ID_PAC ');
       res.json(pacientes);
    }
    
    public async getPacient(req: Request, res: Response): Promise <any> {
        const { CEDULA_PAC } = req.params;
        // const pacientes = await db.query('SELECT * FROM paciente WHERE CEDULA_PAC = ?', [CEDULA_PAC]);
        // console.log(pacientes);
        // return res.json(pacientes);

        const pacienteSesion = await db.query('SELECT paciente.NOMBRE_PAC, paciente.APELLIDO_PAC, paciente.ENFERMEDADES_PAC, sesion.TIPO_SES, sesion.REPETICIONES_SES, sesion.TIEMPO_SES, sesion.FECHA_SES, sesion.SUPERVISOR_SES FROM paciente INNER JOIN sesion ON paciente.ID_PAC=sesion.ID_PAC ');
        console.log(pacienteSesion);
        return res.json(pacienteSesion);
    }
}

export const pacientesController = new PacientesController();