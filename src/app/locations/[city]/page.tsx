import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type City = {
  slug: string;
  name: string;
  blurb: string;
  zip: string;
  lat: number;
  lng: number;
  nearby: string[];
  testimonial: { quote: string; author: string };
  neighborhoods: string[];
  cityContext: string[];
  recentJobs: { vehicle: string; service: string; location: string; note: string }[];
};

const cities: City[] = [
  {
    slug: "beverly",
    name: "Beverly",
    blurb: "From Beverly Farms to the Montserrat neighborhood, we cover all of Beverly with professional mobile detailing that arrives at your driveway fully equipped. No drop-offs, no commute — just a showroom finish where you are.",
    zip: "01915",
    lat: 42.5584,
    lng: -70.8800,
    nearby: ["salem", "danvers", "manchester", "hamilton"],
    testimonial: {
      quote: "Honestly the best money I've spent on my truck. They came right to my driveway in Beverly Farms and the interior looked brand new.",
      author: "Kyle R., Beverly",
    },
    neighborhoods: ["Beverly Farms", "Montserrat", "Pride's Crossing", "Ryal Side", "Centerville", "Bass River"],
    cityContext: [
      "Beverly is one of the most geographically varied cities on the North Shore — from the estate roads of Beverly Farms to the waterfront at Ryal Side, to the denser residential streets around Montserrat and Endicott College. We've detailed cars in all of them.",
      "Beverly Farms is the neighborhood we get the most requests from on this side of town. The homes along Hale Street and the side roads off West Street tend to have garages full of vehicles that haven't seen a proper detail in two seasons. Salt air from the water and tree sap from overhanging oaks make a full exterior with clay bar and wax the smart move out here.",
      "The areas around Montserrat station and the Endicott College campus see heavy parking exposure and commuter grime. If your car sits outside every day, the paint is collecting brake dust, rail dust from the MBTA, and road spray — all of it acidic, all of it accelerating oxidation. A proper exterior detail twice a year is the minimum that actually makes a difference.",
      "Pride's Crossing — tucked between Beverly Farms and Hamilton — is quiet residential country. Clients here tend to care about the details. We've done full Gold packages and set up monthly maintenance plans for a handful of regulars in that area.",
      "We've worked out of driveways on Cabot Street, parking lots near the Beverly Depot, and residential streets all across Centerville and Bass River. Whatever your address in Beverly, we show up with our own water and power — no hookup required from you.",
    ],
    recentJobs: [
      { vehicle: "2021 Toyota 4Runner", service: "Full Detail — Silver", location: "Beverly Farms", note: "Winter salt and sand removal, clay bar and wax on the full exterior, steam clean inside." },
      { vehicle: "2019 BMW X5", service: "Interior Detail — Gold", location: "Montserrat", note: "Pet hair extraction, carpet shampoo, full leather conditioning. Client had two dogs." },
      { vehicle: "2023 Ford F-150", service: "Exterior Detail — Bronze", location: "Ryal Side", note: "Hand wash, tire dressing, exterior window clean. Monthly maintenance client." },
    ],
  },
  {
    slug: "salem",
    name: "Salem",
    blurb: "Salem's mix of historic neighborhoods, year-round residents, and coastal streets means cars take a beating. Whether you're on Bridge Street or in Witchcraft Heights, M&C comes to you with professional-grade products and zero wait.",
    zip: "01970",
    lat: 42.5195,
    lng: -70.8967,
    nearby: ["beverly", "danvers", "marblehead", "swampscott"],
    testimonial: {
      quote: "I've tried a few detailers on the North Shore and M&C is on another level. My car hasn't looked this good since I bought it.",
      author: "Jess M., Salem",
    },
    neighborhoods: ["Witchcraft Heights", "South Salem", "The Point", "Bridge Street Neck", "Derby Wharf", "North Salem"],
    cityContext: [
      "Salem is a year-round city with a tourist economy, and that combination creates specific conditions for your vehicle. Downtown parking near the Essex Street pedestrian mall, the Derby Wharf area, and Pickering Wharf means your car is regularly exposed to heavy foot traffic, salt air off the harbor, and the stop-and-go brake dust that builds up in any dense urban environment.",
      "Witchcraft Heights — one of the largest residential neighborhoods in the city — is our most frequent area for interior details. Families, commuters, and pet owners in this part of Salem tend to log a lot of miles and the interiors show it. Steam cleaning and a full vacuum get things back to where they should be.",
      "The Point neighborhood and Bridge Street Neck sit close to Salem Harbor and the South River. Coastal proximity accelerates paint degradation — salt particles in the air etch clear coat over time. A clay bar treatment and carnauba wax application twice a year is genuinely protective here, not just cosmetic.",
      "North Salem and the areas around Salem State University see a lot of parking-lot wear on vehicles that sit outside daily. We've done full details in the parking structure off Jefferson Avenue and in driveways throughout the quieter residential blocks north of downtown.",
      "Salem's historic cobblestone and brick streets are harder on tires and wheel wells than standard asphalt. Clients who regularly drive near downtown notice brake dust and road grime accumulating faster than expected. Our wheel and tire scrub plus tire dressing addresses that specifically.",
    ],
    recentJobs: [
      { vehicle: "2020 Honda CR-V", service: "Full Detail — Bronze", location: "Witchcraft Heights", note: "Full interior vacuum, dashboard wipe-down, exterior hand wash and tire dressing." },
      { vehicle: "2018 Jeep Wrangler", service: "Exterior Detail — Gold", location: "The Point", note: "Clay bar, engine bay wipe-down, wheel well cleaning, wax. Daily driver with heavy salt exposure." },
      { vehicle: "2022 Volvo XC60", service: "Interior Detail — Silver", location: "South Salem", note: "Steam clean on high-touch surfaces, leather conditioning, center console deep clean." },
    ],
  },
  {
    slug: "danvers",
    name: "Danvers",
    blurb: "Danvers is home base for M&C Luxury Detailing. We know these streets, neighborhoods, and the standard locals expect. From Endicott Street to Putnam Circle, we're your neighbors — and we treat your car like it's our own.",
    zip: "01923",
    lat: 42.5751,
    lng: -70.9495,
    nearby: ["beverly", "peabody", "hamilton", "wenham"],
    testimonial: {
      quote: "These guys are local and it shows — on time, professional, and my Audi looked perfect. Booking again next month.",
      author: "Dan S., Danvers",
    },
    neighborhoods: ["Endicott", "Putnam Circle", "Tapleyville", "Pope's Landing", "Liberty Tree", "Burley"],
    cityContext: [
      "Danvers is where M&C started, and it's the town we know best. We grew up on these streets. We know that the Route 1 corridor collects road spray year-round, that the neighborhoods off Burley Street are quiet and residential, and that the parking lots around Liberty Tree Mall are where half the town's commuter cars sit for eight hours a day collecting brake dust.",
      "Endicott — one of the most established neighborhoods in Danvers — is where we do a lot of our full detail work. The mix of older homes with long driveways and a community that takes pride in its property means clients here typically want the Gold package. We've set up monthly plans with several Endicott residents.",
      "Putnam Circle and the surrounding area sit in the middle of town with easy access for us and plenty of driveway space for a full setup. We've completed more details in this part of Danvers than anywhere else — it's the most convenient for both sides.",
      "Pope's Landing near the Danvers River is a small but specific pocket worth mentioning — the moisture from the river contributes to mold and mildew growth inside vehicles that sit outside in that area. Interior steam cleaning and an odor treatment make a big difference for cars parked near the waterway.",
      "The Tapleyville area and neighborhoods near Danvers Square are dense enough that not everyone has driveway space. We've set up on the street, in condo parking lots, and in commercial lots throughout town. As long as the car is accessible, we work around the space you have.",
    ],
    recentJobs: [
      { vehicle: "2021 Audi Q5", service: "Full Detail — Gold", location: "Endicott", note: "Carpet shampoo, seat shampoo, clay bar, engine bay wipe-down, exterior wax. Regular client." },
      { vehicle: "2020 Chevy Silverado", service: "Exterior Detail — Silver", location: "Putnam Circle", note: "Clay bar, trim dressing, door jamb wipe, exterior wax. Work truck used daily on Route 1." },
      { vehicle: "2023 Toyota Camry", service: "Interior Detail — Bronze", location: "Tapleyville", note: "Full vacuum, dashboard and console wipe-down, interior windows." },
    ],
  },
  {
    slug: "peabody",
    name: "Peabody",
    blurb: "Peabody is one of the most densely populated cities on the North Shore. M&C makes it easy — book online and we show up at your home, apartment complex, or office with everything needed to deliver a showroom finish.",
    zip: "01960",
    lat: 42.5279,
    lng: -70.9287,
    nearby: ["danvers", "salem", "lynn", "swampscott"],
    testimonial: {
      quote: "Super convenient — they came right to my apartment parking lot. Zero hassle, incredible result. Couldn't ask for more.",
      author: "Maria T., Peabody",
    },
    neighborhoods: ["West Peabody", "South Peabody", "North Peabody", "Bartholomew District", "Centennial Park area"],
    cityContext: [
      "Peabody is one of the more practically challenging cities to get a car detailed in — not because of anything specific to the city, but because a large portion of residents live in apartments or condos without private driveway space. That's exactly the problem M&C solves. We come to your parking lot, your complex's lot, your street space — and we handle everything.",
      "West Peabody has more single-family homes with driveway access, and we do a lot of full package work out there. The Route 1 exposure and the heavy commercial traffic between Danvers and Peabody means vehicles in this corridor pick up significant road grime. Our exterior packages are popular with commuters who use that stretch daily.",
      "South Peabody near the Northshore Mall area is high-traffic and high-pollution — one of the heavier commercial corridors on the North Shore. Cars parked near retail and restaurant zones collect grease, exhaust particulate, and the general grime of high-footfall areas. Full exterior details with clay bar make a visible difference here.",
      "The Bartholomew district and Centennial Park areas are quieter residential pockets where we can set up without street-space issues. These neighborhoods tend to be family-oriented — which means dog hair, kids' crumbs, and sports equipment residue in interiors. Our interior packages are built for exactly this.",
      "Peabody's industrial history left some neighborhoods with soil and air conditions that can be rougher on paint than average. If you're in a neighborhood close to any industrial corridor, regular wax and paint protection makes a measurable difference in how long your clear coat lasts.",
    ],
    recentJobs: [
      { vehicle: "2019 Honda Pilot", service: "Interior Detail — Gold", location: "West Peabody", note: "Three-row vacuum, carpet shampoo, seat shampoo, headliner wipe. Family SUV with two kids." },
      { vehicle: "2022 Subaru Outback", service: "Full Detail — Bronze", location: "South Peabody", note: "Full interior and exterior package. Dog hair removal required extra time on rear seats." },
      { vehicle: "2017 Toyota Corolla", service: "Exterior Detail — Silver", location: "Bartholomew District", note: "Clay bar, trim restoration, door jamb wipe, wax. Daily commuter with visible oxidation starting." },
    ],
  },
  {
    slug: "gloucester",
    name: "Gloucester",
    blurb: "Gloucester's coastal air and salt spray are hard on your paint and interior. A regular detail protects your vehicle from the elements. We serve all of Gloucester — from downtown to Annisquam — fully mobile, fully equipped.",
    zip: "01930",
    lat: 42.6159,
    lng: -70.6609,
    nearby: ["manchester", "beverly", "hamilton", "wenham"],
    testimonial: {
      quote: "Living near the water, salt build-up is a real problem. M&C took care of everything and actually explained how to protect my paint going forward.",
      author: "Tom H., Gloucester",
    },
    neighborhoods: ["Annisquam", "East Gloucester", "Rocky Neck", "Lanesville", "Magnolia", "West Gloucester"],
    cityContext: [
      "Gloucester is the northernmost city we serve on the North Shore, and it has the most aggressive conditions for your vehicle's finish. The combination of ocean proximity, Atlantic salt air, fishing industry particulate, and the coastal humidity that lingers year-round creates conditions where untreated paint oxidizes noticeably faster than inland cities.",
      "Annisquam and the roads along the Annisquam River are particularly exposed to water-side conditions. Vehicles garaged directly next to the water — even in enclosed garages — pick up salt from the air. A ceramic-quality wax applied twice a year is a meaningful layer of protection for anything parked in Annisquam.",
      "Rocky Neck in East Gloucester is the heart of the city's art colony, and the neighborhood's narrow streets and working waterfront mean vehicles here face a combination of salt spray, fishing boat exhaust, and the general grime of an active maritime area. We've done exterior protection packages for clients in Rocky Neck who want their vehicles to hold up against the environment.",
      "Magnolia — technically part of Gloucester but with a distinct residential feel — is one of the quieter areas we serve. The estates and larger properties along Shore Road have space for full setups, and several clients there have standing appointments with us on a seasonal schedule.",
      "West Gloucester and Lanesville are inland enough to get some buffer from the direct ocean exposure, but the regional salt air still reaches them. Clients in Lanesville tend to be working vehicles — trucks and SUVs — where the exterior needs aren't always the priority but the interiors take a real beating. We do a lot of interior-focused work out there.",
    ],
    recentJobs: [
      { vehicle: "2018 Chevy Tahoe", service: "Exterior Detail — Gold", location: "Annisquam", note: "Full clay bar, wheel well cleaning, engine bay wipe-down, carnauba wax. Heavy salt oxidation on lower panels." },
      { vehicle: "2021 Toyota Tacoma", service: "Interior Detail — Silver", location: "East Gloucester", note: "Steam clean, leather conditioning, center console deep clean. Work truck, heavy use." },
      { vehicle: "2020 Jeep Grand Cherokee", service: "Full Detail — Silver", location: "Magnolia", note: "Complete inside and out, clay bar and wax, steam clean interior. Pre-summer detail." },
    ],
  },
  {
    slug: "manchester",
    name: "Manchester-by-the-Sea",
    blurb: "Manchester-by-the-Sea's seaside setting calls for meticulous care. Whether your car lives in a beachside garage or a commuter driveway, we bring the precision of a full detail shop directly to your location.",
    zip: "01944",
    lat: 42.5773,
    lng: -70.7684,
    nearby: ["beverly", "gloucester", "hamilton", "wenham"],
    testimonial: {
      quote: "Exactly what you'd want for a proper luxury detail — they matched the standard we expect out here. Will absolutely be a regular customer.",
      author: "Caroline B., Manchester-by-the-Sea",
    },
    neighborhoods: ["Downtown Manchester", "Singing Beach area", "Black Beach", "Pine Street corridor", "Summer Street"],
    cityContext: [
      "Manchester-by-the-Sea is one of the most affluent towns on the North Shore, and the standard clients hold for their vehicles reflects that. We've done full Gold packages on everything from daily drivers to weekend-only vehicles that haven't been touched since last fall.",
      "Singing Beach draws summer visitors from across the region, and the beach access roads and surrounding streets fill up with sand-tracked cars between June and September. Post-beach interior details are some of our most common jobs in Manchester — floor mats, seat fabric, and trunk areas caked with sand. We deep vacuum and shampoo it out entirely.",
      "The downtown area along Central Street has a mix of seasonal and year-round residents, and the homes along Pine Street and Summer Street have long driveways with the kind of space that makes our setup easy. We've done back-to-back full details for neighbors in this part of town on the same day.",
      "The waterfront homes near Black Beach and along the harbor face direct ocean conditions. Several clients in Manchester have us on a strict quarterly schedule because they've seen what happens to paint and trim when you skip a season out here — chrome pitting, clear coat haze, rubber trim drying and cracking.",
      "Manchester clients are generally precise about what they want. If you want a specific product used, a specific area focused on, or a result matched to your exact spec, that's how we work. Detail-oriented clients are the ones we do our best work for.",
    ],
    recentJobs: [
      { vehicle: "2022 Land Rover Defender", service: "Full Detail — Gold", location: "Singing Beach area", note: "Sand extraction from all interior surfaces, carpet shampoo, full clay bar and wax exterior. Post-summer job." },
      { vehicle: "2020 Mercedes GLE", service: "Interior Detail — Gold", location: "Summer Street", note: "Leather conditioning, headliner wipe-down, trunk detail, steam clean throughout." },
      { vehicle: "2019 Porsche Cayenne", service: "Exterior Detail — Gold", location: "Downtown Manchester", note: "Clay bar, wheel well cleaning, engine bay wipe-down, hand wax. Seasonal detail before winter storage." },
    ],
  },
  {
    slug: "marblehead",
    name: "Marblehead",
    blurb: "Marblehead's waterfront community and coastal roads demand a vehicle that looks the part. M&C Luxury Detailing serves all of Marblehead — from Old Town to Clifton — with mobile detailing that matches the town's standards.",
    zip: "01945",
    lat: 42.4998,
    lng: -70.8578,
    nearby: ["salem", "swampscott", "lynn", "peabody"],
    testimonial: {
      quote: "Came out to my place in Old Town and did an impeccable job. Great communication, showed up on time, and the results were exactly what I was looking for.",
      author: "Ryan L., Marblehead",
    },
    neighborhoods: ["Old Town", "Clifton", "The Neck", "Village", "Marblehead Harbor area"],
    cityContext: [
      "Marblehead is one of the most distinctive towns in Massachusetts — a genuine sailing community with a deep-water harbor, a historic Old Town with narrow Colonial-era streets, and waterfront neighborhoods that see serious salt air year-round. Vehicles parked anywhere near the harbor or The Neck are in a high-corrosion environment.",
      "Old Town is where a lot of our work comes from in Marblehead. The streets are tight — some barely wide enough for one car — which is exactly why mobile detailing makes sense here. There's no easy way to take a car in somewhere for a shop detail when your driveway is a one-car-wide gap between two 18th-century stone walls. We set up in whatever space exists and work from there.",
      "The Neck — Marblehead's narrow peninsula that juts into the harbor — has some of the most exposed conditions of any residential area we serve. Homes there face the ocean on both sides in places, and vehicles parked outside pick up salt spray regularly. We recommend clay bar and wax as a minimum for anything kept on The Neck, not as an upgrade.",
      "Clifton sits between Marblehead and Swampscott and has a mix of year-round commuters and seasonal residents. The properties in Clifton tend to have more space than Old Town, which makes our setup easier. We've handled everything from single-car detailing to doing multiple vehicles on the same property in one visit.",
      "Marblehead's yacht club and sailing community also means clients who understand quality and have a specific sense of what finished work looks like. We hold our standard to that. Every detail we complete in Marblehead is inspected before we call it done.",
    ],
    recentJobs: [
      { vehicle: "2021 Volvo XC90", service: "Full Detail — Silver", location: "Old Town", note: "Interior steam clean, leather conditioning, clay bar and wax exterior. Year-round Old Town resident." },
      { vehicle: "2019 Range Rover Sport", service: "Exterior Detail — Gold", location: "The Neck", note: "Clay bar, wheel well clean, engine bay wipe-down, carnauba wax. Heavy salt exposure on lower body." },
      { vehicle: "2023 Audi A6", service: "Interior Detail — Silver", location: "Clifton", note: "Steam clean, center console deep clean, leather conditioning throughout. Weekly commuter." },
    ],
  },
  {
    slug: "swampscott",
    name: "Swampscott",
    blurb: "Swampscott's oceanfront lifestyle and compact neighborhoods make mobile detailing the obvious choice. No driving across town, no drop-off window — we come to you, anywhere in Swampscott, ready to work.",
    zip: "01907",
    lat: 42.4737,
    lng: -70.9148,
    nearby: ["lynn", "salem", "marblehead", "peabody"],
    testimonial: {
      quote: "Booked online in two minutes, they showed up the next afternoon. My car has never looked better. Straightforward and worth every penny.",
      author: "Liz A., Swampscott",
    },
    neighborhoods: ["Phillips Beach", "Fisherman's Beach area", "Olmsted Historic District", "Humphrey Street corridor"],
    cityContext: [
      "Swampscott is a compact oceanfront town with a strong commuter population — a lot of residents work in Boston and park their cars near the MBTA station or on the street. That combination of daily commuting and coastal proximity is exactly the environment that accelerates paint and interior wear.",
      "Phillips Beach and the surrounding streets on the ocean side of Swampscott have direct Atlantic exposure. Vehicles parked near the shore — especially on Lynn Shore Drive, which runs directly next to the water — collect salt from sea spray even when it hasn't rained. We see this clearly on the lower panels and wheel arches of vehicles from this area.",
      "The Olmsted Historic District in the center of Swampscott has tree cover and older homes with driveways that often don't get much direct sun — which helps with interior fading but contributes to mold and mildew in humid months. A steam clean and deodorize treatment is something we recommend for any vehicle stored in a shaded or partially enclosed space in this area.",
      "Humphrey Street is the main commercial corridor, and clients from the surrounding residential blocks are some of our most regular customers. The area is dense enough that parking is shared and vehicles sit in open lots — all contributing to the general grime accumulation that a proper bi-annual detail addresses.",
      "Swampscott is small enough that we cover the entire town in any given booking window. There's no 'too far' or 'out of the way' here — we come to whatever address you give us.",
    ],
    recentJobs: [
      { vehicle: "2022 Toyota RAV4", service: "Full Detail — Bronze", location: "Phillips Beach", note: "Full interior and exterior. Salt spray residue on lower body, hand wash and tire dressing." },
      { vehicle: "2020 Subaru Forester", service: "Interior Detail — Silver", location: "Olmsted District", note: "Steam clean, leather conditioning, center console and vent deep clean. Dog residue in rear." },
      { vehicle: "2021 Honda Accord", service: "Exterior Detail — Silver", location: "Humphrey Street area", note: "Clay bar, trim dressing, exterior wax. Daily commuter, first detail in two years." },
    ],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    blurb: "Hamilton's quiet residential roads and horse country setting are the backdrop for M&C's mobile service. We serve all of Hamilton with full detail capability, professional products, and results that speak for themselves.",
    zip: "01936",
    lat: 42.6212,
    lng: -70.8645,
    nearby: ["danvers", "wenham", "beverly", "manchester"],
    testimonial: {
      quote: "Great service — they came all the way out to Hamilton without any issue. Professional, thorough, and the truck looked showroom-ready when they were done.",
      author: "Steve K., Hamilton",
    },
    neighborhoods: ["South Hamilton", "Asbury Street corridor", "Essex Street area", "Myopia area"],
    cityContext: [
      "Hamilton is equestrian country — home to the Myopia Hunt Club, working farms, and miles of wooded back roads. That context matters for vehicle detailing. Trucks and SUVs in Hamilton tend to carry hay, tack, dog kennel residue, and the general accumulation of outdoor life in a way that suburban vehicles don't. Our interior packages are built to handle it.",
      "The roads around the Myopia Hunt Club and Asbury Street carry horse-related traffic year-round. If you've ever had saddle pads, blankets, or grain bags in the back of your truck, you know what that does to a cargo area. We deep vacuum, shampoo, and deodorize — we've seen worse and we know how to deal with it.",
      "South Hamilton along the Route 1A corridor is a commuter route, and vehicles that log daily highway miles are accumulating brake dust and exhaust particulate on the exterior faster than most people realize. Our exterior packages specifically address brake dust removal from wheels and wheel arches — it's one of the most visible improvements we make.",
      "The Essex Street area running between Hamilton and Wenham is mostly residential with larger lot sizes and easy driveway access. This is where we do some of our fastest full setups — there's space to work properly without the constraints of tighter neighborhoods.",
      "Hamilton clients tend to have trucks, SUVs, and working vehicles that get used hard. We're not here to tell you to baby your car — we're here to clean it properly so that it holds up longer regardless of how it's used.",
    ],
    recentJobs: [
      { vehicle: "2020 Ford F-250", service: "Interior Detail — Gold", location: "Myopia area", note: "Cargo area shampoo, full vacuum, steam clean. Horse equipment residue throughout rear cab and bed." },
      { vehicle: "2022 Ram 1500", service: "Full Detail — Bronze", location: "South Hamilton", note: "Interior clean and full exterior hand wash. Work truck used on Route 1A daily." },
      { vehicle: "2019 Chevy Suburban", service: "Interior Detail — Silver", location: "Essex Street area", note: "Three-row vacuum, steam clean, leather conditioning. Family vehicle with dog." },
    ],
  },
  {
    slug: "wenham",
    name: "Wenham",
    blurb: "Wenham is a small town that values quality craftsmanship. M&C Luxury Detailing brings that same precision to every vehicle — fully mobile, fully equipped, arriving at your location in Wenham ready to deliver.",
    zip: "01984",
    lat: 42.5987,
    lng: -70.8787,
    nearby: ["hamilton", "danvers", "beverly", "manchester"],
    testimonial: {
      quote: "Small town but they absolutely showed up. Professional, thorough, and the results were excellent. Exactly the kind of service I was hoping for.",
      author: "Pat D., Wenham",
    },
    neighborhoods: ["Wenham Lake area", "Gordon College area", "Main Street corridor", "Cherry Street"],
    cityContext: [
      "Wenham is one of the smallest towns in Massachusetts by population, and that fact shapes how we approach it. There aren't a lot of detailing options out here — the nearest shops are in Beverly or Danvers — and driving 20 minutes for a drop-off is a real inconvenience when you have a full schedule. That's the exact gap we fill.",
      "The Gordon College campus and surrounding Gordon-Conwell area bring a younger, active population to Wenham. Student and faculty vehicles tend to need interior work more than exterior — daily campus use, food and beverage spills, and the general wear of a vehicle that gets used as a second living space.",
      "Wenham Lake and the residential streets near it are among the quietest areas we serve on the North Shore. The homes along Main Street and Cherry Street have standard New England driveway setups with enough space for us to work properly. Several clients in this area have us on a two-visits-per-year schedule — spring and fall.",
      "The wooded character of Wenham means tree sap and leaf tannin staining is a recurring issue for vehicles parked in driveways under tree cover. Both of these bond with the clear coat if they're left to sit — especially in hot weather. Our clay bar treatment is the correct solution for removing them without damaging the paint.",
      "Because Wenham is so small, any booking in town gives us room to serve the whole area in a single visit. If you're a neighbor of an existing client and want us to come by on the same day, we can frequently make that work.",
    ],
    recentJobs: [
      { vehicle: "2021 Honda CR-V", service: "Full Detail — Silver", location: "Wenham Lake area", note: "Clay bar and wax to remove tree sap and tannin staining. Interior steam clean. Spring detail." },
      { vehicle: "2018 Subaru Outback", service: "Interior Detail — Bronze", location: "Gordon College area", note: "Full vacuum, dashboard wipe-down, interior windows. Daily-use campus vehicle." },
      { vehicle: "2020 Chevy Equinox", service: "Exterior Detail — Silver", location: "Main Street", note: "Clay bar, trim dressing, exterior wax. Sat under oak tree all winter — significant sap staining." },
    ],
  },
  {
    slug: "lynn",
    name: "Lynn",
    blurb: "Lynn is one of the largest cities on the North Shore, and M&C covers it entirely. From downtown to Diamond District, we make professional mobile detailing accessible — no shop drop-offs, no wait, just results.",
    zip: "01901",
    lat: 42.4668,
    lng: -70.9495,
    nearby: ["swampscott", "salem", "peabody", "marblehead"],
    testimonial: {
      quote: "Affordable, professional, and they came right to me. No drop-off, no waiting around — just showed up and did a great job. Already booked again.",
      author: "Marcus B., Lynn",
    },
    neighborhoods: ["Diamond District", "Lynn Shore", "Highlands", "Wyoma", "Marian Gardens", "West Lynn"],
    cityContext: [
      "Lynn is the largest city on the North Shore by population, and its neighborhoods are some of the most varied — from the upscale oceanfront properties in Diamond District to the dense urban blocks of downtown, to the quieter residential streets of Wyoma and Marian Gardens. We cover all of it.",
      "The Diamond District along Lynn Shore Drive is one of the most desirable addresses in the region, and the vehicles parked in those driveways reflect that. We've done full Gold packages on luxury vehicles in Diamond District — clients who want the highest standard of work and are specific about the result. Salt air from Lynn Shore is a real factor for exterior paint on that strip.",
      "Lynn's downtown and West Lynn areas have a large apartment-dwelling population — people without garages, without private driveways, and without the option of a shop drop-off during the workday. This is exactly who mobile detailing is built for. We come to your street, your condo lot, your employer's parking area. Wherever the car is, that's where we work.",
      "Wyoma and Marian Gardens are residential neighborhoods with more conventional single-family setups. Clients in these areas tend to be family vehicles — minivans, SUVs, trucks — that collect the full range of life's interior mess. We see it all and we handle it.",
      "Lynn's proximity to Nahant and the wider coastline means that even vehicles parked inland pick up salt air to some degree during storm seasons. Our exterior protection packages add a meaningful layer of defense that slows oxidation and clear coat degradation for vehicles kept outdoors year-round.",
    ],
    recentJobs: [
      { vehicle: "2021 Honda Odyssey", service: "Interior Detail — Gold", location: "Wyoma", note: "Three-row carpet shampoo, seat shampoo, headliner wipe, trunk detail. Family van with three kids." },
      { vehicle: "2019 BMW 5 Series", service: "Full Detail — Silver", location: "Diamond District", note: "Interior steam clean and leather conditioning, clay bar and wax exterior. Pre-sale detail." },
      { vehicle: "2020 Toyota Highlander", service: "Exterior Detail — Bronze", location: "West Lynn", note: "Hand wash, wheel scrub, tire dressing, exterior windows. Monthly maintenance client." },
    ],
  },
];

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

export async function generateMetadata(props: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await props.params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};
  return {
    title: `${city.name} Mobile Car Detailing | Same-Day Booking | M&C`,
    description: `Mobile car detailing in ${city.name}, MA — we come to your driveway. Interior from $169, full detail from $229. Same-day slots available. Book online in 60 seconds.`,
    alternates: {
      canonical: `https://www.mandcluxurydetailing.com/locations/${city.slug}`,
    },
  };
}

const wrap: React.CSSProperties = {
  width: "100%",
  maxWidth: "56rem",
  margin: "0 auto",
  padding: "0 1.25rem",
  textAlign: "center",
};

const services = [
  {
    num: "01",
    title: "Interior Detail",
    desc: "Full vacuum, steam clean, leather conditioning, and odor elimination.",
    tiers: [
      { label: "Bronze", price: "$129" },
      { label: "Silver", price: "$169" },
      { label: "Gold",   price: "$219" },
    ],
  },
  {
    num: "02",
    title: "Exterior Detail",
    desc: "Hand wash, clay bar, trim restoration, tire dressing, and wax protection.",
    tiers: [
      { label: "Bronze", price: "$89"  },
      { label: "Silver", price: "$129" },
      { label: "Gold",   price: "$169" },
    ],
  },
  {
    num: "03",
    title: "Full Detail",
    desc: "Our complete inside-and-out transformation — interior and exterior combined.",
    tiers: [
      { label: "Bronze", price: "$189" },
      { label: "Silver", price: "$269" },
      { label: "Gold",   price: "$359" },
    ],
  },
];

export default async function CityPage(props: { params: Promise<{ city: string }> }) {
  const { city: slug } = await props.params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

  const nearbyData = city.nearby
    .map((s) => cities.find((c) => c.slug === s))
    .filter(Boolean) as typeof cities;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutomotiveBusiness",
            "name": "M&C Luxury Detailing",
            "url": `https://www.mandcluxurydetailing.com/locations/${city.slug}`,
            "telephone": "+17816325193",
            "email": "mandcluxurydetailing@gmail.com",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Danvers",
              "addressRegion": "MA",
              "postalCode": "01923",
              "addressCountry": "US",
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": city.lat,
              "longitude": city.lng,
            },
            "openingHoursSpecification": [
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "10:00", "closes": "18:00" },
              { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday"], "opens": "10:00", "closes": "17:00" },
            ],
            "areaServed": {
              "@type": "City",
              "name": city.name,
              "addressRegion": "MA",
              "addressCountry": "US",
            },
            "description": `Professional mobile car detailing in ${city.name}, MA. We come to your driveway — no drop-off required.`,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": 12,
              "bestRating": "5",
              "worstRating": "1",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="hero-bg" style={{ paddingTop: "7rem", paddingBottom: "4.5rem", borderBottom: "1px solid #1c1c1c" }}>
        <div style={wrap}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Mobile Detailing · North Shore MA
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(3rem,10vw,6rem)", color: "#f2ede4", lineHeight: 0.92, marginBottom: "0.2em" }}>
            {city.name}
          </h1>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.4rem,4vw,2.2rem)", color: "#c9a84c", lineHeight: 1, marginBottom: "1.5rem" }}>
            Mobile Car Detailing
          </h2>
          <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
          <p style={{ color: "#7a7a7a", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: "34rem", margin: "0 auto 2.5rem" }}>
            {city.blurb}
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "22rem", margin: "0 auto" }}>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em" }}>
              Book Now — Free Quote
            </Link>
            <a href="tel:+17816325193" className="btn-ghost" style={{ width: "100%", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(201,168,76,0.3)", color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}>
              (781) 632-5193
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-grid" style={{ borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              What We Offer
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Packages in {city.name}
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c", marginBottom: "2rem" }}>
            {services.map((s) => (
              <div key={s.num} style={{ background: "#060606", padding: "2.5rem 1.5rem", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "2rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "0.75rem" }}>
                  {s.num}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.35rem", color: "#f2ede4", marginBottom: "0.5rem" }}>
                  {s.title}
                </h3>
                <p style={{ color: "#7a7a7a", fontSize: "0.8rem", lineHeight: 1.65, marginBottom: "1.5rem", flex: 1 }}>
                  {s.desc}
                </p>
                <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {s.tiers.map((t, i) => (
                    <div key={t.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.4rem 0.75rem", background: i === 2 ? "rgba(201,168,76,0.06)" : "transparent", border: "1px solid #1c1c1c" }}>
                      <span style={{ color: i === 2 ? "#c9a84c" : i === 1 ? "rgba(201,168,76,0.65)" : "rgba(201,168,76,0.4)", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{t.label}</span>
                      <span className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.1rem", color: "#f2ede4" }}>{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Link href="/services" style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.18em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid rgba(201,168,76,0.35)" }}>
            View Full Pricing &amp; Packages →
          </Link>
        </div>
      </section>

      {/* About This City */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={{ ...wrap, textAlign: "left", maxWidth: "48rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Serving the Area
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Detailing in {city.name}
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto 1.5rem" }} />
            <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", flexWrap: "wrap" }}>
              {city.neighborhoods.map((n) => (
                <span key={n} style={{ color: "#7a7a7a", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase", padding: "0.2rem 0.6rem", border: "1px solid #1c1c1c" }}>
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {city.cityContext.map((para, i) => (
              <p key={i} style={{ color: "#7a7a7a", fontSize: "0.9rem", lineHeight: 1.85 }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section style={{ borderTop: "1px solid #1c1c1c" }}>
        <iframe
          src={`https://maps.google.com/maps?q=${city.lat},${city.lng}&z=13&output=embed`}
          width="100%"
          height="320"
          style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
          allowFullScreen
          loading="lazy"
          title={`Map of ${city.name}, MA`}
        />
      </section>

      {/* Recent Jobs */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Recent Work
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              Recent Jobs in {city.name}
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3" style={{ gap: "1px", background: "#1c1c1c" }}>
            {city.recentJobs.map((job, i) => (
              <div key={i} style={{ background: "#060606", padding: "2rem 1.5rem", display: "flex", flexDirection: "column", textAlign: "left" }}>
                <p style={{ color: "#c9a84c", fontSize: "0.65rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {job.location}
                </p>
                <p className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.15rem", color: "#f2ede4", lineHeight: 1.2, marginBottom: "0.4rem" }}>
                  {job.vehicle}
                </p>
                <p style={{ color: "rgba(201,168,76,0.65)", fontSize: "0.7rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", marginBottom: "1rem" }}>
                  {job.service}
                </p>
                <p style={{ color: "#7a7a7a", fontSize: "0.8rem", lineHeight: 1.65, flex: 1 }}>
                  {job.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={wrap}>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Why Choose Us
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(1.8rem,5vw,3rem)", color: "#f2ede4", lineHeight: 1, marginBottom: "1rem" }}>
              We Come to {city.name}
            </h2>
            <div className="gold-rule" style={{ width: "4rem", margin: "0 auto" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { n: "I", title: "Fully Mobile", desc: `No drop-offs, no driving across town. We arrive in ${city.name} with water, power, and professional-grade equipment — ready to work wherever your car is parked.` },
              { n: "II", title: "Professional Grade", desc: "We use industry-leading products — not store-shelf shortcuts. Every detail is done with the same care we'd give our own vehicle." },
              { n: "III", title: "Satisfaction Guaranteed", desc: "Not happy with the result? We come back and make it right. Your satisfaction isn't a courtesy — it's the standard." },
            ].map((item, i) => (
              <div key={item.title} className={i > 0 ? "md-border-l" : ""} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "2rem 1.5rem", borderTop: "1px solid #1c1c1c" }}>
                <div className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "3rem", color: "#c9a84c", opacity: 0.2, lineHeight: 1, marginBottom: "1rem" }}>
                  {item.n}
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "1.35rem", color: "#f2ede4", marginBottom: "0.75rem" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#7a7a7a", fontSize: "0.875rem", lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", padding: "4rem 0" }}>
        <div style={{ ...wrap, maxWidth: "40rem" }}>
          <div className="gold-rule" style={{ width: "3rem", margin: "0 auto 2rem" }} />
          <blockquote style={{ margin: 0 }}>
            <p className="font-[family-name:var(--font-cormorant)] italic" style={{ fontSize: "clamp(1.2rem,3vw,1.6rem)", color: "#f2ede4", lineHeight: 1.5, marginBottom: "1.25rem" }}>
              &ldquo;{city.testimonial.quote}&rdquo;
            </p>
            <cite style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.2em", textTransform: "uppercase", fontStyle: "normal" }}>
              — {city.testimonial.author}
            </cite>
          </blockquote>
          <div className="gold-rule" style={{ width: "3rem", margin: "2rem auto 0" }} />
        </div>
      </section>

      {/* Nearby */}
      <section style={{ background: "#0a0a0a", borderTop: "1px solid #1c1c1c", padding: "3rem 0" }}>
        <div style={wrap}>
          <p style={{ color: "#565656", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Also Serving
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            {nearbyData.map((c) => (
              <Link key={c.slug} href={`/locations/${c.slug}`} className="hover:text-[#c9a84c]" style={{ color: "#7a7a7a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid #1c1c1c", transition: "color 0.2s, border-color 0.2s" }}>
                {c.name}
              </Link>
            ))}
            <Link href="/contact" className="hover:text-[#c9a84c]" style={{ color: "#7a7a7a", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: "2px", borderBottom: "1px solid #1c1c1c" }}>
              + More Areas
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#060606", borderTop: "1px solid #1c1c1c", padding: "5rem 0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <p style={{ color: "#c9a84c", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Get Started Today
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,7vw,4.5rem)", color: "#f2ede4", lineHeight: 0.95, marginBottom: "0.15em" }}>
            Ready for a
          </h2>
          <h2 className="font-[family-name:var(--font-cormorant)] italic font-bold" style={{ fontSize: "clamp(2rem,7vw,4.5rem)", color: "#c9a84c", lineHeight: 0.95, marginBottom: "2rem" }}>
            Showroom Finish?
          </h2>
          <p style={{ color: "#7a7a7a", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "28rem", margin: "0 auto 2.5rem" }}>
            Serving {city.name} and all of North Shore Massachusetts. Book online — free quote, fast response.
          </p>
          <div className="flex flex-col sm:flex-row gap-3" style={{ alignItems: "center", justifyContent: "center", maxWidth: "22rem", margin: "0 auto" }}>
            <Link href="/contact" className="btn-gold" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.75rem", fontFamily: "var(--font-mono)" }}>
              Get a Free Quote
            </Link>
            <a href="tel:+17816325193" className="btn-ghost" style={{ width: "100%", height: "54px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #282828", color: "#a8a8a8", fontSize: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
