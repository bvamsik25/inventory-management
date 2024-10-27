import React, { useEffect, useState } from "react"
import { Typography, Box, Card, Dialog, IconButton, TextField, DialogActions, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import Grid from '@mui/material/Grid2';



export default function CustomModal({open, handleClose, data, handleSave}){
    const [dataCopy, setDataCopy] = useState();

    useEffect(()=>{
        setDataCopy(data)
    },[data])

    return(
        <Dialog
            open={open}
            onClose={handleClose}
            sx={{borderRadius: 3}}
        >
        <Card sx={{minWidth: 500, minHeight: 300, p:3, backgroundColor: '#292b27', borderRadius: 3}}>
            <Typography variant="h4">
                Edit Product
            </Typography>
            <Typography variant="h6">
                {data?.name}
            </Typography>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={() => ({
                    position: 'absolute',
                    right: 8,
                    top: 8
                })}
            >
                <Close sx={{color: '#deff55'}} />
            </IconButton>
            <Grid container sx={{mt: 2}} spacing={5}>
                <Grid item xs={6}> 
                    <Box>
                        <Box>
                            <Typography>Category</Typography>
                            <TextField 
                                sx={{backgroundColor: '#3f413d', borderRadius: 3}}
                                value={dataCopy?.category}
                                onChange={(e)=>setDataCopy({
                                    ...dataCopy,
                                    category:e.target.value
                                })}
                            />
                        </Box>
                        <Box>
                            <Typography>Quantity</Typography>
                            <TextField 
                                sx={{backgroundColor: '#3f413d', borderRadius: 3}}
                                value={dataCopy?.quantity}
                                onChange={(e)=>setDataCopy({
                                    ...dataCopy,
                                    quantity:e.target.value
                                })}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Box>
                            <Typography>Price</Typography>
                            <TextField 
                                sx={{backgroundColor: '#3f413d', borderRadius: 3}}
                                value={dataCopy?.price}
                                onChange={(e)=>setDataCopy({
                                    ...dataCopy,
                                    price:e.target.value
                                })}
                            />
                        </Box>
                        <Box>
                            <Typography>Value</Typography>
                            <TextField 
                                sx={{backgroundColor: '#3f413d', borderRadius: 3}}
                                value={dataCopy?.value}
                                onChange={(e)=>setDataCopy({
                                    ...dataCopy,
                                    value:e.target.value
                                })}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <DialogActions>
                <Box sx={{mt: 2}}>
                    <Button onClick={handleClose}><Typography color="#deff55">Cancel</Typography></Button>
                    <Button sx={{backgroundColor: '#434541', ml: 1, borderRadius: 3}} variant="contained" onClick={()=>{handleSave(dataCopy)}}><Typography color="#deff55">Save</Typography></Button>
                </Box>
            </DialogActions>
        </Card>
        </Dialog>
    );
}