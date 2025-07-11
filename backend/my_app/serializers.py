# backend/my_app/serializers.py
from rest_framework import serializers
# --- NEW IMPORT ---
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent, HeroSlide # <--- Import HeroSlide

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

class WebsiteContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteContent
        fields = '__all__'

# NEW: HeroSlideSerializer
class HeroSlideSerializer(serializers.ModelSerializer):
    # Image field will generate absolute URL
    image = serializers.ImageField(use_url=True)

    class Meta:
        model = HeroSlide
        fields = '__all__' # Include all fields from the HeroSlide model