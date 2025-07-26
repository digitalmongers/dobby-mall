'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';
import {
  Home, Store, Package, ShoppingCart, Users, Megaphone, BarChart3,
  Settings, Plus, User, CreditCard, Search, TrendingUp,
  HelpCircle, Bell, Shield, X
} from 'lucide-react'

type Props = {
  activeItem: string
  setActiveItem: (label: string) => void
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

const Sidebar = ({ setActiveItem, isSidebarOpen, toggleSidebar }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const menuItems = [
    { icon: Home, label: 'Dashboard', href: '/shopkeeper' },
    { icon: Store, label: 'Shop Management', href: '/shopkeeper/shopManagement' },
    { icon: Package, label: 'Product Management', href: '/shopkeeper/Products' },
    { icon: ShoppingCart, label: 'Order Management', href: '/shopkeeper/Orders' },
    { icon: Users, label: 'Customer Management', href: '/shopkeeper/Customers' },
    { icon: Megaphone, label: 'Promotions & Marketing', href: '/shopkeeper/Marketing' },
    { icon: BarChart3, label: 'Analytics & Report', href: '/shopkeeper/Analytics' },
    { icon: Settings, label: 'Settings', href: '/shopkeeper/Settings' },
    { icon: Plus, label: 'Additional Features', href: '/shopkeeper/Features' },
    { icon: User, label: 'User Account', href: '/shopkeeper/Account' },
    { icon: CreditCard, label: 'Abandoned Cart & Recovery', href: '/Shopkeeper/Recovery' },
    { icon: Search, label: 'Search & Navigation', href: '/shopkeeper/Search' },
    { icon: CreditCard, label: 'Shipping Cart & Checkout', href: '/shopkeeper/Checkout' },
    { icon: TrendingUp, label: 'On-page SEO', href: '/shopkeeper/SEO' },
    { icon: HelpCircle, label: 'Contact Support', href: '/shopkeeper/Support' },
    { icon: Bell, label: 'Notification', href: '/shopkeeper/Notifications' },
    { icon: Shield, label: 'Trust Builder', href: '/shopkeeper/Trust' },
    { icon: Store, label: 'Marketplace', href: '/shopkeeper/Marketplace' },
    { icon: Shield, label: 'Technical & Security Essentials', href: '/shopkeeper/Security' },
    { icon: Package, label: 'Integrations', href: '/shopkeeper/Integrations' }
  ]

  return (
    <>
      <div className={`fixed inset-y-0 left-0 z-50 w-64  transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
        {/* Header */}
        <div className="h-14 border-b flex items-center justify-between px-4 mt-1">
          <div className="flex items-center space-x-2">
            <img src="/images/Dobby-logo.png" className='mt-1 ' />
          </div>
          <button onClick={toggleSidebar} className="lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Menu */}
        <div className="h-full overflow-y-auto pb-20 bg-[#3C94D7]">
          <nav className="mt-2">
            {menuItems.map((item, index) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveItem(item.label)
                    if (item.href) router.push(item.href)
                    toggleSidebar()
                  }}
                  className={`w-full flex items-center px-4 py-3 text-left hover:bg-[#BAC2CC] transition-colors ${isActive ? 'bg-[#3076ac] border-r-2' : 'text-[#7697c0]'}`}
                >
                  <Icon className="w-4 h-4 mr-3 text-white" />
                  <span className="text-[14px] text-white">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </>
  )
}

export default Sidebar
