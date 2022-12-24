import {useEffect, useState} from "react";
import axios from "axios";

function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            })
    }, []);

    return {data}
}

export default useFetch;