import { Box, Typography } from "@mui/material";
import { TonConnectButton } from "@tonconnect/ui-react";

const ConnectWalletPage = () => {
  return (
    <Box mt={2} textAlign="center">
      <Typography variant="h6" gutterBottom>
        Join the Fair and Transparent LOTTON Lottery on the TON Blockchain!
      </Typography>
      <Box display="flex" justifyContent="center" m={2}>
        <TonConnectButton
          style={{
            height: "40px",
          }}
        />
      </Box>
    </Box>
  );
};

export default ConnectWalletPage;
