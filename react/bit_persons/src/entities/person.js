

class Person {
    constructor(person) {
        this.name = person.name.first;
        this.surname = person.name.last;
        this.gender = person.gender;
        this.dob = new Date(person.dob.date);
        this.picture = person.picture;
        this.email = person.email;
        this.registered = person.registered;
    }

    hideMail() {
        const email = this.email.split("@");        

        const firstThreeLetter = email[0].slice(0, 3);
        const lastThreeLetter = email[0].slice(email[0].length - 3, email[0].length);
        
        const hidenMail = `${firstThreeLetter}...${lastThreeLetter}@${email[1]}`; 
        return hidenMail;
    }
}

export { Person };