import { useAgentNames } from "./BusinessProvider.js"
import { Agent } from "./Agent.js"

const contentTarget = document.querySelector("#container")

export const AgentList = () => {
    const agentArray = useAgentNames()
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"
    agentArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Agent(businessObject)
        }
    );
}

// const nyBusinessesArray = businessArray.filter(nyCompany =>
//     nyCompany.addressStateCode === 'NY')
//     businessArray.forEach(
//         (businessObject) => {
//             contentTarget.innerHTML += Agent(businessObject)
//         }
//     );