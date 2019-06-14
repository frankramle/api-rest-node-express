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
        schema.validateSync(data);
        console.log("esss: ")
    },

    validacionDatosPUT: (data) => {
        const schema = yup.object().shape({
            id: yup.number().min(31).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero').required('id is required'),
            nombres: yup.string().min(31).integer().nullable(true).typeError('').positive('id must be greater than zero').required('id is required'),
            apellido: yup.string().min(31).integer().nullable(true).typeError('').positive('id must be greater than zero').required('id is required'),
            direccion: yup.string().min(31).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero').required('id is required'),
            nombres: yup.string().min(31).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero').required('id is required'),
            direccion: yup.string().min(31).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero').required('id is required'),
            cod_postal: yup.string().min(31).integer().nullable(true).typeError('id must be a number').positive('id must be greater than zero').required('id is required'),
        });
        console.log("alert: ")
        schema.validateSync(data);
        console.log("esss: ")
    }
}