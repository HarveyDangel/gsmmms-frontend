
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
      name: 'Logout',
      path: '/logout',
   }
]