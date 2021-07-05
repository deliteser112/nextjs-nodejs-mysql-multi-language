import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// redux
import { switchMode, switchDirection } from '../redux/slices/settings';

// ----------------------------------------------------------------------

export default function useSettings() {
  const dispatch = useDispatch();
  const { themeMode, themeDirection } = useSelector((state) => state.settings);
  const isLight = themeMode === 'light';

  const handleToggleTheme = useCallback(
    () => dispatch(switchMode(isLight ? 'dark' : 'light')),
    [dispatch, isLight]
  );

  const handleChangeTheme = useCallback(
    (event) => dispatch(switchMode(event.target.value)),
    [dispatch]
  );

  const handleChangeDirection = useCallback(
    (event) => dispatch(switchDirection(event.target.value)),
    [dispatch]
  );

  return {
    // Mode
    themeMode,
    toggleMode: handleToggleTheme,
    selectMode: handleChangeTheme,
    // Direction
    themeDirection,
    selectDirection: handleChangeDirection
  };
}
