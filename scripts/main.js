import { AgentList } from './AgentList.js'
import { BusinessList } from './BusinessList.js'
import { useAgentNames, useBusinesses } from './BusinessProvider.js'


const businesses = useBusinesses()
const list = BusinessList(businesses)
console.log(list)

// const agents = useAgentNames()
// const agentList = AgentList(agents)


