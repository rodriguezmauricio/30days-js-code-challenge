class Pilot {
    constructor(firstName, lastName, birthday) {
        (this.firstName = firstName),
            (this.lastName = lastName),
            (this.birthday = new Date(birthday)),
            (this.flyingLicense = false);
    }

    createFlyingLicense() {
        const birthString = this.birthday.toString(); // converte o formato de data para string
        let month = birthString[4] + birthString[5] + birthString[6]; // captura o mês em string
        let monthString = ""; // inicia o mês para a pré-conversão

        switch (
            month //converte a string mês em número
        ) {
            case "Jan":
                monthString = "01";
                break;
            case "Feb":
                monthString = "02";
                break;
            case "Mar":
                monthString = "03";
                break;
            case "Apr":
                monthString = "04";
                break;
            case "May":
                monthString = "05";
                break;
            case "Jun":
                monthString = "06";
                break;
            case "Jul":
                monthString = "07";
                break;
            case "Aug":
                monthString = "08";
                break;
            case "Sep":
                monthString = "08";
                break;
            case "Oct":
                monthString = "10";
                break;
            case "Nov":
                monthString = "11";
                break;
            case "Dec":
                monthString = "12";
                break;
            default:
                monthString = "00";
        }

        let license = "";
        if (!this.flyingLicense) {
            license += this.lastName.slice(0, 5).toUpperCase(); // colocar 5 letras último nome em maiúscula
            // completar com 9 caso < 5 letras
            if (this.lastName.length <= 5) {
                for (let i = this.lastName.length; i < 5; i++) {
                    license += "9";
                }
            }
            license += "-" + birthString[13]; // adiciona "-" e década
            license += monthString; //adiciona mês
            license += birthString[14]; // adiciona último ano
            license += "." + this.firstName[0].toLowerCase(); // adiciona inicial do nome minuscula
        }

        this.flyingLicense = license; // finalmente altera a flyingLicense
    }
}

const john = new Pilot("John", "Doe", "05-25-1977");
const denvers = new Pilot("Carol", "Denvers", "08-17-1968");
const mauricio = new Pilot("Mauricio", "Rodriguez", "05-21-1990");

john.createFlyingLicense();
denvers.createFlyingLicense();
mauricio.createFlyingLicense();

console.log(john);
console.log(denvers);
console.log(mauricio);
