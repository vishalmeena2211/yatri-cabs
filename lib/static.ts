import { DOLLER_IMAGE, FAST_IMAGE, GREEN_DRIVING_IMAGE, GREEN_HAND_IMAGE, GREEN_LOCATION_IMAGE, PEOPLES_IMAGE, ROUTER_IMAGE } from "./images";
import { FormVariant, InfoSectionProps } from "./types";

export const features = [
    {
        image: GREEN_HAND_IMAGE,
        title: "RETURN FARE, NOT FAIR!",
        description: "Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel."
    },
    {
        image: GREEN_LOCATION_IMAGE,
        title: "GPS BASED BILLING SYSTEM",
        description: "Since The GPS Data Captures The Actual Distance And Time Traveled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing."
    },
    {
        image: GREEN_DRIVING_IMAGE,
        title: "NOW AVAILABLE ROUTES ARE!",
        description: "Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Kanpur"
    }
];


export const discoveringIndia: InfoSectionProps = {
    title: "DISCOVERING INDIA'S DIVERSE LANDSCAPES, ONE SCENIC ROAD TRIP AT A TIME",
    items: [
        { content: "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together, while conveniently taking care of the logistics and ensuring a safe journey." },
        { content: "Instead of worrying about the next stop in our chauffeur-driven cabs enjoy your next vacation. With a presence in over 2500 cities across India, we're here to take you wherever your heart desires, all at our rental service." },
        { content: "We cherish the freedom to stop anytime in the towns or provinces to savor cuisines and taste regional cultures along the way. These moments of discovery and joy are what make your travels unforgettable through our rent a car service." },
        { content: "No destination is too far or too close; we encourage you to explore the beauty around you with our taxi options. Pack your bags and let us seamlessly take care of the rest! You plan it, your way to make memories." },
        { content: "Planning your trip is a breeze with our friendly website, or you can chat with our travel experts on 7860663399 for personalized guidance and car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car." },
        { content: "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip." },
    ],
};

export const whyChooseYatri: InfoSectionProps = {
    title: "WHY CHOOSE YATRI CAR RENTAL?",
    items: [
        { content: "Yatri Car Rental has been a trusted digital platform for booking local and outstation car rental and taxi services since 2014. Our primary goal is to offer our clients an exceptional car rental and cab booking experience, and we have great pride in our commitment to safety, reliability, and experienced drivers. These qualities are evident across all our car rental services, making us the preferred choice for those seeking rental cars and taxi services in India." },
        { content: "Real-Time GPS Tracking - At Yatri Car Rental, we are committed to providing dependable services in India. We guarantee that we won't cancel your booking without advance notification, and our rental cars are meticulously maintained to ensure a seamless and stress-free journey for our clients." },
        { title: "Safety is Our Priority", content: "Safety and comfort are paramount at Yatri Car Rental in India. We exclusively hire experienced and skilled drivers who possess in-depth knowledge of the city's roads and traffic regulations. Our drivers are committed to delivering excellent customer service and ensuring a comfortable and stress-free travel experience for passengers." },
        { title: "Expert Chauffeurs at Your Service", content: "Yatri Car Rental takes pride in selecting only the most skilled, knowledgeable, and courteous drivers to enhance the convenience and satisfaction of our clients." },
        { title: "Extensive Industry Experience", content: "With over 10 years of industry expertise, Yatri Car Rental is your go-to choice for premium car hire services." },
        { title: "Proven Track Record", content: "We place a strong emphasis on transparency in our billing system and consistently strive to provide a seamless and satisfactory experience for our customers. Our commitment to customer comfort and satisfaction is evident in our outstanding Google ratings, where we consistently receive ratings of 4.8 stars or higher." },
    ],
};

export const featuresItems = [
    {
        imageUrl: FAST_IMAGE,
        title: "FAST RESPONSE TIME",
        description: "Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly"
    },
    {
        imageUrl: PEOPLES_IMAGE,
        title: "VAST FLEET",
        description: "We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Needs."
    },
    {
        imageUrl: ROUTER_IMAGE,
        title: "EASY TO ORDER",
        description: "Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team."
    },
    {
        imageUrl: DOLLER_IMAGE,
        title: "GREAT TARIFFS",
        description: "Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental."
    }
];


export const formVariants: FormVariant[] = [
    {
        name: 'Outstation',
        fields: [
            { id: 'from', label: 'FROM', type: 'text', placeholder: 'Enter pickup location' },
            { id: 'to', label: 'TO', type: 'text', placeholder: 'Enter drop location' },
            { id: 'pickupDate', label: 'PICK UP DATE', type: 'date',placeholder: 'Enter pickup date' },
            { id: 'pickupTime', label: 'PICK UP AT', type: 'time', placeholder: 'Enter pickup at' },
        ],
    },
    {
        name: 'Local',
        fields: [
            { id: 'from', label: 'FROM', type: 'text', placeholder: 'Enter pickup location' },
            { id: 'to', label: 'TO', type: 'text', placeholder: 'Enter drop location' },
            { id: 'when', label: 'WHEN', type: 'datetime-local', placeholder: 'Enter when' },
        ],
    },
    {
        name: 'Airport',
        fields: [
            { id: 'from', label: 'PICK UP', type: 'text', placeholder: 'Enter pickup location' },
            { id: 'to', label: 'DROP', type: 'text', placeholder: 'Enter drop location' },
            { id: 'date', label: 'DATE', type: 'date', placeholder: 'Enter date' },
            { id: 'time', label: 'TIME', type: 'time', placeholder: 'Enter time' },
        ],
    },
];

export const leftColumnItems = [
    "Instant Booking & Confirmation",
    "Confirmed Booking Immediately",
    "No Return Fare For One-Way Trip",
    "Clean & Professional Cab Services",
    "Transparent Billing With GPS Based Billing System"
];

export const rightColumnItems = [
    "Pick-Up From Your House",
    "Dedicated Cab Just For You",
    "Drop To Your Desired Destination",
    "Completed More Than 20,000+ Oneway Trips",
    "Multiple Payment Option Including Credit Card."
];
