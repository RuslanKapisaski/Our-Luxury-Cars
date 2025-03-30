import { html, page, render } from "../views/lib.js";
import { showRegisterView } from "./registerView.js";
import { showLoginView } from "./loginView.js";
import { showEditView } from "./editView.js";
import { showCreateView } from "./createView.js";
import { showDashboardView } from "./dashboardView.js";
import { showDetailsView } from "./detailsView.js";
import { showHomeView } from "./homeView.js";
import { logout } from "./logoutView.js";
import { updateNav } from "./util.js";
import { showSearchView } from "./searchView.js";
console.log("Works");

page("/", showHomeView);
page("/register", showRegisterView);
page("/login", showLoginView);
page("/logout", logout);
page("/addYourCar", showCreateView);
page("/dashboard", showDashboardView);
page("/details/:id", showDetailsView);
page("/edit/:id", showEditView);
page("/search", showSearchView);

page.start();
updateNav();
