exports.appointmentDataValidator = function(req, res, next) {
    const response = {};
    const genders = ['m', 'f', 'male', 'female'];
    response.success=false;
    const {
        name,
        email,
        mobile,
        gender,
        dateOfBirth,
        timeOfBirth,
        placeOfBirth,
        service,
        message
    }  = req.body;

    if(!name) response.err = 'name is required';
    if(!email) response.err = 'email is required';
    if(!mobile) response.err = 'mobile is required';
    if(!gender) response.err = 'gender is required';
    if(!dateOfBirth) response.err = 'date of birth is required';
    if(!timeOfBirth) response.err = 'time of birth is required';
    if(!placeOfBirth) response.err = 'place of birth is required';
    if(!service) response.err = 'service is required';
    if(typeof(name)!=='string') response.err = 'name should be a string';
    if(!isEmail(email)) response.err = 'email is invalid';
    if(!genders.includes(gender.toLowerCase())) response.err = 'gender can be M, F, Male or Female only';
    //const dobTimestamp = new Date(dateOfBirth).valueOf();
    //if(typeof(dobTimestamp)!=='number') response.err = 'date of birth should be of date type';
    //if(typeof(timeOfBirth)!=='string') response.err = 'time of birth should be a string in HH:MM or HH:MM am/pm format';
    if(typeof(placeOfBirth)!=='string') response.err = 'place of birth should be of type string';
    if(typeof(service)!=='string') response.err = 'service should be of type string';
    if(!!message && typeof(message)!=='string') response.err = 'message should be of type string'

    if(!!response.err) return res.status(400).json(response);

    return next();
}

function isEmail(email) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.toLowerCase()))
        return true;
    return false;
}

