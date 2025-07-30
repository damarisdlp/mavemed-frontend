import Image from "next/image";
import Link from "next/link";

const teams = [
  {
    title: "Directors",
    members: [
      {
        name: "veronica",
        displayName: "Veronica",
        title: "Founder",
        image: "/veronica.jpg",
        bio: "Veronica is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
    {
        name: "damaris",
        displayName: "Damaris",
        title: "Chief Executive Director",
        image: "/damaris.jpg",
        bio: "Damaris is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
]
},
{
    title: "Providers",
    members: [
      {
        name: "dra.nataly",
        displayName: "Dra. Nataly",
        title: "MD",
        image: "/nataly.jpg",
        bio: "Veronica is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
    {
        name: "dra.jocelyn",
        displayName: "Dra. Jocelyn",
        title: "MD",
        image: "/jocelyn.jpg",
        bio: "Damaris is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
]
},
{
    title: "Cosmetologists",
    members: [
      {
        name: "vicky",
        displayName: "Vicky",
        title: "Cosmetologist",
        image: "/vicky.jpg",
        bio: "Veronica is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
    {
        name: "manuel",
        displayName: "Manuel",
        title: "Cosmetologist & Masseur",
        image: "/manuel.jpg",
        bio: "Damaris is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
    {
        name: "mayra",
        displayName: "Mayra",
        title: "Cosmetologist",
        image: "/mayra.jpg",
        bio: "Damaris is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
]
},
{
    title: "Receptionists",
    members: [
      {
        name: "zury",
        displayName: "Zury",
        title: "Receptionist",
        image: "/zury.jpg",
        bio: "Veronica is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    },
    {
        name: "gabi",
        displayName: "Gabi",
        title: "Receptionist",
        image: "/gabi.jpg",
        bio: "Damaris is the visionary founder of Mave Medical Spa with over 15 years of experience in aesthetic medicine...",
    }
]
}
];
  

export default function Team() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        {teams.map((team, i) => (
          <div key={i} className="mb-16">
            <h2 className="text-2xl text-black md:text-3xl font-serif font-medium mb-6">
              {team.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {team.members.map((member, j) => (
                <div
                  key={j}
                  className="bg-[#f9f9f9] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
                >
                  <div className="relative h-100 w-full">
                    <Image
                      src={member.image}
                      alt={`${member.displayName} in Tijuana – ${member.title}`}
                      fill
                      className="object-cover text-gray-600"
                    />
                  </div>
                  <div className="p-4 flex-1 flex-col justify-between text-center">
                    <div>
                      <h3 className="text-lg text-black font-serif font-medium mb-1">
                        {member.displayName}
                      </h3>
                      <p className="text-2lg text-gray-600 mb-4">
                        {member.title}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <Link
                        href={`/aboutus/${member.name.toLowerCase()}`}
                        className="inline-block border border-gray-300 text-black px-4 py-2 rounded-full text-xs hover:border-black transition"
                        aria-label={`Learn more about ${member.name}`}
                        >
                            Learn More
                            </Link>
                            </div>
                            </div>
                            </div>
                        ))}
                        </div>
                        </div>
                    ))}
                    </div>
                    
                    </div>
                    
                    );
                }