const Joi = require('@hapi/joi');

const CreateLab = Joi.object().keys({
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    image: Joi.string().max(1023),
});

const CreateLabQuery = Joi.object().keys({
    id: Joi.string().uuid().required(),
    title: Joi.string().required(),
    subtitle: Joi.string().required(),
    image: Joi.string().max(1023).uri(),
});


const LabIdQuery = Joi.object().keys({
    id: Joi.string().uuid().required(),
});

module.exports = { CreateLab, LabIdQuery, CreateLabQuery };