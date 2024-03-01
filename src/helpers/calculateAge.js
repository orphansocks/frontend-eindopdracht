function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    let age = today.getFullYear() - birthDate.getFullYear();
    const differenceMonth = today.getMonth() - birthDate.getMonth();

    if(differenceMonth < 0 || (differenceMonth === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export default calculateAge;