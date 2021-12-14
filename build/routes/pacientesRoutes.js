"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pacientesController_1 = require("../controllers/pacientesController");
class PacientesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', pacientesController_1.pacientesController.list);
        this.router.get('/:CEDULA_PAC', pacientesController_1.pacientesController.getPacient);
        this.router.get('/:ENFERMEDADES_PAC',pacientesController_1.pacientesController.getIlnes);
    }
}
const pacientesRoutes = new PacientesRoutes();
exports.default = pacientesRoutes.router;
