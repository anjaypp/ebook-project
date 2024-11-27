import React from 'react';
import { Box, Typography, Button, Card, CardMedia } from '@mui/material';
import banner from '../../../assets/banner.png';
import styles from './styles/NewReleases.module.css';


const NewReleases = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#fff',
      }}
    >
      {/* Left Side: Title and Description */}
      <Box sx={{ maxWidth: '50%' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '16px' }}>
          New Releases This Week
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '24px' }}>
          It’s time to update your reading list with some of the latest and greatest releases
          in the literary world. From heart-pumping thrillers to captivating memoirs, this week’s
          new releases offer something for everyone.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fbc02d',
            color: '#000',
            textTransform: 'none',
            padding: '8px 16px',
            '&:hover': {
              backgroundColor: '#f9a825',
            },
          }}
        >
          Subscribe
        </Button>
      </Box>

      {/* Right Side: Single Banner */}
      <Box>
          <CardMedia
            component="img"
            image={banner}
            alt="Banner"
            className={styles.banner}
          />
      </Box>
    </Box>
  );
};

export default NewReleases;
