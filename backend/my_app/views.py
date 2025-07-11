# backend/my_app/views.py
from rest_framework import viewsets
# --- NEW IMPORTS ---
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent, HeroSlide # <--- Import HeroSlide
from .serializers import LeadSerializer, NavLinkSerializer, ServiceSerializer, ServiceImageSerializer, WebsiteContentSerializer, HeroSlideSerializer # <--- Import HeroSlideSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class NavLinkViewSet(viewsets.ModelViewSet):
    queryset = NavLink.objects.all().order_by('order')
    serializer_class = NavLinkSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by('order')
    serializer_class = ServiceSerializer

class ServiceImageViewSet(viewsets.ModelViewSet):
    queryset = ServiceImage.objects.all()
    serializer_class = ServiceImageSerializer

class WebsiteContentViewSet(viewsets.ModelViewSet):
    queryset = WebsiteContent.objects.all()
    serializer_class = WebsiteContentSerializer
    # For now, ModelViewSet defaults to ID-based retrieval for WebsiteContent

# NEW: HeroSlideViewSet
class HeroSlideViewSet(viewsets.ModelViewSet):
    queryset = HeroSlide.objects.all().order_by('order') # Order by 'order' field
    serializer_class = HeroSlideSerializer