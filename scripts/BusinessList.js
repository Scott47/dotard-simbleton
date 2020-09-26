
import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    // const nyBusinessesArray = businessArray.filter(nyCompany =>
    // nyCompany.addressStateCode === 'NY')
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
    // nyBusinessesArray.forEach(
    //     (businessObject) => {
    //         contentTarget.innerHTML += Business(businessObject)
    //     }
    // );

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector("#container")


document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        console.log(keyPressEvent, keyPressEvent.target.value, 'keypress')
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                // implement .find() method here
            */
            const foundBusiness = businessArray.find(business => business.companyName.toLowerCase()
                                               .includes(keyPressEvent.target.value.toLowerCase()))

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });
}