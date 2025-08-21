import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Lock, User, Eye, EyeOff, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [countryOfOrigin, setCountryOfOrigin] = useState('');
  const [yearsInChile, setYearsInChile] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Éxito",
            description: "¡Inicio de sesión exitoso!",
          });
          navigate('/');
        }
      } else {
        const { error } = await signUp(email, password, fullName, countryOfOrigin, yearsInChile);
        if (error) {
          toast({
            title: "Error",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Éxito",
            description: "¡Cuenta creada exitosamente! Por favor revisa tu correo para confirmar tu cuenta.",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Ocurrió un error inesperado.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🇨🇱</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Chilenizate
              </h1>
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? '¡Bienvenido!' : 'Crear cuenta'}
            </CardTitle>
            <CardDescription>
              {isLogin 
                ? 'Inicia sesión para seguir aprendiendo todo sobre Chile' 
                : 'Únete a Chilenizate para seguir tu progreso y guardar tus resultados'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nombre completo</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Ingresa tu nombre completo"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="pl-10"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
              
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="countryOfOrigin">País de origen</Label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400 z-10" />
                    <Select 
                      value={countryOfOrigin} 
                      onValueChange={setCountryOfOrigin}
                      required={!isLogin}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Selecciona tu país de origen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Chile">Chile</SelectItem>
                        <SelectItem value="Argentina">Argentina</SelectItem>
                        <SelectItem value="Perú">Perú</SelectItem>
                        <SelectItem value="Bolivia">Bolivia</SelectItem>
                        <SelectItem value="Colombia">Colombia</SelectItem>
                        <SelectItem value="Ecuador">Ecuador</SelectItem>
                        <SelectItem value="Venezuela">Venezuela</SelectItem>
                        <SelectItem value="Brasil">Brasil</SelectItem>
                        <SelectItem value="Uruguay">Uruguay</SelectItem>
                        <SelectItem value="Paraguay">Paraguay</SelectItem>
                        <SelectItem value="México">México</SelectItem>
                        <SelectItem value="Estados Unidos">Estados Unidos</SelectItem>
                        <SelectItem value="Canadá">Canadá</SelectItem>
                        <SelectItem value="España">España</SelectItem>
                        <SelectItem value="Francia">Francia</SelectItem>
                        <SelectItem value="Alemania">Alemania</SelectItem>
                        <SelectItem value="Italia">Italia</SelectItem>
                        <SelectItem value="Reino Unido">Reino Unido</SelectItem>
                        <SelectItem value="China">China</SelectItem>
                        <SelectItem value="Japón">Japón</SelectItem>
                        <SelectItem value="Corea del Sur">Corea del Sur</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {!isLogin && countryOfOrigin && countryOfOrigin !== 'Chile' && (
                <div className="space-y-2">
                  <Label htmlFor="yearsInChile">Años residiendo en Chile</Label>
                  <Select 
                    value={yearsInChile} 
                    onValueChange={setYearsInChile}
                    required={!isLogin && countryOfOrigin !== 'Chile'}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona los años" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="menos-1">Menos de 1 año</SelectItem>
                      <SelectItem value="1">1 año</SelectItem>
                      <SelectItem value="2">2 años</SelectItem>
                      <SelectItem value="3">3 años</SelectItem>
                      <SelectItem value="4">4 años</SelectItem>
                      <SelectItem value="5">5 años</SelectItem>
                      <SelectItem value="6">6 años</SelectItem>
                      <SelectItem value="7">7 años</SelectItem>
                      <SelectItem value="8">8 años</SelectItem>
                      <SelectItem value="9">9 años</SelectItem>
                      <SelectItem value="10">10 años</SelectItem>
                      <SelectItem value="mas-10">Más de 10 años</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                    minLength={6}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700"
                disabled={loading}
              >
                {loading ? 'Por favor espera...' : (isLogin ? 'Iniciar sesión' : 'Crear cuenta')}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes una cuenta?"}{' '}
                <Button
                  variant="link"
                  className="p-0 text-red-600 hover:text-red-700"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Regístrate' : 'Inicia sesión'}
                </Button>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
