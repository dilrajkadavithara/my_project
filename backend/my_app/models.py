# backend/my_app/models.py
from django.db import models
from django.utils import timezone # Keep timezone import as it's a standard utility

# REMOVED: SiteImage model

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

# REVISED: WebsiteContent model for direct image upload
class WebsiteContent(models.Model):
    key = models.CharField(
        max_length=255,
        unique=True,
        help_text="Unique identifier for this content block (e.g., 'hero_main_heading', 'about_us_paragraph_1', 'hero_background_image_desktop', 'contact_us_phone', 'site_meta_title')"
    )
    # Value field is used for text, but can be blank if content_image is used
    value = models.TextField(
        blank=True, null=True,
        help_text="The actual content: text or HTML. Optional if an Image File is uploaded."
    )
    # NEW FIELD: Direct ImageField for content type 'image_file'
    content_image = models.ImageField(
        upload_to='website_content_images/', # New upload path for these images
        blank=True, null=True,
        help_text="Upload an image file if 'Content type' is 'Image File'."
    )
    content_type = models.CharField(
        max_length=50,
        default='text',
        choices=[
            ('text', 'Text'),
            ('html', 'HTML'),
            ('image_file', 'Image File'), # <--- NEW CHOICE: for direct image uploads
            ('link', 'Link URL'),
        ],
        help_text="Type of content: Text, HTML, Image File, or Link URL."
    )
    # REMOVED: image_object ForeignKey field from previous version

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Website Content"

    def __str__(self):
        if self.content_type == 'image_file' and self.content_image:
            return f"{self.key}: Image ({self.content_image.name})"
        return f"{self.key}: {self.value[:50]}..." if self.value else f"{self.key}: (No Value)"

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