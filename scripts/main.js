import { BusinessList } from './BusinessList.js'
import { useBusinesses } from './BusinessProvider.js'


const businesses = useBusinesses()
const list = BusinessList(businesses)
console.log(list)