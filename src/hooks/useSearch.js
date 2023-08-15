import axios from "axios";
import { useMutation } from "react-query";

export let useSearch = (onSuccess)=>{
    let apiKey = "9868a68e1d8c4ba7947200831231802";
 

let fetchData = (q)=>{
    return axios.get(`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${q}`).catch(err=>{})
}

    return useMutation(fetchData,{
        onSuccess
    })
}