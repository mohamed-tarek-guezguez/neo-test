from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.core.cache import cache
from .models import Collection, Card, Order
from .serializers import CollectionSerializer, CardSerializer, OrderSerializer
from core.permissions import IsSalesmanUser, IsAdminUser, IsSalesmanOrAdminUser

class CollectionViewSet(viewsets.ModelViewSet):
    queryset = Collection.objects.all()
    serializer_class = CollectionSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes = [IsAdminUser] 

class CardViewSet(viewsets.ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes = [IsSalesmanOrAdminUser]

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    # permission_classes = [IsAuthenticated]
    permission_classes = [IsSalesmanUser]

class DashboardKPIsView(generics.GenericAPIView):
    # permission_classes = [IsAuthenticated]
    permission_classes = [IsSalesmanOrAdminUser]
    
    def get(self, request):
        cache_key = 'dashboard_kpis'
        data = cache.get(cache_key)
        
        if not data:
            # Calculate KPIs
            total_collections = Collection.objects.count()
            total_cards = Card.objects.count()
            total_orders = Order.objects.count()
            total_sales = sum(order.order_value for order in Order.objects.filter(status='C'))
            
            data = {
                'total_collections': total_collections,
                'total_cards': total_cards,
                'total_orders': total_orders,
                'total_sales': float(total_sales),
            }
            
            # Cache for 10 minutes
            cache.set(cache_key, data, 600)
        
        return Response(data)