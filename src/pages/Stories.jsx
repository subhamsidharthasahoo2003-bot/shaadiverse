import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMapPin, FiCalendar, FiX, FiArrowRight, FiBookOpen } from 'react-icons/fi';

const allStories = [
  {
    id: 1,
    couple: 'Aditi & Rahul',
    title: 'A Grand Regal Wedding in the Pink City',
    location: 'City Palace, Jaipur',
    date: 'November 2025',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?auto=format&fit=crop&w=800&q=80',
    description: 'A stunning three-day celebration blending royal heritage customs with a modern pastel lavender theme.',
    detailedText: 'Aditi and Rahul wanted their wedding to feel regal yet intimate. Opting for the historic City Palace in Jaipur, they hosted 400 guests over 3 days of events. The decor featured hundreds of meters of lavender drapes and imported roses, contrasting beautifully with the pink sandstone walls. The groom arrived on a vintage carriage, and the mandap was situated in the inner courtyard under a canopy of stars. Aditi wore a custom hand-woven maroon lehenga that took 6 months to construct.',
    vendors: ['Venue: City Palace', 'Planner: Apex Gala Planners', 'Photography: Shot Stories by Vivek', 'Makeup: Glamour by Tanvi'],
  },
  {
    id: 2,
    couple: 'Kabir Malhotra',
    title: 'A Golden Gatsby 50th Birthday Bash',
    location: 'The Oberoi, Delhi NCR',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    description: 'A luxurious art-deco milestone birthday featuring custom champagne towers, jazz band, and gold and black velvet themes.',
    detailedText: 'To mark his 50th milestone, Kabir Malhotra threw a roaring Gatsby-themed social gala. Transforming the grand ballroom of The Oberoi with black velvet backdrops, gold geometric rigs, and towering feather centerpieces, the event felt like a step back into the 1920s. A 7-piece swing band flew in from Mumbai, playing live jazz as guests enjoyed signature cocktails beside a giant custom-made champagne fountain. Custom party favor bags were handed out at the end of the night.',
    vendors: ['Venue: The Oberoi Grand Ballroom', 'Catering: Oberoi Culinary Hub', 'DJ & Lights: Retro DJ Beats', 'Decor: Golden Gatsby Studios'],
  },
  {
    id: 3,
    couple: 'Meera & Joy',
    title: 'A Pastel Garden Baby Shower Dream',
    location: 'The Glasshouse Cafe, Bangalore',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80',
    description: 'A gorgeous high tea party setup with custom cupcake towers, floral thrones, and fun interactive games.',
    detailedText: 'Meera and Joy celebrated their upcoming bundle of joy with an intimate pastel-themed baby shower. Set in the lush surroundings of The Glasshouse Cafe, the venue was decked in soft pink, peach, and blue balloon arches. Guests played trivia games and designed custom bibs. A bespoke double-tier cake decorated with edible wild flowers was the centerpiece, accompanied by custom macaron sets.',
    vendors: ['Venue: The Glasshouse Cafe', 'Planner: Horizon Corporate Planners', 'Decor: Vows & Whispers Decor', 'Cake: Sweet Treats Bakery'],
  },
  {
    id: 4,
    couple: 'Dr. Amit Mehta',
    title: 'A Lifetime of Learning Convocation & Dinner',
    location: 'Taj Lands End, Mumbai',
    date: 'May 2026',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    description: 'An elegant retirement gala honoring 40 years of medical service, with custom video tribute decks and orchestral backup.',
    detailedText: 'To celebrate Dr. Amit Mehta\'s retirement after 40 years as Chief of Cardiology, his family and colleagues hosted a prestigious gala at Taj Lands End. The ballroom was styled in deep royal blue and gold. A customized 15-minute documentary tracing his career highlights was projected onto a massive LED screen, followed by heartfelt toasts from fellow doctors. A local chamber orchestra performed classical pieces throughout the evening.',
    vendors: ['Venue: Taj Lands End Ballroom', 'AV & Staging: TechShow Production', 'Planner: Horizon Corporate Planners', 'Photography: Shot Stories by Vivek'],
  },
  {
    id: 5,
    couple: 'The Kapoor Clan',
    title: 'A Heritage Farmhouse Family Reunion',
    location: 'Zorba Farms, Delhi',
    date: 'October 2025',
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80',
    description: 'Bringing three generations together for a weekend of traditional games, live barbecue, and heritage photo galleries.',
    detailedText: 'The Kapoors brought 80 family members together from across the globe for their biennial reunion. Zorba Farms was decorated with vintage strings of fairy lights and family photo trees dating back to 1950. Activities included multi-generational cricket matches, a live barbecue cook-off, and a storytelling session around a massive bonfire. The highlight was a drone-captured giant family portrait.',
    vendors: ['Venue: Zorba Farms Delhi', 'Catering: Gourmet Foods Bangalore', 'Photography: Shot Stories by Vivek', 'Decor: EcoDecor India'],
  },
  {
    id: 6,
    couple: 'Vasant Mela Committee',
    title: 'Vasant Spring Festival & Artisan Fair',
    location: 'Lalbagh Grounds, Bangalore',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    description: 'A vibrant public cultural event showcasing regional food trucks, handloom stalls, and dynamic folk dance stages.',
    detailedText: 'The annual Vasant Spring Festival returned to Lalbagh Grounds with over 15,000 visitors. The fair featured 120 craft stalls representing artisans from 15 states, a dedicated food truck zone serving global street food, and a main stage highlighting classical fusion and folk dances. A beautiful 50-meter neon Ferris wheel illuminated the evening sky, creating a magical atmosphere.',
    vendors: ['Venue: Lalbagh Grounds', 'Stage & Sound: Soundbox Audio', 'Decor & Stalls: Kraftwork Exhibitions', 'PR & Ads: MediaSpark Labs'],
  },
  {
    id: 7,
    couple: 'Rhythm & Beats',
    title: 'Neon Electro Live Concert Tour',
    location: 'DY Patil Stadium, Mumbai',
    date: 'January 2026',
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
    description: 'An energetic electronic music concert featuring international DJs, stunning laser rigs, and crowd-surging music.',
    detailedText: 'The Bangalore-based music agency Rhythm & Beats brought their premium Neon Electro Tour to Mumbai. Featuring a custom-designed circular stage with 360-degree laser projection mapping and top-tier sound arrays, the show wowed a crowd of 30,000 fans. Premium lounges and interactive merchandise booths added to the luxury VIP guest experience.',
    vendors: ['Venue: DY Patil Stadium', 'AV & Stage Rig: TechShow Production', 'Artist Booking: Apex Gala Planners', 'Security: SafeGuard Bouncers'],
  },
  {
    id: 8,
    couple: 'Srishti Art Hub',
    title: 'Infinite Horizons Modern Art Gala',
    location: 'NGMA, Bangalore',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=800&q=80',
    description: 'A premium gallery launch displaying contemporary installations, custom spotlights, and gourmet wine-tasting spreads.',
    detailedText: 'The Srishti Art Hub curated its seasonal gallery launch at the National Gallery of Modern Art. Presenting 50 works from 10 leading Indian contemporary painters and sculptors, the exhibition used custom warm spotlights to focus on individual canvases. Invited VIP collectors and art journalists enjoyed a curated wine-and-cheese pairing menu while interacting with the artists in a private patio setting.',
    vendors: ['Venue: NGMA Bangalore', 'Catering: Gourmet Foods Bangalore', 'Lighting: Glamour Lights Co.', 'Planner: Horizon Corporate Planners'],
  },
  {
    id: 9,
    couple: 'Goa Tourism Committee',
    title: 'The Spectacular Goa Carnival Parade',
    location: 'Panaji Promenade, Goa',
    date: 'February 2026',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80',
    description: 'An explosion of colors, brass bands, and designer floats celebrating Goan history along the scenic sea promenade.',
    detailedText: 'The historic Goa Carnival Parade returned with grand street pageantry along the Panaji promenade. Spearheaded by the Tourism Committee, the parade featured 40 massive themed floats, 12 regional brass bands, and hundreds of costumed street dancers performing samba and traditional Goan folk steps. Over 50,000 spectators lined the routes, enjoying food stalls and public pop-up concerts.',
    vendors: ['Venue: Panaji Promenade', 'Floats Design: Goa Craft Collective', 'PR & Media: Goa Tourism Hub', 'Security: State Security Forces'],
  },
];

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div className="pt-28 pb-24 bg-[#FAF9F6] min-h-screen text-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Page Header */}
        <div className="text-left mb-12 border-b border-event-pink/15 pb-6">
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            Real Event Stories
          </h1>
          <p className="text-stone-500 font-light text-sm md:text-base">
            Get an inside look at how real clients planned their luxury celebrations, from vendor choices to decor themes.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {allStories.map((story) => (
            <div
              key={story.id}
              className="group bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Cover Photo */}
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ backgroundImage: `url('${story.image}')` }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <span className="absolute bottom-4 left-4 bg-gradient-to-r from-event-pink to-event-orange text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {story.couple}
                </span>
              </div>

              {/* Story Details Card */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-stone-400 text-[10px] font-semibold uppercase tracking-wider mb-2">
                    <span className="flex items-center"><FiMapPin className="text-event-pink mr-1" /> {story.location}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-event-pink transition-colors duration-300 leading-snug mb-3">
                    {story.title}
                  </h3>
                  <p className="text-stone-600 text-xs font-light leading-relaxed mb-6">
                    {story.description}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedStory(story)}
                  className="flex items-center space-x-2 text-xs font-bold text-event-pink hover:text-event-orange transition-colors uppercase tracking-wider group-hover:pl-1 duration-300 mt-auto cursor-pointer"
                >
                  <FiBookOpen />
                  <span>Read Article</span>
                  <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Story Modal Dialog */}
      <AnimatePresence>
        {selectedStory && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedStory(null)}
              className="fixed inset-0 bg-black/70 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="fixed inset-6 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full max-w-2xl bg-[#FAF9F6] rounded-3xl shadow-2xl overflow-y-auto max-h-[85vh] z-[60] border border-event-pink/20 text-stone-800"
            >
              {/* Cover Banner */}
              <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: `url('${selectedStory.image}')` }}>
                <div className="absolute inset-0 bg-black/55 flex flex-col justify-end p-6 text-white text-left">
                  <span className="bg-[#FAF9F6]/20 backdrop-blur-md border border-white/20 text-xs font-bold px-3 py-1 rounded-full w-max mb-2 uppercase">
                    {selectedStory.couple}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-snug">
                    {selectedStory.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 text-left space-y-6">
                <div className="flex items-center space-x-4 text-xs font-semibold text-stone-500 border-b border-stone-150 pb-4">
                  <span className="flex items-center"><FiMapPin className="text-event-pink mr-1" /> {selectedStory.location}</span>
                  <span className="flex items-center"><FiCalendar className="text-event-pink mr-1" /> {selectedStory.date}</span>
                </div>

                <div className="space-y-4">
                  <h4 className="font-serif text-lg font-bold text-stone-800">Event Journey Overview</h4>
                  <p className="text-stone-600 text-sm font-light leading-relaxed">
                    {selectedStory.detailedText}
                  </p>
                </div>

                <div className="bg-event-pink/5 border border-event-pink/15 p-5 rounded-2xl space-y-3">
                  <h4 className="font-serif text-sm font-bold text-event-pink uppercase tracking-wider">Vendor Directory Used</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-stone-700">
                    {selectedStory.vendors.map((vendor, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-event-orange" />
                        <span>{vendor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Stories;
export { allStories };
