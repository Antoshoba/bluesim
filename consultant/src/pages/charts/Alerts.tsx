import { Avatar, Box, Button, Link, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

const AlertsData = [
    {
        image: "/static/images/avatar/1.jpg",
        name: "Robert downey jr",
        date: " 22 May 2023",
        data: "Heart rate rises above",
        subdata: "113bpm",
        stage: "Critical",
    },
    {
        image: "/static/images/avatar/1.jpg",
        name: "Downey john jeba peter",
        date: " 22 May 2023",
        data: "Didn’t sleep well for",
        subdata: "3 days",
        stage: "Critical",
    },
    {
        image: "/static/images/avatar/1.jpg",
        name: "Chadwick bosem marvin",
        date: " 23 May 2023",
        data: "Heart rate rises above",
        subdata: "130bpm",
        stage: "High",
    }
]

export default function Alerts() {
    return (
        <Box sx={{ border: "1px solid #E4E4E4", borderRadius: "10px", padding: "20px", backgroundColor: "#ffffff", height: { xs: "550px", sm: "280px" } }}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={1.5}>
                <Typography variant="h6" fontWeight={600}>Top alerts</Typography>
                <Link color="#BB9F5B">View all</Link>
            </Stack>
            <Divider />
            {AlertsData.map((item) => (
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center" marginY={3} justifyContent="space-between">
                    <Stack direction="row" spacing={2} alignItems="center">
                        <Avatar
                            alt="Remy Sharp"
                            src="/static/images/avatar/1.jpg"
                            sx={{ width: 43, height: 43 }}
                        />
                        <Box>
                            <Typography fontSize="14px" sx={{
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                maxWidth: "108px"
                            }}>{item.name} </Typography>
                            <Typography textAlign="initial" color="rgba(0, 0, 0, 0.5)" fontSize="11px">{item.date}</Typography>
                        </Box>
                    </Stack>
                    <Typography fontSize="13px" color="rgba(0, 0, 0, 0.5)">{item.data} <span style={{ fontWeight: "bold", color: "black" }}>{item.subdata}</span></Typography>
                    {item.stage === "Critical" ?
                        <Button variant="contained" sx={{ borderRadius: "30px", padding: "3px 15px", backgroundColor: ' #F22525', textTransform: 'none', fontSize: "12px", ":hover": { backgroundColor: "#F22525" } }}>{item.stage}</Button>
                        : <Button variant="contained" sx={{ borderRadius: "30px", padding: "3px 15px", backgroundColor: '#FF9B42', textTransform: 'none', fontSize: "12px", ":hover": { backgroundColor: "#FF9B42" } }}>{item.stage}</Button>
                    }
                </Stack>
            ))}
        </Box>
    )
}