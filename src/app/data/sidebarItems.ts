import path from "path";
import { Menu, X, Home, User2Icon, Map, FileText, Settings, UserIcon } from "lucide-react";


export interface SidebarItem {
   id: number;
   name: string;
   path: string;
}

export const SidebarItems: SidebarItem [] = [
   {
      id: 1,
      name: 'Dashboard',
      path: '/dashboard',
   },
   {
      id: 2,
      name: 'Children',
      path: '/children',
   },
   {
      id: 3,
      name: 'Map',
      path: '/map',
   },
   {
      id: 4,
      name: 'Report',
      path: 'report',
   },
   {
      id: 5,
      name: 'Users',
      path: '/users',
   },
   {
      id: 6,
      name: 'Settings',
      path: '/settings',
   },
   {
      id: 7,
      name: 'Logout',
      path: '/logout',
   }
]