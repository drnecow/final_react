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

    const result = JSON.parse(data);

    return {result}
}

export default useFetch;