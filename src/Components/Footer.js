import React from 'react';

import { Box, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box>
        <Typography variant="caption">
          &#169; 2024 EMPAC Research | Developed and Maintained by{' '}
          <Link href="https://craive-lab.gitbook.io/craive-lab-production-manual-for-designers/welcome/collaboration">
            Researchers and Collaborators
          </Link>
        </Typography>
        <Typography variant="caption"></Typography>
      </Box>
    </>
  );
};

export default Footer;
