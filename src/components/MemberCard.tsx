import React from 'react';
import { Member } from '@/types';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface MemberCardProps {
  member: Member;
  onClick: (member: Member) => void;
  className?: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({
  member,
  onClick,
  className
}) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Card
      className={cn(
        "btn-touch cursor-pointer p-6 card-hover bg-gradient-subtle border-2 hover:border-primary hover:shadow-glow",
        "flex flex-col items-center gap-4 min-h-[160px] justify-center",
        "active:scale-95 transition-smooth",
        className
      )}
      onClick={() => onClick(member)}
    >
      <Avatar className="w-16 h-16 ring-2 ring-primary-light">
        <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      
      <div className="text-center">
        <h3 className="font-semibold text-lg text-foreground leading-tight">
          {member.name}
        </h3>
        {member.totalPurchases && (
          <p className="text-sm text-muted-foreground mt-1">
            {member.totalPurchases} purchases
          </p>
        )}
      </div>
    </Card>
  );
};