import { Router } from 'express';

import {pacientesController }from '../controllers/pacientesController'

class PacientesRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', pacientesController.list);
        this.router.get('/:CEDULA_PAC', pacientesController.getPacient);
        this.router.get('/:ENFERMEDADES_PAC', pacientesController.getEnfermedad);
    }
}

const pacientesRoutes = new PacientesRoutes();
export default pacientesRoutes.router;