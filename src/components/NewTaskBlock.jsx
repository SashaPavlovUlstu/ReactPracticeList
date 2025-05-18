import React, {useState} from "react";
import cs from "../styles/NewTaskBlock.module.css";
import Input from "./UI/Input/Input.jsx";
import Button from "./UI/Button/Button.jsx";
const NewTaskBlock = ({ create, fetchPosts }) => {
    const [post, setPost] = React.useState({ name: "", username: "" });

    const changeName = (e) => {
        setPost({ ...post, name: e.target.value });
    };

    const changeUsername = (e) => {
        setPost({ ...post, username: e.target.value });
    };
    const AddFetchPost = (e)=>{
        e.preventDefault();
        fetchPosts();
    }

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ name: "", username: "" });

    };

    return (
        <form className={cs.inner}>
            <h1 className={cs.header}>Play Your Day</h1>
            <h6 className={cs.supText}>Stay organized and focused on your tasks</h6>
            <div className={cs.inputWrapper}>
                <Input onChange={changeName} value={post.name} placeholder="Enter name" />
            </div>
            <div className={cs.inputWrapper}>
                <Input onChange={changeUsername} value={post.username} placeholder="Enter username" />
            </div>
            <div className={cs.buttonWrapper}>
                <Button onClick={AddFetchPost} type="button" className="black">Load</Button>
                <Button onClick={addNewPost} className="white">Add</Button>
            </div>
        </form>
    );
};
export default NewTaskBlock;