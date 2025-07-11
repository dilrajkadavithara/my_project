# backend/my_project_backend/urls.py
from django.contrib import admin
from django.urls import path, include

# --- NEW IMPORTS FOR SERVING MEDIA FILES IN DEVELOPMENT ---
from django.conf import settings
from django.conf.urls.static import static
# --- END NEW IMPORTS ---

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('my_app.urls')),
]

# --- ADDED FOR SERVING MEDIA FILES IN DEVELOPMENT ONLY ---
# This serves files uploaded by users (e.g., Service Images) during development.
# In production, these files would be served by a dedicated web server like Nginx
# or a cloud storage service like AWS S3.
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# --- END ADDED ---