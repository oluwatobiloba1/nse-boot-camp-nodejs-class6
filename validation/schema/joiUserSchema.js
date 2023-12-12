const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string()
        .required(),

    age: Joi.number().required(),

    track: Joi.string()
        .required()
})

module.exports = schema;