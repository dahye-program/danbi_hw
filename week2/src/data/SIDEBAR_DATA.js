const SidebarData = [
  {
    name: 'Dashboard',
    src: 'images/dashboard.png',
    to: '/dashboard',
    content: 'dashboard',
    children: [
      {
        name: 'Dashboard1',
        to: '/dashboard1',
        content: 'dashboard1'
      },
      {
        name: 'Dashboard2',
        to: '/dashboard2',
        content: 'dashboard2'
      }
    ]
  },
  {
    name: 'Customers',
    src: 'images/customers.jpeg',
    to: '/customers',
    content: 'customers'
  },
  {
    name: 'Message',
    src: 'images/message.png',
    to: '/message',
    content: 'message',
    children: [
      {
        name: 'Message1',
        to: '/message1',
        content: 'message1'
      }
    ]
  },
  {
    name: 'Help',
    src: 'images/help.png',
    to: '/help',
    content: 'help'
  },
  {
    name: 'Settings',
    src: 'images/settings.png',
    to: '/settings',
    content: 'settings'
  },
  {
    name: 'Password',
    src: 'images/password.png',
    to: '/password',
    content: 'password'
  },
  {
    name: 'Sign out',
    src: 'images/signout.jpeg',
    to: '/signout',
    content: 'signout'
  }
]

export default SidebarData;
