import { useEffect } from "react";

const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title}`
    }, [title])

    return null;
}
 
export default UseTitle ;