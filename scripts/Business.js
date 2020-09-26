

  export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__">${businessObject.companyName}</h2>
            <div class="business__address">
            <p class="address-format">${businessObject.addressFullStreet} ${businessObject.addressCity}</p>
            <p class="address-format">${businessObject.addressStateCode}, ${businessObject.addressZipCode}</p>
                <hr>
            </div>
        </section>
    `
}