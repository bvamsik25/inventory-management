import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomCard from "../../components/CustomCard";
import Grid from '@mui/material/Grid2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';
import useStore from "../../store/store";

export default function Widget(){
    const tableData = useStore((state) => state.tableData)
    const originalTableData = useStore((state) => state.originalTableData)
    const [displayData, setDisplayData] = useState({})

    useEffect(()=>{
        calculateDisplayData()
    }, [tableData])

    function calculateDisplayData(){
        let rows = tableData?.rows
        let total_value = 0
        let categories = new Set()
        rows?.forEach(r => {
            let val = Number(r?.value?.substring(1))
            total_value = total_value + val
            categories.add(r?.category)
        });
        setDisplayData({
            total_products: tableData?.rows?.length,
            out_of_stock: originalTableData?.length - tableData?.rows?.length,
            total_value: total_value,
            no_of_categories: categories.size
        });
    }

    return(
        <Box sx={{mt: 2}}>
            <Grid container justifyContent='space-around' spacing={2}>
                <Grid item xs={6}>
                    <CustomCard
                        cardIcon={<ShoppingCartIcon style={{color: '#ffffff', fontSize: 30}}/>}
                        cardHeading={<Typography>Total Product</Typography>}
                        cardContent={<Typography variant="h3">{displayData?.total_products}</Typography>}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomCard
                        cardIcon={<CurrencyExchangeIcon style={{color: '#ffffff', fontSize: 30}}/>}
                        cardHeading={<Typography>Total store value</Typography>}
                        cardContent={<Typography variant="h3">{displayData?.total_value}</Typography>}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomCard
                        cardIcon={<RemoveShoppingCartIcon style={{color: '#ffffff', fontSize: 30}}/>}
                        cardHeading={<Typography>Out of stocks</Typography>}
                        cardContent={<Typography variant="h3">{displayData?.out_of_stock}</Typography>}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CustomCard
                        cardIcon={<CategoryIcon style={{color: '#ffffff', fontSize: 30}}/>}
                        cardHeading={<Typography>No of Category</Typography>}
                        cardContent={<Typography variant="h3">{displayData?.no_of_categories}</Typography>}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}