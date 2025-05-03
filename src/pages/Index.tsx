
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section py-24 md:py-32">
        <div className="container mx-auto px-4 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Эвакуация автомобилей 24/7</h1>
            <p className="text-xl mb-8 opacity-90">Быстрая и профессиональная эвакуация в любой точке города</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Icon name="Phone" className="mr-2 h-5 w-5" />
                Вызвать эвакуатор
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Узнать стоимость
              </Button>
            </div>
            
            <div className="flex items-center mt-12 gap-6 flex-wrap">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <Icon name="Clock" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Работаем круглосуточно</p>
                  <p className="text-sm opacity-80">24 часа в сутки, 7 дней в неделю</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <Icon name="Timer" className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">Быстрый выезд</p>
                  <p className="text-sm opacity-80">Приедем за 15-30 минут</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем полный спектр услуг по эвакуации и транспортировке любых типов автомобилей
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              icon="Car" 
              title="Эвакуация легковых авто"
              description="Быстрая и безопасная эвакуация легковых автомобилей любых марок и моделей."
            />
            <ServiceCard 
              icon="Truck" 
              title="Эвакуация внедорожников"
              description="Эвакуация тяжелых внедорожников и кроссоверов с помощью специального оборудования."
            />
            <ServiceCard 
              icon="Wrench" 
              title="Техпомощь на дороге"
              description="Оперативный выезд мастера для решения технических проблем на месте поломки."
            />
            <ServiceCard 
              icon="AlertTriangle" 
              title="Эвакуация после ДТП"
              description="Бережная эвакуация поврежденных в результате аварии автомобилей."
            />
            <ServiceCard 
              icon="Battery" 
              title="Запуск двигателя"
              description="Запуск двигателя при разряженном аккумуляторе в любых погодных условиях."
            />
            <ServiceCard 
              icon="Map" 
              title="Междугородняя эвакуация"
              description="Транспортировка автомобилей между городами на дальние расстояния."
            />
          </div>
        </div>
      </section>
      
      {/* Advantages Section */}
      <section id="advantages" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы делаем всё возможное, чтобы наши клиенты получили быструю и качественную помощь
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Clock" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Оперативность</h3>
                <p className="text-muted-foreground">Среднее время прибытия эвакуатора 15-30 минут в зависимости от района города.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="DollarSign" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Выгодные цены</h3>
                <p className="text-muted-foreground">Доступные цены на эвакуацию без скрытых платежей и дополнительных наценок.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Award" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Опыт и профессионализм</h3>
                <p className="text-muted-foreground">Наши водители имеют большой опыт работы и все необходимые сертификаты.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Truck" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Современный автопарк</h3>
                <p className="text-muted-foreground">Используем только надежные и современные эвакуаторы для безопасной транспортировки.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Map" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Работаем везде</h3>
                <p className="text-muted-foreground">Оказываем услуги эвакуации по всему городу и области, а также между городами.</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Shield" className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Гарантия сохранности</h3>
                <p className="text-muted-foreground">Гарантируем полную сохранность вашего автомобиля при погрузке и транспортировке.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна эвакуация автомобиля?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Закажите эвакуатор прямо сейчас и мы оперативно приедем на помощь
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Icon name="Phone" className="mr-2 h-5 w-5" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Вызвать эвакуатор
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Truck" className="h-6 w-6 text-primary" />
                <span className="font-bold text-xl">АвтоЭвакуатор</span>
              </div>
              <p className="text-gray-400">
                Надежная и быстрая эвакуация автомобилей в любое время суток. Работаем 24/7 по всему городу и области.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Контактная информация</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 text-primary mr-2" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-primary mr-2" />
                  <span>info@autoevac.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mr-2" />
                  <span>г. Москва, ул. Примерная, д. 123</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Режим работы</h3>
              <p className="mb-2">Работаем круглосуточно</p>
              <p className="text-gray-400">Без выходных и праздников</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Icon name="Twitter" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} АвтоЭвакуатор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
