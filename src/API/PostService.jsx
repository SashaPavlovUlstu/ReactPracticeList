import axios from "axios";
export default class PostService{
    static async getAllData(){
        const randomId = Math.floor(Math.random() * 10) + 1; // от 1 до 10
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${randomId}`);
        console.log(response.data)
        return [response.data];
    }
}