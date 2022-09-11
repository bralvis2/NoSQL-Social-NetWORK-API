const { Schema, model } = require("mongoose");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },

        username: {
            type: String,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now(),
            get: (date) => {
                if (date) return date.toISOString().split('T')[0];
            },
        },
    },
    {
        // timestamps: true,
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => {
                if (date) return date.toISOString().split('T')[0];
            },
        },

        username: {
            type: String,
            required: true,
        },
        reactions: {
            type: [reactionSchema],
        },
    },
    {
    
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: true,
    }
);

thoughtSchema 
    .virtual('reactionCount')
    // Getter method to format the timestamp on query.
    .get(function (){
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);
model.exports = Thought;