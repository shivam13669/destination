import ItineraryCarousel from "./ItineraryCarousel";
import ItineraryDay from "./ItineraryDay";
import reykjavikImg from "@/assets/reykjavik-itinerary.jpg";
import akureyriImg from "@/assets/akureyri-itinerary.jpg";
import icelandMain from "@/assets/iceland-main.jpg";
import icelandActivity from "@/assets/iceland-activity.jpg";

const reykjavikDays = [
  { day: 1, title: "Arrival in Reykjavik | Day at Leisure" },
  { day: 2, title: "Day Trip to Iceland Golden Circle" },
  { day: 3, title: "Whale Watching Tour" },
];

const akureyriDays = [
  { day: 4, title: "Transfer to Akureyri | Day at Leisure" },
  { day: 5, title: "Day Trip to Diamond Circle" },
  { day: 6, title: "Leisure Day in Akureyri" },
  { day: 7, title: "Departure Day" },
];

const ItinerarySection = () => {
  return (
    <div>
      {/* Reykjavik Section */}
      <ItineraryCarousel
        images={[reykjavikImg, icelandMain, icelandActivity]}
        days={3}
        location="Reykjavik"
        totalImages={10}
      />
      {reykjavikDays.map((item) => (
        <ItineraryDay key={item.day} day={item.day} title={item.title} />
      ))}

      {/* Akureyri Section */}
      <div className="mt-8">
        <ItineraryCarousel
          images={[akureyriImg, icelandActivity, reykjavikImg]}
          days={4}
          location="Akureyri"
          totalImages={8}
        />
        {akureyriDays.map((item) => (
          <ItineraryDay key={item.day} day={item.day} title={item.title} />
        ))}
      </div>

      {/* End of Trip */}
      <div className="text-center py-12 border-t border-border mt-8">
        <h3 className="text-4xl md:text-5xl font-script text-gold">End Of Trip</h3>
      </div>
    </div>
  );
};

export default ItinerarySection;
