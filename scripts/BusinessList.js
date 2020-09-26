
import { useBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"

const contentTarget = document.querySelector("#container")

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    const nyBusinessesArray = businessArray.filter(nyCompany =>
    nyCompany.addressStateCode === 'NY')
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
}