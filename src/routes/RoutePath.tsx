import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";
import NotFound from "../components/notFound/NotFound";
import { Paths } from "./path";
import HomeSection from "../pages/homeSection/HomeSection";
import AllBlogSection from "../pages/allBlogSection/AllBlogSection";
import CreateSection from "../pages/createSection/CreateSection";
import { useAppDispatch, useAppSelector } from "../logic/redux/store/hooks";
import SignInSection from "../pages/signInSection/SignInSection";
import RegisterSection from "../pages/registerSection/RegisterSection";
import BlogDetail from "../pages/blogDetail/BlogDetail";
import ProfileSection from "../pages/profileSection/ProfileSection";
import EditProfileSection from "../pages/editProfileSection/EditProfileSection";
import { setLoggedDetail, setLoggedIn } from "../logic/redux/action/action";
import { useEffect } from "react";

export interface RouteDefinition {
  element: any;
  routes?: RouteDefinition[];
  path: string;
  protected?: boolean;
  redirect?: any;
  title?: string;
  requires?: any;
  pathType?: number;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  element: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.home,
    element: HomeSection,
    protected: false,
    title: "Home Section",
  },
  {
    path: Paths.allBlog,
    element: AllBlogSection,
    protected: false,
    title: "All Blog Section",
  },
  {
    path: Paths.createBlog,
    element: CreateSection,
    protected: true,
    title: "Create Section",
  },
  {
    path: Paths.signIn,
    element: SignInSection,
    protected: false,
    title: "SignIn Section",
  },
  {
    path: Paths.register,
    element: RegisterSection,
    protected: false,
    title: "Register Section",
  },
  {
    path: Paths.blogDetail,
    element: BlogDetail,
    protected: false,
    title: "Blog Detail",
  },
  {
    path: Paths.profile,
    element: ProfileSection,
    protected: true,
    title: "Profile Section",
  },
  {
    path: Paths.editProfile,
    element: EditProfileSection,
    protected: true,
    title: "Edit Profile",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

  function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element;

    if (!isLoggedIn && !route.protected) {
      return { element: <RouteComponent /> };
    } else if (!isLoggedIn && route.protected) {
      return { element: <Navigate to={Paths.signIn} /> };
    } else if (isLoggedIn === route.protected) {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn && route.path === "*") {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn) {
      return { element: <RouteComponent /> };
    }
  }

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route);
    return <Route key={i} path={route.path} {...render} />;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expirationTime");
    if (token && expirationTime) {
      const currentTime = Date.now();
      if (currentTime < Number(expirationTime)) {
        dispatch(setLoggedIn(true));
        // dispatch(
        //   setLoggedDetail([
        //     {
        //       name: data?.name,
        //       email: data?.email,
        //       isAdmin: data?.isAdmin,
        //     },
        //   ])
        // );
      } else {
        handleLogout();
      }
    }
  }, [location]);

  return (
    <Layout>
      <Routes>{routes.map(mapRoutes)}</Routes>
    </Layout>
  );
};
export default RoutePath;
