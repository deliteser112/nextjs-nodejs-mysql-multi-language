import { Icon } from '@iconify/react';
import squareFill from '@iconify/icons-eva/square-fill';
import minusSquareFill from '@iconify/icons-eva/minus-square-fill';
import checkmarkSquare2Fill from '@iconify/icons-eva/checkmark-square-2-fill';

// ----------------------------------------------------------------------

const ICON_MEDIUM = { width: 24, height: 24 };
const ICON_SMALL = { width: 20, height: 20 };

export default function Checkbox(theme) {
  return {
    MuiCheckbox: {
      defaultProps: {
        color: 'primary',
        icon: <Icon icon={squareFill} {...ICON_MEDIUM} />,
        checkedIcon: <Icon icon={checkmarkSquare2Fill} {...ICON_MEDIUM} />,
        indeterminateIcon: <Icon icon={minusSquareFill} {...ICON_MEDIUM} />
      },

      styleOverrides: {
        root: {
          padding: theme.spacing(1),
          '& svg[font-size="small"]': { ...ICON_SMALL },
          '&.Mui-checked.Mui-disabled, &.Mui-disabled': {
            color: theme.palette.action.disabled
          }
        }
      }
    }
  };
}
