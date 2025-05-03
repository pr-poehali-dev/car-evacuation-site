
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Truck" className="h-8 w-8 text-primary mr-2" />
            <span className="text-xl font-bold text-secondary">АвтоЭвакуация</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-secondary hover:text-primary font-medium">Главная</a>
            <a href="#services" className="text-secondary hover:text-primary font-medium">Услуги</a>
            <a href="#advantages" className="text-secondary hover:text-primary font-medium">Преимущества</a>
            <a href="#contact" className="text-secondary hover:text-primary font-medium">Контакты</a>
            <Button className="bg-primary hover:bg-primary-hover">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Вызвать эвакуатор
            </Button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} className="h-6 w-6" />
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-3">
            <a href="#" className="block text-secondary hover:text-primary font-medium py-2">Главная</a>
            <a href="#services" className="block text-secondary hover:text-primary font-medium py-2">Услуги</a>
            <a href="#advantages" className="block text-secondary hover:text-primary font-medium py-2">Преимущества</a>
            <a href="#contact" className="block text-secondary hover:text-primary font-medium py-2">Контакты</a>
            <Button className="w-full bg-primary hover:bg-primary-hover">
              <Icon name="Phone" className="mr-2 h-4 w-4" />
              Вызвать эвакуатор
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavigationBar;
