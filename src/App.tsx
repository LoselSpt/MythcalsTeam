import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';

// Lazy loading para melhorar performance
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));
const VerifyEmail = React.lazy(() => import('./pages/VerifyEmail'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const About = React.lazy(() => import('./pages/About'));
const News = React.lazy(() => import('./pages/News'));
const Community = React.lazy(() => import('./pages/Community'));
const Support = React.lazy(() => import('./pages/Support'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Componente para rotas protegidas
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Componente para rotas públicas (não acessíveis quando autenticado)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <LoadingScreen />;
  }
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return <>{children}</>;
};

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          
          <Route path="login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          
          <Route path="register" element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          } />
          
          <Route path="forgot-password" element={
            <PublicRoute>
              <ForgotPassword />
            </PublicRoute>
          } />
          
          <Route path="reset-password" element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          } />
          
          <Route path="verify-email" element={<VerifyEmail />} />
          
          {/* Novas rotas públicas */}
          <Route path="sobre" element={<About />} />
          <Route path="noticias" element={<News />} />
          <Route path="comunidade" element={<Community />} />
          <Route path="suporte" element={<Support />} />
          <Route path="termos" element={<Terms />} />
          <Route path="privacidade" element={<Privacy />} />
          <Route path="cookies" element={<Cookies />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
        
        {/* Rotas protegidas */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Layout isAuthenticated={true} />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
        </Route>
        
        <Route path="/perfil" element={
          <ProtectedRoute>
            <Layout isAuthenticated={true} />
          </ProtectedRoute>
        }>
          <Route index element={<Profile />} />
        </Route>
        
        {/* Rota 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;