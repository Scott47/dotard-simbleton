
export const Agent = (agentObject) => {
    return `
        <article class="agents">
            <h2 class="agents__">${agentObject.purchasingAgent.nameFirst} ${agentObject.purchasingAgent.nameLast}</h2>
            <div class="business__address">
            <p class="agent-format">${agentObject.companyName}</p>
            <p class="agent-format"> ${agentObject.phoneWork}</p>
                <hr>
            </div>
        </article>
    `
}