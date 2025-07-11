# backend/my_app/urls.py
from rest_framework.routers import DefaultRouter
# --- NEW IMPORT ---
from .views import LeadViewSet, NavLinkViewSet, ServiceViewSet, ServiceImageViewSet, WebsiteContentViewSet, HeroSlideViewSet # <--- Import HeroSlideViewSet
from django.urls import path, include

router = DefaultRouter()
router.register(r'leads', LeadViewSet)
router.register(r'navlinks', NavLinkViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'service-images', ServiceImageViewSet)
router.register(r'website-content', WebsiteContentViewSet)
router.register(r'heroslides', HeroSlideViewSet) # <--- NEW: Register HeroSlideViewSet

urlpatterns = [
    path('', include(router.urls)),
]