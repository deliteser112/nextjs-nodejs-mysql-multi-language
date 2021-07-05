// material
import {
  Box,
  Grid,
  Radio,
  Paper,
  RadioGroup,
  CardActionArea,
  FormControlLabel
} from '@material-ui/core';
// hooks
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, selectMode } = useSettings();

  return (
    <RadioGroup name="themeMode" value={themeMode} onChange={selectMode}>
      <Grid container spacing={2.5} dir="ltr">
        {['light', 'dark'].map((mode) => (
          <Grid item xs={6} key={mode}>
            <Paper
              sx={{
                zIndex: 0,
                overflow: 'hidden',
                position: 'relative',
                bgcolor: mode === 'dark' ? 'grey.900' : 'common.white',
                ...(themeMode === mode && {
                  boxShadow: (theme) => theme.customShadows.z12
                })
              }}
            >
              <CardActionArea>
                <Box sx={{ pt: 2, pb: 1, px: 1.5, mb: 3 }}>
                  {[40, 28, 16].map((size, index) => (
                    <Box
                      key={size}
                      sx={{
                        mb: 0.75,
                        height: size,
                        borderRadius: 0.75,
                        backgroundColor:
                          themeMode === mode ? 'primary.main' : 'grey.500',
                        ...(index === 0 && { opacity: 0.64 }),
                        ...(index === 1 && { opacity: 0.32 }),
                        ...(index === 2 && { opacity: 0.16 })
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    mb: 1,
                    mx: 'auto',
                    height: 4,
                    width: '32%',
                    borderRadius: 1,
                    backgroundColor: 'grey.50032'
                  }}
                />
                <FormControlLabel
                  label={null}
                  value={mode}
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
                ...(themeMode === mode && {
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
