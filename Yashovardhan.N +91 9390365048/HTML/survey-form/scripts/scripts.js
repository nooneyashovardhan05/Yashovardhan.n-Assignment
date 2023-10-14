class surveyFormOperations {
    textRegex = /^[A-Za-z][A-Za-z\.\'\-]+([\ A-Za-z][A-Za-z\.\'\-]+)*$/;
    emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/;
    mobileRegex = /^(\+?\d{1,4}[ -]?)?\d{6,15}$/;
    surveyFormData=[];
    requiredInputs=document.querySelectorAll(".required");
    submit=document.querySelector(".submit");
    reset=document.querySelector(".reset");
    genders=document.querySelector(".genders");
    selectedGender="";
    formFields=document.querySelectorAll(".form-field");
    countryList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
    errorMessages=document.querySelectorAll(".error-message");
    
    constructor() {
        this.countryList.forEach(function (x) {
            const select = document.querySelector(".country-dropdown");
            const option = document.createElement("option");
            option.value = x;
            option.text = x;
            select.appendChild(option);
        });

        for(let i=0; i<this.requiredInputs.length;i++) {
            this.requiredInputs[i].addEventListener("input", ()=>{
                if(this.requiredInputs[i].name!=="date-of-birth") {
                    this.inputFieldValidation(this.requiredInputs[i], eval("this."+this.requiredInputs[i].name+"Regex"))
                }
            })

            this.requiredInputs[i].addEventListener("blur", () => {
                this.checkEmptyFields(this.requiredInputs[i]);
            })
        }

        this.genders.addEventListener("click",()=>{
            this.checkUncheckedGender(document.querySelectorAll(".radio-input"))
        })

        this.submit.addEventListener("click", () => {
            this.submitForm();
        })

        this.reset.addEventListener("click", ()=>{
            this.reserForm();
        })
    }

    submitForm() {
        if(this.isFormValid()) {
            alert(`
                First Name: ${document.querySelector(".first-name").value},
                Last Name: ${document.querySelector(".last-name").value}, 
                Date of Birth: ${document.querySelector(".date-of-birth").value},
                Country: ${document.querySelector(".country-dropdown").value},
                Gender: ${this.selectedGender},
                Profession: ${document.querySelector(".profession").value},
                Email: ${document.querySelector(".email").value},
                Mobile Number: ${document.querySelector(".mobile").value}
            `);
            this.reset.click();
        }
    }

    reserForm() {
        this.errorMessages.forEach((errorMessage)=>{
            errorMessage.textContent="";
        })
    }

    checkUncheckedGender(genderInputs) {
        let genderSelected=false;

        for(let i=0; i<genderInputs.length; i++) {
            if(genderInputs[i].checked) {
                genderSelected=true;
                this.selectedGender=genderInputs[i].value;
            }
        }

        if(!genderSelected) {
            this.genders.nextElementSibling.textContent="gender is required";
        }

        else if(genderSelected) {
            this.genders.nextElementSibling.textContent="";
        }
    }

    checkEmptyFields(requiredInput) {
        let errorMessage=requiredInput?.parentElement?.parentElement?.nextElementSibling;

        if(requiredInput.name==="date-of-birth") {
            if(requiredInput.validity.valueMissing) {
                errorMessage.textContent=requiredInput?.parentElement.previousElementSibling?.innerHTML+" is required";
            }

            else {
                errorMessage.textContent="";
            }
        }

        if(!requiredInput?.value.length) {
            errorMessage.textContent=requiredInput?.parentElement.previousElementSibling?.innerHTML+" is required";
        }
    }

    isFormValid() {
        let isValid=true;
        this.formFields.forEach((formField)=>{
            let errorMessage=formField?.parentElement?.parentElement?.nextElementSibling;
            this.genders.click();

            if(this.genders.nextElementSibling.textContent.length!==0) {
                isValid=false;
            }

            if(!formField.value.length) {
                errorMessage.textContent = `${formField.parentElement?.previousElementSibling?.textContent} is required`;
                isValid=false;
            }

            else if(errorMessage?.length) {
                isValid=false;
            }
        })
        return isValid;
    }

    inputFieldValidation(inputField, inputFieldRegex) {
        let errorMessage=inputField?.parentElement?.parentElement?.nextElementSibling;

        if(inputField?.value.length && !inputFieldRegex?.test(`${inputField.value}`)) {
            errorMessage.textContent=inputField?.parentElement.previousElementSibling?.innerHTML+" is invalid";
        }

        else if(inputField?.value.length && inputFieldRegex?.test(`${inputField.value}`)) {
            errorMessage.textContent="";
        }
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    new surveyFormOperations();
});