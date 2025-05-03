
import Icon from "@/components/ui/icon";

interface AdvantageItemProps {
  title: string;
  description: string;
  icon: string;
}

const AdvantageItem = ({ title, description, icon }: AdvantageItemProps) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mr-4">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <Icon name={icon} className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default AdvantageItem;
