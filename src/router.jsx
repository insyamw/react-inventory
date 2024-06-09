import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./pages/user/Login";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/Dashboard";
import Inbound from "./pages/inbound/IndexInbound";
import InboundCreate from "./pages/inbound/CreateInbound";
import User from "./pages/user/IndexUser";
import UserCreate from "./pages/user/CreateUser";
import UserEdit from "./pages/user/EditUser";
import Lending from "./pages/lending/IndexLending";
import LendingCreate from "./pages/lending/CreateLending";
import LendingEdit from "./pages/lending/EditLending";
import Stuff from "./pages/stuff/IndexStuff";
import StuffCreate from "./pages/stuff/CreateStuff";
import StuffEdit from "./pages/stuff/EditStuff";
import CreateLendingRestoration from "./pages/lending/CreateLendingRestoration";
import DeletedStuff from "./pages/stuff/DeletedStuff";

export const router = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/login', element: <Login /> },
    { path: '/profile', element: <Profile /> },
    { path: '/dashboard', element: <Dashboard /> },

    { path: '/inbound', element: <Inbound /> },
    { path: '/inbound/tambah', element: <InboundCreate /> },

    { path: '/user', element: <User /> },
    { path: '/user/create', element: <UserCreate /> },
    { path: '/user/edit/:id', element: <UserEdit /> },

    { path: '/lending', element: <Lending /> },
    { path: '/lending/create', element: <LendingCreate /> },
    { path: '/lending/edit/:id', element: <LendingEdit /> },

    // route pepngembalian barang,
    { path: '/lending/restoration/:id', element: <CreateLendingRestoration /> },

    { path: '/stuff', element: <Stuff /> },
    { path: '/stuff/create', element: <StuffCreate /> },
    { path: '/stuff/edit/:id', element: <StuffEdit /> },
    { path: '/stuff/deleted_stuff', element: <DeletedStuff /> },
])