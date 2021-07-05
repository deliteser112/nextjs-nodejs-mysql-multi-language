import PropTypes from 'prop-types';
// material
import { useTheme } from '@material-ui/core/styles';
import { Box, Typography, Paper } from '@material-ui/core';

// ----------------------------------------------------------------------

Block.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  sx: PropTypes.object
};

export default function Block({ title, children, sx, ...other }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  return (
    <Box sx={{ position: 'relative' }} {...other}>
      {title && (
        <Typography
          gutterBottom
          variant="subtitle2"
          sx={{ color: 'text.secondary' }}
        >
          {title}
        </Typography>
      )}
      <Paper
        variant="outlined"
        sx={{
          p: 1,
          minHeight: 160,
          borderRadius: 1.5,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: theme.palette.grey[isLight ? 100 : 800],
          '& > *': { m: '8px !important' },
          ...sx
        }}
      >
        {children}
      </Paper>
    </Box>
  );
}
