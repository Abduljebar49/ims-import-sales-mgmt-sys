const Role = require("../entity/role");
const { defResponse } = require("../function/function");

const addRole = async(req, res, next)=>{
    const {name,description} = req.body;

    if(!name ||!description){
        defResponse(res,"there is field missing");
        return;
    }
    const data = await Role.create({name:name,description:description});
    res.send({
        message:"Successfully created role",
        data:data
    })
}

const getRoles = async(req, res, next)=>{
    const data = await Role.findAll();
    res.send({
        message:"Successfully get roles",
        data:data
    })
}

const getRole = async(req, res, next)=>{
    const {id} = req.params;
    const data = await Role.findByPk(id);
    res.send({
        message:"Successfully get role",
        data:data
    })
}

const updateRole = async(req, res, next)=>{
    const {id} = req.params;
    const {name,description} = req.body;

    if(!name ||!description){
        defResponse(res,"there is field missing");
        return;
    }
    const data = await Role.update({name:name,description:description},{where:{id}});
    res.send({
        message:"Successfully updated role",
        data:data
    });
}

const deleteRole = async(req, res, next)=>{
    const {id} = req.params;
    const data = await Role.destroy({where:{id}});
    res.send({
        message:"Successfully deleted role",
        data:data
    })
}

module.exports = {
    addRole,
    getRoles,
    getRole,
    updateRole,
    deleteRole
}