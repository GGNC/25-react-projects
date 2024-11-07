function GithubProfile({profileData}){
    const createDate = new Date(profileData.created_at);
    return(
        <div className="border w-3/4 m-4 flex flex-col flex-nowrap items-center justify-center">
            <div className="w-full m-4 flex flex-row flex-wrap items-start justify-evenly gap-2">
                <img className="w-3/12 min-w-60 border rounded-full" src={profileData.avatar_url} />
                <div className="w-1/2 min-w-40 flex flex-col flex-nowrap items-start gap-1">
                    <a target="_blank" href={`http://github.com/${profileData.login}`} className="w-full text-5xl font-bold">{profileData.name || profileData.login }</a>
                    <p className="w-full inline text-xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{profileData.bio}</p>
                    <p className="w-full inline text-lg font-medium">{profileData.location}</p>
                    <div className="w-full flex flex-row flex-wrap justify-start gap-4">
                        <p className="text-lg font-medium">
                            <span>Followers : </span>{profileData.followers}
                        </p>
                        <p className="text-lg font-medium">
                            <span>Following : </span>{profileData.following}
                        </p>
                    </div>
                    <p className="text-lg font-medium">
                            <span>Public Repos : </span>{profileData.public_repos}
                    </p>
                    <p className="text-lg font-medium">User joined in {`${createDate.getDate()} ${createDate.toLocaleString("en-us",{
                        month : "short"
                    })} ${createDate.getFullYear()}`}</p>
                </div>
            </div>
        </div>
    )
}

export default GithubProfile;