import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Learning BD`
    }, [title]
    )
}
export default useTitle;
