from rest_framework.permissions import BasePermission

class IsSalesmanUser(BasePermission):
    """Allow access only to users with is_salesman=True"""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_salesman

class IsAdminUser(BasePermission):
    """Allow access only to users with is_admin=True"""
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.is_admin

class IsSalesmanOrAdminUser(BasePermission):
    """Allow access to both salesmen and admin users"""
    def has_permission(self, request, view):
        return request.user.is_authenticated and (request.user.is_salesman or request.user.is_admin)