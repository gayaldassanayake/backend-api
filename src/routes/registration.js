const router = require('express').Router();
const RegistrationService = require('../services/registration');
const { RegistrationTokenQuery, UserInformation } = require('./validators/registration');

router.get('/verify', async (req, res, next) => {
    try {
        const { value, error } = RegistrationTokenQuery.validate(req.body);
        if (error) throw error;
        console.log(res);
        const registrationToken = await RegistrationService
            .VerifyRegistrationToken(value.token);
        res.status(200).send(registrationToken);
    } catch (err) {
        next(err);
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const { value, error } = UserInformation.validate(req.body);
        if (error) throw error;

        await RegistrationService
            .Register(value.token, value.firstName, value.lastName, value.password);
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
