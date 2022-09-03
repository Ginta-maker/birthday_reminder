import React from 'react'

export default function Form({create}) {

    const submit = event => {
        event.preventDefault();
        const {pers} = event.target;
        create(pers.value);
        pers.value = '';
    }

    return (

    <form onSubmit={submit}>
        <input placeholder='person' type="text" name='pers' />
        <button>add person</button>
    </form>
  )
}
