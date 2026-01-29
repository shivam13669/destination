import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ItineraryDayProps {
  day: number;
  title: string;
  description?: string;
}

const ItineraryDay = ({ day, title, description }: ItineraryDayProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="badge-day">DAY {day}</span>
          <span className="font-medium text-foreground">{title}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>
      {isOpen && description && (
        <div className="px-4 pb-4 text-muted-foreground">
          {description}
        </div>
      )}
    </div>
  );
};

export default ItineraryDay;
