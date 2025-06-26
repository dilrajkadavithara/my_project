# backend/my_app/admin.py
from django.contrib import admin
from .models import Lead, NavLink, Service, ServiceImage, WebsiteContent

# Register your models here.
admin.site.register(Lead)
admin.site.register(NavLink)
admin.site.register(Service)
admin.site.register(ServiceImage)
admin.site.register(WebsiteContent)