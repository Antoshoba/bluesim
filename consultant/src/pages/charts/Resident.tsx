import { Box, Link, Stack, Typography } from "@mui/material";
import ResidentChart from "./ResidentChart";

export default function Resident() {
    return (
        <Box sx={{ border: "1px solid #E4E4E4", width: "500px", borderRadius: "10px", padding: "15px" }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h5">Residents</Typography>
                <Link>View all</Link>
            </Stack>
            <ResidentChart />
        </Box>
    )
}