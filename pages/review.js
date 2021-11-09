/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react';
import {
  Dialog,
  Menu,
  Transition,
  Popover,
  RadioGroup,
  Tab,
} from '@headlessui/react';
import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
  StarIcon,
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  ThumbUpIcon,
  ChatAltIcon,
  EyeIcon,
  ShareIcon,
  PlusSmIcon,
  CheckIcon,
} from '@heroicons/react/outline';
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from '@heroicons/react/solid';

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'History', href: '#', icon: ClockIcon, current: false },
  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
  { name: 'Cards', href: '#', icon: CreditCardIcon, current: false },
  { name: 'Recipients', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Reports', href: '#', icon: DocumentReportIcon, current: false },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#', icon: CogIcon },
  { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
];
const cards = [
  { name: 'Squat 1RM', href: '#', icon: ScaleIcon, amount: '545@220lbs' },
  { name: 'Bench 1RM', href: '#', icon: ScaleIcon, amount: '375@220lbs' },
  { name: 'Deadlift 1RM', href: '#', icon: ScaleIcon, amount: '715@220lbs' },
  { name: 'WILKS', href: '#', icon: ScaleIcon, amount: '450@198lbs' },

  // More items...
];
const whoToFollow = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: 'Floyd Miles',
      imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    body: 'What books do you have on your bookshelf just to look smarter than you actually are?',
    comments: 291,
  },
  // More posts...
];
const transactions = [
  {
    id: 1,
    name: 'Payment to Molly Sanders',
    href: '#',
    amount: '$20,000',
    currency: 'USD',
    status: 'success',
    date: 'July 11, 2020',
    datetime: '2020-07-11',
  },
  // More transactions...
];
const questions = [
  {
    id: '81614',
    likes: '29',
    replies: '11',
    views: '2.7k',
    author: {
      name: 'Dries Vincent',
      imageUrl:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    date: 'December 9 at 11:43 AM',
    datetime: '2020-12-09T11:43:00',
    href: '#',
    title: 'What would you have done differently if you ran Jurassic Park?',
    body: `
      <p>Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.</p>
      <p>Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be&hellip;</p>
    `,
  },
  // More questions...
];
const product = {
  name: 'Everyday Ruck Snack',
  href: '#',
  price: '$220',
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  imageSrc:
    'https://tailwindui.com/img/ecommerce-images/product-page-04-featured-product-shot.jpg',
  imageAlt:
    'Light green canvas bag with black straps, handle, front zipper pouch, and drawstring top.',
  breadcrumbs: [
    { id: 1, name: 'Travel', href: '#' },
    { id: 2, name: 'Bags', href: '#' },
  ],
  sizes: [
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
    { name: '18L', description: 'Perfect for a reasonable amount of snacks.' },
    { name: '20L', description: 'Enough room for a serious amount of snacks.' },
  ],
};
const policies = [
  {
    name: 'Free delivery all year long',
    description:
      'Name another place that offers year long free delivery? We’ll be waiting. Order now and you’ll get delivery absolutely free.',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
  },
  {
    name: '24/7 Customer Support',
    description:
      'Or so we want you to believe. In reality our chat widget is powered by a naive series of if/else statements that churn out canned responses. Guaranteed to irritate.',
    imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
  },
  {
    name: 'Fast Shopping Cart',
    description:
      "Look at the cart in that icon, there's never been a faster cart. What does this mean for the actual checkout experience? I don't know.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg',
  },
  {
    name: 'Gift Cards',
    description:
      "We sell these hoping that you will buy them for your friends and they will never actually use it. Free money for us, it's great.",
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
  },
];
const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
        `,
      author: 'Emily Selman',
      avatarSrc:
        'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    },
    // More reviews...
  ],
};
const statusStyles = {
  success: 'bg-green-100 text-green-800',
  processing: 'bg-yellow-100 text-yellow-800',
  failed: 'bg-gray-100 text-gray-800',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [open, setOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-black">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                    alt="Easywire logo"
                  />
                </div>
                <nav
                  className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-cyan-800 text-white'
                            : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                          'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="px-2 space-y-1">
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-grow bg-black pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                alt="Easywire logo"
              />
            </div>
            <nav
              className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="px-2 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-cyan-800 text-white'
                        : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    <item.icon
                      className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-6 pt-6">
                <div className="px-2 space-y-1">
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                    >
                      <item.icon
                        className="mr-4 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="lg:pl-64 flex flex-col flex-1">
          <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            {/* Search bar */}
            <div className="w-full flex-1 px-4 flex justify-between sm:px-6 lg:max-w-full lg:mx-auto">
              <div className="flex-1 flex">
                <form className="w-full flex md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div
                      className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                      aria-hidden="true"
                    >
                      <SearchIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      name="search-field"
                      className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                      placeholder="Search transactions"
                      type="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                      <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                        <span className="sr-only">Open user menu for </span>
                        Emilia Birch
                      </span>
                      <ChevronDownIcon
                        className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <main>
            {/* Product */}
            <div className="bg-white">
              <div className="max-w-full mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-full lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
                {/* Product details */}
                <div className="lg:max-w-lg lg:self-end">
                  <nav aria-label="Breadcrumb">
                    <ol role="list" className="flex items-center space-x-2">
                      {product.breadcrumbs.map((breadcrumb, breadcrumbIdx) => (
                        <li key={breadcrumb.id}>
                          <div className="flex items-center text-sm">
                            <a
                              href={breadcrumb.href}
                              className="font-medium text-gray-500 hover:text-gray-900"
                            >
                              {breadcrumb.name}
                            </a>
                            {breadcrumbIdx !==
                            product.breadcrumbs.length - 1 ? (
                              <svg
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                aria-hidden="true"
                                className="ml-2 flex-shrink-0 h-5 w-5 text-gray-300"
                              >
                                <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                              </svg>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  <div className="mt-4">
                    <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                      {product.name}
                    </h1>
                  </div>

                  <section
                    aria-labelledby="information-heading"
                    className="mt-4"
                  >
                    <h2 id="information-heading" className="sr-only">
                      Product information
                    </h2>

                    <div className="flex items-center">
                      <p className="text-lg text-gray-900 sm:text-xl">
                        {product.price}
                      </p>

                      <div className="ml-4 pl-4 border-l border-gray-300">
                        <h2 className="sr-only">Reviews</h2>
                        <div className="flex items-center">
                          <div>
                            <div className="flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    reviews.average > rating
                                      ? 'text-yellow-400'
                                      : 'text-gray-300',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">
                              {reviews.average} out of 5 stars
                            </p>
                          </div>
                          <p className="ml-2 text-sm text-gray-500">
                            {reviews.totalCount} reviews
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-6">
                      <p className="text-base text-gray-500">
                        {product.description}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center">
                      <CheckIcon
                        className="flex-shrink-0 w-5 h-5 text-green-500"
                        aria-hidden="true"
                      />
                      <p className="ml-2 text-sm text-gray-500">
                        In stock and ready to ship
                      </p>
                    </div>
                  </section>
                </div>

                {/* Product image */}
                <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                  <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>

                {/* Product form */}
                <div className="mt-10 lg:max-w-lg lg:col-start-1 lg:row-start-2 lg:self-start">
                  <section aria-labelledby="options-heading">
                    <h2 id="options-heading" className="sr-only">
                      Product options
                    </h2>

                    <form>
                      <div className="sm:flex sm:justify-between">
                        {/* Size selector */}
                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                        >
                          <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                            Size
                          </RadioGroup.Label>
                          <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {product.sizes.map((size) => (
                              <RadioGroup.Option
                                as="div"
                                key={size.name}
                                value={size}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'ring-2 ring-indigo-500' : '',
                                    'relative block border border-gray-300 rounded-lg p-4 cursor-pointer focus:outline-none'
                                  )
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <RadioGroup.Label
                                      as="p"
                                      className="text-base font-medium text-gray-900"
                                    >
                                      {size.name}
                                    </RadioGroup.Label>
                                    <RadioGroup.Description
                                      as="p"
                                      className="mt-1 text-sm text-gray-500"
                                    >
                                      {size.description}
                                    </RadioGroup.Description>
                                    <div
                                      className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked
                                          ? 'border-indigo-500'
                                          : 'border-transparent',
                                        'absolute -inset-px rounded-lg pointer-events-none'
                                      )}
                                      aria-hidden="true"
                                    />
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      <div className="mt-4">
                        <a
                          href="#"
                          className="group inline-flex text-sm text-gray-500 hover:text-gray-700"
                        >
                          <span>What size should I buy?</span>
                          <QuestionMarkCircleIcon
                            className="flex-shrink-0 ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                      <div className="mt-10">
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
                        >
                          Add to bag
                        </button>
                      </div>
                      <div className="mt-6 text-center">
                        <a
                          href="#"
                          className="group inline-flex text-base font-medium"
                        >
                          <ShieldCheckIcon
                            className="flex-shrink-0 mr-2 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <span className="text-gray-500 hover:text-gray-700">
                            Lifetime Guarantee
                          </span>
                        </a>
                      </div>
                    </form>
                  </section>
                </div>
              </div>
            </div>

            <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
              {/* Details section */}
              <section aria-labelledby="details-heading">
                <div className="flex flex-col items-center text-center">
                  <h2
                    id="details-heading"
                    className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                  >
                    The Fine Details
                  </h2>
                  <p className="mt-3 max-w-3xl text-lg text-gray-600">
                    Our patented padded snack sleeve construction protects your
                    favorite treats from getting smooshed during all-day
                    adventures, long shifts at work, and tough travel schedules.
                  </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                  <div>
                    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                        alt="Drawstring top with elastic loop closure and textured interior padding."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <p className="mt-8 text-base text-gray-500">
                      The 20L model has enough space for 370 candy bars, 6
                      cylinders of chips, 1,220 standard gumballs, or any
                      combination of on-the-go treats that your heart desires.
                      Yes, we did the math.
                    </p>
                  </div>
                  <div>
                    <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                      <img
                        src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                        alt="Front zipper pouch with included key ring."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <p className="mt-8 text-base text-gray-500">
                      Up your snack organization game with multiple compartment
                      options. The quick-access stash pouch is ready for even
                      the most unexpected snack attacks and sharing needs.
                    </p>
                  </div>
                </div>
              </section>

              {/* Policies section */}
              <section
                aria-labelledby="policy-heading"
                className="mt-16 lg:mt-24"
              >
                <h2 id="policy-heading" className="sr-only">
                  Our policies
                </h2>
                <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                  {policies.map((policy) => (
                    <div key={policy.name}>
                      <img
                        src={policy.imageSrc}
                        alt=""
                        className="h-24 w-auto"
                      />
                      <h3 className="mt-6 text-base font-medium text-gray-900">
                        {policy.name}
                      </h3>
                      <p className="mt-3 text-base text-gray-500">
                        {policy.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <section aria-labelledby="reviews-heading" className="bg-white">
              <div className="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
                <div className="lg:col-span-4">
                  <h2
                    id="reviews-heading"
                    className="text-2xl font-extrabold tracking-tight text-gray-900"
                  >
                    Customer Reviews
                  </h2>

                  <div className="mt-3 flex items-center">
                    <div>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating
                                ? 'text-yellow-400'
                                : 'text-gray-300',
                              'flex-shrink-0 h-5 w-5'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">
                        {reviews.average} out of 5 stars
                      </p>
                    </div>
                    <p className="ml-2 text-sm text-gray-900">
                      Based on {reviews.totalCount} reviews
                    </p>
                  </div>

                  <div className="mt-6">
                    <h3 className="sr-only">Review data</h3>

                    <dl className="space-y-3">
                      {reviews.counts.map((count) => (
                        <div
                          key={count.rating}
                          className="flex items-center text-sm"
                        >
                          <dt className="flex-1 flex items-center">
                            <p className="w-3 font-medium text-gray-900">
                              {count.rating}
                              <span className="sr-only"> star reviews</span>
                            </p>
                            <div
                              aria-hidden="true"
                              className="ml-1 flex-1 flex items-center"
                            >
                              <StarIcon
                                className={classNames(
                                  count.count > 0
                                    ? 'text-yellow-400'
                                    : 'text-gray-300',
                                  'flex-shrink-0 h-5 w-5'
                                )}
                                aria-hidden="true"
                              />

                              <div className="ml-3 relative flex-1">
                                <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                                {count.count > 0 ? (
                                  <div
                                    className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                                    style={{
                                      width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                    }}
                                  />
                                ) : null}
                              </div>
                            </div>
                          </dt>
                          <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                            {Math.round(
                              (count.count / reviews.totalCount) * 100
                            )}
                            %
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-lg font-medium text-gray-900">
                      Share your thoughts
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      If you’ve used this product, share your thoughts with
                      other customers
                    </p>

                    <a
                      href="#"
                      className="mt-6 inline-flex w-full bg-white border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                    >
                      Write a review
                    </a>
                  </div>
                </div>

                <div className="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
                  <h3 className="sr-only">Recent reviews</h3>

                  <div className="flow-root">
                    <div className="-my-12 divide-y divide-gray-200">
                      {reviews.featured.map((review) => (
                        <div key={review.id} className="py-12">
                          <div className="flex items-center">
                            <img
                              src={review.avatarSrc}
                              alt={`${review.author}.`}
                              className="h-12 w-12 rounded-full"
                            />
                            <div className="ml-4">
                              <h4 className="text-sm font-bold text-gray-900">
                                {review.author}
                              </h4>
                              <div className="mt-1 flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      review.rating > rating
                                        ? 'text-yellow-400'
                                        : 'text-gray-300',
                                      'h-5 w-5 flex-shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                              <p className="sr-only">
                                {review.rating} out of 5 stars
                              </p>
                            </div>
                          </div>

                          <div
                            className="mt-4 space-y-6 text-base italic text-gray-600"
                            dangerouslySetInnerHTML={{ __html: review.content }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
