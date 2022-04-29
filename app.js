// pulls information from the command line, beginning from index position 2
const profileDataArgs = process.argv.slice(2, process.argv.length)

//NOTE: With arrow functions, you don't need to code 'return' if the function is just handling one task

const printProfileData = profileDataArr => {
    //This...
    for (let i = 0; i < profileDataArr.length; i+=1){
        console.log(profileDataArr[i])
    }

    console.log('===================')

    // Is the same as this...

    profileDataArr.forEach(profileItem => console.log(profileItem))
};

printProfileData(profileDataArgs)