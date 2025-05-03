
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import NavigationBar from "@/components/NavigationBar";
import ServiceCard from "@/components/ServiceCard";
import AdvantageItem from "@/components/AdvantageItem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-32 text-white">
        <div className="container mx-auto px-4 text-center md:text-left">
          <div className="max-w-xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Эвакуация автомобилей в Москве</h1>
            <p className="text-xl mb-8 text-white/90">Быстрая и надежная эвакуация транспорта любого типа 24/7</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-primary hover:bg-primary-hover hover-scale">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Вызвать эвакуатор
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Узнать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг по эвакуации и транспортировке автомобилей любого типа и габаритов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Легковые автомобили" 
              description="Быстрая и безопасная эвакуация легковых автомобилей любой марки и модели."
              icon="Car"
            />
            <ServiceCard 
              title="Внедорожники и кроссоверы" 
              description="Специализированная эвакуация для тяжелых внедорожников и кроссоверов."
              icon="Truck"
            />
            <ServiceCard 
              title="Мотоциклы" 
              description="Бережная эвакуация мототехники с использованием специального оборудования."
              icon="Bike"
            />
            <ServiceCard 
              title="Грузовой транспорт" 
              description="Эвакуация грузовых автомобилей с помощью мощных эвакуаторов."
              icon="Forklift"
            />
            <ServiceCard 
              title="Аварийные автомобили" 
              description="Специальная эвакуация поврежденных в ДТП автомобилей."
              icon="AlertTriangle"
            />
            <ServiceCard 
              title="Техпомощь на дороге" 
              description="Оперативная техническая помощь при поломках на дороге."
              icon="Wrench"
            />
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section id="advantages" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Почему клиенты выбирают нашу службу эвакуации снова и снова
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AdvantageItem 
              title="Круглосуточная работа" 
              description="Мы работаем 24/7, включая выходные и праздничные дни, чтобы помочь вам в любое время суток."
              icon="Clock"
            />
            <AdvantageItem 
              title="Быстрое прибытие" 
              description="Среднее время прибытия эвакуатора составляет 20-30 минут в зависимости от района города."
              icon="Timer"
            />
            <AdvantageItem 
              title="Профессиональные водители" 
              description="Наши водители имеют многолетний опыт и все необходимые сертификаты."
              icon="User"
            />
            <AdvantageItem 
              title="Современная техника" 
              description="Мы используем только современные эвакуаторы и специализированное оборудование."
              icon="Truck"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна эвакуация?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Оставьте заявку или позвоните нам, и мы оперативно приедем на помощь
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" className="bg-secondary hover:bg-secondary/80">
              Оставить заявку
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Телефон</h3>
              <p className="text-secondary">+7 (999) 123-45-67</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-secondary">info@auto-evac.ru</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Адрес</h3>
              <p className="text-secondary">г. Москва, ул. Автомобильная, 42</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
