import React from "react";

const Actor = ( {name, as } ) => {
    return (

        <div>
            <p>Jméno: {name}</p>
            <p>Jako: {as}</p>
        </div>

    )
};


export default Actor;