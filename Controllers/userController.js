const users = require('../Models/userModel')

// logic for register
exports.register = async (req,res)=>{
    const {name,address,mobile,email,gender,dob,course} = req.body
    console.log("Inside Register request");
    // console.log(name,address,mobile,email,gender,dob,course);
    try{
        // check if email already exists
        const existingUser = await users.findOne({email})
        // console.log(existingUser);
        if(existingUser){
            res.status(406).json("Student already exists!!!")
        }
        else{
            // add user to db
            const newUser = new users({
                name,address,mobile,email,gender,dob,course
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    }catch(err){
        res.status(401).json(err)
    }
        
}

// logic for getting Allusers
exports.getUsers = async(req,res)=>{
    try{
        const allUsers = await users.find()
        res.status(200).json(allUsers)
    }catch(err){
        res.status(401).json(err)
    }
}