const yup = require('yup');

module.exports = {

    validacionDataIds: (data) => {
        const schema = yup.object().shape({
            id: yup.number()
                    .min(31)
                    .integer()
                    .nullable(true)
                    .typeError('id must be a number')
                    .positive('id must be greater than zero')
                    .required('id is required')
           // email: yup.string().matches(/^[a-z0-9_.]+@[a-z0-9]+\.[a-z0-9_.]+$/).required(),
        });
        console.log("alert: ")
        var a = schema.validateSync(data);
        console.log("esss: ")
        console.log(a);
    },

    validacionIdInexistente: (data) => {
         

    }
}