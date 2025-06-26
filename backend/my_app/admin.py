# backend/my_app/admin.py
from django.contrib import admin
# REMOVED SiteImage import
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent

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

# REVISED: WebsiteContentAdmin (back to simpler or default registration)
# REMOVED: admin.site.unregister(WebsiteContent)
admin.site.register(WebsiteContent) # <--- Keep ONLY this line for WebsiteContent registration