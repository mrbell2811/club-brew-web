import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { Beverage, Member } from '@/types';
import { QuantitySelector } from '@/components/ui/quantity-selector';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice, getCategoryIcon } from '@/data/mockData';
import { ArrowLeft, ShoppingCart, User, Check } from 'lucide-react';

export const QuantitySelection: React.FC = () => {
  const navigate = useNavigate();
  const { memberId, beverageId } = useParams();
  const location = useLocation();
  const member = location.state?.member as Member;
  const beverage = location.state?.beverage as Beverage;
  
  const [quantity, setQuantity] = useState(1);
  
  if (!member || !beverage) {
    navigate('/members');
    return null;
  }

  const totalPrice = beverage.price * quantity;

  const handleConfirmOrder = () => {
    navigate('/success', {
      state: {
        member,
        beverage,
        quantity,
        totalPrice,
        timestamp: new Date()
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => navigate(`/beverages/${member.id}`, { state: { member } })}
            className="btn-touch"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Beverages
          </Button>
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <User className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold text-primary">
                {member.name}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-foreground">
              Select Quantity
            </h1>
          </div>
          
          <div className="w-32" /> {/* Spacer for alignment */}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Beverage Details */}
          <Card className="p-8 bg-gradient-subtle border-2 shadow-medium">
            <div className="text-center">
              <div className="text-6xl mb-4">
                {getCategoryIcon(beverage.category)}
              </div>
              
              <Badge 
                variant="secondary" 
                className="mb-4 bg-primary-light text-primary-foreground"
              >
                {beverage.category}
              </Badge>
              
              <h2 className="text-3xl font-bold text-foreground mb-2">
                {beverage.name}
              </h2>
              
              {beverage.description && (
                <p className="text-muted-foreground mb-4 text-lg">
                  {beverage.description}
                </p>
              )}
              
              <div className="text-2xl font-bold text-primary">
                {formatPrice(beverage.price)} per unit
              </div>
            </div>
          </Card>

          {/* Quantity Selection */}
          <Card className="p-8 bg-gradient-subtle border-2 shadow-medium">
            <div className="text-center space-y-8">
              <h3 className="text-2xl font-semibold text-foreground">
                How many would you like?
              </h3>
              
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
                className="justify-center"
              />
              
              {/* Total Price */}
              <div className="p-6 bg-primary-light rounded-xl">
                <div className="text-lg text-primary-foreground mb-2">
                  Total Amount
                </div>
                <div className="text-4xl font-bold text-primary">
                  {formatPrice(totalPrice)}
                </div>
                <div className="text-sm text-primary-foreground/80 mt-1">
                  {quantity} × {formatPrice(beverage.price)}
                </div>
              </div>
              
              {/* Confirm Button */}
              <Button
                onClick={handleConfirmOrder}
                size="lg"
                className="w-full h-16 text-xl font-semibold bg-gradient-primary hover:bg-primary-hover transition-smooth btn-touch shadow-medium hover:shadow-glow"
              >
                <Check className="w-6 h-6 mr-3" />
                Confirm Order
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};