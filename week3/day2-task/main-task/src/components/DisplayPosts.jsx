// import { useState, useEffect } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const DisplayPosts = ({ posts }) => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // }, []);

  return (
    <Grid container spacing={3}>
      {posts.map((post) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={post.id}>
          <StyledCard>
            <CardContent>
              <Typography variant="h6" component="div" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {post.body}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default DisplayPosts;

