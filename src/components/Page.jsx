import React from "react";
import Name from "./Name/Name";
// import Stack from "./Stack/Stack";
// import Contacts from "./Contacts/Contacts";
import { useState } from 'react';

const Page = () => {
    let [page, setPage] = useState("main");
    return (
        <div className="Page">
            <button className="mainButton" onClick={() => setPage("main")}>Mainpage</button>
            <button className="stackButton" onClick={() => setPage("stack")}>Skills</button>
            <button className="contactsButton" onClick={() => setPage("contacts")}>Contacts</button>
            {page === "main" && <Name />}
            {/* {page === "stack" && <Stack />}
            {page === "contacts" && <Contacts />} */}
        </div>
    )
}

export default Page;