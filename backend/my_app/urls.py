# backend/my_app/urls.py
from rest_framework.routers import DefaultRouter
from .views import LeadViewSet, NavLinkViewSet, ServiceViewSet, ServiceImageViewSet, WebsiteContentViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'leads', LeadViewSet)
router.register(r'navlinks', NavLinkViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'service-images', ServiceImageViewSet)
router.register(r'website-content', WebsiteContentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]