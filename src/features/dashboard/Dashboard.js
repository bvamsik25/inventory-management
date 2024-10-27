import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Wrapper from "../../components/Wrapper";
import Switch from '@mui/material/Switch';
import Widget from "./Widget";
import TableView from "./TableView";
import Stack from '@mui/material/Stack';
import useStore from "../../store/store";

import useFetchInventoryData from "../../hooks/useFetchInventoryData";

export default function Dashboard(){
    const data = useFetchInventoryData()
    const [isUser, setIsUser] = useState(false);
    const updateOriginalTableData = useStore((state) => state.updateOriginalTableData)
    const updateTableData = useStore((state) => state.updateTableData)

    const handleChange = () => {
        setIsUser((prev) => !prev);
      };
    
    useEffect(()=>{
        updateOriginalTableData(data)
        updateTableData(data)
    }, [data])
    
    return(
        <Wrapper>
            <Stack direction="row" spacing={1} sx={{ 
                alignItems: 'center', position: 'absolute',
                right: 152,
                top: 20,
            }}>
                <Typography>Admin</Typography>
                <Switch
                    checked={isUser}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />
                <Typography>User</Typography>
            </Stack>
            <Typography variant="h4" sx={{mt:10}}> Inventory stats</Typography>
            <Widget />
            <TableView
                data={data}
                isUser={isUser}
            />
        </Wrapper>
    )
}