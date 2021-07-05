import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
// material
import { Link, Container, Typography } from '@material-ui/core';
//
import Logo from '../Logo';

// ----------------------------------------------------------------------

export default function LandingFooter() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', py: 5 }}>
      <ScrollLink to="move_top" spy smooth>
        <Logo sx={{ mb: 1, mx: 'auto' }} />
      </ScrollLink>

      <Typography variant="caption">
        © All rights reserved
        <br /> Made by &nbsp;
        <Link href="https://minimals.cc/">minimals.cc</Link>
      </Typography>
    </Container>
  );
}
