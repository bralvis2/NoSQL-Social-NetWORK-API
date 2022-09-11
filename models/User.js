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

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],

        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: true,

    }
);

userSchema
.virtual('friendCount')
// Getter Method
.get(function (){
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;