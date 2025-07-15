from django.contrib import admin
from .models import Collection, Card, Order, OrderItem

admin.site.register(Collection)
admin.site.register(Card)
admin.site.register(Order)
admin.site.register(OrderItem)