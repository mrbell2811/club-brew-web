import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { formatPrice, getCategoryIcon } from '@/data/mockData';
import { CheckCircle, Home, ShoppingCart, User } from 'lucide-react';

export const SuccessConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [countdown, setCountdown] = useState(5);
  
  const { member, beverage, quantity, totalPrice, timestamp } = location.state || {};

  useEffect(() => {
    if (!member || !beverage) {
      navigate('/');
      return;
    }

    // Auto-redirect countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, member, beverage]);

  if (!member || !beverage) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-scale-in">
          {/* Success Icon */}
          <div className="mb-6 animate-pulse-glow">
            <CheckCircle className="w-24 h-24 text-success mx-auto" />
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Order Confirmed!
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Your purchase has been recorded successfully
          </p>
        </div>

        {/* Order Details */}
        <Card className="p-8 bg-gradient-subtle border-2 shadow-strong mb-8 animate-fade-in">
          <div className="space-y-6">
            {/* Member Info */}
            <div className="flex items-center gap-4">
              <User className="w-6 h-6 text-primary" />
              <div>
                <div className="text-sm text-muted-foreground">Member</div>
                <div className="text-xl font-semibold text-foreground">
                  {member.name}
                </div>
              </div>
            </div>
            
            {/* Beverage Info */}
            <div className="flex items-center gap-4">
              <div className="text-3xl">
                {getCategoryIcon(beverage.category)}
              </div>
              <div className="flex-1">
                <div className="text-xl font-semibold text-foreground">
                  {beverage.name}
                </div>
                <div className="text-muted-foreground">
                  {beverage.description}
                </div>
              </div>
            </div>
            
            {/* Quantity and Price */}
            <div className="border-t pt-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-muted-foreground">
                  Quantity: <span className="font-semibold text-foreground">{quantity}</span>
                </span>
                <span className="text-muted-foreground">
                  Unit Price: <span className="font-semibold text-foreground">{formatPrice(beverage.price)}</span>
                </span>
              </div>
              
              <div className="flex justify-between items-center mt-4 pt-4 border-t">
                <span className="text-xl font-semibold text-foreground">
                  Total Amount:
                </span>
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            </div>
            
            {/* Timestamp */}
            <div className="text-center text-sm text-muted-foreground">
              Order placed at {new Date(timestamp).toLocaleString()}
            </div>
          </div>
        </Card>

        {/* Auto-redirect Notice */}
        <Card className="p-6 bg-primary-light border-primary text-center animate-fade-in">
          <p className="text-primary-foreground mb-4">
            Returning to home screen in <span className="font-bold text-2xl">{countdown}</span> seconds
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="bg-white text-primary hover:bg-gray-50"
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home Now
            </Button>
            
            <Button
              variant="outline"
              onClick={() => navigate('/members')}
              className="bg-white text-primary hover:bg-gray-50"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              New Order
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};