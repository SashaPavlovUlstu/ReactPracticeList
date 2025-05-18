import { useState } from "react";
import "./styles/App.css";
import Container from "./API/Container/Container.jsx";
import NewTaskBlock from "./components/NewTaskBlock.jsx";
import PostList from "./components/PostList.jsx";
import PostService from "./API/PostService.jsx";
import { useFetching } from "./hooks/UseFetching.jsx";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, name: "javascript", username: "Desciption" },
        { id: 2, name: "CSS", username: "Desciption" },
    ]);
    const [serverPosts, setServerPosts] = useState([]);

    const [fetchPosts, postError, isPostLoading] = useFetching(async () => {
        const users = await PostService.getAllData();
        const newPosts = users.map(user => ({
            id: user.id,
            name: user.name,
            username: user.username,
        }));
        setServerPosts(prev => [...prev, ...newPosts]);
    });

    const createPost = (newPost) => {
        setPosts(prev => [...prev, newPost]);
    };

    return (
        <>
            <Container className="black">
                <NewTaskBlock create={createPost} fetchPosts={fetchPosts} />
            </Container>
            <Container className="white">
                <div className="mainGrid">
                    <PostList className="black" posts={posts} />
                    <PostList className="white" posts={serverPosts} />
                </div>
            </Container>
        </>
    );
}

export default App;
