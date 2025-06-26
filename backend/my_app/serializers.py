# backend/my_app/serializers.py
from rest_framework import serializers
# REMOVED SiteImage import
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = '__all__'

class NavLinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavLink
        fields = '__all__'

class ServiceImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = ServiceImage
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    images = ServiceImageSerializer(many=True, read_only=True)

    class Meta:
        model = Service
        fields = '__all__'

# REMOVED: SiteImageSerializer

# REVISED: WebsiteContentSerializer (removed image_object field as it's gone from model)
class WebsiteContentSerializer(serializers.ModelSerializer):
    # REMOVED: image_object = SiteImageSerializer(read_only=True)
    class Meta:
        model = WebsiteContent
        fields = '__all__' # Now includes content_image directly