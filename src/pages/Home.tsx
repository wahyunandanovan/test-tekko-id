import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Box } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Home() {
   const { items, isLoading } = useFetch({ module: 'users?size=10' })
   const navigate = useNavigate()

   return (
      <div>
         <h1 style={{ margin: '20px' }} >USERS</h1>
         {isLoading && <p style={{ color: 'gray', margin: '20px' }} >Loading ...</p>}
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {items?.map((item: any, idx: any) => {
               return (
                  <ListItem key={idx}>
                     <ListItemAvatar>
                        <Avatar src={item?.avatar} >

                        </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={item?.first_name} secondary={item?.email} />
                  </ListItem>
               )
            })}

         </List>
         <Box sx={{ width: "100%", display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' sx={{ m: 2, backgroundColor: "#1ac073" }} onClick={() => navigate('/')} >logout</Button>

         </Box>
      </div>
   )
}

export default Home