import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Member } from '@/types';
import { MemberCard } from '@/components/MemberCard';
import { mockMembers } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeft, Search, Users } from 'lucide-react';

export const MemberSelection: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredMembers = mockMembers.filter(member =>
    member.isActive &&
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMemberSelect = (member: Member) => {
    navigate(`/beverages/${member.id}`, { state: { member } });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="btn-touch"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Select Member
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose your name to start ordering
            </p>
          </div>
          
          <div className="w-32" /> {/* Spacer for alignment */}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search members..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 h-14 text-lg rounded-xl border-2 focus:border-primary transition-smooth"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-light rounded-lg">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">
              {filteredMembers.length} active members
            </span>
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 animate-fade-in">
          {filteredMembers.map((member, index) => (
            <div
              key={member.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <MemberCard
                member={member}
                onClick={handleMemberSelect}
              />
            </div>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <div className="text-center py-16">
            <Users className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No members found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search term
            </p>
          </div>
        )}
      </div>
    </div>
  );
};