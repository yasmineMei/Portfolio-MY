import { createFileRoute } from '@tanstack/react-router'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { useData } from "../../contexts/DataContext";
import {
  Mail,
  FolderKanban,
  MailOpen,
  MailX,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";

export const Route = createFileRoute('/_admin/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const { messages, projects, loading } = useData();

  if (loading) {
    return <div className="p-8 text-center">Chargement des données...</div>;
  }

  const unreadMessages = messages.filter((m) => m.status === "non-lu").length;
  const featuredProjects = projects.filter((p) => p.featured).length;

  const stats = [
    {
      title: "Messages",
      value: messages.length,
      description: `${unreadMessages} non lu(s)`,
      icon: Mail,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-100 dark:bg-blue-950",
    },
    {
      title: "Projets",
      value: projects.length,
      description: `${featuredProjects} en vedette`,
      icon: FolderKanban,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-100 dark:bg-purple-950",
    },
  
  ];

  const recentMessages = messages.slice(0, 5);
 return (
   <div className="space-y-8">
     <div>
       <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
         Tableau de bord
       </h2>
       <p className="text-gray-600 dark:text-gray-400 mt-1">
         Vue d'ensemble de votre portfolio
       </p>
     </div>

     {/* Stats Grid */}
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
       {stats.map((stat) => {
         const Icon = stat.icon;
         return (
           <Card key={stat.title}>
             <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
               <CardTitle className="text-sm font-medium">
                 {stat.title}
               </CardTitle>
               <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                 <Icon className={`h-4 w-4 ${stat.color}`} />
               </div>
             </CardHeader>
             <CardContent>
               <div className="text-2xl font-bold text-gray-900 dark:text-white">
                 {stat.value}
               </div>
               <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                 {stat.description}
               </p>
             </CardContent>
           </Card>
         );
       })}
     </div>

     {/* Recent Messages */}
     <Card>
       <CardHeader>
         <CardTitle>Messages récents</CardTitle>
         <CardDescription>
           Les derniers messages reçus via votre portfolio
         </CardDescription>
       </CardHeader>
       <CardContent>
         <div className="space-y-4">
           {recentMessages.length === 0 ? (
             <p className="text-center text-gray-500 dark:text-gray-400 py-8">
               Aucun message pour le moment
             </p>
           ) : (
             recentMessages.map((message) => (
               <div
                 key={message.id}
                 className="flex items-start space-x-4 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
               >
                 <div className="shrink-0">
                   {message.status === "non-lu" ? (
                     <MailX className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                   ) : (
                     <MailOpen className="h-5 w-5 text-gray-400" />
                   )}
                 </div>
                 <div className="flex-1 min-w-0">
                   <div className="flex items-center justify-between">
                     <p className="font-medium text-gray-900 dark:text-white truncate">
                       {message.name}
                     </p>
                     <Badge
                       variant={
                         message.status === "non-lu" ? "default" : "secondary"
                       }
                     >
                       {message.status === "non-lu" ? "Non lu" : "Lu"}
                     </Badge>
                   </div>
                   <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                     {message.subject}
                   </p>
                   <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                     {new Date(message.createdAt).toLocaleDateString("fr-FR", {
                       day: "numeric",
                       month: "long",
                       year: "numeric",
                       hour: "2-digit",
                       minute: "2-digit",
                     })}
                   </p>
                 </div>
               </div>
             ))
           )}
         </div>
       </CardContent>
     </Card>

     {/* Recent Projects */}
     <Card>
       <CardHeader>
         <CardTitle>Projets récents</CardTitle>
         <CardDescription>Vos derniers projets ajoutés</CardDescription>
       </CardHeader>
       <CardContent>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {projects.slice(0, 3).map((project) => (
             <div
               key={project.id}
               className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
             >
               <img
                 src={project.image}
                 alt={project.title}
                 className="w-full h-40 object-cover"
               />
               <div className="p-4">
                 <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                   {project.title}
                 </h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                   {project.description}
                 </p>
                 <div className="flex flex-wrap gap-1 mt-3">
                   {project.technologies?.slice(0, 3).map((tech) => (
                     <Badge key={tech} variant="outline" className="text-xs">
                       {tech}
                     </Badge>
                   ))}
                 </div>
               </div>
             </div>
           ))}
         </div>
       </CardContent>
     </Card>
   </div>
 );
}
