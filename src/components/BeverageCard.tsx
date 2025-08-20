import React from 'react';
import { Beverage } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { formatPrice, getCategoryIcon } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface BeverageCardProps {
  beverage: Beverage;
  onClick: (beverage: Beverage) => void;
  className?: string;
}

export const BeverageCard: React.FC<BeverageCardProps> = ({
  beverage,
  onClick,
  className
}) => {
  return (
    <Card
      className={cn(
        "btn-touch cursor-pointer p-6 card-hover bg-gradient-subtle border-2 hover:border-primary hover:shadow-glow",
        "flex flex-col gap-4 min-h-[180px] justify-between",
        "active:scale-95 transition-smooth",
        className
      )}
      onClick={() => onClick(beverage)}
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between">
          <div className="text-3xl">
            {getCategoryIcon(beverage.category)}
          </div>
          <Badge 
            variant="secondary" 
            className="text-xs bg-primary-light text-primary-foreground"
          >
            {beverage.category}
          </Badge>
        </div>
        
        <div>
          <h3 className="font-semibold text-xl text-foreground leading-tight">
            {beverage.name}
          </h3>
          {beverage.description && (
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {beverage.description}
            </p>
          )}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">
          {formatPrice(beverage.price)}
        </span>
      </div>
    </Card>
  );
};