import MuiButton from "@mui/material/Button"

type ButtonProps = {
  label: string
}

export default function Button({label}: ButtonProps) {
  return (
    <MuiButton variant={"outlined"}>
      {label}
    </MuiButton>
  )
}