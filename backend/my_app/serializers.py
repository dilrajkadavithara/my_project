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
    # This field configuration ensures that when the serializer
    # processes an image, it will provide its absolute URL.
    # This relies on Django's MEDIA_URL setting and the request context.
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = ServiceImage
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    # Nested serializer for related images
    # The 'images' here matches the related_name='images' in ServiceImage model
    images = ServiceImageSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = '__all__'

class WebsiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteContent
        fields = '__all__'