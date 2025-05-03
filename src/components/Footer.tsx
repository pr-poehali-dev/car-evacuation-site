
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Truck" className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">АвтоЭвакуация</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Профессиональная эвакуация автомобилей любой сложности. 
              Наша команда готова помочь вам 24/7.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 text-primary mr-2" />
                <span>г. Москва, ул. Автомобильная, 42</span>
              </div>
              <div className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 text-primary mr-2" />
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 text-primary mr-2" />
                <span>info@auto-evac.ru</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Время работы</h3>
            <p className="mb-2">Ежедневно, круглосуточно</p>
            <div className="flex space-x-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center">
                <Icon name="Facebook" className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center">
                <Icon name="Instagram" className="h-4 w-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center">
                <Icon name="Twitter" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} АвтоЭвакуация. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
