import { BlogCreate } from './components/blogs/blog-create';
import { BlogDetails } from './components/blogs/blog-details';
import { BlogGrid } from './components/blogs/blog-grid';
import Blogs from './components/blogs/blogs';
import { Dashboard } from './components/dashboard/dashboard';

import EmployeeList from './components/employee/employee-list';
export const Routes = [
    {
        path:"/",
        component: Dashboard,
        exact:true
    },
    {
        path:"/dashboard",
        component: Dashboard,
        exact:true
    },
    {
        path:"/blog",
        component: Blogs,
        exact:true
        
    },
    {
        path:"/blog/grid",
        component: BlogGrid,
        exact:true
        
    },
    {
        path:"/blog/:id",
        component: BlogDetails,
        exact:true
        
    },
    {
        path:"/blog/create",
        component: BlogCreate,
        exact:true
        
    },
    {
        path:"/employee",
        component: EmployeeList,
    },
    
   
]