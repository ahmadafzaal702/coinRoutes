import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return <div className={`p-4`}> {children}</div >
}

export default Wrapper