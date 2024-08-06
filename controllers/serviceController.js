const {Service: ServiceModel} = require("../models/Service");

const serviceController = {
      create: async (req, res) => {
            try {
                  const service = {
                        name: req.body.name, 
                        description: req.body.description, 
                        price: req.body.price, 
                        image: req.body.image
                  }

                  const response = await ServiceModel.create(service);

                  res.status(201).json({response, msg: "Serviço criado com sucessso!"})
            } catch (error) {
                  console.log(error);
            }
      },
      getAll: async (req, res) => {
            try {
                  const services = await ServiceModel.find();

                  if(!services){
                        res.status(404).json({msg:"nenhum serviço encontrado."});
                        return;
                  }

                  res.status(200).json(services)
            } catch (error) {
                  console.log(error);
            }
      },
      get: async (req, res) => {
            try {
                  const id = req.params.id;
                  const service = await ServiceModel.findById(id);

                  if(!service){
                        res.status(404).json({msg: "serviço não encontrado."});
                        return;
                  }

                  res.status(200).json(service)
            } catch (error) {
                  console.log(error);
            }
      },
      delete: async (req, res) => {
            try {
                  const id = req.params.id;
                  const service = await ServiceModel.findById(id);

                  if(!service){
                        res.status(404).json({msg: "serviço não encontrado."});
                        return;
                  }

                  const deletedService = await ServiceModel.findByIdAndDelete(id);

                  res.status(200).json({deletedService, msg: "Serviço excluído com sucesso!"});
            } catch (error) {
                  console.log(error);
            }
      }
};

module.exports = serviceController;