
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  icon: string;
}

const PriceCard = ({ title, price, features, popular = false, icon }: PriceCardProps) => {
  return (
    <Card className={`h-full flex flex-col ${popular ? 'border-primary shadow-lg relative' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-sm font-medium py-1 px-3 rounded-full">
          Популярный
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon name={icon} className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price} ₽</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Icon name="Check" className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={popular ? "default" : "outline"} className="w-full">
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PriceCard;
