# backend/my_app/views.py
from rest_framework import viewsets
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent
from .serializers import LeadSerializer, NavLinkSerializer, ServiceSerializer, ServiceImageSerializer, WebsiteContentSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer

class NavLinkViewSet(viewsets.ModelViewSet):
    queryset = NavLink.objects.all().order_by('order') # Order by 'order' field for consistency
    serializer_class = NavLinkSerializer

class ServiceViewSet(viewsets.ModelViewSet):
    queryset = Service.objects.all().order_by('order') # Order by 'order' field for consistency
    serializer_class = ServiceSerializer

class ServiceImageViewSet(viewsets.ModelViewSet):
    queryset = ServiceImage.objects.all()
    serializer_class = ServiceImageSerializer

class WebsiteContentViewSet(viewsets.ModelViewSet):
    queryset = WebsiteContent.objects.all()
    serializer_class = WebsiteContentSerializer
    # You might want to override retrieve to fetch by 'key' instead of 'id' later
    # For now, ModelViewSet defaults to ID-based retrieval