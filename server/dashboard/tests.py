from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.core.cache import cache
from core.models import User
from dashboard.models import Collection, Card, Order

class DashboardAPITests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser',
            password='testpass123',
            is_salesman=True
        )
        self.admin = User.objects.create_user(
            username='admin',
            password='adminpass',
            is_admin=True
        )
        
        self.collection = Collection.objects.create(
            name='Summer Collection',
            status='P',
            expected_release_date='2023-12-31'
        )
        
        self.card = Card.objects.create(
            name='Golden Card',
            category='P',
            rarity='L',
            collection=self.collection,
            price=99.99
        )
        
        self.order = Order.objects.create(
            user=self.user,
            status='C',
            order_value=199.98
        )
        
        self.client.force_authenticate(user=self.user)
    
    def test_get_kpis(self):
        url = reverse('dashboard-kpis')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('total_collections', response.data)
        self.assertIn('total_cards', response.data)
        self.assertIn('total_orders', response.data)
        self.assertIn('total_sales', response.data)
        
        # Test caching
        cache_key = 'dashboard_kpis'
        cached_data = cache.get(cache_key)
        self.assertIsNotNone(cached_data)
    
    def test_collection_list(self):
        url = reverse('collection-list')
        response = self.client.get(url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Summer Collection')
    
