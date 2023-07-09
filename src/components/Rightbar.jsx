import { Avatar, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup';
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
          sx={{ display: { xs: "none", sm: "block"} }}>
      <Box position="fixed" width={300}>
        <Typography variant='h5' mb={2}>
          Online Friends
        </Typography>
        <AvatarGroup total={14}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846641/pexels-photo-846641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/846742/pexels-photo-846742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/846721/pexels-photo-846721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/846751/pexels-photo-846751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        </AvatarGroup>

        <Typography variant='h5' mt={5} mb={5}>
          Friendly Posts
        </Typography>

          <ImageList cols={3} rowHeight={100} gap={5}>
            <ImageListItem>
              <img  src="https://material-ui.com/static/images/image-list/breakfast.jpg"
              alt=""/>
            </ImageListItem>
            <ImageListItem>
              <img  src="https://material-ui.com/static/images/image-list/burgers.jpg"
              alt=""/>
            </ImageListItem>
            <ImageListItem>
              <img  src="https://material-ui.com/static/images/image-list/camera.jpg"
              alt=""/>
            </ImageListItem>
          </ImageList>
          <Typography variant='h5' mb={2}>
            Latest Conversations
          </Typography>
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/846754/pexels-photo-846754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/846751/pexels-photo-846751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
      </Box>
    </Box>
  )
}

export default Rightbar