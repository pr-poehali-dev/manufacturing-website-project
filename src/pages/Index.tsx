import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-body">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary font-sans">ПромТех</div>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'products', label: 'Продукция' },
                { id: 'gallery', label: 'Производство' },
                { id: 'contacts', label: 'Контакты' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('contacts')} size="sm">
              Связаться с нами
            </Button>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary to-secondary/80">
          <div className="container mx-auto px-6 py-20">
            <div className="max-w-3xl text-white animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-sans">
                Производство промышленного оборудования
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Высокотехнологичные решения для современной промышленности. Качество, надежность, инновации.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('products')} className="bg-primary hover:bg-primary/90">
                  Наша продукция
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="bg-white/10 text-white border-white hover:bg-white/20">
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" className="text-white" size={32} />
          </div>
        </section>

        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-sans text-secondary">О компании</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Лидер производственных технологий</h3>
                <p className="text-muted-foreground mb-4">
                  ПромТех — ведущий производитель промышленного оборудования с 25-летним опытом работы на рынке. 
                  Мы специализируемся на разработке и производстве высокоточных станков, автоматизированных 
                  производственных линий и технологического оборудования.
                </p>
                <p className="text-muted-foreground mb-6">
                  Наша продукция используется на крупнейших предприятиях машиностроения, металлообработки 
                  и обрабатывающей промышленности по всей стране.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">лет на рынке</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">500+</div>
                    <div className="text-sm text-muted-foreground">клиентов</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-2">98%</div>
                    <div className="text-sm text-muted-foreground">гарантия качества</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon name="Award" className="mx-auto mb-4 text-primary" size={48} />
                    <h4 className="font-semibold mb-2">Качество</h4>
                    <p className="text-sm text-muted-foreground">Сертифицированное производство по международным стандартам</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon name="Users" className="mx-auto mb-4 text-primary" size={48} />
                    <h4 className="font-semibold mb-2">Команда</h4>
                    <p className="text-sm text-muted-foreground">Высококвалифицированные специалисты</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon name="Zap" className="mx-auto mb-4 text-primary" size={48} />
                    <h4 className="font-semibold mb-2">Инновации</h4>
                    <p className="text-sm text-muted-foreground">Собственное конструкторское бюро</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Icon name="Shield" className="mx-auto mb-4 text-primary" size={48} />
                    <h4 className="font-semibold mb-2">Надежность</h4>
                    <p className="text-sm text-muted-foreground">Расширенная гарантия на все изделия</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-sans text-secondary">Наша продукция</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Токарные станки с ЧПУ',
                  description: 'Высокоточные токарные станки для обработки деталей любой сложности',
                  icon: 'Settings',
                  features: ['Точность до 0.001 мм', 'Автоматизированное управление', 'Высокая производительность']
                },
                {
                  title: 'Фрезерные центры',
                  description: 'Универсальные фрезерные обрабатывающие центры с многоосевой обработкой',
                  icon: 'Box',
                  features: ['5-осевая обработка', 'Быстрая переналадка', 'Широкий диапазон материалов']
                },
                {
                  title: 'Производственные линии',
                  description: 'Автоматизированные линии для серийного производства',
                  icon: 'Factory',
                  features: ['Полная автоматизация', 'Интеграция с ERP', 'Минимальное участие персонала']
                }
              ].map((product, index) => (
                <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in bg-white">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon name={product.icon as any} className="text-primary" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-4 font-sans text-secondary">Наше производство</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Современное высокотехнологичное производство с автоматизированными линиями и передовым оборудованием
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  image: 'https://cdn.poehali.dev/projects/147ec85c-67dd-4b82-ba60-374cf73a28ec/files/aa159970-0149-460f-83be-eb196b4f0123.jpg',
                  title: 'Производственный цех',
                  description: 'Современные автоматизированные линии'
                },
                {
                  image: 'https://cdn.poehali.dev/projects/147ec85c-67dd-4b82-ba60-374cf73a28ec/files/723e0585-6ef6-4443-b918-deca2aa52f83.jpg',
                  title: 'Высокоточное оборудование',
                  description: 'ЧПУ станки и обрабатывающие центры'
                },
                {
                  image: 'https://cdn.poehali.dev/projects/147ec85c-67dd-4b82-ba60-374cf73a28ec/files/f722b3ed-c685-4177-a038-37e390411c7a.jpg',
                  title: 'Складской комплекс',
                  description: 'Организованное хранение продукции'
                }
              ].map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 font-sans text-secondary">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="animate-fade-in">
                <h3 className="text-2xl font-semibold mb-6">Свяжитесь с нами</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Адрес</div>
                      <div className="text-muted-foreground">г. Москва, ул. Промышленная, д. 45</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Телефон</div>
                      <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <div className="text-muted-foreground">info@promtech.ru</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Режим работы</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Отправить заявку</h3>
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы свяжемся с вами в ближайшее время.'); }}>
                    <div>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" required />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" required />
                    </div>
                    <div>
                      <Textarea placeholder="Ваше сообщение" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full">Отправить заявку</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold font-sans">ПромТех</div>
            <div className="text-sm text-white/70">
              © 2024 ПромТех. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
