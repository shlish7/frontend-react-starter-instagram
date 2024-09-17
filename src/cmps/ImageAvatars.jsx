import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import profilePic from '../assets/styles/images/profile_pic.jpg'

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Profile Picture" src={profilePic}    sx={{
        width: '30px !important', height: '30px !important'
}} />
  
    </Stack>
  );
}