const TaksModel = require('../model/TaskModel');
const {isPast} = require('date-fns');
const TaskModel = require('../model/TaskModel');


const TaskValidation = async (req, res, next) => {
    const {macaddress, type, title, description, when } = req.body;
    if (!macaddress) 
        return res.status(400).json({error:'Macaddress é obrigatorio.'});
    else if(!type)
        return res.status(400).json({error:'Tipo é obrigatorio.'});
    else if(!title)
        return res.status(400).json({error:'Titulo é obrigatorio.'});
    else if(!description)
        return res.status(400).json({error:'Descrição é obrigatorio.'});
    else if(!when)
        return res.status(400).json({error:'Data e hora são obrigatorio.'});
    else if(isPast(new Date(when)))
        return res.status(400).json({error:'Escolha uma data e hora futura.'});
    else{
        let exists;

        exists = await TaskModel.
                    findOne(
                        {
                            'when': {'$eq': new Date(when)},
                            'macaddress': {'$in': macaddress} 
                        });

        if (exists){
            return res.status(400).json({error:'Já existe uma tarefa neste dia e horario.'});
        }

        next();
    }
}

module.exports = TaskValidation;