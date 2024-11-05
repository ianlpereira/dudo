import { Avatar, Badge, styled as muiStyled } from "@mui/material";

const StyledBadge = muiStyled(Badge)<{ customColor: string }>(
  ({ theme, customColor }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: customColor,
      color: customColor,
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  })
);

interface BetAvatarProps {
  paymentStatus: boolean;
}

export function BetAvatar(props: BetAvatarProps): JSX.Element {
  const { paymentStatus } = props;
  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      customColor={paymentStatus ? "green" : "red"}
    >
      <Avatar src="https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png" />
    </StyledBadge>
  );
}
