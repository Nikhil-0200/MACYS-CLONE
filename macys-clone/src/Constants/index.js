import { mail, globe, door, truck } from "../assets/icons/index";

export const InformationData = [
  {
    icon:mail,
    label: "Sign up for emails &",
    subLabel: "get an extra 25% off",
    text: "Save on your next purchase & discover our latest offers. Exclusions apply. Valid for international customers only.",
    link: "Sing Up",
  },
  {
    icon:truck,
    label: "We now ship to over",
    subLabel: "200 locations worldwide",
    text: "Shop your favorite brands & send to friends & family around the globe.",
    link: "Select Your Location",
  },
  {
    icon:globe,
    label: "Check out our",
    subLabel: "international shipping FAQs",
    text: "Find the answers to some of our most commonly asked questions.",
    link: "Get The Details",
  },
  {
    icon:door,
    label: "Visit the U.S and",
    subLabel: "come shop in store",
    text: "Get style inspo, gift ideas, great deals & more.",
    link: "Find A Store",
  },
];


export const footerData = [
  {
    title: "Customer Service",
    link:[
      {name: "Help & FAQs", link: "/" },
      {name: "Order Tracking", link: "/"},
      {name: "Shipping & Delivery", link: "/"},
      {name: "Returns", link: "/"},
      {name: "Contact Us", link: "/"},
      {name: "Shipping To", link: "/"},
    ]
  },
  {
    title: "Our Stores",
    link:[
      {name: "Find a Store", link:"/"},
      {name: "Tell Us What You Think", link:"/"},
      {name: "Macy's Backstage", link:"/"},
      {name: "Personal Stylist", link:"/"},
    ]
  },
  {
    title: "Macy's Inc.",
    link:[
      {name: "Corporate Site", link:"/"},
      {name: "About Macy's", link:"/"},
      {name: "News Room", link:"/"},
      {name: "Investors", link:"/"},
      {name: "Macy's Gives", link:"/"},
    ]
  },
]

export const footerLast = [
  {
    links:[
      {name: "Privacy Notice", link: "/"},
      {name: "Cookie Preferences", link: "/"},
      {name: "Interest Based Ads", link: "/"},
      {name: "CA Privacy Rights", link: "/"},
      {name: "Do Not Sell or Share My Personal Information", link: "/"},
      {name: "Legal Notice", link: "/"},
      {name: "Customer Bill of Rights", link: "/"},
      {name: "CA Transparency in Supply Chains", link: "/"},
      {name: "Product Recalls", link: "/"},
      {name: "Pricing Policy", link: "/"},
      {name: "Accessibility", link: "/"},
    ]
  }
]

export const footerEnd = [
  
    "© 2024 Macy’s. All rights reserved. Macys.com, LLC, 151 West 34th Street, New York, NY 10001. Request our corporate name & address by email."
  
]