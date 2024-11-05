import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { styled } from "@mui/material";

interface FavoriteIconProps {
  favorited: boolean;
  customColor?: string;
}

export function FavoriteIcon(props: FavoriteIconProps): JSX.Element {
  const { favorited, customColor } = props;

  return favorited ? (
    <Favorite
      sx={{
        color: customColor ?? "white",
        fontSize: "1.5rem",
      }}
    />
  ) : (
    <FavoriteBorder
      sx={{
        color: customColor ?? "white",
        fontSize: "1.5rem",
      }}
    />
  );
}
