import React from 'react'; 
import Box from '@mui/material/Box'




const style = {
    position: 'absolute', 
    top: '50%', 
    left: '50%', 
    transform: 'translate(-50%, -50%)', 
    width: 600, 
    bgcolor: 'background.paper', 
    border: '2px solid #000', 
    boxShadow: 24,
    p: 4,
}

const NotFound = () => {
    return (
        <Box sx={style}>
            <h1>Page Not Found</h1>
        </Box>
    )
}

export default NotFound