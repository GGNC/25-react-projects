import { useState } from "react";
import GithubProfile from "../components/GithubProfile";
import SearchBar from "../components/SearchBar";

function GithubProfileFinder(){
    const [profileData,setProfileData] = useState({});
    const [loading,setLoading] = useState(false);
    const [errorMessage,setErrorMessage] = useState("");
    const handleSearch = async (searchTerm) =>{
        try{
            setLoading(true);
            const response = await fetch(`http://api.github.com/users/${searchTerm}`);
            const data = await response.json();
            setProfileData(data);
        }catch(error){
            setErrorMessage(error.message);
        }finally{
            setLoading(false);
        }
    }
    return(
        <div className="w-4/5 m-auto flex flex-col items-center">
            <SearchBar onSearch={handleSearch}/>
            {loading ? 
                <h1 className="text-4xl font-medium"> 
                    Profile Loading...
                </h1>
                : errorMessage ? 
                    <div className="text-4xl font-medium"> 
                        {errorMessage}
                    </div>
                    : Object.keys(profileData).length ? 
                        profileData.login ?  
                            <GithubProfile profileData={profileData} /> 
                            : <div className="text-4xl font-medium">
                                There is no profile with this username.
                              </div>
                        :  null
            }
        </div>
    )

}

export default GithubProfileFinder;