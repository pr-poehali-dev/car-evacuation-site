
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">АвтоЭвакуатор</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#price" className="font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          
          <div className="hidden md:flex">
            <Button>
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Заказать эвакуатор
            </Button>
          </div>
          
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
        
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            <a href="#" className="font-medium hover:text-primary transition-colors">Главная</a>
            <a href="#services" className="font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#advantages" className="font-medium hover:text-primary transition-colors">Преимущества</a>
            <a href="#price" className="font-medium hover:text-primary transition-colors">Цены</a>
            <a href="#contacts" className="font-medium hover:text-primary transition-colors">Контакты</a>
            <Button className="w-full">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Заказать эвакуатор
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
