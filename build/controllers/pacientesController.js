"use strict";

const { createPool } = require("promise-mysql");

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacientesController = void 0;
const database_1 = __importDefault(require("../database"));
class PacientesController {

    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pacientes = yield database_1.default.query('SELECT paciente.NOMBRE_PAC,paciente.CEDULA_PAC, paciente.APELLIDO_PAC, paciente.ENFERMEDADES_PAC, sesion.TIPO_SES, sesion.REPETICIONES_SES, sesion.TIEMPO_SES, sesion.FECHA_SES, sesion.SUPERVISOR_SES FROM paciente INNER JOIN sesion ON paciente.ID_PAC=sesion.ID_PAC ');
            res.json(pacientes);
        });
    }

    getPacient(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CEDULA_PAC } = req.params;
            const paciente = yield database_1.default.query('SELECT * FROM paciente INNER JOIN sesion ON paciente.ID_PAC = sesion.ID_PAC  where paciente.CEDULA_PAC = ?', [CEDULA_PAC])

            if(paciente.length>0){
                return res.json(paciente)
            }
            res.status(404).json({text: "El paciente no existe"});
            console.log(paciente);
        });
    }
    
    getIlnes(req,res){
        return __awaiter(this, void 0, void 0, function* () {
            const { ENFERMEDADES_PAC } = req.params;
            const paciente = yield database_1.default.query('SELECT * FROM paciente INNER JOIN sesion ON paciente.ID_PAC = sesion.ID_PAC  where paciente.ENFERMEDADES_PAC = ?', [ENFERMEDADES_PAC])

            if(paciente.length>0){
                return res.json(paciente)
            }
            res.status(404).json({text: "La enfermedad no existe"});
            console.log(paciente);
        });
    }
}
exports.pacientesController = new PacientesController();
