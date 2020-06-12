const express = require('express');
const DataService = require('../service/dataService');
function dataAPI(app){

    //inicializar el enrutador para la API y el servicio
    const router = express.Router();
    app.use('/api/data', router);
    const dataService = new DataService();

    //Control de rutas

    //Traer paginacion de los registros
    router.get('/page/:pass', (req, res, next) => {
        const { pass } = req.params;
        try{
            dataService.getPageOfGrants({ pass }).then((data) => {
                res.status(200).json({
                    data: data,
                    message: 'Data obtenida',
                })
            })
        }catch(error){
            next(error)
        }
    })

    //Traer un regristro de grants
    router.get('/:grantId', (req, res, next) => {
        const { grantId } = req.params;
        try {
            dataService.getGrant({ grantId }).then((data) => {
                res.status(200).json({
                    data: data,
                    message: 'Data obetenida',
                })
            })
        } catch(error){
            next(error);
        }
    })
}

module.exports = {
    dataAPI,
}