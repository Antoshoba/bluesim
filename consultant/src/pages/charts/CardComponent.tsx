import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image1 from "./assets/Vector.png";

import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack } from '@mui/material';

interface CardProps {
    label: string;
    count: number;
    icon: string;
    background: string;
    borderColor: string;
}

export default function CardComponent({ label, count, icon, background, borderColor }: CardProps) {
    return (
        <Box sx={{ background: "white", border: "1px solid #E4E4E4", borderRadius: "10px", padding: "15px", width: "240px" }}>
            <Stack direction="row" spacing={3} alignItems="center">
                <Box sx={{ backgroundColor: { background }, border: `1px solid ${borderColor}`, borderRadius: "8px", padding: "20px" }}>
                    <img src={icon} width="22px" height="22px" />
                </Box>
                <Stack direction="column">
                    <Typography sx={{ fontSize: 16 }} color="text.secondary">
                        {label}
                    </Typography>
                    {label === "Routine checks" ?
                        <Typography sx={{ fontSize: "32px", fontWeight: 600 }} textAlign="initial">
                            {count} <span style={{ fontSize: "25px" }}>%</span>
                        </Typography>
                        : <Typography sx={{ fontSize: "32px", fontWeight: 600 }} textAlign="initial">
                            {count}
                        </Typography>
                    }
                </Stack>
            </Stack>
        </Box>
    );
}