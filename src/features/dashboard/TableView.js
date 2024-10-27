import React, {useEffect, useState} from "react";
import { Box, Button, TableBody, TableCell, TableContainer, Table, TableHead, TableRow, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomModal from "../../components/CustomModal";
import useStore from "../../store/store";
import Paper from '@mui/material/Paper';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function TableView({data, isUser}){
    
    const [openModal, setOpenModal] = useState(false);
    const [selectedData, setSelectedData] = useState({});
    const [tableData, setTableData] = useState({
        rows: []
    });
    const columns = ['Name', 'Category', 'Price', 'Quantity', 'Value', 'Action']
    const updateTableData = useStore((state) => state.updateTableData)

    useEffect(()=>{
        mapDataToRow();
    }, [data])

    useEffect(()=>{
        updateTableData(tableData)
    }, [tableData])

    function handleClose(){
        setOpenModal(false);
    }

    function handleEdit(row){
        setSelectedData(row)
        setOpenModal(true)
    }

    function handleDelete(row){
        let row_id = row?.id;
        setTableData((prev)=>{
            let newData = []
            prev?.rows?.forEach((td, idx) => {
                if(td?.id !== row_id){
                    newData.push(td)
                }
            })
            return {
                columns: prev.columns,
                rows: newData
            };
        })
    }

    function handleVisible(row){
        let row_id = row?.id;
        setTableData((prev)=>{
            let newData = []
            prev?.rows?.forEach((td, idx) => {
                if(td?.id !== row_id){
                    newData.push(td)
                }
                else{
                    newData.push({
                        ...td,
                        visible: !td?.visible
                    })
                }
            })
            return {
                columns: prev.columns,
                rows: newData
            };
        })
    }

    function handleSave(editedValue){
        handleClose();
        let newData = []
        tableData?.rows?.forEach((td, idx) => {
            if(td?.id === editedValue?.id){
                newData.push(editedValue)
            }
            else newData.push(td)
        })
        setTableData({
            ...tableData,
            rows: newData
        })
    }

    function mapDataToRow(){
        let newData = []
        data.forEach((d, idx) => {
            newData.push({
                ...d,
                id: idx,
                visible:true
            })
        })
        setTableData({...tableData, rows: newData})
    }

    return(
        <Box sx={{
                width: '100%',
                mt: 5,
                backgroundColor: '#212124',
                borderRadius: 3
            }}
        >
            <TableContainer component={Paper} sx={{ minWidth: 650, backgroundColor: '#212124', borderRadius: 3}}>
                <Table>
                    <TableHead>
                    <TableRow>
                        {
                            columns.map((col)=>(
                                <TableCell sx={{borderBottom: 0.3}}>
                                    <Button sx={{backgroundColor: '#161718', borderRadius:3, textTransform: 'none', p: 1.2}} disableRipple>
                                        <Typography color="#a3b555">{col}</Typography>
                                    </Button>
                                </TableCell>
                            ))
                        }
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {tableData?.rows?.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                        >
                            <TableCell sx={{borderBottom: 0.3}}><Typography color={row?.visible?'white': 'grey'}>{row?.name}</Typography></TableCell>
                            <TableCell sx={{borderBottom: 0.3}}><Typography color={row?.visible?'white': 'grey'}>{row?.category}</Typography></TableCell>
                            <TableCell sx={{borderBottom: 0.3}}><Typography color={row?.visible?'white': 'grey'}>{row?.price}</Typography></TableCell>
                            <TableCell sx={{borderBottom: 0.3}}><Typography color={row?.visible?'white': 'grey'}>{row?.quantity}</Typography></TableCell>
                            <TableCell sx={{borderBottom: 0.3}}><Typography color={row?.visible?'white': 'grey'}>{row?.value}</Typography></TableCell>
                            <TableCell sx={{borderBottom: 0.3}}>
                                <Button
                                    sx={{m:0}}
                                    disabled={isUser | !row?.visible}
                                    onClick={() => {
                                        handleEdit(row)
                                    }}
                                >
                                    {<EditIcon sx={{color: isUser|!row?.visible?'grey':'#377d21'}} />}
                                </Button>
                                <Button
                                    sx={{ml:-3}}
                                    disabled={isUser}
                                    onClick={() => {handleVisible(row)}}
                                >
                                    {row?.visible?<VisibilityIcon sx={{color: isUser?'grey':'#c597d4'}}/>: <VisibilityOffIcon sx={{color: 'grey'}}/> }
                                </Button>
                                <Button
                                    sx={{ml:-3}}
                                    disabled={isUser}
                                    onClick={() => handleDelete(row)}
                                >
                                    {<DeleteIcon sx={{color: isUser?'grey':'red'}} />}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>


            <CustomModal 
                open={openModal}
                handleClose={handleClose}
                data={selectedData}
                handleSave={handleSave}
            />
        </Box>
    );
}