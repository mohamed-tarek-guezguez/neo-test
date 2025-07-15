from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import routers, permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from core.views import UserProfileView

from dashboard.views import CollectionViewSet, CardViewSet, OrderViewSet, DashboardKPIsView

# API info for Swagger
api_info = openapi.Info(
    title="Sales Analytics Dashboard API",
    default_version='v1',
    description="API documentation for Sales Analytics Dashboard",
    terms_of_service="https://www.example.com/terms/",
    contact=openapi.Contact(email="contact@example.com"),
    license=openapi.License(name="BSD License"),
)

# Router for API endpoints
router = routers.DefaultRouter()
router.register(r'collections', CollectionViewSet, basename='collection')
router.register(r'cards', CardViewSet, basename='card')
router.register(r'orders', OrderViewSet, basename='order')

# Schema view for Swagger/OpenAPI
schema_view = get_schema_view(
    api_info,
    public=True,
    permission_classes=(permissions.AllowAny,),
    authentication_classes=[],  # explicitly say no session auth
)

# URL patterns for the project
urlpatterns = [
    # Admin
    path('admin/', admin.site.urls),
    
    # API endpoints
    path('api/', include(router.urls)),
    path('api/dashboard/kpis/', DashboardKPIsView.as_view(), name='dashboard-kpis'),
    
    # Authentication
    path('api/auth/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/auth/profile/', UserProfileView.as_view(), name='user-profile'),
    
    # Documentation
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    re_path(r'^docs(?P<format>\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
]