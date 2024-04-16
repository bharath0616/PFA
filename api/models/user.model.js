import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    income:{
        type:Number,
        required:true,
        unique:false,  
    },
    monthlyExpenditure:{
        type:Number,
        required:true,
        unique:false,  
    },
    riskTolerance: {
        type: String,
        enum: ['Very high', 'High', 'Medium', 'Low', 'Very low'],
        required: true,
        unique:false,
      },
      calculatedResults: {
        mutualFunds: Number,
        securities: Number,
        futures: Number,
        bonds: Number
    },
}, { timestamp: true });

const User = mongoose.model('User',userSchema);

export default User; 