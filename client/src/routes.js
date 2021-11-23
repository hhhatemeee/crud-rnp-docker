import frontPage from "./pages/frontPage";
import { PAGE_ROUTE } from "./utils/consts";

export const publicRoutes = [
    {
        path: PAGE_ROUTE,
        Component: frontPage
    },
]