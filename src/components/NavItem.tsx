interface Props {
  itemName: string;
}
function NavItem({ itemName }: Props) {
  // function NavItem({itemName}: String) {
  return (
    <li className="nav-menu">
      <a
        className="text-decoration-none text-white"
        aria-current="page"
        href="#"
      >
        {itemName}
      </a>
    </li>
  );
}

export default NavItem;
