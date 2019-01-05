import { Injectable } from '@angular/core';

@Injectable()
export class PortfolioService {

  constructor() { }

  front_skills: any[] = [
    {
      title: "Javascript/Typescript",
      link: false,
      tab: 0
    },
    {
      title: "HTML/CSS",
      link: false,
      tab: 0
    },
    {
      title: "Angular (Any similar framework such as Vue)/Typescript",
      link: true,
      tab: 2
    },
    {
      title: "Ionic 3 (Built on Angular) - Hybrid Mobile Apps",
      link: true,
      tab: 1
    },
    {
      title: "JQuery/Bootstrap",
      link: true,
      tab: 3
    },
    {
      title: "Data Visualization (Highcharts, Charts.js, Admin interfaces)",
      link: true,
      tab: 2
    }, 
    {
      title: "Material Design Concepts",
      link: false,
      tab: 0
    },
  ];

  back_skills: any[] = [
    {
      title: "Python",
      link: true,
      tab: 4
    },
    {
      title: "Flask",
      link: true,
      tab: 4
    },
    {
      title: "PostgreSQL",
      link: true,
      tab: 4
    },
    {
      title: "Node.js",
      link: true,
      tab: 4
    },
    {
      title: "MongoDB",
      link: true,
      tab: 4
    },
  ];

  ac_features: any[] = [
    {
      title: "Home",
      active_img: 0,
      pics: ["ac_features/ac_home.png","ac_features/ac_home_client_tool.png", "ac_features/ac_home_agent.png", "ac_features/ac_home_agent_tool.png"],
      desc: [
        "The home page is made up of an 'agent' view and a 'consumer' view, depending on if the user has an agent account or not. The consumer view is depicated above.",
        "The Consumer view has an interactive tool on the front to help explain some of the core concepts of the company",
        "The Agent view above differs in language and imagery.",
        "The interactive tool is also different explaining a more complex concept for agents."
      ]
    },
    {
      title: "Reports/Tools",
      active_img: 0,
      pics: ["ac_features/ac_tools_1.png","ac_features/ac_tools_2.png","ac_features/ac_tools_3.png", "ac_features/ac_tools_4.png","ac_features/ac_tools_5.png","ac_features/ac_tools_6.png", "ac_features/ac_tools_7.png"],
      desc: [
        "The primary value of the software is a suite of tools users use to run various reports and illustrations on annuities.",
        "The system uses a step by step form system to capture user information and annuity information.",
        "If a user gets stuck there is a dynamic help system with information on each step.",
        "The user is presented with a clean review step in order to confirm their information is correct.",
        "Finally the user is at the results view where they can see a summary, a schedule of values, and some charts with valuable information.",
        "Finally the user is at the results view where they can see a summary, a schedule of values, and some charts with valuable information.",
        "Finally the user is at the results view where they can see a summary, a schedule of values, and some charts with valuable information."
      ]
    },
    {
      title: "Account",
      active_img: 0,
      pics: ["ac_features/ac_account.png"],
      desc: [
        "Clients have access to all the reports they've ran on their account page. They can send them as a link to other people to run or re-run them themselves."
      ]
    },
    {
      title: 'Resouces',
      active_img: 0,
      pics: ["ac_features/ac_resources.png"],
      desc: [
        "Marketing material is made available through the resources page. The page is integrated with Stripe Checkout and Orders api for easy content management"
      ]
    }
  ];

  karate_features: any[] = [
    {
      title: "Home",
      active_img: 0,
      pics: ["karate_features/karate_home.png", "karate_features/karate_home_3.png", "karate_features/karate_home_4.png", "karate_features/karate_home_2.png"],
      desc: [
        "Initial page users see. Interacts with Prismic API to fetch a featured highlight video and details on the next event.",
        "Initial page users see. Interacts with Prismic API to fetch a featured highlight video and details on the next event.",
        "The home page also features items like a news story, a viral media item, and a featured fighter.",
        "Each of the items have their respective detail views. The detail view for Next Event and News Story is JSON fetched from the Prismic CMS parsed into HTML"
      ]
    },
    {
      title: "Videos",
      active_img: 0,
      pics: ["karate_features/karate_fights_highlights.png", "karate_features/karate_fullfights.png", "karate_features/karate_fights_detail.png"],
      desc: [
        "The videos page is split up between highlight and full fight videos. Highlights can include knockout reels, interviews, and viral media",
        "Full fights are 1 on 1 Karate Combat fights between world class atheletes.",
        "The Detail page has the selected video on top and a list of related videos on bottom. The tech on this page includes use of video.js and HLS streaming."
      ]
    },
    {
      title: "Fighters",
      active_img: 0,
      pics: ["karate_features/karate_fighters.png", "karate_features/karate_fighters_country.png"],
      desc: [
        "A list of fighter cards depicting their picture, country's flag and weight class. I actually used a virtual scroll for this to allow for a large list.",
        "The list is searchable and sortable by multiple ways. If sorting by country or weight class a dynamic list-accordion component is shown as a better way to display the fighters."
      ]
    },
    {
      title: 'Fighter Profile',
      active_img: 0,
      pics: ["karate_features/karate_fighter_bio.png", "karate_features/fighter_bio_2.png", "karate_features/fighter_bio_3.png"],
      desc: [
        "Each of the fighters have their own profile information. The first section contains a grid of some overview info and a header profile video.",
        "The fighters each have a data section of some metrics on their fighting components.",
        "Other sections include a featured fight video, an interview video, and nutrition and genome data. All the data on this profile page is fetch from the Prismic CMS API."
      ]
    },
    {
      title: 'Gear',
      active_img: 0,
      pics: ["karate_features/karate_gear.png", "karate_features/karate_gear_2.png", "karate_features/karate_gear_3.png"],
      desc: [
        "Fully Functional shop for Karate merch and gear. Managed by Shopify and integrated with ShopifyBuy SDK.",
        "Here's a view at a product detail page. Users can look at the different product variants and add any desired items to their cart.",
        "The checkout page lists products and total, upon checkout users can checkout with usual payment processing options.",
      ]
    },
    {
      title: 'More Page',
      active_img: 0,
      pics: ["karate_features/karate_more.png"],
      desc: [
        "A simple page reflecting information about the company and how to reach them. The information on this page is also fetched from the Prismic CMS API and parsed into HTML accordingly"
      ]
    },
  ];

  patchdrums_features: any[] = [
    {
      title: "Home",
      active_img: 0,
      pics: ["patchdrums_features/home.png"],
      desc: [
        "Externally managed content including video and content description."
      ]
    },
    {
      title: "Packs",
      active_img: 0,
      pics: ["patchdrums_features/packs.png", "patchdrums_features/packs-detail.png"],
      desc: [
        "Lessons are organized under categories (or packs). These packs can be purchased at a bulk discount.",
        "Once the pack has been purchased, the user has access to all the lessons within that pack."
      ]
    },
    {
      title: "Lessons",
      active_img: 0,
      pics: ["patchdrums_features/lesson.png", "patchdrums_features/purchase.png"],
      desc: [
        "Lessons are available as individual items as well.",
        "Individual lessons can be purchased via IAP on IOS or Stripe on Android."
      ]
    },
    {
      title: 'More',
      active_img: 0,
      pics: ["patchdrums_features/more.png"],
      desc: [
        "App version and support email can be found here. Additionally, users on IOS can restore purchases. Android users have access to an unlocker component."
      ]
    }
  ]

}
