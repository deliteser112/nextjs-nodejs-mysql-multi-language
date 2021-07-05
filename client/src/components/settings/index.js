import { Icon } from '@iconify/react';
import { useState } from 'react';
import closeFill from '@iconify/icons-eva/close-fill';
// material
import { Box, Drawer, Tooltip, Divider, Typography } from '@material-ui/core';
//
import { MIconButton, MFab } from '../@material-extend';
import SettingMode from './SettingMode';
import SvgIconStyle from '../SvgIconStyle';
import SettingDirection from './SettingDirection';

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 260;

export default function Settings() {
  const [open, setOpen] = useState(false);

  const handleOpenSettings = () => {
    setOpen(true);
  };

  const handleCloseSettings = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: 16, sm: 24, md: 32 },
          right: { xs: 16, sm: 24, md: 32 },
          zIndex: 999
        }}
      >
        <Tooltip title="Settings">
          <MFab
            color="warning"
            size="medium"
            onClick={handleOpenSettings}
            sx={{
              color: (theme) => theme.palette.warning.contrastText,
              background: (theme) => theme.palette.gradients.warning
            }}
          >
            <SvgIconStyle
              src="/static/icons/controls/settings.svg"
              sx={{ width: 16, height: 16 }}
            />
          </MFab>
        </Tooltip>
      </Box>

      <Drawer
        open={open}
        anchor="right"
        onClose={handleCloseSettings}
        sx={{ zIndex: 1999 }}
        PaperProps={{
          sx: { width: DRAWER_WIDTH }
        }}
      >
        <Box
          sx={{
            py: 2,
            pr: 1,
            pl: 2.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography variant="subtitle1">Settings</Typography>
          <MIconButton onClick={handleCloseSettings}>
            <Icon icon={closeFill} width={20} height={20} />
          </MIconButton>
        </Box>
        <Divider />

        <Box sx={{ pt: 3, px: 3 }}>
          <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
            Mode
          </Typography>
          <SettingMode />

          <Box sx={{ my: 3 }} />

          <Typography variant="subtitle2" sx={{ mb: 1.5 }}>
            Direction
          </Typography>
          <SettingDirection />
        </Box>
      </Drawer>
    </>
  );
}
