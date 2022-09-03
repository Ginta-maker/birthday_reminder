import React from 'react'

 const List = ({persons, del}) => {

  return (
    <>
        {persons.map((person) => {
            const {id, name, age, image} = person;
            return <article className="person" kay={id}>
                <img src={image} alt={image} />
                <div>
                    <h3>{name}</h3>
                    <p>{age} years</p>
                    <button onClick={() => del (id)}>clear</button>
                </div>
            </article>
        })}
    </>
  )
}

export default List
