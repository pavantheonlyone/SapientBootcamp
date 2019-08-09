// module name relative to Day07 is
// ./myutils/math

// module.exports by default is equals to {} 
// to which we can add one or more properties

module.exports.AUTHOR_NAME = 'Pavan';
module.exports.AUTHOR_EMAILS = ['pavan.11797@gmail.com','pavan.parameshwara@publicissapient.com'];

const factorial = (num) => {
    if(num<= 1) return 1;
    else return (num * factorial(num - 1));
}
module.exports.factorial = factorial;

module.exports.square = (num) => num * num;
module.exports.cube = (num) => num * num * num;