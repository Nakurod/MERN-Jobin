import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register, Landing, Error, ProtectedRoute } from "./pages";
import {
  AddJob,
  AllJobs,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout></SharedLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats></Stats>} />
          <Route path="add-job" element={<AddJob></AddJob>} />
          <Route path="all-jobs" element={<AllJobs></AllJobs>} />
          <Route path="profile" element={<Profile></Profile>} />
        </Route>
        <Route path="/register" element={<Register></Register>} />
        <Route path="/landing" element={<Landing></Landing>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
