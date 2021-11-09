import React from "react";
import Panel1 from "./Panel1";
import Panel2 from "./Panel2";

function ContentWrapper ({activePanel}) {
    if (activePanel == "Projektowanie") {
        return <Panel1 />
    }
    if (activePanel == "Uzgodnienia") {
        return <Panel2 />
    }
    // if (activePanel == "Zgłoszenie") {
    //     return <Panel3 />
    // }
}

export default ContentWrapper;