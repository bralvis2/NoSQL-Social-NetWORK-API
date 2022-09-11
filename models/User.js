const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String, 
            unique: true,
            required: true,
            validate: {
                validator: function (validate) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(validate);
                },
                message: "Please enter a valid email"
            },
            required: [true, "Email required"]
        },
    }
)