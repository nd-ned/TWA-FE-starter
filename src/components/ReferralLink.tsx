import { Box, IconButton, Link } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import toast from "react-hot-toast";

const BOT_USERNAME = process.env.REACT_APP_BOT_USERNAME as string;

const ReferralLink = ({ telegram_id }: { telegram_id: number | string }) => {
  const referralCode = encodeReferralCode(telegram_id);
  const telegramLink = `https://t.me/${BOT_USERNAME}?start=${referralCode}`;

  const handleCopy = (e: any) => {
    e.preventDefault();

    navigator.clipboard.writeText(telegramLink);
    toast.success("Referral link copied to clipboard");
  };

  return (
    <Box display="flex" alignItems="center">
      <Link
        href={telegramLink}
        target="_blank"
        rel="noreferrer"
        onClick={handleCopy}
      >
        {telegramLink}
      </Link>
      <IconButton size="small" onClick={handleCopy}>
        <ContentCopyIcon />
      </IconButton>
    </Box>
  );
};

const encodeReferralCode = (telegram_id: number | string) => {
  return btoa(telegram_id.toString());
};

export default ReferralLink;
