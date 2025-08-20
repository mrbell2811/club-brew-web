import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Wine, BarChart3, Settings, ChevronRight, Coffee } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Users,
      title: 'Member Management',
      description: '20 active club members with purchase tracking',
      color: 'text-blue-500'
    },
    {
      icon: Wine,
      title: 'Beverage Catalog',
      description: 'Wide selection of drinks with pricing and categories',
      color: 'text-purple-500'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Track consumption patterns and generate reports',
      color: 'text-green-500'
    },
    {
      icon: Settings,
      title: 'Admin Panel',
      description: 'Manage members, beverages, and system settings',
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-5" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-light rounded-full">
                <Coffee className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-6xl font-bold text-foreground mb-6 animate-fade-in">
              GetränkeApp
            </h1>
            
            <p className="text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Modern beverage tracking system for your club. Beautifully designed, 
              touch-friendly interface for seamless ordering and management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button
                size="lg"
                onClick={() => navigate('/members')}
                className="h-16 px-8 text-xl font-semibold bg-gradient-primary hover:bg-primary-hover transition-smooth btn-touch shadow-medium hover:shadow-glow"
              >
                Start Ordering
                <ChevronRight className="w-6 h-6 ml-2" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate('/admin')}
                className="h-16 px-8 text-xl font-semibold btn-touch hover:bg-primary-light hover:border-primary transition-smooth"
              >
                <Settings className="w-6 h-6 mr-2" />
                Admin Panel
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center bg-gradient-subtle border-2 shadow-soft hover:shadow-medium transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">20</div>
              <div className="text-muted-foreground">Active Members</div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-subtle border-2 shadow-soft hover:shadow-medium transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">16</div>
              <div className="text-muted-foreground">Available Drinks</div>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-subtle border-2 shadow-soft hover:shadow-medium transition-smooth">
              <div className="text-3xl font-bold text-primary mb-2">€2,456</div>
              <div className="text-muted-foreground">Total Sales</div>
            </Card>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A complete beverage management solution with modern design and powerful features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-6 card-hover bg-gradient-subtle border-2 shadow-soft animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 p-3 rounded-full bg-gray-100 ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-light">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-4">
            Ready to Get Started?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join the modern beverage tracking experience. Quick, intuitive, and designed for your club.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/members')}
              className="h-16 px-8 text-xl font-semibold btn-touch bg-white text-primary hover:bg-gray-50 shadow-medium"
            >
              <Users className="w-6 h-6 mr-2" />
              Start Ordering
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate('/admin')}
              className="h-16 px-8 text-xl font-semibold btn-touch border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              <Settings className="w-6 h-6 mr-2" />
              Admin Access
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
