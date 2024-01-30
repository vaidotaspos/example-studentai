

const register = async (req, res, next) => {
    const { email, password } = req.body;

    console.log('Request Body === ', req.body);


}

module.exports = {
    register,
}
