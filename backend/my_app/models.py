# backend/my_app/models.py
from django.db import models


class Lead(models.Model):
    name = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=20)
    source = models.CharField(max_length=100, default="Hero Form")
    notes = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name_plural = "Leads"

    def __str__(self):
        return f"Lead from {self.name} ({self.phone_number})"

class Service(models.Model):
    title = models.CharField(max_length=255, unique=True)
    short_description = models.TextField()
    full_description = models.TextField(blank=True, null=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    order = models.IntegerField(default=0) # For display order on landing page
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # SEO Fields for individual service pages/cards
    meta_title = models.CharField(max_length=255, blank=True, null=True)
    meta_description = models.TextField(blank=True, null=True)
    meta_keywords = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        ordering = ['order', 'title']
        verbose_name_plural = "Services"

    def __str__(self):
        return self.title

class ServiceImage(models.Model):
    service = models.ForeignKey(Service, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='service_images/') # Requires Pillow to handle image uploads
    alt_text = models.CharField(max_length=255, blank=True, null=True)
    is_thumbnail = models.BooleanField(default=False, help_text="Set to True for the primary image displayed on service cards.")
    uploaded_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['service', '-is_thumbnail', 'uploaded_at'] # Prioritize thumbnail
        verbose_name_plural = "Service Images"

    def __str__(self):
        return f"Image for {self.service.title} ({self.alt_text or 'No Alt Text'})"

class WebsiteContent(models.Model):
    key = models.CharField(
        max_length=255,
        unique=True,
        help_text="Unique identifier for this content block (e.g., 'hero_main_heading', 'about_us_paragraph_1', 'hero_background_image_desktop', 'contact_us_phone', 'site_meta_title')"
    )
    value = models.TextField(
        help_text="The actual content: text, HTML, or URL for images."
    )
    content_type = models.CharField(
        max_length=50,
        default='text',
        choices=[
            ('text', 'Text'),
            ('html', 'HTML'),         # For rich text content if needed
            ('image_url', 'Image URL'), # For image paths/URLs for hero/about us sections
            ('link', 'Link URL'),     # If 'value' is a URL for a button, etc.
        ],
        help_text="Type of content stored in the 'value' field."
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Website Content"

    def __str__(self):
        return f"{self.key}: {self.value[:50]}..." # Show first 50 chars of value

class NavLink(models.Model):
    text = models.CharField(max_length=100)
    url_path = models.CharField(max_length=255, help_text="e.g., '/', '/about', '/services'")
    order = models.IntegerField(default=0, help_text="Order in which links appear in navigation")
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', 'text']
        verbose_name_plural = "Navigation Links"

    def __str__(self):
        return f"{self.text} ({self.url_path})"