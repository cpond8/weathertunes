import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <NavigationMenu className="px-4 py-2">
      {/* 始 NavBar Items List */}
      <NavigationMenuList>
        {/* HOME */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {/* LOGIN */}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link to="/login">Login</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      {/* MUSIC */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/music">Music</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>{" "}
      {/* FAVORITES */}
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="/favorites">Favorites</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/* 終 NavBar Items List */}
    </NavigationMenu>
  );
}

export default NavBar;
