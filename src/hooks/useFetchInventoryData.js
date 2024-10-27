import { useEffect, useState } from "react"
import InvetoryService from "../services/inventory"
import { defaultData } from "../services/defaultData";

export default function useFetchInventoryData(){
    const [data, setData] = useState([]);

    useEffect(()=>{
        InvetoryService.getInventoryData().then((res)=>{
            let res_data = res.data;
            setData(res_data);
        }).catch((e)=>{
            setData(defaultData);
        })
    },[])
    
    return data;
}