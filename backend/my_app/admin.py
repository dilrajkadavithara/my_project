# backend/my_app/admin.py
from django.contrib import admin
# --- NEW IMPORT ---
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent, HeroSlide # <--- Import HeroSlide

# Register your models here.
admin.site.register(Lead)
admin.site.register(NavLink)
admin.site.register(Service)

# Revert ServiceImageAdmin to default registration (unless you had other specific changes)
class ServiceImageAdmin(admin.ModelAdmin):
    list_display = ('id', 'service', 'image', 'is_thumbnail', 'alt_text')
    list_filter = ('service', 'is_thumbnail')
    search_fields = ('service__title', 'alt_text')
admin.site.register(ServiceImage, ServiceImageAdmin)

# NEW: Register HeroSlide model
class HeroSlideAdmin(admin.ModelAdmin):
    list_display = ('heading', 'order', 'is_active', 'image', 'updated_at')
    list_filter = ('is_active',)
    search_fields = ('heading', 'sub_heading', 'tagline')
    ordering = ('order',)
admin.site.register(HeroSlide, HeroSlideAdmin) # <--- ADDED THIS LINE

# Ensure WebsiteContent is just registered by default - no custom admin for it right now
# REMOVED: admin.site.unregister(WebsiteContent)
# REMOVED: custom WebsiteContentAdmin class
admin.site.register(WebsiteContent) # <--- Ensure ONLY this line registers WebsiteContent