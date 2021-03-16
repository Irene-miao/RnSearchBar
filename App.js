import React from "react";
import Search from "./search";
import "./App.css";

const posts = [
  { id: "1", name: "This first post is about food" },
  { id: "2", name: "This second post is about games" },
  { id: "3", name: "This third post is about drama" },
  { id: "4", name: "This last post is about travel" },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

const App = () => {
const {search} = window.location;
const query = new URLSearchParams(search).get('s');
const filteredPosts = filterPosts(posts, query);

  return (
    <div>
      <Search />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
