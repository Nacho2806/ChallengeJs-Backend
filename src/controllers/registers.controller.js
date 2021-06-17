const registersCtrl = {}

const Register = require('../models/Register');

registersCtrl.getRegisters = async (req, res) => {
    const registers = await Register.find({}).sort({category: 1})
    res.json(registers);
}

registersCtrl.getTenRegisters = async (req, res) => {
    const registers = await Register.find({}).sort({date: 'desc'}).limit(10)
    res.json(registers);
}

registersCtrl.createRegister = async (req, res) => {
    const {concept, amount, badge, date, category, user} = req.body
    const newRegister = new Register({
        concept,
        amount,
        badge,
        date,
        category,
        user
    });
    await newRegister.save();
    res.json('New Register added');
}

registersCtrl.getRegister = async (req, res) => {
    const register = await Register.findById(req.params.id);
    res.json(register);
}

registersCtrl.deleteRegister = async (req, res) => {
    await Register.findByIdAndDelete(req.params.id)
    res.json('Register Deleted');
}

registersCtrl.updateRegister = async (req, res) => {
    const {concept, amount, badge, date, category, user } = req.body;
    await Register.findByIdAndUpdate(req.params.id, {
        concept,
        amount,
        badge,
        date,
    });
    res.json('Register Updated');
}

module.exports = registersCtrl;