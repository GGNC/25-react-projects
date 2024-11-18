import MenuList from "./MenuList";
function SideBar({menu = []}){
    return(
        <div className="inline-block min-w-36  min-h-screen bg-blue-700">
            <MenuList menuList={menu}/>
        </div>
    )
}

export default SideBar;