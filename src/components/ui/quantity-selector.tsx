import React from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onQuantityChange,
  min = 1,
  max = 20,
  className
}) => {
  const decreaseQuantity = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={decreaseQuantity}
        disabled={quantity <= min}
        className="btn-touch w-16 h-16 rounded-xl border-2 hover:border-primary hover:bg-primary-light transition-smooth"
      >
        <Minus className="h-6 w-6" />
      </Button>
      
      <div className="flex items-center justify-center min-w-[120px]">
        <span className="text-4xl font-bold text-primary">
          {quantity}
        </span>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={increaseQuantity}
        disabled={quantity >= max}
        className="btn-touch w-16 h-16 rounded-xl border-2 hover:border-primary hover:bg-primary-light transition-smooth"
      >
        <Plus className="h-6 w-6" />
      </Button>
    </div>
  );
};