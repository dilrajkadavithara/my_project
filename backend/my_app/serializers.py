# backend/my_app/serializers.py
from rest_framework import serializers
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__' # Include all fields from the Lead model

class NavLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavLink
        fields = '__all__'

class ServiceImageSerializer(serializers.ModelSerializer):
    # We might want the actual image URL instead of just the path
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = ServiceImage
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    images = ServiceImageSerializer(many=True, read_only=True) # Nested serializer for related images

    class Meta:
        model = Service
        fields = '__all__'

class WebsiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteContent
        fields = '__all__'