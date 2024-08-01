import { Box, Typography } from "@mui/material"

interface InlineIconTextProps {
  text: string
  icon: React.ReactNode
}

const InlineIconText = ({ icon, text }: InlineIconTextProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {icon}
      <Box component="span" ml={1}>
        <Typography style={{ wordBreak: "break-all" }} fontSize={18} pr={1}>
          {text}
        </Typography>
      </Box>
    </Box>
  )
}

export default InlineIconText
