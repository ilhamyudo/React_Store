import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'},
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]

const navStyle = {
    color: 'inherit', 
    typography:'h6',
    textDecoration: 'none',
    '&:hover': {
        color:'grey.500'
    },
    '&.active': {
        color: '#baecf9'
    }
}

type Props = {
    darkMode: boolean;
    toggleDarkMode: ()=>void;
}

export default function NavBar({darkMode, toggleDarkMode}: Props) {

    return (
        <AppBar position='fixed'>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography 
                        variant="h6" 
                        component={NavLink}
                        sx={navStyle}
                    >
                        React Store
                    </Typography>
                    <IconButton onClick={toggleDarkMode}>
                        {darkMode ? <DarkMode/> : <LightMode sx={{color:'yellow'}}/>}
                    </IconButton>   
                </Box>
                <List sx={{display: 'flex'}}>
                    {midLinks.map(({title, path}) => (
                        <ListItem 
                            component={NavLink}
                            to={path} 
                            key={path}
                            sx={navStyle} 
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    

                    <IconButton size="large" sx={{color: 'inherit'}}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>

                    <List sx={{display: 'flex'}}>
                        {rightLinks.map(({title, path}) => (
                            <ListItem 
                                component={NavLink}
                                to={path} 
                                key={path}
                                sx={navStyle} 
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
