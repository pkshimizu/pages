import MuiTypography from "@mui/material/Typography"

type LabelProps = {
  text: string
}

export default function Label({text}: LabelProps) {
  return (
    <MuiTypography>
      {text}
    </MuiTypography>
  )
}