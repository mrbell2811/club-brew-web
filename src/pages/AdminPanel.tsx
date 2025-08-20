import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { mockMembers, mockBeverages, formatPrice } from '@/data/mockData';
import { 
  ArrowLeft, 
  Users, 
  Wine, 
  BarChart3, 
  Settings, 
  Download,
  Plus,
  Edit,
  Trash2,
  TrendingUp
} from 'lucide-react';

export const AdminPanel: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const totalMembers = mockMembers.filter(m => m.isActive).length;
  const totalBeverages = mockBeverages.filter(b => b.isActive).length;
  const totalRevenue = mockMembers.reduce((sum, member) => sum + (member.totalPurchases || 0) * 4.5, 0);

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
              Admin Panel
            </h1>
            <p className="text-xl text-muted-foreground">
              Manage your beverage tracking system
            </p>
          </div>
          
          <Button
            variant="outline"
            className="btn-touch"
          >
            <Download className="w-5 h-5 mr-2" />
            Export Data
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 h-14">
            <TabsTrigger value="overview" className="text-lg">
              <BarChart3 className="w-5 h-5 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="members" className="text-lg">
              <Users className="w-5 h-5 mr-2" />
              Members
            </TabsTrigger>
            <TabsTrigger value="beverages" className="text-lg">
              <Wine className="w-5 h-5 mr-2" />
              Beverages
            </TabsTrigger>
            <TabsTrigger value="settings" className="text-lg">
              <Settings className="w-5 h-5 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-subtle border-2 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Active Members</h3>
                    <div className="text-3xl font-bold text-primary">{totalMembers}</div>
                  </div>
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span>+2 this month</span>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-subtle border-2 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Available Drinks</h3>
                    <div className="text-3xl font-bold text-primary">{totalBeverages}</div>
                  </div>
                  <Wine className="w-10 h-10 text-primary" />
                </div>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span>+3 this month</span>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-subtle border-2 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Total Revenue</h3>
                    <div className="text-3xl font-bold text-primary">{formatPrice(totalRevenue)}</div>
                  </div>
                  <BarChart3 className="w-10 h-10 text-primary" />
                </div>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                  <span>+12% this month</span>
                </div>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="p-8 bg-gradient-subtle border-2 shadow-soft">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Actions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button className="h-16 flex flex-col gap-2 btn-touch bg-gradient-primary hover:bg-primary-hover">
                  <Plus className="w-6 h-6" />
                  Add Member
                </Button>
                <Button className="h-16 flex flex-col gap-2 btn-touch bg-gradient-primary hover:bg-primary-hover">
                  <Wine className="w-6 h-6" />
                  Add Beverage
                </Button>
                <Button className="h-16 flex flex-col gap-2 btn-touch bg-gradient-primary hover:bg-primary-hover">
                  <Download className="w-6 h-6" />
                  Export Report
                </Button>
                <Button className="h-16 flex flex-col gap-2 btn-touch bg-gradient-primary hover:bg-primary-hover">
                  <Settings className="w-6 h-6" />
                  System Settings
                </Button>
              </div>
            </Card>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-foreground">Member Management</h3>
              <Button className="btn-touch bg-gradient-primary hover:bg-primary-hover">
                <Plus className="w-5 h-5 mr-2" />
                Add Member
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockMembers.slice(0, 10).map((member) => (
                <Card key={member.id} className="p-4 bg-gradient-subtle border shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                        <span className="text-primary font-semibold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{member.name}</h4>
                        <p className="text-sm text-muted-foreground">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">
                        {member.totalPurchases} purchases
                      </Badge>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Beverages Tab */}
          <TabsContent value="beverages" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold text-foreground">Beverage Management</h3>
              <Button className="btn-touch bg-gradient-primary hover:bg-primary-hover">
                <Plus className="w-5 h-5 mr-2" />
                Add Beverage
              </Button>
            </div>
            
            <div className="grid gap-4">
              {mockBeverages.slice(0, 10).map((beverage) => (
                <Card key={beverage.id} className="p-4 bg-gradient-subtle border shadow-soft">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">🍺</div>
                      <div>
                        <h4 className="font-semibold text-foreground">{beverage.name}</h4>
                        <p className="text-sm text-muted-foreground">{beverage.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="secondary">{beverage.category}</Badge>
                      <div className="text-lg font-bold text-primary">
                        {formatPrice(beverage.price)}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">System Settings</h3>
            
            <div className="grid gap-6">
              <Card className="p-6 bg-gradient-subtle border shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-4">General Settings</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Enable Notifications</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Auto-backup</span>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Display Language</span>
                    <Button variant="outline" size="sm">English</Button>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 bg-gradient-subtle border shadow-soft">
                <h4 className="text-lg font-semibold text-foreground mb-4">Data Management</h4>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-5 h-5 mr-2" />
                    Export All Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="w-5 h-5 mr-2" />
                    Database Settings
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};