import {
  FaTrashCan,
  FaRegPenToSquare,
  FaSquareXmark,
  FaSquareCheck,
} from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function BlogTile({ blog }) {
    const [blogValue, setBlogValue] = useState({
        title : blog?.title,
        description : blog?.description
    });
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState({
    title: blog?.title,
    description: blog?.description,
  });
  const navigate = useNavigate();
  const handleBlogDelete = async () => {
    const response = await axios.delete(
      `http://localhost:5000/api/blogs/delete/${blog?._id}`
    );
    const result = await response.data;
    if (result?.message) {
      navigate(0);
    }
  };
  const handleBlogEdit = async () => {
    const response = await axios.put(`http://localhost:5000/api/blogs/update/${blog?._id}`,{
        title: editValue.title,
        description: editValue.description
    });
     const result = await response.data;
     if(result){
        setBlogValue({
            title: editValue.title,
            description: editValue.description
        });
        setEditMode(0);
     }
  };
  const handleBlogCancelEdit = () => {
    setEditMode(false);
    setEditValue({
      title: blog?.title,
      description: blog?.description,
    });
  };
  return (
    <div className="min-w-48 max-w-80 min-h-40 p-4 bg-gray-300 rounded-2xl text-gray-800 flex flex-col justify-between items-center">
      <div className="w-full">
        <>
          {editMode ? (
            <input
              className="w-full px-4 py-2 m-auto my-1 rounded-xl font-medium"
              value={editValue.title}
              onChange={(event) =>
                setEditValue({
                  ...editValue,
                  title: event.target.value,
                })
              }
            />
          ) : (
            <h1 className="w-full text-2xl font-medium">{blogValue.title}</h1>
          )}
        </>
        <>
          {editMode ? (
            <textarea
              className="w-full px-4 py-2 m-auto my-1 rounded-xl font-light resize-none"
              value={editValue.description}
              onChange={(event) =>
                setEditValue({
                  ...editValue,
                  description: event.target.value,
                })
              }
              rows={10}
              maxLength={150}
            />
          ) : (
            <p className="w-full text-sm font-light">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{blogValue.description}
            </p>
          )}
        </>
      </div>
      <div className="w-full m-2 flex flex-row flex-nowrap justify-end gap-2">
        <>
          {editMode ? (
            <>
              <FaSquareCheck
                size={27.5}
                className="cursor-pointer"
                onClick={handleBlogEdit}
              />
              <FaSquareXmark
                size={27.5}
                className="cursor-pointer"
                onClick={handleBlogCancelEdit}
              />
            </>
          ) : (
            <FaRegPenToSquare
              size={25}
              className="cursor-pointer"
              onClick={() => setEditMode(true)}
            />
          )}
        </>

        <FaTrashCan
          size={25}
          className="cursor-pointer"
          onClick={handleBlogDelete}
        />
      </div>
    </div>
  );
}

export default BlogTile;
