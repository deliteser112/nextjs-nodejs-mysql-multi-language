import {
  Box,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  CardActionArea,
  FormControlLabel
} from '@material-ui/core';
// hooks
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

export default function SettingDirection() {
  const { themeDirection, selectDirection } = useSettings();

  return (
    <RadioGroup
      name="themeDirection"
      value={themeDirection}
      onChange={selectDirection}
    >
      <Grid container spacing={2.5} dir="ltr">
        {['ltr', 'rtl'].map((direction, index) => (
          <Grid item xs={6} key={direction}>
            <Paper
              variant={themeDirection === direction ? 'elevation' : 'outlined'}
              sx={{
                zIndex: 0,
                overflow: 'hidden',
                position: 'relative',
                ...(themeDirection === direction && {
                  boxShadow: (theme) => theme.customShadows.z12
                })
              }}
            >
              <CardActionArea>
                <Box
                  sx={{
                    py: 2.5,
                    px: 1.5,
                    display: 'flex',
                    flexDirection: 'column',
                    ...(index === 1 && { alignItems: 'flex-end' })
                  }}
                >
                  {[48, 32, 20].map((size, index) => (
                    <Box
                      key={size}
                      sx={{
                        mb: 0.75,
                        width: size,
                        height: size / 2,
                        borderRadius: 0.75,
                        bgcolor:
                          themeDirection === direction
                            ? 'primary.main'
                            : 'grey.500',
                        ...(index === 0 && { opacity: 0.64 }),
                        ...(index === 1 && { opacity: 0.32 }),
                        ...(index === 2 && { opacity: 0.16 })
                      }}
                    />
                  ))}
                </Box>
                <FormControlLabel
                  label={null}
                  value={direction}
                  control={<Radio />}
                  sx={{
                    top: 0,
                    margin: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    '& .MuiRadio-root': { display: 'none' }
                  }}
                />
              </CardActionArea>
            </Paper>
            <Box
              sx={{
                mt: 2,
                mx: 'auto',
                borderRadius: '50%',
                backgroundColor: 'primary.main',
                ...(themeDirection === direction && {
                  width: 10,
                  height: 10
                })
              }}
            />
          </Grid>
        ))}
      </Grid>
    </RadioGroup>
  );
}
