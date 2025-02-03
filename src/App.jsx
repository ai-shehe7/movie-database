

// react-router stuff
import { 
    Route, 
    createBrowserRouter, 
    createRoutesFromElements, 
    RouterProvider    
} from "react-router-dom";



// pages and layouts
import MainLayout from "./MainLayout";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/movie/:movieId" element={<MoviePage />} />
                <Route path="/search" element={<SearchPage />} />
            </Route> 
            <Route path="*" element={<NotFoundPage />}/>
        </>
        
    )
);

export default function App() {




    return (<RouterProvider router={router} />);
}