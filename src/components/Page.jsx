import React from "react";
import Name from "./Name/Name";
// import Stack from "./Stack/Stack";
import Contacts from "./Contacts/Contacts";
import { useState } from 'react';
import './Page.css'

const Page = () => {
    let [page, setPage] = useState("main");
    let name1_ = "Vsevolod"
    let name2_ = "Enushkevich" // прокинул пропсы по приколу ну а че нет
    let github = "c1kvoy"
    let telegram = "vvework"
    let instagram = "enushkevichvv"
    return (
        <div className="Page">
            <button className="mainButton" onClick={() => setPage("main")}>Mainpage</button>
            <button className="stackButton" onClick={() => setPage("stack")}>Skills</button>
            <button className="contactsButton" onClick={() => setPage("contacts")}>Contacts</button>
            {page === "main" && <Name name1={name1_} name2={name2_} />}
            {/* {page === "stack" && <Stack />} */}
            {page === "contacts" && <Contacts gith={github} teleg={telegram} instag={instagram} />}
        </div>
    )
}

export default Page;