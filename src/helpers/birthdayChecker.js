function birthdayChecker(dob) {

    // Convert the birthDate string into a Date object
    const birthday = new Date(dob);

    // Get the current date
    const currentDate = new Date();

    // Compare the month and day of the birthday with the current date
    return (
        birthday.getDate() === currentDate.getDate() &&
        birthday.getMonth() === currentDate.getMonth()
    );
}

export default birthdayChecker;
