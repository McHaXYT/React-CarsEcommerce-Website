import { createServer, Model, Response } from "miragejs";

createServer({
    models: {
        cars: Model,
        cartItems: Model,
        orders: Model,
    },
    seeds(server) {
        server.create("car", {
            id: "1",
            name: "Aygo X",
            price: 17000,
            img: "/img/car/toyota/Toyota-Aygo-X.webp",
            type: "city car",
            description: "Compact and stylish city car with great fuel efficiency.",
            specifications: {
                brand: "toyota",
                model: "Aygo X",
                year: "2024",
                engine: "1.0L I3",
                horsepower: "72 hp",
                torque: "93 lb-ft",
                zeroToSixty: "13.0 seconds",
                topSpeed: "105 mph",
                drivetrain: "FWD",
                range: "450 miles",
                peakPower: "72 hp",
                seatingCapacity: 4,
                weight: "1,200 kg",
                wheelSize: "15 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Compact Design",
                    description: "Ideal for navigating tight city streets and parking.",
                },
                {
                    name: "Fuel-Efficient Engine",
                    description: "Optimized for excellent gas mileage in urban environments.",
                },
                {
                    name: "Modern Infotainment",
                    description: "Equipped with essential connectivity for daily commutes.",
                },
                {
                    name: "Agile Handling",
                    description: "Lightweight and responsive for a fun city driving experience.",
                },
            ],
            reviews: [{
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=17",
                    "rating": 3.4,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=14",
                    "rating": 3.6,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 3.1,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=58",
                    "rating": 4.7,
                    "comment": "Could use more features, but it\u2019s dependable."
                }
            ]
        });

        server.create("car", {
            id: "2",
            name: "bZ4X",
            price: 45000,
            img: "/img/car/toyota/Toyota-bZ4X.webp",
            type: "electric SUV",
            description: "Electric SUV with modern technology and zero emissions.",
            specifications: {
                brand: "toyota",
                model: "bZ4X",
                year: "2024",
                engine: "Electric Motor",
                horsepower: "201 hp",
                torque: "266 lb-ft",
                zeroToSixty: "7.5 seconds",
                topSpeed: "112 mph",
                drivetrain: "AWD",
                range: "250 miles",
                peakPower: "201 hp",
                seatingCapacity: 5,
                weight: "1,800 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Zero Emissions",
                    description: "Fully electric powertrain for environmentally friendly driving.",
                },
                {
                    name: "All-Wheel Drive",
                    description: "Enhanced traction and stability in various conditions.",
                },
                {
                    name: "Spacious Interior",
                    description: "Comfortable seating and ample cargo space for passengers and gear.",
                },
                {
                    name: "Advanced Driver-Assist Systems",
                    description: "Equipped with modern safety and convenience technologies.",
                },
            ],
            reviews: [{
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=26",
                    "rating": 4.2,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=32",
                    "rating": 5.0,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 3.3,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=45",
                    "rating": 4.7,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                }
            ]
        });

        server.create("car", {
            id: "3",
            name: "C-HR",
            price: 28000,
            img: "/img/car/toyota/Toyota-C-HR.webp",
            type: "compact SUV",
            description: "Sleek and compact SUV with sporty looks and a smooth drive.",
            specifications: {
                brand: "toyota",
                model: "C-HR",
                year: "2024",
                engine: "2.0L I4",
                horsepower: "144 hp",
                torque: "139 lb-ft",
                zeroToSixty: "10.5 seconds",
                topSpeed: "115 mph",
                drivetrain: "FWD",
                range: "350 miles",
                peakPower: "144 hp",
                seatingCapacity: 5,
                weight: "1,400 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Sporty Exterior Design",
                    description: "Distinctive and eye-catching styling that stands out.",
                },
                {
                    name: "Smooth Driving Dynamics",
                    description: "Comfortable and composed ride for daily commuting.",
                },
                {
                    name: "Compact Footprint",
                    description: "Easy to maneuver in urban environments while offering SUV versatility.",
                },
                {
                    name: "Modern Infotainment System",
                    description: "User-friendly interface with essential connectivity options.",
                },
            ],
            reviews: [{
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=19",
                    "rating": 3.9,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=48",
                    "rating": 4.4,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=18",
                    "rating": 4.8,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 3.8,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=47",
                    "rating": 4.1,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                }
            ]
        });

        server.create("car", {
            id: "4",
            name: "Corolla",
            price: 23000,
            img: "/img/car/toyota/Toyota-Corolla.webp",
            type: "sedan",
            description: "Reliable sedan with excellent fuel efficiency and a comfortable ride.",
            specifications: {
                brand: "toyota",
                model: "Corolla",
                year: "2024",
                engine: "1.8L I4",
                horsepower: "139 hp",
                torque: "126 lb-ft",
                zeroToSixty: "8.2 seconds",
                topSpeed: "125 mph",
                drivetrain: "FWD",
                range: "400 miles",
                peakPower: "139 hp",
                seatingCapacity: 5,
                weight: "1,300 kg",
                wheelSize: "16 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Toyota Safety Sense",
                    description: "Comprehensive suite of advanced safety and driver-assist features.",
                },
                {
                    name: "Excellent Fuel Economy",
                    description: "Designed for efficient long-distance and city driving.",
                },
                {
                    name: "Spacious Cabin",
                    description: "Comfortable seating for five passengers with ample legroom.",
                },
                {
                    name: "Proven Reliability",
                    description: "Known for its long-term durability and low maintenance costs.",
                },
            ],
            reviews: [{
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=39",
                    "rating": 4.3,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=24",
                    "rating": 3.0,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=70",
                    "rating": 4.1,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=50",
                    "rating": 3.8,
                    "comment": "Smooth handling and great for everyday use."
                }
            ]
        });

        server.create("car", {
            id: "5",
            name: "GT86",
            price: 30000,
            img: "/img/car/toyota/Toyota-GT86.webp",
            type: "sports coupe",
            description: "A fun and dynamic sports coupe for driving enthusiasts.",
            specifications: {
                brand: "toyota",
                model: "GT86",
                year: "2024",
                engine: "2.4L I4",
                horsepower: "228 hp",
                torque: "184 lb-ft",
                zeroToSixty: "6.1 seconds",
                topSpeed: "140 mph",
                drivetrain: "RWD",
                range: "350 miles",
                peakPower: "228 hp",
                seatingCapacity: 4,
                weight: "1,300 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Rear-Wheel Drive",
                    description: "Provides a classic sports car driving feel with excellent balance.",
                },
                {
                    name: "Engaging Handling",
                    description: "Precise steering and a low center of gravity for dynamic cornering.",
                },
                {
                    name: "Driver-Focused Cockpit",
                    description: "Ergonomic interior designed to enhance the driving experience.",
                },
                {
                    name: "Lightweight Construction",
                    description: "Contributes to nimble performance and agility.",
                },
            ],
            reviews: [{
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=22",
                    "rating": 4.0,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=44",
                    "rating": 4.8,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=68",
                    "rating": 3.8,
                    "comment": "Well-balanced car with decent power."
                }
            ]
        });

        server.create("car", {
            id: "6",
            name: "Highlander Hybrid",
            price: 45000,
            img: "/img/car/toyota/Toyota-Highlander-Hybrid.webp",
            type: "hybrid SUV",
            description: "Family-friendly hybrid SUV with excellent efficiency and room for everyone.",
            specifications: {
                brand: "toyota",
                model: "Highlander Hybrid",
                year: "2024",
                engine: "2.5L I4 Hybrid",
                horsepower: "243 hp",
                torque: "175 lb-ft",
                zeroToSixty: "7.5 seconds",
                topSpeed: "120 mph",
                drivetrain: "AWD",
                range: "500 miles",
                peakPower: "243 hp",
                seatingCapacity: 7,
                weight: "2,000 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Three-Row Seating",
                    description: "Accommodates up to seven passengers comfortably.",
                },
                {
                    name: "Hybrid Powertrain",
                    description: "Combines gasoline engine with electric motors for superior fuel economy.",
                },
                {
                    name: "All-Wheel Drive",
                    description: "Provides confident traction in various weather conditions.",
                },
                {
                    name: "Quiet Cabin",
                    description: "Designed to minimize road and engine noise for a peaceful ride.",
                },
            ],
            reviews: [{
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=1",
                    "rating": 3.1,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=54",
                    "rating": 3.9,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=41",
                    "rating": 4.5,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=23",
                    "rating": 4.9,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=21",
                    "rating": 2.9,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                }
            ]
        });

        server.create("car", {
            id: "7",
            name: "Land Cruiser",
            price: 85000,
            img: "/img/car/toyota/Toyota-Land-Cruiser.webp",
            type: "luxury SUV",
            description: "Rugged and luxurious SUV with powerful performance and off-road capabilities.",
            specifications: {
                brand: "toyota",
                model: "Land Cruiser",
                year: "2024",
                engine: "3.5L V6",
                horsepower: "305 hp",
                torque: "331 lb-ft",
                zeroToSixty: "7.3 seconds",
                topSpeed: "130 mph",
                drivetrain: "AWD",
                range: "450 miles",
                peakPower: "305 hp",
                seatingCapacity: 8,
                weight: "2,300 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Legendary Off-Road Capability",
                    description: "Built to conquer challenging terrains with advanced 4x4 systems.",
                },
                {
                    name: "Luxurious Interior",
                    description: "Premium materials and refined finishes for ultimate comfort.",
                },
                {
                    name: "Spacious Seating",
                    description: "Accommodates up to eight passengers with ample room.",
                },
                {
                    name: "Robust Towing Capacity",
                    description: "Capable of towing heavy loads for work or recreation.",
                },
            ],
            reviews: [{
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=61",
                    "rating": 3.7,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=19",
                    "rating": 3.4,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=18",
                    "rating": 2.7,
                    "comment": "Fuel efficiency is impressive!"
                }
            ]
        });

        server.create("car", {
            id: "8",
            name: "Supra",
            price: 50000,
            img: "/img/car/toyota/Toyota-Supra.webp",
            type: "sports car",
            description: "An iconic sports car with a blend of style, performance, and technology.",
            specifications: {
                brand: "toyota",
                model: "Supra",
                year: "2024",
                engine: "3.0L I6 Turbo",
                horsepower: "382 hp",
                torque: "368 lb-ft",
                zeroToSixty: "3.9 seconds",
                topSpeed: "155 mph",
                drivetrain: "RWD",
                range: "300 miles",
                peakPower: "382 hp",
                seatingCapacity: 2,
                weight: "1,500 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Turbocharged Engine",
                    description: "Delivers exhilarating acceleration and responsive power.",
                },
                {
                    name: "Precision Handling",
                    description: "Balanced chassis and sport-tuned suspension for dynamic driving.",
                },
                {
                    name: "Iconic Design",
                    description: "Striking exterior styling that pays homage to its legendary lineage.",
                },
                {
                    name: "Driver-Focused Cockpit",
                    description: "Ergonomic layout with essential controls within easy reach.",
                },
            ],
            reviews: [{
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=55",
                    "rating": 3.6,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=59",
                    "rating": 3.5,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=12",
                    "rating": 3.7,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=50",
                    "rating": 3.5,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=29",
                    "rating": 3.9,
                    "comment": "Well-balanced car with decent power."
                }
            ]
        });

        server.create("car", {
            id: "9",
            name: "Yaris Cross",
            price: 25000,
            img: "/img/car/toyota/Toyota-Yaris-Cross.webp",
            type: "compact SUV",
            description: "A compact SUV with a stylish design and good fuel economy.",
            specifications: {
                brand: "toyota",
                model: "Yaris Cross",
                year: "2024",
                engine: "1.5L I4",
                horsepower: "120 hp",
                torque: "105 lb-ft",
                zeroToSixty: "9.5 seconds",
                topSpeed: "110 mph",
                drivetrain: "AWD",
                range: "400 miles",
                peakPower: "120 hp",
                seatingCapacity: 5,
                weight: "1,300 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Compact SUV Versatility",
                    description: "Offers elevated driving position and practical cargo space.",
                },
                {
                    name: "Efficient Powertrain",
                    description: "Good fuel economy for urban and highway driving.",
                },
                {
                    name: "Modern Styling",
                    description: "Contemporary exterior design with a youthful appeal.",
                },
                {
                    name: "Optional All-Wheel Drive",
                    description: "Provides added traction for diverse road conditions.",
                },
            ],
            reviews: [{
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=63",
                    "rating": 3.6,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=10",
                    "rating": 3.8,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=38",
                    "rating": 4.6,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=1",
                    "rating": 3.0,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 4.8,
                    "comment": "Would recommend to anyone looking for a daily ride."
                }
            ]
        });

        server.create("car", {
            id: "10",
            name: "Yaris Hybrid",
            price: 23000,
            img: "/img/car/toyota/Toyota-Yaris-Hybrid.webp",
            type: "hybrid sedan",
            description: "Compact hybrid sedan offering great fuel efficiency and eco-friendly features.",
            specifications: {
                brand: "toyota",
                model: "Yaris Hybrid",
                year: "2024",
                engine: "1.5L I4 Hybrid",
                horsepower: "114 hp",
                torque: "120 lb-ft",
                zeroToSixty: "10.0 seconds",
                topSpeed: "100 mph",
                drivetrain: "FWD",
                range: "450 miles",
                peakPower: "114 hp",
                seatingCapacity: 5,
                weight: "1,100 kg",
                wheelSize: "16 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Exceptional Fuel Economy",
                    description: "Hybrid technology delivers outstanding mileage.",
                },
                {
                    name: "Eco-Friendly Driving",
                    description: "Reduced emissions for a greener commute.",
                },
                {
                    name: "Compact and Maneuverable",
                    description: "Easy to park and navigate in crowded city environments.",
                },
                {
                    name: "Smooth Hybrid Transition",
                    description: "Seamless switching between electric and gasoline power.",
                },
            ],
            reviews: [{
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=18",
                    "rating": 3.7,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 4.8,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "AutoNerd",
                    "userPic": "https://i.pravatar.cc/150?img=41",
                    "rating": 4.2,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=58",
                    "rating": 4.7,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=27",
                    "rating": 2.9,
                    "comment": "Absolutely love the ride quality and design."
                }
            ]
        });

        server.create("car", {
            id: "11",
            name: "350Z Roadster",
            price: 35000,
            img: "/img/car/nissan/Nissan-350Z-ROADSTER.webp",
            type: "sports car",
            description: "Iconic roadster with impressive performance and handling.",
            specifications: {
                brand: "nissan",
                model: "350Z Roadster",
                year: "2024",
                engine: "3.5L V6",
                horsepower: "287 hp",
                torque: "274 lb-ft",
                zeroToSixty: "5.4 seconds",
                topSpeed: "155 mph",
                drivetrain: "RWD",
                range: "350 miles",
                peakPower: "287 hp",
                seatingCapacity: 2,
                weight: "1,500 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Convertible Top",
                    description: "Enjoy open-air driving with an easy-to-operate soft top.",
                },
                {
                    name: "Powerful V6 Engine",
                    description: "Delivers strong acceleration and a sporty exhaust note.",
                },
                {
                    name: "Rear-Wheel Drive Dynamics",
                    description: "Engaging driving experience with balanced handling.",
                },
                {
                    name: "Iconic Sports Car Design",
                    description: "Timeless styling that remains appealing.",
                },
            ],
            reviews: [{
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=44",
                    "rating": 3.8,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=5",
                    "rating": 4.7,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=60",
                    "rating": 4.0,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "GrannyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=67",
                    "rating": 3.5,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=6",
                    "rating": 3.2,
                    "comment": "Well-balanced car with decent power."
                }
            ]
        });

        server.create("car", {
            id: "12",
            name: "370Z",
            price: 40000,
            img: "/img/car/nissan/Nissan-370Z.webp",
            type: "sports car",
            description: "A dynamic sports car offering exceptional driving performance.",
            specifications: {
                brand: "nissan",
                model: "370Z",
                year: "2024",
                engine: "3.7L V6",
                horsepower: "332 hp",
                torque: "270 lb-ft",
                zeroToSixty: "5.0 seconds",
                topSpeed: "160 mph",
                drivetrain: "RWD",
                range: "350 miles",
                peakPower: "332 hp",
                seatingCapacity: 2,
                weight: "1,600 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "High-Revving V6 Engine",
                    description: "Delivers strong power output and an engaging sound.",
                },
                {
                    name: "Sport-Tuned Suspension",
                    description: "Provides sharp handling and responsive steering.",
                },
                {
                    name: "Driver-Centric Cockpit",
                    description: "Ergonomic interior designed for optimal control and comfort.",
                },
                {
                    name: "SynchroRev Match (Manual Transmission)",
                    description: "Automatically blips the throttle for smooth downshifts.",
                },
            ],
            reviews: [{
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=45",
                    "rating": 4.7,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=11",
                    "rating": 3.8,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=63",
                    "rating": 3.1,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "GrannyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=29",
                    "rating": 4.0,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                }
            ]
        });

        server.create("car", {
            id: "13",
            name: "Ariya Nismo",
            price: 55000,
            img: "/img/car/nissan/Nissan-Ariya-Nismo.webp",
            type: "electric SUV",
            description: "The Nissan Ariya Nismo is a high-performance electric SUV with advanced technology.",
            specifications: {
                brand: "nissan",
                model: "Ariya Nismo",
                year: "2024",
                engine: "Electric Motor",
                horsepower: "389 hp",
                torque: "443 lb-ft",
                zeroToSixty: "5.1 seconds",
                topSpeed: "124 mph",
                drivetrain: "AWD",
                range: "300 miles",
                peakPower: "389 hp",
                seatingCapacity: 5,
                weight: "2,100 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Nismo Performance Tuning",
                    description: "Enhanced motor output and chassis tuning for sporty driving.",
                },
                {
                    name: "Aerodynamic Body Kit",
                    description: "Aggressive styling with functional aerodynamic improvements.",
                },
                {
                    name: "e-4ORCE All-Wheel Drive",
                    description: "Advanced electric AWD system for precise power delivery.",
                },
                {
                    name: "Zero Emissions Performance",
                    description: "High-performance driving without tailpipe emissions.",
                },
            ],
            reviews: [{
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=53",
                    "rating": 4.7,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=52",
                    "rating": 2.6,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=65",
                    "rating": 3.0,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                }
            ]
        });

        server.create("car", {
            id: "14",
            name: "Ariya",
            price: 45000,
            img: "/img/car/nissan/Nissan-Ariya.webp",
            type: "electric SUV",
            description: "The Nissan Ariya is a fully electric SUV with premium features and an impressive range.",
            specifications: {
                brand: "nissan",
                model: "Ariya",
                year: "2024",
                engine: "Electric Motor",
                horsepower: "238 hp",
                torque: "221 lb-ft",
                zeroToSixty: "7.6 seconds",
                topSpeed: "112 mph",
                drivetrain: "AWD",
                range: "290 miles",
                peakPower: "238 hp",
                seatingCapacity: 5,
                weight: "2,000 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Impressive Electric Range",
                    description: "Long driving range suitable for daily commutes and longer trips.",
                },
                {
                    name: "Spacious and Modern Interior",
                    description: "Minimalist design with advanced technology and comfortable seating.",
                },
                {
                    name: "ProPILOT Assist 2.0",
                    description: "Advanced driver-assistance system for semi-autonomous highway driving.",
                },
                {
                    name: "Seamless Connectivity",
                    description: "Integrated infotainment with over-the-air updates and smart features.",
                },
            ],
            reviews: [{
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=13",
                    "rating": 3.7,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=61",
                    "rating": 2.9,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=25",
                    "rating": 3.4,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=49",
                    "rating": 3.3,
                    "comment": "A reliable choice for small families."
                }
            ]
        });

        server.create("car", {
            id: "15",
            name: "GT-R",
            price: 115000,
            img: "/img/car/nissan/Nissan-GT-R.webp",
            type: "sports car",
            description: "Nissan's iconic supercar with incredible performance and cutting-edge technology.",
            specifications: {
                brand: "nissan",
                model: "GT-R",
                year: "2024",
                engine: "3.8L V6 Twin-Turbo",
                horsepower: "565 hp",
                torque: "467 lb-ft",
                zeroToSixty: "2.9 seconds",
                topSpeed: "196 mph",
                drivetrain: "AWD",
                range: "300 miles",
                peakPower: "565 hp",
                seatingCapacity: 2,
                weight: "1,700 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Blistering Acceleration",
                    description: "Achieves 0-60 mph in under 3 seconds.",
                },
                {
                    name: "ATTESA E-TS AWD System",
                    description: "Advanced all-wheel drive for superior traction and handling.",
                },
                {
                    name: "Track-Ready Performance",
                    description: "Engineered for high-speed stability and cornering prowess.",
                },
                {
                    name: "Multi-Function Display",
                    description: "Provides real-time performance data and customizable gauges.",
                },
            ],
            reviews: [{
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=35",
                    "rating": 3.4,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=18",
                    "rating": 3.7,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=13",
                    "rating": 3.0,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=31",
                    "rating": 3.3,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=24",
                    "rating": 3.9,
                    "comment": "Fuel efficiency is impressive!"
                }
            ]
        });

        server.create("car", {
            id: "16",
            name: "Juke",
            price: 25000,
            img: "/img/car/nissan/Nissan-Juke.webp",
            type: "compact SUV",
            description: "Compact crossover with a distinctive design and efficient performance.",
            specifications: {
                brand: "nissan",
                model: "Juke",
                year: "2024",
                engine: "1.0L I3 Turbo",
                horsepower: "115 hp",
                torque: "148 lb-ft",
                zeroToSixty: "9.5 seconds",
                topSpeed: "115 mph",
                drivetrain: "FWD",
                range: "400 miles",
                peakPower: "115 hp",
                seatingCapacity: 5,
                weight: "1,200 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Unique Styling",
                    description: "Bold and unconventional exterior design that stands out.",
                },
                {
                    name: "Urban Agility",
                    description: "Compact size makes it easy to maneuver and park in cities.",
                },
                {
                    name: "Efficient Turbo Engine",
                    description: "Provides a good balance of power and fuel economy.",
                },
                {
                    name: "Personalization Options",
                    description: "Available with various color and trim customization choices.",
                },
            ],
            reviews: [{
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=24",
                    "rating": 4.4,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=22",
                    "rating": 3.3,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=66",
                    "rating": 2.5,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=46",
                    "rating": 3.0,
                    "comment": "Smooth handling and great for everyday use."
                }
            ]
        });

        server.create("car", {
            id: "17",
            name: "Leaf",
            price: 35000,
            img: "/img/car/nissan/Nissan-Leaf.webp",
            type: "electric hatchback",
            description: "Electric hatchback with zero emissions and great range for city driving.",
            specifications: {
                brand: "nissan",
                model: "Leaf",
                year: "2024",
                engine: "Electric Motor",
                horsepower: "147 hp",
                torque: "236 lb-ft",
                zeroToSixty: "7.9 seconds",
                topSpeed: "93 mph",
                drivetrain: "FWD",
                range: "226 miles",
                peakPower: "147 hp",
                seatingCapacity: 5,
                weight: "1,600 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Zero Tailpipe Emissions",
                    description: "Environmentally friendly driving with no gasoline consumption.",
                },
                {
                    name: "e-Pedal",
                    description: "Allows for one-pedal driving for acceleration and braking.",
                },
                {
                    name: "Spacious Hatchback Design",
                    description: "Offers practical cargo space and easy access.",
                },
                {
                    name: "Quick Charging Capability",
                    description: "Compatible with fast chargers for convenient top-ups.",
                },
            ],
            reviews: [{
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=33",
                    "rating": 4.9,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=12",
                    "rating": 2.8,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=65",
                    "rating": 4.1,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 3.1,
                    "comment": "Easy to park and perfect for urban streets."
                }
            ]
        });

        server.create("car", {
            id: "18",
            name: "Qashqai e-POWER",
            price: 35000,
            img: "/img/car/nissan/Nissan-Qashqai-e-POWER.webp",
            type: "hybrid SUV",
            description: "Hybrid SUV with powerful performance and great fuel efficiency.",
            specifications: {
                brand: "nissan",
                model: "Qashqai e-POWER",
                year: "2024",
                engine: "1.5L I3 Hybrid",
                horsepower: "190 hp",
                torque: "190 lb-ft",
                zeroToSixty: "8.0 seconds",
                topSpeed: "118 mph",
                drivetrain: "AWD",
                range: "350 miles",
                peakPower: "190 hp",
                seatingCapacity: 5,
                weight: "1,800 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "e-POWER Hybrid System",
                    description: "Gasoline engine acts as a generator for the electric motor, providing a smooth EV-like drive.",
                },
                {
                    name: "Fuel Efficiency",
                    description: "Optimized for excellent mileage in various driving conditions.",
                },
                {
                    name: "Comfortable Ride",
                    description: "Refined suspension provides a smooth and composed journey.",
                },
                {
                    name: "Modern Connectivity",
                    description: "Equipped with advanced infotainment and driver-assist features.",
                },
            ],
            reviews: [{
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=36",
                    "rating": 3.3,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=28",
                    "rating": 3.7,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=19",
                    "rating": 3.3,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=70",
                    "rating": 4.6,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=20",
                    "rating": 4.5,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                }
            ]
        });

        server.create("car", {
            id: "19",
            name: "Qashqai",
            price: 30000,
            img: "/img/car/nissan/Nissan-Qashqai.webp",
            type: "compact SUV",
            description: "Versatile SUV with a comfortable interior and excellent handling.",
            specifications: {
                brand: "nissan",
                model: "Qashqai",
                year: "2024",
                engine: "1.3L I4 Turbo",
                horsepower: "158 hp",
                torque: "177 lb-ft",
                zeroToSixty: "9.2 seconds",
                topSpeed: "118 mph",
                drivetrain: "FWD",
                range: "400 miles",
                peakPower: "158 hp",
                seatingCapacity: 5,
                weight: "1,700 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Spacious Interior",
                    description: "Comfortable seating for five and generous cargo capacity.",
                },
                {
                    name: "Agile Handling",
                    description: "Easy to maneuver in city traffic and on winding roads.",
                },
                {
                    name: "Advanced Safety Features",
                    description: "Equipped with Nissan Safety Shield 360 for peace of mind.",
                },
                {
                    name: "Modern Infotainment",
                    description: "Intuitive touchscreen with smartphone integration.",
                },
            ],
            reviews: [{
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=64",
                    "rating": 4.8,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=50",
                    "rating": 2.6,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=37",
                    "rating": 3.7,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=32",
                    "rating": 4.2,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 3.9,
                    "comment": "Absolutely love the ride quality and design."
                }
            ]
        });

        server.create("car", {
            id: "20",
            name: "X-Trail",
            price: 40000,
            img: "/img/car/nissan/Nissan-X-Trail.webp",
            type: "SUV",
            description: "Spacious SUV perfect for long trips with a smooth ride.",
            specifications: {
                brand: "nissan",
                model: "X-Trail",
                year: "2024",
                engine: "2.5L I4",
                horsepower: "170 hp",
                torque: "175 lb-ft",
                zeroToSixty: "9.5 seconds",
                topSpeed: "120 mph",
                drivetrain: "AWD",
                range: "380 miles",
                peakPower: "170 hp",
                seatingCapacity: 5,
                weight: "1,800 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Versatile Cargo Space",
                    description: "Flexible seating and ample room for luggage and gear.",
                },
                {
                    name: "Smooth and Comfortable Ride",
                    description: "Designed for long-distance cruising with minimal fatigue.",
                },
                {
                    name: "Intelligent All-Wheel Drive",
                    description: "Provides confident grip in various driving conditions.",
                },
                {
                    name: "Family-Friendly Features",
                    description: "Includes amenities and safety for all passengers.",
                },
            ],
            reviews: [{
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=59",
                    "rating": 4.8,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 2.8,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=65",
                    "rating": 2.7,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=36",
                    "rating": 4.1,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=38",
                    "rating": 3.4,
                    "comment": "Good bang for the buck."
                }
            ]
        });

        server.create("car", {
            id: "21",
            name: "Capri",
            price: 25000,
            img: "/img/car/ford/Ford-Capri.webp",
            type: "sports coupe",
            description: "Classic coupe with a stylish design and strong performance.",
            specifications: {
                brand: "ford",
                model: "Capri",
                year: "2024",
                engine: "2.0L I4",
                horsepower: "150 hp",
                torque: "130 lb-ft",
                zeroToSixty: "8.2 seconds",
                topSpeed: "130 mph",
                drivetrain: "RWD",
                range: "350 miles",
                peakPower: "150 hp",
                seatingCapacity: 4,
                weight: "1,300 kg",
                wheelSize: "16 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Retro-Inspired Design",
                    description: "Combines classic aesthetics with modern touches.",
                },
                {
                    name: "Engaging Rear-Wheel Drive",
                    description: "Offers a lively and fun driving experience.",
                },
                {
                    name: "Compact and Nimble",
                    description: "Easy to maneuver and responsive on winding roads.",
                },
                {
                    name: "Sporty Interior Accents",
                    description: "Designed to enhance the coupe's dynamic character.",
                },
            ],
            reviews: [{
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=22",
                    "rating": 3.2,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=13",
                    "rating": 3.1,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "AutoNerd",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 3.1,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=36",
                    "rating": 3.5,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                }
            ]
        });

        server.create("car", {
            id: "22",
            name: "Edge Vignale",
            price: 45000,
            img: "/img/car/ford/Ford-Edge-Vignale.webp",
            type: "luxury SUV",
            description: "Luxury SUV with refined features and impressive power.",
            specifications: {
                brand: "ford",
                model: "Edge Vignale",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "250 hp",
                torque: "275 lb-ft",
                zeroToSixty: "6.5 seconds",
                topSpeed: "130 mph",
                drivetrain: "AWD",
                range: "400 miles",
                peakPower: "250 hp",
                seatingCapacity: 5,
                weight: "1,900 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Premium Interior Materials",
                    description: "High-quality leather and refined finishes throughout the cabin.",
                },
                {
                    name: "Enhanced Sound Insulation",
                    description: "Provides a quiet and serene driving environment.",
                },
                {
                    name: "Advanced Infotainment System",
                    description: "Large touchscreen with navigation and premium audio.",
                },
                {
                    name: "Exclusive Exterior Styling",
                    description: "Unique design elements that signify its luxury status.",
                },
            ],
            reviews: [{
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=16",
                    "rating": 4.4,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=59",
                    "rating": 3.4,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=68",
                    "rating": 4.0,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=58",
                    "rating": 2.6,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=62",
                    "rating": 3.1,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                }
            ]
        });

        server.create("car", {
            id: "23",
            name: "Edge",
            price: 40000,
            img: "/img/car/ford/Ford-Edge.webp",
            type: "SUV",
            description: "Versatile and comfortable, perfect for family trips.",
            specifications: {
                brand: "ford",
                model: "Edge",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "250 hp",
                torque: "275 lb-ft",
                zeroToSixty: "6.5 seconds",
                topSpeed: "130 mph",
                drivetrain: "AWD",
                range: "400 miles",
                peakPower: "250 hp",
                seatingCapacity: 5,
                weight: "1,850 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Spacious Cabin",
                    description: "Comfortable seating for five adults and generous legroom.",
                },
                {
                    name: "Ample Cargo Space",
                    description: "Versatile storage options for luggage and gear.",
                },
                {
                    name: "Smooth Ride Quality",
                    description: "Designed for comfortable long-distance travel.",
                },
                {
                    name: "Ford Co-Pilot360",
                    description: "Suite of advanced driver-assist technologies for added safety.",
                },
            ],
            reviews: [{
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=15",
                    "rating": 4.4,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=31",
                    "rating": 3.0,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=59",
                    "rating": 2.5,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=52",
                    "rating": 3.8,
                    "comment": "Absolutely love the ride quality and design."
                }
            ]
        });

        server.create("car", {
            id: "24",
            name: "Focus RS",
            price: 41000,
            img: "/img/car/ford/Ford-Focus-RS.webp",
            type: "hot hatch",
            description: "A high-performance hatchback for driving enthusiasts.",
            specifications: {
                brand: "ford",
                model: "Focus RS",
                year: "2024",
                engine: "2.3L I4 Turbo",
                horsepower: "350 hp",
                torque: "350 lb-ft",
                zeroToSixty: "4.6 seconds",
                topSpeed: "155 mph",
                drivetrain: "AWD",
                range: "380 miles",
                peakPower: "350 hp",
                seatingCapacity: 5,
                weight: "1,500 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "High-Performance Engine",
                    description: "Turbocharged engine delivers exhilarating power and acceleration.",
                },
                {
                    name: "All-Wheel Drive System",
                    description: "Advanced AWD for superior traction and dynamic handling.",
                },
                {
                    name: "Sport-Tuned Suspension",
                    description: "Aggressive suspension setup for track-ready performance.",
                },
                {
                    name: "Recaro Sport Seats",
                    description: "Supportive and comfortable seats for spirited driving.",
                },
            ],
            reviews: [{
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=13",
                    "rating": 3.0,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "GrannyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=37",
                    "rating": 3.2,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=64",
                    "rating": 3.0,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=52",
                    "rating": 2.6,
                    "comment": "A reliable choice for small families."
                }
            ]
        });

        server.create("car", {
            id: "25",
            name: "Ka",
            price: 15000,
            img: "/img/car/ford/Ford-Ka.webp",
            type: "city car",
            description: "Compact and efficient city car.",
            specifications: {
                brand: "ford",
                model: "Ka",
                year: "2024",
                engine: "1.2L I4",
                horsepower: "80 hp",
                torque: "90 lb-ft",
                zeroToSixty: "12.0 seconds",
                topSpeed: "100 mph",
                drivetrain: "FWD",
                range: "300 miles",
                peakPower: "80 hp",
                seatingCapacity: 4,
                weight: "900 kg",
                wheelSize: "14 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Ultra-Compact Size",
                    description: "Perfect for navigating and parking in congested urban areas.",
                },
                {
                    name: "Economical Engine",
                    description: "Designed for maximum fuel efficiency in city driving.",
                },
                {
                    name: "Easy Maneuverability",
                    description: "Light steering and small turning radius for effortless driving.",
                },
                {
                    name: "Basic Connectivity",
                    description: "Essential features for everyday city commutes.",
                },
            ],
            reviews: [{
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=59",
                    "rating": 2.6,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=56",
                    "rating": 4.1,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=52",
                    "rating": 4.2,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=8",
                    "rating": 2.7,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                }
            ]
        });

        server.create("car", {
            id: "26",
            name: "Mondeo Vignale",
            price: 35000,
            img: "/img/car/ford/Ford-Mondeo-Vignale.webp",
            type: "sedan",
            description: "A luxury sedan with a refined design and efficient performance.",
            specifications: {
                brand: "ford",
                model: "Mondeo Vignale",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "200 hp",
                torque: "220 lb-ft",
                zeroToSixty: "7.5 seconds",
                topSpeed: "130 mph",
                drivetrain: "AWD",
                range: "500 miles",
                peakPower: "200 hp",
                seatingCapacity: 5,
                weight: "1,500 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Premium Interior Finishes",
                    description: "High-quality materials and exquisite craftsmanship.",
                },
                {
                    name: "Quiet Cabin Experience",
                    description: "Enhanced sound insulation for a serene ride.",
                },
                {
                    name: "Advanced Driver-Assist Systems",
                    description: "Includes adaptive cruise control and lane keeping assist.",
                },
                {
                    name: "Efficient Powertrain",
                    description: "Balances performance with impressive fuel economy.",
                },
            ],
            reviews: [{
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=61",
                    "rating": 4.2,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=26",
                    "rating": 2.5,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=66",
                    "rating": 2.8,
                    "comment": "Fuel efficiency is impressive!"
                }
            ]
        });

        server.create("car", {
            id: "27",
            name: "Mustang Convertible",
            price: 50000,
            img: "/img/car/ford/Ford-Mustang-Convertible.webp",
            type: "sports car",
            description: "Classic muscle car with open-air driving experience.",
            specifications: {
                brand: "ford",
                model: "Mustang Convertible",
                year: "2024",
                engine: "5.0L V8",
                horsepower: "450 hp",
                torque: "410 lb-ft",
                zeroToSixty: "4.0 seconds",
                topSpeed: "155 mph",
                drivetrain: "RWD",
                range: "300 miles",
                peakPower: "450 hp",
                seatingCapacity: 4,
                weight: "1,800 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Power-Retractable Soft Top",
                    description: "Transforms from coupe to convertible with ease.",
                },
                {
                    name: "Roaring V8 Engine",
                    description: "Delivers iconic muscle car sound and performance.",
                },
                {
                    name: "Classic American Styling",
                    description: "Timeless design with modern touches.",
                },
                {
                    name: "Open-Air Driving",
                    description: "Experience the thrill of the road with the top down.",
                },
            ],
            reviews: [{
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=49",
                    "rating": 3.7,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 4.2,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=39",
                    "rating": 2.5,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=70",
                    "rating": 4.5,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                }
            ]
        });

        server.create("car", {
            id: "28",
            name: "Mustang Mach-E",
            price: 60000,
            img: "/img/car/ford/Ford-Mustang-Mach-E.webp",
            type: "electric SUV",
            description: "The all-electric Mustang with high performance and style.",
            specifications: {
                brand: "ford",
                model: "Mustang Mach-E",
                year: "2024",
                engine: "Electric Motor",
                horsepower: "480 hp",
                torque: "600 lb-ft",
                zeroToSixty: "3.5 seconds",
                topSpeed: "130 mph",
                drivetrain: "AWD",
                range: "300 miles",
                peakPower: "480 hp",
                seatingCapacity: 5,
                weight: "2,000 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Instant Torque",
                    description: "Electric powertrain delivers immediate and powerful acceleration.",
                },
                {
                    name: "Long Electric Range",
                    description: "Capable of covering significant distances on a single charge.",
                },
                {
                    name: "Modern Infotainment",
                    description: "Large vertical touchscreen with SYNC 4A and connected services.",
                },
                {
                    name: "Mustang-Inspired Design",
                    description: "Blends classic Mustang cues with futuristic SUV styling.",
                },
            ],
            reviews: [{
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=8",
                    "rating": 4.2,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=2",
                    "rating": 3.8,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=31",
                    "rating": 4.0,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=60",
                    "rating": 3.4,
                    "comment": "Easy to park and perfect for urban streets."
                }
            ]
        });

        server.create("car", {
            id: "29",
            name: "Mustang",
            price: 50000,
            img: "/img/car/ford/Ford-Mustang.webp",
            type: "sports car",
            description: "Classic American muscle with modern performance.",
            specifications: {
                brand: "ford",
                model: "Mustang",
                year: "2024",
                engine: "5.0L V8",
                horsepower: "450 hp",
                torque: "410 lb-ft",
                zeroToSixty: "4.0 seconds",
                topSpeed: "155 mph",
                drivetrain: "RWD",
                range: "300 miles",
                peakPower: "450 hp",
                seatingCapacity: 4,
                weight: "1,800 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Powerful V8 Engine",
                    description: "Delivers thrilling acceleration and a distinctive exhaust note.",
                },
                {
                    name: "Sporty Handling",
                    description: "Engaging driving dynamics for an exhilarating experience.",
                },
                {
                    name: "Customizable Digital Instrument Cluster",
                    description: "Personalize your driving information display.",
                },
                {
                    name: "Track Apps",
                    description: "Built-in performance metrics like accelerometer and lap timer.",
                },
            ],
            reviews: [{
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=5",
                    "rating": 4.7,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=24",
                    "rating": 3.6,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=57",
                    "rating": 4.1,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=65",
                    "rating": 3.0,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                }
            ]
        });

        server.create("car", {
            id: "30",
            name: "Puma",
            price: 22000,
            img: "/img/car/ford/Ford-Puma.webp",
            type: "compact SUV",
            description: "Compact SUV with agile handling and great fuel efficiency.",
            specifications: {
                brand: "ford",
                model: "Puma",
                year: "2024",
                engine: "1.0L I3 Turbo",
                horsepower: "125 hp",
                torque: "160 lb-ft",
                zeroToSixty: "9.0 seconds",
                topSpeed: "115 mph",
                drivetrain: "FWD",
                range: "350 miles",
                peakPower: "125 hp",
                seatingCapacity: 5,
                weight: "1,300 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Agile Handling",
                    description: "Nimble and responsive for urban driving and winding roads.",
                },
                {
                    name: "MegaBox Storage",
                    description: "Innovative deep cargo area under the trunk floor for versatile storage.",
                },
                {
                    name: "Efficient Mild-Hybrid Powertrain",
                    description: "Enhances fuel economy and reduces emissions.",
                },
                {
                    name: "Sporty Exterior Styling",
                    description: "Dynamic design with a distinctive front fascia.",
                },
            ],
            reviews: [{
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=15",
                    "rating": 3.8,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=24",
                    "rating": 4.7,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=7",
                    "rating": 3.8,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=35",
                    "rating": 4.1,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                }
            ]
        });

        server.create("car", {
            id: "31",
            name: "A1 Sportback",
            price: 25000,
            img: "/img/car/audi/Audi-A1-Sportback.webp",
            type: "city car",
            description: "Compact car with sporty handling and luxury features.",
            specifications: {
                brand: "audi",
                model: "A1 Sportback",
                year: "2024",
                engine: "1.0L I3",
                horsepower: "115 hp",
                torque: "148 lb-ft",
                zeroToSixty: "9.0 seconds",
                topSpeed: "115 mph",
                drivetrain: "FWD",
                range: "400 miles",
                peakPower: "115 hp",
                seatingCapacity: 5,
                weight: "1,200 kg",
                wheelSize: "16 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Premium Interior",
                    description: "High-quality materials and sophisticated design.",
                },
                {
                    name: "Compact  ensions",
                    description: "Ideal for urban environments and easy parking.",
                },
                {
                    name: "Sporty Handling",
                    description: "Engaging driving dynamics for a fun experience.",
                },
                {
                    name: "Virtual Cockpit (Optional)",
                    description: "Customizable digital instrument cluster.",
                },
            ],
            reviews: [{
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=29",
                    "rating": 4.1,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=2",
                    "rating": 4.4,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=3",
                    "rating": 4.7,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "MountainMover",
                    "userPic": "https://i.pravatar.cc/150?img=52",
                    "rating": 3.0,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=50",
                    "rating": 4.4,
                    "comment": "Fuel efficiency is impressive!"
                }
            ]
        });

        server.create("car", {
            id: "32",
            name: "A3 Saloon",
            price: 30000,
            img: "/img/car/audi/Audi-A3-Saloon.webp",
            type: "saloon",
            description: "A refined saloon with smooth performance.",
            specifications: {
                brand: "audi",
                model: "A3 Saloon",
                year: "2024",
                engine: "1.5L I4",
                horsepower: "150 hp",
                torque: "200 lb-ft",
                zeroToSixty: "7.5 seconds",
                topSpeed: "130 mph",
                drivetrain: "FWD",
                range: "400 miles",
                peakPower: "150 hp",
                seatingCapacity: 5,
                weight: "1,400 kg",
                wheelSize: "17 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Elegant Design",
                    description: "Sleek and sophisticated exterior styling.",
                },
                {
                    name: "Smooth Ride Quality",
                    description: "Comfortable suspension for refined cruising.",
                },
                {
                    name: "Advanced Infotainment",
                    description: "Intuitive MMI system with touch display.",
                },
                {
                    name: "Digital Cockpit",
                    description: "Customizable digital instrument cluster.",
                },
            ],
            reviews: [{
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=15",
                    "rating": 4.8,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 3.2,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "SmoothCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=60",
                    "rating": 2.9,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=66",
                    "rating": 4.0,
                    "comment": "Excellent value, great for city driving."
                }
            ]
        });

        server.create("car", {
            id: "33",
            name: "A4 Avant",
            price: 40000,
            img: "/img/car/audi/Audi-A4-Avant.webp",
            type: "wagon",
            description: "Spacious and sporty wagon for those who enjoy the journey.",
            specifications: {
                brand: "audi",
                model: "A4 Avant",
                year: "2024",
                engine: "2.0L I4",
                horsepower: "190 hp",
                torque: "320 lb-ft",
                zeroToSixty: "6.8 seconds",
                topSpeed: "140 mph",
                drivetrain: "AWD",
                range: "420 miles",
                peakPower: "190 hp",
                seatingCapacity: 5,
                weight: "1,600 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Versatile Cargo Space",
                    description: "Generous and flexible luggage compartment.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Provides superior traction and stability.",
                },
                {
                    name: "Sporty Driving Dynamics",
                    description: "Engaging performance for a wagon.",
                },
                {
                    name: "Premium Interior Comfort",
                    description: "High-quality materials and comfortable seating.",
                },
            ],
            reviews: [{
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=29",
                    "rating": 2.8,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=23",
                    "rating": 4.5,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=36",
                    "rating": 4.5,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=26",
                    "rating": 4.7,
                    "comment": "Easy to park and perfect for urban streets."
                }
            ]
        });

        server.create("car", {
            id: "34",
            name: "A4",
            price: 38000,
            img: "/img/car/audi/Audi-A4.webp",
            type: "sedan",
            description: "A premium sedan offering excellent comfort and style.",
            specifications: {
                brand: "audi",
                model: "A4",
                year: "2024",
                engine: "2.0L I4",
                horsepower: "190 hp",
                torque: "320 lb-ft",
                zeroToSixty: "6.8 seconds",
                topSpeed: "140 mph",
                drivetrain: "AWD",
                range: "400 miles",
                peakPower: "190 hp",
                seatingCapacity: 5,
                weight: "1,600 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Refined Interior",
                    description: "Luxurious cabin with high-quality materials and ergonomic design.",
                },
                {
                    name: "Smooth and Quiet Ride",
                    description: "Excellent noise insulation for a peaceful journey.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Ensures confident handling in all weather conditions.",
                },
                {
                    name: "Advanced Safety Features",
                    description: "Equipped with Audi Pre Sense and other driver aids.",
                },
            ],
            reviews: [{
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=68",
                    "rating": 4.6,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=59",
                    "rating": 4.9,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=7",
                    "rating": 3.3,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=57",
                    "rating": 2.5,
                    "comment": "Absolutely love the ride quality and design."
                }
            ]
        });

        server.create("car", {
            id: "35",
            name: "A5 Avant",
            price: 45000,
            img: "/img/car/audi/Audi-A5-Avant.webp",
            type: "wagon",
            description: "Sporty wagon combining luxury and practicality.",
            specifications: {
                brand: "audi",
                model: "A5 Avant",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "220 hp",
                torque: "300 lb-ft",
                zeroToSixty: "6.0 seconds",
                topSpeed: "155 mph",
                drivetrain: "AWD",
                range: "450 miles",
                peakPower: "220 hp",
                seatingCapacity: 5,
                weight: "1,700 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Sporty Design",
                    description: "Sleek and dynamic exterior with a practical wagon form factor.",
                },
                {
                    name: "Powerful Turbo Engine",
                    description: "Delivers strong acceleration and responsive performance.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Enhances traction and stability in diverse driving scenarios.",
                },
                {
                    name: "Luxury Interior",
                    description: "Premium materials and advanced technology for a comfortable ride.",
                },
            ],
            reviews: [{
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=9",
                    "rating": 4.4,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "GrannyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=63",
                    "rating": 3.9,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "GrannyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=21",
                    "rating": 3.7,
                    "comment": "Would recommend to anyone looking for a daily ride."
                }
            ]
        });

        server.create("car", {
            id: "36",
            name: "A5",
            price: 43000,
            img: "/img/car/audi/Audi-A5.webp",
            type: "coupe",
            description: "A stylish and sporty coupe with a refined driving experience.",
            specifications: {
                brand: "audi",
                model: "A5",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "220 hp",
                torque: "300 lb-ft",
                zeroToSixty: "6.0 seconds",
                topSpeed: "155 mph",
                drivetrain: "AWD",
                range: "420 miles",
                peakPower: "220 hp",
                seatingCapacity: 5,
                weight: "1,700 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Elegant Coupe Styling",
                    description: "Sleek lines and a sophisticated profile.",
                },
                {
                    name: "Engaging Performance",
                    description: "Responsive engine and precise handling for a dynamic drive.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Provides confident grip and enhanced stability.",
                },
                {
                    name: "Premium Interior",
                    description: "High-quality materials and advanced infotainment system.",
                },
            ],
            reviews: [{
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=7",
                    "rating": 3.9,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=66",
                    "rating": 3.0,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=27",
                    "rating": 3.1,
                    "comment": "A reliable choice for small families."
                }
            ]
        });

        server.create("car", {
            id: "37",
            name: "A6",
            price: 55000,
            img: "/img/car/audi/Audi-A6.webp",
            type: "sedan",
            description: "A premium sedan for those who enjoy performance and comfort.",
            specifications: {
                brand: "audi",
                model: "A6",
                year: "2024",
                engine: "3.0L V6",
                horsepower: "330 hp",
                torque: "350 lb-ft",
                zeroToSixty: "5.1 seconds",
                topSpeed: "155 mph",
                drivetrain: "AWD",
                range: "450 miles",
                peakPower: "330 hp",
                seatingCapacity: 5,
                weight: "1,800 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Powerful V6 Engine",
                    description: "Delivers strong acceleration and smooth power delivery.",
                },
                {
                    name: "Luxurious Cabin",
                    description: "Spacious interior with premium materials and advanced technology.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Ensures confident handling in all driving conditions.",
                },
                {
                    name: "Dual Touchscreen Infotainment",
                    description: "Intuitive MMI system with haptic feedback.",
                },
            ],
            reviews: [{
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=8",
                    "rating": 2.7,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=7",
                    "rating": 4.9,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=18",
                    "rating": 3.2,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=54",
                    "rating": 3.7,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "ComfyPilot",
                    "userPic": "https://i.pravatar.cc/150?img=28",
                    "rating": 5.0,
                    "comment": "Surprisingly roomy and practical."
                }
            ]
        });

        server.create("car", {
            id: "38",
            name: "A7 Sportback",
            price: 60000,
            img: "/img/car/audi/Audi-A7-Sportback.webp",
            type: "luxury coupe",
            description: "A luxury coupe with cutting-edge technology and style.",
            specifications: {
                brand: "audi",
                model: "A7 Sportback",
                year: "2024",
                engine: "3.0L V6",
                horsepower: "340 hp",
                torque: "369 lb-ft",
                zeroToSixty: "5.0 seconds",
                topSpeed: "155 mph",
                drivetrain: "AWD",
                range: "450 miles",
                peakPower: "340 hp",
                seatingCapacity: 5,
                weight: "1,900 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Sleek Sportback Design",
                    description: "Combines the elegance of a coupe with the practicality of a hatchback.",
                },
                {
                    name: "Mild Hybrid Technology",
                    description: "Enhances efficiency and smooths start/stop operation.",
                },
                {
                    name: "Dual Touchscreen MMI",
                    description: "Intuitive infotainment and climate control with haptic feedback.",
                },
                {
                    name: "Adaptive Air Suspension (Optional)",
                    description: "Provides a customizable balance of comfort and sportiness.",
                },
            ],
            reviews: [{
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=25",
                    "rating": 4.7,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=13",
                    "rating": 3.9,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=46",
                    "rating": 2.8,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=56",
                    "rating": 3.6,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                }
            ]
        });

        server.create("car", {
            id: "39",
            name: "Q2",
            price: 35000,
            img: "/img/car/audi/Audi-Q2.webp",
            type: "compact SUV",
            description: "Compact luxury SUV with strong performance.",
            specifications: {
                brand: "audi",
                model: "Q2",
                year: "2024",
                engine: "1.5L I4",
                horsepower: "150 hp",
                torque: "200 lb-ft",
                zeroToSixty: "8.5 seconds",
                topSpeed: "120 mph",
                drivetrain: "AWD",
                range: "420 miles",
                peakPower: "150 hp",
                seatingCapacity: 5,
                weight: "1,500 kg",
                wheelSize: "18 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Urban Agility",
                    description: "Compact size and responsive handling make it ideal for city driving.",
                },
                {
                    name: "Premium Interior",
                    description: "High-quality materials and Audi's signature minimalist design.",
                },
                {
                    name: "Virtual Cockpit (Optional)",
                    description: "Customizable digital instrument cluster for driver information.",
                },
                {
                    name: "Quattro All-Wheel Drive (Optional)",
                    description: "Enhances traction and stability in diverse conditions.",
                },
            ],
            reviews: [{
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=18",
                    "rating": 4.9,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=1",
                    "rating": 3.2,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "TurboChick",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 4.1,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=17",
                    "rating": 4.7,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=50",
                    "rating": 4.8,
                    "comment": "Would recommend to anyone looking for a daily ride."
                }
            ]
        });

        server.create("car", {
            id: "40",
            name: "Q5",
            price: 45000,
            img: "/img/car/audi/Audi-Q5.webp",
            type: "SUV",
            description: "Luxury SUV with great performance and space.",
            specifications: {
                brand: "audi",
                model: "Q5",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "250 hp",
                torque: "270 lb-ft",
                zeroToSixty: "6.0 seconds",
                topSpeed: "130 mph",
                drivetrain: "AWD",
                range: "430 miles",
                peakPower: "250 hp",
                seatingCapacity: 5,
                weight: "1,800 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Spacious and Versatile Cabin",
                    description: "Comfortable for five passengers with ample cargo space.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Provides confident handling and traction in all weather.",
                },
                {
                    name: "Refined Driving Experience",
                    description: "Smooth ride and responsive performance for daily driving.",
                },
                {
                    name: "Advanced Driver Assistance",
                    description: "Equipped with a suite of safety and convenience technologies.",
                },
            ],
            reviews: [{
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=70",
                    "rating": 4.1,
                    "comment": "Would recommend to anyone looking for a daily ride."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=68",
                    "rating": 3.6,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=51",
                    "rating": 4.3,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "GrannyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 3.2,
                    "comment": "Would recommend to anyone looking for a daily ride."
                }
            ]
        });

        server.create("car", {
            id: "41",
            name: "S3 Sportback",
            price: 50000,
            img: "/img/car/audi/Audi-S3-Sportback.webp",
            type: "hot hatch",
            description: "A performance-oriented hatchback with impressive power.",
            specifications: {
                brand: "audi",
                model: "S3 Sportback",
                year: "2024",
                engine: "2.0L I4 Turbo",
                horsepower: "310 hp",
                torque: "295 lb-ft",
                zeroToSixty: "4.5 seconds",
                topSpeed: "155 mph",
                drivetrain: "AWD",
                range: "400 miles",
                peakPower: "310 hp",
                seatingCapacity: 5,
                weight: "1,700 kg",
                wheelSize: "19 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "High-Performance Engine",
                    description: "Delivers exhilarating acceleration and dynamic power.",
                },
                {
                    name: "Quattro All-Wheel Drive",
                    description: "Enhances grip and stability during spirited driving.",
                },
                {
                    name: "Sport-Tuned Suspension",
                    description: "Provides sharp handling and a firm, responsive ride.",
                },
                {
                    name: "Sporty Interior Accents",
                    description: "Features like sport seats and a flat-bottom steering wheel.",
                },
            ],
            reviews: [{
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=40",
                    "rating": 3.2,
                    "comment": "Looks sharp and drives smooth."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=41",
                    "rating": 4.0,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=55",
                    "rating": 4.3,
                    "comment": "Easy to park and perfect for urban streets."
                }
            ]
        });

        server.create("car", {
            id: "42",
            name: "DB11 V8 Convertible",
            price: 220000,
            img: "/img/car/aston-martin/Aston-Martin-DB11-V8-Convertible.webp",
            type: "convertible",
            description: "Luxurious convertible with a V8 engine and elegant styling.",
            specifications: {
                brand: "aston-martin",
                model: "DB11 V8 Convertible",
                year: "2024",
                engine: "4.0L V8 Twin-Turbo",
                horsepower: "503 hp",
                torque: "513 lb-ft",
                zeroToSixty: "4.0 seconds",
                topSpeed: "187 mph",
                drivetrain: "RWD",
                range: "400 miles",
                peakPower: "503 hp",
                seatingCapacity: 4,
                weight: "1,760 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Power-Folding Soft Top",
                    description: "Transforms the coupe into an open-air grand tourer in seconds.",
                },
                {
                    name: "Twin-Turbo V8 Engine",
                    description: "Delivers robust power and a thrilling exhaust note.",
                },
                {
                    name: "Luxurious Hand-Crafted Interior",
                    description: "Exquisite materials and bespoke finishes.",
                },
                {
                    name: "Adaptive Damping System",
                    description: "Adjusts suspension for optimal comfort and sportiness.",
                },
            ],
            reviews: [{
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=57",
                    "rating": 2.9,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "VintageSoul",
                    "userPic": "https://i.pravatar.cc/150?img=16",
                    "rating": 3.9,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                },
                {
                    "username": "AutoNerd",
                    "userPic": "https://i.pravatar.cc/150?img=15",
                    "rating": 3.3,
                    "comment": "Good bang for the buck."
                }
            ]
        });

        server.create("car", {
            id: "43",
            name: "DB11",
            price: 245000,
            img: "/img/car/aston-martin/Aston-Martin-DB11.webp",
            type: "grand tourer",
            description: "A high-performance grand tourer combining luxury and power.",
            specifications: {
                brand: "aston-martin",
                model: "DB11",
                year: "2024",
                engine: "5.2L V12 Twin-Turbo",
                horsepower: "630 hp",
                torque: "516 lb-ft",
                zeroToSixty: "3.7 seconds",
                topSpeed: "200 mph",
                drivetrain: "RWD",
                range: "390 miles",
                peakPower: "630 hp",
                seatingCapacity: 4,
                weight: "1,875 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Twin-Turbo V12 Engine",
                    description: "Provides immense power and effortless acceleration.",
                },
                {
                    name: "Elegant and Aerodynamic Design",
                    description: "Stunning aesthetics with functional aerodynamic elements.",
                },
                {
                    name: "Luxurious Cabin",
                    description: "Hand-stitched leather and premium materials throughout.",
                },
                {
                    name: "GT Driving Comfort",
                    description: "Designed for long-distance journeys with exceptional comfort.",
                },
            ],
            reviews: [{
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=6",
                    "rating": 3.8,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=39",
                    "rating": 4.4,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=64",
                    "rating": 2.8,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                }
            ]
        });

        server.create("car", {
            id: "44",
            name: "DBS Superleggera",
            price: 330000,
            img: "/img/car/aston-martin/Aston-Martin-DBS-Superleggera.webp",
            type: "sports car",
            description: "A beautifully aggressive super GT with immense power.",
            specifications: {
                brand: "aston-martin",
                model: "DBS Superleggera",
                year: "2024",
                engine: "5.2L V12 Twin-Turbo",
                horsepower: "715 hp",
                torque: "664 lb-ft",
                zeroToSixty: "3.4 seconds",
                topSpeed: "211 mph",
                drivetrain: "RWD",
                range: "380 miles",
                peakPower: "715 hp",
                seatingCapacity: 2,
                weight: "1,850 kg",
                wheelSize: "21 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Powerful V12 Engine",
                    description: "Delivers staggering horsepower and torque for extreme performance.",
                },
                {
                    name: "Lightweight Construction",
                    description: "Extensive use of carbon fiber reduces weight for enhanced agility.",
                },
                {
                    name: "Aggressive Aerodynamics",
                    description: "Designed for high-speed stability and downforce.",
                },
                {
                    name: "Carbon Ceramic Brakes",
                    description: "Provides exceptional stopping power and fade resistance.",
                },
            ],
            reviews: [{
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=29",
                    "rating": 3.6,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=62",
                    "rating": 3.7,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=42",
                    "rating": 2.6,
                    "comment": "Smooth handling and great for everyday use."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=16",
                    "rating": 3.2,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=41",
                    "rating": 3.3,
                    "comment": "Easy to park and perfect for urban streets."
                }
            ]
        });

        server.create("car", {
            id: "45",
            name: "DBX",
            price: 200000,
            img: "/img/car/aston-martin/Aston-Martin-DBX.webp",
            type: "luxury SUV",
            description: "Aston Martin’s first luxury SUV combining performance and versatility.",
            specifications: {
                brand: "aston-martin",
                model: "DBX",
                year: "2024",
                engine: "4.0L V8 Twin-Turbo",
                horsepower: "542 hp",
                torque: "516 lb-ft",
                zeroToSixty: "4.3 seconds",
                topSpeed: "181 mph",
                drivetrain: "AWD",
                range: "400 miles",
                peakPower: "542 hp",
                seatingCapacity: 5,
                weight: "2,245 kg",
                wheelSize: "22 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "High-Performance SUV",
                    description: "Blends sports car dynamics with SUV practicality.",
                },
                {
                    name: "Adaptive Triple Chamber Air Suspension",
                    description: "Provides variable ride height and damping for diverse conditions.",
                },
                {
                    name: "Luxurious Interior",
                    description: "Hand-crafted cabin with premium materials and advanced technology.",
                },
                {
                    name: "All-Terrain Capability",
                    description: "Designed to handle various surfaces with confidence.",
                },
            ],
            reviews: [{
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=8",
                    "rating": 3.2,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=60",
                    "rating": 3.5,
                    "comment": "Good bang for the buck."
                },
                {
                    "username": "SpeedHunter",
                    "userPic": "https://i.pravatar.cc/150?img=28",
                    "rating": 2.8,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=26",
                    "rating": 3.4,
                    "comment": "Easy to park and perfect for urban streets."
                }
            ]
        });

        server.create("car", {
            id: "46",
            name: "V12 Vantage",
            price: 300000,
            img: "/img/car/aston-martin/Aston-Martin-V12-Vantage.webp",
            type: "sports car",
            description: "An exclusive performance car with a roaring V12 engine.",
            specifications: {
                brand: "aston-martin",
                model: "V12 Vantage",
                year: "2024",
                engine: "5.2L V12 Twin-Turbo",
                horsepower: "690 hp",
                torque: "555 lb-ft",
                zeroToSixty: "3.4 seconds",
                topSpeed: "200 mph",
                drivetrain: "RWD",
                range: "370 miles",
                peakPower: "690 hp",
                seatingCapacity: 2,
                weight: "1,800 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Limited Production Model",
                    description: "An exclusive and highly sought-after performance vehicle.",
                },
                {
                    name: "Powerful V12 Engine",
                    description: "Delivers immense power and an exhilarating sound.",
                },
                {
                    name: "Track-Focused Dynamics",
                    description: "Engineered for superior handling and performance on the circuit.",
                },
                {
                    name: "Carbon Fiber Bodywork",
                    description: "Extensive use of lightweight materials for enhanced agility.",
                },
            ],
            reviews: [{
                    "username": "LeatherSeats",
                    "userPic": "https://i.pravatar.cc/150?img=63",
                    "rating": 3.2,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "AutoNerd",
                    "userPic": "https://i.pravatar.cc/150?img=6",
                    "rating": 2.6,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=28",
                    "rating": 3.8,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=11",
                    "rating": 4.7,
                    "comment": "Looks sharp and drives smooth."
                }
            ]
        });

        server.create("car", {
            id: "47",
            name: "V12 Vantage Roadster",
            price: 310000,
            img: "/img/car/aston-martin/Aston-Martin-V12-Vantage-Roadster.webp",
            type: "convertible",
            description: "Open-top version of the V12 Vantage with breathtaking performance.",
            specifications: {
                brand: "aston-martin",
                model: "V12 Vantage Roadster",
                year: "2024",
                engine: "5.2L V12 Twin-Turbo",
                horsepower: "690 hp",
                torque: "555 lb-ft",
                zeroToSixty: "3.5 seconds",
                topSpeed: "195 mph",
                drivetrain: "RWD",
                range: "360 miles",
                peakPower: "690 hp",
                seatingCapacity: 2,
                weight: "1,820 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Convertible Driving Experience",
                    description: "Enjoy the thrill of the V12 engine with the top down.",
                },
                {
                    name: "High-Performance V12 Engine",
                    description: "Delivers immense power and a captivating exhaust note.",
                },
                {
                    name: "Exclusive Limited Edition",
                    description: "A rare and highly desirable open-top sports car.",
                },
                {
                    name: "Adaptive Suspension",
                    description: "Provides a balance of comfort and sporty handling.",
                },
            ],
            reviews: [{
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=44",
                    "rating": 4.9,
                    "comment": "Could use more features, but it\u2019s dependable."
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=67",
                    "rating": 4.0,
                    "comment": "Well-balanced car with decent power."
                },
                {
                    "username": "EcoCruiser",
                    "userPic": "https://i.pravatar.cc/150?img=9",
                    "rating": 2.5,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "GadgetGeek",
                    "userPic": "https://i.pravatar.cc/150?img=10",
                    "rating": 4.8,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "CarGuru93",
                    "userPic": "https://i.pravatar.cc/150?img=47",
                    "rating": 3.3,
                    "comment": "Interior tech could be better, but it\u2019s solid overall."
                }
            ]
        });

        server.create("car", {
            id: "48",
            name: "Vanquish",
            price: 290000,
            img: "/img/car/aston-martin/Aston-Martin-Vanquish.webp",
            type: "grand tourer",
            description: "Iconic grand tourer blending timeless design and fierce performance.",
            specifications: {
                brand: "aston-martin",
                model: "Vanquish",
                year: "2024",
                engine: "5.9L V12",
                horsepower: "595 hp",
                torque: "465 lb-ft",
                zeroToSixty: "3.8 seconds",
                topSpeed: "201 mph",
                drivetrain: "RWD",
                range: "380 miles",
                peakPower: "595 hp",
                seatingCapacity: 2,
                weight: "1,835 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Naturally Aspirated V12 Engine",
                    description: "Delivers a pure and powerful driving experience.",
                },
                {
                    name: "Timeless Design",
                    description: "Elegant and muscular styling that remains iconic.",
                },
                {
                    name: "Luxurious Interior",
                    description: "Hand-crafted cabin with premium materials and sophisticated details.",
                },
                {
                    name: "Grand Touring Comfort",
                    description: "Designed for long-distance journeys with exceptional refinement.",
                },
            ],
            reviews: [{
                    "username": "SilentRide",
                    "userPic": "https://i.pravatar.cc/150?img=43",
                    "rating": 3.5,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=12",
                    "rating": 4.5,
                    "comment": "Fuel efficiency is impressive!"
                },
                {
                    "username": "AutoNerd",
                    "userPic": "https://i.pravatar.cc/150?img=23",
                    "rating": 2.8,
                    "comment": "Absolutely love the ride quality and design."
                },
                {
                    "username": "TeslaFan",
                    "userPic": "https://i.pravatar.cc/150?img=13",
                    "rating": 3.8,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "UrbanFox",
                    "userPic": "https://i.pravatar.cc/150?img=46",
                    "rating": 3.8,
                    "comment": "Would recommend to anyone looking for a daily ride."
                }
            ]
        });

        server.create("car", {
            id: "49",
            name: "Vantage Convertible",
            price: 160000,
            img: "/img/car/aston-martin/Aston-Martin-Vantage-Convertible.webp",
            type: "convertible",
            description: "The drop-top version of the Vantage, combining power and style.",
            specifications: {
                brand: "aston-martin",
                model: "Vantage Convertible",
                year: "2024",
                engine: "4.0L V8 Twin-Turbo",
                horsepower: "503 hp",
                torque: "505 lb-ft",
                zeroToSixty: "3.7 seconds",
                topSpeed: "190 mph",
                drivetrain: "RWD",
                range: "390 miles",
                peakPower: "503 hp",
                seatingCapacity: 2,
                weight: "1,745 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Power-Operated Soft Top",
                    description: "Allows for quick and easy open-air driving.",
                },
                {
                    name: "Twin-Turbo V8 Engine",
                    description: "Delivers strong performance and a captivating exhaust note.",
                },
                {
                    name: "Dynamic Driving Experience",
                    description: "Engaging handling and responsive steering.",
                },
                {
                    name: "Luxurious Interior",
                    description: "Premium materials and driver-focused cockpit.",
                },
            ],
            reviews: [{
                    "username": "FuelSaver",
                    "userPic": "https://i.pravatar.cc/150?img=60",
                    "rating": 3.0,
                    "comment": "Surprisingly roomy and practical."
                },
                {
                    "username": "FamilyGuy",
                    "userPic": "https://i.pravatar.cc/150?img=44",
                    "rating": 2.9,
                    "comment": "A reliable choice for small families."
                },
                {
                    "username": "AutoNerd",
                    "userPic": "https://i.pravatar.cc/150?img=23",
                    "rating": 3.5,
                    "comment": "Fuel efficiency is impressive!"
                }
            ]
        });

        server.create("car", {
            id: "50",
            name: "Vantage",
            price: 150000,
            img: "/img/car/aston-martin/Aston-Martin-Vantage.webp",
            type: "sports car",
            description: "Aston Martin’s entry-level sports car with thrilling dynamics.",
            specifications: {
                brand: "aston-martin",
                model: "Vantage",
                year: "2024",
                engine: "4.0L V8 Twin-Turbo",
                horsepower: "503 hp",
                torque: "505 lb-ft",
                zeroToSixty: "3.6 seconds",
                topSpeed: "195 mph",
                drivetrain: "RWD",
                range: "400 miles",
                peakPower: "503 hp",
                seatingCapacity: 2,
                weight: "1,730 kg",
                wheelSize: "20 inches",
            },
            dimensions: [{
                    name: "Cargo",
                    description: "92 cu ft",
                },
                {
                    name: "Width",
                    description: "89.4 in",
                },
                {
                    name: "Length",
                    description: "199.9 in",
                },
                {
                    name: "Height",
                    description: "66.1 in",
                },
                {
                    name: "Wheelbase",
                    description: "96.1 in",
                },
                {
                    name: "Ground Clearance",
                    description: "5.1 in",
                },
                {
                    name: "Front Track Width",
                    description: "59.1 in",
                },
                {
                    name: "Rear Track Width",
                    description: "58.7 in",
                },
                {
                    name: "Turning Radius",
                    description: "16.7 ft",
                },
                {
                    name: "Front Overhang",
                    description: "31.5 in",
                },
                {
                    name: "Rear Overhang",
                    description: "29.9 in",
                },
                {
                    name: "Approach Angle",
                    description: "20°",
                },
                {
                    name: "Departure Angle",
                    description: "32°",
                },
                {
                    name: "Ramp Breakover Angle",
                    description: "18°",
                },
            ],
            features: [{
                    name: "Aggressive Styling",
                    description: "Bold and muscular design that commands attention.",
                },
                {
                    name: "Powerful Twin-Turbo V8",
                    description: "Delivers exhilarating performance and a thrilling sound.",
                },
                {
                    name: "Sport-Tuned Chassis",
                    description: "Provides sharp handling and a dynamic driving experience.",
                },
                {
                    name: "Driver-Focused Cockpit",
                    description: "Ergonomic layout with intuitive controls.",
                },
            ],
            reviews: [{
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=30",
                    "rating": 4.0,
                    "comment": "Excellent value, great for city driving."
                },
                {
                    "username": "DailyDriver",
                    "userPic": "https://i.pravatar.cc/150?img=23",
                    "rating": 2.9,
                    "comment": "Easy to park and perfect for urban streets."
                },
                {
                    "username": "HighwayBoss",
                    "userPic": "https://i.pravatar.cc/150?img=31",
                    "rating": 4.1,
                    "comment": "Didn\u2019t expect to enjoy it this much."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=45",
                    "rating": 3.8,
                    "comment": "The acceleration is a bit sluggish, but comfort is great."
                },
                {
                    "username": "SlickRider",
                    "userPic": "https://i.pravatar.cc/150?img=19",
                    "rating": 4.3,
                    "comment": "Looks sharp and drives smooth."
                }
            ]
        });
    }, 
    routes() {
        this.namespace = "api";
        this.logging = false;
        this.get("/cars", (schema, request) => {
            let page = Number(request.queryParams.page) || 1;
            let perPage = Number(request.queryParams.perPage) || 9;
            let searchBy = request.queryParams.searchBy?.toLowerCase().replace(/\s+/g, "") || "";
            let maxPrice = Number(request.queryParams.maxPrice) 
            let maxSeats = Number(request.queryParams.maxSeats) 
            let maxRange = Number(request.queryParams.maxRange) 
            let sortByPrice = request.queryParams.sortByPrice
            let sortBySeatingCapacity = request.queryParams.sortBySeatingCapacity
            let sortByRange = request.queryParams.sortByRange
            let sortByRating = request.queryParams.sortByRating
            let allCars = schema.cars.all().models;
            const maximumPrice = Math.max(...Object.values(allCars).map(car => car.price))
            const maximumSeats = Math.max(...Object.values(allCars).map(car => car.specifications.seatingCapacity))
            const maximumRange = Math.max(...Object.values(allCars).map(car => Number(car.specifications.range.replace(/[^\d.]/g, ""))))
            if (searchBy) {
                allCars = allCars.filter(car => {
                    const combinedName = (car.name + " " + car.specifications.brand).toLowerCase().replace(/\s+/g, "");
                    const combinedBrand = (car.specifications.brand + " " + car.name).toLowerCase().replace(/\s+/g, "");
                    return combinedName.includes(searchBy) || combinedBrand.includes(searchBy);
                });
            }
            if (!isNaN(maxPrice)) {
                allCars = allCars.filter(car => car.price <= maxPrice);
            }
            if (!isNaN(maxSeats)) {
                allCars = allCars.filter(car => car.specifications.seatingCapacity <= maxSeats);
            }
            if (!isNaN(maxRange)) {
                allCars = allCars.filter(car => {
                    const rangeStr = car.specifications.range || "0";
                    const numericRange = Number(rangeStr.replace(/[^\d.]/g, ""));
                    return numericRange <= maxRange;
                });
            }
            allCars = allCars.sort((a, b) => {
                // Sort by price first if provided
                if (sortByPrice) {
                    const priceDiff = sortByPrice === "ascending" 
                        ? a.price - b.price 
                        : b.price - a.price;
                    if (priceDiff !== 0) return priceDiff;
                }
                // Then by seating capacity
                if (sortBySeatingCapacity) {
                    const seatDiff = sortBySeatingCapacity === "ascending" 
                        ? a.specifications.seatingCapacity - b.specifications.seatingCapacity 
                        : b.specifications.seatingCapacity - a.specifications.seatingCapacity;
                    if (seatDiff !== 0) return seatDiff;
                }
                // Then by range
                if (sortByRange) {
                    const aRange = Number(a.specifications.range.replace(/[^\d.]/g, ""));
                    const bRange = Number(b.specifications.range.replace(/[^\d.]/g, ""));
                    const rangeDiff = sortByRange === "ascending"
                        ? aRange - bRange
                        : bRange - aRange;
                    if (rangeDiff !== 0) return rangeDiff;
                }
                // Sort By Rating
                if (sortByRating) {
                    const getAverageRating = (reviews) => {
                        if (!reviews || reviews.length === 0) return 0;
                        const total = reviews.reduce((sum, r) => sum + r.rating, 0);
                        return total / reviews.length;
                    };
                    const aRating = getAverageRating(a.reviews);
                    const bRating = getAverageRating(b.reviews);
                    const ratingDiff = sortByRating === "ascending"
                        ? aRating - bRating
                        : bRating - aRating;
                    if (ratingDiff !== 0) return ratingDiff;
                }
                return 0; // No sorting difference
            });
            const start = (page - 1) * perPage;
            const end = start + perPage;
            const paginatedCars = allCars.slice(start, end);
            return {
                cars: paginatedCars,
                meta: {
                    maximumPrice: maximumPrice,
                    maximumSeats: maximumSeats,
                    maximumRange: maximumRange,
                    total: allCars.length,
                    page,
                    perPage,
                    totalPages: Math.ceil(allCars.length / perPage),
                },
            };
        });
        this.get("/cars/:id", (schema, request) => {
            let id = request.params.id;
            const targetCar = schema.cars.find(id);
            if (!targetCar) {
                return new Response(
                    404,
                    {},
                    { error: `Car with ID ${id} not found` }
                );
            }
            const allCars = schema.cars.all().models;
            const relatedCars = allCars
                .filter((car) => car.id !== id) // exclude the current car
                .map((car) => {
                    let score = 0;
                    if (car.specifications.brand === targetCar.specifications.brand) {
                        score += 5;
                    }
                    if (car.specifications.model === targetCar.specifications.model) {
                        score += 4;
                    }
                    if (car.specifications.engine[0] === targetCar.specifications.engine[0]) {
                        score += 1;
                    }
                    if (car.specifications.range === targetCar.specifications.range) {
                        score += 1;
                    }
                    if (car.specifications.topSpeed === targetCar.specifications.topSpeed) {
                        score += 1;
                    }
                    if (car.specifications.seatingCapacity === targetCar.specifications.seatingCapacity) {
                        score += 1;
                    }
                    if (car.specifications.drivetrain === targetCar.specifications.drivetrain) {
                        score += 1;
                    }
                    return { car, score };
                })
                .filter(({ score }) => score > 0) // only keep relevant cars
                .sort((a, b) => b.score - a.score)
                .slice(0,10) // sort by relevance
                .map(({ car }) => car);
            return {
                carByID: targetCar,
                relatedCars: relatedCars,
            };      
        });
        this.get("/cart", (schema, request) => {
            return schema.cartItems.all();
        });
        this.post("/cart", (schema, request) => {
            let attr = JSON.parse(request.requestBody);
            return schema.cartItems.create(attr);
        });
        this.delete("/cart/:id", (schema, request) => {
            let id = request.params.id;
            return schema.cartItems.find(id).destroy();
        });
        this.get("/checkout/:id", (schema, request) => {
            let id = request.params.id;
            let carByID = schema.cars.find(id);
            if (carByID.isSold === true) {
                return new Response(409, {}, { error: "Car is sold out." });
            } else {
                return carByID;
            }
        });
        this.post("/order", (schema, request) => {
            const attrs = JSON.parse(request.requestBody);
            const carId = attrs.orderedItem.id;
            const car = schema.cars.find(carId);
            car.update({ isSold: true });
            return schema.orders.create(attrs);
        });
        this.get("/order/:id", (schema, request) => {
            const id = request.params.id;
            return schema.orders.find(id);
        });
        this.get("/order", (schema) => {
            return schema.orders.all();
        });
        this.delete("/order/:id", (schema, request) => {
            let id = request.params.id;
            const attrs = JSON.parse(request.requestBody);
            const carId = attrs.orderedItem.id;
            const car = schema.cars.find(carId);
            car.update({ isSold: false })
            return schema.orders.find(id).destroy();
        });
    },
});
