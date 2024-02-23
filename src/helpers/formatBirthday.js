function formatBirthday(dateOfBirth) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    //  The new Date object from the date of birth string
    const dob = new Date(dateOfBirth);

    // Extract day and month
    const day = dob.getDate();
    const monthIndex = dob.getMonth();
    const monthName = months[monthIndex];

    // Format the new date
    const formattedDate = `${day} ${monthName}`;

    return formattedDate;
}

export default formatBirthday;