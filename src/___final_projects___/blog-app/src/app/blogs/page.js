import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default async function Page() {
  const res = await fetch(`${process.env.API_URL}/api/blogs`);
  const blogs = await res.json();

  return (
    <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {blogs.map((blog) => (
        <Grid2 size={{ md: 6 }} key={blog.id}>
          <Card sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              sx={{ width: "45%" }}
              image={`/img/${blog.img}`}
              alt=""
            ></CardMedia>
            <Box>
              <CardContent>
                <Typography component="div" variant="h6">
                  {blog.name}
                </Typography>
                <Typography component="div" variant="subtitle1">
                  {blog.description.substring(0, 80) + "..."}
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                <Button
                  component={Link}
                  href={`/blogs/` + blog.id}
                  size="small"
                >
                  Detay
                </Button>
              </CardActions>
            </Box>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
