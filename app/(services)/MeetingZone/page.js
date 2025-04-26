

// 'use client'

// import { useState, useEffect } from "react";
// import Image from 'next/image';
// import Head from 'next/head';
// import { useRouter } from 'next/navigation';
// import Footer from '@/app/components/footer';
// import Benefits from "@/app/components/benefits";
// import { Button } from '@/components/ui/button';

// const Rooms = [
//   {
//     title: "Meeting Room 1",
//     description:
//       "A cozy and professional meeting space ideal for small team discussions, client meetings, and brainstorming sessions. Perfect for groups of 4 to 6 people looking for a quiet and well-equipped environment.",
//     image: "/meetingRoom1.jpg",
//   },
//   {
//     title: "Meeting Room 2",
//     description:
//       "A spacious training room designed for workshops, seminars, and group learning sessions. It’s the ideal setting for hosting formations, with enough room to accommodate up to 16 participants comfortably.",
//     image: "/meetingRoom2.jpg",
//   },
// ];

// export default function MeetingRoom() {
//   const [fetchedData, setFetchedData] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     async function fetchingSubscriptions() {
//       try {
//         const response = await fetch("http://localhost:8000/ELACO/subcription/gg/meeting room");
//         if (!response.ok) throw new Error("Error in fetching subscriptions");
//         const data = await response.json();
//         setFetchedData(data.subscriptions);
//       } catch (err) {
//         console.error(err);
//       }
//     }
//     fetchingSubscriptions();
//   }, []);

//   return (
//     <div className="bg-white text-gray-800">
//       <Head>
//         <title>Meeting Rooms | Coworking Space</title>
//         <meta
//           name="description"
//           content="Choose from a variety of private office meeting rooms for teams and professionals. Reserve your spot today!"
//         />
//       </Head>

//       {/* Hero Section */}
//       <section className="relative h-[70vh]">
//         <div className="absolute inset-0 z-0">
//           <Image
//             src="/mee.jpg"
//             alt="Meeting Room Hero"
//             layout="fill"
//             objectFit="cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-black/60" />
//         </div>
//         <div className="absolute z-10 top-1/2 left-10 transform -translate-y-1/2">
//           <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-2">Meeting Rooms</h1>
//           <p className="uppercase text-sm tracking-wider text-[#07ebbd]">
//             Home / <span className="text-white">Meeting Rooms</span>
//           </p>
//         </div>
//       </section>

//       {/* Benefits Section */}
//       <section>
//         <Benefits subs={fetchedData} />
//       </section>

//       {/* Room Types Section */}
//       <section className="py-12 bg-white">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-8">
//             {Rooms.map((room, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
//               >
//                 <div className="h-64 w-full relative">
//                   <Image
//                     src={room.image}
//                     alt={room.title}
//                     layout="fill"
//                     objectFit="cover"
//                   />
//                 </div>
//                 <div className="p-6 space-y-4">
//                   <h3 className="text-2xl font-semibold text-gray-800">{room.title}</h3>
//                   <p className="text-gray-600 text-base">{room.description}</p>
//                   <button className="bg-[#07ebbd] hover:bg-black text-white font-semibold py-2 px-4 rounded-xl w-fit">
//                     Reserve Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-16 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-4">Need a Custom Plan?</h2>
//         <p className="mb-6 text-gray-600">
//           We can tailor a coworking solution just for you. Get in touch and let’s talk.
//         </p>
//         <Button
//           className="bg-black text-white hover:bg-gray-800"
//           onClick={() => router.push("/contact")}
//         >
//           Contact Us
//         </Button>
//       </section>

//       {/* Footer */}
//       {/* <Footer /> */}
//     </div>
//   );
// }
import Image from 'next/image';
import Head from 'next/head';
import Benefits from '@/app/components/benefits';
import { Button } from '@/components/ui/button';

const Rooms = [
  {
    title: "Meeting Room 1",
    description:
      "A cozy and professional meeting space ideal for small team discussions, client meetings, and brainstorming sessions. Perfect for groups of 4 to 6 people looking for a quiet and well-equipped environment.",
    image: "/meetingRoom1.jpg",
  },
  {
    title: "Meeting Room 2",
    description:
      "A spacious training room designed for workshops, seminars, and group learning sessions. It’s the ideal setting for hosting formations, with enough room to accommodate up to 16 participants comfortably.",
    image: "/meetingRoom2.jpg",
  },
];

export default async function MeetingRoomPage() {
  // Fetch server-side data directly in the component
  let subs = [];
  try {
    const res = await fetch("http://localhost:8000/ELACO/subcription/gg/meeting room", {
      cache: "no-store",
    });
    const data = await res.json();
    subs = data.subscriptions || [];
  } catch (err) {
    console.error("Fetch error:", err);
  }

  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Meeting Rooms | Coworking Space</title>
        <meta
          name="description"
          content="Choose from a variety of private office meeting rooms for teams and professionals. Reserve your spot today!"
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/mee.jpg"
            alt="Meeting Room Hero"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute z-10 top-1/2 left-10 transform -translate-y-1/2">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-2">Meeting Rooms</h1>
          <p className="uppercase text-sm tracking-wider text-[#07ebbd]">
            Home / <span className="text-white">Meeting Rooms</span>
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <Benefits subs={subs} />
      </section>

      {/* Room Types Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {Rooms.map((room, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transition hover:shadow-2xl"
              >
                <div className="h-64 w-full relative">
                  <Image
                    src={room.image}
                    alt={room.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800">{room.title}</h3>
                  <p className="text-gray-600 text-base">{room.description}</p>
                  <button className="bg-[#07ebbd] hover:bg-black text-white font-semibold py-2 px-4 rounded-xl w-fit">
                    Reserve Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA - moved to Client Component to use useRouter */}
      {/* <ClientContactCTA /> */}
    </div>
  );
}
