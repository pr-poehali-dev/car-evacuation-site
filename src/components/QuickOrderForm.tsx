
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const QuickOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    carModel: ""
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Имитация отправки формы
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Сбросить состояние через 3 секунды
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          location: "",
          carModel: ""
        });
      }, 3000);
    }, 1000);
  };
  
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Вызвать эвакуатор</CardTitle>
        <CardDescription>
          Заполните форму, и мы оперативно свяжемся с вами для уточнения деталей
        </CardDescription>
      </CardHeader>
      <CardContent>
        {submitted ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle" className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">
              Наш оператор свяжется с вами в ближайшее время
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                name="name"
                placeholder="Иван Иванов"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Номер телефона</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="location">Местоположение</Label>
              <Input
                id="location"
                name="location"
                placeholder="Улица, дом"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
            
            <div>
              <Label htmlFor="carModel">Марка и модель автомобиля</Label>
              <Input
                id="carModel"
                name="carModel"
                placeholder="Toyota Camry"
                value={formData.carModel}
                onChange={handleChange}
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={submitting}>
              {submitting ? (
                <>
                  <Icon name="Loader2" className="mr-2 h-4 w-4 animate-spin" />
                  Отправка...
                </>
              ) : (
                "Вызвать эвакуатор"
              )}
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </form>
        )}
      </CardContent>
    </Card>
  );
};

export default QuickOrderForm;
