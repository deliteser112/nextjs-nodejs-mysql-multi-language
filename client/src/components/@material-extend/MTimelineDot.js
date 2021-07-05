import PropTypes from 'prop-types';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { TimelineDot } from '@material-ui/lab';

// ----------------------------------------------------------------------

const TimelineDotStyle = styled(TimelineDot)(({ theme, styleProps }) => {
  const { color, variant } = styleProps;

  return {
    ...(variant === 'filled'
      ? {
          '&.MuiTimelineDot-filled': {
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].main
          }
        }
      : {
          '&.MuiTimelineDot-outlined': {
            borderColor: theme.palette[color].main
          }
        })
  };
});

// ----------------------------------------------------------------------

export default function MTimelineDot({
  color = 'grey',
  variant = 'filled',
  ...other
}) {
  if (
    color === 'grey' ||
    color === 'inherit' ||
    color === 'primary' ||
    color === 'secondary'
  ) {
    return <TimelineDot color={color} variant={variant} {...other} />;
  }

  return (
    <TimelineDotStyle
      variant={variant}
      styleProps={{ color, variant }}
      {...other}
    />
  );
}

MTimelineDot.propTypes = {
  color: PropTypes.oneOf([
    'grey',
    'inherit',
    'primary',
    'secondary',
    'info',
    'success',
    'warning',
    'error'
  ]),
  variant: PropTypes.oneOfType([
    PropTypes.oneOf(['filled', 'outlined']),
    PropTypes.string
  ])
};
