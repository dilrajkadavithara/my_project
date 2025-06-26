# backend/my_project_backend/urls.py
from django.contrib import admin
from django.urls import path, include # <--- Ensure 'include' is imported

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('my_app.urls')), # <--- Add this line for your API
]