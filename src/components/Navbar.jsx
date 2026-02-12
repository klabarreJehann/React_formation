import {
  Alignment,
  Button,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Navbar as Navbar_Blueprint,
} from "@blueprintjs/core";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Navbar_Blueprint>
        <div style={{ margin: "0 auto", width: 480 }}>
          {/* Add me */}
          <NavbarGroup>
            <NavbarHeading>GECAT_FrontEnd</NavbarHeading>
          </NavbarGroup>
          <NavbarGroup align={Alignment.END}>
            <Link to="/">
              <Button icon="home" text="Accueil" variant="minimal" />
            </Link>
            <Link to="quick-start">
              <Button icon="manual" text="quick-start" variant="minimal" />
            </Link>
            <Link to="requete-http">
              <Button
                icon="globe-network"
                text="Requete HTTP"
                variant="minimal"
              />
            </Link>
            <Link to="courriers">
              <Button icon="inbox" text="courriers" variant="minimal" />
            </Link>
            <NavbarDivider />
            <Button icon="user" variant="minimal" />
            <Button icon="notifications" variant="minimal" />
            <Button icon="cog" variant="minimal" />
          </NavbarGroup>
        </div>
      </Navbar_Blueprint>
    </div>
  );
};
