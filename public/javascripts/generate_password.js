
//define generatePassword function
function generatePassword ( options ) {

    //define dummyDate
    // const options = {
    //     length: 12,
    //     lowercase: true,
    //     uppercase: true,
    //     numbers: true,
    //     symbols: true,
    //     excludeCharacters: '40',
    // }

    //define things user might want
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '`!@#$%^&*()-_+={}[]|;:"<>,.?/';

    //create a collection to store things user picked up
    let collection = [];

    collection = options.lowercase? collection.concat([...lowerCaseLetters]) : collection;
    collection = options.uppercase? collection.concat([...upperCaseLetters]) : collection;
    collection = options.numbers? collection.concat([...numbers]) : collection;
    collection = options.symbols? collection.concat([...symbols]) : collection;

    //remove things user do not need
    // console.log(`exclude characters: ${options.excludeCharacters}`);

    collection = collection.filter( char => !options.excludeCharacters.includes(char));

    // const exclu = [...options.excludeCharacters];
    // for (let char of exclu) {
    //     // const index = collection.findIndex((item) => item===char);
    //     // if (index !== -1)
    //     //     collection.splice(index, 1);

    //     if (collection.includes(char) === true)
    //         collection = collection.filter( (item) => item !==char)
    // }

    //handle error
    if (collection.length === 0) {
        return 'There is no valid character in your selection.'
    }

    
    //start generating password
    let password = '';

    for (let i=0 ; i<options.length ; i++) {

        const index = Math.floor(Math.random()*collection.length);
        password += collection[index];
    }


    //return the generated password
    // console.log('collection', collection);
    // console.log('password: ', password);

    return password;
}

//export generatePassword function for other files to use
module.exports = generatePassword;