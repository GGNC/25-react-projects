import MenuItem from "./MenuItem";

function MenuList({menuList = []}){
    const renderedData = menuList.map(menuItem => {
        return(
            <MenuItem key={menuItem.label} data={menuItem} />
        )
    });
    return(
        <ul className="list-none my-0">
            {renderedData}
        </ul>
    )
}
export default MenuList;