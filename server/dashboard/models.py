from django.db import models
from core.models import User

class Collection(models.Model):
    PENDING = 'P'
    IN_PRODUCTION = 'IP'
    ISSUED = 'I'
    
    STATUS_CHOICES = [
        (PENDING, 'Pending'),
        (IN_PRODUCTION, 'In Production'),
        (ISSUED, 'Issued'),
    ]
    
    name = models.CharField(max_length=255)
    status = models.CharField(max_length=2, choices=STATUS_CHOICES, default=PENDING)
    expected_release_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class Card(models.Model):
    CATEGORY_CHOICES = [
        ('S', 'Standard'),
        ('P', 'Premium'),
        ('E', 'Exclusive'),
    ]
    
    RARITY_CHOICES = [
        ('C', 'Common'),
        ('U', 'Uncommon'),
        ('R', 'Rare'),
        ('E', 'Epic'),
        ('L', 'Legendary'),
    ]
    
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=1, choices=CATEGORY_CHOICES)
    rarity = models.CharField(max_length=1, choices=RARITY_CHOICES)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE, related_name='cards')
    price = models.DecimalField(max_digits=10, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f"{self.name} ({self.get_rarity_display()})"

class Order(models.Model):
    PROCESSING = 'P'
    COMPLETED = 'C'
    CANCELLED = 'X'
    
    STATUS_CHOICES = [
        (PROCESSING, 'Processing'),
        (COMPLETED, 'Completed'),
        (CANCELLED, 'Cancelled'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    status = models.CharField(max_length=1, choices=STATUS_CHOICES, default=PROCESSING)
    order_value = models.DecimalField(max_digits=12, decimal_places=2)
    order_date = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    cards = models.ManyToManyField(Card, through='OrderItem')
    
    def __str__(self):
        return f"Order #{self.id} - {self.user.username}"

class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    card = models.ForeignKey(Card, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price_at_purchase = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.quantity}x {self.card.name} in Order #{self.order.id}"