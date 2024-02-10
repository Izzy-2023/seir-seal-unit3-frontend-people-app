import { useLoaderData } from "react-router-dom";

const Landing = () => {
    const people = useLoaderData();
    console.log(people)
    return (
        <div>
            <h3>People</h3>
            {people.map(person => {
                return(
                    <div key={person._id} className="person">
                        <h1>{person.name}</h1>
                        <img src={person.image} alt={person.name}/>
                        <h3>{person.title}</h3>
                    </div>
                )
            })}
        </div>

    )
}

export default Landing;