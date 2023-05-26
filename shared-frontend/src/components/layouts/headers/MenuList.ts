import SubMenuList from "./SubMenuList";

export default interface MenuList {
  name: string;
  url: string;
  icon: string;
  submenu: SubMenuList[];
}
