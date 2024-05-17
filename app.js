const profileDataArgs = process.argv.slice(2);












const printProfileData = profileDataArr => {


    // is that same as this ....
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });


};
printProfileData(profileDataArgs);
