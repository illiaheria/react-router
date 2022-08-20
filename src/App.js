import { Route, Routes } from "react-router-dom";
import { RequireAuth } from "./hoc/RequireAuth";
import { About, Home, Blog, NotFound } from "./pages";
import { Layout } from "./pages/components/Layout";
import { Post } from "./pages/components/Post";
import { Login } from "./pages/components/Login";
import { LoginProvider } from "./hoc/LoginProvider";

function App() {
  return (
    <LoginProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posts" element={<Blog />} />
          <Route path="posts/:id" element={<Post />} />
          <Route
            path="about"
            element={
              <RequireAuth>
                <About />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LoginProvider>
  );
}

export default App;
