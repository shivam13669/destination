import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface PricingCardProps {
  showForm?: boolean;
}

const PricingCard = ({ showForm = false }: PricingCardProps) => {
  return (
    <div className="card-shadow bg-card p-5 sticky top-20">
      <div className="flex items-start justify-between mb-1">
        <div>
          <div className="text-sm text-muted-foreground">Scenic Iceland With Diamond Circle</div>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-foreground">INR 2,30,206</span>
            <span className="text-sm text-muted-foreground">Per Adult</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-muted-foreground line-through">INR 3,06,106</span>
            <span className="bg-sale text-primary-foreground text-xs px-2 py-0.5 rounded font-medium">
              SAVE INR 75,900
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-gold text-gold" />
          <span className="font-semibold text-foreground">4.5</span>
          <span className="text-muted-foreground text-sm">(40)</span>
        </div>
      </div>

      {/* Republic Day Badge */}
      <div className="flex items-center gap-2 my-4">
        <div className="flex items-center gap-1 bg-sale text-primary-foreground px-3 py-1 rounded text-xs font-semibold">
          🇮🇳 REPUBLIC DAY SALE!
        </div>
      </div>

      {showForm ? (
        <div className="space-y-4">
          <Input placeholder="Full Name*" className="bg-background" />
          <Input placeholder="Email*" type="email" className="bg-background" />
          <div className="flex gap-2">
            <div className="flex items-center border border-border rounded-md px-3 bg-background">
              <span className="text-muted-foreground text-sm">+91</span>
            </div>
            <Input placeholder="Your Phone*" className="bg-background flex-1" />
          </div>
          <div className="flex gap-2">
            <Input placeholder="Travel Date*" className="bg-background" />
            <Input placeholder="Traveller Count*" className="bg-background" />
          </div>
          <Textarea placeholder="Message..." className="bg-background min-h-[80px]" />
        </div>
      ) : null}

      <Button className="w-full btn-primary py-6 text-base mt-4">
        Send Enquiry
      </Button>
    </div>
  );
};

export default PricingCard;
