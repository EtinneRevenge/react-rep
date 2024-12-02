import { Fragment } from "react"

export function List({ cities }) {
    return (
        <ul> <h3>Города:</h3>
            {cities.map(city =>
                <Fragment key={city.id}>
                    <li>{city.name}</li>
                </Fragment>
            )}
        </ul>
    )
}
