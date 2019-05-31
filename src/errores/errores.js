//manejar error 404
module.exports = {
    error404: (req, res) => {
        res.status(404).json({
            error: '404: File Not Found'
        });
    },

    error400: function (error, req, res, next) {
        res.status(400).json({
            name: error.name,
            error: error.message,
            path: error.path
        });   
    }    
}


// // manejar error 400
// router.use( function(error, req, res, next) {
//     res.status(400).json({
//         status: 'error',
//         name: error.name,
//         error: error.message,
//         path: error.path
//     });
// });
