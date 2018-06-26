

import { Person } from '../entities/person'
import { url } from './url';


const Fetch = () => {
    return fetch(url)
        .then(response => response.json())
        .then(persons => {
            return persons.results.map(person => new Person(person));

        })

}


export { Fetch }