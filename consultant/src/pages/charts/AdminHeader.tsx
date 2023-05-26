import { Box, FormControl, InputLabel, ListItemIcon, ListItemText, MenuItem, Select, Stack, SvgIcon, Typography } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import image from "./assets/image 300.png";
import React from "react";

export default function AdminHeader() {
    const [days, setDays] = React.useState("");// <--------------(Like this).
    const handleChange = (event: any) => {
        setDays(event.target.value);
    };
    return (
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" alignItems="center" marginY={2} >
            <Stack direction="row" spacing={1}>
                <Typography variant="h5">Welcome back, Chang wang </Typography>
                <img src={image} width="30px" height="30px" />
            </Stack>
            <Box sx={{ minWidth: 176 }} marginY={{ xs: "10px", sm: "0px" }}>
                <Select
                    sx={{ width: 176, borderRadius: "28px", padding: "0px 5px" }}
                    defaultValue="Last week"
                    displayEmpty
                    renderValue={(value) => {
                        return (
                            <Box sx={{ display: "flex", gap: 1 }}>
                                <SvgIcon >
                                    <CalendarMonthIcon />
                                </SvgIcon>
                                {value}
                            </Box>
                        );
                    }}
                >
                    <MenuItem value="Last week">Last week</MenuItem>
                    <MenuItem value="10">Ten</MenuItem>
                    <MenuItem value="20">Twenty</MenuItem>
                    <MenuItem value="30">Thirty</MenuItem>
                </Select>
            </Box>
        </Stack>
    )
}