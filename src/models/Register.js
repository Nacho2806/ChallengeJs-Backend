const mongoose = require('mongoose');
const { Schema } = mongoose;

const RegisterSchema = new Schema({
    concept:{
        type: String, 
        required: true
    }, 
    amount:{
        type: Number, 
        required: true
    },
    badge:{
        type: String, 
        required: true
    },
    date:{
        type: Date, 
        default: Date.now
    },
    category:{
        type: String, 
        required: true 
    },

  // user: String, //Este atributo sería para poder asignar a cada usuario los registros que cree//  
},
    {timestamps: true    
});

module.exports = mongoose.model("Register", RegisterSchema);