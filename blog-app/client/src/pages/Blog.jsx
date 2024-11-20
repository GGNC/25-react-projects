import { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import { GlobalContext } from "../context";

function Blog() {
    const {formData,setFormData} = useContext(GlobalContext);
    const navigate = useNavigate();
    const handleSaveBlogToDatabase = async ()=>{
        const response = await axios.post("http://localhost:5000/api/blogs/add",{
            title : formData.title,
            description : formData.description
        });
        const result = await response.data;
        if(result){
            setFormData({
                title : "",
                description : ""
            });
            navigate("/");
        }
    }
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      <h1 className="m-2 text-2xl font-extrabold">Add Blog</h1>
      <div className="flex flex-col gap-4 min-w-72">
        <input
          type="text"
          name="title"
          placeholder="Enter blog title"
          id="title"
          className="px-4 py-2 bg-gray-100 rounded-lg text-gray-900 font-medium"
          value={formData.title}
          onChange={(event)=>setFormData({
            ...formData,
            title : event.target.value
          })}
        />
        <textarea
          name="description"
          placeholder="Enter blog description"
          id="description"
          rows={5}
          className="px-4 py-2 bg-gray-100 rounded-lg resize-none text-gray-900 font-medium"
          maxLength={150}
          value={formData.description}
          onChange={(event)=>setFormData({
            ...formData,
            description : event.target.value
          })}
        ></textarea>
        <button onClick={handleSaveBlogToDatabase} className="p-2 text-xl font-semibold rounded-full bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">ADD NEW BLOG</button>
      </div>
    </div>
  );
}

export default Blog;
