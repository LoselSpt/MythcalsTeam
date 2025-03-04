import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { 
  User, 
  Mail, 
  Calendar, 
  Clock, 
  Bell, 
  Shield, 
  Upload, 
  Save, 
  CheckCircle 
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

// Schema de validação
const profileSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  bio: z.string().max(200, 'Biografia deve ter no máximo 200 caracteres').optional(),
  notifications: z.boolean().optional(),
  newsletter: z.boolean().optional(),
  twoFactorAuth: z.boolean().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const Profile: React.FC = () => {
  const { user, updateProfile } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Atividades simuladas do usuário
  const activities = [
    { id: 1, type: 'login', date: '15/06/2025', time: '14:32', description: 'Login realizado com sucesso' },
    { id: 2, type: 'profile_update', date: '10/06/2025', time: '09:15', description: 'Perfil atualizado' },
    { id: 3, type: 'login', date: '08/06/2025', time: '18:45', description: 'Login realizado com sucesso' },
    { id: 4, type: 'registration', date: '01/06/2025', time: '11:20', description: 'Conta criada' },
  ];

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting, isDirty } 
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      bio: '',
      notifications: true,
      newsletter: false,
      twoFactorAuth: false,
    },
  });

  useEffect(() => {
    if (user) {
      reset({
        name: user.name,
        email: user.email,
        bio: '',
        notifications: true,
        newsletter: false,
        twoFactorAuth: false,
      });
    }
  }, [user, reset]);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setAvatarFile(file);
      
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatarPreview(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data: ProfileFormData) => {
    try {
      setErrorMessage(null);
      
      // Simulação de atualização de perfil
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Em produção, isso seria uma chamada real à API
      // await updateProfile(data, avatarFile);
      
      console.log('Perfil atualizado:', data, avatarFile);
      
      setSuccessMessage('Perfil atualizado com sucesso!');
      setTimeout(() => setSuccessMessage(null), 3000);
      setIsEditing(false);
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Ocorreu um erro ao atualizar o perfil');
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setAvatarPreview(null);
    setAvatarFile(null);
    reset();
  };

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold mb-2">Meu Perfil</h1>
          <p className="text-white/70">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Coluna da esquerda - Informações do perfil */}
          <div className="lg:col-span-2">
            <motion.div 
              className="card mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">Informações Pessoais</h2>
                {!isEditing ? (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="btn-outline py-1 px-4"
                  >
                    Editar
                  </button>
                ) : null}
              </div>

              {/* Mensagens de sucesso/erro */}
              {successMessage && (
                <div className="mb-6 p-3 bg-green-500/20 border border-green-500/30 rounded-md text-green-400 flex items-center">
                  <CheckCircle size={18} className="mr-2" />
                  {successMessage}
                </div>
              )}

              {errorMessage && (
                <div className="mb-6 p-3 bg-red-500/20 border border-red-500/30 rounded-md text-red-400">
                  {errorMessage}
                </div>
              )}

              {isEditing ? (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* Avatar */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 mb-3 relative">
                        {avatarPreview ? (
                          <img 
                            src={avatarPreview} 
                            alt="Avatar preview" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-white/50">
                            <User size={48} />
                          </div>
                        )}
                      </div>
                      <label className="btn-outline py-1 px-3 text-sm cursor-pointer flex items-center">
                        <Upload size={14} className="mr-1" />
                        Alterar foto
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleAvatarChange}
                        />
                      </label>
                    </div>

                    {/* Campos do formulário */}
                    <div className="flex-1">
                      {/* Nome */}
                      <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                          Nome completo
                        </label>
                        <input
                          id="name"
                          type="text"
                          className={`input ${errors.name ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                          placeholder="Seu nome"
                          {...register('name')}
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className={`input ${errors.email ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                          placeholder="seu@email.com"
                          {...register('email')}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                        )}
                      </div>

                      {/* Bio */}
                      <div className="mb-4">
                        <label htmlFor="bio" className="block text-sm font-medium text-white/80 mb-1">
                          Biografia
                        </label>
                        <textarea
                          id="bio"
                          rows={3}
                          className={`input resize-none ${errors.bio ? 'border-red-500/50 focus:ring-red-500/30' : ''}`}
                          placeholder="Conte um pouco sobre você..."
                          {...register('bio')}
                        ></textarea>
                        {errors.bio && (
                          <p className="mt-1 text-sm text-red-400">{errors.bio.message}</p>
                        )}
                        <p className="text-white/50 text-xs mt-1">Máximo de 200 caracteres</p>
                      </div>
                    </div>
                  </div>

                  {/* Preferências */}
                  <div className="border-t border-white/10 pt-6 mt-6">
                    <h3 className="text-lg font-medium mb-4">Preferências</h3>
                    
                    <div className="space-y-4">
                      {/* Notificações */}
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="notifications"
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50"
                            {...register('notifications')}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="notifications" className="text-white/80 font-medium">
                            Notificações
                          </label>
                          <p className="text-white/50">Receber notificações sobre atualizações e eventos</p>
                        </div>
                      </div>

                      {/* Newsletter */}
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="newsletter"
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50"
                            {...register('newsletter')}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="newsletter" className="text-white/80 font-medium">
                            Newsletter
                          </label>
                          <p className="text-white/50">Receber emails com novidades e promoções</p>
                        </div>
                      </div>

                      {/* Autenticação de dois fatores */}
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="twoFactorAuth"
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary/50"
                            {...register('twoFactorAuth')}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="twoFactorAuth" className="text-white/80 font-medium">
                            Autenticação de dois fatores
                          </label>
                          <p className="text-white/50">Aumentar a segurança da sua conta</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botões */}
                  <div className="flex justify-end space-x-4 mt-6">
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="btn-outline"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="btn-primary flex items-center"
                      disabled={isSubmitting || !isDirty && !avatarFile}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Salvando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Save size={18} className="mr-2" />
                          Salvar alterações
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div>
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    {/* Avatar */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden bg-white/10 mb-3">
                        <div className="w-full h-full flex items-center justify-center text-white/50">
                          <User size={48} />
                        </div>
                      </div>
                    </div>

                    {/* Informações */}
                    <div className="flex-1">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <User className="text-primary mr-3" size={20} />
                          <div>
                            <p className="text-white/50 text-sm">Nome</p>
                            <p className="font-medium">{user?.name}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Mail className="text-primary mr-3" size={20} />
                          <div>
                            <p className="text-white/50 text-sm">Email</p>
                            <p className="font-medium">{user?.email}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Calendar className="text-primary mr-3" size={20} />
                          <div>
                            <p className="text-white/50 text-sm">Membro desde</p>
                            <p className="font-medium">Junho 2025</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preferências */}
                  <div className="border-t border-white/10 pt-6 mt-6">
                    <h3 className="text-lg font-medium mb-4">Preferências</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center p-3 bg-white/5 rounded-lg">
                        <Bell className="text-primary mr-3" size={20} />
                        <div>
                          <p className="text-white/50 text-sm">Notificações</p>
                          <p className="font-medium">Ativadas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-white/5 rounded-lg">
                        <Mail className="text-primary mr-3" size={20} />
                        <div>
                          <p className="text-white/50 text-sm">Newsletter</p>
                          <p className="font-medium">Desativada</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-3 bg-white/5 rounded-lg">
                        <Shield className="text-primary mr-3" size={20} />
                        <div>
                          <p className="text-white/50 text-sm">Autenticação 2FA</p>
                          <p className="font-medium">Desativada</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Coluna da direita - Histórico de atividades */}
          <div>
            <motion.div 
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-heading font-semibold">Histórico de Atividades</h2>
              </div>
              
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start p-3 bg-white/5 rounded-lg">
                    <div className="bg-primary/20 p-2 rounded-full mr-3">
                      <Clock className="text-primary" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{activity.description}</h3>
                      <p className="text-white/50 text-xs mt-1">
                        {activity.date} às {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <button className="btn-outline w-full flex items-center justify-center">
                  Ver histórico completo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;