import { useState } from "react"
import { Button, CircularProgress, Box } from "@mui/material"

type LoadingButtonProps = {
  title: string
  onclick: () => void
  style?: React.CSSProperties
  loadingText?: string
}

const LoadingButton = ({
  title,
  onclick,
  style = {},
  loadingText,
}: LoadingButtonProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)

    await new Promise((resolve) => setTimeout(resolve, 100))

    await onclick()

    setLoading(false)
  }

  return (
    <Box textAlign="center">
      <Box position="relative" display="inline-flex">
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          disabled={loading}
          style={style}
        >
          {loading ? loadingText : title}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            color="secondary"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: -12,
              marginLeft: -12,
            }}
          />
        )}
      </Box>
    </Box>
  )
}

export default LoadingButton
