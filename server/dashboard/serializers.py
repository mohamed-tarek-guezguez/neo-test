from rest_framework import serializers
from .models import Collection, Card, Order, OrderItem
from core.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_salesman', 'is_admin']

class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'

class CardSerializer(serializers.ModelSerializer):
    collection = CollectionSerializer(read_only=True)
    
    class Meta:
        model = Card
        fields = '__all__'

class OrderItemSerializer(serializers.ModelSerializer):
    card = CardSerializer(read_only=True)
    
    class Meta:
        model = OrderItem
        fields = ['id', 'card', 'quantity', 'price_at_purchase']

class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    items = OrderItemSerializer(source='orderitem_set', many=True, read_only=True)
    
    class Meta:
        model = Order
        fields = ['id', 'user', 'status', 'order_value', 'order_date', 'updated_at', 'items']