import * as React from "react";
import {
  Avatar,
  CardActionArea,
  CardHeader,
  Typography,
  CardMedia,
  CardContent,
  Card,
  IconButton,
} from "@mui/material";

export default function ActionAreaCard({ type }) {
  const avatar = type === "Answer" ? "A" : "Q";
  const [image, setImage] = React.useState("");
  const [title, setTitle] = React.useState("PRUEBA");
  const [info, setInfo] = React.useState("");

  return (
    <Card
      sx={{
        maxWidth: 900,
        background: "#20232B",
        m: 5,
        border: 0.5,
        borderColor: "#B785F3",
      }}
    >
      <CardActionArea>
        <CardHeader
          title={`${title}`}
          avatar={
            <Avatar
              sx={[
                avatar === "A"
                  ? { background: "B785F5" }
                  : { background: "#F2FB8C" },
                { color: "black" },
              ]}
            >
              {avatar}
            </Avatar>
          }
          style={{ color: "white" }}
        />
        {image && (
          <CardMedia component="img" height="140" image={image} alt="Imagen" />
        )}
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ color: "white" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
