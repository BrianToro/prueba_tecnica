const express = require("express");
const DataService = require("../services/dataService");
function dataAPI(app) {
    //inicializar el enrutador para la API y el servicio
    const router = express.Router();
    app.use("/api/data", router);
    const dataService = new DataService();

    //Control de rutas

    //Traer paginacion de los registros
    router.get("/page/:pass", async (req, res, next) => {
        const { pass } = req.params;
        try {
            const data = await dataService.getPageOfGrants({ pass });
            res.status(200).json({
                data: data,
                message: "Data obtenida",
            });
        } catch (error) {
            next(error);
        }
    });

    //Traer un regristro de grants
    router.get("/:grantId", async (req, res, next) => {
        const { grantId } = req.params;
        try {
            const data = await dataService.getGrant({ grantId });
            res.status(200).json({
                data: data,
                message: "Data obetenida",
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = {
    dataAPI,
};
