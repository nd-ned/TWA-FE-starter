import { Box, CircularProgress } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const SplashScreen = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        flexDirection: "column",
      }}
    >
      <CircularProgress style={{ color: "#fff" }} size={50} />
    </Box>
  );
};

export default SplashScreen;
