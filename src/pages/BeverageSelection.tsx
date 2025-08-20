import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Beverage, Member } from '@/types';
import { BeverageCard } from '@/components/BeverageCard';
import { mockBeverages } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Search, Wine, User } from 'lucide-react';

export const BeverageSelection: React.FC = () => {
  const navigate = useNavigate();
  const { memberId } = useParams();
  const location = useLocation();
  const member = location.state?.member as Member;
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  const categories = ['all', 'beer', 'wine', 'spirits', 'soft-drinks', 'water', 'coffee'];
  
  const filteredBeverages = mockBeverages.filter(beverage => {
    const matchesSearch = beverage.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || beverage.category === selectedCategory;
    return beverage.isActive && matchesSearch && matchesCategory;
  });

  const handleBeverageSelect = (beverage: Beverage) => {
    if (!member) {
      navigate('/members');
      return;
    }
    navigate(`/quantity/${member.id}/${beverage.id}`, { 
      state: { member, beverage } 
    });
  };

  if (!member) {
    navigate('/members');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/members')}
            className="btn-touch"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Members
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <User className="w-6 h-6 text-primary" />
              <span className="text-xl font-semibold text-primary">
                {member.name}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Choose Beverage
            </h1>
            <p className="text-xl text-muted-foreground">
              Select your preferred drink
            </p>
          </div>
          
          <div className="w-32" /> {/* Spacer for alignment */}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search beverages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary transition-smooth"
              />
            </div>
          </div>
          
          {/* Category Filters */}
          <div className="flex justify-center">
            <div className="flex flex-wrap gap-2 max-w-4xl">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 text-sm font-medium transition-smooth btn-touch ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground hover:bg-primary-hover'
                      : 'hover:bg-primary-light hover:text-primary'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Drinks' : category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-lg">
            <Wine className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              {filteredBeverages.length} available drinks
            </span>
          </div>
        </div>

        {/* Beverages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filteredBeverages.map((beverage, index) => (
            <div
              key={beverage.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <BeverageCard
                beverage={beverage}
                onClick={handleBeverageSelect}
              />
            </div>
          ))}
        </div>

        {filteredBeverages.length === 0 && (
          <div className="text-center py-16">
            <Wine className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No beverages found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search or category filter
            </p>
          </div>
        )}
      </div>
    </div>
  );
};