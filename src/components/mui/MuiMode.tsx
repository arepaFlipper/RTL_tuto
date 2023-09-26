import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

type Props = {};

const MuiMode = () => {
  const theme = useTheme();
  return <Typography component="h1">{`${theme.palette.mode} mode`}</Typography>;
};

export default MuiMode;
