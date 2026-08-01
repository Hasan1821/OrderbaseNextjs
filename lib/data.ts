export type Order = {
  id: string
  customer: string
  amount: string
  status: 'Delivered' | 'Processing' | 'Shipped' | 'Pending' | 'Confirmed' | 'In Transit'
  date: string
  via?: string
}

export const recentOrders: Order[] = [
  { id: '#ORD-10045', customer: 'Rakib Hasan', amount: '৳2,450', status: 'Delivered', date: 'Aug 18, 2024' },
  { id: '#ORD-10044', customer: 'Sadia Afrin', amount: '৳1,850', status: 'Processing', date: 'Aug 18, 2024' },
  { id: '#ORD-10043', customer: 'Mahmudul Hasan', amount: '৳3,250', status: 'Shipped', date: 'Aug 17, 2024' },
  { id: '#ORD-10042', customer: 'Nusrat Jahan', amount: '৳1,450', status: 'Pending', date: 'Aug 17, 2024' },
  { id: '#ORD-12485', customer: 'Rafiq Hasan', amount: '৳1,450', status: 'Pending', date: '19 May, 2024', via: 'Messenger' },
  { id: '#ORD-12484', customer: 'Jannatul Islam', amount: '৳2,350', status: 'Confirmed', date: '19 May, 2024', via: 'Comment' },
  { id: '#ORD-12483', customer: 'Mehedi Hasan', amount: '৳950', status: 'Processing', date: '19 May, 2024', via: 'Messenger' },
  { id: '#ORD-12482', customer: 'Sadia Afrin', amount: '৳1,850', status: 'In Transit', date: '19 May, 2024', via: 'Messenger' },
  { id: '#ORD-12481', customer: 'Tanvir Ahmed', amount: '৳1,250', status: 'Delivered', date: '19 May, 2024', via: 'Comment' },
]

export const topProducts = [
  { name: 'Premium T-Shirt', sold: 152, revenue: '৳22,800' },
  { name: 'Formal Pants', sold: 98, revenue: '৳19,600' },
  { name: 'Casual Shirt', sold: 87, revenue: '৳15,660' },
  { name: 'Denim Jacket', sold: 64, revenue: '৳12,800' },
  { name: 'Sneakers', sold: 52, revenue: '৳10,400' },
]

export const salesOverview = [
  { day: 'Jul 20', period: 42000, previous: 35000 },
  { day: 'Jul 27', period: 58000, previous: 45000 },
  { day: 'Aug 3', period: 51000, previous: 52000 },
  { day: 'Aug 10', period: 78000, previous: 60000 },
  { day: 'Aug 18', period: 92000, previous: 70000 },
]

export const orderStatusBreakdown = [
  { label: 'New', value: 248, pct: '19.9%', color: '#6366f1' },
  { label: 'Pending Confirmation', value: 156, pct: '12.5%', color: '#f97316' },
  { label: 'Confirmed', value: 324, pct: '25.9%', color: '#9ca3af' },
  { label: 'Ready for Pickup', value: 178, pct: '14.2%', color: '#38bdf8' },
  { label: 'In Transit', value: 256, pct: '20.5%', color: '#a78bfa' },
  { label: 'Delivered', value: 872, pct: '69.8%', color: '#22c55e' },
  { label: 'Cancelled', value: 68, pct: '5.4%', color: '#ef4444' },
]

export const tenants = [
  { name: 'Style Heaven BD', domain: 'styleheaven.orderbase.com', plan: 'Business', orders: 8452, revenue: '৳98,520', status: 'Active', created: 'May 18, 2024' },
  { name: 'Elegance Boutique', domain: 'elegance.orderbase.com', plan: 'Business', orders: 6320, revenue: '৳76,430', status: 'Active', created: 'Apr 22, 2024' },
  { name: 'Fashion House', domain: 'fashionhouse.orderbase.com', plan: 'Growth', orders: 5210, revenue: '৳68,120', status: 'Active', created: 'May 02, 2024' },
  { name: 'Trendz & Style', domain: 'trendzstyle.orderbase.com', plan: 'Growth', orders: 4980, revenue: '৳57,890', status: 'Trial', created: 'Jun 10, 2024' },
  { name: 'Classic Wear BD', domain: 'classicwear.orderbase.com', plan: 'Starter', orders: 3845, revenue: '৳48,320', status: 'Active', created: 'May 30, 2024' },
]

export const organizations = [
  { name: 'Fashion Hub', domain: 'fashionhub.orderbase.com', role: 'Owner', members: 8, joined: 'Jan 12, 2024', color: 'bg-accent-100 text-accent-600' },
  { name: 'Shoe Store', domain: 'shoestore.orderbase.com', role: 'Manager', members: 5, joined: 'Feb 2, 2024', color: 'bg-emerald-100 text-emerald-600' },
  { name: 'Gadget Zone', domain: 'gadgetzone.orderbase.com', role: 'Support', members: 3, joined: 'Mar 18, 2024', color: 'bg-brand-100 text-brand-600' },
]

export const roles = [
  { name: 'Super Admin', description: 'Full system access' },
  { name: 'Admin', description: 'Manage all features' },
  { name: 'Manager', description: 'Manage products and orders' },
  { name: 'Sales Executive', description: 'Process orders and customers' },
  { name: 'Customer Support', description: 'Handle customer queries' },
  { name: 'Viewer', description: 'View only access' },
]

export const permissionGroups = [
  {
    group: 'Dashboard',
    description: 'Access to dashboard and analytics',
    items: ['View Dashboard', 'View Reports'],
  },
  {
    group: 'Products',
    description: 'Manage products, categories and inventory',
    items: ['View Products', 'Create Products', 'Edit Products', 'Delete Products'],
  },
  {
    group: 'Orders',
    description: 'Manage customer orders and returns',
    items: ['View Orders', 'Update Orders', 'Cancel Orders'],
  },
]
